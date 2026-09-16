"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-[3px] font-display font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        ghost: "text-smoke hover:bg-slab hover:text-chalk",
        outline:
          "border border-chalk/20 text-chalk hover:border-chalk/45 hover:bg-slab",
      },
      size: {
        sm: "h-8 px-3 text-micro",
        icon: "size-8 text-[0.8125rem] leading-none",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "sm",
    },
  },
);

function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
