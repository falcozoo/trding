/**
 * Static broker dataset for Trding.io (v1).
 *
 * This is intentionally a plain, typed TypeScript module so the UI can be built
 * and shipped without a live database. The `Broker` shape mirrors what a future
 * Supabase table would return, so swapping `getBrokers()` for an async DB call
 * later is a drop-in change (see the access helpers at the bottom).
 *
 * IMPORTANT: `affiliateUrl` values are the broker's EXACT tracking links.
 * They must never be rewritten, proxied, or wrapped in an internal redirect.
 */

/** Countries we care about for launch (English Europe + Nordics + US). */
export type CountryCode =
  | "UK"
  | "Netherlands"
  | "Sweden"
  | "Norway"
  | "Denmark"
  | "Finland"
  | "USA"
  | "Other";

export interface Broker {
  /** URL slug, stable identifier. */
  slug: string;
  /** Display name. */
  name: string;
  /** One-line neutral summary. */
  tagline: string;

  // --- Objective, scoreable criteria ---
  /** Regulatory bodies the broker operates under. */
  regulators: string[];
  /** Simple 1-5 regulation/safety strength score (higher = stronger). */
  regulationScore: number;
  /** Year the broker was founded. */
  founded: number;
  /** Minimum first deposit in EUR. */
  minDeposit: number;
  /** Typical EUR/USD spread in pips (lower is better). */
  avgSpreadEurUsd: number;
  /** Commission per standard lot in USD (0 = commission-free). */
  commissionPerLot: number;
  /** Maximum retail leverage (e.g. 30 for 1:30). */
  maxLeverage: number;
  /** Available trading platforms. */
  platforms: Array<"MT4" | "MT5" | "cTrader" | "WebTrader" | "Proprietary">;
  /** Tradable asset classes. */
  assetClasses: string[];
  /** Typical withdrawal processing time in business days (lower is better). */
  withdrawalDays: number;
  /** Free demo account available. */
  demoAccount: boolean;
  /** Negative balance protection. */
  negativeBalanceProtection: boolean;
  /** Client funds held in segregated accounts. */
  segregatedFunds: boolean;
  /** Trustpilot rating out of 5. */
  trustpilotRating: number;
  /** Number of Trustpilot reviews. */
  trustpilotReviews: number;
  /** Countries served (used for geo-filtering in the quiz). */
  countriesServed: CountryCode[];

  // --- Affiliate (never used in scoring) ---
  /** EXACT affiliate link. Do not modify. */
  affiliateUrl: string;
  /** Optional bonus code, shown discreetly. */
  bonusCode?: string;
  /** Optional bonus note, shown discreetly. */
  bonusNote?: string;

  /** Last time we verified this broker's facts. */
  lastVerified: string;
}

const EU_NORDIC: CountryCode[] = [
  "UK",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
];

export const BROKERS: Broker[] = [
  {
    slug: "raisefx",
    name: "RaiseFX",
    tagline: "Low-spread ECN trading with fast withdrawals.",
    regulators: ["FSA (Seychelles)"],
    regulationScore: 3,
    founded: 2019,
    minDeposit: 50,
    avgSpreadEurUsd: 0.3,
    commissionPerLot: 6,
    maxLeverage: 500,
    platforms: ["MT4", "MT5"],
    assetClasses: ["Forex", "Indices", "Commodities", "Crypto"],
    withdrawalDays: 1,
    demoAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    trustpilotRating: 4.4,
    trustpilotReviews: 620,
    countriesServed: [...EU_NORDIC],
    affiliateUrl:
      "https://partners.raisefx.com/visit/?bta=130102&brand=raisefx",
    bonusCode: "IA100",
    lastVerified: "2026-07-15",
  },
  {
    slug: "axi",
    name: "Axi",
    tagline: "Established global broker with tight raw spreads.",
    regulators: ["ASIC (Australia)", "FCA (UK)", "DFSA (Dubai)"],
    regulationScore: 5,
    founded: 2007,
    minDeposit: 0,
    avgSpreadEurUsd: 0.4,
    commissionPerLot: 7,
    maxLeverage: 30,
    platforms: ["MT4", "MT5"],
    assetClasses: ["Forex", "Indices", "Commodities", "Shares", "Crypto"],
    withdrawalDays: 2,
    demoAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    trustpilotRating: 4.3,
    trustpilotReviews: 5400,
    countriesServed: [...EU_NORDIC],
    affiliateUrl:
      "https://records.axiaffiliates.com/visit/?bta=43128&brand=axitrader",
    bonusCode: "AXI100",
    lastVerified: "2026-07-15",
  },
  {
    slug: "fxcess",
    name: "Fxcess",
    tagline: "Flexible account types and generous promotions.",
    regulators: ["CySEC (Cyprus)", "MISA (Comoros)"],
    regulationScore: 4,
    founded: 2020,
    minDeposit: 100,
    avgSpreadEurUsd: 0.6,
    commissionPerLot: 5,
    maxLeverage: 400,
    platforms: ["MT4", "MT5", "WebTrader"],
    assetClasses: ["Forex", "Indices", "Commodities", "Metals"],
    withdrawalDays: 2,
    demoAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    trustpilotRating: 4.1,
    trustpilotReviews: 480,
    countriesServed: [...EU_NORDIC],
    affiliateUrl: "https://go.fxcess.com/visit/?bta=35646&brand=fxcess",
    bonusNote: "100% deposit share promotion",
    lastVerified: "2026-07-15",
  },
  {
    slug: "vtmarkets",
    name: "VT Markets",
    tagline: "Multi-asset broker with strong education tools.",
    regulators: ["ASIC (Australia)", "FSCA (South Africa)", "FSC (Mauritius)"],
    regulationScore: 4,
    founded: 2015,
    minDeposit: 100,
    avgSpreadEurUsd: 0.5,
    commissionPerLot: 6,
    maxLeverage: 500,
    platforms: ["MT4", "MT5", "WebTrader"],
    assetClasses: ["Forex", "Indices", "Commodities", "Shares", "ETFs"],
    withdrawalDays: 2,
    demoAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    trustpilotRating: 4.5,
    trustpilotReviews: 2100,
    countriesServed: [...EU_NORDIC],
    affiliateUrl: "https://go.vtaffiliates.com/visit/?bta=39856&nci=5942",
    bonusNote: "Welcome bonus applied automatically via link",
    lastVerified: "2026-07-15",
  },
  {
    slug: "herofx",
    name: "HeroFX",
    tagline: "Accessible trading available to US residents.",
    regulators: ["FSA (Seychelles)"],
    regulationScore: 2,
    founded: 2021,
    minDeposit: 10,
    avgSpreadEurUsd: 0.8,
    commissionPerLot: 0,
    maxLeverage: 1000,
    platforms: ["MT5", "WebTrader"],
    assetClasses: ["Forex", "Indices", "Commodities", "Crypto"],
    withdrawalDays: 3,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: true,
    trustpilotRating: 3.9,
    trustpilotReviews: 240,
    // The only broker in our set that serves the USA.
    countriesServed: [...EU_NORDIC, "USA", "Other"],
    affiliateUrl: "https://herofx.co/?partner_code=4161316",
    lastVerified: "2026-07-15",
  },
  {
    slug: "vantage",
    name: "Vantage",
    tagline: "Well-regulated broker with a polished app.",
    regulators: ["ASIC (Australia)", "FCA (UK)", "CIMA (Cayman)"],
    regulationScore: 5,
    founded: 2009,
    minDeposit: 50,
    avgSpreadEurUsd: 0.4,
    commissionPerLot: 6,
    maxLeverage: 500,
    platforms: ["MT4", "MT5", "Proprietary"],
    assetClasses: ["Forex", "Indices", "Commodities", "Shares", "ETFs", "Bonds"],
    withdrawalDays: 1,
    demoAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    trustpilotRating: 4.6,
    trustpilotReviews: 9800,
    countriesServed: [...EU_NORDIC],
    affiliateUrl:
      "https://www.vantagemarkets.com/open-live-account/?affid=NTgyNzY=&invitecode=Z9PeieRe",
    lastVerified: "2026-07-15",
  },
];

// --- Access helpers (async-shaped for a painless Supabase swap later) ---

export function getBrokers(): Broker[] {
  return BROKERS;
}

export function getBrokerBySlug(slug: string): Broker | undefined {
  return BROKERS.find((b) => b.slug === slug);
}

export function getAllSlugs(): string[] {
  return BROKERS.map((b) => b.slug);
}
