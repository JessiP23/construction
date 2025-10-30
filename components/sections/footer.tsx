"use client";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export function FooterSection() {
  const { t } = useTranslation();
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="relative border-t border-slate-900/10 bg-white/60 py-10 dark:border-slate-800/60 dark:bg-slate-900/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="space-y-2 text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
          <span className="block font-display text-sm tracking-[0.5em] text-slate-900 dark:text-white">
            Atelier Construct
          </span>
          <span>{t("footer.crafted")}</span>
          <span>{t("footer.rights", { year })}</span>
        </div>
        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-900/10 bg-white/60 transition hover:-translate-y-1 hover:border-slate-900/30 hover:shadow-lg dark:border-slate-700/40 dark:bg-slate-900/60"
            data-cursor="link"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-5 w-5 text-slate-700 transition group-hover:text-slate-900 dark:text-slate-200 dark:group-hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-900/10 bg-white/60 transition hover:-translate-y-1 hover:border-slate-900/30 hover:shadow-lg dark:border-slate-700/40 dark:bg-slate-900/60"
            data-cursor="link"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5 text-slate-700 transition group-hover:text-slate-900 dark:text-slate-200 dark:group-hover:text-white" />
          </a>
          <a
            href="mailto:studio@atelierconstruct.com"
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-900/10 bg-white/60 transition hover:-translate-y-1 hover:border-slate-900/30 hover:shadow-lg dark:border-slate-700/40 dark:bg-slate-900/60"
            data-cursor="link"
            aria-label="Email"
          >
            <EnvelopeIcon className="h-5 w-5 text-slate-700 transition group-hover:text-slate-900 dark:text-slate-200 dark:group-hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <path d="M16 11.37A3.37 3.37 0 1 1 12.63 8 3.37 3.37 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M4 4h4v16H4z" />
      <path d="M8 11c0-1.657 1.343-3 3-3s3 1.343 3 3v9h-6z" />
      <circle cx="6" cy="6" r="1.5" />
      <path d="M14 13c0-1.105.895-2 2-2s2 .895 2 2v7h-4z" />
    </svg>
  );
}

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
