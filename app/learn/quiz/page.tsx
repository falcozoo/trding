"use client";

import { useState } from "react";
import Link from "next/link";

/* ---------- Answer shapes ---------- */
type Experience = "never" | "dabbled" | "some";
type Focus = "basics" | "risk" | "strategy" | "psychology";
type Time = "little" | "lots";

/* ---------- Lesson references (slug + title, kept in sync with lib/lessons) ---------- */
const L = {
  what: { slug: "what-is-trading", title: "What is trading, really?" },
  start: { slug: "how-to-start", title: "How to start trading as a total beginner" },
  risk: { slug: "risk-management-basics", title: "Risk management basics" },
  strategy: {
    slug: "trading-strategies-overview",
    title: "Common trading strategy styles, explained",
  },
  psych: { slug: "trading-psychology", title: "Trading psychology and discipline" },
} as const;

type LessonRef = { slug: string; title: string };

/* ---------- Deterministic path builder ---------- */
function buildPath(exp: Experience, focus: Focus, time: Time): LessonRef[] {
  const path: LessonRef[] = [];

  // Total beginners always start with the fundamentals.
  if (exp === "never") {
    path.push(L.what, L.start);
  } else if (exp === "dabbled") {
    path.push(L.start);
  }

  // Focus → the core lesson for that goal.
  const focusLesson: Record<Focus, LessonRef> = {
    basics: L.what,
    risk: L.risk,
    strategy: L.strategy,
    psychology: L.psych,
  };
  path.push(focusLesson[focus]);

  // Risk management is core for everyone — make sure it appears.
  if (focus !== "risk") path.push(L.risk);

  // If they have plenty of time (and haven't hit it yet), add psychology to round things out.
  if (time === "lots" && focus !== "psychology") path.push(L.psych);

  // De-duplicate while preserving order, cap at 4.
  const seen = new Set<string>();
  const unique = path.filter((l) => {
    if (seen.has(l.slug)) return false;
    seen.add(l.slug);
    return true;
  });
  return unique.slice(0, 4);
}

/* ---------- Question config ---------- */
const EXP_OPTIONS: { value: Experience; label: string }[] = [
  { value: "never", label: "I've never traded" },
  { value: "dabbled", label: "I've dabbled a little" },
  { value: "some", label: "I have some experience" },
];

const FOCUS_OPTIONS: { value: Focus; label: string }[] = [
  { value: "basics", label: "Understand the basics" },
  { value: "risk", label: "Manage risk safely" },
  { value: "strategy", label: "Learn a strategy" },
  { value: "psychology", label: "Master the psychology" },
];

const TIME_OPTIONS: { value: Time; label: string }[] = [
  { value: "little", label: "Just a little" },
  { value: "lots", label: "Plenty of time to learn" },
];

export default function LearnQuizPage() {
  const [step, setStep] = useState(0);
  const [exp, setExp] = useState<Experience | null>(null);
  const [focus, setFocus] = useState<Focus | null>(null);
  const [time, setTime] = useState<Time | null>(null);
  const [done, setDone] = useState(false);

  const totalSteps = 3;
  const progress = Math.round(((step + (done ? 1 : 0)) / totalSteps) * 100);

  function restart() {
    setStep(0);
    setExp(null);
    setFocus(null);
    setTime(null);
    setDone(false);
  }

  if (done && exp && focus && time) {
    const path = buildPath(exp, focus, time);
    return (
      <div className="mx-auto max-w-3xl px-5 py-12">
        <div className="mb-2 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Your learning path 📚</h1>
          <button
            onClick={restart}
            className="text-sm text-muted hover:text-ink"
          >
            Restart
          </button>
        </div>
        <p className="mb-8 text-muted">
          Based on your answers, here&apos;s a short, sensible reading order.
          Take it slowly — there&apos;s no rush, and understanding beats speed.
        </p>

        <ol className="space-y-4">
          {path.map((lesson, i) => (
            <li key={lesson.slug}>
              <Link
                href={`/learn/${lesson.slug}`}
                className="group flex items-center gap-4 rounded-xl2 border border-line bg-paper p-5 shadow-card transition hover:-translate-y-0.5 hover:border-amber"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-amber text-base font-bold text-white">
                  {i + 1}
                </span>
                <span className="flex-1 font-semibold text-ink group-hover:text-amber-dark">
                  {lesson.title}
                </span>
                <span className="text-sm font-semibold text-amber-dark">
                  Read →
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href={`/learn/${path[0].slug}`}
            className="rounded-xl bg-amber px-6 py-3.5 font-semibold text-white shadow-card transition hover:bg-amber-dark"
          >
            Start with lesson 1 →
          </Link>
          <Link
            href="/learn"
            className="rounded-xl border border-line px-6 py-3.5 font-semibold text-ink transition hover:border-amber"
          >
            Browse all guides
          </Link>
        </div>

        <div className="mt-12 rounded-xl border border-line bg-cream p-5 text-sm leading-relaxed text-muted">
          <strong className="text-ink">A note on risk.</strong> This is
          educational content only, not investment advice. Trading involves
          substantial risk of loss, and most retail traders lose money. Never
          trade money you cannot afford to lose.
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-10">
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-2 flex justify-between text-sm font-medium text-muted">
          <span>
            Question {step + 1} of {totalSteps}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-amber transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {step === 0 && (
        <Question
          title="What's your experience with trading?"
          options={EXP_OPTIONS}
          onPick={(v) => {
            setExp(v);
            setStep(1);
          }}
        />
      )}

      {step === 1 && (
        <Question
          title="What do you most want to focus on?"
          options={FOCUS_OPTIONS}
          onPick={(v) => {
            setFocus(v);
            setStep(2);
          }}
        />
      )}

      {step === 2 && (
        <Question
          title="How much time do you have to learn?"
          options={TIME_OPTIONS}
          onPick={(v) => {
            setTime(v);
            setDone(true);
          }}
        />
      )}

      {step > 0 && (
        <button
          onClick={() => setStep(step - 1)}
          className="mt-6 text-sm text-muted hover:text-ink"
        >
          ← Back
        </button>
      )}
    </div>
  );
}

/* ---------- Generic question block ---------- */
function Question<T extends string>({
  title,
  options,
  onPick,
}: {
  title: string;
  options: { value: T; label: string }[];
  onPick: (value: T) => void;
}) {
  return (
    <>
      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">{title}</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onPick(opt.value)}
            className="flex min-h-[72px] items-center rounded-xl2 border border-line bg-paper px-5 py-4 text-left text-lg font-semibold text-ink shadow-card transition hover:-translate-y-0.5 hover:border-amber hover:bg-amber-soft"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </>
  );
}
