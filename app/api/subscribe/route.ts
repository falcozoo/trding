import { NextResponse } from "next/server";
import { sendWelcome, addContact } from "@/lib/email";

/**
 * POST /api/subscribe
 *
 * 1. Validates the email.
 * 2. Stores the subscriber durably in the Resend Audience (best-effort).
 * 3. Sends the on-brand welcome email via Resend (best-effort).
 * 4. Logs the subscriber server-side as a recoverable fallback.
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

  // Recoverable audit line as a fallback.
  console.log(`[subscribe] ${new Date().toISOString()} ${email}`);

  // Store the subscriber durably in the Resend Audience. Best-effort.
  const stored = await addContact(email);
  if (!stored.ok) {
    console.warn(`[subscribe] contact not stored for ${email}: ${stored.error}`);
  }

  // Fire the welcome email. We do NOT fail the signup if the email send fails
  // (the address is still captured); we just note it.
  const result = await sendWelcome(email);
  if (!result.ok) {
    console.warn(`[subscribe] welcome email not sent for ${email}: ${result.error}`);
  }

  return NextResponse.json({ ok: true });
}
