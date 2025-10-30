"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function WhatsAppFab() {
  const { t } = useTranslation();
  return (
    <motion.a
      href="https://wa.me/13105554832"
      target="_blank"
      rel="noopener noreferrer"
  className="fixed bottom-8 right-6 z-40 flex h-14 items-center gap-3 rounded-full bg-emerald-500 px-5 text-sm font-semibold tracking-[0.12em] text-white shadow-2xl transition hover:scale-105 hover:bg-emerald-400"
      aria-label={t("contact.whatsapp")}
      data-cursor="focus"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="h-4 w-4"
        >
          <path d="M16.7 15.3a1 1 0 0 1-.2 1.2c-.6.6-1.3 1-2 1.2-3.3.8-6.8-2.7-6-6 .2-.7.6-1.4 1.2-2a1 1 0 0 1 1.2-.2l1.2.6c.5.3.7.9.5 1.4-.1.2-.2.4-.4.5-.1.1-.1.3 0 .4l1.4 1.4c.1.1.3.1.4 0 .1-.2.3-.3.5-.4.6-.2 1.1 0 1.4.5l.6 1.2z" />
          <path d="M20.1 12a8.1 8.1 0 1 1-16.2 0 8.1 8.1 0 0 1 16.2 0z" />
          <path d="M3.9 16.9l-.9 4 4-1" />
        </svg>
      </span>
      <span className="hidden md:inline">WhatsApp</span>
    </motion.a>
  );
}
