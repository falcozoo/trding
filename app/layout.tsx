import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SocialProof } from "@/components/SocialProof";
import { IntentPopup } from "@/components/IntentPopup";
import { StickyCTA } from "@/components/StickyCTA";
import { SITE } from "@/lib/site";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: {
    default: `${SITE.name} — Neutral Broker Comparison`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "Find the right broker in 60 seconds. Neutral scoring, no jargon, no sales pitch. Compare regulation, fees, platforms and more.",
  openGraph: {
    title: `${SITE.name} — Neutral Broker Comparison`,
    description:
      "Find the right broker in 60 seconds. Neutral scoring, no jargon, no sales pitch.",
    url: `https://${SITE.domain}`,
    siteName: SITE.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-cream font-sans text-ink antialiased">
        <Header />
        <main className="pb-24 sm:pb-0">{children}</main>
        <Footer />
        <SocialProof />
        <IntentPopup />
        <StickyCTA />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
