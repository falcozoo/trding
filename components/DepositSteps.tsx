import Link from "next/link";

/**
 * "How to open your account & make a safe first deposit" — a plain, 4-step
 * onboarding block shown on each broker page, right where the user is deciding.
 *
 * This is the highest-value conversion moment: the visitor has picked a broker
 * and is about to act. Instead of leaving them alone, we walk them through the
 * exact steps and quietly reinforce safe behaviour (start small, use the demo,
 * check withdrawals) — which also protects credibility and matches our neutral,
 * beginner-first tone. Not advice; purely a practical checklist.
 */
export function DepositSteps({
  brokerName,
  affiliateUrl,
  hasDemo,
  minDeposit,
}: {
  brokerName: string;
  affiliateUrl: string;
  hasDemo: boolean;
  minDeposit: number;
}) {
  const steps = [
    {
      title: "Open your account",
      body: `Go to ${brokerName}, enter your details and verify your identity (ID + proof of address). This is a legal requirement for any regulated broker — it's a good sign, not a hassle.`,
    },
    {
      title: hasDemo ? "Try the demo first" : "Explore the platform first",
      body: hasDemo
        ? `Before risking a cent, open the free demo account and place a few practice trades. Learn where the buttons are and how orders work with fake money.`
        : `Take time to click around the platform, find the order ticket and the withdrawal page, before funding anything.`,
    },
    {
      title: "Make a small first deposit",
      body: `You don't need much to start. A small first deposit lets you test the full flow — funding, trading, and crucially withdrawing — without real exposure. Never deposit money you can't afford to lose.`,
    },
    {
      title: "Test a withdrawal early",
      body: `The real test of a broker is getting your money back. Withdraw a small amount soon after depositing to confirm the process is smooth before you scale up.`,
    },
  ];

  return (
    <section className="mt-10 rounded-xl2 border border-line bg-paper p-6 shadow-card">
      <h2 className="text-xl font-bold">
        How to open your {brokerName} account safely
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Four simple steps for a first-timer. This is general guidance, not
        financial advice.
      </p>

      <ol className="mt-6 space-y-5">
        {steps.map((s, i) => (
          <li key={s.title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber text-sm font-bold text-white">
              {i + 1}
            </span>
            <div>
              <h3 className="font-bold text-ink">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {s.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href={affiliateUrl}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="inline-flex items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-cream hover:opacity-90"
        >
          Open a {brokerName} account →
        </a>
        <Link
          href="/learn/course/price-action"
          className="text-sm font-medium text-amber-dark underline"
        >
          Not ready? Learn the basics first
        </Link>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        CFDs are high-risk and most retail traders lose money. Only start with an
        amount you are fully prepared to lose. See our{" "}
        <Link href="/risk-disclosure" className="underline">
          risk disclosure
        </Link>
        .
      </p>
    </section>
  );
}
