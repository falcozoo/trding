import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const base = `https://${SITE.domain}`;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Nothing sensitive to hide; the API route is not useful to crawlers.
      // guide-backlinks.html is an internal team doc — reachable by direct link
      // but kept out of the index.
      disallow: ["/api/", "/guide-backlinks.html"],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
