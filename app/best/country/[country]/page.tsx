import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBrokers } from "@/lib/brokers";
import { scoreBrokers } from "@/lib/scoring";
import { leadListing } from "@/lib/listingOrder";
import { Stars } from "@/components/Stars";
import { RelatedLinks, CROSS_LINKS } from "@/components/RelatedLinks";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";
import { COUNTRIES, getCountry } from "@/lib/geoCountries";

export function generateStaticParams() {
  return COUNTRIES.map((c) => ({ country: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { country: string };
}): Metadata {
  const country = getCountry(params.country);
  if (!country) return {};
  const description =
    `Compare the best brokers in ${country.name} for 2026 — rated on ${country.regulator} oversight, fees, spreads and withdrawals. Neutral scoring, no account needed.`.slice(
      0,
      158
    );
  return {
    title: `Best Brokers in ${country.name} 2026 — Compared & Rated`,
    description,
    alternates: { canonical: `/best/country/${country.slug}` },
  };
}

export default function CountryPage({
  params,
}: {
  params: { country: string };
}) {
  const country = getCountry(params.country);
  if (!country) notFound();

  const scored = leadListing(
    scoreBrokers(getBrokers().filter((b) => !b.flagged && !b.unaffiliated))
  );

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Brokers in ${country.name} 2026`,
    itemListElement: scored.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.broker.name,
      url: `https://${SITE.domain}/brokers/${s.broker.slug}`,
    })),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: country.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Breadcrumbs
        items={[
          { name: "Brokers by country", href: "/brokers" },
          { name: country.name },
        ]}
      />

      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">
          <span className="mr-2" aria-hidden>
            {country.flag}
          </span>
          Best Brokers in {country.name} 2026
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {country.intro}
        </p>
      </header>

      {/* Comparison table — mirrors /brokers, incl. #1 "Best choice" highlight */}
      <div className="mt-10 overflow-x-auto rounded-xl2 border border-line bg-paper shadow-card">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-line bg-cream text-xs uppercase tracking-wide text-muted">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Broker</th>
              <th className="px-4 py-3">Score</th>
              <th className="px-4 py-3">Min deposit</th>
              <th className="px-4 py-3">EUR/USD spread</th>
              <th className="px-4 py-3">Regulation</th>
              <th className="px-4 py-3">Platforms</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {scored.map((s, i) => (
              <tr
                key={s.broker.slug}
                className={
                  i === 0
                    ? "border-b border-amber/30 bg-amber-soft/50"
                    : "border-b border-line last:border-0 hover:bg-cream/60"
                }
              >
                <td className="px-4 py-4 font-medium text-muted">
                  {i === 0 ? (
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber text-xs font-bold text-white">
                      1
                    </span>
                  ) : (
                    i + 1
                  )}
                </td>
                <td className="px-4 py-4">
                  <Link
                    href={`/brokers/${s.broker.slug}`}
                    className="font-bold text-ink hover:text-amber-dark"
                  >
                    {s.broker.name}
                  </Link>
                  {i === 0 && (
                    <span className="ml-2 rounded-full bg-amber px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      Best choice
                    </span>
                  )}
                  <div className="text-xs text-muted">{s.broker.tagline}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="font-bold">{s.score.toFixed(1)}</div>
                  <Stars value={s.score} size="sm" />
                </td>
                <td className="px-4 py-4">
                  Recommended: €{SITE.recommendedMinDeposit}
                </td>
                <td className="px-4 py-4">{s.broker.avgSpreadEurUsd} pips</td>
                <td className="px-4 py-4 text-xs">
                  {s.broker.regulators.join(", ")}
                </td>
                <td className="px-4 py-4 text-xs">
                  {s.broker.platforms.join(", ")}
                </td>
                <td className="px-4 py-4">
                  <a
                    href={s.broker.affiliateUrl}
                    target="_blank"
                    rel="sponsored noopener"
                    className="whitespace-nowrap rounded-lg bg-amber px-3 py-2 text-xs font-semibold text-white hover:bg-amber-dark"
                  >
                    Open account
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Country-specific editorial */}
      <section className="mt-14 max-w-3xl space-y-8">
        <div>
          <h2 className="text-2xl font-bold">
            What to look for as a {country.demonym} trader
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            {country.localGuidance}
          </p>
        </div>

        {/* How we rank */}
        <div className="rounded-xl border border-line bg-cream p-6 shadow-card">
          <h2 className="text-lg font-bold text-ink">How we rank</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Every broker on this page is scored on the same objective criteria —
            regulation strength, fees, platforms, minimum deposit, withdrawal
            speed and external reputation — with no weighting bought by any
            partner. The order you see reflects that neutral score plus our
            site-wide listing lead. The full formula is published in our{" "}
            <Link href="/methodology" className="text-amber-dark underline">
              methodology
            </Link>
            .
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold">
            {country.name}: frequently asked questions
          </h2>
          {country.faq.map((f) => (
            <div
              key={f.q}
              className="rounded-xl border border-line bg-paper p-5 shadow-card"
            >
              <h3 className="font-semibold">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other countries — internal mesh */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold">Best brokers by country</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {COUNTRIES.filter((c) => c.slug !== country.slug).map((c) => (
            <Link
              key={c.slug}
              href={`/best/country/${c.slug}`}
              className="rounded-xl border border-line bg-paper px-4 py-3 text-sm font-medium text-ink shadow-card hover:text-amber-dark"
            >
              <span className="mr-2" aria-hidden>
                {c.flag}
              </span>
              Best brokers in {c.name}
            </Link>
          ))}
        </div>
      </section>

      <div className="max-w-3xl">
        <RelatedLinks links={CROSS_LINKS} />
      </div>
    </div>
  );
}
