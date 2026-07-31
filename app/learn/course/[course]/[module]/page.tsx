import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getCourseById,
  getModule,
  getAllModuleParams,
} from "@/lib/courses";
import { Block } from "@/components/Block";
import { CourseProgress, ModuleComplete } from "@/components/CourseProgress";

export function generateStaticParams() {
  return getAllModuleParams();
}

export function generateMetadata({
  params,
}: {
  params: { course: string; module: string };
}): Metadata {
  const found = getModule(params.course, params.module);
  if (!found) return {};
  const { course, module } = found;
  return {
    title: `${module.title} — ${course.title} | Trding.io`,
    description: module.summary,
    alternates: {
      canonical: `/learn/course/${course.id}/${module.slug}`,
    },
  };
}

const DISCLAIMER =
  "This is educational content only, not investment advice. Trading involves substantial risk of loss. Never trade money you cannot afford to lose.";

export default function ModulePage({
  params,
}: {
  params: { course: string; module: string };
}) {
  const found = getModule(params.course, params.module);
  if (!found) notFound();
  const { course, module, index } = found;

  const prev = index > 0 ? course.modules[index - 1] : undefined;
  const next =
    index < course.modules.length - 1
      ? course.modules[index + 1]
      : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: module.title,
    description: module.summary,
    learningResourceType: "Lesson",
    isPartOf: { "@type": "Course", name: course.title },
    provider: { "@type": "Organization", name: "Trding.io" },
    position: index + 1,
    inLanguage: "en",
  };

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-muted">
        <Link href="/learn" className="hover:text-ink">
          Learn
        </Link>
        <span>/</span>
        <Link href={`/learn/course/${course.id}`} className="hover:text-ink">
          {course.title}
        </Link>
        <span>/</span>
        <span className="text-ink">
          Module {index + 1}
        </span>
      </nav>

      <div className="mb-6">
        <CourseProgress
          courseId={course.id}
          total={course.modules.length}
          compact
        />
      </div>

      {/* Header */}
      <header>
        <div className="flex items-center gap-2 text-xs text-muted">
          <span className="rounded-full bg-amber-soft px-2.5 py-1 font-semibold text-amber-dark">
            Module {index + 1} of {course.modules.length}
          </span>
          <span>{module.readingMinutes} min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{module.title}</h1>
        <p className="mt-3 text-lg leading-relaxed text-muted">
          {module.summary}
        </p>
        <p className="mt-3 text-sm font-medium text-amber-dark">
          {module.objective}
        </p>
      </header>

      {/* Top disclaimer */}
      <div className="mt-6 rounded-xl border border-line bg-cream p-4 text-sm leading-relaxed text-muted">
        <strong className="text-ink">Important:</strong> {DISCLAIMER}
      </div>

      {/* Body */}
      <article className="mt-2">
        {module.blocks.map((b, i) => (
          <Block key={i} block={b} />
        ))}
      </article>

      {/* Completion + next */}
      <ModuleComplete
        courseId={course.id}
        moduleSlug={module.slug}
        nextHref={
          next ? `/learn/course/${course.id}/${next.slug}` : undefined
        }
        nextTitle={next?.title}
      />

      {/* Prev / index nav */}
      <div className="mt-6 flex items-center justify-between text-sm">
        {prev ? (
          <Link
            href={`/learn/course/${course.id}/${prev.slug}`}
            className="text-muted hover:text-ink"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        <Link
          href={`/learn/course/${course.id}`}
          className="text-muted hover:text-ink"
        >
          All modules
        </Link>
      </div>

      {/* Bottom disclaimer */}
      <div className="mt-10 rounded-xl border border-line bg-cream p-4 text-sm leading-relaxed text-muted">
        <strong className="text-ink">Important:</strong> {DISCLAIMER}
      </div>
    </div>
  );
}
