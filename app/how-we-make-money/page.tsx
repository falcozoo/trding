import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Make Money",
  description:
    "Transparency on how Trding.io is funded: affiliate links and paid listings, clearly labelled, and why it never influences our ratings.",
  alternates: { canonical: "/how-we-make-money" },
};

export default function HowWeMakeMoneyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="text-3xl font-bold sm:text-4xl">How we make money</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Trding.io is free for you and always will be. Here is exactly how we
        keep the lights on — and why it never influences our ratings.
      </p>

      <div className="mt-8 space-y-6">
        <section className="rounded-xl2 border border-line bg-paper p-6 shadow-card">
          <h2 className="text-xl font-bold">Affiliate links</h2>
          <p className="mt-2 leading-relaxed text-muted">
            When you open an account with some brokers through our links, we may
            receive a commission — at no extra cost to you. These links are
            marked as sponsored. This is our main source of revenue, and it has
            zero effect on how brokers are scored or ranked.
          </p>
        </section>

        <section className="rounded-xl2 border border-line bg-paper p-6 shadow-card">
          <h2 className="text-xl font-bold">Paid listings (later)</h2>
          <p className="mt-2 leading-relaxed text-muted">
            In future categories (coaches, courses), some providers may pay to
            be listed. Those will always carry a clear &quot;Partner&quot; badge
            and still appear according to their true score — never artificially
            promoted inside the ranking.
          </p>
        </section>

        <section className="rounded-xl2 border border-amber bg-amber-soft p-6">
          <h2 className="text-xl font-bold text-amber-dark">
            The one promise
          </h2>
          <p className="mt-2 leading-relaxed text-ink">
            Money changes what we build next. It never changes a score. A
            broker that pays us can still get a low rating — and we&apos;ll
            publish it.
          </p>
        </section>
      </div>
    </div>
  );
}
