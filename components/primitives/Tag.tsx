import { cn } from "@/lib/cn";
import { TAG_TONE, type ProjectTag } from "@/types/content";

/**
 * Project tags are the site's main signal for *what kind* of engineering a
 * project is. Tone encodes the centre of gravity — learned/agentic work picks
 * up the accent, systems work stays neutral — so the tags scan as a system
 * rather than as decoration.
 */
export function Tag({ label, className }: { label: ProjectTag; className?: string }) {
  const tone = TAG_TONE[label];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[10px] leading-none tracking-[0.12em] whitespace-nowrap",
        tone === "ai"
          ? "border-accent-dim bg-accent/[0.07] text-accent"
          : "border-line-strong bg-surface-2/60 text-fg-subtle",
        className,
      )}
    >
      {label}
    </span>
  );
}
