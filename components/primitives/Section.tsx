import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Consistent page rhythm. `scroll-mt` clears the fixed header so in-page
 * anchors never land underneath it.
 */
export function Section({
  id,
  children,
  className,
  divider = true,
  labelledBy,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  divider?: boolean;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("scroll-mt-16", divider && "border-t border-line/70", className)}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
