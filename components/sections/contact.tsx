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
    <section id="contact" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow={t("contact.title")}
          title={t("contact.subtitle")}
          description={null}
        />
  <div className="mt-12 grid gap-8 rounded-3xl border border-[rgba(36,48,71,0.12)] bg-white p-8 shadow-[0_32px_60px_rgba(31,42,68,0.14)] transition md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:p-10">
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
              <Textarea id="message" name="message" required rows={5} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="file">{t("contact.form.upload")}</Label>
              <Input id="file" name="file" type="file" accept="image/*,.pdf" className="file:bg-transparent" />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[rgba(36,48,71,0.6)]">
                {t("contact.form.helper")}
              </p>
              <Button type="submit" size="lg" disabled={isSubmitting} className="sm:w-auto">
                {isSubmitting ? `${t("contact.form.submit")}…` : t("contact.form.submit")}
              </Button>
            </div>
            <AnimatePresence>
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 rounded-2xl border border-emerald-300/40 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
                  role="status"
                  aria-live="polite"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-medium tracking-[0.12em]">
                    {t("contact.form.successTitle")}
                  </span>
                  <span className="text-xs text-emerald-600">
                    {t("contact.form.successBody")}
                  </span>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </form>
          <aside className="space-y-6 text-sm">
            <div className="rounded-3xl border border-[rgba(36,48,71,0.12)] bg-white/85 p-6 text-[rgba(36,48,71,0.72)] shadow-sm">
              <h3 className="font-display text-lg tracking-tight text-[var(--foreground)]">
                {t("contact.whatsapp")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed">
                {t("contact.whatsappNumber")}
              </p>
              <Button
                asChild
                variant="primary"
                size="sm"
                className="mt-4 px-5"
              >
                <a
                  href="https://wa.me/13474240746"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="focus"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
            <div className="rounded-3xl border border-[rgba(36,48,71,0.12)] bg-white/85 p-6 text-[rgba(36,48,71,0.72)] shadow-sm">
              <h3 className="font-display text-lg tracking-tight text-[var(--foreground)]">
                {t("contact.email")}
              </h3>
              <a
                href="mailto:titinoavila7329@gmail.com"
                className="mt-3 inline-block text-base font-semibold text-[var(--foreground)] underline-offset-4 hover:underline"
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
