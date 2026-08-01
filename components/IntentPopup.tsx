"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Time-on-page intent popup — pure client-side, ZERO cost.
 *
 * After the visitor has spent a while without acting, a clean modal offers the
 * featured broker's *real* welcome offer and routes to the quiz. Shown once per
 * session (sessionStorage). Deliberately does NOT promise a guaranteed cash
 * bonus — it points to the broker's current welcome offer and the match quiz,
 * which keeps it compliant.
 */

const SHOWN_KEY = "trding_intent_shown";
const DELAY_MS = 45_000; // 45s

export function IntentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SHOWN_KEY)) return;

    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SHOWN_KEY, "1");
    }, DELAY_MS);

    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-line bg-paper p-7 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted transition hover:bg-cream hover:text-ink"
        >
          ✕
        </button>

        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-soft px-3 py-1 text-xs font-semibold text-amber-dark">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
          </span>
          Popular right now
        </div>

        <h2 className="text-2xl font-bold text-ink">
          Still deciding? Let&apos;s match you in 60 seconds.
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          Our top-rated broker right now is <strong>RaiseFX</strong> — tight
          0.3-pip spreads, same-day withdrawals, and a welcome offer for new
          accounts. Take the quick quiz to see if it fits you, or explore the
          full neutral scoreboard.
        </p>

        <div className="mt-6 flex flex-col gap-2">
          <Link
            href="/quiz"
            onClick={() => setOpen(false)}
            className="rounded-lg bg-amber px-4 py-3 text-center font-semibold text-white transition hover:bg-amber-dark"
          >
            Find my broker →
          </Link>
          <Link
            href="/brokers/raisefx"
            onClick={() => setOpen(false)}
            className="rounded-lg border border-line px-4 py-3 text-center font-semibold text-ink transition hover:bg-cream"
          >
            See the top-rated broker
          </Link>
        </div>

        <p className="mt-4 text-center text-xs text-muted">
          Educational content only, not investment advice. Trading involves risk
          of loss.
        </p>
      </div>
    </div>
  );
}
