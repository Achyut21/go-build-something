import { Frame, Heading, Note } from "@/components/frame";
import { cn } from "@/lib/utils";

type Row = [string, string, string];

export function TableSlide({
  heading,
  columns,
  rows,
  note,
}: {
  heading: string;
  columns: [string, string, string];
  rows: Row[];
  note?: string;
}) {
  return (
    <Frame anchor="center">
      <Heading className="max-w-none">{heading}</Heading>

      <div className="-mx-gutter mt-6 hidden lg:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-chalk/25">
              <th
                scope="col"
                className="w-[22%] pb-2.5 pl-gutter pr-5 font-display text-body-m font-medium text-smoke"
              >
                {columns[0]}
              </th>
              <th
                scope="col"
                className="w-[46%] pb-2.5 pr-8 font-display text-body-m font-medium text-smoke"
              >
                {columns[1]}
              </th>
              <th
                scope="col"
                className="border-l border-ultra/30 pb-2.5 pl-8 pr-gutter font-display text-body-m font-medium text-smoke"
              >
                {columns[2]}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([domain, fast, trap], i) => (
              <tr
                key={domain}
                className={cn(
                  "border-b border-chalk/10",
                  i % 2 === 1 && "bg-slab/60",
                )}
              >
                <th
                  scope="row"
                  className="py-2 pl-gutter pr-5 align-top font-display text-body-m font-semibold text-sodium"
                >
                  {domain}
                </th>
                <td className="py-2 pr-8 align-top text-body-m">{fast}</td>
                <td className="border-l border-ultra/30 py-2 pl-8 pr-gutter align-top text-body-m text-smoke">
                  {trap}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-6 lg:hidden">
        {rows.map(([domain, fast, trap]) => (
          <li key={domain} className="border-t border-chalk/12 py-4">
            <p className="font-display text-body-l font-semibold text-sodium">
              {domain}
            </p>
            <dl className="mt-2 flex flex-col gap-1.5">
              <div className="grid grid-cols-[6.25rem_1fr] gap-x-3">
                <dt className="text-body-m text-smoke">{columns[1]}</dt>
                <dd className="text-body-m">{fast}</dd>
              </div>
              <div className="grid grid-cols-[6.25rem_1fr] gap-x-3">
                <dt className="text-body-m text-smoke">{columns[2]}</dt>
                <dd className="text-body-m text-smoke">{trap}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>

      {note ? <Note className="mt-6">{note}</Note> : null}
    </Frame>
  );
}
