"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import { LanguageToggle } from "@/components/language-toggle";
import { Button } from "@/components/ui/button";

const SECTIONS = [
  { href: "#work", key: "navigation.work" },
  { href: "#process", key: "navigation.process" },
  { href: "#values", key: "navigation.values" },
  { href: "#contact", key: "navigation.contact" },
];

export function NavigationBar() {
  const { t } = useTranslation();

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-500 bg-white/80 shadow-lg backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/#"
          className="font-display text-xl tracking-[0.08em] text-slate-900 transition hover:text-slate-700"
          data-cursor="link"
        >
          Titino Construction
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium tracking-[0.08em] md:flex">
          {SECTIONS.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="text-slate-600 transition hover:text-slate-900"
              data-cursor="link"
            >
              {t(section.key)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Button asChild size="sm" variant="outline" className="hidden md:inline-flex">
            <a href="#contact">{t("hero.actions.contact")}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
