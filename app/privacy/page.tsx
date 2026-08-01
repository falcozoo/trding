import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Trding.io collects, uses and protects your personal data, including email subscriptions, analytics and your rights under the GDPR.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what personal data Trding.io collects, why, how we use it, and the rights you have over it. We keep it in plain language."
    >
      <LegalSection heading="Who we are">
        <p>
          Trding.io (&quot;we&quot;, &quot;us&quot;) operates the neutral broker
          comparison website at {SITE.domain}. For any privacy question you can
          reach us at{" "}
          <a className="underline" href={`mailto:${SITE.contactEmail}`}>
            {SITE.contactEmail}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="What data we collect">
        <p>We keep data collection to the minimum needed to run the site:</p>
        <p>
          <strong>Email address</strong> — only if you choose to subscribe to
          our newsletter or receive a broker match by email. You give this to us
          voluntarily.
        </p>
        <p>
          <strong>Usage analytics</strong> — anonymous, aggregated data about how
          pages are used (via Vercel Analytics and Speed Insights). This does not
          identify you personally and does not use advertising cookies.
        </p>
        <p>
          <strong>Quiz answers</strong> — the choices you make in the broker quiz
          are processed to produce your result. They are not tied to your
          identity unless you also submit your email.
        </p>
      </LegalSection>

      <LegalSection heading="How we use your data">
        <p>
          To send you the newsletter or broker match you asked for, to improve
          the site, and to keep it secure. We do not sell your personal data. We
          never share your email with brokers.
        </p>
      </LegalSection>

      <LegalSection heading="Legal basis (GDPR)">
        <p>
          We process your email on the basis of your <strong>consent</strong>,
          which you can withdraw at any time by unsubscribing. We process
          anonymous analytics on the basis of our{" "}
          <strong>legitimate interest</strong> in understanding and improving the
          site.
        </p>
      </LegalSection>

      <LegalSection heading="Who processes your data">
        <p>
          We use trusted providers to run the service: <strong>Vercel</strong>{" "}
          (hosting and anonymous analytics) and <strong>Resend</strong> (email
          delivery). They process data only on our instructions.
        </p>
      </LegalSection>

      <LegalSection heading="How long we keep it">
        <p>
          We keep your email for as long as you stay subscribed. When you
          unsubscribe, we remove you from the active mailing list. Anonymous
          analytics are retained in aggregate only.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights">
        <p>
          Under the GDPR you can request access to, correction of, or deletion of
          your personal data, and you can object to or restrict its processing.
          To exercise any of these, email{" "}
          <a className="underline" href={`mailto:${SITE.contactEmail}`}>
            {SITE.contactEmail}
          </a>
          . You also have the right to lodge a complaint with your local data
          protection authority.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies">
        <p>
          See our{" "}
          <Link className="underline" href="/cookies">
            Cookie Policy
          </Link>{" "}
          for details on the small number of cookies and similar technologies we
          use.
        </p>
      </LegalSection>

      <LegalSection heading="Changes">
        <p>
          We may update this policy from time to time. The date at the top shows
          when it was last reviewed.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
