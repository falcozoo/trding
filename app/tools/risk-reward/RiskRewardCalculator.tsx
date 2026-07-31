"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { NOT_ADVICE } from "@/lib/site";

const eur = (n: number) =>
  n.toLocaleString("en-IE", { style: "currency", currency: "EUR" });

export default function RiskRewardCalculator() {
  const [entry, setEntry] = useState("1.1000");
  const [stop, setStop] = useState("1.0950");
  const [target, setTarget] = useState("1.1120");
  const [balance, setBalance] = useState("10000");
  const [riskPct, setRiskPct] = useState("1");

  const result = useMemo(() => {
    const e = parseFloat(entry);
    const s = parseFloat(stop);
    const t = parseFloat(target);
    const bal = parseFloat(balance);
    const risk = parseFloat(riskPct);

    if (![e, s, t, bal, risk].every(isFinite) || bal <= 0 || risk <= 0) {
      return null;
    }

    const riskPerUnit = Math.abs(e - s);
    const rewardPerUnit = Math.abs(t - e);
    if (riskPerUnit === 0) return null;

    const rr = rewardPerUnit / riskPerUnit;
    const moneyRisked = bal * (risk / 100);
    const potentialReward = moneyRisked * rr;
    // position size in units so that (riskPerUnit * units) = moneyRisked
    const units = moneyRisked / riskPerUnit;

    // direction sanity: is target on the profitable side of entry?
    const isLong = e > s;
    const targetValid = isLong ? t > e : t < e;

    return { rr, moneyRisked, potentialReward, units, targetValid };
  }, [entry, stop, target, balance, riskPct]);

  const rrColor =
    result == null
      ? "text-ink"
      : result.rr >= 2
      ? "text-[#2C7C4C]"
      : result.rr >= 1
      ? "text-amber-dark"
      : "text-[#C23B3B]";

  const rrBg =
    result == null
      ? "border-line bg-paper"
      : result.rr >= 2
      ? "border-[#3FA66A] bg-[#eaf6ef]"
      : result.rr >= 1
      ? "border-amber bg-amber-soft"
      : "border-[#E85D5D] bg-[#fdecec]";

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <header>
        <div className="mb-3">
          <Link href="/tools" className="text-sm text-muted hover:text-ink">
            ← All tools
          </Link>
        </div>
        <h1 className="text-3xl font-bold sm:text-4xl">
          Risk/reward &amp; R-multiple calculator
        </h1>
        <p className="mt-4 leading-relaxed text-muted">
          Your reward-to-risk ratio (often written R:R, or measured in
          &ldquo;R multiples&rdquo;) tells you how much you stand to gain for
          every unit you risk. A ratio of 2 means the potential reward is twice
          the potential loss. Enter your planned entry, stop-loss and target
          prices to see the ratio, the money at stake and how big a position
          fits your chosen risk. It all runs in your browser.
        </p>
      </header>

      <div className="mt-8 rounded-xl2 border border-line bg-paper p-6 shadow-card">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Entry price" value={entry} onChange={setEntry} />
          <Field label="Stop-loss price" value={stop} onChange={setStop} />
          <Field label="Target price" value={target} onChange={setTarget} />
          <Field
            label="Account balance (€)"
            value={balance}
            onChange={setBalance}
          />
          <Field
            label="Risk per trade (%)"
            value={riskPct}
            onChange={setRiskPct}
            hint="1–2% is a common conservative range."
          />
        </div>
      </div>

      {result && !result.targetValid && (
        <p className="mt-4 rounded-lg border border-amber bg-amber-soft px-4 py-3 text-sm text-amber-dark">
          Heads up: your target is on the same side as your stop relative to the
          entry. Double-check your entry, stop and target directions.
        </p>
      )}

      {/* R:R headline */}
      <div className={`mt-6 rounded-xl2 border p-6 shadow-card ${rrBg}`}>
        <p className="text-sm font-medium text-muted">Reward-to-risk ratio</p>
        <p className={`mt-1 text-4xl font-extrabold ${rrColor}`}>
          {result ? `${result.rr.toFixed(2)} : 1` : "—"}
        </p>
        <p className="mt-1 text-sm text-muted">
          {result == null
            ? "Enter valid prices to calculate."
            : result.rr >= 2
            ? "Strong: reward is at least twice the risk."
            : result.rr >= 1
            ? "Acceptable, but reward only modestly beats risk."
            : "Weak: you are risking more than the potential reward."}
        </p>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <ResultCard
          label="Money at risk"
          value={result ? eur(result.moneyRisked) : "—"}
        />
        <ResultCard
          label="Potential reward"
          value={result ? eur(result.potentialReward) : "—"}
        />
        <ResultCard
          label="Position size"
          value={result ? `${result.units.toLocaleString("en-IE", {
            maximumFractionDigits: 0,
          })} units` : "—"}
        />
      </div>

      <div className="mt-6 rounded-xl border border-line bg-cream p-5 text-sm leading-relaxed text-muted">
        <p className="font-semibold text-ink">Formula used</p>
        <p className="mt-2">
          <span className="font-medium text-ink">R:R</span> = |target − entry| ÷
          |entry − stop|
        </p>
        <p className="mt-1">
          <span className="font-medium text-ink">Money at risk</span> = balance ×
          (risk % ÷ 100)
        </p>
        <p className="mt-1">
          <span className="font-medium text-ink">Position size (units)</span> =
          money at risk ÷ |entry − stop|
        </p>
        <p className="mt-1">
          <span className="font-medium text-ink">Potential reward</span> = money
          at risk × R:R
        </p>
      </div>

      <p className="mt-6 text-sm text-muted">
        A good ratio does not make a trade a winner — it only shapes the payoff
        if it works. Your win rate matters just as much. {NOT_ADVICE}
      </p>

      <SoftCta />
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-line bg-cream px-4 py-2.5 text-sm outline-none focus:border-amber"
      />
      {hint && <p className="mt-1 text-xs text-muted">{hint}</p>}
    </div>
  );
}

function ResultCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl2 border border-line bg-paper p-5 shadow-card">
      <p className="text-sm font-medium text-muted">{label}</p>
      <p className="mt-1 text-xl font-bold text-ink">{value}</p>
    </div>
  );
}

function SoftCta() {
  return (
    <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-xl2 border border-amber bg-amber-soft p-6 shadow-card sm:flex-row sm:items-center">
      <div>
        <h2 className="text-lg font-bold text-ink">Ready to trade?</h2>
        <p className="mt-1 text-sm text-muted">
          Find a regulated broker that matches your budget and style.
        </p>
      </div>
      <Link
        href="/quiz"
        className="whitespace-nowrap rounded-xl bg-amber px-6 py-3.5 font-semibold text-white shadow-card transition hover:bg-amber-dark"
      >
        Find a regulated broker →
      </Link>
    </div>
  );
}
