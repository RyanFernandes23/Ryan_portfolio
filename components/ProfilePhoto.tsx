import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Profile photograph.
 *
 * The source is cropped to a tight 4:5 head-and-shoulders portrait centred on
 * the face — framing matters far more than resolution for an avatar.
 */
const SRC = "/ryan-portrait.jpg";
const WIDTH = 420;
const HEIGHT = 525;

export function ProfileAvatar({ className }: { className?: string }) {
  return (
    <Image
      src={SRC}
      /* Decorative here: the name sits immediately beside it, so announcing
         it again would just repeat itself. */
      alt=""
      width={WIDTH}
      height={HEIGHT}
      priority
      sizes="32px"
      className={cn(
        "rounded-full object-cover ring-1 ring-line-strong",
        "object-[50%_22%]",
        className,
      )}
    />
  );
}

export function ProfilePortrait({ className }: { className?: string }) {
  return (
    <Image
      src={SRC}
      alt="Ryan Fernandes, software engineer working on AI systems and backend infrastructure."
      width={WIDTH}
      height={HEIGHT}
      sizes="(min-width: 1024px) 240px, 200px"
      className={cn(
        "rounded-full border border-line object-cover",
        "object-[50%_18%]",
        className,
      )}
    />
  );
}