/**
 * "Best broker for [need]" definitions for the SEO ranking pages.
 *
 * Each need re-weights the SAME neutral scoring engine (scoreBrokers) — it does
 * not invent a new scoring method. Weights simply lean emphasis toward the
 * criterion the need cares about.
 */

import { DEFAULT_WEIGHTS, type Weights } from "./scoring";

export interface NeedConfig {
  slug: string;
  /** Human title fragment, e.g. "Beginners". */
  title: string;
  intro: string;
  /** Custom weights lean applied to the neutral scoring engine. */
  weights: Weights;
}

export const NEEDS: NeedConfig[] = [
  {
    slug: "beginners",
    title: "Beginners",
    intro:
      "New to trading? These brokers lead on the things that protect and reassure first-timers: strong regulation and a low barrier to entry via a small minimum deposit. Every one offers a free demo account so you can practise risk-free.",
    weights: {
      ...DEFAULT_WEIGHTS,
      regulation: 40,
      minDeposit: 25,
      fees: 15,
      platforms: 10,
      withdrawal: 5,
      reputation: 5,
    },
  },
  {
    slug: "low-spread",
    title: "Low Spreads",
    intro:
      "Active and high-volume traders feel spreads and commissions on every trade. This ranking leans heavily on fees — the combined spread-plus-commission cost — to surface the cheapest brokers to trade with.",
    weights: {
      ...DEFAULT_WEIGHTS,
      fees: 50,
      regulation: 20,
      platforms: 10,
      withdrawal: 10,
      minDeposit: 5,
      reputation: 5,
    },
  },
  {
    slug: "high-leverage",
    title: "High Leverage",
    intro:
      "Looking for maximum leverage? These brokers are ranked by the highest retail leverage on offer. Remember: higher leverage magnifies losses as well as gains, so use it with strict risk management.",
    // Ranking is driven by maxLeverage in the page; weights kept balanced as a tiebreak.
    weights: { ...DEFAULT_WEIGHTS },
  },
  {
    slug: "fast-withdrawals",
    title: "Fast Withdrawals",
    intro:
      "Want your money back quickly? This ranking boosts withdrawal speed so the brokers that process payouts fastest rise to the top, while keeping regulation and fees in the mix.",
    weights: {
      ...DEFAULT_WEIGHTS,
      withdrawal: 45,
      regulation: 20,
      fees: 15,
      platforms: 10,
      reputation: 5,
      minDeposit: 5,
    },
  },
  {
    slug: "well-regulated",
    title: "Well-Regulated Brokers",
    intro:
      "Safety first. This ranking heavily boosts regulation and safety strength — the tier-1 licences and client-fund protections that matter most when choosing where to keep your capital.",
    weights: {
      ...DEFAULT_WEIGHTS,
      regulation: 55,
      reputation: 15,
      fees: 10,
      platforms: 10,
      withdrawal: 5,
      minDeposit: 5,
    },
  },
];

export function getNeed(slug: string): NeedConfig | undefined {
  return NEEDS.find((n) => n.slug === slug);
}
