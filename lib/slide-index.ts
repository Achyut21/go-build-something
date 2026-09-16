import { slides } from "@/content/slides";

const last = slides.length - 1;
const listeners = new Set<() => void>();

function clamp(n: number) {
  return Math.min(Math.max(n, 0), last);
}

export function readIndex() {
  const asked = Number(new URLSearchParams(window.location.search).get("s"));
  return Number.isInteger(asked) ? clamp(asked - 1) : 0;
}

export function subscribeIndex(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("popstate", listener);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("popstate", listener);
  };
}

export function moveTo(next: number) {
  window.history.replaceState(null, "", `?s=${clamp(next) + 1}`);
  for (const listener of listeners) listener();
}

export function moveBy(step: number) {
  moveTo(readIndex() + step);
}
