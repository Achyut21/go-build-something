import { Frame, Heading } from "@/components/frame";

export function StackSlide({
  heading,
  items,
}: {
  heading: string;
  items: { text: string; sub?: string }[];
}) {
  return (
    <Frame anchor="center">
      <Heading size="m" className="text-sodium">
        {heading}
      </Heading>
      <ul className="mt-7 border-t border-chalk/12">
        {items.map((item) => (
          <li key={item.text} className="border-b border-chalk/12 py-4 sm:py-5">
            <p className="font-display text-display-m font-semibold text-balance">
              {item.text}
            </p>
            {item.sub ? (
              <p className="mt-1.5 max-w-[54ch] text-body-m text-pretty text-smoke">
                {item.sub}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </Frame>
  );
}
