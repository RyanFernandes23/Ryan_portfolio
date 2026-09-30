import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  /** Monospace eyebrow, e.g. "01 / Projects". */
  eyebrow: string;
  title: string;
  /**
   * Reserved for lines that carry real information. Most sections rely on the
   * heading itself as the signpost rather than a paragraph beneath it.
   */
  description?: ReactNode;
  className?: string;
  id?: string;
  align?: "left" | "center";
}

/**
 * The heading is the section's signpost, so it is set large and given room to
 * breathe. A paragraph is optional and used only when it adds something the
 * heading cannot say itself.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  id,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className="font-mono text-[14px] tracking-[0.18em] text-fg-subtle uppercase">
        <span className="text-accent">{eyebrow}</span>
      </p>

      <h2
        id={id}
        className="mt-5 text-[2.1rem] leading-[1.06] font-medium tracking-[-0.035em] text-balance text-fg sm:text-[2.75rem] lg:text-6xl"
      >
        {title}
      </h2>

      {description ? (
        <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-pretty text-fg-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}