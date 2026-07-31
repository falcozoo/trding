"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { NOT_ADVICE } from "@/lib/site";

const eur = (n: number) =>
  n.toLocaleString("en-IE", { style: "currency", currency: "EUR" });

export default function CompoundingCalculator() {
  const [start, setStart] = useState("1000");
  const [gainPct, setGainPct] = useState("5");
  const [periods, setPeriods] = useState("12");

  const { rows, final, totalGrowthPct } = useMemo(() => {
    const s = parseFloat(start);
    const g = parseFloat(gainPct);
    const n = Math.min(Math.max(Math.floor(parseFloat(periods) || 0), 0), 120);

    if (!isFinite(s) || !isFinite(g) || s <= 0 || n <= 0) {
      return { rows: [], final: null as number | null, totalGrowthPct: 0 };
    }

    const rows: { period: number; balance: number; gain: number }[] = [];
    let balance = s;
    for (let i = 1; i <= n; i++) {
      const gain = balance * (g / 100);
      balance += gain;
      rows.push({ period: i, balance, gain });
    }
    const final = balance;
    const totalGrowthPct = ((final - s) / s) * 100;
    return { rows, final, totalGrowthPct };
  }, [start, gainPct, periods]);

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <header>
        <div className="mb-3">
          <Link href="/tools" className="text-sm text-muted hover:text-ink">
            ← All tools
          </Link>
        </div>
        <h1 className="text-3xl font-bold sm:text-4xl">
          Compounding &amp; growth projection
        </h1>
        <p className="mt-4 leading-relaxed text-muted">
          Compounding is the effect of earning a return on your previous
          returns, so a balance can grow faster over time. This tool shows what
          a <em>constant</em> percentage gain per period would look like if it
          repeated. It is a pure maths exercise to illustrate the shape of
          compounding — read the honesty note below before you draw any
          conclusions.
        </p>
      </header>

      {/* Mandatory honesty note */}
      <div className="mt-6 rounded-xl2 border-2 border-[#E85D5D] bg-[#fdecec] p-5 text-sm leading-relaxed text-[#8a2a2a]">
        <p className="font-bold">⚠ Read this first — it&apos;s a projection, not a prediction.</p>
        <p className="mt-2">
          This calculator assumes you earn the <strong>exact same gain every
          single period, forever, with no losing periods</strong>. Real trading
          never works like that. Returns are volatile, losses are inevitable,
          and a run of bad periods compounds downward just as fast as gains
          compound upward.
        </p>
        <p className="mt-2">
          <strong>Most retail traders lose money.</strong> Consistent,
          repeatable percentage gains are extremely rare — the vast majority of
          people who assume steady compounding never achieve it. Do not treat
          any number here as income you can expect. It is only what the maths
          would produce <em>if</em> an unrealistic assumption held.
        </p>
      </div>

      <div className="mt-6 rounded-xl2 border border-line bg-paper p-6 shadow-card">
        <div className="grid gap-5 sm:grid-cols-3">
          <Field label="Starting balance (€)" value={start} onChange={setStart} />
          <Field
            label="Gain per period (%)"
            value={gainPct}
            onChange={setGainPct}
          />
          <Field
            label="Number of periods"
            value={periods}
            onChange={setPeriods}
            hint="Max 120."
          />
        </div>
      </div>

      {final != null && (
        <>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl2 border border-amber bg-amber-soft p-6 shadow-card">
              <p className="text-sm font-medium text-muted">
                Projected final balance
              </p>
              <p className="mt-1 text-3xl font-bold text-amber-dark">
                {eur(final)}
              </p>
            </div>
            <div className="rounded-xl2 border border-line bg-paper p-6 shadow-card">
              <p className="text-sm font-medium text-muted">Total growth</p>
              <p className="mt-1 text-3xl font-bold text-ink">
                +{totalGrowthPct.toLocaleString("en-IE", {
                  maximumFractionDigits: 0,
                })}
                %
              </p>
            </div>
          </div>

          {/* Table */}
          <div className="mt-6 overflow-hidden rounded-xl2 border border-line bg-paper shadow-card">
            <div className="grid grid-cols-3 gap-2 border-b border-line bg-cream px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
              <span>Period</span>
              <span className="text-right">Gain</span>
              <span className="text-right">Balance</span>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {rows.map((r) => (
                <div
                  key={r.period}
                  className="grid grid-cols-3 gap-2 border-b border-line px-5 py-2.5 text-sm last:border-0"
                >
                  <span className="text-muted">#{r.period}</span>
                  <span className="text-right text-[#2C7C4C]">
                    +{eur(r.gain)}
                  </span>
                  <span className="text-right font-semibold text-ink">
                    {eur(r.balance)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="mt-6 rounded-xl border border-line bg-cream p-5 text-sm leading-relaxed text-muted">
        <p className="font-semibold text-ink">Formula used</p>
        <p className="mt-2">
          <span className="font-medium text-ink">Final balance</span> = start ×
          (1 + gain% ÷ 100)<sup>periods</sup>
        </p>
        <p className="mt-1">
          Each row applies the gain to the previous period&apos;s balance.
        </p>
      </div>

      <p className="mt-6 text-sm text-muted">{NOT_ADVICE}</p>

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
