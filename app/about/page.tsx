import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Trding.io — Who We Are & How We Stay Neutral",
  description:
    "Trding.io is a neutral broker comparison built for beginners. Learn who we are, how we score brokers on objective facts, and how we make money without selling our ranking.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <header className="max-w-2xl">
        <p className="mb-4 inline-block rounded-full bg-amber-soft px-3 py-1 text-sm font-medium text-amber-dark">
          Who we are
        </p>
        <h1 className="text-3xl font-bold sm:text-4xl">
          A broker comparison that treats you like an adult.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Most &quot;best broker&quot; sites are just affiliate billboards: whoever
          pays the most ranks first. We built {SITE.name} to do the opposite —
          rate the whole market on cold, verifiable facts, and be honest about
          the risks nobody else mentions.
        </p>
      </header>

      {/* Mission */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Why we exist</h2>
        <p className="mt-3 leading-relaxed text-ink">
          Trading is hard enough without being misled before you even start.
          Beginners get funnelled toward whichever broker has the biggest
          affiliate budget, with the risks buried in the small print. We think
          that&apos;s backwards. So we score brokers the way a sceptical friend
          would: regulation first, real costs second, marketing never.
        </p>
      </section>

      {/* Neutrality — the trust core */}
      <section className="mt-10 rounded-2xl border border-line bg-paper p-7 shadow-card">
        <h2 className="text-2xl font-bold">How we stay neutral</h2>
        <ul className="mt-4 space-y-4 text-ink">
          <li className="flex gap-3">
            <span className="text-amber">✔</span>
            <span>
              <strong>Scores come only from facts.</strong> Regulation, spreads,
              commissions, minimum deposit, withdrawal speed and public reviews —
              each normalised and weighted by a{" "}
              <Link href="/methodology" className="text-amber-dark underline">
                published formula
              </Link>
              . Whether a broker pays us is never an input.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber">✔</span>
            <span>
              <strong>We list brokers we don&apos;t recommend.</strong> When a
              broker has documented problems — offshore-only regulation, reported
              withdrawal complaints — we say so and score it low, even though we
              earn nothing from it. A comparator that only ever says
              &quot;great!&quot; is an advert.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber">✔</span>
            <span>
              <strong>Every fact is dated.</strong> Each broker shows when we last
              verified its data, so you know it&apos;s current.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber">✔</span>
            <span>
              <strong>We&apos;re honest about risk.</strong> Most retail traders
              lose money. We repeat that everywhere, because it&apos;s true and
              because you deserve to hear it before you deposit a cent.
            </span>
          </li>
        </ul>
      </section>

      {/* How we make money — radical transparency */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold">How we make money</h2>
        <p className="mt-3 leading-relaxed text-ink">
          When you open an account through one of our links, the broker may pay
          us a commission — the same model as every comparison site. The
          difference is what it <em>can&apos;t</em> buy: it never changes a
          broker&apos;s score or its rank. A broker that pays us can still score
          low. A broker that pays us nothing can still rank first. That rule is
          the whole point of this site — if we broke it, we&apos;d have nothing
          left worth trusting.
        </p>
      </section>

      {/* Who's behind it */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold">Who&apos;s behind it</h2>
        <p className="mt-3 leading-relaxed text-ink">
          {SITE.name} is run by a small, independent team that has spent years
          around retail trading and online brokers — long enough to be tired of
          the hype and the fine print. We&apos;re not a broker, we don&apos;t hold
          your money, and we don&apos;t give personal advice. We build the neutral
          reference we wish had existed when we started.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl border-2 border-amber bg-amber-soft/40 p-7 text-center">
        <h2 className="text-2xl font-bold">Ready to find your broker?</h2>
        <p className="mx-auto mt-2 max-w-md text-muted">
          Answer five quick questions and we&apos;ll match you to a regulated
          broker that fits — in about a minute.
        </p>
        <div className="mt-5 flex flex-col justify-center gap-2 sm:flex-row">
          <Link
            href="/quiz"
            className="rounded-xl bg-amber px-6 py-3.5 text-center font-semibold text-white shadow-card transition hover:bg-amber-dark"
          >
            Take the 60-second quiz →
          </Link>
          <Link
            href="/brokers"
            className="rounded-xl border border-line bg-paper px-6 py-3.5 text-center font-semibold text-ink transition hover:border-amber"
          >
            Compare all brokers
          </Link>
        </div>
      </section>

      <p className="mt-8 text-center text-xs text-muted">
        Educational content only, not investment advice. Trading involves
        substantial risk of loss and most retail traders lose money.
      </p>
    </div>
  );
}
