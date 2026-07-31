import type { Metadata } from "next";
import Link from "next/link";
import { getBrokerBySlug } from "@/lib/brokers";
import { getAllPairs } from "@/lib/pairs";
import { NEEDS } from "@/lib/needs";

export const metadata: Metadata = {
  title: "Compare CFD Brokers — Head-to-Head & Best For",
  description:
    "Browse every head-to-head CFD broker comparison and our best-broker rankings by need: beginners, low spreads, high leverage, fast withdrawals and regulation.",
  alternates: { canonical: "/compare" },
};

export default function CompareHubPage() {
  const pairs = getAllPairs();

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Compare CFD brokers</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Every broker on Trding.io is scored on the same objective criteria.
          Pick a head-to-head comparison, or jump to the best broker for your
          specific need. Neutral scoring — affiliation never buys a better spot.
        </p>
      </header>

      {/* Head-to-head comparisons */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Head-to-head comparisons</h2>
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
      </section>

      {/* Best brokers by need */}
      <section className="mt-14">
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
    </div>
  );
}
