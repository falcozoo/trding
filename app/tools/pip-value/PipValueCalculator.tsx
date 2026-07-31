"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { NOT_ADVICE } from "@/lib/site";

/**
 * Simplified pip-value model.
 * Standard lot = 100,000 units. A pip is 0.0001 for most pairs, 0.01 for JPY pairs.
 * Pip value per standard lot ≈ pipSize × 100,000 = 10 (non-JPY) or 1,000 JPY (JPY).
 * We express the result in the account currency using an illustrative fixed rate.
 * This is an ESTIMATE only.
 */
const PAIRS = [
  { label: "EUR/USD (major)", pipSize: 0.0001, quote: "USD" },
  { label: "GBP/USD (major)", pipSize: 0.0001, quote: "USD" },
  { label: "AUD/USD (major)", pipSize: 0.0001, quote: "USD" },
  { label: "USD/JPY (JPY pair)", pipSize: 0.01, quote: "JPY" },
  { label: "EUR/JPY (JPY pair)", pipSize: 0.01, quote: "JPY" },
  { label: "EUR/GBP (cross)", pipSize: 0.0001, quote: "GBP" },
];

const LOTS = [
  { label: "Standard lot (100,000 units)", units: 100000 },
  { label: "Mini lot (10,000 units)", units: 10000 },
  { label: "Micro lot (1,000 units)", units: 1000 },
];

const CURRENCIES = ["EUR", "USD", "GBP"];

/** Illustrative fixed rates to convert quote currency → account currency. */
const RATE_TO: Record<string, Record<string, number>> = {
  EUR: { USD: 0.92, JPY: 0.0061, GBP: 1.17 },
  USD: { USD: 1, JPY: 0.0066, GBP: 1.27 },
  GBP: { USD: 0.79, JPY: 0.0052, GBP: 1 },
};

export default function PipValueCalculator() {
  const [pairIdx, setPairIdx] = useState(0);
  const [lotIdx, setLotIdx] = useState(0);
  const [currency, setCurrency] = useState("EUR");

  const result = useMemo(() => {
    const pair = PAIRS[pairIdx];
    const lot = LOTS[lotIdx];
    // pip value in the quote currency
    const pipInQuote = pair.pipSize * lot.units;
    const rate = RATE_TO[currency][pair.quote] ?? 1;
    const pipInAccount = pipInQuote * rate;
    return { pipInQuote, quote: pair.quote, pipInAccount };
  }, [pairIdx, lotIdx, currency]);

  const money = (n: number, ccy: string) =>
    n.toLocaleString("en-IE", { style: "currency", currency: ccy });

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <header>
        <div className="mb-3">
          <Link href="/tools" className="text-sm text-muted hover:text-ink">
            ← All tools
          </Link>
        </div>
        <h1 className="text-3xl font-bold sm:text-4xl">Pip value calculator</h1>
        <p className="mt-4 leading-relaxed text-muted">
          A &ldquo;pip&rdquo; is the smallest standard price move for a currency
          pair — usually the fourth decimal place (0.0001), or the second
          decimal (0.01) for pairs quoted in Japanese yen. Knowing what one pip
          is worth for your position tells you how much each price tick moves
          your profit or loss. Pick a pair, a lot size and your account currency
          for a quick estimate.
        </p>
      </header>

      <div className="mt-8 rounded-xl2 border border-line bg-paper p-6 shadow-card">
        <div className="grid gap-5 sm:grid-cols-3">
          <Select
            label="Currency pair"
            value={pairIdx}
            onChange={setPairIdx}
            options={PAIRS.map((p, i) => ({ value: i, label: p.label }))}
          />
          <Select
            label="Lot size"
            value={lotIdx}
            onChange={setLotIdx}
            options={LOTS.map((l, i) => ({ value: i, label: l.label }))}
          />
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              Account currency
            </label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full rounded-lg border border-line bg-cream px-4 py-2.5 text-sm outline-none focus:border-amber"
            >
              {CURRENCIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl2 border border-amber bg-amber-soft p-6 shadow-card">
          <p className="text-sm font-medium text-muted">
            Value per pip (≈ in {currency})
          </p>
          <p className="mt-1 text-3xl font-bold text-amber-dark">
            {money(result.pipInAccount, currency)}
          </p>
        </div>
        <div className="rounded-xl2 border border-line bg-paper p-6 shadow-card">
          <p className="text-sm font-medium text-muted">
            Value per pip (in quote currency)
          </p>
          <p className="mt-1 text-2xl font-bold text-ink">
            {money(result.pipInQuote, result.quote)}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-line bg-cream p-5 text-sm leading-relaxed text-muted">
        <p className="font-semibold text-ink">How it&apos;s worked out</p>
        <p className="mt-2">
          <span className="font-medium text-ink">Pip value (quote ccy)</span> =
          pip size × lot units
        </p>
        <p className="mt-1">
          Then converted to your account currency using an illustrative fixed
          exchange rate.
        </p>
      </div>

      <p className="mt-6 rounded-lg border border-amber bg-amber-soft px-4 py-3 text-sm text-amber-dark">
        <strong>This is an estimate.</strong> Real pip values change constantly
        with the live exchange rate and depend on your broker&apos;s exact
        contract sizes and account currency. Use your broker&apos;s figures for
        real trades.
      </p>

      <p className="mt-4 text-sm text-muted">{NOT_ADVICE}</p>

      <SoftCta />
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  options: { value: number; label: string }[];
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-lg border border-line bg-cream px-4 py-2.5 text-sm outline-none focus:border-amber"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
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
