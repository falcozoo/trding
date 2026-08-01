import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getLessonBySlug,
  getAllLessonSlugs,
  getRelatedLessons,
  CATEGORY_LABELS,
} from "@/lib/lessons";
import { SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return getAllLessonSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const lesson = getLessonBySlug(params.slug);
  if (!lesson) return {};
  return {
    title: `${lesson.title} — Beginner Trading Guide`,
    description: lesson.summary,
    alternates: { canonical: `/learn/${lesson.slug}` },
  };
}

const DISCLAIMER =
  "This is educational content only, not investment advice. Trading involves substantial risk of loss. Never trade money you cannot afford to lose.";

function Disclaimer() {
  return (
    <div className="rounded-xl border border-line bg-cream p-4 text-sm leading-relaxed text-muted">
      <strong className="text-ink">Important:</strong> {DISCLAIMER}
    </div>
  );
}

export default function LessonPage({
  params,
}: {
  params: { slug: string };
}) {
  const lesson = getLessonBySlug(params.slug);
  if (!lesson) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: lesson.title,
    description: lesson.summary,
    articleSection: CATEGORY_LABELS[lesson.category],
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
    inLanguage: "en",
    mainEntityOfPage: `https://${SITE.domain}/learn/${lesson.slug}`,
  };

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs
        items={[{ name: "Learn", href: "/learn" }, { name: lesson.title }]}
      />

      {/* Header */}
      <header>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-amber-soft px-2.5 py-1 text-xs font-semibold text-amber-dark">
            {CATEGORY_LABELS[lesson.category]}
          </span>
          <span className="text-xs text-muted">
            {lesson.readingMinutes} min read · {lesson.level}
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{lesson.title}</h1>
        <p className="mt-3 text-lg leading-relaxed text-muted">
          {lesson.summary}
        </p>
      </header>

      {/* Top disclaimer */}
      <div className="mt-6">
        <Disclaimer />
      </div>

      {/* Body */}
      <article className="mt-10 space-y-10">
        {lesson.body.map((section) => (
          <section key={section.heading}>
            <h2 className="text-2xl font-bold text-ink">{section.heading}</h2>
            <div className="mt-3 space-y-4">
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-ink/90">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </article>

      {/* Bottom disclaimer */}
      <div className="mt-12">
        <Disclaimer />
      </div>

      {/* Related guides — internal linking */}
      {(() => {
        const related = getRelatedLessons(lesson.slug, 6);
        if (related.length === 0) return null;
        return (
          <section className="mt-12">
            <h2 className="text-xl font-bold text-ink">Related guides</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/learn/${r.slug}`}
                  className="group rounded-xl border border-line bg-paper p-4 transition hover:border-amber"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-amber-dark">
                    {CATEGORY_LABELS[r.category]}
                  </span>
                  <p className="mt-1 font-semibold text-ink group-hover:text-amber-dark">
                    {r.title}
                  </p>
                  <p className="mt-1 line-clamp-2 text-sm text-muted">
                    {r.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        );
      })()}

      {/* Soft CTA */}
      <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl2 border border-line bg-paper p-6 shadow-card sm:flex-row sm:items-center">
        <div>
          <h2 className="text-lg font-bold text-ink">
            Ready to pick a broker?
          </h2>
          <p className="mt-1 text-sm text-muted">
            Take our short quiz to find a regulated broker that fits your
            profile — or keep learning with our other guides.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/quiz"
            className="whitespace-nowrap rounded-xl bg-amber px-5 py-3 font-semibold text-white shadow-card transition hover:bg-amber-dark"
          >
            Take the quiz →
          </Link>
          <Link
            href="/learn"
            className="whitespace-nowrap rounded-xl border border-line px-5 py-3 font-semibold text-ink transition hover:border-amber"
          >
            More guides
          </Link>
        </div>
      </div>
    </div>
  );
}
