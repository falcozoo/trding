import Link from "next/link";
import { getBrokers } from "@/lib/brokers";
import { scoreBrokers } from "@/lib/scoring";
import { Stars } from "@/components/Stars";
import { FearGreed } from "@/components/FearGreed";
import { getFearGreed } from "@/lib/markets";

/** Keep the homepage fresh: refresh the market pulse ~every 15 min. */
export const revalidate = 900;

export default async function HomePage() {
  const top = scoreBrokers(getBrokers()).slice(0, 3);
  const fg = await getFearGreed(); // never throws; null-safe teaser below

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-12 sm:pt-24">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full bg-amber-soft px-3 py-1 text-sm font-medium text-amber-dark">
            Neutral. No jargon. No sales pitch.
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Find the right broker in{" "}
            <span className="text-amber">60 seconds</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            We rate the market so you don&apos;t have to. Compare regulation,
            fees, platforms and payout speed — scored objectively, never by who
            pays us the most. No account needed.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/quiz"
              className="rounded-xl bg-amber px-6 py-3.5 text-center font-semibold text-white shadow-card transition hover:bg-amber-dark"
            >
              Take the 60-second quiz
            </Link>
            <Link
              href="/brokers"
              className="rounded-xl border border-line bg-paper px-6 py-3.5 text-center font-semibold text-ink transition hover:border-amber"
            >
              Compare all brokers
            </Link>
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              t: "Scored, not sold",
              d: "Our rating comes only from objective facts. A partner can score low. A non-partner can rank first.",
            },
            {
              t: "Built for beginners",
              d: "Plain language, no chart-porn, no gurus. Made for people who value clarity over hype.",
            },
            {
              t: "Always dated",
              d: "Every broker shows when we last verified its facts. A credible comparator dates its data.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-xl2 border border-line bg-paper p-6 shadow-card"
            >
              <h3 className="text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Market pulse teaser */}
      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex flex-col items-start gap-4 rounded-xl2 border border-line bg-paper p-6 shadow-card sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-semibold text-ink">
              Market pulse
            </span>
            <FearGreed data={fg} variant="compact" />
          </div>
          <Link
            href="/markets"
            className="text-sm font-semibold text-amber-dark hover:underline"
          >
            See live markets →
          </Link>
        </div>
      </section>

      {/* Top brokers preview */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Top-rated brokers right now
          </h2>
          <Link
            href="/brokers"
            className="text-sm font-semibold text-amber-dark hover:underline"
          >
            See full comparison →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {top.map((s, i) => (
            <Link
              key={s.broker.slug}
              href={`/brokers/${s.broker.slug}`}
              className="group rounded-xl2 border border-line bg-paper p-6 shadow-card transition hover:border-amber"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted">#{i + 1}</span>
                <span className="rounded-full bg-cream px-2.5 py-0.5 text-sm font-bold text-ink">
                  {s.score.toFixed(1)}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-bold group-hover:text-amber-dark">
                {s.broker.name}
              </h3>
              <div className="mt-1">
                <Stars value={s.score} size="sm" />
              </div>
              <p className="mt-2 text-sm text-muted">{s.broker.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
