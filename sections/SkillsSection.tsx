import { skillGroups } from "@/data/content";

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-line pt-10 pb-20 sm:pt-12 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-display text-4xl font-bold tracking-[-0.02em] text-ink sm:text-5xl">
          Skills
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-card border border-line-strong bg-surface p-6"
            >
              <h3 className="font-mono text-[12px] tracking-[0.1em] text-ink-subtle uppercase">
                {group.label}
              </h3>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="inline-flex items-center rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-[12px] leading-none text-ink-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}