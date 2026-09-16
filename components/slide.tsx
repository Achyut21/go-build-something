import type { Slide as SlideData } from "@/content/slides";
import { AgendaSlide } from "@/components/layouts/agenda";
import { BulletsSlide } from "@/components/layouts/bullets";
import { ClosingSlide } from "@/components/layouts/closing";
import { DoDontSlide } from "@/components/layouts/do-dont";
import { DuoSlide } from "@/components/layouts/duo";
import { ProseSlide } from "@/components/layouts/prose";
import { QuoteSlide } from "@/components/layouts/quote";
import { StackSlide } from "@/components/layouts/stack";
import { TableSlide } from "@/components/layouts/table";
import { TitleSlide } from "@/components/layouts/title";

export function Slide({ slide }: { slide: SlideData }) {
  switch (slide.type) {
    case "title":
      return <TitleSlide {...slide} />;
    case "stack":
      return <StackSlide {...slide} />;
    case "agenda":
      return <AgendaSlide {...slide} />;
    case "bullets":
      return <BulletsSlide {...slide} />;
    case "prose":
      return <ProseSlide {...slide} />;
    case "quote":
      return <QuoteSlide {...slide} />;
    case "table":
      return <TableSlide {...slide} />;
    case "duo":
      return <DuoSlide {...slide} />;
    case "doDont":
      return <DoDontSlide {...slide} />;
    case "closing":
      return <ClosingSlide {...slide} />;
  }
}
