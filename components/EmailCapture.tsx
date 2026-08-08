"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

/**
 * Reusable newsletter / lead-capture form.
 * POSTs {email} to /api/subscribe and shows inline success/error states.
 * Styled in the site palette, mobile-first.
 */
export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (res.ok && data.ok) {
        setStatus("success");
        setMessage("You're on the list. Look out for the next review.");
        setEmail("");
        // Meta Pixel: Subscribe event fires only on a real subscription
        if (typeof window !== "undefined" && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
          (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("track", "Subscribe");
        }
      } else {
        setStatus("error");
        setMessage(data.error ?? "Please enter a valid email address.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="rounded-xl2 border border-line bg-paper p-6 shadow-card sm:p-8">
      <h2 className="text-xl font-bold text-ink">
        New broker reviews, straight to your inbox
      </h2>
      <p className="mt-1 max-w-md text-sm text-muted">
        Get new broker reviews and guides. No spam, unsubscribe anytime.
      </p>

      {status === "success" ? (
        <p
          role="status"
          className="mt-4 rounded-xl border border-amber/40 bg-amber-soft/60 px-4 py-3 text-sm font-medium text-ink"
        >
          {message}
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-3 sm:flex-row"
          noValidate
        >
          <label htmlFor="email-capture" className="sr-only">
            Email address
          </label>
          <input
            id="email-capture"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="you@example.com"
            aria-invalid={status === "error"}
            className="w-full flex-1 rounded-xl border border-line bg-cream px-4 py-3 text-base text-ink placeholder:text-muted focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/40"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-xl bg-amber px-6 py-3 text-base font-semibold text-paper transition-colors hover:bg-amber-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Subscribing…" : "Subscribe"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p role="alert" className="mt-2 text-sm text-amber-dark">
          {message}
        </p>
      )}
    </div>
  );
}
