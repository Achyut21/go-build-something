import { Frame, Heading } from "@/components/frame";
import { RichText } from "@/components/rich-text";

export function ProseSlide({
  heading,
  paragraphs,
  tokensLabel,
  tokens,
}: {
  heading: string;
  paragraphs: string[];
  tokensLabel?: string;
  tokens?: string[];
}) {
  return (
    <Frame anchor="center">
      <Heading>{heading}</Heading>
      <div className="mt-8 flex max-w-[56ch] flex-col gap-4 text-body-l text-pretty">
        {paragraphs.map((paragraph, i) => (
          <p key={paragraph} className={i === 0 ? "text-smoke" : undefined}>
            <RichText>{paragraph}</RichText>
          </p>
        ))}
      </div>
      {tokens?.length ? (
        <div className="mt-10 border-t border-chalk/12 pt-6">
          {tokensLabel ? (
            <p className="mb-4 text-body-m text-smoke">{tokensLabel}</p>
          ) : null}
          <ul className="flex flex-wrap gap-2.5">
            {tokens.map((token) => (
              <li
                key={token}
                className="rounded-[3px] border border-chalk/18 bg-slab/70 px-3.5 py-1.5 font-display text-body-m font-medium"
              >
                {token}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Frame>
  );
}
