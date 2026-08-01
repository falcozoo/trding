"use client";

import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/brokers", label: "Brokers" },
  { href: "/compare", label: "Compare" },
  { href: "/learn", label: "Learn" },
  { href: "/glossary", label: "Glossary" },
  { href: "/tools", label: "Tools" },
  { href: "/markets", label: "Markets" },
  { href: "/quiz", label: "Quiz" },
  { href: "/methodology", label: "Methodology" },
  { href: "/about", label: "About" },
];

/**
 * Mobile hamburger menu. Shown only below the sm breakpoint; the full inline
 * nav (desktop) lives in Header. Keeps the header from overflowing on phones,
 * where ~90% of traffic lands.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink"
      >
        <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <button
            aria-hidden
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-ink/30"
          />
          {/* Panel */}
          <nav className="fixed inset-x-0 top-[65px] z-50 border-b border-line bg-paper p-4 shadow-card">
            <div className="flex flex-col">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-cream"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/quiz"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-amber px-4 py-3 text-center font-semibold text-white hover:bg-amber-dark"
              >
                Find my broker →
              </Link>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
