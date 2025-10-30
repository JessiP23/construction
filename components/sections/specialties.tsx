"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { specialties, type Specialty } from "@/data/specialties";

interface SpecialtyListCopy {
  name: string;
  excerpt: string;
}

type SpecialtyCopyMap = Record<string, SpecialtyListCopy>;

export function SpecialtiesSection() {
  const { t } = useTranslation();
  const copy = useMemo(
    () => t("specialties.items", { returnObjects: true }) as SpecialtyCopyMap,
    [t],
  );
  const supportCopy = t("specialties.support");
  const disciplineLabel = t("specialties.cardIndicator");
  const ctaLabel = t("specialties.ctaLabel");

  return (
    <section id="services" className="relative bg-[#0b1f3b] py-24 text-white md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:px-10">
        <SectionHeading
          eyebrow={<span className="text-white/70">{t("specialties.title")}</span>}
          title={<span className="text-white font-display text-4xl md:text-5xl">{t("specialties.description")}</span>}
          description={<span className="text-white/70 max-w-2xl">{supportCopy}</span>}
          align="left"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {specialties.map((specialty: Specialty, index: number) => {
            const itemCopy = copy[specialty.id];
            if (!itemCopy) return null;
            return (
              <Reveal key={specialty.id} delay={index * 0.08}>
                <Link
                  href={`/specialties/${specialty.slug}`}
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0b1f3b]"
                >
                  <article
                    className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_32px_80px_rgba(2,11,26,0.35)] transition-transform duration-300 group-hover:-translate-y-1"
                    style={{
                      backgroundColor: specialty.tint,
                      borderColor: specialty.tintBorder,
                    }}
                  >
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                      <span>{specialty.orderLabel}</span>
                      <span>{disciplineLabel}</span>
                    </div>
                    <h3 className="font-display text-2xl text-white md:text-3xl">
                      {itemCopy.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/80">
                      {itemCopy.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-white">
                      {ctaLabel}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
