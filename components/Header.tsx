import Link from "next/link";
import { SITE } from "@/lib/site";

/** Site-wide top navigation. Light, sober, brand ".io" in amber. */
export function Header() {
  return (
    <header className="border-b border-line bg-paper/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-2xl font-bold tracking-tight text-ink">
          trding<span className="text-amber">.io</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-muted">
          <Link href="/brokers" className="hover:text-ink">
            Brokers
          </Link>
          <Link href="/quiz" className="hover:text-ink">
            Quiz
          </Link>
          <Link href="/methodology" className="hidden hover:text-ink sm:inline">
            Methodology
          </Link>
          <Link
            href="/quiz"
            className="rounded-lg bg-amber px-4 py-2 font-semibold text-white hover:bg-amber-dark"
          >
            Find my broker
          </Link>
        </nav>
      </div>
    </header>
  );
}
