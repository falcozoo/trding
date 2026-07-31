/**
 * Neutral scoring engine for Trding.io.
 *
 * Each broker gets an overall /5 rating derived ONLY from objective criteria.
 * Affiliation, bonus codes and commercial terms are never inputs.
 *
 * Method: min-max normalisation across the current broker set, per criterion,
 * with an explicit optimisation direction. Normalised values (0..1) are combined
 * using published weights, then rescaled to a 0..5 star rating.
 */

import type { Broker } from "./brokers";

export type Direction = "higher_is_better" | "lower_is_better";

/** A single scoring criterion definition. */
export interface Criterion {
  key: string;
  label: string;
  direction: Direction;
  /** Extract the raw numeric value for this criterion from a broker. */
  value: (b: Broker) => number;
}

/** Published default weights (sum = 100). */
export const DEFAULT_WEIGHTS = {
  regulation: 25,
  fees: 25,
  platforms: 15,
  minDeposit: 10,
  withdrawal: 15,
  reputation: 10,
} as const;

export type WeightKey = keyof typeof DEFAULT_WEIGHTS;
export type Weights = Record<WeightKey, number>;

/**
 * A composite "fees" value: spread (pips) plus a small commission contribution.
 * Both lower-is-better, so we combine them into one lower-is-better metric.
 */
function feeMetric(b: Broker): number {
  // Roughly convert commission/lot into pip-equivalent (~$10 per pip on 1 lot).
  return b.avgSpreadEurUsd + b.commissionPerLot / 10;
}

/** Platform breadth: more supported platforms scores higher. */
function platformMetric(b: Broker): number {
  return b.platforms.length;
}

/** Reputation blends rating with a log of review volume (trust in the sample). */
function reputationMetric(b: Broker): number {
  return b.trustpilotRating + Math.log10(b.trustpilotReviews + 1) / 4;
}

/** One criterion per weight key. */
export const CRITERIA: Record<WeightKey, Criterion> = {
  regulation: {
    key: "regulation",
    label: "Regulation & safety",
    direction: "higher_is_better",
    value: (b) => b.regulationScore,
  },
  fees: {
    key: "fees",
    label: "Fees (spread + commission)",
    direction: "lower_is_better",
    value: feeMetric,
  },
  platforms: {
    key: "platforms",
    label: "Platforms",
    direction: "higher_is_better",
    value: platformMetric,
  },
  minDeposit: {
    key: "minDeposit",
    label: "Minimum deposit",
    direction: "lower_is_better",
    value: (b) => b.minDeposit,
  },
  withdrawal: {
    key: "withdrawal",
    label: "Withdrawal speed",
    direction: "lower_is_better",
    value: (b) => b.withdrawalDays,
  },
  reputation: {
    key: "reputation",
    label: "Reputation (Trustpilot)",
    direction: "higher_is_better",
    value: reputationMetric,
  },
};

/** Min-max normalise a value to 0..1 given the set range and direction. */
function normalise(
  raw: number,
  min: number,
  max: number,
  direction: Direction
): number {
  if (max === min) return 1; // all equal -> full marks, avoids divide-by-zero
  const t = (raw - min) / (max - min);
  return direction === "higher_is_better" ? t : 1 - t;
}

export interface SubScore {
  key: WeightKey;
  label: string;
  /** Normalised 0..1. */
  normalised: number;
  /** Displayed 0..5. */
  stars: number;
  /** Applied weight (after any quiz boost). */
  weight: number;
}

export interface ScoredBroker {
  broker: Broker;
  /** Overall 0..5 rating. */
  score: number;
  subScores: SubScore[];
}

/**
 * Score every broker in the provided set.
 * Normalisation ranges are computed across `brokers` (the whole set), so scores
 * are relative and neutral. Optional custom weights allow the quiz to boost a
 * priority criterion without touching the underlying data.
 */
export function scoreBrokers(
  brokers: Broker[],
  weights: Weights = { ...DEFAULT_WEIGHTS }
): ScoredBroker[] {
  const keys = Object.keys(CRITERIA) as WeightKey[];

  // Precompute min/max per criterion across the set.
  const ranges: Record<WeightKey, { min: number; max: number }> = {} as never;
  for (const key of keys) {
    const values = brokers.map((b) => CRITERIA[key].value(b));
    ranges[key] = { min: Math.min(...values), max: Math.max(...values) };
  }

  const totalWeight = keys.reduce((sum, k) => sum + weights[k], 0) || 1;

  return brokers
    .map((broker) => {
      let weighted = 0;
      const subScores: SubScore[] = keys.map((key) => {
        const c = CRITERIA[key];
        const raw = c.value(broker);
        const n = normalise(raw, ranges[key].min, ranges[key].max, c.direction);
        weighted += n * weights[key];
        return {
          key,
          label: c.label,
          normalised: n,
          stars: round1(n * 5),
          weight: weights[key],
        };
      });

      const score = round1((weighted / totalWeight) * 5);
      return { broker, score, subScores };
    })
    .sort((a, b) => b.score - a.score);
}

/** Score a single broker relative to a reference set (defaults to the same set). */
export function scoreOne(
  broker: Broker,
  set: Broker[],
  weights?: Weights
): ScoredBroker {
  const scored = scoreBrokers(set, weights);
  return scored.find((s) => s.broker.slug === broker.slug)!;
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}
