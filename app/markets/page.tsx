import type { Metadata } from "next";
import Link from "next/link";
import { FearGreed } from "@/components/FearGreed";
import { MarketPrices } from "@/components/MarketPrices";
import { NewsFeed } from "@/components/NewsFeed";
import {
  getFearGreed,
  getMarketPrices,
  getMarketNews,
} from "@/lib/markets";

/** ISR: revalidate the whole route every 15 minutes. */
export const revalidate = 900;

export function generateMetadata(): Metadata {
  return {
    title: "Live Markets — Newswire, Prices & Sentiment",
    description:
      "A fast, neutral market pulse: a live financial newswire plus Gold, EUR/USD, S&P 500, Nasdaq and Bitcoin prices and the Fear & Greed Index. Delayed and indicative — information only.",
    alternates: { canonical: "/markets" },
  };
}

export default async function MarketsPage() {
  // Fetch everything in parallel; helpers never throw (return null on failure).
  const [fg, prices, news] = await Promise.all([
    getFearGreed(),
    getMarketPrices(),
    getMarketNews(30),
  ]);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <header className="max-w-3xl">
        <p className="mb-4 inline-block rounded-full bg-amber-soft px-3 py-1 text-sm font-medium text-amber-dark">
          Live · refreshes ~every 15 min
        </p>
        <h1 className="text-3xl font-bold sm:text-4xl">Markets today</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          A fast, neutral read on what&apos;s moving: a live financial newswire,
          the prices that matter, and overall market mood. It&apos;s here to give
          you context — not a trading signal.
        </p>
      </header>

      {/* Prices strip */}
      <div className="mt-10">
        <MarketPrices data={prices} />
      </div>

      {/* Newswire (hero) + sentiment side rail */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewsFeed data={news} />
        </div>
        <div className="flex flex-col gap-6">
          <FearGreed data={fg} />
          <div className="rounded-xl2 border border-line bg-paper p-6 shadow-card">
            <h2 className="text-lg font-semibold">Ready to start?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Reading the market is one thing — acting on it needs a regulated,
              low-cost broker. See our neutral scoreboard or find your match in
              60 seconds.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/quiz"
                className="rounded-lg bg-amber px-4 py-2.5 text-center font-semibold text-white hover:bg-amber-dark"
              >
                Find my broker →
              </Link>
              <Link
                href="/brokers"
                className="rounded-lg border border-line px-4 py-2.5 text-center font-semibold text-ink hover:bg-cream"
              >
                Compare all brokers
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 rounded-xl border border-line bg-cream p-5">
        <h2 className="text-sm font-semibold text-ink">About this data</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Figures and headlines are <strong>delayed and indicative</strong> and
          may differ from your broker or exchange. Prices and news are aggregated
          from public financial data sources; the Fear &amp; Greed Index is
          provided by Alternative.me. This page is for general information only
          and is <strong>not investment advice</strong>, a recommendation, or an
          offer to buy or sell any asset. Markets are volatile and you can lose
          money. Always do your own research.
        </p>
        <p className="mt-2 text-xs text-muted">
          Sources: Yahoo Finance · alternative.me
        </p>
      </div>
    </div>
  );
}
