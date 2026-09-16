"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const IDLE_MS = 2200;

function GridGlyph() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden className="size-3 fill-current">
      <rect width="5" height="5" />
      <rect x="7" width="5" height="5" />
      <rect y="7" width="5" height="5" />
      <rect x="7" y="7" width="5" height="5" />
    </svg>
  );
}

export function Rail({
  index,
  total,
  flood,
  onOverview,
  onShortcuts,
}: {
  index: number;
  total: number;
  flood: boolean;
  onOverview: () => void;
  onShortcuts: () => void;
}) {
  const [awake, setAwake] = useState(false);

  useEffect(() => {
    let timer = 0;

    const wake = () => {
      setAwake(true);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setAwake(false), IDLE_MS);
    };

    window.addEventListener("pointermove", wake, { passive: true });
    window.addEventListener("pointerdown", wake, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("pointermove", wake);
      window.removeEventListener("pointerdown", wake);
    };
  }, []);

  const buttonTone = flood
    ? "text-ink/60 hover:bg-ink/10 hover:text-ink"
    : "text-smoke hover:bg-slab hover:text-chalk";

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-0 z-30",
        flood && "[--focus:var(--color-ink)]",
      )}
    >
      <div className="flex items-center justify-end px-gutter pb-3.5">
        <span
          aria-hidden
          className={cn(
            "font-display text-micro tabular-nums",
            flood ? "text-ink/55" : "text-smoke/70",
          )}
        >
          {index + 1}/{total}
        </span>
        <div
          data-awake={awake}
          data-chrome
          className="fade ml-2.5 flex items-center gap-0.5 opacity-0 focus-within:pointer-events-auto focus-within:opacity-100 data-[awake=true]:pointer-events-auto data-[awake=true]:opacity-100"
        >
          <Button
            size="icon"
            className={buttonTone}
            onClick={onOverview}
            aria-label="Show every slide"
          >
            <GridGlyph />
          </Button>
          <Button
            size="icon"
            className={buttonTone}
            onClick={onShortcuts}
            aria-label="Show keyboard shortcuts"
          >
            ?
          </Button>
        </div>
      </div>
      <Progress
        value={((index + 1) / total) * 100}
        getValueLabel={() => `Slide ${index + 1} of ${total}`}
        aria-label="Deck progress"
        className={flood ? "bg-ink/20" : "bg-chalk/12"}
        indicatorClassName={flood ? "bg-ink" : "bg-ultra"}
      />
    </div>
  );
}
