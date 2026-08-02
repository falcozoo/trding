import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticle, getAllArticleSlugs } from "@/lib/articles";
import { SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const AUTHOR = "Michael";
const AUTHOR_TITLE = "Head of Strategy";

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.seoTitle,
    description: article.description,
    alternates: { canonical: `/insights/${article.slug}` },
  };
}

export default function InsightArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const base = `https://${SITE.domain}`;
  const url = `${base}/insights/${article.slug}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Person",
      name: AUTHOR,
      jobTitle: AUTHOR_TITLE,
      url: `${base}/about`,
    },
    publisher: { "@type": "Organization", name: SITE.name, url: base },
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
          { name: "Insights", href: "/insights" },
          { name: article.title },
        ]}
      />

      <p className="text-sm font-medium uppercase tracking-wide text-accent">
        Trding.io Research
      </p>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{article.title}</h1>

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
          Published {article.datePublished}
          {article.dateModified !== article.datePublished
            ? ` · Updated ${article.dateModified}`
            : ""}
        </span>
      </div>

      {/* Quotable summary */}
      <div className="mt-6 rounded-xl2 border-l-4 border-accent bg-cream/60 p-5">
        <p className="text-lg leading-relaxed text-ink/90">{article.summary}</p>
      </div>

      {/* Body */}
      <div className="mt-10 space-y-10">
        {article.blocks.map((block, i) => (
          <section key={i}>
            <h2 className="text-2xl font-bold text-ink">{block.heading}</h2>
            {block.paragraphs?.map((p, j) => (
              <p key={j} className="mt-3 leading-relaxed text-muted">
                {p}
              </p>
            ))}
            {block.list &&
              (block.bullets ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted">
                  {block.list.map((item, k) => (
                    <li key={k}>{item}</li>
                  ))}
                </ul>
              ) : (
                <ol className="mt-4 list-decimal space-y-2 pl-5 leading-relaxed text-muted">
                  {block.list.map((item, k) => (
                    <li key={k}>{item}</li>
                  ))}
                </ol>
              ))}
          </section>
        ))}
      </div>

      {/* Journalists / free-to-cite */}
      <div className="mt-12 rounded-xl2 border border-line bg-cream/60 p-6">
        <h2 className="text-xl font-bold">Journalists &amp; writers</h2>
        <p className="mt-2 leading-relaxed text-muted">
          This article is free to cite with attribution to{" "}
          <strong className="text-ink">{SITE.name}</strong>. Suggested quote from{" "}
          {AUTHOR}, {AUTHOR_TITLE}:
        </p>
        <blockquote className="mt-3 border-l-4 border-accent pl-4 text-ink/90 italic">
          &ldquo;{article.citeQuote}&rdquo;
        </blockquote>
        <p className="mt-3 text-sm text-muted">
          For the underlying data or a comment on record, contact{" "}
          <a
            href="mailto:hello@trding.io"
            className="font-medium text-accent hover:underline"
          >
            hello@trding.io
          </a>
          .
        </p>
      </div>

      {/* Sources */}
      <div className="mt-10">
        <h2 className="text-xl font-bold">Sources</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {article.sources.map((s, i) => (
            <li key={i}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener"
                className="text-accent hover:underline"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 text-xs leading-relaxed text-muted">
        This article is educational and is not financial advice. CFDs are complex
        instruments and come with a high risk of losing money. Most retail
        traders lose money.
      </p>
    </div>
  );
}
