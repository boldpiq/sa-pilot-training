import type { Metadata } from "next"

const OG_IMAGE = "https://assets.cdn.filesafe.space/2YVSGppZ3t1nNSl74HPu/media/6970aa72d4fb90fe7dc9068b.png"

export const metadata: Metadata = {
  title: "Web Design, Development & Branding Services",
  description: "Explore Boldpiq's full range of services — custom web design, Next.js development, brand identity, e-commerce, and GEO-optimised digital experiences for businesses across South Africa.",
  keywords: [
    "web design services South Africa", "web development services Cape Town",
    "brand identity design South Africa", "e-commerce development services",
    "Next.js web development", "UI/UX design services South Africa",
    "GEO optimised web design", "Boldpiq services",
    "logo design South Africa", "Shopify development South Africa",
  ],
  openGraph: {
    title: "Web Design, Development & Branding Services | Boldpiq",
    description: "Custom web design, development, and brand identity — built for businesses that refuse to blend in.",
    url: "https://www.boldpiq.com/services",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Boldpiq Web Design & Development Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design, Development & Branding Services | Boldpiq",
    description: "Custom web design, development, and brand identity for South African businesses.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "https://www.boldpiq.com/services",
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
