import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBrokers } from "@/lib/brokers";
import { scoreBrokers } from "@/lib/scoring";
import { Stars } from "@/components/Stars";
import { NEEDS, getNeed } from "@/lib/needs";

export function generateStaticParams() {
  return NEEDS.map((n) => ({ need: n.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { need: string };
}): Metadata {
  const need = getNeed(params.need);
  if (!need) return {};
  return {
    title: `Best CFD Brokers for ${need.title} (2026)`,
    description: `${need.intro}`.slice(0, 155),
    alternates: { canonical: `/best/${need.slug}` },
  };
}

export default function BestPage({
  params,
}: {
  params: { need: string };
}) {
  const need = getNeed(params.need);
  if (!need) notFound();

  let scored = scoreBrokers(getBrokers(), need.weights);

  // high-leverage is explicitly ranked by maxLeverage per the spec.
  if (need.slug === "high-leverage") {
    scored = [...scored].sort(
      (x, y) => y.broker.maxLeverage - x.broker.maxLeverage
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best CFD Brokers for ${need.title} (2026)`,
    itemListElement: scored.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.broker.name,
      url: `/brokers/${s.broker.slug}`,
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="mb-6 text-sm text-muted">
        <Link href="/compare" className="hover:text-ink">
          ← All rankings
        </Link>
      </nav>

      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Best CFD Brokers for {need.title} (2026)
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{need.intro}</p>
      </header>

      {/* Ranked list */}
      <div className="mt-10 space-y-4">
        {scored.map((s, i) => (
          <div
            key={s.broker.slug}
            className="flex flex-col gap-4 rounded-xl border border-line bg-paper p-5 shadow-card sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-muted">{i + 1}</span>
              <div>
                <Link
                  href={`/brokers/${s.broker.slug}`}
                  className="font-bold text-ink hover:text-amber-dark"
                >
                  {s.broker.name}
                </Link>
                <div className="text-sm text-muted">{s.broker.tagline}</div>
                <div className="mt-1 flex items-center gap-2">
                  <span className="font-bold">{s.score.toFixed(1)}</span>
                  <Stars value={s.score} size="sm" />
                  {need.slug === "high-leverage" && (
                    <span className="text-xs text-muted">
                      1:{s.broker.maxLeverage} max leverage
                    </span>
                  )}
                </div>
              </div>
            </div>
            <a
              href={s.broker.affiliateUrl}
              target="_blank"
              rel="sponsored noopener"
              className="self-start whitespace-nowrap rounded-lg bg-amber px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-dark sm:self-auto"
            >
              Open account
            </a>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-sm text-muted">
        Rankings use our{" "}
        <Link href="/methodology" className="text-amber-dark underline">
          neutral scoring engine
        </Link>{" "}
        with an emphasis tuned for {need.title.toLowerCase()}. Affiliation never
        affects the order.
      </p>
    </div>
  );
}
