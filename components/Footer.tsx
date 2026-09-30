import { copyrightYear, links, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[12px] text-ink-subtle">
            {site.name} © {copyrightYear}
          </p>

          <ul className="flex items-center gap-5">
            {[
              { label: "GitHub", href: links.github },
              { label: "LinkedIn", href: links.linkedin },
              { label: "Medium", href: links.medium },
              { label: "Email", href: `mailto:${links.email}` },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="font-mono text-[12px] text-ink-subtle transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
