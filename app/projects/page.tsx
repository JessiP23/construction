"use client";

import Image from "next/image";
import { NavigationBar } from "@/components/navigation-bar";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

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
            description={null}
          />

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const before = project.media.find((m) => m.key === "before");
              const after = project.media.find((m) => m.key === "after");
              const copy = (projectCopy as Record<string, ProjectCopy>)[project.id];

              return (
                <Card key={project.id} className="p-0">
                  <div className="grid grid-cols-2 gap-1">
                    <figure className="relative h-44 sm:h-56 md:h-64 overflow-hidden">
                      {before ? (
                        <Image src={before.src} alt={before.alt.en} fill className="object-cover" />
                      ) : null}
                    </figure>
                    <figure className="relative h-44 sm:h-56 md:h-64 overflow-hidden">
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
