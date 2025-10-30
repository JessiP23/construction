"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const SECTIONS = [
  { href: "#work", key: "navigation.work" },
  { href: "#process", key: "navigation.process" },
  { href: "#values", key: "navigation.values" },
  { href: "#contact", key: "navigation.contact" },
];

export function NavigationBar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 80);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/70 shadow-lg backdrop-blur-xl dark:bg-slate-950/70" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/#"
          className="font-display text-lg uppercase tracking-[0.6em] text-slate-900 transition hover:tracking-[0.7em] dark:text-slate-100"
          data-cursor="link"
        >
          Atelier Construct
        </Link>
        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.35em] md:flex">
          {SECTIONS.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              data-cursor="link"
            >
              {t(section.key)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <Button asChild size="sm" variant="outline" className="hidden md:inline-flex">
            <a href="#contact">{t("hero.actions.contact")}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
