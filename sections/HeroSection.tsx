import { ProfilePortrait } from "@/components/ProfilePhoto";
import { links, site } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-5 pt-12 pb-16 sm:px-8 sm:pt-16 sm:pb-24">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <p className="font-mono text-[13px] tracking-[0.12em] text-ink-subtle uppercase">
              {site.role}
            </p>

            <h1 className="mt-6 font-display text-[2.8rem] leading-[1.08] font-medium tracking-[-0.02em] text-ink sm:text-6xl lg:text-[4.2rem]">
              {site.greeting}
            </h1>

            <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-ink-muted">
              {site.lead}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-[15px] font-medium text-bg transition-colors duration-200 hover:bg-accent"
              >
                GitHub
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <nav aria-label="Elsewhere" className="mt-10">
              <ul className="flex items-center gap-5 text-[14px]">
                {[
                  { label: "LinkedIn", href: links.linkedin },
                  { label: "Medium", href: links.medium },
                  { label: "Email", href: `mailto:${links.email}` },
                ].map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      {...(social.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-ink-subtle transition-colors duration-200 hover:text-ink"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-4">
            <div className="mx-auto max-w-[280px] lg:mx-0">
              <ProfilePortrait className="aspect-4/5 w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
