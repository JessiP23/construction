"use client";

import Image from "next/image";
import { NavigationBar } from "@/components/navigation-bar";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

// metadata removed because this file is a client component (uses useTranslation)

type ProjectCopy = {
  title: string;
  location: string;
};

export default function ProjectsPage() {
  const { t } = useTranslation();
  const projectCopy = useMemo(() => t("projects.items", { returnObjects: true }) as Record<string, ProjectCopy>, [t]);

  return (
    <main className="min-h-screen">
      <NavigationBar />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <SectionHeading
            eyebrow={t("projects.title")}
            title={t("projects.subtitle")}
            description={null}
          />

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const before = project.media.find((m) => m.key === "before");
              const after = project.media.find((m) => m.key === "after");
              const copy = (projectCopy as Record<string, ProjectCopy>)[project.id];

              return (
                <Card key={project.id} className="p-0">
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4c4f5a]">
                      {copy?.location ?? project.coverAlt.en}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-[#0b1f3b]">{copy?.title ?? project.id}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-1">
                    <figure className="relative aspect-[4/3] overflow-hidden">
                      {before ? (
                        <Image src={before.src} alt={before.alt.en} fill className="object-cover" />
                      ) : null}
                    </figure>
                    <figure className="relative aspect-[4/3] overflow-hidden">
                      {after ? (
                        <Image src={after.src} alt={after.alt.en} fill className="object-cover" />
                      ) : null}
                    </figure>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
