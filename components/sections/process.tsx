"use client";

import { useTranslation } from "react-i18next";

import { ProcessTimeline, ProcessStage } from "@/components/process-timeline";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function ProcessSection() {
  const { t } = useTranslation();
  const stages = t("process.stages", { returnObjects: true }) as ProcessStage[];

  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:px-10">
        <SectionHeading
          eyebrow={t("process.title")}
          title={t("process.subtitle")}
          description={null}
        />
        <Reveal>
          <ProcessTimeline stages={stages} />
        </Reveal>
      </div>
    </section>
  );
}
