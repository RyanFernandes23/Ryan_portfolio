"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal-once viewport observer. `once` latches after the first intersection
 * so animations do not replay on scroll-back, which reads as flicker.
 *
 * All state writes happen inside the observer callback rather than in the
 * effect body, which keeps the hook to a single render on mount.
 */
export function useInView<T extends Element>(
  options: { once?: boolean; rootMargin?: string; threshold?: number } = {},
) {
  const { once = true, rootMargin = "0px 0px -12% 0px", threshold = 0.15 } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Every browser this site targets has IntersectionObserver. Where one is
    // missing, reveal on the next tick rather than leaving content stranded
    // behind a hidden start state.
    if (typeof IntersectionObserver === "undefined") {
      const fallback = setTimeout(() => setInView(true), 0);
      return () => clearTimeout(fallback);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return { ref, inView } as const;
}
