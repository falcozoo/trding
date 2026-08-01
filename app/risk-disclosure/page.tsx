import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { SITE, CFD_DISCLAIMER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Risk Disclosure",
  description:
    "A clear warning about the risks of trading CFDs and leveraged products, and what you should consider before you start.",
};

export default function RiskPage() {
  return (
    <LegalPage
      title="Risk Disclosure"
      intro="Trading is risky. This page states plainly what that risk is, so you can decide with your eyes open."
    >
      <LegalSection heading="The core warning">
        <p>{CFD_DISCLAIMER}</p>
      </LegalSection>

      <LegalSection heading="Leverage cuts both ways">
        <p>
          Leverage lets you control a large position with a small deposit. It
          multiplies gains, but it multiplies losses just as fast. You can lose
          more than you expected, and in some cases more than your initial
          deposit, very quickly.
        </p>
      </LegalSection>

      <LegalSection heading="Most retail traders lose money">
        <p>
          Across the industry, the majority of retail CFD accounts lose money.
          Around {SITE.retailLossPct}% is a figure commonly reported by regulated
          brokers. Treat any promise of easy or guaranteed profit as a red flag.
        </p>
      </LegalSection>

      <LegalSection heading="Only risk what you can afford to lose">
        <p>
          Never trade with money you need for living costs, debt or savings you
          cannot afford to lose. Trading is not a substitute for income and is
          not suitable for everyone.
        </p>
      </LegalSection>

      <LegalSection heading="This is not advice">
        <p>
          The information on Trding.io is general information to help you compare
          brokers. It is not personal financial advice or a recommendation to
          trade. If you are unsure, seek independent, qualified advice before you
          begin.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
