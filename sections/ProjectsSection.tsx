import { secondaryProjects, wideProject } from "@/data/projects";
import type { Project } from "@/types/content";

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-line pt-10 pb-20 sm:pt-12 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-display text-4xl font-bold tracking-[-0.02em] text-ink sm:text-5xl">
          Projects
        </h2>
        <div className="mt-14 space-y-20">
          <ProjectEntry project={wideProject} />

          <div className="grid gap-12 sm:grid-cols-2">
            {secondaryProjects.map((project) => (
              <ProjectEntry key={project.id} project={project} compact />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ProjectEntry({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <article className="group rounded-card border border-line-strong bg-surface p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <p className="font-mono text-[12px] tracking-[0.1em] text-ink-subtle uppercase">
          {project.category}
        </p>
      </div>

      <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.015em] text-ink sm:text-3xl">
        {project.name}
        {project.title ? (
          <span className="text-ink-subtle"> — {project.title}</span>
        ) : null}
      </h3>

      <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink-muted">
        {project.summary}
      </p>

      {project.body && !compact ? (
        <div className="mt-6 max-w-2xl space-y-4">
          {project.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="text-[15.5px] leading-relaxed text-ink-muted"
            >
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}

      {project.capabilities && project.capabilities.length > 0 ? (
        <ul className="mt-6 space-y-2">
          {project.capabilities.map((capability) => (
            <li
              key={capability}
              className="flex gap-3 text-[15px] leading-relaxed text-ink-muted"
            >
              <span
                aria-hidden="true"
                className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              {capability}
            </li>
          ))}
        </ul>
      ) : null}

      {project.metrics && project.metrics.length > 0 ? (
        <div className="mt-8 flex flex-wrap gap-8">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <p className="font-display text-2xl font-medium text-ink">
                {metric.value}
              </p>
              <p className="mt-1 text-[13px] text-ink-subtle">{metric.label}</p>
            </div>
          ))}
        </div>
      ) : null}

      {project.tech && project.tech.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-md border border-line px-2.5 py-1 font-mono text-[12px] text-ink-muted"
            >
              {item}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-4">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-accent transition-colors duration-200 hover:text-accent-deep"
          >
            {link.label}
            <span aria-hidden="true">→</span>
          </a>
        ))}
      </div>

      {project.footnote ? (
        <p className="mt-6 border-l-2 border-line pl-4 text-[13px] leading-relaxed text-ink-subtle">
          {project.footnote}
        </p>
      ) : null}
    </article>
  );
}
