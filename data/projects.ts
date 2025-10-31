export type ProjectStageKey = "before" | "process" | "after";

export type ProjectMedia = {
  key: ProjectStageKey;
  type: "image" | "video";
  src: string;
  poster?: string;
};

export type Project = {
  id: string;
  cover?: string;
  palette: {
    light: string;
    dark: string;
  };
  media: ProjectMedia[];
};

const rawProjects: Array<Partial<Project> & { id: Project["id"] }> = [
  {
    id: "ridgeResidence",
    
    palette: {
      light: "#f6f1eb",
      dark: "#151a24",
    },
    media: [
      { key: "before", type: "image", src: "/stairs1.png" },
      { key: "after", type: "image", src: "/stairs.png" },
    ],
  },
  {
    id: "cortezLoft",
    palette: {
      light: "#f4ede6",
      dark: "#171819",
    },
    media: [ { key: "after", type: "image", src: "/door.png" }, { key: "before", type: "image", src: "/door1.png" } ],
  },
  {
    id: "harborHouse",
    cover: "/renovation.png",
    palette: {
      light: "#eef4f6",
      dark: "#101827",
    },
    media: [ { key: "after", type: "image", src: "/renovation.png" }, { key: "before", type: "image", src: "/renovation1.png" } ],
  },
  {
    id: "solsticeSpa",
    cover: "/bathroom.png",
    palette: {
      light: "#f1f4ed",
      dark: "#101b15",
    },
    media: [ { key: "after", type: "image", src: "/bathroom.png" }, { key: "process", type: "image", src: "/bathroom1.png" }, { key: "process", type: "image", src: "/bathroom2.png" }, { key: "before", type: "image", src: "/bathroom3.png" } ],
  },
];

rawProjects.push(
  { id: "cliffHouse", palette: { light: "#f6f4ef", dark: "#0f2430" }, media: [ { key: "before", type: "image", src: "/build.png" }, { key: "after", type: "image", src: "/build1.png" } ] },
  { id: "studioVista", palette: { light: "#f5f2ec", dark: "#151018" }, media: [ { key: "before", type: "image", src: "/home.png" }, { key: "after", type: "image", src: "/home1.png" } ] },
  { id: "orchardCottage", palette: { light: "#eef6ee", dark: "#102015" }, media: [ { key: "before", type: "image", src: "/new.png" }, { key: "after", type: "image", src: "/new1.png" } ] },
  { id: "urbanRow", palette: { light: "#f3efe8", dark: "#111318" }, media: [ { key: "before", type: "image", src: "/paint.png" }, { key: "after", type: "image", src: "/paint1.png" } ] },
  { id: "sunsetRetreat", palette: { light: "#fbf6f0", dark: "#241814" }, media: [ { key: "before", type: "image", src: "/remod.png" }, { key: "after", type: "image", src: "/remod1.png" } ] },
  { id: "harborLoft", palette: { light: "#eef3f6", dark: "#08121a" }, media: [ { key: "before", type: "image", src: "/wall.png" }, { key: "after", type: "image", src: "/wall1.png" } ] },
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