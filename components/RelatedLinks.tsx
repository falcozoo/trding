import Link from "next/link";

/**
 * Internal-linking block. The single biggest cheap SEO win: connect the
 * education, comparison and tools clusters so crawlers (and readers) flow
 * between them, and link equity spreads across the whole site.
 */

type LinkItem = { href: string; label: string; sub?: string };

export function RelatedLinks({
  title = "Keep going",
  links,
}: {
  title?: string;
  links: LinkItem[];
}) {
  if (!links.length) return null;
  return (
    <section className="mt-12">
      <h2 className="text-lg font-bold text-ink">{title}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="group rounded-xl border border-line bg-paper p-4 shadow-card transition hover:border-amber"
          >
            <div className="font-semibold text-ink group-hover:text-amber-dark">
              {l.label}
            </div>
            {l.sub && (
              <div className="mt-0.5 text-sm text-muted">{l.sub}</div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}

/**
 * Grouped variant: renders several titled sub-sections of related links.
 * Used on broker pages to expose dynamic, relevant internal links (similar
 * brokers, matching "best for" rankings, country pages, comparisons, glossary)
 * instead of a single generic list.
 */
export function RelatedLinkGroups({
  title = "Explore related pages",
  groups,
}: {
  title?: string;
  groups: { title: string; links: LinkItem[] }[];
}) {
  const nonEmpty = groups.filter((g) => g.links.length > 0);
  if (!nonEmpty.length) return null;
  return (
    <section className="mt-12">
      <h2 className="text-lg font-bold text-ink">{title}</h2>
      <div className="mt-4 space-y-6">
        {nonEmpty.map((g) => (
          <div key={g.title}>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">
              {g.title}
            </h3>
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              {g.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group rounded-xl border border-line bg-paper p-4 shadow-card transition hover:border-amber"
                >
                  <div className="font-semibold text-ink group-hover:text-amber-dark">
                    {l.label}
                  </div>
                  {l.sub && (
                    <div className="mt-0.5 text-sm text-muted">{l.sub}</div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Default cross-cluster links used across content pages. */
export const CROSS_LINKS: LinkItem[] = [
  {
    href: "/brokers",
    label: "Compare brokers",
    sub: "Neutral scores on regulation, fees and more",
  },
  {
    href: "/tools/cost-of-trading",
    label: "Real cost of trading",
    sub: "Rank brokers by real annual spread + commission",
  },
  {
    href: "/tools/regulation-checker",
    label: "Broker regulation checker",
    sub: "Who regulates each broker, with official registers",
  },
  {
    href: "/quiz",
    label: "Find your broker",
    sub: "A 60-second quiz matched to your profile",
  },
  {
    href: "/tools/position-size",
    label: "Position size calculator",
    sub: "Size a trade to a fixed risk",
  },
  {
    href: "/learn",
    label: "Learn to trade",
    sub: "Free, plain-English courses and guides",
  },
];
