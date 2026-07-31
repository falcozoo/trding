import type { Metadata } from "next";
import PositionSizeCalculator from "./PositionSizeCalculator";

export const metadata: Metadata = {
  title: "Position Size Calculator — How Many Lots to Trade | Trding.io",
  description:
    "Free position size calculator. Enter your account balance, risk % per trade and stop-loss in pips to find how many lots to trade and the exact money at risk.",
  alternates: { canonical: "/tools/position-size" },
};

export default function PositionSizePage() {
  return <PositionSizeCalculator />;
}
