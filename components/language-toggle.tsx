"use client";

import { useTranslation } from "react-i18next";
import clsx from "clsx";

import { useAvailableLanguages, useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const languages = useAvailableLanguages();
  const { t } = useTranslation();

  return (
    <div className="flex items-center rounded-full border border-[rgba(36,48,71,0.12)] bg-white/70 px-1 py-1 text-xs font-semibold text-[rgba(36,48,71,0.7)] shadow-sm backdrop-blur-md transition">
      {languages.map((code) => {
        const isActive = language === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLanguage(code)}
            aria-pressed={isActive}
            aria-label={`${t("languageToggle.aria")}: ${code}`}
            className={clsx(
              "relative w-12 rounded-full px-3 py-1 transition",
              isActive
                ? "bg-[var(--accent)] text-white shadow-lg"
                : "text-[rgba(36,48,71,0.7)] hover:text-[var(--foreground)]",
            )}
            data-cursor="focus"
          >
            {t(`languageToggle.${code}`)}
          </button>
        );
      })}
    </div>
  );
}
