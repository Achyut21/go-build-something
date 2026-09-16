import { Frame } from "@/components/frame";

export function ClosingSlide({
  line,
  prompt,
}: {
  line: string;
  prompt: string;
}) {
  return (
    <Frame
      anchor="center"
      flood
      footer={
        <p className="font-display text-body-l font-medium text-ink/65">
          {prompt}
        </p>
      }
    >
      <h1 className="max-w-[14ch] font-display text-display-xl font-bold text-balance">
        {line}
      </h1>
    </Frame>
  );
}
