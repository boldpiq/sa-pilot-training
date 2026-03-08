import type { Metadata } from "next"

interface SeoConfig {
  title: string
  description: string
  url: string
  siteName: string
  image?: string       // absolute URL to OG image
  type?: "website" | "article"
  noIndex?: boolean
}

export function generateMeta(config: SeoConfig): Metadata {
  const { title, description, url, siteName, image, type = "website", noIndex } = config

  return {
    title,
    description,
    metadataBase: new URL(url),
    openGraph: {
      title,
      description,
      url,
      siteName,
      type,
      ...(image && { images: [{ url: image, width: 1200, height: 630, alt: title }] }),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      ...(image && { images: [image] }),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: { canonical: url },
  }
}

// ─── Usage in a page.tsx ────────────────────────────────────────────────────
// export const metadata = generateMeta({
//   title: "ClientName — Tagline",
//   description: "One clear sentence about what they do.",
//   url: "https://clientdomain.com",
//   siteName: "ClientName",
//   image: "https://clientdomain.com/og.png",
// })
