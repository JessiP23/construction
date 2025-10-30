"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { projects, ProjectStageKey, Project, ProjectMedia } from "@/data/projects";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

interface ProjectCopy {
  title: string;
  location: string;
  description: string;
  services: string[];
  story: Record<ProjectStageKey, string>;
}

type ProjectCopyMap = Record<string, ProjectCopy>;

export function ProjectsSection() {
  const { t } = useTranslation();
  const stageLabels = useMemo(
    () => t("projects.stageLabels", { returnObjects: true }) as Record<ProjectStageKey, string>,
    [t],
  );
  const projectCopy = useMemo(
    () => t("projects.items", { returnObjects: true }) as ProjectCopyMap,
    [t],
  );
  const projectEntries = useMemo(
    () =>
      projects
        .map((project, index) => ({ project, copy: projectCopy[project.id], index }))
        .filter(
          (entry): entry is { project: Project; copy: ProjectCopy; index: number } =>
            Boolean(entry.copy),
        ),
    [projectCopy],
  );

  return (
    <section id="work" className="relative bg-[#f4efe5] py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:px-10">
        <SectionHeading
          eyebrow={t("projects.title")}
          title={t("projects.subtitle")}
          description={null}
        />
        <div className="flex flex-col gap-12">
          {projectEntries.map(({ project, copy, index }) => (
            <Reveal key={project.id} delay={index * 0.12}>
              <ProjectCard project={project} copy={copy} stageLabels={stageLabels} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  copy,
  stageLabels,
}: {
  project: Project;
  copy: ProjectCopy;
  stageLabels: Record<ProjectStageKey, string>;
}) {
  const { language } = useLanguage();

  const beforeMedia = project.media.find((media) => media.key === "before");
  const afterMedia = project.media.find((media) => media.key === "after");
  const processMedia = project.media.filter((media) => media.key === "process");

  if (!beforeMedia || !afterMedia) {
    return null;
  }

  return (
    <article className="relative overflow-hidden rounded-[32px] border border-[#ded8cc] bg-white p-10 shadow-[0_24px_70px_rgba(13,17,23,0.08)] transition-colors">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
        <div className="flex flex-col gap-8">
          <header className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#4c4f5a]">
              {copy.location}
            </p>
            <h3 className="text-3xl font-semibold text-[#0b1f3b] md:text-4xl">
              {copy.title}
            </h3>
            <p className="max-w-sm text-base leading-relaxed text-[#222a35]">
              {copy.description}
            </p>
          </header>
          <div className="space-y-6 border-t border-[#e6dfd2] pt-6 text-sm leading-relaxed text-[#1d2530]">
            <ProjectNarrative
              label={stageLabels.before}
              narrative={copy.story.before}
            />
            <ProjectNarrative
              label={stageLabels.after}
              narrative={copy.story.after}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <ProjectImage
              media={beforeMedia}
              label={stageLabels.before}
              language={language}
            />
            <ProjectImage
              media={afterMedia}
              label={stageLabels.after}
              language={language}
            />
          </div>

          {processMedia.length > 0 ? (
            <div className="space-y-3 rounded-2xl bg-[#f4efe5] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4c4f5a]">
                {stageLabels.process}
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {processMedia.map((media) => (
                  <ProjectProcessImage
                    key={media.src}
                    media={media}
                    language={language}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ProjectImage({
  media,
  label,
  language,
}: {
  media: ProjectMedia;
  label: string;
  language: string;
}) {
  return (
    <figure className="group relative overflow-hidden rounded-3xl border border-[#dad5ca] bg-[#101820]">
      <div className="relative aspect-[4/3]">
        <Image
          src={media.src}
          alt={media.alt[language as keyof typeof media.alt]}
          fill
          sizes="(min-width: 1280px) 480px, (min-width: 768px) 50vw, 90vw"
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="pointer-events-none absolute left-6 top-6 inline-flex items-center rounded-full bg-[#0b1f3b] px-4 py-1 text-xs font-semibold uppercase tracking-[0.36em] text-white">
        {label}
      </figcaption>
    </figure>
  );
}

function ProjectProcessImage({
  media,
  language,
}: {
  media: ProjectMedia;
  language: string;
}) {
  return (
    <figure className="relative overflow-hidden rounded-2xl border border-[#dad5ca]">
      <div className="relative aspect-square">
        <Image
          src={media.src}
          alt={media.alt[language as keyof typeof media.alt]}
          fill
          sizes="(min-width: 768px) 20vw, 45vw"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </figure>
  );
}

function ProjectNarrative({ label, narrative }: { label: string; narrative: string }) {
  return (
    <div className="space-y-2">
      <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4c4f5a]">
        {label}
      </h4>
      <p>{narrative}</p>
    </div>
  );
}
