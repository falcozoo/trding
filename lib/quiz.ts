/**
 * Quiz recommendation logic.
 *
 * Kept framework-agnostic (pure functions) so it can be unit-tested and reused.
 * Takes the user's answers, filters the broker set by budget + country, boosts
 * the weight of their stated priority, then returns a ranked shortlist with a
 * short human-readable reason per broker.
 */

import type { Broker, CountryCode } from "./brokers";
import {
  DEFAULT_WEIGHTS,
  scoreBrokers,
  type ScoredBroker,
  type WeightKey,
  type Weights,
} from "./scoring";

export type Level = "Beginner" | "Know basics" | "Experienced";
export type Budget = "<100" | "100-500" | "500-2000" | ">2000";
export type Market = "Forex" | "Indices" | "Stocks" | "Crypto" | "Everything";
export type Priority =
  | "Low fees"
  | "Fast execution"
  | "Simple platform"
  | "High leverage";

export interface QuizAnswers {
  level: Level;
  budget: Budget;
  market: Market;
  country: CountryCode;
  priority: Priority;
}

/** Upper bound (EUR) the user is comfortable depositing, from the budget band. */
export function budgetCeiling(budget: Budget): number {
  switch (budget) {
    case "<100":
      return 100;
    case "100-500":
      return 500;
    case "500-2000":
      return 2000;
    case ">2000":
      return Infinity;
  }
}

/** Map a stated priority to the scoring weight key it should boost. */
function priorityToWeightKey(priority: Priority): WeightKey | null {
  switch (priority) {
    case "Low fees":
      return "fees";
    case "Fast execution":
      return "withdrawal";
    case "Simple platform":
      return "platforms";
    case "High leverage":
      return null; // leverage isn't a weighted safety criterion; handled below
  }
}

/** Map a market answer to the asset class label used in broker data. */
function marketToAssetClass(market: Market): string | null {
  switch (market) {
    case "Forex":
      return "Forex";
    case "Indices":
      return "Indices";
    case "Stocks":
      return "Shares";
    case "Crypto":
      return "Crypto";
    case "Everything":
      return null;
  }
}

export interface QuizResult extends ScoredBroker {
  reasons: string[];
}

/**
 * Produce a ranked shortlist (top 5) for the given answers.
 */
export function recommend(
  answers: QuizAnswers,
  brokers: Broker[]
): QuizResult[] {
  const ceiling = budgetCeiling(answers.budget);
  const wantedAsset = marketToAssetClass(answers.market);

  // 1) Hard filters: must serve the country and accept the budget.
  //    Flagged brokers (neutrality-signal listings) are never recommended.
  const eligible = brokers.filter((b) => {
    if (b.flagged) return false;
    const servesCountry = b.countriesServed.includes(answers.country);
    const affordable = b.minDeposit <= ceiling;
    return servesCountry && affordable;
  });

  const pool = eligible.length > 0 ? eligible : brokers;

  // 2) Boost the priority criterion weight (x1.5).
  const weights: Weights = { ...DEFAULT_WEIGHTS };
  const boostKey = priorityToWeightKey(answers.priority);
  if (boostKey) weights[boostKey] = Math.round(weights[boostKey] * 1.5);

  // 3) Score within the filtered pool (relative, neutral).
  let scored = scoreBrokers(pool, weights);

  // 4) Soft re-rank nudges that aren't weighted criteria.
  scored = scored
    .map((s) => {
      let bump = 0;
      // High-leverage seekers: nudge brokers offering more leverage.
      if (answers.priority === "High leverage") {
        bump += Math.min(s.broker.maxLeverage / 1000, 1) * 0.3;
      }
      // Asset-class match nudge.
      if (wantedAsset && s.broker.assetClasses.includes(wantedAsset)) {
        bump += 0.15;
      }
      // Beginners: nudge lower minimum deposit + demo availability.
      if (answers.level === "Beginner") {
        if (s.broker.demoAccount) bump += 0.1;
        if (s.broker.minDeposit <= 100) bump += 0.1;
      }
      return { ...s, score: Math.min(5, Math.round((s.score + bump) * 10) / 10) };
    })
    .sort((a, b) => b.score - a.score);

  // 5) Attach human-readable reasons.
  return scored.slice(0, 5).map((s) => ({
    ...s,
    reasons: buildReasons(s, answers, wantedAsset),
  }));
}

function buildReasons(
  s: ScoredBroker,
  answers: QuizAnswers,
  wantedAsset: string | null
): string[] {
  const b = s.broker;
  const reasons: string[] = [];

  if (b.minDeposit === 0) {
    reasons.push("No minimum deposit — start with any amount.");
  } else if (b.minDeposit <= budgetCeiling(answers.budget)) {
    reasons.push(`Fits your budget (min deposit €${b.minDeposit}).`);
  }

  if (answers.priority === "Fast execution" && b.withdrawalDays <= 1) {
    reasons.push("Fast withdrawals (1 business day).");
  }
  if (answers.priority === "Low fees" && b.avgSpreadEurUsd <= 0.5) {
    reasons.push(`Low EUR/USD spread (~${b.avgSpreadEurUsd} pips).`);
  }
  if (answers.priority === "Simple platform" && b.platforms.length >= 3) {
    reasons.push("Multiple platforms including a simple web trader.");
  }
  if (answers.priority === "High leverage") {
    reasons.push(`Leverage up to 1:${b.maxLeverage}.`);
  }

  if (wantedAsset && b.assetClasses.includes(wantedAsset)) {
    reasons.push(`Covers ${wantedAsset.toLowerCase()} trading.`);
  }
  if (answers.level === "Beginner" && b.demoAccount) {
    reasons.push("Free demo account to practise risk-free.");
  }

  if (reasons.length === 0) {
    reasons.push(`Solid all-rounder with a ${s.score}/5 neutral score.`);
  }
  return reasons.slice(0, 3);
}
