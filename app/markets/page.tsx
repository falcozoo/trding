import type { Metadata } from "next";
import { FearGreed } from "@/components/FearGreed";
import { PriceTicker } from "@/components/PriceTicker";
import { getFearGreed, getPrices } from "@/lib/markets";

/** ISR: revalidate the whole route every 15 minutes. */
export const revalidate = 900;

export function generateMetadata(): Metadata {
  return {
    title: "Live Markets — Crypto Fear & Greed + Prices",
    description:
      "A quick, neutral pulse on crypto markets: the Fear & Greed Index and live BTC, ETH and SOL prices with 24h change. Delayed and indicative — for information only.",
    alternates: { canonical: "/markets" },
  };
}

export default async function MarketsPage() {
  // Fetch both in parallel; helpers never throw (return null on failure).
  const [fg, prices] = await Promise.all([getFearGreed(), getPrices()]);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <header className="max-w-3xl">
        <p className="mb-4 inline-block rounded-full bg-amber-soft px-3 py-1 text-sm font-medium text-amber-dark">
          Freshness layer · refreshes ~every 15 min
        </p>
        <h1 className="text-3xl font-bold sm:text-4xl">Live markets</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          A quick, neutral read on crypto sentiment and prices. We pull this from
          free public data sources and cache it so the page stays fast. It&apos;s
          here to give you context — not a trading signal.
        </p>
      </header>

      <div className="mt-10 grid gap-6">
        <FearGreed data={fg} />
        <PriceTicker data={prices} />
      </div>

      {/* Disclaimer */}
      <div className="mt-8 rounded-xl border border-line bg-cream p-5">
        <h2 className="text-sm font-semibold text-ink">
          About this data
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Figures are <strong>delayed and indicative</strong> and may differ from
          your broker or exchange. The Fear &amp; Greed Index is provided by
          Alternative.me; prices are provided by CoinGecko. This page is for
          general information only and is <strong>not investment advice</strong>,
          a recommendation, or an offer to buy or sell any asset. Crypto assets
          are volatile and you can lose money. Always do your own research.
        </p>
        <p className="mt-2 text-xs text-muted">
          Sources: alternative.me · coingecko.com
        </p>
      </div>
    </div>
  );
}
