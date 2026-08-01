import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { SITE, CFD_DISCLAIMER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms governing your use of Trding.io — our neutral broker comparison service, affiliate disclosure, and the important limits on our information.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="By using Trding.io you agree to these terms. They set out what the site is, what it is not, and the limits of the information we provide."
    >
      <LegalSection heading="What Trding.io is">
        <p>
          Trding.io is an independent, information-only comparison website. We
          rate and compare brokers on objective criteria to help you make your
          own decision. We are not a broker, we do not hold your money, and we do
          not execute trades.
        </p>
      </LegalSection>

      <LegalSection heading="Not financial advice">
        <p>
          Nothing on this site is personal investment, financial, tax or legal
          advice, and nothing is a recommendation to trade or to use any
          particular broker. You are responsible for your own decisions and
          should seek independent advice where appropriate.
        </p>
      </LegalSection>

      <LegalSection heading="Risk warning">
        <p>{CFD_DISCLAIMER}</p>
      </LegalSection>

      <LegalSection heading="Affiliate relationships">
        <p>
          Some links on this site are affiliate links: if you open an account
          through them we may receive a commission at no extra cost to you. This
          never changes how brokers are scored or ranked. See{" "}
          <Link className="underline" href="/how-we-make-money">
            how we make money
          </Link>{" "}
          for the full explanation.
        </p>
      </LegalSection>

      <LegalSection heading="Accuracy of information">
        <p>
          We work to keep broker facts accurate and dated, but conditions
          (spreads, regulation, offers) change and can vary by country. Always
          verify the details on the broker&apos;s own website before opening an
          account. We do not guarantee that any information is complete or
          current.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <p>
          To the fullest extent permitted by law, Trding.io is not liable for any
          loss arising from your use of the site or from any decision you make
          based on it, including trading losses. The site is provided &quot;as
          is&quot; without warranties of any kind.
        </p>
      </LegalSection>

      <LegalSection heading="Third-party sites">
        <p>
          When you follow a link to a broker or other third party, their terms
          and privacy practices apply, not ours. We are not responsible for their
          content or services.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about these terms? Email{" "}
          <a className="underline" href={`mailto:${SITE.contactEmail}`}>
            {SITE.contactEmail}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
