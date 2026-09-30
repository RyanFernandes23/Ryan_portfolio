import { links } from "@/data/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-line bg-bg-warm pt-10 pb-20 sm:pt-12 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-[13px] tracking-[0.12em] text-ink-subtle uppercase">
            Contact
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.02em] text-ink sm:text-4xl">
            Have an interesting problem?
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-muted">
            I'm open to software engineering and AI engineering opportunities.
            If you're building something that needs someone who can work across
            the stack, let's talk.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href={`mailto:${links.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-[15px] font-medium text-bg transition-colors duration-200 hover:bg-accent"
          >
            {links.email}
            <span aria-hidden="true">→</span>
          </a>
          <div className="flex items-center gap-5 text-[14px]">
            {[
              { label: "GitHub", href: links.github },
              { label: "LinkedIn", href: links.linkedin },
              { label: "Medium", href: links.medium },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-subtle transition-colors duration-200 hover:text-ink"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
