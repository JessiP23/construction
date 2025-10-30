import { HTMLAttributes } from "react";
import clsx from "clsx";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-[rgba(36,48,71,0.12)] bg-white/85 p-8 shadow-[0_28px_56px_rgba(31,42,68,0.16)] backdrop-blur-md transition",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx("mb-6 flex flex-col gap-2", className)} {...props} />;
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={clsx(
        "font-display text-xl tracking-[0.06em] text-[var(--foreground)]",
        className,
      )}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={clsx(
        "text-sm leading-relaxed text-[rgba(36,48,71,0.68)]",
        className,
      )}
      {...props}
    />
  );
}
