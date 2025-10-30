"use client";

import { LabelHTMLAttributes } from "react";
import clsx from "clsx";

export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={clsx(
        "block text-xs font-semibold tracking-[0.12em] text-[rgba(36,48,71,0.68)]",
        className,
      )}
      {...props}
    />
  );
}
