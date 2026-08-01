import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "The cookies and similar technologies Trding.io uses, what they do, and how you can control them.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="We use very few cookies and no advertising trackers. This page explains what we use and how you stay in control."
    >
      <LegalSection heading="What cookies are">
        <p>
          Cookies are small files stored on your device. Similar technologies
          (like local storage) work the same way. They let a site remember things
          between visits.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies we use">
        <p>
          <strong>Essential</strong> — needed for the site to work and to
          remember your cookie choice and language preference. These are always
          on.
        </p>
        <p>
          <strong>Anonymous analytics</strong> — Vercel Analytics and Speed
          Insights measure aggregate, non-identifying usage so we can improve the
          site. They do not track you across other websites and are not used for
          advertising.
        </p>
        <p>
          We do <strong>not</strong> use advertising or third-party marketing
          cookies.
        </p>
      </LegalSection>

      <LegalSection heading="Your choices">
        <p>
          When you first visit, you can accept or decline non-essential cookies
          via the banner. You can also block or delete cookies at any time in your
          browser settings; essential features may stop working if you do.
        </p>
      </LegalSection>

      <LegalSection heading="More information">
        <p>
          For how we handle personal data more broadly, see our{" "}
          <Link className="underline" href="/privacy">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
