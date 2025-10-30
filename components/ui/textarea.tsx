"use client";

import clsx from "clsx";
import { TextareaHTMLAttributes, forwardRef } from "react";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={clsx(
        "min-h-[160px] w-full rounded-2xl border border-slate-900/10 bg-white/70 px-5 py-4 text-sm font-medium text-slate-900 transition placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:border-slate-600/40 dark:bg-slate-900/60 dark:text-slate-100 dark:placeholder:text-slate-400",
        className,
      )}
      data-cursor="focus"
      {...props}
    />
  ),
);

Textarea.displayName = "Textarea";
