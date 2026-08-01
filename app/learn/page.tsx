import type { Metadata } from "next";
import Link from "next/link";
import { getLessons, CATEGORY_LABELS } from "@/lib/lessons";
import { getCourses } from "@/lib/courses";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Learn to Trade — Free, Plain-English Guides for Beginners",
  description:
    "Free, beginner-friendly trading guides in plain English: what trading is, how to start, risk management, strategy styles and trading psychology. Educational only, honest about risk.",
  alternates: { canonical: "/learn" },
};

const CATEGORY_BADGE: Record<string, string> = {
  basics: "bg-amber-soft text-amber-dark",
  risk: "bg-amber-soft text-amber-dark",
  strategy: "bg-cream text-muted",
  psychology: "bg-cream text-muted",
};

export default function LearnHubPage() {
  const lessons = getLessons();
  const courses = getCourses();

  const base = `https://${SITE.domain}`;
  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Learn to Trade — Beginner Guides",
    url: `${base}/learn`,
    description:
      "A free library of plain-English trading guides for beginners, covering the basics, risk, costs and how to choose a broker.",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: lessons.length,
      itemListElement: lessons.map((l, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${base}/learn/${l.slug}`,
        name: l.title,
      })),
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Learn to trade — free, plain-English guides
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          No jargon, no hype, no promises. These short guides explain how
          trading actually works, how to start sensibly, and — most
          importantly — how to protect your money. They are written for complete
          beginners and they are honest about the risks, because most people who
          trade lose money.
        </p>
      </header>

      {/* Quiz CTA */}
      <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl2 border border-amber bg-amber-soft p-6 shadow-card sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-bold text-ink">
            Not sure where to start?
          </h2>
          <p className="mt-1 text-muted">
            Answer three quick questions and we&apos;ll suggest a reading path
            just for you.
          </p>
        </div>
        <Link
          href="/learn/quiz"
          className="whitespace-nowrap rounded-xl bg-amber px-6 py-3.5 font-semibold text-white shadow-card transition hover:bg-amber-dark"
        >
          What do you want to learn? →
        </Link>
      </div>

      {/* Courses (premium structured paths) */}
      {courses.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">Trading courses</h2>
          <p className="mt-2 max-w-3xl text-muted">
            Structured, step-by-step paths with clear visuals and progress
            tracking. Work through them in order, or jump to the module you
            need.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/learn/course/${course.id}`}
                className="group flex flex-col rounded-xl2 border border-line bg-paper p-6 shadow-card transition hover:-translate-y-0.5 hover:border-amber"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-amber-soft px-2.5 py-1 text-xs font-semibold text-amber-dark">
                    Course · {course.level}
                  </span>
                  <span className="text-xs text-muted">
                    {course.modules.length} modules
                  </span>
                </div>
                <h3 className="text-xl font-bold text-ink group-hover:text-amber-dark">
                  {course.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {course.tagline}
                </p>
                <span className="mt-4 text-sm font-semibold text-amber-dark">
                  Start course →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Short guides */}
      <h2 className="mt-14 text-2xl font-bold text-ink">Quick guides</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <Link
            key={lesson.slug}
            href={`/learn/${lesson.slug}`}
            className="group flex flex-col rounded-xl2 border border-line bg-paper p-6 shadow-card transition hover:-translate-y-0.5 hover:border-amber"
          >
            <div className="mb-3 flex items-center gap-2">
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  CATEGORY_BADGE[lesson.category] ?? "bg-cream text-muted"
                }`}
              >
                {CATEGORY_LABELS[lesson.category]}
              </span>
              <span className="text-xs text-muted">
                {lesson.readingMinutes} min read
              </span>
            </div>
            <h3 className="text-lg font-bold text-ink group-hover:text-amber-dark">
              {lesson.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {lesson.summary}
            </p>
            <span className="mt-4 text-sm font-semibold text-amber-dark">
              Read guide →
            </span>
          </Link>
        ))}
      </div>

      {/* Hub disclaimer */}
      <div className="mt-12 max-w-3xl rounded-xl border border-line bg-cream p-5 text-sm leading-relaxed text-muted">
        <strong className="text-ink">A note on risk.</strong> This is
        educational content only, not investment advice. Trading involves
        substantial risk of loss, and most retail traders lose money. Never trade
        money you cannot afford to lose. Nothing on this page is a recommendation
        to trade, or to trade in any particular way.
      </div>
    </div>
  );
}
