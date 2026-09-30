import { ProfilePortrait } from "@/components/ProfilePhoto";
import { ButtonLink } from "@/components/primitives/ButtonLink";
import { links, site } from "@/data/site";

/**
 * Social destinations. All four are live.
 */
const SOCIALS = [
  { label: "LinkedIn", href: links.linkedin },
  { label: "Medium", href: links.medium },
  { label: "Email", href: `mailto:${links.email}` },
] as const;

/** Areas of focus, taken directly from the stated positioning. */
const FOCUS = ["AI Agents", "Machine Learning", "Backend Systems", "Full-Stack Products"];

export function Hero() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-7">
        <StatusPill />

        <h1 className="mt-7 text-[2.6rem] leading-[1.04] font-medium tracking-[-0.035em] text-balance sm:text-6xl lg:text-[3.9rem]">
          <span className="text-fg-muted">I build AI systems </span>
          <span className="text-fg">that actually do things.</span>
        </h1>

        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-pretty text-fg-muted sm:text-lg sm:leading-relaxed">
          Software engineer focused on AI agents, machine learning, backend
          systems, and full-stack products.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <ButtonLink href="#projects">View Projects</ButtonLink>
          <ButtonLink href={links.github} external variant="secondary">
            GitHub
          </ButtonLink>
        </div>

        <nav aria-label="Elsewhere" className="mt-8">
          <ul className="flex items-center gap-1 text-[14px]">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  {...(social.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="rounded-md px-2.5 py-1.5 text-fg-subtle transition-colors duration-200 hover:text-fg"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="lg:col-span-5">
        <PortraitPanel />
      </div>
    </div>
  );
}

function PortraitPanel() {
  return (
    <div className="mx-auto max-w-[320px] lg:mx-0 lg:pl-2">
      <ProfilePortrait className="aspect-4/5 w-full" />

      {/* Focus areas, stated as facts rather than left for the copy to imply. */}
      <div className="mt-5 border-t border-line pt-5">
        <p className="font-mono text-[10px] tracking-[0.16em] text-fg-subtle uppercase">
          Focus
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
          {FOCUS.map((area) => (
            <li
              key={area}
              className="flex items-center gap-1.5 font-mono text-[13px] text-fg-muted"
            >
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent/70" />
              {area}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StatusPill() {
  return (
    <p className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface-2/60 py-1.5 pr-4 pl-3">
      <span
        data-status-dot
        aria-hidden="true"
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-ok"
      />
      <span className="font-mono text-[12px] leading-none tracking-[0.1em] text-fg-muted uppercase">
        {site.availability}
      </span>
    </p>
  );
}