import { NextResponse } from "next/server";
import { sendWelcome } from "@/lib/email";

/**
 * POST /api/subscribe
 *
 * 1. Validates the email.
 * 2. Sends the on-brand welcome email via Resend (best-effort).
 * 3. Logs the subscriber server-side so signups are recoverable from logs
 *    until a persistent store (Supabase table or Resend Audience) is wired in.
 *
 * TO ADD PERSISTENT STORAGE LATER (needs a non-send-only key / service role):
 *
 *   // --- Resend Audience (full-access key) ---
 *   // await resend.contacts.create({ email, audienceId: process.env.RESEND_AUDIENCE_ID! });
 *
 *   // --- Supabase (service-role key, server-only) ---
 *   // await supabase.from("subscribers").insert({ email });
 */

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
      ? String((body as { email: unknown }).email ?? "").trim().toLowerCase()
      : "";

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  // Recoverable audit line until a persistent store is connected.
  console.log(`[subscribe] ${new Date().toISOString()} ${email}`);

  // Fire the welcome email. We do NOT fail the signup if the email send fails
  // (the address is still captured in logs); we just note it.
  const result = await sendWelcome(email);
  if (!result.ok) {
    console.warn(`[subscribe] welcome email not sent for ${email}: ${result.error}`);
  }

  return NextResponse.json({ ok: true });
}
