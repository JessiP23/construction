"use client";

import { useTranslation } from "react-i18next";
import clsx from "clsx";

import { useAvailableLanguages, useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const languages = useAvailableLanguages();
  const { t } = useTranslation();

  return (
    <div className="flex items-center rounded-full border border-white/10 bg-white/40 px-1 py-1 text-xs font-medium backdrop-blur-md transition dark:border-slate-700/40 dark:bg-slate-900/40">
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
                ? "bg-[#b9894c] text-white shadow-lg dark:bg-[#d9b878] dark:text-slate-900"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
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
