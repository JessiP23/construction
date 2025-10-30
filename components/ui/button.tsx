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
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[0.02em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent)] text-white shadow-[0_18px_36px_rgba(192,128,46,0.28)] hover:-translate-y-[2px] hover:bg-[var(--accent-strong)] hover:shadow-[0_24px_48px_rgba(192,128,46,0.32)]",
  secondary:
    "border border-[rgba(36,48,71,0.14)] bg-white text-[var(--foreground)] shadow-sm hover:-translate-y-[2px] hover:shadow-[0_18px_34px_rgba(31,42,68,0.16)]",
  ghost:
    "bg-transparent text-[var(--foreground)] hover:bg-[rgba(36,48,71,0.08)]",
  outline:
    "border border-[rgba(36,48,71,0.22)] bg-transparent text-[var(--foreground)] hover:bg-[rgba(36,48,71,0.08)]",
  muted:
    "border border-[rgba(36,48,71,0.08)] bg-[rgba(255,255,255,0.8)] text-[rgba(36,48,71,0.7)] hover:bg-white",
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
