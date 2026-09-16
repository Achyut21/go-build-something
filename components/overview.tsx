"use client";

import { useEffect, useRef } from "react";

import { slides } from "@/content/slides";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { slideLabel } from "@/lib/deck";
import { cn } from "@/lib/utils";

export function Overview({
  open,
  index,
  onOpenChange,
  onJump,
}: {
  open: boolean;
  index: number;
  onOpenChange: (open: boolean) => void;
  onJump: (next: number) => void;
}) {
  const current = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    current.current?.scrollIntoView({ block: "nearest" });
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <div className="flex shrink-0 items-baseline justify-between gap-6">
          <DialogTitle>All slides</DialogTitle>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </div>
        <ol className="mt-7 grid min-h-0 flex-1 auto-rows-min grid-cols-2 gap-3 overflow-y-auto pb-1 sm:grid-cols-3 lg:grid-cols-5">
          {slides.map((slide, i) => (
            <li key={slideLabel(slide)}>
              <button
                type="button"
                ref={i === index ? current : undefined}
                onClick={() => onJump(i)}
                aria-current={i === index ? "true" : undefined}
                className={cn(
                  "flex aspect-16/10 w-full flex-col justify-between rounded-[4px] border p-3 text-left transition-colors",
                  i === index
                    ? "border-sodium/70 bg-slab"
                    : "border-chalk/12 bg-slab/40 hover:border-chalk/35 hover:bg-slab",
                )}
              >
                <span
                  className={cn(
                    "font-display text-micro tabular-nums",
                    i === index ? "text-sodium" : "text-smoke",
                  )}
                >
                  {i + 1}
                </span>
                <span className="line-clamp-3 font-display text-[0.95rem] leading-snug font-medium">
                  {slideLabel(slide)}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </DialogContent>
    </Dialog>
  );
}
