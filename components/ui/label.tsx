"use client";

import { LabelHTMLAttributes } from "react";
import clsx from "clsx";

export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={clsx(
        "block text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300",
        className,
      )}
      {...props}
    />
  );
}
