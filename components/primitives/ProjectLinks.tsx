import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/primitives/ButtonLink";
import type { ProjectLink } from "@/types/content";

export function ProjectLinks({
  links,
  className,
  size = "sm",
}: {
  links: ProjectLink[];
  className?: string;
  size?: "sm" | "md";
}) {
  if (links.length === 0) return null;

  return (
    <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {links.map((link) => (
        <ButtonLink
          key={link.href}
          href={link.href}
          external={link.external}
          size={size}
          variant={size === "md" ? "primary" : "secondary"}
        >
          {link.label}
        </ButtonLink>
      ))}
    </div>
  );
}
