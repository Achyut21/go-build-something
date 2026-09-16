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
      <Heading size="m">{heading}</Heading>

      <div className="-mx-gutter mt-8 hidden md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-chalk/25">
              <th
                scope="col"
                className="w-[17%] pb-3 pl-gutter pr-5 font-display text-body-m font-medium text-smoke"
              >
                {columns[0]}
              </th>
              <th
                scope="col"
                className="w-[47%] pb-3 pr-8 font-display text-body-m font-medium text-smoke"
              >
                {columns[1]}
              </th>
              <th
                scope="col"
                className="border-l border-ultra/30 pb-3 pl-8 pr-gutter font-display text-body-m font-medium text-smoke"
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
                  className="py-3.5 pl-gutter pr-5 align-top font-display text-body-m font-semibold"
                >
                  {domain}
                </th>
                <td className="py-3.5 pr-8 align-top text-body-m">{fast}</td>
                <td className="border-l border-ultra/30 py-3.5 pl-8 pr-gutter align-top text-body-m text-smoke">
                  {trap}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-7 md:hidden">
        {rows.map(([domain, fast, trap]) => (
          <li key={domain} className="border-t border-chalk/12 py-4">
            <p className="font-display text-body-l font-semibold">{domain}</p>
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

      {note ? <Note className="mt-7">{note}</Note> : null}
    </Frame>
  );
}
