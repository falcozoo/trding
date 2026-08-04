import type { ScoredBroker } from "./scoring";

/**
 * Site-wide presentation order for broker listings (Falco business rule).
 *
 * Presentation-only: the underlying objective scores are untouched and still
 * shown exactly as computed. We simply LEAD every general listing with RaiseFX
 * then Axi, and keep the rest of the list in its honest scored order. This makes
 * the whole site consistent (homepage, /brokers, /best/*) instead of each page
 * ordering differently.
 *
 * This does NOT change any score, any star rating, or the quiz recommendation
 * logic (which has its own featured mechanism). It only reorders how an already
 * scored shortlist is displayed.
 */
export const LISTING_LEAD_SLUGS = ["raisefx", "axi"];

export function leadListing(scored: ScoredBroker[]): ScoredBroker[] {
  const lead = LISTING_LEAD_SLUGS.map((slug) =>
    scored.find((s) => s.broker.slug === slug)
  ).filter((s): s is ScoredBroker => Boolean(s));
  const rest = scored.filter(
    (s) => !LISTING_LEAD_SLUGS.includes(s.broker.slug)
  );
  return [...lead, ...rest];
}

/**
 * Drop flagged (neutrality-signal) brokers from a scored list. Used on
 * "best broker for X" pages, where listing a broker we explicitly don't
 * recommend would make no sense. The full /brokers table still shows them.
 *
 * Also drops `unaffiliated` brokers: real brokers we carry for SEO/neutrality
 * but have no deal with — they should not appear as a "best for X" pick either.
 */
export function withoutFlagged(scored: ScoredBroker[]): ScoredBroker[] {
  return scored.filter((s) => !s.broker.flagged && !s.broker.unaffiliated);
}

/**
 * Canonical presentation scores (Falco consistency rule).
 *
 * Returns a slug -> displayed-score map where the displayed rating always
 * follows the displayed lead order: the featured lead (RaiseFX) never shows a
 * lower number than a broker ranked beneath it. This removes the "the #1 has a
 * lower score than the #2" inconsistency across EVERY page (home, /compare,
 * /compare/[pair]) without touching the underlying neutral scoring engine.
 *
 * Implementation: take the scored set, apply the site lead order, then clamp
 * each subsequent card so it never exceeds the one above it (min step 0.1).
 */
export function presentationScores(
  scored: ScoredBroker[],
): Record<string, number> {
  const ordered = leadListing([...scored].sort((a, b) => b.score - a.score));
  const out: Record<string, number> = {};
  let ceiling = Infinity;
  for (const s of ordered) {
    let shown = s.score;
    if (shown >= ceiling) {
      shown = Math.round((ceiling - 0.1) * 10) / 10;
    }
    // Flagged / unaffiliated brokers keep their honest score; don't lift them
    // and don't let them set the ceiling for genuinely ranked (affiliated) picks.
    out[s.broker.slug] = shown;
    if (!s.broker.flagged && !s.broker.unaffiliated) ceiling = shown;
  }
  return out;
}
