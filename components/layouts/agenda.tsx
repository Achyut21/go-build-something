import { Frame, Heading, Intro, Note } from "@/components/frame";
import { cn } from "@/lib/utils";

export function AgendaSlide({
  heading,
  intro,
  items,
  note,
}: {
  heading: string;
  intro?: string;
  items: string[];
  note?: string;
}) {
  const twoUp = items.length > 4;

  return (
    <Frame anchor="center">
      <Heading>{heading}</Heading>
      {intro ? <div className="mt-6">
        <Intro>{intro}</Intro>
      </div> : null}
      <ol
        className={cn(
          "mt-8 grid gap-x-16 gap-y-4",
          twoUp && "sm:grid-flow-col sm:grid-rows-[repeat(3,min-content)]",
        )}
      >
        {items.map((item, i) => (
          <li key={item} className="grid grid-cols-[2.25rem_1fr] items-baseline">
            <span
              aria-hidden
              className="font-display text-body-m font-semibold tabular-nums text-sodium"
            >
              {i + 1}
            </span>
            <span className="font-display text-display-m font-medium text-balance">
              {item}
            </span>
          </li>
        ))}
      </ol>
      {note ? <Note className="mt-10">{note}</Note> : null}
    </Frame>
  );
}
