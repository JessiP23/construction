"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { useBilingual } from "@/hooks/use-bilingual";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import BackgroundSlideshow from "@/components/background-slideshow";

const HERO_VIDEO =
  "https://res.cloudinary.com/demo/video/upload/f_auto,q_auto/v1695222458/construction/site_panorama.mp4";

export function HeroSection() {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const { tEn, tEs } = useBilingual();

  return (
    <section id="top" className="relative flex min-h-[100vh] items-center overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <BackgroundSlideshow
          images={["/background.png", "/background1.png", "/background2.png"]}
          delayMs={5000}
          transitionMs={800}
        />
        <div className="absolute inset-0 bg-[rgba(18,24,36,0.28)]" aria-hidden />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 pb-24 md:px-10">
        <Reveal delay={0.05}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/30 px-5 py-2 text-sm font-medium tracking-[0.14em] text-white shadow backdrop-blur-lg">
            {t("hero.tagline")}
          </div>
        </Reveal>
        <div className="grid gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-end">
          <div className="space-y-8">
            <Reveal delay={0.1}>
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                  className="font-display text-5xl leading-[1.05] tracking-tight text-white drop-shadow-lg md:text-7xl"
                >
                  <span className="block text-white/90">{tEn("hero.dual.en")}</span>
                  <span className="block text-white/80">{tEs("hero.dual.es")}</span>
                </motion.h1>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="max-w-2xl text-lg leading-relaxed text-white/85">
                {t("hero.description")}
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <a href="#work">{t("hero.actions.work")}</a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href="#contact">{t("hero.actions.contact")}</a>
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <div className="grid gap-6 rounded-3xl border border-white/30 bg-white/20 p-8 text-sm text-white backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <span className="text-sm tracking-[0.16em] text-white/70">{t("navigation.process")}</span>
                <span className="text-3xl font-semibold">10</span>
              </div>
              <p className="text-white/80">
                {language === "en"
                  ? "Years delivering design-led construction across residential, hospitality, and civic spaces."
                  : "Años ejecutando construcción guiada por el diseño en espacios residenciales, hoteleros y cívicos."}
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs tracking-[0.12em] text-white/60">
                <div>
                  <span className="block text-2xl font-semibold text-white">20</span>
                  {language === "en" ? "Commissions completed" : "Proyectos entregados"}
                </div>
                <div>
                  <span className="block text-2xl font-semibold text-white">8</span>
                  {language === "en" ? "Cities served" : "Ciudades atendidas"}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="flex items-center gap-4 text-white/70">
          <div className="scroll-indicator" />
          <p className="text-xs tracking-[0.16em]">{t("hero.scroll")}</p>
        </div>
      </div>
    </section>
  );
}
