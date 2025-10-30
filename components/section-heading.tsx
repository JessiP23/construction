import { ReactNode } from "react";
import clsx from "clsx";

interface SectionHeadingProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center" | "right";
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div
      className={clsx("flex flex-col gap-4", {
        "items-start text-left": align === "left",
        "items-center text-center": align === "center",
        "items-end text-right": align === "right",
      })}
    >
      {eyebrow ? (
        <span className="font-display text-xs uppercase tracking-[0.5em] text-slate-500 dark:text-slate-400">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-4xl tracking-tight text-slate-900 dark:text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
