import type { Metadata } from "next";
import RiskRewardCalculator from "./RiskRewardCalculator";

export const metadata: Metadata = {
  title: "Risk/Reward & R-Multiple Calculator — Trade Ratio Tool | Trding.io",
  description:
    "Free risk/reward and R-multiple calculator. Enter entry, stop and target prices to see your reward-to-risk ratio, money at risk, potential reward and position size.",
  alternates: { canonical: "/tools/risk-reward" },
};

export default function RiskRewardPage() {
  return <RiskRewardCalculator />;
}
