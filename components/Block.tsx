/**
 * Renders a single ModuleBlock (text with inline <strong>, heading, key
 * callout, image, or list). Server component — pure presentation.
 */
import type { ModuleBlock } from "@/lib/courses";
import { MiniQuiz } from "@/components/MiniQuiz";

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

    case "example":
      return (
        <div className="mt-8 rounded-xl2 border border-amber/40 bg-amber-soft/30 p-6 shadow-card">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-lg" aria-hidden>
              📈
            </span>
            <h3 className="text-sm font-bold uppercase tracking-wide text-amber-dark">
              {block.title ?? "Worked example"}
            </h3>
          </div>
          <ol className="space-y-3">
            {block.steps.map((step, i) => (
              <li key={i} className="flex gap-3 text-base leading-relaxed text-ink/90">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span
                  className="[&_strong]:font-semibold [&_strong]:text-ink"
                  dangerouslySetInnerHTML={{ __html: step }}
                />
              </li>
            ))}
          </ol>
        </div>
      );

    case "mistakes":
      return (
        <div className="mt-8 rounded-xl2 border border-red-200 bg-red-50/70 p-6 shadow-card">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-lg" aria-hidden>
              ⚠️
            </span>
            <h3 className="text-sm font-bold uppercase tracking-wide text-red-700">
              {block.title ?? "Common mistakes"}
            </h3>
          </div>
          <ul className="space-y-3">
            {block.items.map((it, i) => (
              <li key={i} className="flex gap-3 text-base leading-relaxed text-ink/90">
                <span className="mt-0.5 shrink-0 text-red-500" aria-hidden>
                  ✕
                </span>
                <span
                  className="[&_strong]:font-semibold [&_strong]:text-ink"
                  dangerouslySetInnerHTML={{ __html: it }}
                />
              </li>
            ))}
          </ul>
        </div>
      );

    case "quiz":
      return (
        <MiniQuiz
          question={block.question}
          options={block.options}
          correct={block.correct}
          explain={block.explain}
        />
      );

    default:
      return null;
  }
}
