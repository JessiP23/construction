"use client";

import { useTranslation } from "react-i18next";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function ValuesSection() {
  const { t } = useTranslation();
  const values = t("values.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section id="values" className="relative py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:px-10">
        <SectionHeading
          eyebrow={t("values.title")}
          title={t("values.subtitle")}
          description={t("values.description")}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.08}>
              <article className="group h-full rounded-3xl border border-[rgba(36,48,71,0.12)] bg-white p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:border-[rgba(36,48,71,0.22)] hover:shadow-[0_28px_56px_rgba(31,42,68,0.18)]">
                <div className="font-display text-xl tracking-[0.08em] text-[var(--foreground)]">
                  {value.title}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[rgba(36,48,71,0.68)]">
                  {value.description}
                </p>
                <div className="mt-6 h-px w-full bg-[rgba(36,48,71,0.12)]" />
                <div className="mt-4 flex items-center gap-3 text-xs tracking-[0.16em] text-[rgba(36,48,71,0.5)]">
                  <span>0{index + 1}</span>
                  <span>Titino Construction</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
