import { Frame, Heading, Marker } from "@/components/frame";
import { cn } from "@/lib/utils";

export function DoDontSlide({
  heading,
  columns,
}: {
  heading: string;
  columns: { label: string; mark: "do" | "dont"; items: string[] }[];
}) {
  return (
    <Frame anchor="center">
      <Heading size="m" className="text-smoke">
        {heading}
      </Heading>
      <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-0">
        {columns.map((column, i) => (
          <section
            key={column.label}
            className={cn(
              i === 0
                ? "md:pr-12"
                : "border-t border-chalk/12 pt-7 md:border-t-0 md:border-l md:border-chalk/12 md:pl-12 md:pt-0",
            )}
          >
            <h2
              className={cn(
                "font-display text-display-m font-bold",
                column.mark === "do" ? "text-sodium" : "text-ultra",
              )}
            >
              {column.label}
            </h2>
            <ul className="mt-5 flex flex-col gap-3.5">
              {column.items.map((item) => (
                <li
                  key={item}
                  className="grid max-w-[40ch] grid-cols-[1.4em_1fr] text-body-l text-pretty"
                >
                  <Marker kind={column.mark} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Frame>
  );
}
