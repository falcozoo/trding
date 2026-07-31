import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCourseById, getAllCourseIds } from "@/lib/courses";
import { CourseProgress } from "@/components/CourseProgress";

export function generateStaticParams() {
  return getAllCourseIds().map((course) => ({ course }));
}

export function generateMetadata({
  params,
}: {
  params: { course: string };
}): Metadata {
  const course = getCourseById(params.course);
  if (!course) return {};
  return {
    title: `${course.title} — Free Course (${course.modules.length} modules)`,
    description: course.description,
    alternates: { canonical: `/learn/course/${params.course}` },
  };
}

const DISCLAIMER =
  "This is educational content only, not investment advice. Trading involves substantial risk of loss. Never trade money you cannot afford to lose.";

export default function CoursePage({
  params,
}: {
  params: { course: string };
}) {
  const course = getCourseById(params.course);
  if (!course) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: { "@type": "Organization", name: "Trding.io" },
    hasCourseInstance: course.modules.map((m, i) => ({
      "@type": "CourseInstance",
      name: m.title,
      position: i + 1,
    })),
  };

  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="mb-6 text-sm text-muted">
        <Link href="/learn" className="hover:text-ink">
          ← All courses
        </Link>
      </nav>

      <header className="max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-amber-soft px-2.5 py-1 text-xs font-semibold text-amber-dark">
            {course.level}
          </span>
          <span className="text-xs text-muted">
            {course.modules.length} modules
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{course.title}</h1>
        <p className="mt-3 text-lg leading-relaxed text-muted">
          {course.tagline}
        </p>
      </header>

      <div className="mt-6">
        <CourseProgress courseId={course.id} total={course.modules.length} />
      </div>

      {/* Module list */}
      <ol className="mt-8 space-y-3">
        {course.modules.map((m, i) => (
          <li key={m.slug}>
            <Link
              href={`/learn/course/${course.id}/${m.slug}`}
              className="group flex items-start gap-4 rounded-xl2 border border-line bg-paper p-5 shadow-card transition hover:border-amber"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream text-sm font-bold text-ink">
                {i + 1}
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-ink group-hover:text-amber-dark">
                  {m.title}
                </span>
                <span className="mt-0.5 block text-sm text-muted">
                  {m.summary}
                </span>
                <span className="mt-1 block text-xs text-muted">
                  {m.readingMinutes} min read
                </span>
              </span>
              <span className="ml-auto self-center text-amber-dark opacity-0 transition group-hover:opacity-100">
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>

      {/* Disclaimer */}
      <div className="mt-10 rounded-xl border border-line bg-cream p-4 text-sm leading-relaxed text-muted">
        <strong className="text-ink">Important:</strong> {DISCLAIMER}
      </div>
    </div>
  );
}
