import { HTMLAttributes } from "react";
import clsx from "clsx";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/60 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-700 dark:border-slate-600/40 dark:bg-slate-900/60 dark:text-slate-200",
        className,
      )}
      {...props}
    />
  );
}
