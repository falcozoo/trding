import Image from "next/image";
import type { DeepBroker } from "@/lib/brokerDeep";

/**
 * Renders the optional deep, per-broker editorial layer: a verdict, the
 * withdrawal-proof evidence block (if any), and rich narrative sections.
 *
 * The proof block is framed honestly: it states exactly what the account
 * statement shows, and explicitly warns that the profit figure is one account's
 * history, not a typical or promised outcome. This protects credibility and
 * keeps us on the right side of "no misleading performance claims".
 */
export function BrokerDeepContent({
  brokerName,
  deep,
}: {
  brokerName: string;
  deep: DeepBroker;
}) {
  return (
    <>
      {/* Editorial verdict */}
      <section className="mt-10 rounded-xl2 border border-amber bg-amber-soft p-6 shadow-card">
        <h2 className="text-xl font-bold text-amber-dark">
          Our verdict on {brokerName}
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink">
          {deep.verdict}
        </p>
      </section>

      {/* Tested by us */}
      {deep.testedByUs && (
        <section className="mt-10 rounded-xl2 border border-line bg-paper p-6 shadow-card">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-bold text-ink">
              Tested by us
            </h2>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Verified {deep.testedByUs.checkedOn}
            </span>
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/90">
            We don&apos;t just copy a broker&apos;s marketing. Here is what we
            checked ourselves on {brokerName}:
          </p>
          <ul className="mt-4 space-y-3">
            {deep.testedByUs.points.map((p, i) => (
              <li
                key={i}
                className="flex gap-3 text-[15px] leading-relaxed text-ink/90"
              >
                <span className="mt-0.5 shrink-0 font-bold text-green-600">
                  ✓
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Withdrawal proof */}
      {deep.withdrawalProof && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-ink">
            Proof of withdrawal
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/90">
            The biggest question a beginner has about any broker is simple: will
            they actually let me withdraw my money? Below is a real account
            statement, shown as evidence on that specific point.
          </p>

          <figure className="mt-5 overflow-hidden rounded-xl2 border border-line bg-paper shadow-card">
            <div className="mx-auto max-w-sm p-4">
              <Image
                src={deep.withdrawalProof.image}
                alt={deep.withdrawalProof.alt}
                width={588}
                height={1266}
                className="h-auto w-full rounded-lg"
              />
            </div>
            <figcaption className="border-t border-line px-4 py-3 text-xs leading-relaxed text-muted">
              {deep.withdrawalProof.caption}
            </figcaption>
          </figure>

          <ul className="mt-5 space-y-3">
            {deep.withdrawalProof.points.map((p, i) => (
              <li
                key={i}
                className="flex gap-3 text-[15px] leading-relaxed text-ink/90"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 rounded-lg border border-line bg-cream p-4 text-xs leading-relaxed text-muted">
            <strong className="text-ink">Important.</strong> The profit shown in
            this statement belongs to one real account and its own trading. It is
            not typical, not a projection, and not something we or the broker
            promise you can repeat. CFDs are high-risk and the majority of retail
            traders lose money. Only ever trade with money you can afford to lose.
          </p>
        </section>
      )}

      {/* Deep narrative sections */}
      {deep.sections.map((s) => (
        <section key={s.heading} className="mt-10">
          <h2 className="text-xl font-bold text-ink">{s.heading}</h2>
          {s.paragraphs.map((para, i) => (
            <p
              key={i}
              className="mt-3 text-[15px] leading-relaxed text-ink/90"
            >
              {para}
            </p>
          ))}
        </section>
      ))}
    </>
  );
}
