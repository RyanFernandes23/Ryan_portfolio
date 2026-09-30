import { cn } from "@/lib/cn";
import type { Metric } from "@/types/content";

/**
 * Real, documented numbers only. Nothing here is estimated or decorative —
 * if a project has no verified metric, the strip is simply absent.
 */
export function MetricRow({
  metrics,
  columns = 4,
  className,
}: {
  metrics: Metric[];
  columns?: 3 | 4;
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6",
        columns === 4 ? "sm:grid-cols-4" : "sm:grid-cols-3",
        className,
      )}
    >
      {metrics.map((metric) => (
        <div key={metric.label} className="min-w-0">
          <dt className="sr-only">{metric.label}</dt>
          <dd>
            <span className="block font-mono text-2xl leading-none font-medium tracking-tight text-fg tabular-nums sm:text-[28px]">
              {metric.value}
            </span>
            <span className="mt-2 block font-mono text-[12px] leading-tight tracking-[0.12em] text-fg-subtle uppercase">
              {metric.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
