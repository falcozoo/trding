import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks, CROSS_LINKS } from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title:
    "Do Most Traders Lose Money? What Official Regulator Data Reveals (FCA, ESMA, ASIC)",
  description:
    "Three major regulators agree: most retail CFD traders lose money. FCA ~80%, ESMA 74–89%, ASIC 68%. The official figures, cross-compared and primary-sourced — free to cite.",
  alternates: { canonical: "/studies/how-many-traders-lose-money" },
};

const PUBLISHED = "2026-08-02";
const UPDATED = "2026-08-02";
const AUTHOR = "Michael";
const AUTHOR_TITLE = "Head of Strategy";

// Cross-regulator loss figures — every number linked to its primary source.
const rows = [
  {
    region: "🇬🇧 UK — FCA",
    pct: "~80%",
    pctNum: 80,
    detail: "of CFD clients lose money (reaffirmed Dec 2022; 82% in 2016)",
    source:
      "https://www.fca.org.uk/news/press-releases/fca-highlights-continuing-concerns-about-problem-firms-cfd-sector",
    sourceLabel: "FCA press release, 1 Dec 2022",
  },
  {
    region: "🇪🇺 EU — ESMA",
    pct: "74–89%",
    pctNum: 89,
    detail:
      "of retail accounts lose money; average loss €1,600–€29,000 (2018)",
    source:
      "https://www.esma.europa.eu/press-news/esma-news/esma-agrees-prohibit-binary-options-and-restrict-cfds-protect-retail-investors",
    sourceLabel: "ESMA press release, 27 Mar 2018",
  },
  {
    region: "🇦🇺 Australia — ASIC",
    pct: "68%",
    pctNum: 68,
    detail:
      "of retail CFD investors lost money in FY2024 — A$458m total, incl. A$73m in fees",
    source:
      "https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2026-releases/26-004mr-asic-secures-nearly-40-million-in-refunds-to-investors-and-drives-change-after-cfd-sector-falls-short/",
    sourceLabel: "ASIC Report 828 & media release 26-004MR, 20 Jan 2026",
  },
];

export default function TradersLoseMoneyStudyPage() {
  const base = `https://${SITE.domain}`;
  const url = `${base}/studies/how-many-traders-lose-money`;

  // Article JSON-LD with a NAMED human author (E-E-A-T) + publish/modified dates.
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Do Most Traders Really Lose Money? What Official Regulator Data Reveals",
    description:
      "Three major regulators (FCA, ESMA, ASIC) agree that the majority of retail CFD traders lose money. The official figures, cross-compared and primary-sourced.",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: {
      "@type": "Person",
      name: AUTHOR,
      jobTitle: AUTHOR_TITLE,
      url: `${base}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: base,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      <Breadcrumbs
        items={[
          { name: "Studies" },
          { name: "Do most traders lose money?" },
        ]}
      />

      <p className="text-sm font-medium uppercase tracking-wide text-accent">
        Trding.io Research
      </p>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
        Do most traders really lose money? What official regulator data reveals
      </h1>

      {/* Byline — E-E-A-T human author + visible dates */}
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
        <span>
          By{" "}
          <Link href="/about" className="font-medium text-ink hover:text-accent">
            {AUTHOR}
          </Link>{" "}
          · {AUTHOR_TITLE}
        </span>
        <span aria-hidden>•</span>
        <span>
          Published {PUBLISHED}
          {UPDATED !== PUBLISHED ? ` · Updated ${UPDATED}` : ""}
        </span>
      </div>

      <p className="mt-6 text-lg leading-relaxed text-muted">
        Across three of the world&apos;s major financial regulators — the
        UK&apos;s <strong className="text-ink">FCA</strong>, the EU&apos;s{" "}
        <strong className="text-ink">ESMA</strong> and Australia&apos;s{" "}
        <strong className="text-ink">ASIC</strong> — the official data agrees:
        the majority of retail CFD traders lose money. The figures range from{" "}
        <strong className="text-ink">68% to 89%</strong> depending on the market
        and year. Here is exactly what each regulator found, with sources.
      </p>

      {/* Headline figures */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl2 border border-line bg-paper p-5 shadow-card">
          <div className="text-3xl font-bold text-accent">~80%</div>
          <div className="mt-1 text-sm text-muted">FCA (UK)</div>
        </div>
        <div className="rounded-xl2 border border-line bg-paper p-5 shadow-card">
          <div className="text-3xl font-bold text-accent">74–89%</div>
          <div className="mt-1 text-sm text-muted">ESMA (EU)</div>
        </div>
        <div className="rounded-xl2 border border-line bg-paper p-5 shadow-card">
          <div className="text-3xl font-bold text-accent">68%</div>
          <div className="mt-1 text-sm text-muted">ASIC (Australia)</div>
        </div>
      </div>

      {/* The short answer */}
      <h2 className="mt-12 text-2xl font-bold">The short answer</h2>
      <p className="mt-3 leading-relaxed text-muted">
        You&apos;ve probably seen the disclaimer on every broker&apos;s homepage:{" "}
        <em>
          &quot;XX% of retail investor accounts lose money when trading CFDs with
          this provider.&quot;
        </em>{" "}
        That number isn&apos;t marketing — it&apos;s a legal requirement, grounded
        in data collected by financial regulators. We pulled the official figures
        from three of them.
      </p>

      {/* The data */}
      <h2 className="mt-12 text-2xl font-bold">
        The official loss rates, regulator by regulator
      </h2>
      <div className="mt-4 space-y-4">
        {rows.map((r) => (
          <div
            key={r.region}
            className="rounded-xl2 border border-line bg-paper p-5 shadow-card"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-lg font-bold">{r.region}</h3>
              <span className="text-2xl font-bold text-accent">{r.pct}</span>
            </div>
            <p className="mt-1 text-muted">{r.detail}</p>
            <div className="mt-3 h-2 w-full rounded-full bg-cream">
              <div
                className="h-2 rounded-full bg-accent"
                style={{ width: `${r.pctNum}%` }}
              />
            </div>
            <p className="mt-3 text-xs text-muted">
              Source:{" "}
              <a
                href={r.source}
                target="_blank"
                rel="noopener"
                className="font-medium text-accent hover:underline"
              >
                {r.sourceLabel}
              </a>
            </p>
          </div>
        ))}
      </div>

      {/* Key findings */}
      <h2 className="mt-12 text-2xl font-bold">Why this matters for beginners</h2>
      <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-muted">
        <li>
          <strong className="text-ink">Leverage is the amplifier.</strong> The EU
          cut retail leverage to 30:1 precisely because high leverage accelerates
          losses. Beginners chasing 1:500 offshore leverage are, statistically,
          the most exposed.
        </li>
        <li>
          <strong className="text-ink">Fees are a silent drag.</strong> ASIC found
          A$73 million of the losses were <em>fees</em> — money gone regardless of
          whether trades won or lost.
        </li>
        <li>
          <strong className="text-ink">
            Regulation is a floor, not a guarantee.
          </strong>{" "}
          Negative balance protection and segregated funds limit the damage — they
          don&apos;t change the base rate of losing.
        </li>
      </ul>

      {/* Methodology — E-E-A-T */}
      <h2 className="mt-12 text-2xl font-bold">How we compiled this</h2>
      <p className="mt-3 leading-relaxed text-muted">
        Every figure above comes directly from a primary regulator publication —
        FCA, ESMA and ASIC — and is linked to its source. We don&apos;t sell
        trading products, and we update these figures when regulators publish new
        data. If you spot an outdated number,{" "}
        <a
          href="mailto:hello@trding.io"
          className="font-medium text-accent hover:underline"
        >
          tell us
        </a>
        .
      </p>

      {/* Press / citation block */}
      <div className="mt-12 rounded-xl2 border border-line bg-cream/60 p-6">
        <h2 className="text-xl font-bold">Journalists &amp; writers</h2>
        <p className="mt-2 leading-relaxed text-muted">
          These figures are free to cite with attribution to{" "}
          <strong className="text-ink">{SITE.name}</strong>. For the full
          comparison table, source links or a comment on record from{" "}
          {AUTHOR}, {AUTHOR_TITLE}, contact us at{" "}
          <a
            href="mailto:hello@trding.io"
            className="font-medium text-accent hover:underline"
          >
            hello@trding.io
          </a>
          .
        </p>
        <p className="mt-3 text-sm text-muted">
          Suggested citation: &quot;According to a {SITE.name} analysis of FCA,
          ESMA and ASIC data, between 68% and 89% of retail CFD traders lose
          money.&quot;
        </p>
      </div>

      <p className="mt-8 text-sm text-muted">
        <Link href="/methodology" className="text-accent hover:underline">
          See our full scoring methodology →
        </Link>
      </p>

      <p className="mt-6 text-xs leading-relaxed text-muted">
        This article is educational and is not financial advice. CFDs are complex
        instruments and come with a high risk of losing money.
      </p>

      <RelatedLinks links={CROSS_LINKS} />
    </div>
  );
}
