"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const shortcuts: { action: string; keys: string[] }[] = [
  { action: "Next slide", keys: ["→", "↓", "Space", "Page Down"] },
  { action: "Previous slide", keys: ["←", "↑", "Page Up"] },
  { action: "First or last slide", keys: ["Home", "End"] },
  { action: "Every slide at once", keys: ["O"] },
  { action: "Fullscreen", keys: ["F"] },
  { action: "This list", keys: ["?"] },
  { action: "Close", keys: ["Esc"] },
];

export function Shortcuts({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="justify-center">
        <div className="mx-auto w-full max-w-[42rem]">
          <DialogTitle>Keyboard</DialogTitle>
          <dl className="mt-7 border-t border-chalk/12">
            {shortcuts.map((shortcut) => (
              <div
                key={shortcut.action}
                className="flex items-baseline justify-between gap-8 border-b border-chalk/12 py-3"
              >
                <dt className="text-body-m text-smoke">{shortcut.action}</dt>
                <dd className="flex shrink-0 flex-wrap justify-end gap-1.5">
                  {shortcut.keys.map((key) => (
                    <kbd
                      key={key}
                      className="rounded-[3px] border border-chalk/20 bg-slab px-2 py-1 font-display text-micro font-medium text-chalk"
                    >
                      {key}
                    </kbd>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-[52ch] text-body-m text-pretty text-smoke">
            Clicking or tapping the right half of the screen goes forward, the
            left half goes back. On a phone you can also swipe sideways.
          </p>
          <DialogClose asChild>
            <Button variant="outline" className="mt-7">
              Close
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
