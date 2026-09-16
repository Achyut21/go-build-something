import type { Slide } from "@/content/slides";

export function slideLabel(slide: Slide) {
  switch (slide.type) {
    case "title":
      return slide.title;
    case "closing":
      return slide.line;
    default:
      return slide.heading;
  }
}

export function isFlood(slide: Slide) {
  return slide.type === "quote" || slide.type === "closing";
}
