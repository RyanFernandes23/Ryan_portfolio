/** Site-wide constants: identity, canonical links, and SEO copy. */

export const site = {
  name: "Ryan Fernandes",
  shortName: "Ryan",
  role: "Software Engineer",
  /** Used in <title> template and structured data. */
  titleDefault: "Ryan Fernandes: AI Systems, Agents & Backend Engineering",
  /** Hero greeting. */
  greeting: "Hi, I'm Ryan.",
  /** The intro. One thought, not a summary. */
  lead: "I build AI systems and the backend underneath them, which mostly means convincing a large model that it isn't always right and building the boring parts that keep it honest. Thanks for stopping by — the work is below.",
  description:
    "Software engineer specialising in AI/ML engineering, agentic AI, LLM applications, and scalable backend systems. Builds AI products end to end, from PyTorch models and MCP tool servers to FastAPIs and Next.js frontends.",
  availability: "Open to software engineering / AI engineering opportunities",
  /**
   * No domain has been published yet. Update this to the live origin when
   * the site is deployed; every absolute URL and the sitemap derive from it.
   */
  url: "https://ryanfernandes.dev",
  locale: "en",
} as const;

export const links = {
  github: "https://github.com/RyanFernandes23",
  medium: "https://medium.com/@ryanferds23",
  linkedin: "https://www.linkedin.com/in/ryan-fernandes-294136231/",
  email: "ryanferds23@gmail.com",
} as const;

/**
 * Displayed in this order, which follows the order sections appear in
 * `app/page.tsx` so the header reads as a map of the page. Contact is not
 * listed here because the header already carries it as the call to action.
 */
export const navSections = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "writing", label: "Writing" },
] as const;

/**
 * Every section the header can highlight, including contact, which is tracked
 * through the call to action rather than a list entry.
 */
export const trackedSections = [
  ...navSections,
  { id: "contact", label: "Contact" },
] as const;

/** Published in the footer. */
export const copyrightYear = 2026;
