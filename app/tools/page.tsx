import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Trading Tools & Calculators — Position Size, Risk/Reward, Pip Value",
  description:
    "Free, no-signup trading calculators: position size, risk/reward & R-multiple, pip value and a compounding projection. Fast, mobile-friendly, and honest about risk.",
  alternates: { canonical: "/tools" },
};

const TOOLS = [
  {
    href: "/tools/cost-of-trading",
    badge: "Broker data",
    title: "Real cost of trading calculator",
    desc: "Enter your trade size and frequency to see the real annual cost (spread + commission) at every broker in our dataset, ranked cheapest first.",
  },
  {
    href: "/tools/regulation-checker",
    badge: "Broker data",
    title: "Broker regulation checker",
    desc: "See which authorities regulate each broker (FCA, ASIC, CySEC and more), with direct links to the official registers so you can verify a licence yourself.",
  },
  {
    href: "/tools/position-size",
    badge: "Risk management",
    title: "Position size calculator",
    desc: "Work out exactly how many lots to trade for a fixed risk per trade, based on your balance, risk % and stop-loss in pips.",
  },
  {
    href: "/tools/risk-reward",
    badge: "Risk management",
    title: "Risk/reward & R-multiple",
    desc: "Enter your entry, stop and target to see your reward-to-risk ratio, the money at stake and the potential reward.",
  },
  {
    href: "/tools/pip-value",
    badge: "Forex",
    title: "Pip value calculator",
    desc: "Estimate how much one pip is worth for a given FX pair and lot size, in your account currency.",
  },
  {
    href: "/tools/compounding",
    badge: "Planning",
    title: "Compounding projection",
    desc: "See how a fixed percentage gain compounds over time — a maths projection, not a prediction of your results.",
  },
];

export default function ToolsHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Free trading tools</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Simple, accurate calculators to help you size trades and manage risk
          — no sign-up, no data leaves your browser. Everything runs on your
          device. These are planning tools, not investment advice, and no
          calculator can make trading profitable or safe.
        </p>
      </header>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {TOOLS.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group flex flex-col rounded-xl2 border border-line bg-paper p-6 shadow-card transition hover:-translate-y-0.5 hover:border-amber"
          >
            <div className="mb-3">
              <span className="rounded-full bg-amber-soft px-2.5 py-1 text-xs font-semibold text-amber-dark">
                {t.badge}
              </span>
            </div>
            <h2 className="text-xl font-bold text-ink group-hover:text-amber-dark">
              {t.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {t.desc}
            </p>
            <span className="mt-4 text-sm font-semibold text-amber-dark">
              Open calculator →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-12 max-w-3xl rounded-xl border border-line bg-cream p-5 text-sm leading-relaxed text-muted">
        <strong className="text-ink">A note on risk.</strong> These tools are
        for general information and education only, not investment advice.
        Trading involves substantial risk of loss and most retail traders lose
        money. Never risk money you cannot afford to lose.
      </div>
    </div>
  );
}
