"use client";

import { useState } from "react";
import Link from "next/link";
import { getBrokers } from "@/lib/brokers";
import { recommend, type QuizAnswers } from "@/lib/quiz";
import { Stars } from "@/components/Stars";

type StepDef = {
  key: keyof QuizAnswers;
  question: string;
  options: string[];
};

const STEPS: StepDef[] = [
  {
    key: "level",
    question: "What's your experience level?",
    options: ["Beginner", "Know basics", "Experienced"],
  },
  {
    key: "budget",
    question: "How much do you plan to start with?",
    options: ["<100", "100-500", "500-2000", ">2000"],
  },
  {
    key: "market",
    question: "What do you want to trade?",
    options: ["Forex", "Indices", "Stocks", "Crypto", "Everything"],
  },
  {
    key: "country",
    question: "Where do you live?",
    options: [
      "UK",
      "Netherlands",
      "Sweden",
      "Norway",
      "Denmark",
      "Finland",
      "Other",
    ],
  },
  {
    key: "priority",
    question: "What matters most to you?",
    options: ["Low fees", "Regulation", "Simple platform", "High leverage"],
  },
];

const LABELS: Record<string, string> = {
  "<100": "Under €100",
  "100-500": "€100 – €500",
  "500-2000": "€500 – €2,000",
  ">2000": "Over €2,000",
};

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [done, setDone] = useState(false);

  const current = STEPS[step];
  const progress = Math.round(((step + (done ? 1 : 0)) / STEPS.length) * 100);

  function choose(value: string) {
    const next = { ...answers, [current.key]: value };
    setAnswers(next);
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  }

  function restart() {
    setStep(0);
    setAnswers({});
    setDone(false);
  }

  if (done) {
    const results = recommend(answers as QuizAnswers, getBrokers());
    return <Results results={results} onRestart={restart} />;
  }

  return (
    <div className="mx-auto max-w-2xl px-5 py-12">
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-2 flex justify-between text-sm text-muted">
          <span>
            Question {step + 1} of {STEPS.length}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-amber transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h1 className="text-2xl font-bold sm:text-3xl">{current.question}</h1>

      <div className="mt-6 grid gap-3">
        {current.options.map((opt) => (
          <button
            key={opt}
            onClick={() => choose(opt)}
            className="rounded-xl border border-line bg-paper px-5 py-4 text-left font-medium shadow-card transition hover:border-amber hover:bg-amber-soft"
          >
            {LABELS[opt] ?? opt}
          </button>
        ))}
      </div>

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

function Results({
  results,
  onRestart,
}: {
  results: ReturnType<typeof recommend>;
  onRestart: () => void;
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your top matches</h1>
        <button
          onClick={onRestart}
          className="text-sm text-muted hover:text-ink"
        >
          Restart quiz
        </button>
      </div>
      <p className="mb-8 text-muted">
        {results.length} broker{results.length > 1 ? "s" : ""} match your
        profile, ranked for you.
      </p>

      <div className="space-y-4">
        {results.map((r, i) => (
          <div
            key={r.broker.slug}
            className="rounded-xl2 border border-line bg-paper p-6 shadow-card"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted">
                    #{i + 1}
                  </span>
                  <Link
                    href={`/brokers/${r.broker.slug}`}
                    className="text-xl font-bold hover:text-amber-dark"
                  >
                    {r.broker.name}
                  </Link>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <Stars value={r.score} size="sm" />
                  <span className="text-sm font-semibold">
                    {r.score.toFixed(1)}/5
                  </span>
                </div>
              </div>
              <a
                href={r.broker.affiliateUrl}
                target="_blank"
                rel="sponsored noopener"
                className="whitespace-nowrap rounded-lg bg-amber px-4 py-2.5 text-sm font-semibold text-white hover:bg-amber-dark"
              >
                Open account
              </a>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {r.reasons.map((reason, j) => (
                <li key={j}>✔ {reason}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <SoftEmailCapture />
    </div>
  );
}

function SoftEmailCapture() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="mt-10 rounded-xl2 border border-amber bg-amber-soft p-6 text-center">
        <p className="font-semibold text-amber-dark">
          Done — check your inbox to confirm.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 rounded-xl2 border border-line bg-paper p-6 shadow-card">
      <h2 className="text-lg font-bold">Get your comparison by email</h2>
      <p className="mt-1 text-sm text-muted">
        We&apos;ll send your shortlist plus an alert when a better promo appears
        in your category. No spam, unsubscribe anytime.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (email.includes("@")) setSent(true);
        }}
        className="mt-4 flex flex-col gap-2 sm:flex-row"
      >
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
          className="rounded-lg bg-amber px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-dark"
        >
          Send it to me
        </button>
      </form>
    </div>
  );
}
