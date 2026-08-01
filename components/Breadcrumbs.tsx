import Link from "next/link";
import { SITE } from "@/lib/site";

export interface Crumb {
  /** Visible label. */
  name: string;
  /** Path relative to site root, e.g. "/learn". Omit on the current (last) page. */
  href?: string;
}

/**
 * Breadcrumb trail: renders the visible nav AND the matching BreadcrumbList
 * JSON-LD in one component, so the two never drift apart. Google shows the
 * trail in search results (better CObTR) and understands the site hierarchy.
 *
 * Usage: <Breadcrumbs items={[{name:"Learn",href:"/learn"},{name:title}]} />
 * (Home is prepended automatically.)
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const base = `https://${SITE.domain}`;
  const full: Crumb[] = [{ name: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: full.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: `${base}${c.href === "/" ? "" : c.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-muted"
      >
        {full.map((c, i) => {
          const last = i === full.length - 1;
          return (
            <span key={i} className="flex items-center gap-1.5">
              {c.href && !last ? (
                <Link href={c.href} className="hover:text-ink">
                  {c.name}
                </Link>
              ) : (
                <span className={last ? "text-ink" : undefined}>{c.name}</span>
              )}
              {!last && <span className="text-line">/</span>}
            </span>
          );
        })}
      </nav>
    </>
  );
}
