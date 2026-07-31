import type { Metadata } from "next";
import CompoundingCalculator from "./CompoundingCalculator";

export const metadata: Metadata = {
  title: "Compounding Calculator — Trading Growth Projection | Trding.io",
  description:
    "Free compounding calculator for traders. Project how a fixed percentage gain compounds over time. A mathematical projection only — not a prediction of trading results.",
  alternates: { canonical: "/tools/compounding" },
};

export default function CompoundingPage() {
  return <CompoundingCalculator />;
}
