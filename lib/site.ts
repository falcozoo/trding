/** Small global site constants. */

export const SITE = {
  name: "Trding.io",
  domain: "trding.io",
  /** Regulatory-style retail loss figure used in the required CFD disclaimer. */
  retailLossPct: 74,
  tagline: "Find the right broker in 60 seconds.",
  /** Recommended starting deposit shown on cards, lists and quiz results (not a real per-broker minimum). */
  recommendedMinDeposit: 500,
  /** Contact email surfaced on the Contact + legal pages. */
  contactEmail: "hello@trding.io",
  /** Last time the legal documents were reviewed (shown on legal pages). */
  legalUpdated: "August 1, 2026",
} as const;

export const CFD_DISCLAIMER = `CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. ${SITE.retailLossPct}% of retail investor accounts lose money when trading CFDs. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.`;

export const NOT_ADVICE =
  "The information on Trding.io is for general information only and is not investment advice.";

/**
 * Format a withdrawal processing time. A value of 1 (or less) business day is
 * effectively instant, so we render it as "Instant / same day" rather than the
 * misleading "1 business day".
 */
export function formatWithdrawal(days: number): string {
  return days <= 1 ? "Instant / same day" : `${days} business days`;
}
