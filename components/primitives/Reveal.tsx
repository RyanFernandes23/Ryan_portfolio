"use client";

import type { ElementType, ReactNode } from "react";
import { useInView } from "@/lib/use-in-view";

interface RevealProps {
  children: ReactNode;
  /** Stagger in milliseconds. */
  delay?: number;
  className?: string;
  as?: ElementType;
}

/**
 * Progressive reveal. The hidden start state lives in CSS and is only applied
 * when `html.js` is present, so with JavaScript disabled every child renders
 * in its final position. Motion is skipped entirely under reduced-motion.
 */
export function Reveal({ children, delay = 0, className, as: Tag = "div" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      data-reveal={inView ? "in" : "out"}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
