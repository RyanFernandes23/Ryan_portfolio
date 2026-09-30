import { MetricRow } from "@/components/primitives/MetricRow";
import { ProjectLinks } from "@/components/primitives/ProjectLinks";
import { TagRow, TechRow } from "@/components/primitives/Rows";
import { Reveal } from "@/components/primitives/Reveal";
import type { Project } from "@/types/content";

interface ProjectCardProps {
  project: Project;
  /** Display index, e.g. "03". */
  index: string;
  delay?: number;
}

/** Compact treatment for the 2-up grid. */
export function ProjectCard({ project, index, delay = 0 }: ProjectCardProps) {
  const headingId = `${project.id}-heading`;

  return (
    <Reveal
      delay={delay}
      className="card-lift group h-full rounded-card border border-line bg-surface/60 p-6 sm:p-7"
    >
      <article aria-labelledby={headingId} className="flex h-full flex-col">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[18px] font-semibold tracking-[0.08em] text-accent">{index}</span>
          <span aria-hidden="true" className="h-px flex-1 bg-line" />
        </div>

        {/* What kind of engineering this is, before any prose. */}
        <p className="mt-4 inline-block rounded bg-orange-500/10 px-2 py-1 font-mono text-[12px] leading-tight tracking-[0.14em] text-orange-400 uppercase">
          {project.category}
        </p>

        <h3
          id={headingId}
          className="mt-2.5 text-xl font-medium tracking-[-0.02em] text-balance text-fg"
        >
          {project.name}
        </h3>
        {project.title ? (
          <p className="mt-1 font-mono text-[11.5px] leading-snug text-fg-subtle">
            {project.title}
          </p>
        ) : null}

        <p className="mt-3.5 text-[15.5px] leading-relaxed text-pretty text-fg-muted">
          {project.summary}
        </p>

        {project.capabilities && project.capabilities.length > 0 ? (
          <ul className="mt-6 space-y-2">
            {project.capabilities.map((capability) => (
              <li key={capability} className="flex gap-3 text-[14.5px] leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-[9px] h-px w-3 shrink-0 bg-accent/60"
                />
                <span className="text-fg-muted">{capability}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {project.metrics && project.metrics.length > 0 ? (
          <MetricRow
            metrics={project.metrics}
            columns={project.metrics.length >= 4 ? 4 : 3}
            className="mt-6"
          />
        ) : null}

        <div className="mt-auto pt-7">
          <TagRow tags={project.tags} />
          <TechRow items={project.tech ?? []} className="mt-4" />
          <ProjectLinks links={project.links} className="mt-6" />
        </div>
      </article>
    </Reveal>
  );
}

/* ---------------------------------------------------------------- */
/* Featured / wide treatment                                         */
/* ---------------------------------------------------------------- */

export function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: string;
}) {
  const headingId = `${project.id}-heading`;

  return (
    <Reveal className="rounded-card border border-line bg-surface/60">
      <article aria-labelledby={headingId}>
        <header className="border-b border-line px-6 pt-7 pb-7 sm:px-9 sm:pt-9">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="font-mono text-[18px] font-semibold tracking-[0.08em] text-accent">
              {index}
            </span>
            <span aria-hidden="true" className="hidden h-px flex-1 bg-line sm:block" />
            <TagRow tags={project.tags} />
          </div>

          <p className="mt-5 inline-block rounded bg-orange-500/10 px-2 py-1 font-mono text-[12px] leading-tight tracking-[0.16em] text-orange-400 uppercase">
            {project.category}
          </p>

          <h3
            id={headingId}
            className="mt-3 text-2xl font-medium tracking-[-0.025em] text-balance text-fg sm:text-3xl"
          >
            {project.name}
            {project.title ? (
              <span className="text-fg-subtle"> — {project.title}</span>
            ) : null}
          </h3>

          {project.metrics && project.metrics.length > 0 ? (
            <MetricRow metrics={project.metrics} className="mt-8" />
          ) : null}
        </header>

        <div className="px-6 py-8 sm:px-9 sm:py-9">
          <div className="max-w-2xl">
            {project.body?.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-[15.5px] leading-relaxed text-pretty text-fg-muted"
              >
                {paragraph}
              </p>
            ))}

            {project.capabilities && project.capabilities.length > 0 ? (
              <ul className="mt-7 space-y-2.5">
                {project.capabilities.map((capability) => (
                  <li key={capability} className="flex gap-3 text-[15px] leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-px w-3 shrink-0 bg-accent/60"
                    />
                    <span className="text-fg-muted">{capability}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <TechRow items={project.tech ?? []} className="mt-7" />
            <ProjectLinks links={project.links} className="mt-7" size="md" />

            {project.footnote ? (
              <p className="mt-7 border-l border-line pl-4 text-[12.5px] leading-relaxed text-fg-subtle">
                {project.footnote}
              </p>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
