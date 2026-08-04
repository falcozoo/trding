/**
 * Programmatic pair helpers for the SEO comparison pages.
 *
 * A "pair" is an unordered combination of two brokers. Slugs are always
 * alphabetical (`broker-a-vs-broker-b`) so every pair has exactly one URL.
 */

import { getBrokers, getBrokerBySlug, type Broker } from "./brokers";

export interface BrokerPair {
  /** Alphabetically-first broker slug. */
  a: string;
  /** Alphabetically-second broker slug. */
  b: string;
  /** Canonical slug, e.g. "axi-vs-raisefx". */
  slug: string;
}

/** All unordered pairs of the REAL (non-flagged) brokers, slugs alphabetical.
 *
 * IMPORTANT: pairs are built ONLY from genuine, non-flagged brokers. Flagged /
 * regulator-warned brokers are kept on the site as a neutrality signal, but we
 * deliberately do NOT generate head-to-head compare pages for them: pairing
 * every flagged broker with every other produced ~9,400 thin, programmatic
 * pages that Google (rightly) treats as scaled/mass content and refuses to
 * index on a young domain. Restricting to real brokers yields a handful of
 * genuinely useful comparisons instead of spam.
 *
 * Unaffiliated brokers (real, no-deal, SEO-only) CAN appear in a comparison,
 * but ONLY against one of our affiliated picks — an "X vs RaiseFX" page is
 * high-value (big search volume + a real affiliate CTA on our side). We skip
 * unaffiliated-vs-unaffiliated pairs, which carry no affiliate upside and would
 * render two non-CTA sides. */
export function getAllPairs(): BrokerPair[] {
  const real = getBrokers().filter((b) => !b.flagged);
  const pairs: BrokerPair[] = [];
  for (let i = 0; i < real.length; i++) {
    for (let j = i + 1; j < real.length; j++) {
      // Require at least one affiliated broker in the pair.
      if (real[i].unaffiliated && real[j].unaffiliated) continue;
      const [a, b] = [real[i].slug, real[j].slug].sort();
      pairs.push({ a, b, slug: `${a}-vs-${b}` });
    }
  }
  return pairs;
}

/** Parse an `a-vs-b` slug back into its two brokers, or null if invalid.
 *
 * Only pairs of REAL (non-flagged) brokers are considered valid. Any legacy
 * flagged-broker combination (the ~9,400 removed mass pages) resolves to null
 * here, so the route renders a 404 and Google de-indexes it. */
export function parsePairSlug(
  slug: string
): { a: Broker; b: Broker } | null {
  const parts = slug.split("-vs-");
  if (parts.length !== 2) return null;
  const a = getBrokerBySlug(parts[0]);
  const b = getBrokerBySlug(parts[1]);
  if (!a || !b || a.slug === b.slug) return null;
  if (a.flagged || b.flagged) return null;
  // Reject unaffiliated-vs-unaffiliated (no affiliated broker in the pair):
  // these were never generated and carry no affiliate CTA.
  if (a.unaffiliated && b.unaffiliated) return null;
  return { a, b };
}
