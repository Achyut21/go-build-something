import { Fragment } from "react";

const EMPHASIS = /(\*\*[^*]+\*\*)/g;

export function RichText({ children }: { children: string }) {
  return (
    <>
      {children.split(EMPHASIS).map((part, i) =>
        part.startsWith("**") ? (
          <strong
            key={i}
            className="font-semibold text-[color:var(--em-color)]"
          >
            {part.slice(2, -2)}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
