import { Frame } from "@/components/frame";

export function TitleSlide({
  title,
  credentials,
}: {
  title: string;
  credentials: string[];
}) {
  return (
    <Frame anchor="bottom">
      <h1 className="max-w-[17ch] font-display text-display-xl font-bold text-balance">
        {title}
      </h1>
      <ul className="mt-gutter-y flex flex-col gap-y-1.5 border-t border-chalk/15 pt-5 text-body-m sm:flex-row sm:flex-wrap sm:gap-x-14">
        {credentials.map((line, i) => (
          <li
            key={line}
            className={
              i === 0 ? "font-display font-medium text-sodium" : "text-smoke"
            }
          >
            {line}
          </li>
        ))}
      </ul>
    </Frame>
  );
}
