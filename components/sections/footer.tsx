"use client";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export function FooterSection() {
  const { t } = useTranslation();
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="relative border-t border-[rgba(36,48,71,0.12)] bg-white/85 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="space-y-2 text-xs tracking-[0.14em] text-[rgba(36,48,71,0.55)]">
          <span className="block font-display text-sm tracking-[0.18em] text-[var(--foreground)]">
            Titino Construction
          </span>
          <span>{t("footer.crafted")}</span>
          <span>{t("footer.rights", { year })}</span>
        </div>
        <div className="flex items-center gap-4 text-[rgba(36,48,71,0.68)]">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(36,48,71,0.12)] bg-white/85 transition hover:-translate-y-1 hover:border-[rgba(36,48,71,0.24)] hover:shadow-[0_18px_36px_rgba(31,42,68,0.18)]"
            data-cursor="link"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-5 w-5 text-[rgba(36,48,71,0.7)] transition group-hover:text-[var(--foreground)]" />
          </a>
          <a
            href="https://www.linkedin.com/in/ernesto-avila-0b50002b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(36,48,71,0.12)] bg-white/85 transition hover:-translate-y-1 hover:border-[rgba(36,48,71,0.24)] hover:shadow-[0_18px_36px_rgba(31,42,68,0.18)]"
            data-cursor="link"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5 text-[rgba(36,48,71,0.7)] transition group-hover:text-[var(--foreground)]" />
          </a>
          <a
            href="mailto:titinoavila7329@gmail.com"
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(36,48,71,0.12)] bg-white/85 transition hover:-translate-y-1 hover:border-[rgba(36,48,71,0.24)] hover:shadow-[0_18px_36px_rgba(31,42,68,0.18)]"
            data-cursor="link"
            aria-label="Email"
          >
            <EnvelopeIcon className="h-5 w-5 text-[rgba(36,48,71,0.7)] transition group-hover:text-[var(--foreground)]" />
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
