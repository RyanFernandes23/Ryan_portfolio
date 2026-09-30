import { cn } from "@/lib/cn";
import type { ProjectTag } from "@/types/content";
import { Tag } from "./Tag";

export function TagRow({
  tags,
  className,
}: {
  tags: ProjectTag[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {tags.map((tag) => (
        <li key={tag}>
          <Tag label={tag} />
        </li>
      ))}
    </ul>
  );
}

/**
 * The stack. Omitted entirely for projects whose stack is not publicly
 * confirmed, rather than padded with plausible guesses.
 * Displayed with accent color and larger font for high visibility.
 */
export function TechRow({ items, className }: { items: string[]; className?: string }) {
  if (items.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap items-center gap-x-2 gap-y-1.5", className)}>
      {items.map((item, i) => (
        <li key={item} className="flex items-center gap-2">
          {i > 0 ? (
            <span aria-hidden="true" className="text-line-strong">
              ·
            </span>
          ) : null}
          <span translate="no" className="font-mono text-[13px] font-medium text-accent">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
