import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTutorial, getAllTutorialSlugs } from "@/lib/tutorials";
import { SITE } from "@/lib/site";

const AUTHOR = "Michael";
const AUTHOR_TITLE = "Head of Strategy";

export function generateStaticParams() {
  return getAllTutorialSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const t = getTutorial(params.slug);
  if (!t) return {};
  return {
    title: t.seoTitle,
    description: t.description,
    alternates: { canonical: `/tutorials/${t.slug}` },
  };
}

export default function TutorialPage({
  params,
}: {
  params: { slug: string };
}) {
  const t = getTutorial(params.slug);
  if (!t) notFound();

  const base = `https://${SITE.domain}`;
  const url = `${base}/tutorials/${t.slug}`;

  // HowTo-flavoured Article schema with named author + dates (E-E-A-T).
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.title,
    description: t.description,
    datePublished: t.datePublished,
    dateModified: t.dateModified,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />

      <p className="text-sm font-medium uppercase tracking-wide text-accent">
        Trding.io Tutorial
      </p>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{t.title}</h1>

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
          Published {t.datePublished}
          {t.dateModified !== t.datePublished ? ` · Updated ${t.dateModified}` : ""}
        </span>
      </div>

      <div className="mt-6 rounded-xl2 border-l-4 border-accent bg-cream/60 p-5">
        <p className="text-lg leading-relaxed text-ink/90">{t.summary}</p>
      </div>

      <div className="mt-10 space-y-10">
        {t.blocks.map((block, i) => (
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

      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          href="/tutorials"
          className="rounded-xl border border-line px-5 py-3 text-sm font-semibold text-ink transition hover:border-amber"
        >
          ← All tutorials
        </Link>
        <Link
          href="/brokers"
          className="rounded-xl bg-amber px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-amber-dark"
        >
          Compare brokers →
        </Link>
      </div>

      <p className="mt-8 text-xs leading-relaxed text-muted">
        This tutorial is educational and is not financial advice. CFDs are
        complex instruments and come with a high risk of losing money. Most
        retail traders lose money.
      </p>
    </div>
  );
}
