import { NextResponse } from "next/server";

/**
 * POST /api/subscribe
 *
 * Validates an email address and (for now) simply records it server-side.
 * This is a clean stub ready to connect to a real backend / ESP.
 *
 * TO PLUG IN A REAL BACKEND LATER (do NOT commit secrets — use env vars):
 *
 *   // --- Supabase ---
 *   // import { createClient } from "@supabase/supabase-js";
 *   // const supabase = createClient(
 *   //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
 *   //   process.env.SUPABASE_SERVICE_ROLE_KEY!, // server-only secret
 *   // );
 *   // await supabase.from("subscribers").insert({ email });
 *
 *   // --- Mailchimp ---
 *   // await fetch(`https://<dc>.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`, {
 *   //   method: "POST",
 *   //   headers: { Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}` },
 *   //   body: JSON.stringify({ email_address: email, status: "subscribed" }),
 *   // });
 *
 *   // --- ConvertKit ---
 *   // await fetch(`https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`, {
 *   //   method: "POST",
 *   //   headers: { "Content-Type": "application/json" },
 *   //   body: JSON.stringify({ api_key: process.env.CONVERTKIT_API_KEY, email }),
 *   // });
 */

// Pragmatic email regex — good enough for a signup form (real validation
// happens when the ESP sends the confirmation email).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const email =
    typeof body === "object" && body !== null && "email" in body
      ? String((body as { email: unknown }).email ?? "").trim()
      : "";

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  // For now we just log server-side. Replace this with a real insert/ESP call.
  console.log(`[subscribe] new subscriber: ${email}`);

  return NextResponse.json({ ok: true });
}
