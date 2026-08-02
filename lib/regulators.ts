/**
 * Regulator registry for Trding.io.
 *
 * Maps the regulator identifiers used in `lib/brokers.ts` to their official
 * public verification register — the authoritative place a trader can confirm
 * a firm's licence. These are PUBLIC FACTS about the regulators themselves
 * (their name, jurisdiction and official register), not claims about any
 * broker. Only regulators that actually appear in the broker dataset are
 * defined here; if a broker lists a regulator we can't map, we still show the
 * label but simply omit the register link rather than invent one.
 *
 * "Tier" is a broad, widely-recognised grouping of how strict/established a
 * regime is, used only to sort and colour the reference table. It is a general
 * industry characterisation, not a broker-specific rating.
 */

export type RegulatorTier = "Tier 1" | "Tier 2" | "Tier 3";

export interface RegulatorInfo {
  /** The exact string as used in broker.regulators. */
  id: string;
  /** Short acronym for compact display. */
  acronym: string;
  /** Full official name of the authority. */
  fullName: string;
  /** Jurisdiction / country. */
  jurisdiction: string;
  /** Broad, widely-recognised strength grouping (general, not broker-specific). */
  tier: RegulatorTier;
  /** Official public register / firm-check URL (authoritative source). Omitted for unregulated entities. */
  registerUrl?: string;
  /** Human label for the register link. */
  registerLabel: string;
}

/**
 * Only the regulators that appear in the current broker dataset.
 * Keyed by the exact id used in `broker.regulators`.
 */
export const REGULATORS: Record<string, RegulatorInfo> = {
  "FCA (UK)": {
    id: "FCA (UK)",
    acronym: "FCA",
    fullName: "Financial Conduct Authority",
    jurisdiction: "United Kingdom",
    tier: "Tier 1",
    registerUrl: "https://register.fca.org.uk/",
    registerLabel: "FCA Financial Services Register",
  },
  "ASIC (Australia)": {
    id: "ASIC (Australia)",
    acronym: "ASIC",
    fullName: "Australian Securities and Investments Commission",
    jurisdiction: "Australia",
    tier: "Tier 1",
    registerUrl: "https://connectonline.asic.gov.au/",
    registerLabel: "ASIC Connect professional registers",
  },
  "CySEC (Cyprus)": {
    id: "CySEC (Cyprus)",
    acronym: "CySEC",
    fullName: "Cyprus Securities and Exchange Commission",
    jurisdiction: "Cyprus (EU)",
    tier: "Tier 1",
    registerUrl:
      "https://www.cysec.gov.cy/en-GB/entities/investment-firms/cypriot/",
    registerLabel: "CySEC regulated entities register",
  },
  "DFSA (Dubai)": {
    id: "DFSA (Dubai)",
    acronym: "DFSA",
    fullName: "Dubai Financial Services Authority",
    jurisdiction: "Dubai (DIFC), UAE",
    tier: "Tier 2",
    registerUrl: "https://www.dfsa.ae/public-register",
    registerLabel: "DFSA Public Register",
  },
  "CIMA (Cayman)": {
    id: "CIMA (Cayman)",
    acronym: "CIMA",
    fullName: "Cayman Islands Monetary Authority",
    jurisdiction: "Cayman Islands",
    tier: "Tier 2",
    registerUrl: "https://www.cima.ky/search-entities-cima",
    registerLabel: "CIMA entity search",
  },
  "FSCA (South Africa)": {
    id: "FSCA (South Africa)",
    acronym: "FSCA",
    fullName: "Financial Sector Conduct Authority",
    jurisdiction: "South Africa",
    tier: "Tier 2",
    registerUrl: "https://www.fsca.co.za/Fais/Search_FSP.htm",
    registerLabel: "FSCA authorised FSP search",
  },
  "FSC (Mauritius)": {
    id: "FSC (Mauritius)",
    acronym: "FSC",
    fullName: "Financial Services Commission",
    jurisdiction: "Mauritius",
    tier: "Tier 3",
    registerUrl: "https://www.fscmauritius.org/en/supervision/register-of-licensees",
    registerLabel: "FSC register of licensees",
  },
  "FSA (Seychelles)": {
    id: "FSA (Seychelles)",
    acronym: "FSA",
    fullName: "Financial Services Authority",
    jurisdiction: "Seychelles",
    tier: "Tier 3",
    registerUrl: "https://fsaseychelles.sc/regulated-entities",
    registerLabel: "FSA Seychelles regulated entities",
  },
  "MISA (Comoros)": {
    id: "MISA (Comoros)",
    acronym: "MISA",
    fullName: "Mwali International Services Authority",
    jurisdiction: "Comoros (Mohéli)",
    tier: "Tier 3",
    registerUrl: "https://mwaliregistrar.com/",
    registerLabel: "Mwali International Services Authority",
  },
  "FSC (BVI)": {
    id: "FSC (BVI)",
    acronym: "FSC",
    fullName: "Financial Services Commission",
    jurisdiction: "British Virgin Islands",
    tier: "Tier 3",
    registerUrl: "https://www.bvifsc.vg/regulated-entities",
    registerLabel: "BVI FSC regulated entities register",
  },
  "Unregulated (offshore, St. Lucia)": {
    id: "Unregulated (offshore, St. Lucia)",
    acronym: "Unregulated",
    fullName: "No financial-services licence",
    jurisdiction: "Saint Lucia (offshore company registration only)",
    tier: "Tier 3",
    registerLabel:
      "No regulatory licence on any official register — offshore company registration only",
  },
};

const TIER_ORDER: Record<RegulatorTier, number> = {
  "Tier 1": 0,
  "Tier 2": 1,
  "Tier 3": 2,
};

/** Look up a regulator by its dataset id (may be undefined if unmapped). */
export function getRegulator(id: string): RegulatorInfo | undefined {
  return REGULATORS[id];
}

/**
 * The strongest (lowest-number) tier among a list of regulator ids.
 * Used to characterise a broker's overall oversight in the reference table.
 * Returns undefined if none of the ids are mapped.
 */
export function strongestTier(ids: string[]): RegulatorTier | undefined {
  let best: RegulatorTier | undefined;
  for (const id of ids) {
    const info = REGULATORS[id];
    if (!info) continue;
    if (best === undefined || TIER_ORDER[info.tier] < TIER_ORDER[best]) {
      best = info.tier;
    }
  }
  return best;
}

/** Sort helper: rank by strongest tier ascending (Tier 1 first). */
export function tierRank(tier: RegulatorTier | undefined): number {
  return tier === undefined ? 99 : TIER_ORDER[tier];
}
