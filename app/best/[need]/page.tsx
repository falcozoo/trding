import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBrokers } from "@/lib/brokers";
import { scoreBrokers } from "@/lib/scoring";
import { Stars } from "@/components/Stars";
import { RelatedLinks, CROSS_LINKS } from "@/components/RelatedLinks";
import { ALL_ANGLES, getAngle } from "@/lib/bestFor";

export function generateStaticParams() {
  return ALL_ANGLES.map((a) => ({ need: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { need: string };
}): Metadata {
  const angle = getAngle(params.need);
  if (!angle) return {};
  return {
    title: `Best Brokers for ${angle.title} (2026)`,
    description: angle.metaDescription.slice(0, 158),
    alternates: { canonical: `/best/${angle.slug}` },
  };
}

export default function BestPage({
  params,
}: {
  params: { need: string };
}) {
  const angle = getAngle(params.need);
  if (!angle) notFound();

  // 1) Filter to brokers that genuinely qualify for this angle (if any).
  const pool = angle.filter
    ? getBrokers().filter(angle.filter)
    : getBrokers();

  // 2) Score the qualifying pool with the angle's weight lean.
  let scored = scoreBrokers(pool, angle.weights);

  // 3) Optional ranking override for single-stat angles (spread, leverage, ...).
  if (angle.sort) scored = angle.sort(scored);

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Brokers for ${angle.title} (2026)`,
    itemListElement: scored.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.broker.name,
      url: `/brokers/${s.broker.slug}`,
    })),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: angle.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <nav className="mb-6 text-sm text-muted">
        <Link href="/compare" className="hover:text-ink">
          ← All rankings
        </Link>
      </nav>

      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Best Brokers for {angle.title} (2026)
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{angle.intro}</p>
      </header>

      {/* Ranked list with angle-relevant stats */}
      <div className="mt-10 space-y-4">
        {scored.map((s, i) => (
          <div
            key={s.broker.slug}
            className="rounded-xl border border-line bg-paper p-5 shadow-card"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
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

            {/* Angle-relevant key stats */}
            <dl className="mt-4 grid grid-cols-1 gap-3 border-t border-line pt-4 sm:grid-cols-3">
              {angle.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs uppercase tracking-wide text-muted">
                    {stat.label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-medium text-ink">
                    {stat.value(s.broker)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      {scored.length === 0 && (
        <p className="mt-8 max-w-3xl text-muted">
          No brokers in our current set match this requirement. Browse{" "}
          <Link href="/brokers" className="text-amber-dark underline">
            all brokers
          </Link>{" "}
          instead.
        </p>
      )}

      {/* How we picked */}
      <section className="mt-12 max-w-3xl rounded-xl border border-line bg-cream p-6 shadow-card">
        <h2 className="text-lg font-bold text-ink">How we picked</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {angle.howWePicked}
        </p>
        <p className="mt-3 text-sm text-muted">
          Every ranking uses our{" "}
          <Link href="/methodology" className="text-amber-dark underline">
            neutral scoring engine
          </Link>
          . Being a partner never buys a better position.
        </p>
      </section>

      {/* FAQ */}
      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-bold">Frequently asked questions</h2>
        <div className="mt-5 space-y-5">
          {angle.faq.map((f) => (
            <div
              key={f.q}
              className="rounded-xl border border-line bg-paper p-5 shadow-card"
            >
              <h3 className="font-semibold">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-3xl">
        <RelatedLinks links={CROSS_LINKS} />
      </div>
    </div>
  );
}
