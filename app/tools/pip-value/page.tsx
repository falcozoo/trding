import type { Metadata } from "next";
import PipValueCalculator from "./PipValueCalculator";

export const metadata: Metadata = {
  title: "Pip Value Calculator — Value Per Pip by Lot Size | Trding.io",
  description:
    "Free pip value calculator. Estimate how much one pip is worth for a given forex pair, lot size and account currency. Simple, clearly-labelled estimate — no sign-up.",
  alternates: { canonical: "/tools/pip-value" },
};

export default function PipValuePage() {
  return <PipValueCalculator />;
}
