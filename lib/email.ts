/**
 * Email sending (Resend) for Trding.io.
 *
 * All outbound email goes through here so templates and the sender identity
 * live in one place. The API key and From address come from env vars
 * (RESEND_API_KEY, RESEND_FROM) — never hard-coded.
 *
 * Once the trding.io domain is verified in Resend, RESEND_FROM is set to
 * "Trding.io <hello@trding.io>". Until then it falls back to the Resend test
 * sender (which can only email the account owner).
 */
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const FROM = process.env.RESEND_FROM || "Trding.io <onboarding@resend.dev>";

/** Lazily construct the client so builds without the key don't crash. */
function client(): Resend | null {
  if (!apiKey) return null;
  return new Resend(apiKey);
}

const BRAND = "#E08A2E";
const INK = "#1F2933";
const MUTED = "#5B6470";

/** Shared shell so every email looks on-brand and renders in all clients. */
function shell(bodyHtml: string): string {
  return `<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:520px;margin:0 auto;padding:8px 4px;color:${INK};line-height:1.55">
    <div style="font-size:22px;font-weight:800;color:${INK};margin-bottom:16px">trding<span style="color:${BRAND}">.io</span></div>
    ${bodyHtml}
    <hr style="border:none;border-top:1px solid #E7E2D9;margin:24px 0" />
    <p style="font-size:12px;color:${MUTED};margin:0">
      You're receiving this because you signed up at trding.io, a neutral broker comparator.
      Educational content only, not investment advice. Trading involves substantial risk of loss.
    </p>
  </div>`;
}

/** Welcome email sent right after a successful signup. */
export function welcomeEmail(): { subject: string; html: string } {
  const body = `
    <h1 style="font-size:20px;margin:0 0 12px">Welcome — let's find you a broker that actually fits</h1>
    <p style="margin:0 0 14px">Thanks for joining. Trding.io rates the broker market on cold, objective facts —
      regulation, fees, withdrawal speed — so you don't have to wade through hype to find a broker you can trust.</p>
    <p style="margin:0 0 14px">The fastest way to start is our 60-second quiz. Answer a few questions and we'll
      match you to a regulated broker that fits your budget and experience.</p>
    <p style="margin:0 0 22px">
      <a href="https://trding.io/quiz" style="display:inline-block;background:${BRAND};color:#fff;text-decoration:none;font-weight:700;padding:12px 22px;border-radius:12px">Take the 60-second quiz &rarr;</a>
    </p>
    <p style="margin:0 0 6px;font-weight:700">Or explore on your own:</p>
    <p style="margin:0 0 4px"><a href="https://trding.io/brokers" style="color:${BRAND}">Compare all brokers</a> — neutral scores side by side</p>
    <p style="margin:0 0 4px"><a href="https://trding.io/learn/course/price-action" style="color:${BRAND}">Free Price Action course</a> — 16 plain-English modules</p>
    <p style="margin:0 0 4px"><a href="https://trding.io/tools/cost-of-trading" style="color:${BRAND}">Real cost of trading</a> — rank brokers by their true fees</p>
  `;
  return { subject: "Welcome to Trding.io — your broker match in 60 seconds", html: shell(body) };
}

/** Send the welcome email. Returns {ok} and never throws (best-effort). */
export async function sendWelcome(
  to: string,
): Promise<{ ok: boolean; id?: string; error?: string }> {
  const c = client();
  if (!c) return { ok: false, error: "email_not_configured" };
  const { subject, html } = welcomeEmail();
  try {
    const { data, error } = await c.emails.send({ from: FROM, to, subject, html });
    if (error) return { ok: false, error: error.message };
    return { ok: true, id: data?.id };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "send_failed" };
  }
}

/** Generic broadcast helper for future campaigns (broker of the month, etc.). */
export async function sendEmail(
  to: string | string[],
  subject: string,
  bodyHtml: string,
): Promise<{ ok: boolean; id?: string; error?: string }> {
  const c = client();
  if (!c) return { ok: false, error: "email_not_configured" };
  try {
    const { data, error } = await c.emails.send({
      from: FROM,
      to,
      subject,
      html: shell(bodyHtml),
    });
    if (error) return { ok: false, error: error.message };
    return { ok: true, id: data?.id };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "send_failed" };
  }
}
