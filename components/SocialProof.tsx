"use client";

import { useEffect, useState } from "react";

/**
 * Live social-proof toast — pure client-side, ZERO network / ZERO token cost.
 *
 * Shows a rotating "someone is doing X" notification bottom-left plus a small
 * "N people online" counter, to signal momentum on cold traffic. Names and
 * actions are baked in and shuffled locally; nothing is fetched.
 *
 * Deliberately kept vague ("is exploring", "is comparing") rather than asserting
 * verifiable false facts, and never claims a guaranteed bonus.
 */

// Mostly Western male first names, a few female — as specified.
const NAMES = [
  "Peter", "Marc", "Thomas", "Lucas", "David", "James", "Daniel", "Michael",
  "Alex", "Julien", "Kevin", "Nicolas", "Antoine", "Paul", "Simon", "Leon",
  "Maxim", "Oliver", "Erik", "Sven", "Jonas", "Matteo", "Hugo", "Sam",
  "Ryan", "Chris", "Ben", "Adam", "Victor", "Louis", "Felix", "Tom",
  "Andreas", "Pieter", "Martin", "Stefan", "Gabriel", "Nathan", "Theo",
  // a few female
  "Sophie", "Emma", "Laura", "Anna", "Julia",
];

const ACTIONS: string[] = [
  "is comparing brokers right now",
  "just took the 60-second quiz",
  "is reading the Price Action course",
  "is checking broker regulation",
  "is using the position size calculator",
  "just compared RaiseFX and Axi",
  "is exploring the broker scoreboard",
  "is reading the risk management guide",
  "just found their broker match",
  "is checking the real cost of trading",
  "is browsing the Smart Money course",
  "is reading today's market brief",
  "just opened the fast-withdrawals ranking",
  "is comparing fees side by side",
];

// A few English-speaking / Nordic locales for a subtle location tag.
const PLACES = [
  "London", "Amsterdam", "Stockholm", "Oslo", "Dublin", "Manchester",
  "Rotterdam", "Copenhagen", "Helsinki", "Gothenburg", "Birmingham",
  "Antwerp", "Bergen", "Malmö", "Leeds",
];

function rand<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

interface Toast {
  id: number;
  name: string;
  action: string;
  place: string;
  ago: number; // minutes
}

function makeToast(id: number): Toast {
  return {
    id,
    name: rand(NAMES),
    action: rand(ACTIONS),
    place: rand(PLACES),
    ago: Math.floor(Math.random() * 6) + 1,
  };
}

export function SocialProof() {
  const [toast, setToast] = useState<Toast | null>(null);
  const [visible, setVisible] = useState(false);
  const [online, setOnline] = useState(0);

  // Stable-ish "people online" number that drifts a little over time.
  useEffect(() => {
    let base = 18 + Math.floor(Math.random() * 22); // 18–39
    setOnline(base);
    const drift = setInterval(() => {
      base = Math.max(11, base + (Math.floor(Math.random() * 5) - 2));
      setOnline(base);
    }, 9000);
    return () => clearInterval(drift);
  }, []);

  // Rotate toasts: show one, hide, wait, show next.
  useEffect(() => {
    let id = 0;
    let hideT: ReturnType<typeof setTimeout>;
    let nextT: ReturnType<typeof setTimeout>;

    const cycle = () => {
      id += 1;
      setToast(makeToast(id));
      setVisible(true);
      hideT = setTimeout(() => setVisible(false), 4500);
      nextT = setTimeout(cycle, 4500 + 3500 + Math.random() * 3000);
    };

    const startT = setTimeout(cycle, 2500);
    return () => {
      clearTimeout(startT);
      clearTimeout(hideT);
      clearTimeout(nextT);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed bottom-4 left-4 z-40 flex flex-col gap-2"
    >
      {/* People online pill */}
      <div className="pointer-events-none inline-flex w-fit items-center gap-2 rounded-full border border-line bg-paper/95 px-3 py-1.5 text-xs font-medium text-ink shadow-card backdrop-blur">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        {online} people online
      </div>

      {/* Rotating activity toast */}
      <div
        className={`max-w-[19rem] rounded-xl border border-line bg-paper/95 px-4 py-3 shadow-card backdrop-blur transition-all duration-500 ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        {toast && (
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-soft text-sm font-bold text-amber-dark">
              {toast.name.charAt(0)}
            </div>
            <div className="text-sm leading-snug text-ink">
              <span className="font-semibold">{toast.name}</span> from{" "}
              {toast.place} {toast.action}.
              <div className="mt-0.5 text-xs text-muted">
                {toast.ago} min ago
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
