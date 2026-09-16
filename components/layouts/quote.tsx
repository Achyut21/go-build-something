import { Frame } from "@/components/frame";
import { RichText } from "@/components/rich-text";

export function QuoteSlide({
  heading,
  quote,
  notes,
}: {
  heading: string;
  quote: string;
  notes: string[];
}) {
  return (
    <Frame anchor="center" flood>
      <h1 className="max-w-[34ch] font-display text-display-m font-semibold text-ink/60">
        {heading}
      </h1>
      <blockquote className="mt-7 max-w-[30ch] text-display-l text-balance">
        <RichText>{quote}</RichText>
      </blockquote>
      <div className="mt-9 flex max-w-[46ch] flex-col gap-2.5 text-body-l text-pretty text-ink/75">
        {notes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>
    </Frame>
  );
}
