"use client";

import { useState } from "react";

/**
 * Interactive mini-quiz block for course modules — gamifies learning.
 * Single multiple-choice question with immediate right/wrong feedback and an
 * optional explanation. Pure client-side, no network.
 */
export function MiniQuiz({
  question,
  options,
  correct,
  explain,
}: {
  question: string;
  options: string[];
  correct: number;
  explain?: string;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;
  const isRight = picked === correct;

  return (
    <div className="mt-8 rounded-xl2 border border-line bg-paper p-6 shadow-card">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-lg" aria-hidden>
          🧠
        </span>
        <h3 className="text-sm font-bold uppercase tracking-wide text-amber-dark">
          Quick check
        </h3>
      </div>

      <p className="text-base font-semibold text-ink">{question}</p>

      <div className="mt-4 grid gap-2">
        {options.map((opt, i) => {
          let cls =
            "flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-medium transition ";
          if (!answered) {
            cls +=
              "border-line bg-cream text-ink hover:border-amber hover:bg-amber-soft/40";
          } else if (i === correct) {
            cls += "border-green-500 bg-green-50 text-green-800";
          } else if (i === picked) {
            cls += "border-red-400 bg-red-50 text-red-700";
          } else {
            cls += "border-line bg-cream text-muted opacity-70";
          }
          return (
            <button
              key={i}
              type="button"
              disabled={answered}
              onClick={() => setPicked(i)}
              className={cls}
            >
              <span>{opt}</span>
              {answered && i === correct && <span aria-hidden>✓</span>}
              {answered && i === picked && i !== correct && (
                <span aria-hidden>✕</span>
              )}
            </button>
          );
        })}
      </div>

      {answered && (
        <div
          className={`mt-4 rounded-xl p-4 text-sm leading-relaxed ${
            isRight
              ? "bg-green-50 text-green-800"
              : "bg-amber-soft/60 text-ink"
          }`}
        >
          <p className="font-semibold">
            {isRight ? "Correct! 🎉" : "Not quite — here's why:"}
          </p>
          {explain && <p className="mt-1">{explain}</p>}
          {!isRight && (
            <button
              type="button"
              onClick={() => setPicked(null)}
              className="mt-2 text-sm font-semibold text-amber-dark underline"
            >
              Try again
            </button>
          )}
        </div>
      )}
    </div>
  );
}
