/** Small global site constants. */

export const SITE = {
  name: "Trding.io",
  domain: "trding.io",
  /** Regulatory-style retail loss figure used in the required CFD disclaimer. */
  retailLossPct: 74,
  tagline: "Find the right CFD broker in 60 seconds.",
} as const;

export const CFD_DISCLAIMER = `CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. ${SITE.retailLossPct}% of retail investor accounts lose money when trading CFDs. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.`;

export const NOT_ADVICE =
  "The information on Trding.io is for general information only and is not investment advice.";
