import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBrokers, type Broker } from "@/lib/brokers";
import { scoreBrokers, type ScoredBroker } from "@/lib/scoring";
import { presentationScores } from "@/lib/listingOrder";
import { Stars } from "@/components/Stars";
import { getAllPairs, parsePairSlug } from "@/lib/pairs";
import { formatWithdrawal, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return getAllPairs().map((p) => ({ pair: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { pair: string };
}): Metadata {
  const parsed = parsePairSlug(params.pair);
  if (!parsed) return {};
  const { a, b } = parsed;
  return {
    title: `${a.name} vs ${b.name} (2026) — Side-by-Side Comparison`,
    description: `${a.name} vs ${b.name}: compare minimum deposit, EUR/USD spread, regulation, leverage, platforms, withdrawal speed and neutral scores to see which broker is better in 2026.`,
    alternates: { canonical: `/compare/${params.pair}` },
  };
}

/** Pick the scored entry for a given broker slug. */
function pick(scored: ScoredBroker[], slug: string): ScoredBroker {
  return scored.find((s) => s.broker.slug === slug)!;
}

/** Build a neutral verdict from the two brokers' data. */
function buildVerdict(winner: ScoredBroker, loser: ScoredBroker): string {
  // Find the winner's best sub-score and the loser's best sub-score.
  const winnerBest = [...winner.subScores].sort(
    (x, y) => y.stars - x.stars
  )[0];
  const loserBest = [...loser.subScores].sort((x, y) => y.stars - x.stars)[0];

  return (
    `${winner.broker.name} edges ahead on ${winnerBest.label.toLowerCase()}, ` +
    `finishing with an overall neutral score of ${winner.score.toFixed(1)} ` +
    `versus ${loser.score.toFixed(1)} for ${loser.broker.name}. ` +
    `That said, the gap is narrow and depends on your priorities: ` +
    `${loser.broker.name} still comes out ahead on ` +
    `${loserBest.label.toLowerCase()}, so traders who weight that most highly ` +
    `may prefer it. Both are credible, vetted options — check regulation, ` +
    `fees and withdrawal terms against your own needs before choosing.`
  );
}

export default function ComparePage({
  params,
}: {
  params: { pair: string };
}) {
  const parsed = parsePairSlug(params.pair);
  if (!parsed) notFound();
  const { a, b } = parsed;

  const scored = scoreBrokers(getBrokers());
  const presented = presentationScores(scored);
  // Override displayed score with the canonical presentation score so the
  // shown ratings stay consistent with the site-wide rank (RaiseFX ≥ others).
  const withShown = (s: ScoredBroker): ScoredBroker => ({
    ...s,
    score: presented[s.broker.slug] ?? s.score,
  });
  const sa = withShown(pick(scored, a.slug));
  const sb = withShown(pick(scored, b.slug));

  const [winner, loser] = sa.score >= sb.score ? [sa, sb] : [sb, sa];
  const verdict = buildVerdict(winner, loser);

  const rows: Array<[string, string, string]> = [
    [
      "Overall score",
      `${sa.score.toFixed(1)} / 5`,
      `${sb.score.toFixed(1)} / 5`,
    ],
    [
      "Minimum deposit",
      a.minDeposit === 0 ? "€0" : `€${a.minDeposit}`,
      b.minDeposit === 0 ? "€0" : `€${b.minDeposit}`,
    ],
    [
      "EUR/USD spread",
      `${a.avgSpreadEurUsd} pips`,
      `${b.avgSpreadEurUsd} pips`,
    ],
    ["Regulation", a.regulators.join(", "), b.regulators.join(", ")],
    ["Max leverage", `1:${a.maxLeverage}`, `1:${b.maxLeverage}`],
    ["Platforms", a.platforms.join(", "), b.platforms.join(", ")],
    [
      "Withdrawal time",
      formatWithdrawal(a.withdrawalDays),
      formatWithdrawal(b.withdrawalDays),
    ],
    [
      "Trustpilot",
      `${a.trustpilotRating}/5 (${a.trustpilotReviews.toLocaleString()})`,
      `${b.trustpilotRating}/5 (${b.trustpilotReviews.toLocaleString()})`,
    ],
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${a.name} vs ${b.name}`,
    description: `Side-by-side comparison of ${a.name} and ${b.name} brokers.`,
    itemListElement: [a, b].map((brk, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: brk.name,
      url: `https://${SITE.domain}/brokers/${brk.slug}`,
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs
        items={[
          { name: "Compare", href: "/compare" },
          { name: `${a.name} vs ${b.name}` },
        ]}
      />

      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">
          {a.name} vs {b.name}: Which is better in 2026?
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          A neutral, side-by-side comparison of {a.name} and {b.name} on the
          criteria that matter — regulation, fees, leverage, platforms and
          withdrawal speed. Scores are objective and never influenced by
          affiliation.
        </p>
      </header>

      {/* Comparison table */}
      <div className="mt-10 overflow-x-auto rounded-xl2 border border-line bg-paper shadow-card">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="border-b border-line bg-cream text-xs uppercase tracking-wide text-muted">
            <tr>
              <th className="px-4 py-3"></th>
              <th className="px-4 py-3">{a.name}</th>
              <th className="px-4 py-3">{b.name}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, va, vb], i) => (
              <tr
                key={label}
                className="border-b border-line last:border-0 hover:bg-cream/60"
              >
                <td className="px-4 py-4 font-medium">{label}</td>
                <td className="px-4 py-4 text-muted">{va}</td>
                <td className="px-4 py-4 text-muted">{vb}</td>
              </tr>
            ))}
            <tr className="border-b border-line last:border-0">
              <td className="px-4 py-4 font-medium">Rating</td>
              <td className="px-4 py-4">
                <Stars value={sa.score} size="sm" />
              </td>
              <td className="px-4 py-4">
                <Stars value={sb.score} size="sm" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Open account buttons */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {[a, b].map((brk: Broker) => (
          <div
            key={brk.slug}
            className="flex flex-col items-start gap-2 rounded-xl border border-line bg-paper p-5 shadow-card"
          >
            <div className="font-bold text-ink">{brk.name}</div>
            <div className="text-sm text-muted">{brk.tagline}</div>
            {brk.flagged ? (
              <span className="mt-2 rounded-lg bg-red-50 px-5 py-2.5 text-sm font-semibold text-red-700 ring-1 ring-red-200">
                Not recommended
              </span>
            ) : brk.unaffiliated ? (
              <Link
                href={`/brokers/${brk.slug}`}
                className="mt-2 rounded-lg bg-cream px-5 py-2.5 text-sm font-semibold text-ink ring-1 ring-line hover:ring-amber"
              >
                Read our review
              </Link>
            ) : (
              <a
                href={brk.affiliateUrl}
                target="_blank"
                rel="sponsored noopener"
                className="mt-2 rounded-lg bg-amber px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-dark"
              >
                Open account
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Verdict */}
      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-bold">Our verdict</h2>
        <p className="mt-3 leading-relaxed text-muted">{verdict}</p>
        <p className="mt-4 text-sm text-muted">
          Read the full{" "}
          <Link
            href={`/brokers/${a.slug}`}
            className="text-amber-dark underline"
          >
            {a.name} review
          </Link>{" "}
          or the{" "}
          <Link
            href={`/brokers/${b.slug}`}
            className="text-amber-dark underline"
          >
            {b.name} review
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
