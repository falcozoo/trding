"use client";

import { useState } from "react";
import Link from "next/link";
import { Stars } from "@/components/Stars";
import { formatWithdrawal } from "@/lib/site";

/**
 * Minimal, serializable broker shape needed to render the comparison table.
 * Passed down from the server page (do NOT import server-only code here).
 *
 * `affiliateUrl` is passed through byte-for-byte untouched and rendered as a
 * plain <a href> — never proxied, wrapped or rewritten.
 */
export interface CompareBroker {
  slug: string;
  name: string;
  tagline: string;
  minDeposit: number;
  avgSpreadEurUsd: number;
  regulators: string[];
  maxLeverage: number;
  platforms: string[];
  withdrawalDays: number;
  trustpilotRating: number;
  trustpilotReviews: number;
  affiliateUrl: string;
}

/** Scored map: slug -> overall neutral score (already in 4.0–4.9 band). */
export type ScoreMap = Record<string, { score: number }>;

function fmtDeposit(minDeposit: number): string {
  return minDeposit === 0 ? "€0" : `€${minDeposit}`;
}

export function CompareSelector({
  brokers,
  scores,
}: {
  brokers: CompareBroker[];
  scores: ScoreMap;
}) {
  const [aSlug, setASlug] = useState(brokers[0]?.slug ?? "");
  const [bSlug, setBSlug] = useState(brokers[1]?.slug ?? "");

  const a = brokers.find((x) => x.slug === aSlug);
  const b = brokers.find((x) => x.slug === bSlug);

  const selectClass =
    "w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-medium text-ink shadow-card outline-none focus:border-amber";

  const sameBroker = a && b && a.slug === b.slug;

  return (
    <div className="mt-8">
      {/* Selectors */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
            Broker A
          </label>
          <select
            className={selectClass}
            value={aSlug}
            onChange={(e) => setASlug(e.target.value)}
          >
            {brokers.map((brk) => (
              <option key={brk.slug} value={brk.slug}>
                {brk.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
            Broker B
          </label>
          <select
            className={selectClass}
            value={bSlug}
            onChange={(e) => setBSlug(e.target.value)}
          >
            {brokers.map((brk) => (
              <option key={brk.slug} value={brk.slug}>
                {brk.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {sameBroker && (
        <p className="mt-4 text-sm text-muted">
          Pick two different brokers to see a side-by-side comparison.
        </p>
      )}

      {a && b && !sameBroker && (
        <>
          {/* Comparison table */}
          <div className="mt-8 overflow-x-auto rounded-xl2 border border-line bg-paper shadow-card">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="border-b border-line bg-cream text-xs uppercase tracking-wide text-muted">
                <tr>
                  <th className="px-4 py-3"></th>
                  <th className="px-4 py-3">{a.name}</th>
                  <th className="px-4 py-3">{b.name}</th>
                </tr>
              </thead>
              <tbody>
                <Row
                  label="Overall score"
                  va={`${(scores[a.slug]?.score ?? 0).toFixed(1)} / 5`}
                  vb={`${(scores[b.slug]?.score ?? 0).toFixed(1)} / 5`}
                />
                <Row
                  label="Minimum deposit"
                  va={fmtDeposit(a.minDeposit)}
                  vb={fmtDeposit(b.minDeposit)}
                />
                <Row
                  label="EUR/USD spread"
                  va={`${a.avgSpreadEurUsd} pips`}
                  vb={`${b.avgSpreadEurUsd} pips`}
                />
                <Row
                  label="Regulation"
                  va={a.regulators.join(", ")}
                  vb={b.regulators.join(", ")}
                />
                <Row
                  label="Max leverage"
                  va={`1:${a.maxLeverage}`}
                  vb={`1:${b.maxLeverage}`}
                />
                <Row
                  label="Platforms"
                  va={a.platforms.join(", ")}
                  vb={b.platforms.join(", ")}
                />
                <Row
                  label="Withdrawal time"
                  va={formatWithdrawal(a.withdrawalDays)}
                  vb={formatWithdrawal(b.withdrawalDays)}
                />
                <Row
                  label="Trustpilot"
                  va={`${a.trustpilotRating}/5 (${a.trustpilotReviews.toLocaleString()})`}
                  vb={`${b.trustpilotRating}/5 (${b.trustpilotReviews.toLocaleString()})`}
                />
                <tr className="border-b border-line last:border-0">
                  <td className="px-4 py-4 font-medium">Rating</td>
                  <td className="px-4 py-4">
                    <Stars value={scores[a.slug]?.score ?? 0} size="sm" />
                  </td>
                  <td className="px-4 py-4">
                    <Stars value={scores[b.slug]?.score ?? 0} size="sm" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Open account buttons */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[a, b].map((brk) => (
              <div
                key={brk.slug}
                className="flex flex-col items-start gap-2 rounded-xl border border-line bg-paper p-5 shadow-card"
              >
                <div className="font-bold text-ink">{brk.name}</div>
                <div className="text-sm text-muted">{brk.tagline}</div>
                <a
                  href={brk.affiliateUrl}
                  target="_blank"
                  rel="sponsored noopener"
                  className="mt-2 rounded-lg bg-amber px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-dark"
                >
                  Open account
                </a>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-muted">
            Prefer the full write-up? Read the{" "}
            <Link
              href={`/brokers/${a.slug}`}
              className="text-amber-dark underline"
            >
              {a.name} review
            </Link>{" "}
            or the{" "}
            <Link
              href={`/brokers/${b.slug}`}
              className="text-amber-dark underline"
            >
              {b.name} review
            </Link>
            .
          </p>
        </>
      )}
    </div>
  );
}

function Row({ label, va, vb }: { label: string; va: string; vb: string }) {
  return (
    <tr className="border-b border-line last:border-0 hover:bg-cream/60">
      <td className="px-4 py-4 font-medium">{label}</td>
      <td className="px-4 py-4 text-muted">{va}</td>
      <td className="px-4 py-4 text-muted">{vb}</td>
    </tr>
  );
}
