import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Insights — Data-Driven Research on Brokers, Fees & Regulation",
  description:
    "Original, primary-sourced research on CFD trading: regulator loss data, leverage limits worldwide, hidden costs and how to spot scam brokers. Free to cite.",
  alternates: { canonical: "/insights" },
};

export default function InsightsHubPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Insights &amp; research</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Original, primary-sourced research on the things that actually matter
          to traders: regulation, fees, leverage and safety. Every figure is
          linked to a regulator (FCA, ESMA, ASIC). Journalists and writers are
          free to cite these with attribution.
        </p>
      </header>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {/* Studies live under /studies but we surface the flagship one here too */}
        <Link
          href="/studies/how-many-traders-lose-money"
          className="group flex flex-col rounded-xl2 border border-line bg-paper p-6 shadow-card transition hover:-translate-y-0.5 hover:border-amber"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-amber-dark">
            Regulator data
          </span>
          <h2 className="mt-2 text-xl font-bold text-ink group-hover:text-amber-dark">
            Do most traders really lose money?
          </h2>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
            FCA, ESMA and ASIC data, cross-compared: 68%–89% of retail CFD
            traders lose money. The official figures, primary-sourced.
          </p>
          <span className="mt-4 text-sm font-semibold text-amber-dark">
            Read the research →
          </span>
        </Link>

        {ARTICLES.map((a) => (
          <Link
            key={a.slug}
            href={`/insights/${a.slug}`}
            className="group flex flex-col rounded-xl2 border border-line bg-paper p-6 shadow-card transition hover:-translate-y-0.5 hover:border-amber"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-amber-dark">
              Insight
            </span>
            <h2 className="mt-2 text-xl font-bold text-ink group-hover:text-amber-dark">
              {a.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {a.description}
            </p>
            <span className="mt-4 text-sm font-semibold text-amber-dark">
              Read the research →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
