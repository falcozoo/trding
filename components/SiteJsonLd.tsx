import { SITE } from "@/lib/site";

/**
 * Site-wide structured data: Organization + WebSite (+ SearchAction).
 *
 * Rendered once in the root layout so every page carries a consistent brand
 * entity for Google. The WebSite/SearchAction node makes Trding.io eligible for
 * the sitelinks search box in Google results. Pure static JSON-LD — zero cost.
 */
export function SiteJsonLd() {
  const base = `https://${SITE.domain}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: SITE.name,
        url: base,
        logo: `${base}/opengraph-image`,
        description:
          "A neutral broker comparison site. Objective scoring, plain-language education, and free trading tools for beginners.",
        email: SITE.contactEmail,
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: SITE.name,
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "en",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${base}/brokers?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
