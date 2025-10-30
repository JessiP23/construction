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
  cover: string;
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

const CLOUDINARY_BASE = "https://res.cloudinary.com/demo/image/fetch/f_auto,q_auto,w_2000";

function buildImage(path: string) {
  return `${CLOUDINARY_BASE}/${path}`;
}

export const projects: Project[] = [
  {
    id: "ridgeResidence",
    cover: buildImage(
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=2000&q=80",
    ),
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
        src: buildImage(
          "https://images.unsplash.com/photo-1529429617124-aee1092c9f6d?auto=format&fit=crop&w=2000&q=80",
        ),
        alt: {
          en: "Before renovation: compartmentalized mountain home under construction",
          es: "Antes de la renovación: vivienda de montaña compartimentada en obra",
        },
      },
      {
        key: "process",
        type: "image",
        src: buildImage(
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80",
        ),
        alt: {
          en: "Process: structural framing with exposed timber beams",
          es: "Proceso: estructura con vigas de madera expuestas",
        },
      },
      {
        key: "after",
        type: "image",
        src: buildImage(
          "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=2000&q=80",
        ),
        alt: {
          en: "After: open-plan alpine living room with panoramic glazing",
          es: "Después: sala alpina de planta abierta con ventanales panorámicos",
        },
      },
    ],
  },
  {
    id: "cortezLoft",
    cover: buildImage(
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80",
    ),
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
        key: "before",
        type: "image",
        src: buildImage(
          "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2000&q=80",
        ),
        alt: {
          en: "Before: raw industrial loft with exposed concrete",
          es: "Antes: loft industrial crudo con concreto expuesto",
        },
      },
      {
        key: "process",
        type: "image",
        src: buildImage(
          "https://images.unsplash.com/photo-1529429703513-243fcdad3f96?auto=format&fit=crop&w=2000&q=80",
        ),
        alt: {
          en: "Process: steel fins and lighting installation",
          es: "Proceso: instalación de aletas de acero e iluminación",
        },
      },
      {
        key: "after",
        type: "image",
        src: buildImage(
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80",
        ),
        alt: {
          en: "After: luminous creative loft with layered work lounges",
          es: "Después: loft creativo luminoso con zonas de trabajo estratificadas",
        },
      },
    ],
  },
  {
    id: "harborHouse",
    cover: buildImage(
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=2000&q=80",
    ),
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
        key: "before",
        type: "image",
        src: buildImage(
          "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=2000&q=80",
        ),
        alt: {
          en: "Before: weathered waterfront facade with peeling paint",
          es: "Antes: fachada frente al mar desgastada con pintura descascarada",
        },
      },
      {
        key: "process",
        type: "image",
        src: buildImage(
          "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=2000&q=80",
        ),
        alt: {
          en: "Process: scaffolding during envelope restoration",
          es: "Proceso: andamios durante la restauración de la envolvente",
        },
      },
      {
        key: "after",
        type: "image",
        src: buildImage(
          "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=2000&q=80",
        ),
        alt: {
          en: "After: living room with marine glazing and serene palette",
          es: "Después: sala con cristalería marina y paleta serena",
        },
      },
    ],
  },
  {
    id: "solsticeSpa",
    cover: buildImage(
      "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=2000&q=80",
    ),
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
        key: "before",
        type: "image",
        src: buildImage(
          "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=2000&q=80",
        ),
        alt: {
          en: "Before: underutilized courtyard with sparse landscaping",
          es: "Antes: patio subutilizado con paisajismo escaso",
        },
      },
      {
        key: "process",
        type: "image",
        src: buildImage(
          "https://images.unsplash.com/photo-1548783307-f63adc1c2a3f?auto=format&fit=crop&w=2000&q=80",
        ),
        alt: {
          en: "Process: concrete forming and pool waterproofing",
          es: "Proceso: encofrado de concreto y impermeabilización de piscina",
        },
      },
      {
        key: "after",
        type: "image",
        src: buildImage(
          "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=2000&q=80",
        ),
        alt: {
          en: "After: tranquil hydrotherapy pavilion with lush planting",
          es: "Después: pabellón de hidroterapia sereno con vegetación abundante",
        },
      },
    ],
  },
];
