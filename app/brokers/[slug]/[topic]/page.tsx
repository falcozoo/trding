import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinkGroups } from "@/components/RelatedLinks";
import {
  ALL_TOPICS,
  getAllBrokerTopicPairs,
  resolveBrokerTopic,
  siblingTopicLinks,
} from "@/lib/brokerTopics";
import { SITE, NOT_ADVICE } from "@/lib/site";

export function generateStaticParams() {
  return getAllBrokerTopicPairs();
}

export function generateMetadata({
  params,
}: {
  params: { slug: string; topic: string };
}): Metadata {
  const resolved = resolveBrokerTopic(params.slug, params.topic);
  if (!resolved) return {};
  const { broker, topic } = resolved;
  return {
    title: topic.title(broker),
    description: topic.metaDescription(broker).slice(0, 158),
    alternates: { canonical: `/brokers/${broker.slug}/${topic.slug}` },
  };
}

/** Topic-specific tool link for the internal-linking block. */
function toolLinkFor(topicSlug: string): {
  href: string;
  label: string;
  sub: string;
} {
  switch (topicSlug) {
    case "fees":
      return {
        href: "/tools/cost-of-trading",
        label: "Real cost of trading",
        sub: "Rank brokers by real annual spread + commission",
      };
    case "regulation":
    case "is-it-safe":
      return {
        href: "/tools/regulation-checker",
        label: "Broker regulation checker",
        sub: "Who regulates each broker, with official registers",
      };
    default:
      return {
        href: "/brokers",
        label: "Compare all brokers",
        sub: "Neutral scores on regulation, fees and withdrawals",
      };
  }
}

export default function BrokerTopicPage({
  params,
}: {
  params: { slug: string; topic: string };
}) {
  const resolved = resolveBrokerTopic(params.slug, params.topic);
  if (!resolved) notFound();
  const { broker, topic } = resolved;

  const content = topic.build(broker);
  const heading = topic.title(broker);

  // FAQPage JSON-LD (visible Q&A mirrors this exactly).
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const siblings = siblingTopicLinks(broker, topic.slug, 3);
  const tool = toolLinkFor(topic.slug);

  const linkGroups = [
    {
      title: `More on ${broker.name}`,
      links: [
        {
          href: `/brokers/${broker.slug}`,
          label: `${broker.name} full review`,
          sub: "Neutral rating, pros & cons, fees and withdrawals",
        },
        ...siblings,
      ],
    },
    {
      title: "Useful tools",
      links: [
        tool,
        {
          href: "/quiz",
          label: "Find your broker",
          sub: "A 60-second quiz matched to your profile",
        },
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Breadcrumbs
        items={[
          { name: "Brokers", href: "/brokers" },
          { name: broker.name, href: `/brokers/${broker.slug}` },
          { name: topic.shortLabel },
        ]}
      />

      {/* Header + DIRECT ANSWER first (SEO audit point 7) */}
      <header>
        <h1 className="text-3xl font-bold text-ink sm:text-4xl">{heading}</h1>
        <div className="mt-5 rounded-xl2 border border-line bg-cream p-5 shadow-card">
          <p className="text-[17px] font-semibold leading-relaxed text-ink">
            {content.directAnswer}
          </p>
        </div>
      </header>

      {/* Key facts */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-ink">Key facts</h2>
        <div className="mt-4 overflow-hidden rounded-xl2 border border-line bg-paper shadow-card">
          <table className="w-full text-sm">
            <tbody>
              {content.facts.map(([k, v], i) => (
                <tr key={k} className={i % 2 ? "bg-cream/50" : "bg-paper"}>
                  <td className="w-1/2 px-4 py-3 font-medium text-ink">{k}</td>
                  <td className="px-4 py-3 text-muted">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Supporting detail */}
      <section className="mt-10 space-y-4">
        {content.paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-ink/90">
            {p}
          </p>
        ))}
      </section>

      {/* Risk / caution note (YMYL) */}
      {content.riskNote && (
        <section className="mt-8 rounded-xl2 border border-amber/40 bg-amber/5 p-5 shadow-card">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-amber-dark">
            Risk note
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/90">
            {content.riskNote}
          </p>
        </section>
      )}

      {/* FAQ (visible Q&A mirrors the JSON-LD) */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-ink">
          Frequently asked questions
        </h2>
        <div className="mt-5 space-y-5">
          {content.faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-xl2 border border-line bg-paper p-5 shadow-card"
            >
              <h3 className="font-semibold text-ink">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Back to the full review, CTA */}
      <section className="mt-10 rounded-xl2 border border-line bg-cream p-6 shadow-card">
        <p className="text-[15px] leading-relaxed text-ink/90">
          This page answers one specific question about {broker.name}. For the
          full picture — neutral rating, pros and cons, and every stat side by
          side — read the{" "}
          <Link
            href={`/brokers/${broker.slug}`}
            className="font-semibold text-amber-dark underline"
          >
            complete {broker.name} review
          </Link>
          .
        </p>
      </section>

      {/* Internal linking mesh */}
      <RelatedLinkGroups title="Related answers & tools" groups={linkGroups} />

      <p className="mt-10 text-xs leading-relaxed text-muted">
        {NOT_ADVICE} Figures reflect {broker.name}&apos;s data last verified on{" "}
        {broker.lastVerified} and can change — always confirm current terms with
        the broker directly. CFDs are high-risk; {SITE.retailLossPct}% of retail
        accounts lose money.
      </p>
    </div>
  );
}
