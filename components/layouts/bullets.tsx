import type { BulletFrame } from "@/content/slides";
import { Frame, Heading, Intro, Marker, Note } from "@/components/frame";
import { RichText } from "@/components/rich-text";
import { cn } from "@/lib/utils";

function List({ items, twoUp }: { items: string[]; twoUp: boolean }) {
  return (
    <ul
      className={cn(
        "flex flex-col gap-4",
        twoUp &&
          "lg:grid lg:grid-flow-col lg:grid-rows-[repeat(3,min-content)] lg:gap-x-14",
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className="grid max-w-[50ch] grid-cols-[1.4em_1fr] text-body-l text-pretty"
        >
          <Marker />
          <span>
            <RichText>{item}</RichText>
          </span>
        </li>
      ))}
    </ul>
  );
}

export function BulletsSlide({
  heading,
  frame,
  intro,
  items,
  note,
}: {
  heading: string;
  frame: BulletFrame;
  intro?: string;
  items: string[];
  note?: string;
}) {
  if (frame === "split") {
    return (
      <Frame anchor="center">
        <div className="grid gap-7 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-0">
          <Heading className="max-w-none md:pr-12">{heading}</Heading>
          <div className="md:border-l md:border-chalk/12 md:pl-12">
            {intro ? (
              <div className="mb-5">
                <Intro>{intro}</Intro>
              </div>
            ) : null}
            <List items={items} twoUp={false} />
            {note ? <Note className="mt-8">{note}</Note> : null}
          </div>
        </div>
      </Frame>
    );
  }

  return (
    <Frame anchor="center">
      <Heading>{heading}</Heading>
      {intro ? (
        <div className="mt-6">
          <Intro>{intro}</Intro>
        </div>
      ) : null}
      <div className="mt-8">
        <List items={items} twoUp={items.length >= 5} />
      </div>
      {note ? <Note className="mt-9">{note}</Note> : null}
    </Frame>
  );
}
