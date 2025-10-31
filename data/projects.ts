export type ProjectStageKey = "before" | "process" | "after";

export type ProjectMedia = {
  key: ProjectStageKey;
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: {
    en: string;
    es: string;
  };
};

export type Project = {
  id: string;
  cover?: string;
  coverAlt: {
    en: string;
    es: string;
  };
  palette: {
    light: string;
    dark: string;
  };
  media: ProjectMedia[];
};

const rawProjects: Array<Partial<Project> & { id: Project["id"] }> = [
  {
    id: "ridgeResidence",
    coverAlt: {
      en: "Completed alpine living room with expansive glazing and timber beams",
      es: "Sala alpina terminada con ventanales y vigas de madera",
    },
    palette: {
      light: "#f6f1eb",
      dark: "#151a24",
    },
    media: [
      {
        key: "before",
        type: "image",
        src: "/stairs1.png",
        alt: {
          en: "Before renovation: compartmentalized mountain home under construction",
          es: "Antes de la renovación: vivienda de montaña compartimentada en obra",
        },
      },
      {
        key: "after",
        type: "image",
        src: "/stairs.png",
        alt: {
          en: "After: open-plan alpine living room with panoramic glazing",
          es: "Después: sala alpina de planta abierta con ventanales panorámicos",
        },
      },
    ],
  },
  {
    id: "cortezLoft",
    coverAlt: {
      en: "Creative loft with warm microcement floors and collaborative zones",
      es: "Loft creativo con pisos de microcemento cálidos y zonas colaborativas",
    },
    palette: {
      light: "#f4ede6",
      dark: "#171819",
    },
    media: [
      {
        key: "after",
        type: "image",
        src: '/door.png',
        alt: {
          en: "Before: raw industrial loft with exposed concrete",
          es: "Antes: loft industrial crudo con concreto expuesto",
        },
      },
      {
        key: "before",
        type: "image",
        src: "/door1.png",
        alt: {
          en: "After: luminous creative loft with layered work lounges",
          es: "Después: loft creativo luminoso con zonas de trabajo estratificadas",
        },
      },
    ],
  },
  {
    id: "harborHouse",
    cover: "/renovation.png",
    coverAlt: {
      en: "Waterfront residence with soft neutral interiors overlooking the harbor",
      es: "Residencia frente al mar con interiores neutros y vistas a la bahía",
    },
    palette: {
      light: "#eef4f6",
      dark: "#101827",
    },
    media: [
      {
        key: "after",
        type: "image",
        src: "/renovation.png",
        alt: {
          en: "Before: weathered waterfront facade with peeling paint",
          es: "Antes: fachada frente al mar desgastada con pintura descascarada",
        },
      },
      {
        key: "before",
        type: "image",
        src: "/renovation1.png",
        alt: {
          en: "After: living room with marine glazing and serene palette",
          es: "Después: sala con cristalería marina y paleta serena",
        },
      },
    ],
  },
  {
    id: "solsticeSpa",
    cover: "/bathroom.png",
    coverAlt: {
      en: "Indoor-outdoor spa pavilion surrounded by greenery",
      es: "Pabellón de spa interior-exterior rodeado de vegetación",
    },
    palette: {
      light: "#f1f4ed",
      dark: "#101b15",
    },
    media: [
        {
        key: "after",
        type: "image",
        src: '/bathroom.png',
        alt: {
          en: "Before: underutilized courtyard with sparse landscaping",
          es: "Antes: patio subutilizado con paisajismo escaso",
        },
      },
      {
        key: "process",
        type: "image",
        src: '/bathroom1.png',
        alt: {
          en: "Before: underutilized courtyard with sparse landscaping",
          es: "Antes: patio subutilizado con paisajismo escaso",
        },
      },
      {
        key: "process",
        type: "image",
        src: '/bathroom2.png',
        alt: {
          en: "Process: concrete forming and pool waterproofing",
          es: "Proceso: encofrado de concreto y impermeabilización de piscina",
        },
      },
      {
        key: "before",
        type: "image",
        src: '/bathroom3.png',
        alt: {
          en: "After: tranquil hydrotherapy pavilion with lush planting",
          es: "Después: pabellón de hidroterapia sereno con vegetación abundante",
        },
      },
    ],
  },
];

rawProjects.push(
  {
    id: "cliffHouse",
    coverAlt: {
      en: "Cliffside residence with panoramic decks",
      es: "Residencia en acantilado con terrazas panorámicas",
    },
    palette: { light: "#f6f4ef", dark: "#0f2430" },
    media: [
      {
        key: "before",
        type: "image",
        src: "/build.png",
        alt: { en: "Before: raw cliff access and retaining walls", es: "Antes: acceso sin terminar y muros de contención" },
      },
      {
        key: "after",
        type: "image",
        src: "/build1.png",
        alt: { en: "After: terraces and glazing embracing the view", es: "Después: terrazas y acristalamiento que abrazan la vista" },
      },
    ],
  },
  {
    id: "studioVista",
    coverAlt: { en: "Creative studio with layered volumes", es: "Estudio creativo con volúmenes estratificados" },
    palette: { light: "#f5f2ec", dark: "#151018" },
    media: [
      { key: "before", type: "image", src: "/home.png", alt: { en: "Before: closed loft with limited light", es: "Antes: loft cerrado con luz limitada" } },
      { key: "after", type: "image", src: "/home1.png", alt: { en: "After: open studio with warm finishes", es: "Después: estudio abierto con acabados cálidos" } },
    ],
  },
  {
    id: "orchardCottage",
    coverAlt: { en: "Cottage set among orchard plantings", es: "Cabaña entre plantaciones de huerto" },
    palette: { light: "#eef6ee", dark: "#102015" },
    media: [
      { key: "before", type: "image", src: "/new.png", alt: { en: "Before: small outdated bath", es: "Antes: baño pequeño y anticuado" } },
      { key: "after", type: "image", src: "/new1.png", alt: { en: "After: bright spa-like bathroom", es: "Después: baño luminoso estilo spa" } },
    ],
  },
  {
    id: "urbanRow",
    coverAlt: { en: "Rowhouse retrofit with modern joinery", es: "Reforma de vivienda adosada con carpintería moderna" },
    palette: { light: "#f3efe8", dark: "#111318" },
    media: [
      { key: "before", type: "image", src: "/paint.png", alt: { en: "Before: worn finishes and compartmentalized plan", es: "Antes: acabados desgastados y planta compartimentada" } },
      { key: "after", type: "image", src: "/paint1.png", alt: { en: "After: unified plan and refined palette", es: "Después: planta unificada y paleta refinada" } },
    ],
  },
  {
    id: "sunsetRetreat",
    coverAlt: { en: "Sunset-facing pavilion with deep overhangs", es: "Pabellón con vista al atardecer y aleros profundos" },
    palette: { light: "#fbf6f0", dark: "#241814" },
    media: [
      { key: "before", type: "image", src: "/remod.png", alt: { en: "Before: segmented circulation and stairs", es: "Antes: circulación segmentada y escaleras" } },
      { key: "after", type: "image", src: "/remod1.png", alt: { en: "After: repaired stairs and connected volumes", es: "Después: escaleras reparadas y volúmenes conectados" } },
    ],
  },
  {
    id: "harborLoft",
    coverAlt: { en: "Adaptive reuse loft near the harbor", es: "Loft de reutilización adaptativa cerca de la bahía" },
    palette: { light: "#eef3f6", dark: "#08121a" },
    media: [
      { key: "before", type: "image", src: "/wall.png", alt: { en: "Before: closed facade and limited openings", es: "Antes: fachada cerrada y aberturas limitadas" } },
      { key: "after", type: "image", src: "/wall1.png", alt: { en: "After: new openings and coastal finishes", es: "Después: nuevas aberturas y acabados costeros" } },
    ],
  },
);

export const projects: Project[] = rawProjects.map((p) => {
  const media = p.media ?? [];
  const afterMedia = media.find((m) => m.key === "after");
  const first = media[0];
  const cover = (p.cover as string | undefined) ?? afterMedia?.src ?? first?.src ?? "";
  return {
    ...(p as Project),
    cover,
    media: media as ProjectMedia[],
  } as Project;
});