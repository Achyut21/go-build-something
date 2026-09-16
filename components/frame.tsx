import type { ReactNode } from "react";

import type { SlideLink } from "@/content/slides";
import { cn } from "@/lib/utils";
import { RichText } from "@/components/rich-text";

type Anchor = "top" | "center" | "bottom";

function Spacer() {
  return <div aria-hidden className="min-h-0 flex-1" />;
}

export function Frame({
  anchor = "top",
  flood = false,
  footer,
  className,
  children,
}: {
  anchor?: Anchor;
  flood?: boolean;
  footer?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      className={cn(
        "absolute inset-0 flex flex-col overflow-y-auto overscroll-contain px-gutter pt-gutter-y pb-[calc(var(--spacing-gutter-y)+1.5rem)]",
        flood
          ? "bg-sodium text-ink [--em-color:var(--color-ink)] [--focus:var(--color-ink)]"
          : "text-chalk [--em-color:var(--color-sodium)]",
        className,
      )}
    >
      {anchor !== "top" && <Spacer />}
      <div className="shrink-0">{children}</div>
      {anchor === "center" && <Spacer />}
      {footer ? <div className="shrink-0">{footer}</div> : null}
    </section>
  );
}

export function Heading({
  className,
  children,
}: {
  className?: string;
  children: string;
}) {
  return (
    <h1
      className={cn(
        "max-w-[26ch] font-display text-display-l font-semibold text-balance",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function Intro({ children }: { children: string }) {
  return (
    <p className="max-w-[54ch] text-body-m text-smoke">
      <RichText>{children}</RichText>
    </p>
  );
}

export function Note({
  className,
  children,
}: {
  className?: string;
  children: string;
}) {
  return (
    <div className={cn("border-t border-chalk/12 pt-4", className)}>
      <p className="max-w-[58ch] text-body-m text-pretty text-smoke">
        <RichText>{children}</RichText>
      </p>
    </div>
  );
}

export function LinkRow({
  links,
  flood = false,
}: {
  links: SlideLink[];
  flood?: boolean;
}) {
  return (
    <ul className="flex flex-wrap gap-x-7 gap-y-1.5 font-display text-body-m">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "underline decoration-1 underline-offset-4 transition-colors",
              flood
                ? "text-ink/65 decoration-ink/30 hover:text-ink hover:decoration-ink/70"
                : "text-smoke decoration-smoke/40 hover:text-chalk hover:decoration-chalk/60",
            )}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Marker({ kind = "bullet" }: { kind?: "bullet" | "do" | "dont" }) {
  if (kind === "dont") {
    return (
      <span
        aria-hidden
        className="mt-[0.48em] block text-[0.72em] leading-none text-ultra"
      >
        &#10005;
      </span>
    );
  }

  return <span aria-hidden className="mt-[0.62em] block size-[0.36em] bg-sodium" />;
}
