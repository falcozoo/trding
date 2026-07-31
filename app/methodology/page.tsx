import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology — How We Score Brokers",
  description:
    "Our neutral scoring formula, published in full: the criteria, the weights and how the rating is calculated. Affiliation never affects the score.",
};

export default function MethodologyPage() {
  const weights = [
    ["Regulation & safety", 25],
    ["Fees (spread + commission)", 25],
    ["Platforms", 15],
    ["Minimum deposit / accessibility", 10],
    ["Withdrawal speed & reliability", 15],
    ["External reputation (Trustpilot)", 10],
  ] as const;

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="text-3xl font-bold sm:text-4xl">Our methodology</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        The golden rule: if a score smells of affiliation, we lose everything.
        Our rating must be reproducible by anyone from public data. A partner
        can score average. A non-partner can rank first.
      </p>

      <h2 className="mt-10 text-2xl font-bold">How the score works</h2>
      <p className="mt-3 leading-relaxed text-muted">
        For each broker, every criterion is normalised from 0 to 100 across the
        whole set (min-max), inverted when lower is better (spread, deposit,
        withdrawal time). Each normalised value is multiplied by its published
        weight, summed, and rescaled to a rating out of 5. No &quot;is
        partner&quot; variable ever enters the calculation.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Default weights</h2>
      <div className="mt-4 overflow-hidden rounded-xl2 border border-line bg-paper shadow-card">
        <table className="w-full text-sm">
          <tbody>
            {weights.map(([label, w], i) => (
              <tr key={label} className={i % 2 ? "bg-cream/50" : "bg-paper"}>
                <td className="px-4 py-3 font-medium">{label}</td>
                <td className="px-4 py-3 text-right font-mono text-muted">
                  {w}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold">Anti-gaming</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-muted">
        <li>
          External reviews are weighted by volume: 4.9/5 from 12 reviews counts
          less than 4.4/5 from 3,000.
        </li>
        <li>Every broker shows the date its data was last verified.</li>
        <li>
          The quiz can boost the weight of your priority for your ranking only —
          it never changes a broker&apos;s global score.
        </li>
      </ul>
    </div>
  );
}
