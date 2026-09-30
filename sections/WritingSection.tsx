import { writing } from "@/data/content";
import { links } from "@/data/site";

export function WritingSection() {
  return (
    <section id="writing" className="border-t border-line pt-10 pb-20 sm:pt-12 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-display text-4xl font-bold tracking-[-0.02em] text-ink sm:text-5xl">
          Writing
        </h2>
        <div className="mt-14 space-y-8">
          {writing.map((entry) => (
            <article key={entry.id} className="rounded-card border border-line-strong bg-surface p-6">
              <p className="font-mono text-[11px] tracking-[0.1em] text-ink-subtle uppercase">
                {entry.publication}
              </p>
              <h4 className="mt-2 text-[17px] font-medium leading-snug text-ink">
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-accent"
                >
                  {entry.title}
                </a>
              </h4>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                {entry.blurb}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={links.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-accent transition-colors duration-200 hover:text-accent-deep"
          >
            More on Medium
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
