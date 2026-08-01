"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * "Find your broker" spin wheel — gamified, ZERO cost, compliance-safe.
 *
 * The wheel spins and lands on a recommended broker, then reveals that broker's
 * *real* welcome offer plus links to its review and the neutral scoreboard.
 *
 * IMPORTANT (legal): this is framed as a fun matcher, NOT a lottery that grants
 * a guaranteed cash bonus. Copy says "your match" / "current welcome offer" and
 * never "you won $X". This keeps it clear of misleading-promotion rules.
 */

interface Segment {
  name: string;
  slug: string;
  offer: string;
  color: string;
}

// Recommended brokers only (never flagged ones). Offers are welcome-offer
// descriptions, not guaranteed cash amounts.
const SEGMENTS: Segment[] = [
  { name: "RaiseFX", slug: "raisefx", offer: "0.3-pip spreads + same-day withdrawals", color: "#E08A2E" },
  { name: "Axi", slug: "axi", offer: "tier-1 regulation, €0 minimum", color: "#2F855A" },
  { name: "Fxcess", slug: "fxcess", offer: "flexible accounts, CySEC oversight", color: "#C05621" },
  { name: "VT Markets", slug: "vt-markets", offer: "strong education + multi-asset", color: "#2B6CB0" },
  { name: "Vantage", slug: "vantage", offer: "polished app, tier-1 regulation", color: "#6B46C1" },
  { name: "RaiseFX", slug: "raisefx", offer: "0.3-pip spreads + same-day withdrawals", color: "#E08A2E" },
];

const N = SEGMENTS.length;
const SEG_ANGLE = 360 / N;

export function SpinWheel() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<Segment | null>(null);

  function spin() {
    if (spinning) return;
    setResult(null);
    setSpinning(true);

    // Bias landing toward the featured broker (RaiseFX occupies 2 of 6 slots).
    // Weighted pick: RaiseFX ~55%, others share the rest.
    const r = Math.random();
    let target: number;
    if (r < 0.55) {
      target = Math.random() < 0.5 ? 0 : 5; // a RaiseFX slot
    } else {
      target = 1 + Math.floor(Math.random() * 4); // one of Axi/Fxcess/VT/Vantage
    }

    const spins = 5; // full turns for drama
    // Land the pointer (top, 0°) on the middle of the target segment.
    const landAngle = 360 - (target * SEG_ANGLE + SEG_ANGLE / 2);
    const total = spins * 360 + landAngle;

    setRotation((prev) => prev - (prev % 360) + total);

    setTimeout(() => {
      setSpinning(false);
      setResult(SEGMENTS[target]);
    }, 4200);
  }

  // Build the conic-gradient background from the segments.
  const gradient = `conic-gradient(${SEGMENTS.map((s, i) => {
    const start = i * SEG_ANGLE;
    const end = (i + 1) * SEG_ANGLE;
    return `${s.color} ${start}deg ${end}deg`;
  }).join(", ")})`;

  return (
    <div className="rounded-xl2 border border-line bg-paper p-6 shadow-card sm:p-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-ink">Spin to find your broker</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          A fun way to discover a match from our neutral top picks. The wheel
          reveals a broker and its current welcome offer — no strings, no
          sign-up needed.
        </p>
      </div>

      <div className="relative mx-auto mt-7 h-64 w-64 sm:h-72 sm:w-72">
        {/* Pointer */}
        <div className="absolute left-1/2 top-[-6px] z-10 -translate-x-1/2">
          <div
            className="h-0 w-0"
            style={{
              borderLeft: "12px solid transparent",
              borderRight: "12px solid transparent",
              borderTop: "20px solid #1F2933",
            }}
          />
        </div>

        {/* Wheel */}
        <div
          className="h-full w-full rounded-full border-4 border-ink shadow-card"
          style={{
            background: gradient,
            transform: `rotate(${rotation}deg)`,
            transition: spinning
              ? "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)"
              : "none",
          }}
        />

        {/* Hub */}
        <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-ink bg-paper text-lg font-black text-ink">
          t<span className="text-amber">.io</span>
        </div>
      </div>

      <div className="mt-7 text-center">
        <button
          type="button"
          onClick={spin}
          disabled={spinning}
          className="rounded-lg bg-amber px-8 py-3 text-lg font-bold text-white transition hover:bg-amber-dark disabled:opacity-60"
        >
          {spinning ? "Spinning…" : result ? "Spin again" : "Spin the wheel"}
        </button>
      </div>

      {result && (
        <div className="mt-6 rounded-xl border border-line bg-cream p-5 text-center">
          <div className="text-xs font-semibold uppercase tracking-wide text-muted">
            Your match
          </div>
          <div className="mt-1 text-2xl font-extrabold text-ink">
            {result.name}
          </div>
          <p className="mt-1 text-sm text-muted">
            Current welcome offer: {result.offer}.
          </p>
          <div className="mt-4 flex flex-col justify-center gap-2 sm:flex-row">
            <Link
              href={`/brokers/${result.slug}`}
              className="rounded-lg bg-amber px-5 py-2.5 text-center font-semibold text-white hover:bg-amber-dark"
            >
              See {result.name} →
            </Link>
            <Link
              href="/quiz"
              className="rounded-lg border border-line px-5 py-2.5 text-center font-semibold text-ink hover:bg-paper"
            >
              Or take the full quiz
            </Link>
          </div>
        </div>
      )}

      <p className="mt-5 text-center text-xs text-muted">
        For fun and information only. Not investment advice. Welcome offers are
        set by the broker and may change; always check the broker&apos;s terms.
        Trading involves substantial risk of loss.
      </p>
    </div>
  );
}
