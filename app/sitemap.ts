import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getAllSlugs } from "@/lib/brokers";
import { getAllPairs } from "@/lib/pairs";
import { NEEDS } from "@/lib/needs";
import { getAllLessonSlugs } from "@/lib/lessons";
import { getCourses } from "@/lib/courses";

const BASE = `https://${SITE.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "",
    "/brokers",
    "/compare",
    "/quiz",
    "/learn",
    "/learn/quiz",
    "/markets",
    "/tools",
    "/tools/position-size",
    "/tools/risk-reward",
    "/tools/pip-value",
    "/tools/compounding",
    "/methodology",
    "/how-we-make-money",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: (path === "" || path === "/markets"
      ? "daily"
      : "weekly") as "daily" | "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  // Broker detail pages
  const brokerPages = getAllSlugs().map((slug) => ({
    url: `${BASE}/brokers/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Head-to-head compare pages
  const comparePages = getAllPairs().map((p) => ({
    url: `${BASE}/compare/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Best-for-need pages
  const needPages = NEEDS.map((n) => ({
    url: `${BASE}/best/${n.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Quick guides (lessons)
  const lessonPages = getAllLessonSlugs().map((slug) => ({
    url: `${BASE}/learn/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Courses + every module
  const coursePages: MetadataRoute.Sitemap = [];
  for (const course of getCourses()) {
    coursePages.push({
      url: `${BASE}/learn/course/${course.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    });
    for (const m of course.modules) {
      coursePages.push({
        url: `${BASE}/learn/course/${course.id}/${m.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      });
    }
  }

  return [
    ...staticPages,
    ...brokerPages,
    ...comparePages,
    ...needPages,
    ...lessonPages,
    ...coursePages,
  ];
}
