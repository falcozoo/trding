import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getTerm,
  getAllTermSlugs,
  getRelatedTerms,
  CATEGORY_LABELS,
} from "@/lib/glossary";
import { SITE, NOT_ADVICE } from "@/lib/site";
import { RelatedLinks, CROSS_LINKS } from "@/components/RelatedLinks";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return getAllTermSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const term = getTerm(params.slug);
  if (!term) return {};
  return {
    title: `${term.term} meaning — Trading Glossary`,
    description: term.short,
    alternates: { canonical: `/glossary/${term.slug}` },
  };
}

/** Strip <strong> tags so the plain text can be reused in meta / JSON-LD. */
function plain(html: string): string {
  return html.replace(/<[^>]+>/g, "");
}

export default function GlossaryTermPage({
  params,
}: {
  params: { slug: string };
}) {
  const term = getTerm(params.slug);
  if (!term) notFound();

  const related = getRelatedTerms(term);
  const bodyText = term.body.map(plain).join(" ");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTerm",
        name: term.term,
        description: term.short,
        inDefinedTermSet: {
          "@type": "DefinedTermSet",
          name: "Trading Glossary",
          url: "/glossary",
        },
        url: `/glossary/${term.slug}`,
      },
      {
        "@type": "Article",
        headline: `${term.term} — definition & meaning`,
        description: term.short,
        articleBody: bodyText,
        articleSection: CATEGORY_LABELS[term.category],
        author: { "@type": "Organization", name: SITE.name },
        publisher: { "@type": "Organization", name: SITE.name },
        inLanguage: "en",
      },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs
        items={[
          { name: "Glossary", href: "/glossary" },
          { name: term.term },
        ]}
      />

      {/* Header */}
      <header>
        <span className="rounded-full bg-amber-soft px-2.5 py-1 text-xs font-semibold text-amber-dark">
          {CATEGORY_LABELS[term.category]}
        </span>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          {term.term} — definition &amp; meaning
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-muted">{term.short}</p>
      </header>

      {/* Body */}
      <article className="mt-8 space-y-4">
        {term.body.map((p, i) => (
          <p
            key={i}
            className="text-base leading-relaxed text-ink/90 [&_strong]:font-semibold [&_strong]:text-ink"
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}
      </article>

      {/* Not investment advice */}
      <p className="mt-8 rounded-xl border border-line bg-cream p-4 text-sm leading-relaxed text-muted">
        {NOT_ADVICE} Trading involves a real risk of losing money, and most
        retail traders lose. Never trade money you cannot afford to lose.
      </p>

      {/* Related terms */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-lg font-bold text-ink">Related terms</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/glossary/${r.slug}`}
                className="group rounded-xl border border-line bg-paper p-4 shadow-card transition hover:border-amber"
              >
                <div className="font-semibold text-ink group-hover:text-amber-dark">
                  {r.term}
                </div>
                <div className="mt-0.5 text-sm text-muted">{r.short}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Cross-cluster internal links */}
      <RelatedLinks links={CROSS_LINKS} />
    </div>
  );
}
