import type { SlideLink } from "@/content/slides";
import { Frame, LinkRow } from "@/components/frame";

export function ClosingSlide({
  line,
  prompt,
  links,
}: {
  line: string;
  prompt: string;
  links?: SlideLink[];
}) {
  return (
    <Frame
      anchor="center"
      flood
      footer={
        <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
          <p className="font-display text-body-l font-medium text-ink/65">
            {prompt}
          </p>
          {links?.length ? <LinkRow links={links} flood /> : null}
        </div>
      }
    >
      <h1 className="max-w-[14ch] font-display text-display-xl font-bold text-balance">
        {line}
      </h1>
    </Frame>
  );
}
