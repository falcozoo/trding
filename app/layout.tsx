import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SocialProof } from "@/components/SocialProof";
import { IntentPopup } from "@/components/IntentPopup";
import { StickyCTA } from "@/components/StickyCTA";
import { CookieBanner } from "@/components/CookieBanner";
import { SiteJsonLd } from "@/components/SiteJsonLd";
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
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Neutral Broker Comparison`,
    description:
      "Find the right broker in 60 seconds. Neutral scoring, no jargon, no sales pitch.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `https://${SITE.domain}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1416822353626985');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1416822353626985&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="min-h-screen bg-cream font-sans text-ink antialiased">
        <SiteJsonLd />
        <Header />
        <main className="pb-24 sm:pb-0">{children}</main>
        <Footer />
        <SocialProof />
        <IntentPopup />
        <StickyCTA />
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
