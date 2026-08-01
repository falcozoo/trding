import { getMarketNews, timeAgo, type NewsItem } from "@/lib/markets";

/** Colour a source tag by bucket, staying within the sober palette. */
function tagClass(source: string): string {
  switch (source) {
    case "Gold":
      return "bg-amber-soft text-amber-dark";
    case "Forex":
      return "bg-cream text-ink";
    case "Oil":
      return "bg-cream text-ink";
    case "Tech":
      return "bg-cream text-ink";
    default:
      return "bg-cream text-ink";
  }
}

/**
 * Live financial news feed (Financial-Juice style): a fast, dated, scrolling
 * stream of market headlines across stocks, tech, gold, forex and oil.
 * Server component, ISR-cached, graceful fallback — never throws.
 */
export async function NewsFeed({
  data,
  limit = 30,
}: {
  data?: NewsItem[] | null;
  limit?: number;
}) {
  const news = data !== undefined ? data : await getMarketNews(limit);

  if (!news || news.length === 0) {
    return (
      <div className="rounded-xl2 border border-line bg-paper p-6 shadow-card">
        <h2 className="text-lg font-semibold">Market newswire</h2>
        <p className="mt-3 text-sm text-muted">
          The newswire is quiet right now. Please check back shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl2 border border-line bg-paper shadow-card">
      <div className="flex items-center justify-between border-b border-line px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <h2 className="text-lg font-semibold">Market newswire</h2>
        </div>
        <span className="text-xs text-muted">Live · updates ~every 15 min</span>
      </div>

      <ul className="max-h-[30rem] divide-y divide-line overflow-y-auto">
        {news.map((n, i) => (
          <li key={`${n.link}-${i}`}>
            <a
              href={n.link}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-start gap-3 px-6 py-3 transition hover:bg-cream"
            >
              <span
                className={`mt-0.5 shrink-0 rounded-md px-2 py-0.5 text-[11px] font-semibold ${tagClass(
                  n.source,
                )}`}
              >
                {n.source}
              </span>
              <span className="flex-1 text-sm leading-snug text-ink">
                {n.title}
              </span>
              <span className="shrink-0 whitespace-nowrap text-xs text-muted">
                {timeAgo(n.publishedAt)}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="border-t border-line px-6 py-3 text-xs text-muted">
        Headlines aggregated from public financial news feeds. Informational
        only, not investment advice.
      </p>
    </div>
  );
}
