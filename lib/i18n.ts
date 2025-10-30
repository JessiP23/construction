import { createInstance, i18n as I18nType } from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/locales/en.json";
import es from "@/locales/es.json";

export const supportedLanguages = ["en", "es"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

const resources = {
  en: { translation: en },
  es: { translation: es },
};

let instance: I18nType | null = null;

export function getI18nInstance() {
  if (instance) return instance;

  const i18n = createInstance();

  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    initImmediate: false,
  });

  instance = i18n;
  return i18n;
}

export function isSupportedLanguage(language: string): language is SupportedLanguage {
  return (supportedLanguages as readonly string[]).includes(language);
}
