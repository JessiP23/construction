"use client";

import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1300));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow={t("contact.title")}
          title={t("contact.subtitle")}
          description={null}
        />
  <div className="mt-12 grid gap-10 rounded-[32px] border border-white/40 bg-white/30 p-8 backdrop-blur-2xl dark:border-slate-700/40 dark:bg-slate-900/60 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:p-12">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">{t("contact.form.name")}</Label>
                <Input id="name" name="name" required autoComplete="name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t("contact.form.email")}</Label>
                <Input id="email" name="email" type="email" required autoComplete="email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{t("contact.form.message")}</Label>
              <Textarea id="message" name="message" required rows={6} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="file">{t("contact.form.upload")}</Label>
              <Input id="file" name="file" type="file" accept="image/*,.pdf" className="file:bg-transparent" />
            </div>
            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? `${t("contact.form.submit")}…` : t("contact.form.submit")}
            </Button>
            <AnimatePresence>
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-100/60 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-500/20 dark:text-emerald-300"
                  role="status"
                  aria-live="polite"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-medium uppercase tracking-[0.3em]">
                    {t("contact.form.successTitle")}
                  </span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-300/80">
                    {t("contact.form.successBody")}
                  </span>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </form>
          <aside className="space-y-8 text-sm">
            <div className="glass-panel rounded-3xl p-6 text-slate-700 dark:text-slate-200">
              <h3 className="font-display text-lg uppercase tracking-[0.4em] text-slate-900 dark:text-white">
                {t("contact.whatsapp")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed">
                {t("contact.whatsappNumber")}
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="mt-4 border-slate-900/30 bg-white/50 dark:border-slate-600/40 dark:bg-slate-900/60"
              >
                <a
                  href="https://wa.me/13105554832"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="focus"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
            <div className="glass-panel rounded-3xl p-6 text-slate-700 dark:text-slate-200">
              <h3 className="font-display text-lg uppercase tracking-[0.4em] text-slate-900 dark:text-white">
                {t("contact.email")}
              </h3>
              <a
                href="mailto:studio@atelierconstruct.com"
                className="mt-3 inline-block text-base font-semibold text-slate-900 underline-offset-4 hover:underline dark:text-slate-100"
                data-cursor="link"
              >
                {t("contact.emailAddress")}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
