"use client";

/**
 * Client-side gamification for course modules.
 *
 * Tracks completed modules per course in localStorage (no backend needed).
 * - CourseProgress: a progress bar + count shown on the course hub.
 * - ModuleComplete: the "Mark as complete" button + next-module unlock on a
 *   module page.
 *
 * Keys: `trding.progress.<courseId>` -> JSON string[] of completed slugs.
 */

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

function storageKey(courseId: string) {
  return `trding.progress.${courseId}`;
}

function readCompleted(courseId: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(storageKey(courseId));
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeCompleted(courseId: string, slugs: string[]) {
  try {
    window.localStorage.setItem(storageKey(courseId), JSON.stringify(slugs));
    // notify other components on the page
    window.dispatchEvent(
      new CustomEvent("trding-progress", { detail: { courseId } })
    );
  } catch {
    /* ignore */
  }
}

/** Progress bar for a whole course (used on the course hub + module rail). */
export function CourseProgress({
  courseId,
  total,
  compact = false,
}: {
  courseId: string;
  total: number;
  compact?: boolean;
}) {
  const [done, setDone] = useState(0);

  const refresh = useCallback(() => {
    setDone(readCompleted(courseId).length);
  }, [courseId]);

  useEffect(() => {
    refresh();
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (!detail || detail.courseId === courseId) refresh();
    };
    window.addEventListener("trding-progress", handler);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("trding-progress", handler);
      window.removeEventListener("storage", refresh);
    };
  }, [courseId, refresh]);

  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const complete = done >= total && total > 0;

  return (
    <div className={compact ? "" : "rounded-xl2 border border-line bg-paper p-4 shadow-card"}>
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-ink">
          {complete ? "Course complete 🎉" : "Your progress"}
        </span>
        <span className="text-muted">
          {done} / {total}
        </span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-cream">
        <div
          className="h-full rounded-full bg-amber transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/** Per-module completion control + next-module link. */
export function ModuleComplete({
  courseId,
  moduleSlug,
  nextHref,
  nextTitle,
}: {
  courseId: string;
  moduleSlug: string;
  nextHref?: string;
  nextTitle?: string;
}) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(readCompleted(courseId).includes(moduleSlug));
  }, [courseId, moduleSlug]);

  function toggle() {
    const current = readCompleted(courseId);
    let next: string[];
    if (current.includes(moduleSlug)) {
      next = current.filter((s) => s !== moduleSlug);
      setDone(false);
    } else {
      next = [...current, moduleSlug];
      setDone(true);
    }
    writeCompleted(courseId, next);
  }

  return (
    <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-xl2 border border-line bg-paper p-6 shadow-card sm:flex-row sm:items-center">
      <button
        onClick={toggle}
        className={
          done
            ? "rounded-xl border border-amber bg-amber-soft px-5 py-3 font-semibold text-amber-dark transition"
            : "rounded-xl bg-amber px-5 py-3 font-semibold text-white shadow-card transition hover:bg-amber-dark"
        }
      >
        {done ? "✓ Completed" : "Mark as complete"}
      </button>

      {nextHref && (
        <Link
          href={nextHref}
          className="group flex items-center gap-2 text-right"
        >
          <span className="text-sm text-muted">
            Next
            <span className="ml-1 font-semibold text-ink group-hover:text-amber-dark">
              {nextTitle}
            </span>
          </span>
          <span className="text-amber-dark transition group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      )}
    </div>
  );
}
