"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Lightweight GDPR cookie banner — pure client-side, ZERO network / ZERO token.
 *
 * We only use essential + anonymous analytics cookies, so this is a simple
 * accept / decline notice that records the choice in localStorage and never
 * shows again once answered. No third-party consent SDK, no tracking.
 */

const KEY = "trding_cookie_choice";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      // localStorage blocked — don't nag.
    }
  }, []);

  function choose(value: "accepted" | "declined") {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-line bg-paper/95 backdrop-blur px-5 py-4 shadow-card">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-muted">
          We use essential cookies and anonymous analytics to run and improve the
          site. No advertising trackers. See our{" "}
          <Link className="underline hover:text-ink" href="/cookies">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => choose("declined")}
            className="rounded-lg border border-line px-4 py-2 text-sm font-medium text-muted hover:text-ink"
          >
            Decline
          </button>
          <button
            onClick={() => choose("accepted")}
            className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-cream hover:opacity-90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
