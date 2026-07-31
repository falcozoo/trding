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
