"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { projects, ProjectStageKey, Project } from "@/data/projects";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
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
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:px-10">
        <SectionHeading
          eyebrow={t("projects.title")}
          title={t("projects.subtitle")}
          description={null}
        />
        <div className="grid gap-8 md:grid-cols-2">
          {projectEntries.map(({ project, copy, index }) => (
            <Reveal key={project.id} delay={index * 0.12}>
              <ProjectCard project={project} copy={copy} index={index} />
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
  index,
}: {
  project: Project;
  copy: ProjectCopy;
  index: number;
}) {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const stageLabels = {
    before: t("projects.stageLabels.before"),
    process: t("projects.stageLabels.process"),
    after: t("projects.stageLabels.after"),
  } as Record<ProjectStageKey, string>;
  const [open, setOpen] = useState(false);
  const [activeStage, setActiveStage] = useState<ProjectStageKey>("after");

  const activeMedia = project.media.find((media) => media.key === activeStage) ?? project.media[0];

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
        if (!value) {
          setActiveStage("after");
        }
      }}
    >
      <DialogTrigger asChild>
        <motion.article
          className="project-card group relative overflow-hidden rounded-[32px]"
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          data-cursor="focus"
        >
          <div className="relative h-72 overflow-hidden">
            <Image
              src={project.cover}
              alt={activeMedia.alt[language]}
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/45" aria-hidden />
            <div className="absolute left-6 right-6 bottom-6 flex flex-col gap-3 text-white">
              <div className="flex items-center gap-3">
                <Badge className="bg-white/20 text-xs text-white">
                  {String(index + 1).padStart(2, "0")}
                </Badge>
                <span className="text-xs tracking-[0.14em] text-white/70">
                  {copy.location}
                </span>
              </div>
              <h3 className="font-display text-2xl text-white">{copy.title}</h3>
              <p className="max-w-xl text-sm text-white/80">{copy.description}</p>
            </div>
          </div>
          <div className="grid gap-3 border-t border-white/30 bg-white/75 px-6 py-4 text-xs tracking-[0.16em] text-[rgba(36,48,71,0.7)]">
            <span className="text-[0.6rem] tracking-[0.22em] text-[rgba(36,48,71,0.5)]">
              {stageLabels[activeStage]}
            </span>
            <p className="text-sm normal-case tracking-normal text-[rgba(36,48,71,0.78)]">
              {copy.story[activeStage]}
            </p>
          </div>
        </motion.article>
      </DialogTrigger>
      <DialogContent className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-12">
        <div className="relative overflow-hidden rounded-[32px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${project.id}-${activeStage}`}
              className="relative h-[clamp(260px,45vh,420px)] overflow-hidden rounded-[32px] border border-white/25"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={activeMedia.src}
                alt={activeMedia.alt[language]}
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute left-5 right-5 top-5 flex flex-wrap gap-2 md:gap-3">
            {project.media.map((media) => (
              <button
                key={media.key}
                type="button"
                onClick={() => setActiveStage(media.key)}
                className={`rounded-full px-4 py-2 text-xs tracking-[0.16em] transition ${
                  activeStage === media.key
                    ? "bg-white text-[var(--foreground)] shadow-sm"
                    : "bg-white/65 text-[rgba(36,48,71,0.72)] hover:bg-white/85"
                }`}
                data-cursor="focus"
              >
                {stageLabels[media.key]}
              </button>
            ))}
          </div>
        </div>
  <div className="flex flex-col gap-6 md:max-h-[70vh] md:overflow-y-auto md:pr-2">
          <DialogTitle className="font-display text-3xl tracking-tight text-[var(--foreground)]">
            {copy.title}
          </DialogTitle>
          <DialogDescription className="text-sm tracking-[0.2em] text-[rgba(36,48,71,0.55)]">
            {copy.location}
          </DialogDescription>
          <p className="text-base leading-relaxed text-[rgba(36,48,71,0.72)]">
            {copy.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {copy.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-[rgba(36,48,71,0.12)] bg-white/80 px-3 py-1 text-xs tracking-[0.18em] text-[rgba(36,48,71,0.7)]"
              >
                {service}
              </span>
            ))}
          </div>
          <div className="space-y-4">
            {project.media.map((media) => (
              <motion.div
                key={`story-${media.key}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className={`rounded-3xl border px-4 py-4 text-sm leading-relaxed ${
                  activeStage === media.key
                    ? "border-[rgba(36,48,71,0.2)] bg-white/85 shadow-sm text-[rgba(36,48,71,0.78)]"
                    : "border-[rgba(36,48,71,0.12)] bg-white/65 text-[rgba(36,48,71,0.6)]"
                }`}
              >
                <span className="block text-xs tracking-[0.16em] text-slate-500">{stageLabels[media.key]}</span>
                <span className="mt-2 block text-sm">
                  {copy.story[media.key]}
                </span>
              </motion.div>
            ))}
          </div>
          <DialogClose asChild>
            <Button variant="primary" size="md" className="self-start">
              {t("projects.modal.close")}
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
