"use client";

import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "muted";
type ButtonSize = "xs" | "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-[0.08em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-slate-900 text-slate-50 hover:-translate-y-[2px] hover:bg-slate-800 hover:shadow-xl dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200",
  secondary:
    "bg-white/30 text-slate-800 shadow-sm hover:bg-white/60 dark:bg-slate-800/60 dark:text-slate-100 dark:hover:bg-slate-700/80",
  ghost:
    "bg-transparent text-slate-800 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-slate-200/10",
  outline:
    "border border-slate-900/20 bg-transparent text-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-300/40 dark:text-slate-200 dark:hover:bg-slate-200/10",
  muted:
    "bg-slate-200/60 text-slate-700 hover:bg-slate-200 dark:bg-slate-700/50 dark:text-slate-200 dark:hover:bg-slate-600/70",
};

const sizeStyles: Record<ButtonSize, string> = {
  xs: "h-8 px-3 text-[0.65rem]",
  sm: "h-9 px-4 text-[0.7rem]",
  md: "h-11 px-6 text-[0.75rem]",
  lg: "h-12 px-8 text-[0.78rem]",
  icon: "h-11 w-11",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, variant = "primary", size = "md", className, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        data-cursor="focus"
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
