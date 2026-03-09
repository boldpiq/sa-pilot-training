import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Boldpiq — Web Design & Development",
    short_name: "Boldpiq",
    description: "High-performance websites and graphics that attract, convert, and retain.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0F1C",
    theme_color: "#0B0F1C",
    icons: [
      {
        src: "https://assets.cdn.filesafe.space/2YVSGppZ3t1nNSl74HPu/media/6970121015885e63271908fa.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  }
}
