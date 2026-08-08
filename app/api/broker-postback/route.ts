import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

/**
 * Broker postback -> Meta Conversions API (server-side).
 *
 * The broker calls this endpoint (server-to-server) when an event happens on
 * THEIR side that the browser pixel can never see:
 *   - registration  -> Meta "CompleteRegistration"
 *   - deposit        -> Meta "Purchase"
 *
 * Expected postback (GET or POST), query params or JSON body:
 *   event   = "registration" | "deposit"   (required)
 *   subid   = the click/sub id we passed to the broker (used as event_id for dedup)
 *   value   = deposit amount               (deposit only, optional)
 *   currency= ISO code, defaults to USD    (deposit only, optional)
 *   fbp     = _fbp cookie value if the broker can echo it back (optional)
 *   fbc     = _fbc cookie value if the broker can echo it back (optional)
 *   email   = hashed or raw email          (optional, improves match)
 *   secret  = shared secret to authenticate the caller (required)
 *
 * Env required:
 *   META_PIXEL_ID          = 1416822353626985
 *   META_CAPI_TOKEN        = Conversions API access token (Events Manager > Settings)
 *   META_POSTBACK_SECRET   = shared secret the broker must send as ?secret=
 *   META_TEST_EVENT_CODE   = (optional) Events Manager test code while validating
 */

const PIXEL_ID = process.env.META_PIXEL_ID;
const CAPI_TOKEN = process.env.META_CAPI_TOKEN;
const POSTBACK_SECRET = process.env.META_POSTBACK_SECRET;
const TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE;

const EVENT_MAP: Record<string, string> = {
  registration: "CompleteRegistration",
  deposit: "Purchase",
};

function sha256(v: string): string {
  return crypto.createHash("sha256").update(v.trim().toLowerCase()).digest("hex");
}

// Already-hashed values are 64-char hex; don't double-hash.
function maybeHash(v?: string | null): string | undefined {
  if (!v) return undefined;
  return /^[a-f0-9]{64}$/i.test(v) ? v.toLowerCase() : sha256(v);
}

async function handle(params: Record<string, string | undefined>, req: NextRequest) {
  if (!PIXEL_ID || !CAPI_TOKEN || !POSTBACK_SECRET) {
    return NextResponse.json(
      { ok: false, error: "server_not_configured" },
      { status: 500 },
    );
  }
  if (params.secret !== POSTBACK_SECRET) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const eventKey = (params.event || "").toLowerCase();
  const eventName = EVENT_MAP[eventKey];
  if (!eventName) {
    return NextResponse.json(
      { ok: false, error: "unknown_event", hint: "use event=registration|deposit" },
      { status: 400 },
    );
  }

  const userData: Record<string, unknown> = {};
  const em = maybeHash(params.email);
  if (em) userData.em = [em];
  if (params.fbp) userData.fbp = params.fbp;
  if (params.fbc) userData.fbc = params.fbc;
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (ip) userData.client_ip_address = ip;
  const ua = req.headers.get("user-agent");
  if (ua) userData.client_user_agent = ua;

  const customData: Record<string, unknown> = {};
  if (eventName === "Purchase") {
    const value = params.value ? Number(params.value) : undefined;
    if (value !== undefined && !Number.isNaN(value)) customData.value = value;
    customData.currency = (params.currency || "USD").toUpperCase();
  }

  const eventPayload: Record<string, unknown> = {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    action_source: "website",
    // subid = the click id we forwarded to the broker; used to dedup + attribute
    event_id: params.subid || crypto.randomUUID(),
    user_data: userData,
  };
  if (Object.keys(customData).length) eventPayload.custom_data = customData;

  const body: Record<string, unknown> = { data: [eventPayload] };
  if (TEST_EVENT_CODE) body.test_event_code = TEST_EVENT_CODE;

  const url = `https://graph.facebook.com/v20.0/${PIXEL_ID}/events?access_token=${CAPI_TOKEN}`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const meta = await res.json().catch(() => ({}));
    if (!res.ok) {
      return NextResponse.json({ ok: false, error: "meta_rejected", meta }, { status: 502 });
    }
    return NextResponse.json({ ok: true, event: eventName, meta });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "capi_request_failed", detail: String(e) },
      { status: 502 },
    );
  }
}

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const params: Record<string, string | undefined> = {};
  sp.forEach((v, k) => (params[k] = v));
  return handle(params, req);
}

export async function POST(req: NextRequest) {
  let params: Record<string, string | undefined> = {};
  const ct = req.headers.get("content-type") || "";
  if (ct.includes("application/json")) {
    params = (await req.json().catch(() => ({}))) as Record<string, string | undefined>;
  } else {
    const form = await req.formData().catch(() => null);
    if (form) form.forEach((v, k) => (params[k] = String(v)));
  }
  // allow query params to override / supplement body
  req.nextUrl.searchParams.forEach((v, k) => (params[k] = v));
  return handle(params, req);
}
