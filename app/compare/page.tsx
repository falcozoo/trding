import type { Metadata } from "next";
import Link from "next/link";
import { getBrokers, getBrokerBySlug } from "@/lib/brokers";
import { scoreBrokers } from "@/lib/scoring";
import { getAllPairs } from "@/lib/pairs";
import { NEEDS } from "@/lib/needs";
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

  // Compute scores on the server; pass a slug -> {score} map to the client.
  const scores: ScoreMap = {};
  for (const s of scoreBrokers(getBrokers())) {
    scores[s.broker.slug] = { score: s.score };
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
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {NEEDS.map((n) => (
            <Link
              key={n.slug}
              href={`/best/${n.slug}`}
              className="rounded-xl border border-line bg-paper px-4 py-3 text-sm font-medium text-ink shadow-card hover:text-amber-dark"
            >
              Best for {n.title}
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
