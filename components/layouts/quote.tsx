import { Frame } from "@/components/frame";
import { RichText } from "@/components/rich-text";

export function QuoteSlide({
  heading,
  quote,
  example,
  notes,
}: {
  heading: string;
  quote: string;
  example?: { label: string; text: string };
  notes: string[];
}) {
  return (
    <Frame anchor="center" flood>
      <h1 className="max-w-[34ch] font-display text-display-m font-semibold text-ink/60">
        {heading}
      </h1>
      <blockquote className="mt-6 max-w-[30ch] text-display-l text-balance">
        <RichText>{quote}</RichText>
      </blockquote>
      {example ? (
        <figure className="mt-7 border-l-2 border-ink/25 pl-5 sm:pl-7">
          <figcaption className="font-display text-body-m font-semibold text-ink/70">
            {example.label}
          </figcaption>
          <p className="mt-1 max-w-[38ch] text-display-m text-pretty text-ink/90">
            {example.text}
          </p>
        </figure>
      ) : null}
      <div className="mt-8 flex max-w-[46ch] flex-col gap-2 text-body-l text-pretty text-ink/75">
        {notes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>
    </Frame>
  );
}
