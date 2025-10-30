"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialsSection() {
  const { t } = useTranslation();
  const testimonials = t("testimonials.items", { returnObjects: true }) as Testimonial[];
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[index];

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto flex max-w-4xl flex-col gap-12 px-6 text-center md:px-10">
        <SectionHeading eyebrow={null} title={t("testimonials.title")} description={null} align="center" />
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-slate-900/10 bg-white/70 p-12 shadow-2xl backdrop-blur-xl dark:border-slate-700/40 dark:bg-slate-900/70">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active.quote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-200">
                  “{active.quote}”
                </p>
                <footer className="space-y-1 text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300">
                  <div>{active.author}</div>
                  <div className="tracking-[0.2em] text-slate-400 dark:text-slate-500">{active.role}</div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button variant="ghost" size="sm" onClick={handlePrev} aria-label="Previous testimonial">
                ⟵
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`h-2 w-10 rounded-full transition ${
                      index === dotIndex ? "bg-slate-900 dark:bg-slate-200" : "bg-slate-300/60 dark:bg-slate-700"
                    }`}
                  />
                ))}
              </div>
              <Button variant="ghost" size="sm" onClick={handleNext} aria-label="Next testimonial">
                ⟶
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
