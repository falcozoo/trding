"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Mobile-only sticky CTA bar. 90% of traffic is mobile (TikTok), so a
 * persistent "Find my broker" button keeps the primary action one thumb-tap
 * away at all times. Hidden on desktop and on the quiz itself (where it'd be
 * redundant / in the way).
 */
export function StickyCTA() {
  const pathname = usePathname();
  if (pathname?.startsWith("/quiz")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 p-3 backdrop-blur sm:hidden">
      <Link
        href="/quiz"
        className="block rounded-xl bg-amber px-6 py-3.5 text-center text-base font-bold text-white shadow-card active:bg-amber-dark"
      >
        Find my broker in 60s →
      </Link>
    </div>
  );
}
