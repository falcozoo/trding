/**
 * Dynamic internal-linking for broker review pages.
 *
 * The single biggest cheap SEO win on this site: every broker page should
 * pass link equity to the *relevant* commercial and educational pages it
 * actually relates to — not a fixed list of six generic links.
 *
 * For a given broker we compute, purely from existing data (no new content):
 *   1. Similar brokers      -> /brokers/[slug]     (peers by regulation/asset/platform)
 *   2. "Best for X" angles   -> /best/[need]        (only angles the broker qualifies for)
 *   3. Country landing pages -> /best/country/[c]   (only countries it actually serves)
 *   4. Head-to-head compares -> /compare/[pair]     (vs its closest-scored peers)
 *   5. Glossary terms        -> /glossary/[slug]    (core concepts every review touches)
 *
 * Everything is deterministic and flagged (not-recommended) brokers are
 * excluded from being *recommended as destinations*, so we never send a
 * reader from a real review into a flagged broker.
 */

import { getBrokers, getBrokerBySlug, type Broker, type CountryCode } from "@/lib/brokers";
import { scoreBrokers } from "@/lib/scoring";
import { ALL_ANGLES } from "@/lib/bestFor";
import { COUNTRIES } from "@/lib/geoCountries";
import { ALL_TOPICS } from "@/lib/brokerTopics";

export type MeshLink = { href: string; label: string; sub?: string };

/** Map a broker CountryCode onto the matching /best/country slug, if a page exists. */
const COUNTRY_CODE_TO_SLUG: Partial<Record<CountryCode, string>> = {
  UK: "united-kingdom",
  Netherlands: "netherlands",
  Sweden: "sweden",
  Norway: "norway",
  Denmark: "denmark",
  Finland: "finland",
};

/** Core concepts every broker review touches — safe, always-relevant glossary links. */
const CORE_GLOSSARY: MeshLink[] = [
  { href: "/glossary/spread", label: "What is a spread?", sub: "The core cost baked into every trade" },
  { href: "/glossary/leverage", label: "Leverage explained", sub: "How margin magnifies gains and losses" },
  { href: "/glossary/pip", label: "What is a pip?", sub: "How price moves are measured" },
];

/**
 * Similar brokers: real (non-flagged) peers, closest by overall neutral score
 * to the subject broker, sharing at least one regulator or asset class.
 */
export function similarBrokers(subject: Broker, max = 3): MeshLink[] {
  const scored = scoreBrokers(getBrokers());
  const subjectScore =
    scored.find((s) => s.broker.slug === subject.slug)?.score ?? 0;

  return scored
    .filter((s) => s.broker.slug !== subject.slug && !s.broker.flagged)
    .map((s) => {
      const sharesReg = s.broker.regulators.some((r) =>
        subject.regulators.includes(r)
      );
      const sharesAsset = s.broker.assetClasses.some((a) =>
        subject.assetClasses.includes(a)
      );
      const affinity = (sharesReg ? 1 : 0) + (sharesAsset ? 1 : 0);
      return { s, affinity, dist: Math.abs(s.score - subjectScore) };
    })
    // Prefer brokers that share context, then those closest in quality.
    .sort((x, y) => y.affinity - x.affinity || x.dist - y.dist)
    .slice(0, max)
    .map(({ s }) => ({
      href: `/brokers/${s.broker.slug}`,
      label: `${s.broker.name} review`,
      sub: `${s.score.toFixed(1)}/5 · ${s.broker.regulators.slice(0, 2).join(", ")}`,
    }));
}

/**
 * "Best for X" angles this broker genuinely qualifies for (passes the angle's
 * hard filter, if any). Capped so the block stays tight.
 */
export function matchingAngles(subject: Broker, max = 4): MeshLink[] {
  if (subject.flagged) return [];
  return ALL_ANGLES.filter((a) => (a.filter ? a.filter(subject) : true))
    .slice(0, max)
    .map((a) => ({
      href: `/best/${a.slug}`,
      label: `Best brokers for ${a.title}`,
      sub: `See where ${subject.name} ranks`,
    }));
}

/** Country landing pages for the markets this broker actually serves. */
export function servedCountries(subject: Broker, max = 3): MeshLink[] {
  const seen = new Set<string>();
  const out: MeshLink[] = [];
  for (const code of subject.countriesServed) {
    const slug = COUNTRY_CODE_TO_SLUG[code];
    if (!slug || seen.has(slug)) continue;
    const country = COUNTRIES.find((c) => c.slug === slug);
    if (!country) continue;
    seen.add(slug);
    out.push({
      href: `/best/country/${country.slug}`,
      label: `Best brokers in ${country.name}`,
      sub: `${country.regulator}-regulated options for ${country.demonym} traders`,
    });
    if (out.length >= max) break;
  }
  return out;
}

/** Head-to-head comparison links vs the subject's closest peers. */
export function compareLinks(subject: Broker, max = 2): MeshLink[] {
  const peers = similarBrokers(subject, max);
  return peers.map((p) => {
    const otherSlug = p.href.split("/").pop()!;
    const [a, b] = [subject.slug, otherSlug].sort();
    const other = getBrokerBySlug(otherSlug);
    return {
      href: `/compare/${a}-vs-${b}`,
      label: `${subject.name} vs ${other?.name ?? otherSlug}`,
      sub: "Side-by-side comparison",
    };
  });
}

/** Glossary concepts every review touches. */
export function glossaryLinks(): MeshLink[] {
  return CORE_GLOSSARY;
}

/**
 * Long-tail "quick answer" pages for THIS broker (withdrawal time, minimum
 * deposit, fees, regulation, is-it-safe). Non-flagged brokers only — flagged
 * brokers are a neutrality signal and never get topic pages.
 */
export function quickAnswerLinks(subject: Broker): MeshLink[] {
  if (subject.flagged) return [];
  return ALL_TOPICS.map((t) => ({
    href: `/brokers/${subject.slug}/${t.slug}`,
    label: `${subject.name}: ${t.shortLabel}`,
    sub: t.title(subject),
  }));
}

/**
 * Grouped mesh for the broker page. Each group is only returned if non-empty,
 * so pages never render an empty section.
 */
export function brokerMesh(subject: Broker): {
  title: string;
  links: MeshLink[];
}[] {
  const groups = [
    { title: `${subject.name} quick answers`, links: quickAnswerLinks(subject) },
    { title: "Similar brokers", links: similarBrokers(subject, 3) },
    { title: `See ${subject.name} in our rankings`, links: matchingAngles(subject, 4) },
    { title: "Compare head-to-head", links: compareLinks(subject, 2) },
    { title: "Brokers by country", links: servedCountries(subject, 3) },
    { title: "Key terms to know", links: glossaryLinks() },
  ];
  return groups.filter((g) => g.links.length > 0);
}
