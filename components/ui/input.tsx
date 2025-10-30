"use client";

import clsx from "clsx";
import { InputHTMLAttributes, forwardRef } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={clsx(
        "h-12 w-full rounded-2xl border border-[rgba(36,48,71,0.12)] bg-white px-5 text-sm font-medium text-[var(--foreground)] transition placeholder:text-[rgba(36,48,71,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        className,
      )}
      data-cursor="focus"
      {...props}
    />
  ),
);

Input.displayName = "Input";
