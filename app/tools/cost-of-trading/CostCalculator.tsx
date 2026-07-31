"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/** Fee-only fields the calculator needs. No ratings, no min deposit here. */
export interface BrokerCostInput {
  slug: string;
  name: string;
  avgSpreadEurUsd: number;
  commissionPerLot: number;
}

const EUR_PER_PIP_STD_LOT = 10; // ≈ €10 per pip on one standard EUR/USD lot

const eur = (n: number) =>
  n.toLocaleString("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });

const eur2 = (n: number) =>
  n.toLocaleString("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  });

interface Row {
  slug: string;
  name: string;
  costPerLot: number;
  annual: number;
  spread: number;
  commission: number;
}

export default function CostCalculator({
  brokers,
}: {
  brokers: BrokerCostInput[];
}) {
  const [lots, setLots] = useState("1");
  const [tradesPerMonth, setTradesPerMonth] = useState("20");

  const { rows, cheapest, dearest } = useMemo(() => {
    const l = Math.max(parseFloat(lots) || 0, 0);
    const t = Math.max(parseFloat(tradesPerMonth) || 0, 0);
    const lotsPerYear = l * t * 12;

    const rows: Row[] = brokers
      .map((b) => {
        const spreadCost = b.avgSpreadEurUsd * EUR_PER_PIP_STD_LOT;
        const costPerLot = spreadCost + b.commissionPerLot;
        return {
          slug: b.slug,
          name: b.name,
          costPerLot,
          annual: costPerLot * lotsPerYear,
          spread: b.avgSpreadEurUsd,
          commission: b.commissionPerLot,
        };
      })
      .sort((a, b) => a.annual - b.annual || a.costPerLot - b.costPerLot);

    const cheapest = rows[0];
    const dearest = rows[rows.length - 1];
    return { rows, cheapest, dearest };
  }, [lots, tradesPerMonth, brokers]);

  const maxAnnual = rows.length ? rows[rows.length - 1].annual : 0;
  const spread =
    cheapest && dearest ? dearest.annual - cheapest.annual : 0;

  return (
    <>
      <div className="mt-8 rounded-xl2 border border-line bg-paper p-6 shadow-card">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Trade size (standard lots)"
            value={lots}
            onChange={setLots}
            hint="1 standard lot = 100,000 units of EUR/USD."
          />
          <Field
            label="Trades per month"
            value={tradesPerMonth}
            onChange={setTradesPerMonth}
            hint="Round trips (one buy + one sell) per month."
          />
        </div>
      </div>

      {cheapest && maxAnnual > 0 && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl2 border border-amber bg-amber-soft p-6 shadow-card">
            <p className="text-sm font-medium text-muted">
              Cheapest in our set
            </p>
            <p className="mt-1 text-2xl font-bold text-amber-dark">
              {cheapest.name}
            </p>
            <p className="mt-1 text-sm text-muted">
              ≈ {eur(cheapest.annual)} per year
            </p>
          </div>
          <div className="rounded-xl2 border border-line bg-paper p-6 shadow-card">
            <p className="text-sm font-medium text-muted">
              Cheapest vs most expensive
            </p>
            <p className="mt-1 text-2xl font-bold text-ink">
              {eur(spread)} / year
            </p>
            <p className="mt-1 text-sm text-muted">
              The gap between the cheapest and priciest broker on these inputs.
            </p>
          </div>
        </div>
      )}

      {/* Ranked table */}
      <div className="mt-6 overflow-hidden rounded-xl2 border border-line bg-paper shadow-card">
        <div className="grid grid-cols-[1.6rem_1fr_auto] items-center gap-3 border-b border-line bg-cream px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted sm:grid-cols-[1.6rem_1fr_7rem_auto]">
          <span>#</span>
          <span>Broker</span>
          <span className="hidden text-right sm:block">Cost / lot</span>
          <span className="text-right">Annual cost</span>
        </div>
        {rows.map((r, i) => {
          const pct = maxAnnual > 0 ? (r.annual / maxAnnual) * 100 : 0;
          const isCheapest = i === 0 && maxAnnual > 0;
          return (
            <div
              key={r.slug}
              className="grid grid-cols-[1.6rem_1fr_auto] items-center gap-3 border-b border-line px-5 py-3.5 text-sm last:border-0 sm:grid-cols-[1.6rem_1fr_7rem_auto]"
            >
              <span className="font-medium text-muted">{i + 1}</span>
              <span className="min-w-0">
                <Link
                  href={`/brokers/${r.slug}`}
                  className="font-semibold text-ink hover:text-amber-dark"
                >
                  {r.name}
                </Link>
                {isCheapest && (
                  <span className="ml-2 rounded-full bg-amber-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-dark">
                    Cheapest
                  </span>
                )}
                <span className="mt-1 block text-xs text-muted">
                  {r.spread} pip spread · {eur2(r.commission)} commission/lot
                </span>
                {/* Relative cost bar */}
                <span className="mt-1.5 block h-1.5 w-full max-w-[220px] overflow-hidden rounded-full bg-cream">
                  <span
                    className="block h-full rounded-full bg-amber"
                    style={{ width: `${Math.max(pct, 4)}%` }}
                  />
                </span>
              </span>
              <span className="hidden text-right text-muted sm:block">
                {eur2(r.costPerLot)}
              </span>
              <span className="text-right font-bold text-ink">
                {maxAnnual > 0 ? eur(r.annual) : "—"}
              </span>
            </div>
          );
        })}
      </div>
    </>
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
        min="0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-line bg-cream px-4 py-2.5 text-sm outline-none focus:border-amber"
      />
      {hint && <p className="mt-1 text-xs text-muted">{hint}</p>}
    </div>
  );
}
