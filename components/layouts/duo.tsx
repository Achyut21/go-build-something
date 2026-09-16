import { Frame, Heading, Intro, Note } from "@/components/frame";
import { cn } from "@/lib/utils";

export function DuoSlide({
  heading,
  intro,
  panels,
  note,
}: {
  heading: string;
  intro?: string;
  panels: { title: string; body: string }[];
  note?: string;
}) {
  return (
    <Frame anchor="center">
      <Heading>{heading}</Heading>
      {intro ? (
        <div className="mt-6">
          <Intro>{intro}</Intro>
        </div>
      ) : null}
      <ol className="mt-8 grid gap-7 md:grid-cols-2 md:gap-0">
        {panels.map((panel, i) => (
          <li
            key={panel.title}
            className={cn(
              i === 0
                ? "md:pr-12"
                : "border-t border-chalk/12 pt-6 md:border-t-0 md:border-l md:border-chalk/12 md:pl-12 md:pt-0",
            )}
          >
            <span
              aria-hidden
              className="font-display text-display-m font-semibold tabular-nums text-sodium"
            >
              {i + 1}
            </span>
            <h2 className="mt-1 font-display text-display-m font-semibold text-balance">
              {panel.title}
            </h2>
            <p className="mt-3 max-w-[34ch] text-body-l text-pretty text-smoke">
              {panel.body}
            </p>
          </li>
        ))}
      </ol>
      {note ? <Note className="mt-10">{note}</Note> : null}
    </Frame>
  );
}
