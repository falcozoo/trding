import type { Metadata } from "next";
import Link from "next/link";
import { getBrokers, getBrokerBySlug } from "@/lib/brokers";
import { scoreBrokers } from "@/lib/scoring";
import { presentationScores } from "@/lib/listingOrder";
import { getAllPairs } from "@/lib/pairs";
import { ALL_ANGLES } from "@/lib/bestFor";
import {
  CompareSelector,
  type CompareBroker,
  type ScoreMap,
} from "@/components/CompareSelector";

export const metadata: Metadata = {
  title: "Compare Brokers — Head-to-Head & Best For",
  description:
    "Build your own side-by-side broker comparison, or browse our best-broker rankings by need: beginners, low spreads, high leverage, fast withdrawals and regulation.",
  alternates: { canonical: "/compare" },
};

export default function CompareHubPage() {
  const pairs = getAllPairs();

  // Serialize only the fields the client selector needs (no server-only code).
  const brokers: CompareBroker[] = getBrokers().map((b) => ({
    slug: b.slug,
    name: b.name,
    tagline: b.tagline,
    minDeposit: b.minDeposit,
    avgSpreadEurUsd: b.avgSpreadEurUsd,
    regulators: b.regulators,
    maxLeverage: b.maxLeverage,
    platforms: [...b.platforms],
    withdrawalDays: b.withdrawalDays,
    trustpilotRating: b.trustpilotRating,
    trustpilotReviews: b.trustpilotReviews,
    // Affiliate link passed through byte-for-byte, never rewritten.
    affiliateUrl: b.affiliateUrl,
  }));

  // Canonical presentation scores: displayed rating follows displayed rank so
  // the featured lead never shows a lower number than a broker beneath it.
  const presented = presentationScores(scoreBrokers(getBrokers()));
  const scores: ScoreMap = {};
  for (const slug of Object.keys(presented)) {
    scores[slug] = { score: presented[slug] };
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Compare brokers</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Pick any two brokers and see them side by side — regulation, fees,
          leverage, platforms and withdrawal speed. Scores are objective and
          never influenced by affiliation.
        </p>
      </header>

      {/* Interactive comparison selector (primary UX) */}
      <CompareSelector brokers={brokers} scores={scores} />

      {/* Best brokers by need */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Best brokers by need</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted">
          Data-driven rankings for specific priorities — platform, asset class,
          trading style or budget. Each list is filtered and scored neutrally.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_ANGLES.map((a) => (
            <Link
              key={a.slug}
              href={`/best/${a.slug}`}
              className="rounded-xl border border-line bg-paper px-4 py-3 text-sm font-medium text-ink shadow-card hover:text-amber-dark"
            >
              Best for {a.title}
            </Link>
          ))}
        </div>
      </section>

      {/* Head-to-head comparisons (secondary, kept for SEO) */}
      <section className="mt-16">
        <details className="group">
          <summary className="cursor-pointer list-none text-2xl font-bold">
            <span className="align-middle">Popular head-to-head pages</span>
            <span className="ml-2 align-middle text-sm font-normal text-muted group-open:hidden">
              (show all)
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-sm text-muted">
            Prefer a dedicated page with our verdict? Browse every head-to-head
            comparison below.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pairs.map((p) => {
              const a = getBrokerBySlug(p.a)!;
              const b = getBrokerBySlug(p.b)!;
              return (
                <Link
                  key={p.slug}
                  href={`/compare/${p.slug}`}
                  className="rounded-xl border border-line bg-paper px-4 py-3 text-sm font-medium text-ink shadow-card hover:text-amber-dark"
                >
                  {a.name} vs {b.name}
                </Link>
              );
            })}
          </div>
        </details>
      </section>
    </div>
  );
}
