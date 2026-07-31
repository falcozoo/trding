import Link from "next/link";
import { CFD_DISCLAIMER, NOT_ADVICE, SITE } from "@/lib/site";

/** Site-wide footer with the mandatory CFD risk disclaimer. */
export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
          <div>
            <p className="text-lg font-bold text-ink">
              trding<span className="text-amber">.io</span>
            </p>
            <p className="mt-1 max-w-xs text-sm text-muted">
              A neutral CFD broker comparator. No jargon, no sales pitch.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm text-muted">
            <Link href="/brokers" className="hover:text-ink">
              All brokers
            </Link>
            <Link href="/quiz" className="hover:text-ink">
              Broker quiz
            </Link>
            <Link href="/methodology" className="hover:text-ink">
              Methodology
            </Link>
            <Link href="/how-we-make-money" className="hover:text-ink">
              How we make money
            </Link>
          </nav>
        </div>

        <div className="mt-8 space-y-3 border-t border-line pt-6 text-xs leading-relaxed text-muted">
          <p>
            <strong className="text-ink">Risk warning.</strong> {CFD_DISCLAIMER}
          </p>
          <p>{NOT_ADVICE}</p>
          <p>
            © {new Date().getFullYear()} {SITE.name}. Some links on this site are
            affiliate links; see{" "}
            <Link href="/how-we-make-money" className="underline">
              how we make money
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
