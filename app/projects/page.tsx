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
  const projectCopy = useMemo(
    () => t("projects.items", { returnObjects: true }) as Record<string, ProjectCopy>,
    [t],
  );

  return (
    <main className="min-h-screen">
      <NavigationBar />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <SectionHeading description={null} />

          <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project) => {
              const before = project.media.find((m) => m.key === "before");
              const after = project.media.find((m) => m.key === "after");

              return (
                <Card key={project.id} className="p-0 group hover:shadow-lg transition-shadow duration-300">
                  <div className="grid grid-cols-2 gap-2">
                    <figure className="relative overflow-hidden h-64 sm:h-80 md:h-96">
                      {before ? (
                        <Image
                          src={before.src}
                          alt={before.src}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      ) : null}
                    </figure>
                    <figure className="relative overflow-hidden h-64 sm:h-80 md:h-96">
                      {after ? (
                        <Image
                          src={after.src}
                          alt={after.src}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
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
