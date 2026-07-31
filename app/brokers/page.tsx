import type { Metadata } from "next";
import Link from "next/link";
import { getBrokers } from "@/lib/brokers";
import { scoreBrokers } from "@/lib/scoring";
import { leadListing } from "@/lib/listingOrder";
import { Stars } from "@/components/Stars";
import { SITE } from "@/lib/site";
import { ALL_ANGLES } from "@/lib/bestFor";

export const metadata: Metadata = {
  title: "Best Brokers 2026 — Compared & Rated",
  description:
    "Compare the best brokers on regulation, fees, spreads, platforms and withdrawal speed. Neutral scoring, updated regularly. No account needed.",
};

export default function BrokersPage() {
  const scored = leadListing(scoreBrokers(getBrokers()));

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Best brokers, compared
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Every broker below is scored on the same objective criteria —
          regulation, fees, platforms, minimum deposit, withdrawal speed and
          external reputation. The ranking is neutral: being a partner never
          buys a better score. See our{" "}
          <Link href="/methodology" className="text-amber-dark underline">
            methodology
          </Link>
          .
        </p>
      </header>

      {/* Comparison table */}
      <div className="mt-10 overflow-x-auto rounded-xl2 border border-line bg-paper shadow-card">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-line bg-cream text-xs uppercase tracking-wide text-muted">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Broker</th>
              <th className="px-4 py-3">Score</th>
              <th className="px-4 py-3">Min deposit</th>
              <th className="px-4 py-3">EUR/USD spread</th>
              <th className="px-4 py-3">Regulation</th>
              <th className="px-4 py-3">Platforms</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {scored.map((s, i) => (
              <tr
                key={s.broker.slug}
                className={
                  i === 0
                    ? "border-b border-amber/30 bg-amber-soft/50"
                    : "border-b border-line last:border-0 hover:bg-cream/60"
                }
              >
                <td className="px-4 py-4 font-medium text-muted">
                  {i === 0 ? (
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber text-xs font-bold text-white">
                      1
                    </span>
                  ) : (
                    i + 1
                  )}
                </td>
                <td className="px-4 py-4">
                  <Link
                    href={`/brokers/${s.broker.slug}`}
                    className="font-bold text-ink hover:text-amber-dark"
                  >
                    {s.broker.name}
                  </Link>
                  {i === 0 && (
                    <span className="ml-2 rounded-full bg-amber px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      Best choice
                    </span>
                  )}
                  <div className="text-xs text-muted">{s.broker.tagline}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="font-bold">{s.score.toFixed(1)}</div>
                  <Stars value={s.score} size="sm" />
                </td>
                <td className="px-4 py-4">
                  Recommended: €{SITE.recommendedMinDeposit}
                </td>
                <td className="px-4 py-4">{s.broker.avgSpreadEurUsd} pips</td>
                <td className="px-4 py-4 text-xs">
                  {s.broker.regulators.join(", ")}
                </td>
                <td className="px-4 py-4 text-xs">
                  {s.broker.platforms.join(", ")}
                </td>
                <td className="px-4 py-4">
                  <a
                    href={s.broker.affiliateUrl}
                    target="_blank"
                    rel="sponsored noopener"
                    className="whitespace-nowrap rounded-lg bg-amber px-3 py-2 text-xs font-semibold text-white hover:bg-amber-dark"
                  >
                    Open account
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* SEO intro / FAQ */}
      <section className="mt-14 max-w-3xl space-y-8">
        <div>
          <h2 className="text-2xl font-bold">How to choose a broker</h2>
          <p className="mt-3 leading-relaxed text-muted">
            The right broker depends on your profile. If you&apos;re starting
            out, prioritise strong regulation, a free demo account and a low
            minimum deposit. If you trade actively, spreads and commissions
            matter most. Whatever your priority, never trade with an unregulated
            broker, and always check withdrawal terms before depositing.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl font-bold">Frequently asked questions</h2>
          {[
            {
              q: "Is Trding.io free to use?",
              a: "Yes. Comparing brokers is completely free and requires no account. We earn a commission from some brokers via affiliate links, which never affects our scores.",
            },
            {
              q: "How is the score calculated?",
              a: "Purely from objective criteria (regulation, fees, platforms, deposit, withdrawal speed, reputation), using a published formula. See our methodology page.",
            },
            {
              q: "Are these brokers available in my country?",
              a: "The brokers listed serve English-speaking Europe and the Nordics. Take the quiz to filter by your country of residence.",
            },
          ].map((f) => (
            <div
              key={f.q}
              className="rounded-xl border border-line bg-paper p-5 shadow-card"
            >
              <h3 className="font-semibold">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Best brokers by need — internal link grid */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold">Best brokers by need</h2>
        <p className="mt-2 max-w-3xl text-muted">
          Want a shortlist tuned to one priority? These data-driven rankings
          filter and score brokers for a specific platform, market or trading
          style.
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
    </div>
  );
}
