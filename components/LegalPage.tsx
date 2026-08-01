import { SITE } from "@/lib/site";

/**
 * Shared shell for legal / policy pages. Keeps a consistent, credible layout
 * (readable measure, "last updated" line, plain prose) across Privacy, Terms,
 * Cookies and Risk Disclosure.
 */
export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-muted">
        Last updated: {SITE.legalUpdated}
      </p>
      {intro ? (
        <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>
      ) : null}
      <div className="prose-legal mt-8 space-y-6 leading-relaxed text-ink">
        {children}
      </div>
    </div>
  );
}

/** A titled section inside a legal page. */
export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold">{heading}</h2>
      <div className="mt-2 space-y-3 text-muted">{children}</div>
    </section>
  );
}
