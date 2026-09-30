import type { Metadata } from "next";
import Link from "next/link";
import { links, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "That page doesn’t exist on this site.",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center px-5 py-24 sm:px-8">
      <p className="font-mono text-[11px] tracking-[0.18em] text-fg-subtle uppercase">
        <span className="text-accent">404</span> / Not Found
      </p>

      <h1 className="mt-5 text-4xl leading-tight font-medium tracking-[-0.03em] text-balance text-fg sm:text-5xl">
        This route doesn’t resolve.
      </h1>

      <p className="mt-5 text-[15px] leading-relaxed text-fg-muted">
        The page you asked for isn’t here. Everything published lives on the
        single-page portfolio — head back, or reach out directly.
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center rounded-lg border border-accent/40 bg-accent/[0.10] px-5 text-sm font-medium text-fg transition-colors duration-200 hover:bg-accent/[0.18] hover:border-accent/70"
        >
          Back to Portfolio
        </Link>
        <a
          href={`mailto:${links.email}`}
          className="inline-flex h-11 items-center rounded-lg border border-line-strong bg-surface-2/70 px-5 text-sm font-medium text-fg-muted transition-colors duration-200 hover:border-fg-subtle hover:bg-surface-3 hover:text-fg"
        >
          Email {site.shortName}
        </a>
      </div>
    </section>
  );
}
