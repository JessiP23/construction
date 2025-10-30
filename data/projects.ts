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
  id: "ridgeResidence" | "cortezLoft" | "harborHouse" | "solsticeSpa";
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