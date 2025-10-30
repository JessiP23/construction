import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SpecialtyDetail } from "@/components/specialties/detail";
import { getSpecialtyBySlug, specialties } from "@/data/specialties";
import enTranslations from "@/locales/en.json";

type SpecialtyTranslation = {
  name: string;
  seoDescription?: string;
};

export async function generateStaticParams() {
  return specialties.map((specialty) => ({ slug: specialty.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } | Promise<{ slug: string }> }): Promise<Metadata> {
  const resolved = (await params) as { slug: string };
  const specialty = getSpecialtyBySlug(resolved.slug);
  if (!specialty) {
    return {};
  }

  const specialtiesCopy = (enTranslations.specialties?.items ?? {}) as Record<
    string,
    SpecialtyTranslation
  >;
  const copy = specialtiesCopy[specialty.id] ?? {
    name: specialty.id,
    seoDescription: enTranslations.specialties?.description,
  };

  return {
    title: `${copy.name} | Titino Construction`,
    description: copy.seoDescription ?? enTranslations.specialties?.description,
  };
}

export default async function SpecialtyPage({ params }: { params: { slug: string } | Promise<{ slug: string }> }) {
  const resolved = (await params) as { slug: string };
  const specialty = getSpecialtyBySlug(resolved.slug);
  if (!specialty) {
    notFound();
  }

  return <SpecialtyDetail specialtyId={specialty.id} />;
}
