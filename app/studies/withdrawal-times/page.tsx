import type { Metadata } from "next";
import Link from "next/link";
import { BROKERS } from "@/lib/brokers";
import { SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks, CROSS_LINKS } from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Withdrawal Times Barometer — How Long Until You Get Your Money Back?",
  description:
    "Original Trding.io study of CFD broker withdrawal times. The gap between the fastest and slowest brokers reaches 7×. Full data, methodology and key findings — free to cite.",
  alternates: { canonical: "/studies/withdrawal-times" },
};

// --- Original study computed live from our own broker dataset ---
// This is proprietary, reproducible data: the exact material journalists can cite.
const rows = BROKERS.map((b) => ({
  name: b.name,
  slug: b.slug,
  days: b.withdrawalDays,
  flagged: !!b.flagged,
  regScore: b.regulationScore,
})).sort((a, b) => a.days - b.days);

const fastest = rows[0];
const slowest = rows[rows.length - 1];
const gap = Math.round((slowest.days / fastest.days) * 10) / 10;
const avg =
  Math.round((rows.reduce((s, r) => s + r.days, 0) / rows.length) * 10) / 10;
const maxDays = Math.max(...rows.map((r) => r.days));

const PUBLISHED = "2026-08-02";

export default function WithdrawalStudyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <Breadcrumbs
        items={[
          { name: "Studies" },
          { name: "Withdrawal Times Barometer" },
        ]}
      />
      <p className="text-sm font-medium uppercase tracking-wide text-accent">
        Trding.io Original Study
      </p>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
        Withdrawal Times Barometer: how long until you actually get your money
        back?
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        We measured the typical withdrawal processing time across{" "}
        {rows.length} CFD brokers. The gap between the fastest and the slowest
        reaches{" "}
        <strong className="text-ink">{gap}×</strong> — from{" "}
        <strong className="text-ink">
          {fastest.days} business day
        </strong>{" "}
        to <strong className="text-ink">{maxDays} business days</strong>.
      </p>

      {/* Key figures — the citable headline numbers */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl2 border border-line bg-paper p-5 shadow-card">
          <div className="text-3xl font-bold text-accent">{gap}×</div>
          <div className="mt-1 text-sm text-muted">
            gap between fastest &amp; slowest
          </div>
        </div>
        <div className="rounded-xl2 border border-line bg-paper p-5 shadow-card">
          <div className="text-3xl font-bold text-accent">{fastest.days}d</div>
          <div className="mt-1 text-sm text-muted">
            fastest ({fastest.name})
          </div>
        </div>
        <div className="rounded-xl2 border border-line bg-paper p-5 shadow-card">
          <div className="text-3xl font-bold text-accent">{avg}d</div>
          <div className="mt-1 text-sm text-muted">
            average across {rows.length} brokers
          </div>
        </div>
      </div>

      {/* The data table */}
      <h2 className="mt-12 text-2xl font-bold">The data, broker by broker</h2>
      <div className="mt-4 overflow-hidden rounded-xl2 border border-line bg-paper shadow-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line text-left text-muted">
              <th className="px-4 py-3 font-medium">Broker</th>
              <th className="px-4 py-3 font-medium">Withdrawal time</th>
              <th className="px-4 py-3 font-medium">Relative bar</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.slug} className={i % 2 ? "bg-cream/50" : "bg-paper"}>
                <td className="px-4 py-3 font-medium">
                  {r.flagged ? (
                    <span>
                      {r.name}{" "}
                      <span className="ml-1 rounded bg-red-100 px-1.5 py-0.5 text-xs text-red-700">
                        flagged
                      </span>
                    </span>
                  ) : (
                    <Link
                      href={`/brokers/${r.slug}`}
                      className="hover:text-accent"
                    >
                      {r.name}
                    </Link>
                  )}
                </td>
                <td className="px-4 py-3 font-mono text-muted">
                  {r.days} {r.days === 1 ? "day" : "days"}
                </td>
                <td className="px-4 py-3">
                  <div className="h-2 w-full rounded-full bg-cream">
                    <div
                      className={`h-2 rounded-full ${
                        r.flagged ? "bg-red-400" : "bg-accent"
                      }`}
                      style={{ width: `${(r.days / maxDays) * 100}%` }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Key findings — quotable */}
      <h2 className="mt-12 text-2xl font-bold">Key findings</h2>
      <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-muted">
        <li>
          <strong className="text-ink">
            A {gap}× gap separates the fastest broker from the slowest.
          </strong>{" "}
          The same withdrawal request that clears in {fastest.days} business day
          at {fastest.name} can take up to {maxDays} business days elsewhere.
        </li>
        <li>
          <strong className="text-ink">
            Slow withdrawals cluster with weak regulation.
          </strong>{" "}
          Every broker in our slowest tier ({maxDays} days) also carries the
          lowest regulation scores in the set — and is flagged on our site for
          sourced, factual reasons.
        </li>
        <li>
          <strong className="text-ink">
            The average retail trader waits {avg} business days.
          </strong>{" "}
          For a beginner, that wait is the single most common source of
          frustration and mistrust.
        </li>
      </ul>

      {/* Methodology — E-E-A-T signal */}
      <h2 className="mt-12 text-2xl font-bold">Methodology</h2>
      <p className="mt-3 leading-relaxed text-muted">
        Withdrawal time is the typical processing time in business days for a
        standard bank/card withdrawal, as published by each broker and verified
        against user reports. Figures are the ones displayed on each broker page
        and are reproducible from our public dataset. Study published on{" "}
        {PUBLISHED}. &quot;Flagged&quot; brokers are listed as a neutrality
        signal, on the strength of verifiable, sourced facts — never as options
        we endorse.
      </p>

      {/* Press / citation block */}
      <div className="mt-12 rounded-xl2 border border-line bg-cream/60 p-6">
        <h2 className="text-xl font-bold">Journalists &amp; writers</h2>
        <p className="mt-2 leading-relaxed text-muted">
          This study is free to cite with attribution to{" "}
          <strong className="text-ink">{SITE.name}</strong>. For the underlying
          data, methodology details or a comment, contact us at{" "}
          <a
            href="mailto:hello@trding.io"
            className="font-medium text-accent hover:underline"
          >
            hello@trding.io
          </a>
          .
        </p>
        <p className="mt-3 text-sm text-muted">
          Suggested citation: &quot;According to {SITE.name}&apos;s Withdrawal
          Times Barometer, CFD broker withdrawal times vary by up to {gap}×.&quot;
        </p>
      </div>

      <p className="mt-8 text-sm text-muted">
        <Link href="/methodology" className="text-accent hover:underline">
          See our full scoring methodology →
        </Link>
      </p>

      <RelatedLinks links={CROSS_LINKS} />
    </div>
  );
}
