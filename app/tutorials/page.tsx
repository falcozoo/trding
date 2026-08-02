import type { Metadata } from "next";
import Link from "next/link";
import { TUTORIALS } from "@/lib/tutorials";

export const metadata: Metadata = {
  title: "Trading Tutorials — Step-by-Step Technical Guides",
  description:
    "Free step-by-step trading tutorials: install MetaTrader 4 & 5, add an Expert Advisor, backtest a strategy, and calculate position size. Beginner-friendly and honest about risk.",
  alternates: { canonical: "/tutorials" },
};

export default function TutorialsHubPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Trading tutorials</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Clear, step-by-step technical guides for real trading tasks: installing
          platforms, adding Expert Advisors, backtesting strategies and sizing
          your positions. Written for beginners, honest about the risks, and free
          to reference.
        </p>
      </header>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {TUTORIALS.map((t) => (
          <Link
            key={t.slug}
            href={`/tutorials/${t.slug}`}
            className="group flex flex-col rounded-xl2 border border-line bg-paper p-6 shadow-card transition hover:-translate-y-0.5 hover:border-amber"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-amber-dark">
              Tutorial
            </span>
            <h2 className="mt-2 text-xl font-bold text-ink group-hover:text-amber-dark">
              {t.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {t.description}
            </p>
            <span className="mt-4 text-sm font-semibold text-amber-dark">
              Read the tutorial →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-12 max-w-3xl rounded-xl border border-line bg-cream p-5 text-sm leading-relaxed text-muted">
        <strong className="text-ink">A note on risk.</strong> These tutorials are
        educational only, not investment advice. Trading involves substantial risk
        of loss, and most retail traders lose money. Learning the tools does not
        change the odds — sound risk management does.
      </div>
    </div>
  );
}
