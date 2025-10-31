"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { projects, type Project, type ProjectStageKey } from "@/data/projects";
import { specialties, type SpecialtyId } from "@/data/specialties";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";

interface SpecialtyDetailCopy {
  name: string;
  excerpt: string;
  summary: string;
  deliverables: string[];
  process: Array<{ title: string; description: string }>;
  metrics: Array<{ label: string; value: string }>;
  ctaLabel: string;
  seoDescription?: string;
}

interface ProjectCopy {
  title: string;
  location: string;
  description: string;
  services: string[];
  story: Record<ProjectStageKey, string>;
}

type ProjectCopyMap = Record<string, ProjectCopy>;

type StageLabels = Record<ProjectStageKey, string>;

type SpecialtyDetailProps = {
  specialtyId: SpecialtyId;
};

export function SpecialtyDetail({ specialtyId }: SpecialtyDetailProps) {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const copy = useMemo(
    () => t(`specialties.items.${specialtyId}`, { returnObjects: true }) as SpecialtyDetailCopy,
    [t, specialtyId],
  );
  const stageLabels = useMemo(
    () => t("projects.stageLabels", { returnObjects: true }) as StageLabels,
    [t],
  );
  const projectCopy = useMemo(
    () => t("projects.items", { returnObjects: true }) as ProjectCopyMap,
    [t],
  );

  const specialty = specialties.find((entry) => entry.id === specialtyId);
  if (!specialty) return null;

  const relatedProjects = projects.filter((project) =>
    specialty.relatedProjectIds.includes(project.id),
  );

  return (
    <div className="relative bg-white">
      <div
        className="relative overflow-hidden rounded-b-[48px] bg-[#0b1f3b]"
        style={{ backgroundColor: specialty.accent }}
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-24 text-white md:px-10 md:py-32">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
            {t("specialties.backLabel")}
          </Link>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{copy.name}</h1>
            <p className="max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
              {copy.summary}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/18 bg-white/10 p-4 backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
                  {metric.label}
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <Reveal>
            <section className="space-y-8">
              <h2 className="text-2xl font-semibold text-[#0b1f3b] md:text-3xl">
                {t("specialties.deliverablesTitle")}
              </h2>
              <ul className="grid gap-4 text-sm leading-relaxed text-[#1d2530] md:grid-cols-2">
                {copy.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[#0b1f3b]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section className="space-y-8 rounded-3xl border border-[rgba(12,20,32,0.08)] bg-[#f8f5ee] p-8">
              <h2 className="text-2xl font-semibold text-[#0b1f3b] md:text-3xl">
                {t("specialties.processTitle")}
              </h2>
              <div className="space-y-6">
                {copy.process.map((step, index) => (
                  <div key={step.title} className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4c4f5a]">
                      0{index + 1}
                    </p>
                    <h3 className="text-lg font-semibold text-[#0b1f3b]">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-[#1d2530]">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        </div>

        {relatedProjects.length > 0 ? (
          <div className="mt-20 space-y-8">
            <Reveal>
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <h2 className="text-2xl font-semibold text-[#0b1f3b] md:text-3xl">
                  {t("specialties.referenceProjects")}
                </h2>
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3b] hover:text-[#10263f]"
                >
                  {t("specialties.viewAllWork")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedProjects.map((project) => (
                <Reveal key={project.id}>
                  <RelatedProjectCard
                    project={project}
                    copy={projectCopy[project.id]}
                    stageLabels={stageLabels}
                    language={language}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-20 flex justify-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#0b1f3b] px-8 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-[#132b4a]"
          >
            {copy.ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

function RelatedProjectCard({
  project,
  copy,
  stageLabels,
  language,
}: {
  project: Project;
  copy?: ProjectCopy;
  stageLabels: StageLabels;
  language: string;
}) {
  const { t } = useTranslation();
  const beforeMedia = project.media.find((media) => media.key === "before");
  const afterMedia = project.media.find((media) => media.key === "after");

  if (!beforeMedia || !afterMedia || !copy) {
    return null;
  }

  return (
    <article className="flex h-full flex-col gap-6 rounded-3xl border border-[rgba(13,17,23,0.08)] bg-white p-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4c4f5a]">
          {copy.location}
        </p>
        <h3 className="text-lg font-semibold text-[#0b1f3b]">{copy.title}</h3>
      </header>
      <div className="grid gap-4 sm:grid-cols-2">
        {[beforeMedia, afterMedia].map((media) => (
          <figure key={`${project.id}-${media.key}`} className="relative overflow-hidden rounded-2xl">
            <div className="relative aspect-[4/3]">
              <Image
                src={media.src}
                alt={t(`projects.items.${project.id}.media.${media.key}.alt`, { defaultValue: "" })}
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="pointer-events-none absolute left-4 top-4 inline-flex items-center rounded-full bg-[#0b1f3b] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-white">
              {stageLabels[media.key as ProjectStageKey]}
            </figcaption>
          </figure>
        ))}
      </div>
    </article>
  );
}
