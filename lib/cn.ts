export type ClassValue = string | false | null | undefined;

/** Minimal class joiner. Avoids pulling in clsx for a handful of call sites. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
