/**
 * Country data for geo-targeted "best broker" SEO landing pages.
 *
 * Route: /best/country/[country]  (e.g. /best/country/netherlands)
 *
 * NOTE: This is deliberately separate from lib/geo.ts (which powers the
 * continent -> country picker UI). This module carries the long-form, unique
 * editorial + regulatory copy each landing page needs to rank on its own.
 *
 * Regulators are the real national financial supervisors for each market and
 * are used accurately in the page copy.
 */

export interface CountryFaq {
  q: string;
  a: string;
}

export interface GeoCountry {
  /** URL slug, e.g. "netherlands". */
  slug: string;
  /** Display name, e.g. "Netherlands". */
  name: string;
  /** Adjective / demonym for natural copy, e.g. "Dutch". */
  demonym: string;
  /** Emoji flag for light visual flavour. */
  flag: string;
  /** Primary national regulator short name, e.g. "FCA". */
  regulator: string;
  /** Full regulator name. */
  regulatorFull: string;
  /** Local currency label used in deposit copy. */
  currency: string;
  /** ~60-90 word intro about the local trading / broker landscape. Unique. */
  intro: string;
  /** ~90-130 word "what to look for locally" regulatory guidance. Unique. */
  localGuidance: string;
  /** 3 country-tailored Q&As (also emitted as FAQPage JSON-LD). */
  faq: CountryFaq[];
}

export const COUNTRIES: GeoCountry[] = [
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    demonym: "British",
    flag: "🇬🇧",
    regulator: "FCA",
    regulatorFull: "Financial Conduct Authority",
    currency: "GBP",
    intro:
      "The UK is one of the most mature retail trading markets in the world, and British traders are famously spoilt for choice. London's role as a global FX hub means deep liquidity, tight spreads and a broker landscape that ranges from century-old names to nimble newcomers. That depth is also the catch: with so many firms competing for UK clients, the difference between a genuinely strong broker and a slick marketing operation comes down to the details — regulation, execution quality and how painlessly you can get your money back out.",
    localGuidance:
      "In the UK the body that matters is the Financial Conduct Authority (FCA). An FCA-authorised broker must keep your money in segregated client accounts and is covered by the Financial Services Compensation Scheme (FSCS), which protects eligible balances up to £85,000 if the firm fails. FCA rules also cap retail leverage and mandate negative-balance protection, so you can never lose more than you deposit. Always confirm a firm's FCA reference number on the official Register before funding — some brokers hold looser offshore licences and merely accept UK clients. Our top-ranked options here are supervised by tier-one authorities, including the FCA itself.",
    faq: [
      {
        q: "Do I need an FCA-regulated broker as a UK trader?",
        a: "It is strongly recommended. FCA authorisation brings segregated client funds, FSCS protection up to £85,000 and negative-balance protection. You can check any firm's status for free on the FCA Register before you deposit.",
      },
      {
        q: "Are trading profits taxable in the UK?",
        a: "Generally yes — profits can fall under Capital Gains Tax, though spread betting is treated differently. Rules depend on your personal circumstances, so speak to a UK-qualified tax adviser. Trding.io does not provide tax advice.",
      },
      {
        q: "How fast can I withdraw money from a UK-facing broker?",
        a: "The best brokers in our ranking process withdrawals same day or within one to two business days back to your UK bank card or account. Always read the withdrawal terms before funding.",
      },
    ],
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    demonym: "Dutch",
    flag: "🇳🇱",
    regulator: "AFM",
    regulatorFull: "Autoriteit Financiële Markten",
    currency: "EUR",
    intro:
      "Dutch traders tend to be pragmatic, cost-conscious and comfortable managing money online — the Netherlands was an early adopter of digital banking and iDEAL payments, and that same discipline carries into how Dutch retail traders pick a broker. The local market is smaller than the UK's but notably savvy: transparency, clear fees and a clean platform experience win here far more than flashy bonuses. Because the Netherlands sits inside the EU passporting regime, Dutch clients can access a wide pool of European-licensed brokers, which puts the emphasis firmly on quality rather than availability.",
    localGuidance:
      "Financial firms serving Dutch retail clients fall under the Autoriteit Financiële Markten (AFM), the conduct regulator, with prudential oversight from De Nederlandsche Bank (DNB). Because of EU passporting, many brokers operate in the Netherlands under a licence from another EU state (for example Cyprus's CySEC) while remaining subject to ESMA's EU-wide retail protections: leverage caps, negative-balance protection and a ban on certain incentives. Look for a broker that clearly states which EU licence it holds and confirm it appears on the AFM or home-regulator register. EU-regulated firms must ring-fence client money in segregated accounts.",
    faq: [
      {
        q: "Which regulator protects Dutch traders?",
        a: "The AFM (Autoriteit Financiële Markten) supervises conduct in the Netherlands, with prudential oversight from De Nederlandsche Bank (DNB). Many brokers serve Dutch clients under an EU passport from another member state while still applying ESMA retail protections.",
      },
      {
        q: "Can I deposit with iDEAL?",
        a: "Several brokers serving the Netherlands support iDEAL or standard SEPA bank transfers in euro. Payment options vary by firm, so check the funding page before opening an account.",
      },
      {
        q: "Are ESMA leverage limits applied in the Netherlands?",
        a: "Yes. Brokers operating under an EU licence apply ESMA's retail leverage caps and negative-balance protection, so Dutch retail clients cannot lose more than their account balance.",
      },
    ],
  },
  {
    slug: "sweden",
    name: "Sweden",
    demonym: "Swedish",
    flag: "🇸🇪",
    regulator: "Finansinspektionen",
    regulatorFull: "Finansinspektionen (FI)",
    currency: "SEK",
    intro:
      "Sweden has a strong culture of retail investing — a large share of households hold shares or funds, often through tax-efficient ISK accounts — so Swedish traders come to the market already fluent in risk and fees. That sophistication shows in what they demand from a broker: transparent pricing in a familiar currency, solid mobile tools, and no tolerance for hidden costs. Stockholm's fintech scene has also raised local expectations for polished apps. For active FX and index traders, the priority is execution and spread quality, since Swedish investors are quick to compare and switch.",
    localGuidance:
      "The Swedish financial supervisor is Finansinspektionen (FI). A broker either holds a Swedish FI licence or, more commonly, passports into Sweden under another EU/EEA authorisation while remaining bound by ESMA's EU retail rules — leverage caps, negative-balance protection and marketing restrictions. FI publishes investor warnings about unauthorised firms, so it is worth searching its site for any broker you are considering. Note that many Swedish investors trade in SEK but broker accounts are frequently denominated in EUR or USD; factor currency-conversion costs into your comparison. Prioritise firms with clearly disclosed EU regulation and segregated client funds.",
    faq: [
      {
        q: "Is Finansinspektionen the right regulator to check?",
        a: "Yes. Finansinspektionen (FI) supervises financial firms in Sweden and publishes warnings about unauthorised operators. Many brokers reach Swedish clients via an EU passport, so also verify their home-state EU licence.",
      },
      {
        q: "Will I trade in Swedish kronor?",
        a: "Some brokers offer SEK-denominated accounts, but many quote in EUR or USD. If your account currency differs from SEK, budget for conversion costs when you deposit and withdraw.",
      },
      {
        q: "How are trading gains taxed in Sweden?",
        a: "Taxation depends on the account type and your situation — Sweden's ISK regime, for example, is taxed differently from a standard capital-gains approach. Consult a Swedish tax adviser; Trding.io does not give tax advice.",
      },
    ],
  },
  {
    slug: "norway",
    name: "Norway",
    demonym: "Norwegian",
    flag: "🇳🇴",
    regulator: "Finanstilsynet",
    regulatorFull: "Finanstilsynet (Norway)",
    currency: "NOK",
    intro:
      "Norway is a high-income market with a deeply financially literate population — the country's sovereign wealth fund has made long-term, disciplined investing part of the national conversation. Norwegian retail traders tend to be cautious and value safety and reputation over aggressive promotions. Because Norway is in the EEA rather than the EU, it mirrors most EU financial rules while keeping its own regulator, which occasionally creates small differences in how products are marketed. For Norwegian traders the winning combination is strong oversight, honest fee disclosure and reliable withdrawals back to a NOK bank account.",
    localGuidance:
      "Norway's financial supervisory authority is Finanstilsynet. As an EEA member, Norway applies the EU/ESMA retail framework — capped leverage, negative-balance protection and restrictions on bonuses and aggressive marketing — even though it is outside the EU. Brokers typically serve Norwegian clients through an EEA passport from another member state; Finanstilsynet can and does issue investor alerts about firms operating without proper authorisation. Confirm which EEA licence a broker holds and that client money is held in segregated accounts. Because accounts are often in EUR or USD rather than NOK, check the currency-conversion cost on deposits and withdrawals before you commit.",
    faq: [
      {
        q: "Does Norway follow EU trading rules even though it isn't in the EU?",
        a: "Yes. As an EEA member, Norway applies the EU/ESMA retail framework — leverage caps, negative-balance protection and marketing limits — while Finanstilsynet acts as the national supervisor.",
      },
      {
        q: "How do I check if a broker is authorised in Norway?",
        a: "Finanstilsynet publishes investor warnings and details of authorised firms. Verify a broker's EEA passport or Norwegian licence there before depositing.",
      },
      {
        q: "Can I withdraw to a Norwegian (NOK) bank account?",
        a: "Yes, the top brokers in our ranking pay withdrawals back to your bank account, usually within one to two business days. If your account is in EUR or USD, expect a currency conversion into NOK.",
      },
    ],
  },
  {
    slug: "denmark",
    name: "Denmark",
    demonym: "Danish",
    flag: "🇩🇰",
    regulator: "Finanstilsynet",
    regulatorFull: "Finanstilsynet (Denmark)",
    currency: "DKK",
    intro:
      "Denmark pairs a highly digital economy with a strong consumer-protection instinct — Danes are used to secure online banking through NemID/MitID and expect the same rigour from a trading provider. The Danish retail market is compact but discerning: traders here reward transparency and a smooth mobile experience and are quick to walk away from firms with murky terms. As a eurozone-adjacent economy with the krone pegged to the euro, Denmark gives traders easy access to EUR-denominated products, so the practical decision usually turns on regulation quality, spreads and the reliability of getting paid out.",
    localGuidance:
      "Denmark's regulator is Finanstilsynet, the Danish Financial Supervisory Authority (not to be confused with Norway's similarly named body). Denmark is an EU member, so brokers apply the full ESMA retail regime: capped leverage, negative-balance protection, standardised risk warnings and a ban on certain trading incentives. Many firms serve Danish clients by passporting an EU licence — often from Cyprus or another member state — which is perfectly legitimate provided the licence is genuine and current. Finanstilsynet maintains a register and issues warnings about unauthorised operators. Confirm the licence, check that client funds are segregated, and remember the DKK-EUR peg keeps euro accounts practical for Danish traders.",
    faq: [
      {
        q: "Is Denmark's Finanstilsynet the same as Norway's?",
        a: "No — they are separate national regulators that happen to share a name. Denmark's Finanstilsynet is the Danish Financial Supervisory Authority and operates under the EU/ESMA framework.",
      },
      {
        q: "Does the DKK-EUR peg matter when choosing a broker?",
        a: "It helps: because the krone is pegged to the euro, EUR-denominated accounts carry very stable conversion, so Danish traders can comfortably use euro-based brokers.",
      },
      {
        q: "How do I verify a broker is allowed to serve Danish clients?",
        a: "Check Finanstilsynet's register and warning lists, and confirm the EU passport or licence the broker states it holds. All EU-regulated brokers must segregate client funds.",
      },
    ],
  },
  {
    slug: "finland",
    name: "Finland",
    demonym: "Finnish",
    flag: "🇫🇮",
    regulator: "FIN-FSA",
    regulatorFull: "Finanssivalvonta (FIN-FSA)",
    currency: "EUR",
    intro:
      "Finland is a euro-area country with a strong engineering culture and correspondingly high standards for software — Finnish traders notice when an app or platform is well built. Retail investing has grown steadily, helped by widespread equity ownership and a methodical, research-first approach to risk. Because Finland uses the euro, Finnish traders avoid the currency-conversion friction that Nordic neighbours face, which shifts the whole comparison onto substance: regulation, spread quality and the honesty of a broker's fee schedule. Marketing gimmicks land poorly here; clear numbers and dependable execution win.",
    localGuidance:
      "The Finnish supervisor is Finanssivalvonta, known in English as the FIN-FSA, which operates in connection with the Bank of Finland. As an EU member using the euro, Finland applies the full ESMA retail framework: capped leverage, negative-balance protection, prominent risk warnings and limits on incentives. Brokers commonly serve Finnish clients through an EU passport from another member state, which is legitimate when the licence is real and current. The FIN-FSA publishes warnings about unauthorised firms and investor guidance in Finnish, Swedish and English. Because accounts are already in euro, currency conversion is rarely an issue — focus instead on verifying the EU licence and confirming segregated client funds.",
    faq: [
      {
        q: "What is the FIN-FSA?",
        a: "Finanssivalvonta (FIN-FSA) is Finland's financial supervisory authority, operating alongside the Bank of Finland. It enforces the EU/ESMA retail framework and publishes warnings about unauthorised brokers.",
      },
      {
        q: "Is currency conversion a concern for Finnish traders?",
        a: "Rarely. Finland uses the euro, so if your broker account is EUR-denominated you avoid the conversion costs that traders in SEK, NOK or DKK often face.",
      },
      {
        q: "How can I confirm a broker is authorised in Finland?",
        a: "Check the FIN-FSA's register and warning lists and verify the EU passport the broker states it holds. Every EU-regulated broker must keep client money in segregated accounts.",
      },
    ],
  },
];

export function getCountry(slug: string): GeoCountry | undefined {
  return COUNTRIES.find((c) => c.slug === slug);
}

export function getAllCountrySlugs(): string[] {
  return COUNTRIES.map((c) => c.slug);
}
