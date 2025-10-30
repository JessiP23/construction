"use client";

import clsx from "clsx";
import { TextareaHTMLAttributes, forwardRef } from "react";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={clsx(
        "min-h-[160px] w-full rounded-2xl border border-[rgba(36,48,71,0.12)] bg-white px-5 py-4 text-sm font-medium text-[var(--foreground)] transition placeholder:text-[rgba(36,48,71,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        className,
      )}
      data-cursor="focus"
      {...props}
    />
  ),
);

Textarea.displayName = "Textarea";
