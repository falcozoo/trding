import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Trding.io team — questions, corrections to broker data, or partnership enquiries.",
};

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact"
      intro="We're a small, independent team. The fastest way to reach us is by email — we read everything."
    >
      <LegalSection heading="General questions">
        <p>
          For anything about the site, a broker, or how our scoring works, email{" "}
          <a className="underline" href={`mailto:${SITE.contactEmail}`}>
            {SITE.contactEmail}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Corrections">
        <p>
          Spotted a broker fact that&apos;s out of date or wrong? Tell us and
          we&apos;ll verify and fix it. Keeping our data accurate and dated is
          the whole point of the site.
        </p>
      </LegalSection>

      <LegalSection heading="Partnerships">
        <p>
          Brokers and providers can reach the same address. Note up front: paying
          us never buys a better score. A partner can still score low, and
          we&apos;ll publish it.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
