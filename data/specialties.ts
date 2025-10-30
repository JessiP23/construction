import type { Project } from "./projects";

export type SpecialtyId =
  | "wholeHomeRemodeling"
  | "envelopeRenewal"
  | "paintingPlaster"
  | "luxuryFlooring"
  | "millworkCabinetry"
  | "outdoorArchitecture";

export type Specialty = {
  id: SpecialtyId;
  slug: string;
  orderLabel: string;
  accent: string;
  tint: string;
  tintBorder: string;
  relatedProjectIds: Array<Project["id"]>;
};

export const specialties: Specialty[] = [
  {
    id: "wholeHomeRemodeling",
    slug: "whole-home-remodeling",
    orderLabel: "01",
    accent: "#0b1f3b",
    tint: "rgba(255,255,255,0.05)",
    tintBorder: "rgba(255,255,255,0.12)",
    relatedProjectIds: ["ridgeResidence", "harborHouse"],
  },
  {
    id: "envelopeRenewal",
    slug: "roofing-and-envelope-renewal",
    orderLabel: "02",
    accent: "#10263f",
    tint: "rgba(16,38,63,0.18)",
    tintBorder: "rgba(255,255,255,0.16)",
    relatedProjectIds: ["harborHouse"],
  },
  {
    id: "paintingPlaster",
    slug: "painting-and-plaster-artistry",
    orderLabel: "03",
    accent: "#182d42",
    tint: "rgba(24,45,66,0.22)",
    tintBorder: "rgba(255,255,255,0.18)",
    relatedProjectIds: ["cortezLoft"],
  },
  {
    id: "luxuryFlooring",
    slug: "luxury-flooring-systems",
    orderLabel: "04",
    accent: "#1f3750",
    tint: "rgba(31,55,80,0.22)",
    tintBorder: "rgba(255,255,255,0.18)",
    relatedProjectIds: ["cortezLoft", "solsticeSpa"],
  },
  {
    id: "millworkCabinetry",
    slug: "custom-millwork-and-cabinetry",
    orderLabel: "05",
    accent: "#162c3f",
    tint: "rgba(22,44,63,0.22)",
    tintBorder: "rgba(255,255,255,0.18)",
    relatedProjectIds: ["ridgeResidence"],
  },
  {
    id: "outdoorArchitecture",
    slug: "outdoor-living-architecture",
    orderLabel: "06",
    accent: "#1b2e2a",
    tint: "rgba(27,46,42,0.24)",
    tintBorder: "rgba(255,255,255,0.18)",
    relatedProjectIds: ["solsticeSpa"],
  },
];

export const specialtiesBySlug = new Map<string, Specialty>(
  specialties.map((specialty) => [specialty.slug, specialty]),
);

export function getSpecialtyBySlug(slug: string) {
  return specialtiesBySlug.get(slug);
}
