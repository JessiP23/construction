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
          <div className="relative overflow-hidden rounded-[36px] border border-[rgba(36,48,71,0.12)] bg-white p-10 text-left shadow-[0_30px_65px_rgba(31,42,68,0.18)] transition md:p-14">
            <div className="grid gap-10 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)] md:items-start">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={active.quote}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-5xl leading-none text-[#b9894c]">“</span>
                    <p className="text-2xl leading-snug text-[var(--foreground)]">
                      {active.quote}
                    </p>
                  </div>
                  <footer className="flex flex-col gap-1 text-sm text-[rgba(36,48,71,0.6)]">
                    <span className="text-base font-semibold text-[var(--foreground)]">
                      {active.author}
                    </span>
                    <span className="text-sm text-[rgba(36,48,71,0.45)]">{active.role}</span>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
              <div className="flex flex-col gap-4">
                <span className="text-xs font-medium tracking-[0.18em] text-[rgba(36,48,71,0.45)]">
                  {t("testimonials.selectorLabel")}
                </span>
                <div className="space-y-3">
                  {testimonials.map((item, itemIndex) => {
                    const activeItem = index === itemIndex;
                    return (
                      <button
                        key={item.author}
                        type="button"
                        onClick={() => setIndex(itemIndex)}
                        className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                          activeItem
                            ? "border-[rgba(192,128,46,0.35)] bg-[#f9f2e6] text-[var(--foreground)] shadow-sm"
                            : "border-[rgba(36,48,71,0.12)] bg-white/75 text-[rgba(36,48,71,0.58)] hover:border-[rgba(36,48,71,0.18)] hover:bg-white"
                        }`}
                        aria-pressed={activeItem}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-[rgba(36,48,71,0.78)]">
                              {item.author}
                            </span>
                            <span className="text-xs text-[rgba(36,48,71,0.45)]">
                              {item.role}
                            </span>
                          </div>
                          <span className={`text-lg ${activeItem ? "text-[var(--accent)]" : "text-[rgba(36,48,71,0.35)]"}`}>
                            {activeItem ? "⟶" : "→"}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="hidden gap-2 md:flex">
                  <Button variant="ghost" size="sm" onClick={handlePrev} aria-label="Previous testimonial">
                    ⟵
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleNext} aria-label="Next testimonial">
                    ⟶
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
