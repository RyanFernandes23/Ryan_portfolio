import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "quiet";
type Size = "sm" | "md";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap " +
  "transition-[color,background-color,border-color,transform] duration-200 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent " +
  "touch-manipulation";

const variants: Record<Variant, string> = {
  primary:
    "border border-accent/40 bg-accent/[0.10] text-fg hover:bg-accent/[0.18] hover:border-accent/70",
  secondary:
    "border border-line-strong bg-surface-2/70 text-fg-muted hover:text-fg hover:border-fg-subtle hover:bg-surface-3",
  quiet: "border border-transparent text-fg-muted hover:text-fg hover:bg-surface-2/70",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[13px]",
  md: "h-11 px-5 text-sm",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Opens in a new tab with the correct rel. */
  external?: boolean;
  className?: string;
}

/** Trailing arrow that nudges on hover. Decorative. */
function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform duration-200 group-hover:translate-x-0.5"
    >
      →
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external ? <Arrow /> : null}
    </a>
  );
}
