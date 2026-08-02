import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getBrokerBySlug,
  getBrokers,
  getAllSlugs,
  type Broker,
} from "@/lib/brokers";
import { scoreOne, scoreBrokers } from "@/lib/scoring";
import { Stars } from "@/components/Stars";
import { RelatedLinks, CROSS_LINKS } from "@/components/RelatedLinks";
import { DepositSteps } from "@/components/DepositSteps";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BrokerDeepContent } from "@/components/BrokerDeepContent";
import { getDeepBroker } from "@/lib/brokerDeep";
import { SITE, NOT_ADVICE, formatWithdrawal } from "@/lib/site";

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
    title: `${broker.name} Review 2026 — Fees, Minimum Deposit & Withdrawal`,
    description: `${broker.name} review 2026: real minimum deposit €${broker.minDeposit}, ${broker.avgSpreadEurUsd} pip EUR/USD spread, ${broker.regulators.join(
      ", "
    )} regulation and ${formatWithdrawal(
      broker.withdrawalDays
    ).toLowerCase()} withdrawals. Neutral rating, pros & cons and FAQ.`,
    alternates: { canonical: `/brokers/${broker.slug}` },
  };
}

/** A pro or con line, each tied to a real data field. */
type Point = { text: string };

/** Build data-driven pros. Each condition maps to a broker fact. */
function buildPros(broker: Broker): Point[] {
  const pros: Point[] = [];
  if (broker.regulationScore >= 4) {
    pros.push({
      text: `Strong regulatory footprint (${broker.regulators.join(
        ", "
      )}), scoring ${broker.regulationScore}/5 on our safety scale`,
    });
  }
  if (broker.avgSpreadEurUsd <= 0.4) {
    pros.push({
      text: `Tight ${broker.avgSpreadEurUsd} pip average EUR/USD spread — among the lowest in our set`,
    });
  }
  if (broker.commissionPerLot === 0) {
    pros.push({ text: `No per-lot commission on the headline account` });
  }
  if (broker.withdrawalDays <= 1) {
    pros.push({
      text: `${formatWithdrawal(
        broker.withdrawalDays
      )} withdrawals — cash back quickly`,
    });
  }
  if (broker.minDeposit <= 50) {
    pros.push({
      text: `Low real minimum deposit of €${broker.minDeposit} to get started`,
    });
  }
  if (broker.platforms.length >= 3) {
    pros.push({
      text: `Broad platform choice: ${broker.platforms.join(", ")}`,
    });
  }
  if (broker.assetClasses.length >= 5) {
    pros.push({
      text: `Wide market coverage across ${broker.assetClasses.length} asset classes`,
    });
  }
  if (broker.trustpilotRating >= 4.4) {
    pros.push({
      text: `High ${broker.trustpilotRating}/5 Trustpilot rating from ${broker.trustpilotReviews.toLocaleString()} reviews`,
    });
  }
  if (broker.negativeBalanceProtection && broker.segregatedFunds) {
    pros.push({
      text: `Negative balance protection and segregated client funds`,
    });
  }
  if (broker.demoAccount) {
    pros.push({ text: `Free unlimited demo account to practise first` });
  }
  return pros;
}

/** Build data-driven cons. Weaknesses are stated plainly. */
function buildCons(broker: Broker): Point[] {
  const cons: Point[] = [];
  if (broker.regulationScore <= 2) {
    cons.push({
      text: `Light regulation (${broker.regulators.join(
        ", "
      )}) — only ${broker.regulationScore}/5 on our safety scale, so you carry more counterparty risk`,
    });
  } else if (broker.regulationScore === 3) {
    cons.push({
      text: `Mid-tier regulation (${broker.regulators.join(
        ", "
      )}) rather than a top-tier FCA/ASIC-first setup`,
    });
  }
  if (broker.avgSpreadEurUsd >= 0.6) {
    cons.push({
      text: `Wider ${broker.avgSpreadEurUsd} pip average EUR/USD spread than the sharpest brokers in our set`,
    });
  }
  if (broker.commissionPerLot >= 7) {
    cons.push({
      text: `Higher $${broker.commissionPerLot} per-lot commission adds to round-turn cost`,
    });
  }
  if (broker.minDeposit >= 100) {
    cons.push({
      text: `Higher real minimum deposit of €${broker.minDeposit}`,
    });
  }
  if (broker.withdrawalDays >= 3) {
    cons.push({
      text: `Slower withdrawals — typically ${formatWithdrawal(
        broker.withdrawalDays
      ).toLowerCase()}`,
    });
  }
  if (broker.platforms.length <= 2) {
    cons.push({
      text: `Narrow platform choice (${broker.platforms.join(
        ", "
      )} only) — no proprietary or cTrader option`,
    });
  }
  if (!broker.negativeBalanceProtection) {
    cons.push({
      text: `No negative balance protection — losses could in theory exceed your deposit`,
    });
  }
  if (broker.maxLeverage >= 500) {
    cons.push({
      text: `Very high ${broker.maxLeverage}:1 leverage available, which magnifies losses as well as gains`,
    });
  }
  if (broker.trustpilotReviews < 500) {
    cons.push({
      text: `Thin public feedback so far (${broker.trustpilotReviews.toLocaleString()} Trustpilot reviews)`,
    });
  }
  return cons;
}

export default function BrokerPage({
  params,
}: {
  params: { slug: string };
}) {
  const broker = getBrokerBySlug(params.slug);
  if (!broker) notFound();

  const all = getBrokers();
  const scored = scoreOne(broker, all);
  const deep = getDeepBroker(broker.slug);
  const ranked = scoreBrokers(all);
  const rankIndex = ranked.findIndex((r) => r.broker.slug === broker.slug);
  const rank = rankIndex + 1;

  const sorted = [...scored.subScores].sort((a, b) => b.stars - a.stars);
  const bestSub = sorted[0];

  const pros = buildPros(broker);
  const cons = buildCons(broker);

  // "Compare vs others": link to the strongest OTHER broker (alphabetical slug order).
  const other =
    ranked.find((r) => r.broker.slug !== broker.slug)?.broker ?? broker;
  const comparePair = [broker.slug, other.slug].sort().join("-vs-");

  // For flagged brokers, steer the anxious visitor to our top recommended,
  // non-flagged broker with a direct link (legal: the negative is sourced, the
  // redirect is our editorial choice).
  const topPick =
    ranked.find((r) => !r.broker.flagged)?.broker ?? broker;

  const regWord =
    broker.regulationScore >= 4
      ? "strongly regulated"
      : broker.regulationScore === 3
      ? "regulated"
      : "lightly regulated";

  // Unique, data-synthesised intro.
  const intro = `${broker.name} is a ${regWord} broker founded in ${broker.founded}, operating under ${broker.regulators.join(
    " and "
  )}. Its headline draw is ${broker.tagline
    .replace(/\.$/, "")
    .toLowerCase()} — backed by a ${broker.avgSpreadEurUsd} pip average EUR/USD spread, a real minimum deposit of €${broker.minDeposit} and ${formatWithdrawal(
    broker.withdrawalDays
  ).toLowerCase()} withdrawals. In our neutral, data-only ranking it scores ${scored.score.toFixed(
    1
  )}/5 and places #${rank} of ${all.length} brokers we track, with its strongest area being ${bestSub.label.toLowerCase()}. This review breaks down its regulation, fees, platforms, account terms and withdrawals so you can decide whether it fits your needs.`;

  // --- Key facts (REAL minDeposit here, per rule 9) ---
  const facts: Array<[string, string]> = [
    ["Minimum deposit (real)", `€${broker.minDeposit}`],
    ["Avg EUR/USD spread", `${broker.avgSpreadEurUsd} pips`],
    [
      "Commission / lot",
      broker.commissionPerLot === 0 ? "None" : `$${broker.commissionPerLot}`,
    ],
    ["Max leverage", `1:${broker.maxLeverage}`],
    ["Platforms", broker.platforms.join(", ")],
    ["Asset classes", broker.assetClasses.join(", ")],
    ["Regulators", broker.regulators.join(", ")],
    ["Withdrawal time", formatWithdrawal(broker.withdrawalDays)],
    [
      "Trustpilot",
      `${broker.trustpilotRating}/5 (${broker.trustpilotReviews.toLocaleString()} reviews)`,
    ],
    ["Founded", String(broker.founded)],
    ["Demo account", broker.demoAccount ? "Yes" : "No"],
    [
      "Negative balance protection",
      broker.negativeBalanceProtection ? "Yes" : "No",
    ],
    ["Segregated funds", broker.segregatedFunds ? "Yes" : "No"],
  ];

  // --- FAQ (answers generated from data) ---
  const faqs: Array<{ q: string; a: string }> = [
    {
      q: `Is ${broker.name} regulated?`,
      a: `Yes. ${broker.name} is authorised by ${broker.regulators.join(
        ", "
      )}, and we rate its regulation ${broker.regulationScore}/5 on our safety scale. Client funds are ${
        broker.segregatedFunds ? "held in segregated accounts" : "not held in segregated accounts"
      }${
        broker.negativeBalanceProtection
          ? " and negative balance protection applies"
          : ", and there is no negative balance protection"
      }.`,
    },
    {
      q: `What is the minimum deposit at ${broker.name}?`,
      a: `The real minimum first deposit at ${broker.name} is €${broker.minDeposit}. For a comfortable start with room to manage risk, we suggest budgeting around €${SITE.recommendedMinDeposit} rather than the bare minimum.`,
    },
    {
      q: `How long do ${broker.name} withdrawals take?`,
      a: `${broker.name} processes withdrawals in ${formatWithdrawal(
        broker.withdrawalDays
      ).toLowerCase()}${
        broker.withdrawalDays <= 1
          ? ", among the fastest in our set"
          : ""
      }. Actual arrival can vary with your payment method and bank.`,
    },
    {
      q: `Is ${broker.name} good for beginners?`,
      a: `${
        broker.demoAccount ? "Yes — a free demo account lets beginners practise first, and " : ""
      }the €${broker.minDeposit} minimum deposit keeps the barrier to entry low. ${
        broker.regulationScore >= 4
          ? "Its strong regulation adds a layer of protection newcomers should value."
          : broker.regulationScore === 3
          ? "Its mid-tier regulation is adequate, but beginners who prioritise safety may prefer a top-tier alternative."
          : "However, its light regulation means beginners who prioritise safety should weigh a more strictly regulated alternative."
      }`,
    },
    {
      q: `Does ${broker.name} offer a demo account?`,
      a: broker.demoAccount
        ? `Yes, ${broker.name} offers a free demo account so you can test its ${broker.platforms.join(
            " and "
          )} platform(s) with virtual funds before depositing real money.`
        : `No, ${broker.name} does not advertise a free demo account, so you would need to fund a live account to try its platforms.`,
    },
  ];

  // --- JSON-LD: Organization + Review/AggregateRating + FAQPage ---
  // The rated entity (the broker itself) carries BOTH the aggregateRating and
  // the review. Google requires aggregateRating/review to sit ON the reviewed
  // item — never inside a standalone Review node (that reads as "rating a review").
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: broker.name,
    slogan: broker.tagline,
    foundingDate: String(broker.founded),
    url: `https://${SITE.domain}/brokers/${broker.slug}`,
    // Neutral in-house score used as ratingValue; trustpilotReviews is a rough
    // external proxy for review volume only (clearly not our own review count).
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: scored.score.toFixed(1),
      bestRating: "5",
      worstRating: "0",
      reviewCount: broker.trustpilotReviews,
      ratingCount: broker.trustpilotReviews,
    },
    review: {
      "@type": "Review",
      author: { "@type": "Organization", name: SITE.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: scored.score.toFixed(1),
        bestRating: "5",
        worstRating: "0",
      },
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Breadcrumbs
        items={[
          { name: "Brokers", href: "/brokers" },
          { name: broker.name },
        ]}
      />

      {/* Header */}
      <header className="rounded-xl2 border border-line bg-paper p-6 shadow-card">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-ink">
              {broker.name} Review 2026
            </h1>
            <p className="mt-1 text-muted">{broker.tagline}</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="text-2xl font-bold text-ink">
                {scored.score.toFixed(1)}
              </span>
              <Stars value={scored.score} size="md" />
              <span className="text-sm text-muted">
                / 5 neutral score · #{rank} of {all.length}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            {broker.flagged ? (
              <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-3.5 font-semibold text-red-700">
                ⚠️ Not recommended
              </div>
            ) : (
              <a
                href={broker.affiliateUrl}
                target="_blank"
                rel="sponsored noopener"
                className="rounded-xl bg-amber px-6 py-3.5 font-semibold text-white shadow-card hover:bg-amber-dark"
              >
                Open an account
              </a>
            )}
            <span className="text-xs text-muted">
              Recommended: €{SITE.recommendedMinDeposit} to start
            </span>
            {(broker.bonusCode || broker.bonusNote) && (
              <span className="text-xs text-muted">
                Bonus:{" "}
                <span className="font-mono font-semibold text-ink">
                  {broker.bonusCode ?? broker.bonusNote}
                </span>
              </span>
            )}
          </div>
        </div>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/90">{intro}</p>
      </header>

      {/* Pros & cons */}
      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl2 border border-line bg-paper p-5 shadow-card">
          <h2 className="font-semibold text-amber-dark">
            Pros of {broker.name}
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-ink/90">
            {pros.map((p, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-amber">✔</span>
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl2 border border-line bg-paper p-5 shadow-card">
          <h2 className="font-semibold text-ink">Cons of {broker.name}</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink/90">
            {cons.length ? (
              cons.map((c, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-muted">–</span>
                  <span>{c.text}</span>
                </li>
              ))
            ) : (
              <li className="text-muted">
                No material weaknesses flagged by our data checks.
              </li>
            )}
          </ul>
        </div>
      </section>

      {/* Key facts table */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-ink">
          {broker.name} at a glance
        </h2>
        <div className="mt-4 overflow-hidden rounded-xl2 border border-line bg-paper shadow-card">
          <table className="w-full text-sm">
            <tbody>
              {facts.map(([k, v], i) => (
                <tr key={k} className={i % 2 ? "bg-cream/50" : "bg-paper"}>
                  <td className="w-1/2 px-4 py-3 font-medium text-ink">{k}</td>
                  <td className="px-4 py-3 text-muted">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted">
          Last verified: {broker.lastVerified}. The €{SITE.recommendedMinDeposit}{" "}
          figure shown near the button is our recommended starting budget, not a
          real minimum — the true minimum deposit is €{broker.minDeposit}.
        </p>
      </section>

      {/* Regulation & safety */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-ink">Regulation &amp; safety</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/90">
          {broker.name} operates under{" "}
          <strong>{broker.regulators.join(", ")}</strong> and scores{" "}
          <strong>{broker.regulationScore}/5</strong> on our regulation and
          safety scale.{" "}
          {broker.regulationScore >= 4
            ? "That is a strong result, giving clients meaningful oversight and recourse."
            : broker.regulationScore === 3
            ? "That is mid-tier: adequate oversight, but not the top-tier, FCA/ASIC-first protection some traders insist on."
            : "That is at the lighter end of our set, so you should weigh the higher counterparty risk carefully before funding a large balance."}{" "}
          Client funds are{" "}
          <strong>
            {broker.segregatedFunds ? "held in segregated accounts" : "not segregated"}
          </strong>
          , and negative balance protection is{" "}
          <strong>
            {broker.negativeBalanceProtection ? "in place" : "not offered"}
          </strong>
          .
        </p>
      </section>

      {/* Fees & spreads */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-ink">Fees &amp; spreads</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/90">
          The typical EUR/USD spread at {broker.name} is{" "}
          <strong>{broker.avgSpreadEurUsd} pips</strong>, and commission is{" "}
          <strong>
            {broker.commissionPerLot === 0
              ? "zero per lot"
              : `$${broker.commissionPerLot} per standard lot`}
          </strong>
          .{" "}
          {broker.avgSpreadEurUsd <= 0.4
            ? "That puts its raw trading cost among the lowest brokers we track."
            : broker.avgSpreadEurUsd >= 0.6
            ? "That is wider than the sharpest brokers in our set, so active, high-volume traders may pay more here."
            : "That sits mid-pack for cost — competitive without being the cheapest."}{" "}
          {broker.commissionPerLot === 0
            ? "With no per-lot commission, the spread is effectively your whole cost to trade."
            : `Round-turn cost is the spread plus roughly $${(
                broker.commissionPerLot * 2
              ).toFixed(0)} in commission per lot, so factor both in.`}
        </p>
      </section>

      {/* Platforms */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-ink">Platforms</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/90">
          {broker.name} offers <strong>{broker.platforms.join(", ")}</strong>{" "}
          across <strong>{broker.assetClasses.length} asset classes</strong> (
          {broker.assetClasses.join(", ")}).{" "}
          {broker.platforms.length >= 3
            ? "That is a broad line-up, covering both the MetaTrader ecosystem and additional options for different trading styles."
            : broker.platforms.includes("Proprietary")
            ? "The proprietary platform adds a more modern, app-first alternative to MetaTrader."
            : "The line-up is focused rather than broad — fine for MetaTrader users, but there is no cTrader or proprietary alternative."}{" "}
          Maximum retail leverage is <strong>1:{broker.maxLeverage}</strong>
          {broker.maxLeverage >= 500
            ? ", which is high and should be used with care."
            : "."}
        </p>
      </section>

      {/* Account & minimum deposit */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-ink">
          Account &amp; minimum deposit
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/90">
          The real minimum first deposit at {broker.name} is{" "}
          <strong>€{broker.minDeposit}</strong>
          {broker.minDeposit <= 50
            ? ", one of the lowest barriers to entry in our comparison."
            : broker.minDeposit >= 100
            ? ", a little higher than the cheapest brokers we track."
            : "."}{" "}
          A free demo account is{" "}
          <strong>{broker.demoAccount ? "available" : "not advertised"}</strong>
          . While you can open with the minimum, we suggest budgeting around{" "}
          <strong>€{SITE.recommendedMinDeposit}</strong> so you have room to
          manage risk sensibly rather than trading a tiny, easily-wiped balance.
        </p>
      </section>

      {/* Deposits & withdrawals */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-ink">Deposits &amp; withdrawals</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/90">
          {broker.name} typically processes withdrawals in{" "}
          <strong>{formatWithdrawal(broker.withdrawalDays)}</strong>
          {broker.withdrawalDays <= 1
            ? " — among the fastest in our set, which matters if you withdraw often."
            : broker.withdrawalDays >= 3
            ? ", which is on the slower side, so plan ahead if you need funds quickly."
            : ", a fairly standard turnaround."}{" "}
          Actual arrival depends on your payment method and bank. Its{" "}
          <strong>{broker.trustpilotRating}/5</strong> Trustpilot rating across{" "}
          <strong>{broker.trustpilotReviews.toLocaleString()} reviews</strong>{" "}
          gives a rough external read on how smoothly customers say payouts and
          support work.
        </p>
      </section>

      {/* Deep, per-broker editorial layer (verdict, withdrawal proof, long-form) */}
      {deep && <BrokerDeepContent brokerName={broker.name} deep={deep} />}

      {/* Who it's for */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-ink">
          Who {broker.name} is for
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/90">
          {broker.name} suits{" "}
          <strong>
            {broker.avgSpreadEurUsd <= 0.4
              ? "cost-sensitive, active traders"
              : broker.regulationScore >= 4
              ? "traders who put regulation and safety first"
              : broker.minDeposit <= 50
              ? "newer traders starting small"
              : "traders who value its promotions and account flexibility"}
          </strong>
          , especially with {formatWithdrawal(broker.withdrawalDays).toLowerCase()}{" "}
          withdrawals and a €{broker.minDeposit} entry point.{" "}
          {broker.regulationScore <= 2
            ? "It is a weaker fit for anyone who prioritises top-tier regulation above all else — its light oversight is the main trade-off to accept."
            : broker.countriesServed.includes("USA")
            ? "It is also one of the few options in our set open to US residents."
            : "Traders who need the absolute lowest costs or the broadest platform choice should still compare it against our top-ranked alternatives."}
        </p>
      </section>

      {/* Score breakdown */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-ink">Neutral score breakdown</h2>
        <p className="mt-2 text-sm text-muted">
          Sub-scores are computed only from objective data — affiliation and
          bonuses are never inputs. See our{" "}
          <Link href="/methodology" className="text-amber-dark underline">
            methodology
          </Link>
          .
        </p>
        <div className="mt-4 space-y-3">
          {scored.subScores.map((sub) => (
            <div key={sub.key}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="font-medium text-ink">{sub.label}</span>
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

      {/* FAQ */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-ink">
          {broker.name} review FAQ
        </h2>
        <div className="mt-4 space-y-4">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-xl2 border border-line bg-paper p-5 shadow-card"
            >
              <h3 className="font-semibold text-ink">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/90">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA + compare */}
      {broker.flagged ? (
        <section className="mt-10 rounded-xl2 border border-red-200 bg-red-50 p-6 shadow-card">
          <h2 className="text-xl font-bold text-red-700">
            We don&apos;t recommend {broker.name}
          </h2>
          <p className="mt-2 text-sm text-ink/90">
            {broker.flagReason} We list it for transparency so you can compare it
            against properly regulated alternatives.
          </p>

          {topPick.slug !== broker.slug && (
            <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-800">
                Safer alternative: {topPick.name}
              </p>
              <p className="mt-1 text-sm text-ink/80">
                Instead of {broker.name}, consider {topPick.name} — our
                top-rated broker, chosen on objective, published criteria. If
                you were about to sign up here, look at a regulated option
                first.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                {topPick.affiliateUrl && (
                  <a
                    href={topPick.affiliateUrl}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    className="rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
                  >
                    Visit {topPick.name} →
                  </a>
                )}
                <Link
                  href={`/brokers/${topPick.slug}`}
                  className="text-sm font-medium text-green-800 underline"
                >
                  Read our {topPick.name} review
                </Link>
              </div>
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link
              href="/brokers"
              className="rounded-xl bg-amber px-6 py-3.5 font-semibold text-white shadow-card hover:bg-amber-dark"
            >
              See recommended brokers
            </Link>
            <Link
              href={`/compare/${comparePair}`}
              className="rounded-xl border border-line bg-paper px-6 py-3.5 font-semibold text-ink hover:border-amber"
            >
              Compare {broker.name} vs {other.name}
            </Link>
          </div>
        </section>
      ) : (
      <section className="mt-10 rounded-xl2 border border-line bg-amber-soft p-6 shadow-card">
        <h2 className="text-xl font-bold text-ink">
          Ready to try {broker.name}?
        </h2>
        <p className="mt-2 text-sm text-ink/90">
          Open an account directly with {broker.name}, or see how it stacks up
          against another broker before you decide.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href={broker.affiliateUrl}
            target="_blank"
            rel="sponsored noopener"
            className="rounded-xl bg-amber px-6 py-3.5 font-semibold text-white shadow-card hover:bg-amber-dark"
          >
            Open a {broker.name} account
          </a>
          <Link
            href={`/compare/${comparePair}`}
            className="rounded-xl border border-line bg-paper px-6 py-3.5 font-semibold text-ink hover:border-amber"
          >
            Compare {broker.name} vs {other.name}
          </Link>
          <Link
            href="/brokers"
            className="text-sm font-medium text-amber-dark underline"
          >
            Compare {broker.name} vs all brokers
          </Link>
        </div>
      </section>
      )}

      {!broker.flagged && (
        <DepositSteps
          brokerName={broker.name}
          affiliateUrl={broker.affiliateUrl}
          hasDemo={broker.demoAccount}
          minDeposit={broker.minDeposit}
        />
      )}

      <p className="mt-6 text-xs text-muted">{NOT_ADVICE}</p>

      <RelatedLinks links={CROSS_LINKS} />
    </div>
  );
}
