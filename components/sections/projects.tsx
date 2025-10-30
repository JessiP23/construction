"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState, useRef, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { projects, ProjectStageKey, Project } from "@/data/projects";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
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
              <ProjectCard project={project} copy={copy} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, copy }: { project: Project; copy: ProjectCopy }) {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const stageLabels = {
    before: t("projects.stageLabels.before"),
    process: t("projects.stageLabels.process"),
    after: t("projects.stageLabels.after"),
  } as Record<ProjectStageKey, string>;
  const [open, setOpen] = useState(false);
  const defaultIndex = project.media.findIndex((m) => m.key === "after");
  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex >= 0 ? defaultIndex : 0);
  const activeMedia = project.media[activeIndex] ?? project.media[0];
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i + 1) % project.media.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((i) => (i - 1 + project.media.length) % project.media.length);
      } else if (e.key === "Escape") {
        setOpen(false);
      } else if (e.key === "f") {
        if (viewerRef.current) {
          if (!document.fullscreenElement) {
            viewerRef.current.requestFullscreen().catch(() => {});
          } else {
            document.exitFullscreen().catch(() => {});
          }
        }
      }
    },
    [open, project.media.length],
  );

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  const handleOpen = (val: boolean) => {
    setOpen(val);
    if (val) {
      setActiveIndex(defaultIndex >= 0 ? defaultIndex : 0);
      setIsZoomed(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogTrigger asChild>
        <motion.article
          className="project-card group relative overflow-hidden rounded-[32px] cursor-pointer"
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          data-cursor="focus"
          onClick={() => setOpen(true)}
        >
          <div className="relative h-72 overflow-hidden rounded-[28px]">
            <Image
              src={project.cover ?? project.media[0].src}
              alt={project.cover ? project.media[activeIndex]?.alt?.[language] ?? copy.title : copy.title}
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.article>
      </DialogTrigger>

      <DialogContent className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-12">
        <div ref={viewerRef} className="relative overflow-hidden rounded-[20px] bg-slate-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${project.id}-${activeIndex}`}
              className="relative h-[clamp(260px,55vh,72vh)] overflow-hidden rounded-[12px] border border-white/10 bg-black"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {activeMedia.type === "video" ? (
                <video className="h-full w-full object-contain bg-black" controls poster={activeMedia.poster}>
                  <source src={activeMedia.src} />
                  Your browser does not support video.
                </video>
              ) : (
                <Image
                  src={activeMedia.src}
                  alt={activeMedia.alt[language]}
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className={`h-full w-full object-cover transition-transform duration-300 ${isZoomed ? "scale-105" : "scale-100"}`}
                  priority
                />
              )}

              <button
                aria-label="Previous"
                onClick={() => setActiveIndex((i) => (i - 1 + project.media.length) % project.media.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
              >
                ‹
              </button>
              <button
                aria-label="Next"
                onClick={() => setActiveIndex((i) => (i + 1) % project.media.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
              >
                ›
              </button>

              <div className="absolute right-4 top-4 z-30 flex items-center gap-2">
                <button aria-label="Zoom" onClick={() => setIsZoomed((s) => !s)} className="rounded bg-black/40 px-2 py-1 text-white">
                  {isZoomed ? "—" : "+"}
                </button>
                <div className="rounded bg-black/40 px-2 py-1 text-xs text-white">{activeIndex + 1}/{project.media.length}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute left-5 top-5 flex gap-2 z-30">
            {project.media.map((m, idx) => (
              <button
                key={m.key}
                onClick={() => setActiveIndex(idx)}
                className={`rounded-md overflow-hidden border ${idx === activeIndex ? "ring-2 ring-slate-300" : "opacity-90"}`}
                aria-label={`${stageLabels[m.key]} thumbnail`}
              >
                {m.poster ? (
                  <Image src={m.poster} alt={m.alt[language]} width={96} height={60} className="object-cover" />
                ) : (
                  <div className="px-3 py-2 text-xs text-white/90">{stageLabels[m.key]}</div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:max-h-[70vh] md:overflow-y-auto md:pr-2">
          <div className="flex items-center justify-between">
            <div className="text-sm text-[rgba(36,48,71,0.6)]">{copy.title}</div>
            <div className="text-xs text-[rgba(36,48,71,0.5)]">{activeIndex + 1} of {project.media.length}</div>
          </div>

          <div className="flex gap-2 overflow-x-auto py-2">
            {project.media.map((m, idx) => (
              <button
                key={`thumb-${m.key}`}
                onClick={() => setActiveIndex(idx)}
                className={`flex-none rounded-md overflow-hidden transition-shadow ${idx === activeIndex ? "shadow-lg ring-2 ring-white/60" : "shadow-sm"}`}
                aria-label={`${stageLabels[m.key]} thumbnail`}
              >
                {m.poster ? (
                  <Image src={m.poster} alt={m.alt[language]} width={160} height={90} className="object-cover" />
                ) : (
                  <div className="h-20 w-32 bg-white/70 flex items-center justify-center">{stageLabels[m.key]}</div>
                )}
              </button>
            ))}
          </div>

          <div className="mt-4">
            <DialogClose asChild>
              <Button variant="primary" size="md" className="self-start">
                {t("projects.modal.close")}
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
