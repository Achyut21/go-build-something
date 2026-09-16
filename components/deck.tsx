"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type PointerEvent as ReactPointerEvent,
} from "react";

import { slides } from "@/content/slides";
import { Backdrop } from "@/components/backdrop";
import { Overview } from "@/components/overview";
import { Rail } from "@/components/rail";
import { Shortcuts } from "@/components/shortcuts";
import { Slide } from "@/components/slide";
import { isFlood, slideLabel } from "@/lib/deck";
import { moveBy, moveTo, readIndex, subscribeIndex } from "@/lib/slide-index";

const total = slides.length;

const SWIPE_PX = 48;
const TAP_PX = 10;

function firstIndex() {
  return 0;
}

function toggleFullscreen() {
  if (document.fullscreenElement) {
    void document.exitFullscreen();
    return;
  }
  void document.documentElement.requestFullscreen();
}

type Panel = "overview" | "shortcuts" | null;

export function Deck() {
  const index = useSyncExternalStore(subscribeIndex, readIndex, firstIndex);
  const [panel, setPanel] = useState<Panel>(null);
  const [backdrop, setBackdrop] = useState(true);
  const stage = useRef<HTMLDivElement>(null);
  const origin = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    stage.current?.style.setProperty("opacity", "1");
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      if (event.key === "?" || (event.key === "/" && event.shiftKey)) {
        event.preventDefault();
        setPanel((open) => (open === "shortcuts" ? null : "shortcuts"));
        return;
      }

      switch (event.key) {
        case "o":
        case "O":
          event.preventDefault();
          setPanel((open) => (open === "overview" ? null : "overview"));
          return;
        case "f":
        case "F":
          event.preventDefault();
          toggleFullscreen();
          return;
        case "b":
        case "B":
          event.preventDefault();
          setBackdrop((on) => !on);
          return;
      }

      if (panel) return;

      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
          event.preventDefault();
          moveBy(1);
          return;
        case " ":
          event.preventDefault();
          moveBy(event.shiftKey ? -1 : 1);
          return;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          event.preventDefault();
          moveBy(-1);
          return;
        case "Home":
          event.preventDefault();
          moveTo(0);
          return;
        case "End":
          event.preventDefault();
          moveTo(total - 1);
          return;
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [panel]);

  const onPointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.button !== 0) return;
    origin.current = { x: event.clientX, y: event.clientY };
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLElement>) => {
    const start = origin.current;
    origin.current = null;

    if (!start || event.button !== 0) return;
    if (event.target instanceof Element && event.target.closest("[data-chrome]")) {
      return;
    }
    if (window.getSelection()?.toString()) return;

    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;

    if (Math.abs(dx) > SWIPE_PX && Math.abs(dx) > Math.abs(dy)) {
      moveBy(dx < 0 ? 1 : -1);
      return;
    }

    if (Math.abs(dx) > TAP_PX || Math.abs(dy) > TAP_PX) return;

    moveBy(event.clientX < window.innerWidth / 2 ? -1 : 1);
  };

  const slide = slides[index];

  const jump = (next: number) => {
    moveTo(next);
    setPanel(null);
  };

  return (
    <main
      className="relative h-dvh w-full overflow-hidden"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <Backdrop hidden={!backdrop} />

      <div
        ref={stage}
        data-stage
        className="fade absolute inset-0 z-10 opacity-0"
      >
        <div key={index} className="slide-enter absolute inset-0">
          <Slide slide={slide} />
        </div>
      </div>

      <Rail
        index={index}
        total={total}
        flood={isFlood(slide)}
        onOverview={() => setPanel("overview")}
        onShortcuts={() => setPanel("shortcuts")}
      />

      <p aria-live="polite" className="sr-only">
        {`Slide ${index + 1} of ${total}. ${slideLabel(slide)}`}
      </p>

      <Overview
        open={panel === "overview"}
        index={index}
        onOpenChange={(open) => setPanel(open ? "overview" : null)}
        onJump={jump}
      />
      <Shortcuts
        open={panel === "shortcuts"}
        onOpenChange={(open) => setPanel(open ? "shortcuts" : null)}
      />
    </main>
  );
}
