"use client";

import { useEffect, useState } from "react";
import { ProfileAvatar } from "@/components/ProfilePhoto";
import { cn } from "@/lib/cn";
import { links, navSections, site, trackedSections } from "@/data/site";

const HEADER_H = 64;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(navSections[0].id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > 12);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const line = window.scrollY + HEADER_H + 96;

      // Resolved in document order rather than nav order, so the highlighted
      // link is always correct even when the two sequences differ.
      const ordered: { id: string; top: number }[] = [];
      for (const section of trackedSections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        ordered.push({ id: section.id, top: el.getBoundingClientRect().top + window.scrollY });
      }
      ordered.sort((a, b) => a.top - b.top);

      if (ordered.length === 0) return;

      let current = ordered[0].id;
      for (const entry of ordered) {
        if (entry.top <= line) current = entry.id;
      }

      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 24;
      if (atBottom) current = ordered[ordered.length - 1].id;

      setActive(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Escape closes the mobile menu, and the menu cannot outlive the viewport
  // that shows it.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const query = window.matchMedia("(min-width: 768px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    query.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      query.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        "border-b",
        scrolled || open
          ? "border-line bg-bg/80 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5 sm:px-8">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2.5 rounded-md font-medium tracking-[-0.01em]"
        >
          <ProfileAvatar className="h-8 w-8" />
          <span className="text-[15px] text-ink">{site.name}</span>
        </a>

        <nav aria-label="Sections" className="ml-2 hidden md:block">
          <ul className="flex items-center gap-1">
            {navSections.map((section) => {
              const isActive = active === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative block rounded-md px-3 py-2 text-[15px] transition-colors duration-200",
                      isActive
                        ? "text-ink"
                        : "text-ink-subtle hover:text-ink-muted",
                    )}
                  >
                    {section.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3 -bottom-px h-px origin-left bg-accent transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-2 text-[15px] text-ink-subtle transition-colors duration-200 hover:text-ink"
          >
            GitHub
          </a>
          <a
            href="#contact"
            aria-current={active === "contact" ? "true" : undefined}
            className={cn(
              "rounded-lg border border-ink px-3.5 py-2 text-[15px] text-ink transition-colors duration-200",
              active === "contact" ? "bg-bg-warm" : "hover:bg-bg-warm",
            )}
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line-strong text-ink-muted transition-colors duration-200 hover:text-ink md:hidden"
        >
          <span aria-hidden="true" className="relative block h-3 w-4">
            <span
              className={cn(
                "absolute left-0 block h-px w-full bg-current transition-transform duration-300",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 block h-px w-full bg-current transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-px w-full bg-current transition-transform duration-300",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-bg md:hidden"
        >
          <nav aria-label="Sections" className="px-5 py-4">
            <ul className="flex flex-col">
              {navSections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-line/70 py-3.5 text-[16px] text-ink-muted transition-colors duration-200 hover:text-ink"
                  >
                    {section.label}
                    <span
                      aria-hidden="true"
                      className="font-mono text-[11px] text-ink-subtle"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex gap-2 pb-2">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-lg border border-line-strong px-3 py-2.5 text-center text-[15px] text-ink"
              >
                GitHub
              </a>
              <a
                href={`mailto:${links.email}`}
                className="flex-1 rounded-lg border border-line-strong px-3 py-2.5 text-center text-[15px] text-ink"
              >
                Email
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
