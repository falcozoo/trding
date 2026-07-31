import { getFearGreed, fearGreedColor, type FearGreed } from "@/lib/markets";

/**
 * Crypto Fear & Greed Index widget.
 * Server component. Fetches its own (cached) data and bakes in a graceful
 * fallback so it never throws and never breaks the page/build.
 *
 * Pass `data` to reuse an already-fetched value (e.g. homepage teaser),
 * otherwise it fetches on its own.
 */
export async function FearGreed({
  data,
  variant = "full",
}: {
  data?: FearGreed | null;
  variant?: "full" | "compact";
}) {
  const fg = data !== undefined ? data : await getFearGreed();

  if (variant === "compact") {
    if (!fg) {
      return (
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-3 py-1 text-sm font-medium text-muted">
          Fear &amp; Greed: unavailable
        </span>
      );
    }
    const c = fearGreedColor(fg.value);
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-sm font-medium">
        <span className={`h-2 w-2 rounded-full ${c.dot}`} aria-hidden />
        <span className="text-muted">Fear &amp; Greed</span>
        <span className={`font-bold ${c.text}`}>{fg.value}</span>
        <span className="text-muted">· {fg.label}</span>
      </span>
    );
  }

  // full variant
  if (!fg) {
    return (
      <div className="rounded-xl2 border border-line bg-paper p-6 shadow-card">
        <h2 className="text-lg font-semibold">Crypto Fear &amp; Greed Index</h2>
        <p className="mt-3 text-sm text-muted">
          Data temporarily unavailable. Please check back shortly.
        </p>
      </div>
    );
  }

  const c = fearGreedColor(fg.value);
  return (
    <div className="rounded-xl2 border border-line bg-paper p-6 shadow-card">
      <h2 className="text-lg font-semibold">Crypto Fear &amp; Greed Index</h2>
      <div className="mt-4 flex items-center gap-5">
        <div
          className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-cream ring-8 ${c.ring}`}
        >
          <span className={`text-3xl font-bold ${c.text}`}>{fg.value}</span>
        </div>
        <div>
          <div className={`text-xl font-bold ${c.text}`}>{fg.label}</div>
          <p className="mt-1 text-sm text-muted">
            A 0–100 gauge of crypto market sentiment. Low = fear, high = greed.
          </p>
        </div>
      </div>
      {/* scale bar */}
      <div className="mt-5">
        <div className="h-2 w-full overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-amber to-green-500" />
        <div className="mt-1 flex justify-between text-[11px] text-muted">
          <span>Extreme fear</span>
          <span>Neutral</span>
          <span>Extreme greed</span>
        </div>
      </div>
    </div>
  );
}
