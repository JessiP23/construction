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
                <div className="flex items-center justify-between rounded-3xl border border-slate-900/10 bg-white/70 px-6 py-4 text-sm font-semibold uppercase tracking-[0.4em] text-slate-700 transition hover:-translate-y-1 hover:border-slate-900/20 hover:shadow-xl dark:border-slate-700/40 dark:bg-slate-900/60 dark:text-slate-200">
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
              <article className="group rounded-3xl border border-slate-900/10 bg-white/80 p-8 shadow-lg transition hover:-translate-y-1 hover:border-slate-900/20 hover:shadow-2xl dark:border-slate-700/40 dark:bg-slate-900/70">
                <div className="font-display text-xl uppercase tracking-[0.4em] text-slate-900 dark:text-white">
                  {value.title}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {value.description}
                </p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-slate-900/10 via-slate-900/40 to-transparent dark:from-slate-200/10 dark:via-slate-200/40" />
                <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-slate-400">
                  <span>0{index + 1}</span>
                  <span>Atelier Construct</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
