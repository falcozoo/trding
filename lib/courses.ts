/**
 * Structured trading COURSES (parcours) for the /learn section.
 *
 * This is a richer content model than lessons.ts: courses group ordered
 * modules, and each module body supports headings, bold key-point callouts,
 * and inline images (premium chart-style infographics under /public/learn/...).
 *
 * Gamification: modules are ordered with an index; the UI tracks completion in
 * localStorage and shows progress + "next module" unlocking. Content here stays
 * neutral and educational — no signals, no performance promises.
 */

export type CourseId =
  | "price-action"
  | "smart-money-concepts"
  | "volume-order-flow"
  | "wyckoff"
  | "trend-following"
  | "scalping-intraday"
  | "fibonacci-harmonic";

/** A block inside a module body. */
export type ModuleBlock =
  | { kind: "text"; html: string } // html: limited inline markup (<strong>) allowed
  | { kind: "heading"; text: string }
  | { kind: "key"; text: string } // highlighted key takeaway callout
  | { kind: "image"; src: string; alt: string; caption?: string }
  | { kind: "list"; items: string[] };

export interface Module {
  slug: string;
  title: string;
  summary: string;
  readingMinutes: number;
  blocks: ModuleBlock[];
  /** One-line "what you'll be able to do" learning objective. */
  objective: string;
}

export interface Course {
  id: CourseId;
  title: string;
  tagline: string;
  /** SEO description for the course hub. */
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  accent: string; // tailwind-ish token used for badges (kept simple)
  modules: Module[];
}

/* ================================================================== */
/*  Course data is assembled from per-course files to keep this        */
/*  module readable as the library grows.                              */
/* ================================================================== */

import { priceActionCourse } from "./courses/price-action";
import { smcCourse } from "./courses/smart-money-concepts";
import { volumeCourse } from "./courses/volume-order-flow";
import { wyckoffCourse } from "./courses/wyckoff";
import { trendCourse } from "./courses/trend-following";
import { scalpingCourse } from "./courses/scalping-intraday";
import { fibonacciCourse } from "./courses/fibonacci-harmonic";

const COURSES: Course[] = [priceActionCourse, smcCourse, volumeCourse, wyckoffCourse, trendCourse, scalpingCourse, fibonacciCourse];

export function getCourses(): Course[] {
  return COURSES;
}

export function getCourseById(id: string): Course | undefined {
  return COURSES.find((c) => c.id === id);
}

export function getAllCourseIds(): string[] {
  return COURSES.map((c) => c.id);
}

export function getModule(
  courseId: string,
  moduleSlug: string
): { course: Course; module: Module; index: number } | undefined {
  const course = getCourseById(courseId);
  if (!course) return undefined;
  const index = course.modules.findIndex((m) => m.slug === moduleSlug);
  if (index === -1) return undefined;
  return { course, module: course.modules[index], index };
}

/** All (courseId, moduleSlug) pairs for static generation. */
export function getAllModuleParams(): Array<{
  course: string;
  module: string;
}> {
  const out: Array<{ course: string; module: string }> = [];
  for (const c of COURSES) {
    for (const m of c.modules) {
      out.push({ course: c.id, module: m.slug });
    }
  }
  return out;
}
