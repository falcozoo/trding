import type { Metadata } from "next";
import Link from "next/link";
import {
  getGlossary,
  groupByLetter,
  getUsedLetters,
  getTermCount,
  CATEGORY_LABELS,
} from "@/lib/glossary";

export function generateMetadata(): Metadata {
  const count = getTermCount();
  return {
    title: "Trading Glossary — Plain-English Definitions of Trading Terms",
    description: `A free A–Z trading glossary with ${count} plain-English definitions: pip, spread, leverage, margin, RSI, order blocks and more. Neutral, beginner-friendly and honest about risk.`,
    alternates: { canonical: "/glossary" },
  };
}

const CATEGORY_BADGE: Record<string, string> = {
  basics: "bg-amber-soft text-amber-dark",
  orders: "bg-cream text-muted",
  analysis: "bg-cream text-muted",
  risk: "bg-amber-soft text-amber-dark",
  instruments: "bg-cream text-muted",
  costs: "bg-amber-soft text-amber-dark",
  psychology: "bg-cream text-muted",
  smc: "bg-cream text-muted",
};

export default function GlossaryHubPage() {
  const groups = groupByLetter();
  const letters = getUsedLetters();
  const count = getGlossary().length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Trading Glossary",
    description:
      "Plain-English definitions of common trading terms, from pips and spreads to leverage, indicators and smart money concepts.",
    hasDefinedTerm: getGlossary().map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.short,
      url: `/glossary/${t.slug}`,
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Trading glossary</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Plain-English definitions of {count} trading terms — from pip, spread
          and leverage to RSI, order blocks and everything in between. Every
          entry is written for beginners, kept neutral, and honest about risk.
          Tap any term for a fuller explanation and related concepts.
        </p>
      </header>

      {/* A–Z index */}
      <nav
        aria-label="Jump to letter"
        className="mt-8 flex flex-wrap gap-2"
      >
        {letters.map((letter) => (
          <a
            key={letter}
            href={`#letter-${letter}`}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-paper text-sm font-semibold text-ink shadow-card transition hover:border-amber hover:text-amber-dark"
          >
            {letter}
          </a>
        ))}
      </nav>

      {/* Grouped terms */}
      <div className="mt-10 space-y-12">
        {groups.map((group) => (
          <section key={group.letter} id={`letter-${group.letter}`}>
            <h2 className="border-b border-line pb-2 text-2xl font-bold text-ink">
              {group.letter}
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.terms.map((t) => (
                <Link
                  key={t.slug}
                  href={`/glossary/${t.slug}`}
                  className="group flex flex-col rounded-xl border border-line bg-paper p-4 shadow-card transition hover:border-amber"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-ink group-hover:text-amber-dark">
                      {t.term}
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                        CATEGORY_BADGE[t.category] ?? "bg-cream text-muted"
                      }`}
                    >
                      {CATEGORY_LABELS[t.category]}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {t.short}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Soft CTA */}
      <div className="mt-14 flex flex-col items-start justify-between gap-4 rounded-xl2 border border-line bg-paper p-6 shadow-card sm:flex-row sm:items-center">
        <div>
          <h2 className="text-lg font-bold text-ink">Ready to go deeper?</h2>
          <p className="mt-1 text-sm text-muted">
            Learn how these ideas fit together with our free guides, or find a
            regulated broker that suits you.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/learn"
            className="whitespace-nowrap rounded-xl bg-amber px-5 py-3 font-semibold text-white shadow-card transition hover:bg-amber-dark"
          >
            Learn to trade →
          </Link>
          <Link
            href="/brokers"
            className="whitespace-nowrap rounded-xl border border-line px-5 py-3 font-semibold text-ink transition hover:border-amber"
          >
            Compare brokers
          </Link>
        </div>
      </div>
    </div>
  );
}
