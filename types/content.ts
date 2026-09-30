/**
 * Shared content types. Project data is fully data-driven so new work can
 * be added by appending one entry to `data/projects.ts`.
 */

export type ProjectTag =
  | "AI AGENT"
  | "ML"
  | "COMPUTER VISION"
  | "BACKEND"
  | "FULL STACK"
  | "SYSTEM DESIGN"
  | "RESEARCH";

/**
 * Tags split by the centre of gravity of the work:
 *  - "ai"     : the project's substance is learned or agentic behaviour.
 *  - "systems" : the project's substance is the machinery around it.
 * Encoded by luminance rather than a second hue, to keep one accent colour.
 */
export type TagTone = "ai" | "systems";

export const TAG_TONE: Record<ProjectTag, TagTone> = {
  "AI AGENT": "ai",
  ML: "ai",
  "COMPUTER VISION": "ai",
  RESEARCH: "ai",
  BACKEND: "systems",
  "FULL STACK": "systems",
  "SYSTEM DESIGN": "systems",
};

export interface Metric {
  value: string;
  label: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  /** Shows the arrow affordance on external destinations. */
  external?: boolean;
}

export type ProjectSize = "featured" | "wide" | "card";

export interface Project {
  id: string;
  name: string;
  title?: string;
  /**
   * What class of engineering this is, stated plainly. Carries the
   * distinction the tags only imply, so a reader knows what they are looking
   * at before they read a line of prose.
   */
  category: string;
  /** One-line description used on cards and as the page's structured data. */
  summary: string;
  /** Long-form paragraph for the featured/wide treatments. */
  body?: string[];
  tags: ProjectTag[];
  metrics?: Metric[];
  capabilities?: string[];
  /** Omitted where the stack is not publicly confirmed. */
  tech?: string[];
  links: ProjectLink[];
  size: ProjectSize;
  /** Discloses what the case study is based on. */
  footnote?: string;
}

export interface ExperienceEntry {
  id: string;
  organisation: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
  links?: ProjectLink[];
}

export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export interface WritingEntry {
  id: string;
  title: string;
  publication: string;
  href: string;
  blurb: string;
}

export interface Principle {
  title: string;
  body: string;
}
