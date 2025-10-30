"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function ValuesSection() {
  const { t } = useTranslation();
  const values = t("values.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;
  const specialties = t("specialties.items", { returnObjects: true }) as string[];

  return (
    <section id="values" className="relative py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start md:px-10">
        <div className="space-y-10">
          <SectionHeading
            eyebrow={t("values.title")}
            title={t("specialties.title")}
            description={t("specialties.description")}
          />
          <div className="grid gap-4">
            {specialties.map((specialty, index) => (
              <Reveal key={specialty} delay={index * 0.06}>
                <div className="flex items-center justify-between rounded-3xl border border-[rgba(36,48,71,0.12)] bg-white/85 px-6 py-4 text-sm font-semibold tracking-[0.12em] text-[rgba(36,48,71,0.78)] shadow-sm transition hover:-translate-y-1 hover:border-[rgba(36,48,71,0.22)] hover:shadow-[0_22px_44px_rgba(31,42,68,0.16)]">
                  <span>{specialty}</span>
                  <motion.span
                    className="text-sm"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                  >
                    ⟶
                  </motion.span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="grid gap-6">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.08}>
              <article className="group rounded-3xl border border-[rgba(36,48,71,0.12)] bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:border-[rgba(36,48,71,0.22)] hover:shadow-[0_28px_56px_rgba(31,42,68,0.18)]">
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
