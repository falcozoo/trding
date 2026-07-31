/**
 * Renders a single ModuleBlock (text with inline <strong>, heading, key
 * callout, image, or list). Server component — pure presentation.
 */
import type { ModuleBlock } from "@/lib/courses";

export function Block({ block }: { block: ModuleBlock }) {
  switch (block.kind) {
    case "heading":
      return (
        <h2 className="mt-10 text-2xl font-bold text-ink">{block.text}</h2>
      );

    case "text":
      return (
        <p
          className="mt-4 text-base leading-relaxed text-ink/90 [&_strong]:font-semibold [&_strong]:text-ink"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      );

    case "key":
      return (
        <div className="mt-6 flex gap-3 rounded-xl2 border border-amber/40 bg-amber-soft/60 p-5 shadow-card">
          <span className="mt-0.5 text-lg" aria-hidden>
            💡
          </span>
          <p className="text-base font-medium leading-relaxed text-ink">
            {block.text}
          </p>
        </div>
      );

    case "image":
      return (
        <figure className="mt-8">
          <div className="overflow-hidden rounded-xl2 border border-line bg-paper shadow-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={block.src}
              alt={block.alt}
              className="w-full"
              loading="lazy"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-center text-sm text-muted">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "list":
      return (
        <ul className="mt-4 space-y-2">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-2 text-base leading-relaxed text-ink/90">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );

    default:
      return null;
  }
}
