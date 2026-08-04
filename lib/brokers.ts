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
  platforms: Array<"MT4" | "MT5" | "cTrader" | "WebTrader" | "Proprietary" | "TradeLocker">;
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

  /**
   * Flagged brokers are listed as a NEUTRALITY signal, not as options we
   * endorse. They are added on the strength of verifiable, sourced facts
   * (e.g. self-declared lack of regulation, documented withdrawal complaints).
   * When true, the scoring engine maps them below the normal credibility band
   * (they can score ~2/5), and they are never featured, led or given an
   * affiliate link. `flagReason` must be a factual, sourceable statement.
   */
  flagged?: boolean;
  /** Short, factual reason shown to the user (must be verifiable). */
  flagReason?: string;

  /**
   * Featured broker: our current top pick. Gets a modest, transparent edge in
   * the quiz tie-breaking so it tends to lead the shortlist — but only when it
   * is already a strong objective match. Never overrides hard filters (country,
   * budget) and never beats a broker that wins decisively on the user's stated
   * priority. Purely a ranking nudge; it is NOT an input to the neutral score.
   */
  featured?: boolean;

  /**
   * Unaffiliated broker: a REAL, well-known broker we have NO affiliate deal
   * with. Listed purely for SEO/coverage and neutrality — it is a legitimate
   * company (not a scam), so it is never `flagged` and never smeared. It simply
   * is not one of our current top picks and carries NO affiliate link. The page
   * states plainly "not in our current top picks" and links the reader to our
   * top-rated, published-criteria brokers. This proves we cover brokers we do
   * not earn from. Facts must be accurate and sourceable, same bar as any page.
   */
  unaffiliated?: boolean;

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
    regulators: ["FSCA (South Africa)"],
    regulationScore: 4,
    founded: 2021,
    minDeposit: 50,
    avgSpreadEurUsd: 0.3,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["MT5"],
    assetClasses: ["Forex", "Indices", "Commodities", "Crypto"],
    withdrawalDays: 1,
    demoAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    trustpilotRating: 4.6,
    trustpilotReviews: 1450,
    featured: true,
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
    regulators: ["FSC (BVI)"],
    regulationScore: 2,
    founded: 2020,
    minDeposit: 100,
    avgSpreadEurUsd: 0.6,
    commissionPerLot: 5,
    maxLeverage: 1000,
    platforms: ["MT4"],
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
    regulators: ["FSCA (South Africa)", "FSC (Mauritius)"],
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
    regulators: ["Unregulated (offshore, St. Lucia)"],
    regulationScore: 1,
    founded: 2021,
    minDeposit: 10,
    avgSpreadEurUsd: 0.8,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["TradeLocker", "MT5"],
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
    regulationScore: 4,
    founded: 2009,
    minDeposit: 50,
    avgSpreadEurUsd: 0.5,
    commissionPerLot: 6,
    maxLeverage: 500,
    platforms: ["MT4", "MT5", "Proprietary"],
    assetClasses: ["Forex", "Indices", "Commodities", "Shares", "ETFs", "Bonds"],
    withdrawalDays: 2,
    demoAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    trustpilotRating: 4.3,
    trustpilotReviews: 9800,
    countriesServed: [...EU_NORDIC],
    affiliateUrl:
      "https://www.vantagemarkets.com/open-live-account/?affid=NTgyNzY=&invitecode=Z9PeieRe",
    lastVerified: "2026-07-15",
  },
  {
    slug: "startrader",
    name: "StarTrader",
    tagline: "Offshore broker with reported withdrawal complaints.",
    regulators: ["Offshore / limited oversight"],
    regulationScore: 1,
    founded: 2019,
    minDeposit: 50,
    avgSpreadEurUsd: 1.2,
    commissionPerLot: 7,
    maxLeverage: 1000,
    platforms: ["MT4", "MT5"],
    assetClasses: ["Forex", "Indices", "Commodities"],
    withdrawalDays: 7,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.4,
    trustpilotReviews: 210,
    countriesServed: [...EU_NORDIC, "Other"],
    // No affiliate link: flagged brokers are listed as a neutrality signal only.
    affiliateUrl: "",
    flagged: true,
    flagReason:
      "Operates under weak offshore oversight, with multiple publicly documented client complaints about blocked or delayed withdrawals. We list it for transparency and do not recommend it.",
    lastVerified: "2026-08-01",
  },
  {
    slug: "tauromarkets",
    name: "Tauro Markets",
    tagline: "Broker that states it is not EU-regulated.",
    regulators: ["Unregulated (self-declared, no EU authorisation)"],
    regulationScore: 1,
    founded: 2021,
    minDeposit: 100,
    avgSpreadEurUsd: 1.4,
    commissionPerLot: 8,
    maxLeverage: 1000,
    platforms: ["MT5"],
    assetClasses: ["Forex", "Indices", "Commodities"],
    withdrawalDays: 7,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.2,
    trustpilotReviews: 90,
    countriesServed: [...EU_NORDIC, "Other"],
    // No affiliate link: flagged brokers are listed as a neutrality signal only.
    affiliateUrl: "",
    flagged: true,
    flagReason:
      "Its own legal documents state it is not regulated by the EU and is not authorised to offer investment services in the EU. We list it for transparency and do not recommend it.",
    lastVerified: "2026-08-01",
  },
];

// --- Flagged / regulator-warned brokers (neutrality signal) ---
// Researched from official regulator warning lists (AMF, FCA, CONSOB, FSMA,
// CNMV, CySEC, ASIC…). Listed for transparency and NEVER recommended; each
// flagReason cites the specific regulator. Kept in separate files to keep this
// module readable.
import { FLAGGED_BROKERS_1 } from "./seo/flagged-batch-1";
import { FLAGGED_BROKERS_2 } from "./seo/flagged-batch-2";
import { FLAGGED_BROKERS_3 } from "./seo/flagged-batch-3";
import { FLAGGED_BROKERS_4 } from "./seo/flagged-batch-4";
import { FLAGGED_BROKERS_5 } from "./seo/flagged-batch-5";
import { FLAGGED_BROKERS_6 } from "./seo/flagged-batch-6";
import { FLAGGED_BROKERS_7 } from "./seo/flagged-batch-7";
import { FLAGGED_BROKERS_8 } from "./seo/flagged-batch-8";
import { FLAGGED_BROKERS_9 } from "./seo/flagged-batch-9";
import { FLAGGED_BROKERS_10 } from "./seo/flagged-batch-10";
import { FLAGGED_BROKERS_11 } from "./seo/flagged-batch-11";
import { FLAGGED_BROKERS_12 } from "./seo/flagged-batch-12";
import { FLAGGED_BROKERS_13 } from "./seo/flagged-batch-13";
import { POPULAR_UNAFFILIATED } from "./seo/popular-unaffiliated";

const ALL_BROKERS: Broker[] = [
  ...BROKERS,
  ...FLAGGED_BROKERS_1,
  ...FLAGGED_BROKERS_2,
  ...FLAGGED_BROKERS_3,
  ...FLAGGED_BROKERS_4,
  ...FLAGGED_BROKERS_5,
  ...FLAGGED_BROKERS_6,
  ...FLAGGED_BROKERS_7,
  ...FLAGGED_BROKERS_8,
  ...FLAGGED_BROKERS_9,
  ...FLAGGED_BROKERS_10,
  ...FLAGGED_BROKERS_11,
  ...FLAGGED_BROKERS_12,
  ...FLAGGED_BROKERS_13,
  ...POPULAR_UNAFFILIATED,
];

// --- Access helpers (async-shaped for a painless Supabase swap later) ---

export function getBrokers(): Broker[] {
  return ALL_BROKERS;
}

export function getBrokerBySlug(slug: string): Broker | undefined {
  return ALL_BROKERS.find((b) => b.slug === slug);
}

export function getAllSlugs(): string[] {
  return ALL_BROKERS.map((b) => b.slug);
}
