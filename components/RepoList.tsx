"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";

interface GhRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  fork: boolean;
  archived: boolean;
  topics?: string[];
  pushed_at: string | null;
}

type Status = "loading" | "ready" | "error";

const ENDPOINT =
  "https://api.github.com/users/RyanFernandes23/repos?per_page=100&sort=updated&direction=desc&type=owner";

const FILTER_PARAM = "filter";
const MAX_FILTERS = 6;

const dateFormat = new Intl.DateTimeFormat("en", {
  month: "short",
  year: "numeric",
});

/**
 * Repositories are read from the public GitHub API at runtime. If that call
 * fails there is deliberately no invented fallback list — the two
 * repositories below are shown instead, because they are already
 * independently verified elsewhere on the page.
 */
export function RepoList() {
  const [repos, setRepos] = useState<GhRepo[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [filter, setFilter] = useState<string | null>(null);

  /* Load, and keep the language filter in the URL so a filtered view is
     shareable and survives a reload. The initial filter is read after the
     request settles — the chips have nothing to filter until then. */
  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const response = await fetch(ENDPOINT, {
          signal: controller.signal,
          headers: { Accept: "application/vnd.github+json" },
        });

        if (!response.ok) throw new Error(`GitHub responded ${response.status}`);

        const payload: unknown = await response.json();
        if (!Array.isArray(payload)) throw new Error("Unexpected payload");

        setRepos(
          (payload as GhRepo[])
            .filter((repo) => !repo.fork && !repo.archived)
            .slice(0, 12),
        );
        setStatus("ready");

        const initial = new URLSearchParams(window.location.search).get(FILTER_PARAM);
        if (initial) setFilter(initial);
      } catch (error) {
        if ((error as Error).name === "AbortError") return;
        setStatus("error");
      }
    })();

    return () => controller.abort();
  }, []);

  const applyFilter = (next: string | null) => {
    setFilter(next);
    const url = new URL(window.location.href);
    if (next) url.searchParams.set(FILTER_PARAM, next);
    else url.searchParams.delete(FILTER_PARAM);
    window.history.replaceState(null, "", url);
  };

  const languages = useMemo(() => {
    const counts = new Map<string, number>();
    for (const repo of repos) {
      if (!repo.language) continue;
      counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
    }
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, MAX_FILTERS)
      .map(([language]) => language);
  }, [repos]);

  const visible = useMemo(
    () => (filter ? repos.filter((repo) => repo.language === filter) : repos),
    [repos, filter],
  );

  if (status === "loading") {
    return (
      <div aria-live="polite" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <span className="sr-only">Loading repositories…</span>
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            aria-hidden="true"
            className="h-[104px] rounded-card border border-line bg-surface/50"
          />
        ))}
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="rounded-card border border-line bg-surface/60 p-6">
        <p className="text-[14.5px] text-fg-muted">
          Live repository data isn’t available right now. Everything published is
          still on GitHub.
        </p>
        <a
          href="https://github.com/RyanFernandes23/Pesto-for-fieldmotion-backend"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 font-mono text-[12px] text-fg-muted transition-colors duration-200 hover:text-accent"
        >
          Pesto-for-fieldmotion-backend <span aria-hidden="true">→</span>
        </a>
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <div className="rounded-card border border-line bg-surface/60 p-6">
        <p className="text-[14.5px] text-fg-muted">
          No public repositories to show yet.
        </p>
        <a
          href="https://github.com/RyanFernandes23"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 font-mono text-[12px] text-fg-muted transition-colors duration-200 hover:text-accent"
        >
          github.com/RyanFernandes23 <span aria-hidden="true">→</span>
        </a>
      </div>
    );
  }

  return (
    <div>
      {languages.length > 1 ? (
        <div className="mb-5 flex flex-wrap items-center gap-1.5">
          <FilterChip active={filter === null} onClick={() => applyFilter(null)}>
            All
          </FilterChip>
          {languages.map((language) => (
            <FilterChip
              key={language}
              active={filter === language}
              onClick={() => applyFilter(filter === language ? null : language)}
            >
              {language}
            </FilterChip>
          ))}
        </div>
      ) : null}

      <p aria-live="polite" className="sr-only">
        {visible.length} repositories shown
        {filter ? ` filtered by ${filter}` : ""}.
      </p>

      {visible.length === 0 ? (
        <div className="rounded-card border border-line bg-surface/60 p-6">
          <p className="text-[14.5px] text-fg-muted">
            Nothing published in {filter} yet.
          </p>
          <button
            type="button"
            onClick={() => applyFilter(null)}
            className="mt-4 rounded-lg border border-line-strong bg-surface-2/70 px-3.5 py-2 text-[13px] text-fg transition-colors duration-200 hover:border-fg-subtle hover:bg-surface-3"
          >
            Clear Filter
          </button>
        </div>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((repo) => (
            <li key={repo.id}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift group flex h-full flex-col rounded-card border border-line bg-surface/60 p-5"
              >
                <span translate="no" className="font-mono text-[13px] text-fg">
                  {repo.name}
                </span>
                <span className="mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-fg-muted">
                  {repo.description ?? "No description provided."}
                </span>
                <span className="mt-auto flex items-center gap-3 pt-4 font-mono text-[10.5px] text-fg-subtle">
                  {repo.language ? (
                    <span className="flex items-center gap-1.5">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-accent/70"
                      />
                      {repo.language}
                    </span>
                  ) : null}
                  {repo.pushed_at ? (
                    <span>{dateFormat.format(new Date(repo.pushed_at))}</span>
                  ) : null}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3 py-1.5 font-mono text-[11px] tracking-wide transition-[color,background-color,border-color] duration-200 touch-manipulation",
        active
          ? "border-accent/40 bg-accent/[0.10] text-fg"
          : "border-line-strong bg-surface-2/50 text-fg-subtle hover:border-fg-subtle hover:text-fg-muted",
      )}
    >
      {children}
    </button>
  );
}
