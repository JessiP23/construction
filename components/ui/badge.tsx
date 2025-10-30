import { HTMLAttributes } from "react";
import clsx from "clsx";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border border-[rgba(36,48,71,0.12)] bg-white/75 px-3 py-1 text-xs tracking-[0.12em] text-[rgba(36,48,71,0.72)] shadow-sm",
        className,
      )}
      {...props}
    />
  );
}
