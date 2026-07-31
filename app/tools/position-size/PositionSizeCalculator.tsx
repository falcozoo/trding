"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { NOT_ADVICE } from "@/lib/site";

const INSTRUMENTS = [
  { label: "FX major (EUR/USD, GBP/USD…) — €10 / pip per lot", pipValue: 10 },
  { label: "FX JPY pair (USD/JPY…) — ~€9 / pip per lot", pipValue: 9 },
  { label: "Gold (XAU/USD) — ~€10 / pip per lot", pipValue: 10 },
  { label: "Custom pip value", pipValue: 0 },
];

const eur = (n: number) =>
  n.toLocaleString("en-IE", { style: "currency", currency: "EUR" });

export default function PositionSizeCalculator() {
  const [balance, setBalance] = useState("10000");
  const [riskPct, setRiskPct] = useState("1");
  const [stopPips, setStopPips] = useState("20");
  const [instrument, setInstrument] = useState(0);
  const [customPip, setCustomPip] = useState("10");

  const result = useMemo(() => {
    const bal = parseFloat(balance);
    const risk = parseFloat(riskPct);
    const pips = parseFloat(stopPips);
    const pipValue =
      instrument === INSTRUMENTS.length - 1
        ? parseFloat(customPip)
        : INSTRUMENTS[instrument].pipValue;

    if (
      !isFinite(bal) ||
      !isFinite(risk) ||
      !isFinite(pips) ||
      !isFinite(pipValue) ||
      bal <= 0 ||
      risk <= 0 ||
      pips <= 0 ||
      pipValue <= 0
    ) {
      return null;
    }

    const moneyRisked = bal * (risk / 100);
    const lots = moneyRisked / (pips * pipValue);
    return { moneyRisked, lots, pipValue };
  }, [balance, riskPct, stopPips, instrument, customPip]);

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <header>
        <div className="mb-3">
          <Link href="/tools" className="text-sm text-muted hover:text-ink">
            ← All tools
          </Link>
        </div>
        <h1 className="text-3xl font-bold sm:text-4xl">
          Position size calculator
        </h1>
        <p className="mt-4 leading-relaxed text-muted">
          Position sizing is the single most important part of risk management.
          This calculator tells you how many lots to trade so that a losing
          trade only costs a fixed, pre-planned amount of your account. Enter
          your balance, the percentage you&apos;re willing to risk on the trade,
          and your stop-loss distance in pips — everything is worked out in your
          browser, nothing is sent anywhere.
        </p>
      </header>

      {/* Inputs */}
      <div className="mt-8 rounded-xl2 border border-line bg-paper p-6 shadow-card">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Account balance (€)"
            value={balance}
            onChange={setBalance}
            type="number"
          />
          <Field
            label="Risk per trade (%)"
            value={riskPct}
            onChange={setRiskPct}
            type="number"
            hint="1–2% is a common conservative range."
          />
          <Field
            label="Stop-loss (pips)"
            value={stopPips}
            onChange={setStopPips}
            type="number"
          />
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              Instrument / pip value
            </label>
            <select
              value={instrument}
              onChange={(e) => setInstrument(Number(e.target.value))}
              className="w-full rounded-lg border border-line bg-cream px-4 py-2.5 text-sm outline-none focus:border-amber"
            >
              {INSTRUMENTS.map((i, idx) => (
                <option key={idx} value={idx}>
                  {i.label}
                </option>
              ))}
            </select>
            {instrument === INSTRUMENTS.length - 1 && (
              <input
                type="number"
                value={customPip}
                onChange={(e) => setCustomPip(e.target.value)}
                placeholder="€ per pip per lot"
                className="mt-2 w-full rounded-lg border border-line bg-cream px-4 py-2.5 text-sm outline-none focus:border-amber"
              />
            )}
          </div>
        </div>
      </div>

      {/* Output */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <ResultCard
          label="Position size"
          value={result ? `${result.lots.toFixed(2)} lots` : "—"}
          highlight
        />
        <ResultCard
          label="Money at risk"
          value={result ? eur(result.moneyRisked) : "—"}
        />
      </div>

      {/* Formula */}
      <div className="mt-6 rounded-xl border border-line bg-cream p-5 text-sm leading-relaxed text-muted">
        <p className="font-semibold text-ink">Formula used</p>
        <p className="mt-2">
          <span className="font-medium text-ink">Money at risk</span> = balance ×
          (risk % ÷ 100)
        </p>
        <p className="mt-1">
          <span className="font-medium text-ink">Position size (lots)</span> =
          money at risk ÷ (stop-loss in pips × pip value per lot)
        </p>
        {result && (
          <p className="mt-3">
            = {eur(result.moneyRisked)} ÷ ({stopPips} pips × €
            {result.pipValue}) ={" "}
            <span className="font-semibold text-ink">
              {result.lots.toFixed(2)} lots
            </span>
          </p>
        )}
      </div>

      <p className="mt-6 text-sm text-muted">
        Pip values are simplified estimates. Real pip values depend on the
        exchange rate and your account currency — check your broker&apos;s
        figures before trading. {NOT_ADVICE}
      </p>

      <SoftCta />
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  hint?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-line bg-cream px-4 py-2.5 text-sm outline-none focus:border-amber"
      />
      {hint && <p className="mt-1 text-xs text-muted">{hint}</p>}
    </div>
  );
}

function ResultCard({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl2 border p-6 shadow-card ${
        highlight ? "border-amber bg-amber-soft" : "border-line bg-paper"
      }`}
    >
      <p className="text-sm font-medium text-muted">{label}</p>
      <p
        className={`mt-1 text-2xl font-bold ${
          highlight ? "text-amber-dark" : "text-ink"
        }`}
      >
        {value}
      </p>
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
