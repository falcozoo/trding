import type { Metadata } from "next";
import Link from "next/link";
import { getBrokers } from "@/lib/brokers";
import { RelatedLinks, CROSS_LINKS } from "@/components/RelatedLinks";
import { NOT_ADVICE } from "@/lib/site";
import CostCalculator, { type BrokerCostInput } from "./CostCalculator";

export const metadata: Metadata = {
  title:
    "Real Cost of Trading Calculator 2026 — Compare Broker Spread + Commission | Trding.io",
  description:
    "Free interactive calculator: enter your trade size and how often you trade, and see the real annual cost (spread + commission) across every broker in our dataset, ranked cheapest first. Built from published spread and commission data.",
  alternates: { canonical: "/tools/cost-of-trading" },
};

/**
 * Pass ONLY the fee-relevant fields the calculator needs to the client
 * component. We deliberately do not send minimum-deposit or rating data here —
 * this page is a fee-cost comparison, not a broker card.
 */
function toInput(): BrokerCostInput[] {
  return getBrokers().map((b) => ({
    slug: b.slug,
    name: b.name,
    avgSpreadEurUsd: b.avgSpreadEurUsd,
    commissionPerLot: b.commissionPerLot,
  }));
}

export default function CostOfTradingPage() {
  const brokers = toInput();
  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <header>
        <div className="mb-3">
          <Link href="/tools" className="text-sm text-muted hover:text-ink">
            ← All tools
          </Link>
        </div>
        <h1 className="text-3xl font-bold sm:text-4xl">
          The real cost of trading, calculated
        </h1>
        <p className="mt-4 leading-relaxed text-muted">
          The headline &ldquo;low spread&rdquo; a broker advertises is only half
          the story. What actually leaves your account is{" "}
          <strong className="text-ink">spread + commission</strong>, multiplied
          by how big you trade and how often. Enter your own trading pattern
          below and this tool works out the estimated{" "}
          <strong className="text-ink">annual cost</strong> at every broker in
          our dataset, ranked cheapest first — using each broker&apos;s{" "}
          published EUR/USD spread and per-lot commission.
        </p>
      </header>

      <CostCalculator brokers={brokers} />

      <div className="mt-8 rounded-xl border border-line bg-cream p-5 text-sm leading-relaxed text-muted">
        <p className="font-semibold text-ink">How the cost is calculated</p>
        <p className="mt-2">
          For each broker we compute the round-trip cost of one standard lot
          (100,000 units) of EUR/USD:
        </p>
        <p className="mt-2">
          <span className="font-medium text-ink">Cost per lot</span> = (spread
          in pips × €10 per pip) + commission per lot
        </p>
        <p className="mt-1">
          <span className="font-medium text-ink">Annual cost</span> = cost per
          lot × lots per trade × trades per month × 12
        </p>
        <p className="mt-2">
          A pip on a standard EUR/USD lot is worth about €10, and commission is
          the broker&apos;s stated charge per standard lot. Spread is a{" "}
          <em>typical</em> figure, not a guaranteed one — real spreads widen
          around news and in thin liquidity, and commissions can vary by account
          type. Treat the output as a like-for-like estimate for comparison, not
          an exact bill.
        </p>
      </div>

      <p className="mt-6 text-sm text-muted">{NOT_ADVICE}</p>

      <RelatedLinks
        title="Related tools & data"
        links={[
          {
            href: "/tools/regulation-checker",
            label: "Broker regulation checker",
            sub: "Who regulates each broker, with official registers",
          },
          {
            href: "/tools/position-size",
            label: "Position size calculator",
            sub: "Size a trade to a fixed risk",
          },
          ...CROSS_LINKS.slice(0, 2),
        ]}
      />
    </div>
  );
}
