/**
 * Regulator Contradiction Resolver — the site's most distinctive, non-copyable
 * content asset.
 *
 * When someone searches "is [broker] regulated", the results are "filled but
 * unresolved": competing comparison sites contradict each other on verifiable
 * facts (different regulators, founding years, instrument counts). Nobody
 * EXPOSES the contradiction, cites each source, points to the official
 * register, and RESOLVES it with a verification date.
 *
 * This module holds — per broker — the documented conflicting claims we found
 * in the wild, plus the VERIFIED answer derived from primary sources (the
 * broker's own legal documents, official registers, regulator warning lists).
 * Every entry below came from a real primary-source check; nothing here is
 * invented. Because this is YMYL content, the caveats are the truthful,
 * protective position and always appear (offshore-not-EU, unregulated, public
 * warning lists, out-of-date tier-1 claims).
 *
 * The regulation topic page (app/brokers/[slug]/[topic]/page.tsx) renders a
 * "Why sources disagree — and the verified answer" section from this data.
 */

/** One contradictory claim found on a third-party site. */
export interface ConflictingClaim {
  /** Where the claim appears (site name or source). */
  source: string;
  /** What that source asserts (verbatim-ish summary). */
  claim: string;
}

/** The full contradiction record + verified truth for one broker. */
export interface RegulatorClarity {
  /** Contradictory claims found across third-party sources. */
  conflictingClaims: ConflictingClaim[];
  /** The verified answer, derived from primary sources. */
  verified: string;
  /** Short verified-regulator summary line. */
  verifiedRegulator: string;
  /** The truthful, protective caveat traders must weigh. */
  caveat: string;
  /** ISO date the verification was performed / last confirmed. */
  verifiedOn: string;
}

/**
 * Per-broker contradiction data, keyed by broker slug. Only the six brokers we
 * verified against primary sources are present.
 */
export const REGULATOR_CLARITY: Record<string, RegulatorClarity> = {
  raisefx: {
    conflictingClaims: [
      {
        source: "TradingFinder",
        claim: "FSCA (South Africa), founded 2021, 500+ instruments via MT5",
      },
      {
        source: "BrokerMat",
        claim: "FSA (St Vincent), founded 2019, 200+ instruments",
      },
      {
        source: "WikiFX",
        claim: "FSP 50506, general registration",
      },
    ],
    verified:
      "RaiseFX's own legal documents state it is authorised by the FSCA (South Africa) under FSP licence No. 50506, operating as Raise Global SA (Pty) Ltd. The brand launched in 2021 (an earlier shell company dates to 2018). It runs on MT5 (it migrated off MT4 in 2023).",
    verifiedRegulator: "FSCA (South Africa), FSP 50506",
    caveat:
      "The FSCA registration is real but is a lighter-touch regime than the FCA or ASIC. RaiseFX has also appeared on public warning lists from France's AMF and Spain's CNMV for offering services without local authorisation — a fact traders in those countries should weigh.",
    verifiedOn: "2026-08-02",
  },

  herofx: {
    conflictingClaims: [
      {
        source: "Some listing sites",
        claim: "regulated offshore (FSA Seychelles)",
      },
      {
        source: "HeroFX website footer",
        claim: "HEROFX LTD, Reg. 2023-00356, Saint Lucia",
      },
    ],
    verified:
      "HeroFX holds NO financial-services licence from any regulator. Its own website footer shows only an offshore company registration in Saint Lucia (Reg. 2023-00356). It does not appear on Saint Lucia's FSRA registry or any recognised regulator's register.",
    verifiedRegulator:
      "Unregulated (offshore company registration only, St. Lucia)",
    caveat:
      "Trading with an unregulated broker means no compensation scheme, no segregated-funds mandate enforced by a regulator, and limited recourse if you cannot access your money.",
    verifiedOn: "2026-08-02",
  },

  fxcess: {
    conflictingClaims: [
      {
        source: "Some comparison sites",
        claim: "CySEC (Cyprus) — an EU licence",
      },
      {
        source: "Fxcess own legal page / parent Notesco",
        claim:
          "Notesco (BVI) Limited, authorised by the BVI Financial Services Commission",
      },
      {
        source: "TradingFinder",
        claim: "FSA Seychelles + BVI FSC",
      },
    ],
    verified:
      "Fxcess's own legal documentation states it is a trade name of Notesco (BVI) Limited, authorised by the Financial Services Commission (FSC) in the British Virgin Islands — an OFFSHORE licence, not the EU CySEC licence some sites claim. There is no evidence of a CySEC licence on the CySEC register.",
    verifiedRegulator: "FSC (British Virgin Islands)",
    caveat:
      "A BVI offshore licence offers materially weaker protection than an EU (CySEC) licence. Claims that Fxcess is CySEC-regulated appear to be incorrect.",
    verifiedOn: "2026-08-02",
  },

  vtmarkets: {
    conflictingClaims: [
      {
        source: "Older reviews & marketing",
        claim: "ASIC (Australia) regulated",
      },
      {
        source: "ASIC published notices + 2026 reviews",
        claim:
          "Australian entity under ASIC-initiated deregistration (Sept 2025), reportedly deregistered Nov 2025",
      },
    ],
    verified:
      "VT Markets' current regulation page lists FSC (Mauritius) and FSCA (South Africa) — NOT ASIC. The Australian entity (ACN 623 509 731) was placed under ASIC-initiated deregistration in September 2025. Listing ASIC as a current regulator is out of date.",
    verifiedRegulator: "FSCA (South Africa), FSC (Mauritius)",
    caveat:
      "VT Markets no longer holds current tier-1 (ASIC/FCA) regulation for the entity most retail clients use.",
    verifiedOn: "2026-08-02",
  },

  axi: {
    conflictingClaims: [
      {
        source: "Various",
        claim: "ASIC only / FCA only, varying licence numbers",
      },
    ],
    verified:
      "Axi's regulators are genuine and verifiable: ASIC (AFSL 318232), FCA (ref 466201), and DFSA Dubai (ref F003742). Note that many non-EU/AU clients are onboarded under an offshore St Vincent entity, so the protections that apply depend on which entity you sign up with.",
    verifiedRegulator:
      "ASIC (Australia), FCA (UK), DFSA (Dubai) — genuine; entity varies by region",
    caveat:
      "Confirm which Axi entity you are onboarded to — tier-1 protection applies to the ASIC/FCA entities, not the offshore one.",
    verifiedOn: "2026-08-02",
  },

  vantage: {
    conflictingClaims: [
      {
        source: "Various",
        claim:
          "ASIC / FCA / CIMA, sometimes described as fully FCA-retail-regulated",
      },
    ],
    verified:
      "Vantage's regulators are genuine: ASIC (AFSL 428901), FCA (Vantage Global Prime LLP — but this entity serves professional/institutional clients only), and CIMA (Cayman). The default international retail entity is typically Vanuatu (VFSC), so tier-1 protection depends on residency and entity.",
    verifiedRegulator:
      "ASIC (Australia), FCA (UK, institutional only), CIMA (Cayman)",
    caveat:
      "The FCA entity is institutional-only; most international retail clients fall under the offshore VFSC (Vanuatu) entity with lighter protection.",
    verifiedOn: "2026-08-02",
  },
};

/** Look up the contradiction record for a broker slug (undefined if none). */
export function getRegulatorClarity(
  slug: string
): RegulatorClarity | undefined {
  return REGULATOR_CLARITY[slug];
}
