"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { getBrokers } from "@/lib/brokers";
import { recommend, type QuizAnswers } from "@/lib/quiz";
import type { CountryCode } from "@/lib/brokers";
import { pickFeaturedSlug, applyFeatured } from "@/lib/featured";
import { CONTINENTS, continentById, type ContinentId } from "@/lib/geo";
import { WorldMap } from "@/components/WorldMap";
import { Stars } from "@/components/Stars";
import { SITE } from "@/lib/site";

/* ---------- Kahoot-style card palette (4 fixed colors, 2x2 grid) ---------- */
const CARD_COLORS = [
  { bg: "bg-[#E85D5D]", ring: "ring-[#C23B3B]", shape: "▲" },
  { bg: "bg-[#3E7BD6]", ring: "ring-[#295CAA]", shape: "◆" },
  { bg: "bg-[#E0A030]", ring: "ring-[#B97F1F]", shape: "●" },
  { bg: "bg-[#3FA66A]", ring: "ring-[#2C7C4C]", shape: "■" },
];

type ChoiceStep = {
  kind: "choice";
  key: "level" | "budget" | "market" | "priority";
  question: string;
  options: string[];
};
type CountryStep = { kind: "country"; key: "country"; question: string };
type Step = ChoiceStep | CountryStep;

const STEPS: Step[] = [
  {
    kind: "choice",
    key: "level",
    question: "What's your experience level?",
    options: ["Total beginner", "I know the basics", "Experienced", "Pro trader"],
  },
  {
    kind: "choice",
    key: "budget",
    question: "How much will you start with?",
    options: ["Under €100", "€100 – €500", "€500 – €2,000", "Over €2,000"],
  },
  {
    kind: "choice",
    key: "market",
    question: "What do you want to trade?",
    options: ["Forex", "Indices", "Stocks", "A bit of everything"],
  },
  { kind: "country", key: "country", question: "Where do you live?" },
  {
    kind: "choice",
    key: "priority",
    question: "What matters most to you?",
    options: ["Low fees", "Fast execution", "Simple platform", "High leverage"],
  },
];

/* Map friendly labels back to the QuizAnswers value union. */
const VALUE_MAP: Record<string, string> = {
  "Total beginner": "Beginner",
  "I know the basics": "Know basics",
  Experienced: "Experienced",
  "Pro trader": "Experienced",
  "Under €100": "<100",
  "€100 – €500": "100-500",
  "€500 – €2,000": "500-2000",
  "Over €2,000": ">2000",
  "A bit of everything": "Everything",
};
function toValue(label: string): string {
  return VALUE_MAP[label] ?? label;
}

/* Micro-reward encouragements shown under the progress bar as you advance. */
const ENCOURAGEMENTS = [
  "Let's go — this takes 60 seconds ⚡",
  "Nice! Off to a great start 👊",
  "Halfway there — you're doing great 🔥",
  "Almost done — 2 quick ones left 💪",
  "Last question — your match is ready 🎯",
];

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [continent, setContinent] = useState<ContinentId | null>(null);
  const [done, setDone] = useState(false);

  const current = STEPS[step];
  const filledSteps = step + (done ? 1 : 0);
  const progress = Math.round((filledSteps / STEPS.length) * 100);

  function commit(partial: Partial<QuizAnswers>) {
    const next = { ...answers, ...partial };
    setAnswers(next);
    if (step < STEPS.length - 1) setStep(step + 1);
    else setDone(true);
  }

  function restart() {
    setStep(0);
    setAnswers({});
    setContinent(null);
    setDone(false);
  }

  if (done) return <Results answers={answers as QuizAnswers} onRestart={restart} />;

  return (
    <div className="mx-auto max-w-3xl px-5 py-10">
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-2 flex justify-between text-sm font-medium text-muted">
          <span>
            Question {step + 1} of {STEPS.length}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-amber transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-sm font-semibold text-amber-dark">
          {ENCOURAGEMENTS[Math.min(step, ENCOURAGEMENTS.length - 1)]}
        </p>
      </div>

      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">{current.question}</h1>

      {current.kind === "choice" ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {current.options.map((opt, i) => {
            const c = CARD_COLORS[i % 4];
            return (
              <button
                key={opt}
                onClick={() => commit({ [current.key]: toValue(opt) } as Partial<QuizAnswers>)}
                className={`group flex min-h-[104px] items-center gap-3 rounded-2xl ${c.bg} px-5 py-5 text-left text-lg font-bold text-white shadow-card ring-0 transition hover:-translate-y-0.5 hover:ring-4 ${c.ring} focus-visible:ring-4`}
              >
                <span className="text-2xl opacity-80">{c.shape}</span>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>
      ) : continent === null ? (
        <WorldMap
          onSelect={(id) => {
            setContinent(id);
            // country sub-step shown next (same step index) — no auto-advance yet
          }}
        />
      ) : (
        <CountryGrid
          continentId={continent}
          onBack={() => setContinent(null)}
          onPick={(filter) => commit({ country: filter })}
        />
      )}

      {step > 0 && current.kind !== "country" && (
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

/* ---------------- Country grid (flags) after continent pick --------------- */
function CountryGrid({
  continentId,
  onPick,
  onBack,
}: {
  continentId: ContinentId;
  onPick: (filter: CountryCode) => void;
  onBack: () => void;
}) {
  const continent = continentById(continentId);
  if (!continent) return null;
  return (
    <div>
      <button
        onClick={onBack}
        className="mb-4 text-sm text-muted hover:text-ink"
      >
        ← Back to map
      </button>
      <p className="mb-4 font-semibold text-ink">{continent.label} — pick your country</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {continent.countries.map((c) => (
          <button
            key={c.name}
            onClick={() => onPick(c.filter)}
            className="flex items-center gap-3 rounded-xl border border-line bg-paper px-4 py-3.5 text-left font-medium shadow-card transition hover:border-amber hover:bg-amber-soft"
          >
            <span className="text-2xl">{c.flag}</span>
            <span className="text-sm">{c.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ Results ---------------------------------- */
function Results({
  answers,
  onRestart,
}: {
  answers: QuizAnswers;
  onRestart: () => void;
}) {
  const results = useMemo(() => {
    const ranked = recommend(answers, getBrokers());
    const isUS = answers.country === "USA";
    const seed = JSON.stringify(answers);
    const featured = pickFeaturedSlug(ranked, isUS, seed);
    return applyFeatured(ranked, featured);
  }, [answers]);

  const [top, ...rest] = results;

  return (
    <div className="mx-auto max-w-3xl px-5 py-10">
      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your top match 🎯</h1>
        <button onClick={onRestart} className="text-sm text-muted hover:text-ink">
          Restart
        </button>
      </div>
      <p className="mb-8 text-muted">
        Based on your profile, here&apos;s the broker we recommend — plus other
        strong options, scored honestly.
      </p>

      {/* Featured broker — premium card */}
      {top && <FeaturedCard result={top} />}

      {/* Other options */}
      {rest.length > 0 && (
        <>
          <h2 className="mb-3 mt-10 text-lg font-bold text-ink">
            Other good matches
          </h2>
          <div className="space-y-3">
            {rest.map((r, i) => (
              <div
                key={r.broker.slug}
                className="flex items-center justify-between gap-4 rounded-xl border border-line bg-paper p-5 shadow-card"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted">#{i + 2}</span>
                    <Link
                      href={`/brokers/${r.broker.slug}`}
                      className="font-bold hover:text-amber-dark"
                    >
                      {r.broker.name}
                    </Link>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <Stars value={r.score} size="sm" />
                    <span className="text-sm text-muted">{r.score.toFixed(1)}/5</span>
                  </div>
                </div>
                <a
                  href={r.broker.affiliateUrl}
                  target="_blank"
                  rel="sponsored noopener"
                  className="whitespace-nowrap rounded-lg border border-line px-4 py-2.5 text-sm font-semibold text-ink hover:border-amber"
                >
                  Open account
                </a>
              </div>
            ))}
          </div>
        </>
      )}

      <SoftEmailCapture />
    </div>
  );
}

function FeaturedCard({ result }: { result: ReturnType<typeof recommend>[number] }) {
  const b = result.broker;
  return (
    <div className="relative rounded-3xl border-2 border-amber bg-gradient-to-b from-amber-soft to-paper p-1 shadow-[0_8px_30px_rgba(224,138,46,0.18)]">
      {/* Recommended badge */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber px-4 py-1 text-sm font-bold text-white shadow-card">
        ⭐ Recommended for you
      </div>
      <div className="rounded-[22px] bg-paper p-6 pt-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-extrabold">{b.name}</h2>
          <p className="mt-1 text-muted">{b.tagline}</p>
          <div className="mt-3 flex items-center gap-2">
            <Stars value={result.score} size="lg" />
            <span className="text-xl font-bold">{result.score.toFixed(1)}/5</span>
          </div>

          {/* reasons */}
          <ul className="mt-4 space-y-1 text-sm text-ink">
            {result.reasons.map((r, i) => (
              <li key={i}>✔ {r}</li>
            ))}
          </ul>

          {/* recommended starting deposit line */}
          <div className="mt-4 rounded-lg bg-amber-soft px-4 py-2 text-sm text-amber-dark">
            {(b.bonusCode || b.bonusNote) && (
              <>
                Welcome bonus{b.bonusCode ? ` — code ${b.bonusCode}` : ""}.{" "}
              </>
            )}
            Recommended: €{SITE.recommendedMinDeposit} to get started.
          </div>

          <a
            href={b.affiliateUrl}
            target="_blank"
            rel="sponsored noopener"
            className="mt-5 w-full rounded-xl bg-amber px-6 py-4 text-center text-lg font-bold text-white shadow-card transition hover:bg-amber-dark sm:w-auto sm:px-12"
          >
            Open my account →
          </a>
          <Link
            href={`/brokers/${b.slug}`}
            className="mt-3 text-sm text-muted underline hover:text-ink"
          >
            See full review first
          </Link>
        </div>
      </div>
    </div>
  );
}

function SoftEmailCapture() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  if (sent) {
    return (
      <div className="mt-10 rounded-2xl border border-amber bg-amber-soft p-6 text-center">
        <p className="font-semibold text-amber-dark">Done — check your inbox to confirm.</p>
      </div>
    );
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@") || loading) return;
    setLoading(true);
    try {
      // Persist to the Resend audience + fire the welcome email.
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      // Meta Pixel: Lead event on quiz-end form completion (highest intent)
      if (typeof window !== "undefined" && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
        (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("track", "Lead");
      }
    } catch {
      // Non-blocking: we still confirm to the user.
    }
    setSent(true);
    setLoading(false);
  }

  return (
    <div className="mt-10 rounded-2xl border border-line bg-paper p-6 shadow-card">
      <h2 className="text-lg font-bold">Get your comparison by email</h2>
      <p className="mt-1 text-sm text-muted">
        We&apos;ll send your shortlist plus an alert when a better promo appears
        in your category. No spam, unsubscribe anytime.
      </p>
      <form onSubmit={submit} className="mt-4 flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="flex-1 rounded-lg border border-line bg-cream px-4 py-2.5 text-sm outline-none focus:border-amber"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-amber px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-dark disabled:opacity-60"
        >
          {loading ? "Sending…" : "Send it to me"}
        </button>
      </form>
    </div>
  );
}
