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

/** All 15 unordered pairs of the 6 brokers, slugs alphabetical. */
export function getAllPairs(): BrokerPair[] {
  const slugs = getBrokers()
    .map((b) => b.slug)
    .sort();
  const pairs: BrokerPair[] = [];
  for (let i = 0; i < slugs.length; i++) {
    for (let j = i + 1; j < slugs.length; j++) {
      const [a, b] = [slugs[i], slugs[j]].sort();
      pairs.push({ a, b, slug: `${a}-vs-${b}` });
    }
  }
  return pairs;
}

/** Parse an `a-vs-b` slug back into its two brokers, or null if invalid. */
export function parsePairSlug(
  slug: string
): { a: Broker; b: Broker } | null {
  const parts = slug.split("-vs-");
  if (parts.length !== 2) return null;
  const a = getBrokerBySlug(parts[0]);
  const b = getBrokerBySlug(parts[1]);
  if (!a || !b || a.slug === b.slug) return null;
  return { a, b };
}
