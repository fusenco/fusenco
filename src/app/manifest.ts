import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FUSEN Used Machinery",
    short_name: "FUSEN",
    description:
      "Inspected used nut cold heading machines, bolt heading machines and screw cold formers with worldwide export support.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F5F0",
    theme_color: "#8B1A1A",
    lang: "en",
    dir: "ltr",
    categories: ["business", "industrial", "machinery"],
    icons: [
      {
        src: "/fusen-logo.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/fusen-logo.png",
        sizes: "any",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
