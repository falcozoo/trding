import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getBrokerBySlug,
  getBrokers,
  getAllSlugs,
} from "@/lib/brokers";
import { scoreOne } from "@/lib/scoring";
import { Stars } from "@/components/Stars";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const broker = getBrokerBySlug(params.slug);
  if (!broker) return {};
  return {
    title: `${broker.name} Review 2026 — Rating, Fees & Regulation`,
    description: `${broker.name} review: ${broker.tagline} See our neutral rating, spreads, regulation, platforms and withdrawal terms.`,
    alternates: { canonical: `/brokers/${broker.slug}` },
  };
}

export default function BrokerPage({
  params,
}: {
  params: { slug: string };
}) {
  const broker = getBrokerBySlug(params.slug);
  if (!broker) notFound();

  const scored = scoreOne(broker, getBrokers());
  const sorted = [...scored.subScores].sort((a, b) => b.stars - a.stars);
  const liked = sorted.slice(0, 2);
  const watch = sorted.slice(-2).reverse();

  const facts: Array<[string, string]> = [
    ["Regulation", broker.regulators.join(", ")],
    ["Founded", String(broker.founded)],
    [
      "Minimum deposit",
      broker.minDeposit === 0 ? "€0" : `€${broker.minDeposit}`,
    ],
    ["Avg EUR/USD spread", `${broker.avgSpreadEurUsd} pips`],
    [
      "Commission / lot",
      broker.commissionPerLot === 0 ? "None" : `$${broker.commissionPerLot}`,
    ],
    ["Max leverage", `1:${broker.maxLeverage}`],
    ["Platforms", broker.platforms.join(", ")],
    ["Asset classes", broker.assetClasses.join(", ")],
    ["Withdrawal time", `${broker.withdrawalDays} business day(s)`],
    ["Demo account", broker.demoAccount ? "Yes" : "No"],
    [
      "Negative balance protection",
      broker.negativeBalanceProtection ? "Yes" : "No",
    ],
    ["Segregated funds", broker.segregatedFunds ? "Yes" : "No"],
    [
      "Trustpilot",
      `${broker.trustpilotRating}/5 (${broker.trustpilotReviews.toLocaleString()} reviews)`,
    ],
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: broker.name,
    description: broker.tagline,
    brand: { "@type": "Brand", name: broker.name },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: scored.score.toFixed(1),
      bestRating: "5",
      worstRating: "0",
      ratingCount: broker.trustpilotReviews,
    },
  };

  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="mb-6 text-sm text-muted">
        <Link href="/brokers" className="hover:text-ink">
          ← All brokers
        </Link>
      </nav>

      {/* Header */}
      <div className="flex flex-col gap-6 rounded-xl2 border border-line bg-paper p-6 shadow-card sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">{broker.name}</h1>
          <p className="mt-1 text-muted">{broker.tagline}</p>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-2xl font-bold">{scored.score.toFixed(1)}</span>
            <Stars value={scored.score} size="md" />
            <span className="text-sm text-muted">/ 5 neutral score</span>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <a
            href={broker.affiliateUrl}
            target="_blank"
            rel="sponsored noopener"
            className="rounded-xl bg-amber px-6 py-3.5 font-semibold text-white shadow-card hover:bg-amber-dark"
          >
            Open an account
          </a>
          {(broker.bonusCode || broker.bonusNote) && (
            <span className="text-xs text-muted">
              Bonus code:{" "}
              <span className="font-mono font-semibold text-ink">
                {broker.bonusCode ?? broker.bonusNote}
              </span>
            </span>
          )}
        </div>
      </div>

      {/* Sub-scores */}
      <section className="mt-10">
        <h2 className="text-xl font-bold">Score breakdown</h2>
        <div className="mt-4 space-y-3">
          {scored.subScores.map((sub) => (
            <div key={sub.key}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="font-medium">{sub.label}</span>
                <span className="text-muted">{sub.stars.toFixed(1)}/5</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-cream">
                <div
                  className="h-full rounded-full bg-amber"
                  style={{ width: `${(sub.stars / 5) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Liked / watch */}
      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl2 border border-line bg-paper p-5 shadow-card">
          <h3 className="font-semibold text-amber-dark">What we liked</h3>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            {liked.map((l) => (
              <li key={l.key}>✔ Strong {l.label.toLowerCase()}</li>
            ))}
            {broker.demoAccount && <li>✔ Free demo account</li>}
          </ul>
        </div>
        <div className="rounded-xl2 border border-line bg-paper p-5 shadow-card">
          <h3 className="font-semibold text-ink">Points to watch</h3>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            {watch.map((w) => (
              <li key={w.key}>• Weaker {w.label.toLowerCase()}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Full facts */}
      <section className="mt-10">
        <h2 className="text-xl font-bold">All the facts</h2>
        <div className="mt-4 overflow-hidden rounded-xl2 border border-line bg-paper shadow-card">
          <table className="w-full text-sm">
            <tbody>
              {facts.map(([k, v], i) => (
                <tr
                  key={k}
                  className={i % 2 ? "bg-cream/50" : "bg-paper"}
                >
                  <td className="w-1/2 px-4 py-3 font-medium">{k}</td>
                  <td className="px-4 py-3 text-muted">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted">
          Last verified: {broker.lastVerified}. {SITE.name} keeps broker data
          dated for transparency.
        </p>
      </section>
    </div>
  );
}
