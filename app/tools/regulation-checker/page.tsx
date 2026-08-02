import type { Metadata } from "next";
import Link from "next/link";
import { getBrokers } from "@/lib/brokers";
import {
  REGULATORS,
  getRegulator,
  strongestTier,
  tierRank,
  type RegulatorTier,
} from "@/lib/regulators";
import { RelatedLinks, CROSS_LINKS } from "@/components/RelatedLinks";
import { NOT_ADVICE } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Broker Regulation Checker 2026 — Who Regulates Each Broker + Official Registers | Trding.io",
  description:
    "Reference table mapping each broker to its actual financial regulators (FCA, ASIC, CySEC, CIMA, FSA and more), with direct links to the official public registers where you can verify a licence yourself.",
  alternates: { canonical: "/tools/regulation-checker" },
};

const TIER_STYLES: Record<RegulatorTier, string> = {
  "Tier 1": "bg-[#e7f4ec] text-[#2C7C4C] border-[#bfe2cc]",
  "Tier 2": "bg-amber-soft text-amber-dark border-amber",
  "Tier 3": "bg-[#fdecec] text-[#8a2a2a] border-[#f2c9c9]",
};

export default function RegulationCheckerPage() {
  const brokers = getBrokers();

  // Rank brokers by strongest regulator tier, then by number of regulators.
  const rows = brokers
    .map((b) => ({
      broker: b,
      tier: strongestTier(b.regulators),
      count: b.regulators.length,
    }))
    .sort(
      (a, b) =>
        tierRank(a.tier) - tierRank(b.tier) || b.count - a.count
    );

  // Regulator reference list, ordered by tier then acronym.
  const regList = Object.values(REGULATORS).sort(
    (a, b) => tierRank(a.tier) - tierRank(b.tier) || a.acronym.localeCompare(b.acronym)
  );

  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <header>
        <div className="mb-3">
          <Link href="/tools" className="text-sm text-muted hover:text-ink">
            ← All tools
          </Link>
        </div>
        <h1 className="text-3xl font-bold sm:text-4xl">
          Broker regulation checker
        </h1>
        <p className="mt-4 leading-relaxed text-muted">
          A broker&apos;s licence is the single most important safety signal —
          and the easiest thing to verify yourself. The table below maps every
          broker in our dataset to the financial authorities that regulate it,
          with a direct link to each authority&apos;s{" "}
          <strong className="text-ink">official public register</strong> so you
          can confirm a firm is genuinely authorised before depositing a cent.
          We rank by the strongest regime a broker holds.
        </p>
      </header>

      {/* Broker → regulators table */}
      <div className="mt-8 overflow-hidden rounded-xl2 border border-line bg-paper shadow-card">
        <div className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-line bg-cream px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted sm:grid-cols-[1fr_6rem]">
          <span>Broker &amp; regulators</span>
          <span className="text-right">Strongest tier</span>
        </div>
        {rows.map(({ broker, tier }) => (
          <div
            key={broker.slug}
            className="grid grid-cols-[1fr_auto] items-start gap-3 border-b border-line px-5 py-4 last:border-0 sm:grid-cols-[1fr_6rem]"
          >
            <div className="min-w-0">
              <Link
                href={`/brokers/${broker.slug}`}
                className="font-semibold text-ink hover:text-amber-dark"
              >
                {broker.name}
              </Link>
              <div className="mt-2 flex flex-wrap gap-2">
                {broker.regulators.map((rid) => {
                  const info = getRegulator(rid);
                  if (!info) {
                    // Unmapped regulator: show the label, no invented link.
                    return (
                      <span
                        key={rid}
                        className="rounded-full border border-line bg-cream px-2.5 py-1 text-xs text-muted"
                      >
                        {rid}
                      </span>
                    );
                  }
                  if (!info.registerUrl) {
                    return (
                      <span
                        key={rid}
                        title={`${info.fullName} — ${info.registerLabel}`}
                        className={`rounded-full border px-2.5 py-1 text-xs font-medium ${TIER_STYLES[info.tier]}`}
                      >
                        {info.acronym}{" "}
                        <span className="opacity-70">· {info.jurisdiction}</span>
                      </span>
                    );
                  }
                  return (
                    <a
                      key={rid}
                      href={info.registerUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      title={`${info.fullName} — verify on the ${info.registerLabel}`}
                      className={`rounded-full border px-2.5 py-1 text-xs font-medium transition hover:opacity-80 ${TIER_STYLES[info.tier]}`}
                    >
                      {info.acronym}{" "}
                      <span className="opacity-70">· {info.jurisdiction}</span> ↗
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="text-right">
              {tier ? (
                <span
                  className={`inline-block rounded-full border px-2.5 py-1 text-xs font-semibold ${TIER_STYLES[tier]}`}
                >
                  {tier}
                </span>
              ) : (
                <span className="text-xs text-muted">—</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        Tap any regulator to open its official register in a new tab. &ldquo;Tier&rdquo;
        is a broad, widely-used characterisation of how strict and established a
        regime is (Tier 1 = major, well-resourced authorities such as the FCA
        and ASIC), not a rating of the broker itself.
      </p>

      {/* Regulator reference directory */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-ink">
          The regulators, explained
        </h2>
        <p className="mt-2 leading-relaxed text-muted">
          Every authority referenced above, with its full name, jurisdiction and
          official verification register.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {regList.map((r) => (
            <div
              key={r.id}
              className="rounded-xl2 border border-line bg-paper p-5 shadow-card"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-lg font-bold text-ink">{r.acronym}</span>
                <span
                  className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${TIER_STYLES[r.tier]}`}
                >
                  {r.tier}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-ink">{r.fullName}</p>
              <p className="mt-0.5 text-sm text-muted">{r.jurisdiction}</p>
              {r.registerUrl ? (
                <a
                  href={r.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-3 inline-block text-sm font-semibold text-amber-dark hover:underline"
                >
                  {r.registerLabel} ↗
                </a>
              ) : (
                <p className="mt-3 text-sm text-muted">{r.registerLabel}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10 rounded-xl border border-line bg-cream p-5 text-sm leading-relaxed text-muted">
        <p className="font-semibold text-ink">How to verify a broker yourself</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>
            Note the exact legal entity name and licence number the broker
            publishes (usually in its website footer or terms).
          </li>
          <li>
            Open the relevant regulator&apos;s register from the links above.
          </li>
          <li>
            Search for the entity and confirm the licence is{" "}
            <em>current</em> and covers the services you&apos;ll use.
          </li>
        </ol>
        <p className="mt-3">
          A single strong licence (Tier 1) generally means stricter capital,
          conduct and client-money rules than an offshore-only licence. Many
          brokers hold multiple licences across entities — which entity{" "}
          <em>you</em> sign up with determines the protections you actually get.
        </p>
      </div>

      <p className="mt-6 text-sm text-muted">{NOT_ADVICE}</p>

      <RelatedLinks
        title="Related tools & data"
        links={[
          {
            href: "/tools/cost-of-trading",
            label: "Real cost of trading calculator",
            sub: "Rank brokers by real annual spread + commission",
          },
          ...CROSS_LINKS.slice(0, 3),
        ]}
      />
    </div>
  );
}
