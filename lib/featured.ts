/**
 * Featured-broker weighting for the quiz results screen.
 *
 * Business rule (Falco): favour RaiseFX in the MAJORITY of cases, but NOT
 * always #1. Rotate the featured slot mainly between RaiseFX and Fxcess, with
 * an honest probability that leans towards RaiseFX. Non-US users default to
 * RaiseFX-leaning. This keeps the ranking credible (neutral) while steering the
 * eye toward the commercial priority.
 *
 * The pick is deterministic per session seed so a given user sees a stable
 * result (no flicker on re-render), but the distribution across users follows
 * the weights below.
 */

import type { QuizResult } from "./quiz";

/** Weighted slots for the featured ("Recommended") broker, by slug. */
const FEATURED_WEIGHTS: Record<string, number> = {
  raisefx: 60, // majority lean
  fxcess: 25, // main alternate
  vantage: 8,
  axi: 4,
  vtmarkets: 3,
  // herofx intentionally omitted from the EU lean (US-only fallback handled below)
};

/** Cheap deterministic hash -> 0..1 from a string seed. */
function seededUnit(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  // to 0..1
  return ((h >>> 0) % 100000) / 100000;
}

/**
 * Choose which broker to feature at the top of the results, respecting the
 * weighting rule but only ever featuring a broker that is actually eligible
 * (present in the ranked results for this user).
 *
 * @param ranked   The already-scored, filtered shortlist for this user.
 * @param isUS     Whether the user is in the US (only HeroFX serves them).
 * @param seed     A per-session seed (e.g. JSON of answers) for stable variety.
 * @returns        The slug to feature, guaranteed to be in `ranked`.
 */
export function pickFeaturedSlug(
  ranked: QuizResult[],
  isUS: boolean,
  seed: string
): string {
  if (ranked.length === 0) return "";
  const available = new Set(ranked.map((r) => r.broker.slug));

  // US users: HeroFX is the only eligible broker, so it is the pick.
  if (isUS) {
    return available.has("herofx") ? "herofx" : ranked[0].broker.slug;
  }

  // Build the weighted pool restricted to available brokers.
  const pool = Object.entries(FEATURED_WEIGHTS).filter(([slug]) =>
    available.has(slug)
  );
  if (pool.length === 0) return ranked[0].broker.slug;

  const total = pool.reduce((s, [, w]) => s + w, 0);
  let r = seededUnit(seed) * total;
  for (const [slug, w] of pool) {
    r -= w;
    if (r <= 0) return slug;
  }
  return pool[0][0];
}

/**
 * Reorder a ranked shortlist so the featured broker is first, keeping the rest
 * in their honest neutral order. This is presentation-only: the underlying
 * scores are untouched and still shown, so the ranking stays transparent.
 */
export function applyFeatured(
  ranked: QuizResult[],
  featuredSlug: string
): QuizResult[] {
  if (!featuredSlug) return ranked;
  const featured = ranked.find((r) => r.broker.slug === featuredSlug);
  if (!featured) return ranked;
  return [featured, ...ranked.filter((r) => r.broker.slug !== featuredSlug)];
}
