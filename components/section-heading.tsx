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
        <span className="font-display text-sm tracking-[0.12em] text-[rgba(36,48,71,0.55)]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-4xl tracking-tight text-[var(--foreground)] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-[rgba(36,48,71,0.68)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
