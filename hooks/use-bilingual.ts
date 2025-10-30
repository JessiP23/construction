"use client";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export function useBilingual() {
  const { i18n } = useTranslation();

  return useMemo(
    () => ({
      tEn: i18n.getFixedT("en"),
      tEs: i18n.getFixedT("es"),
    }),
    [i18n],
  );
}
