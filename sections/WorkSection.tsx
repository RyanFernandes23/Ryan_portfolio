import { experience } from "@/data/content";

export function WorkSection() {
  return (
    <section id="work" className="border-t border-line pt-10 pb-20 sm:pt-12 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-display text-4xl font-bold tracking-[-0.02em] text-ink sm:text-5xl">
          Experience
        </h2>
        <ol className="mt-14 space-y-12">
          {experience.map((entry) => (
            <li key={entry.id} className="relative rounded-card border border-line-strong bg-surface p-6">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h4 className="text-lg font-medium text-ink">
                  {entry.organisation}
                </h4>
                <p className="font-mono text-[13px] text-ink-subtle">
                  {entry.role}
                </p>
              </div>
              <p className="mt-1 font-mono text-[12px] text-ink-subtle">
                {entry.start} — {entry.end}
              </p>
              <ul className="mt-4 space-y-2">
                {entry.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-[15px] leading-relaxed text-ink-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
              {entry.links && entry.links.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-4">
                  {entry.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent transition-colors duration-200 hover:text-accent-deep"
                    >
                      {link.label}
                      <span aria-hidden="true">→</span>
                    </a>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
