import type { Metadata } from "next"

const OG_IMAGE = "https://assets.cdn.filesafe.space/2YVSGppZ3t1nNSl74HPu/media/6970aa72d4fb90fe7dc9068b.png"

export const metadata: Metadata = {
  title: "Data Processing Agreement (DPA)",
  description: "Boldpiq's Data Processing Agreement — outlining how personal data is processed, stored, and protected in compliance with POPIA and applicable data protection legislation.",
  keywords: ["Boldpiq DPA", "data processing agreement South Africa", "POPIA data agreement", "personal data protection Boldpiq"],
  openGraph: {
    title: "Data Processing Agreement | Boldpiq",
    description: "How Boldpiq processes and protects personal data in compliance with POPIA.",
    url: "https://www.boldpiq.com/dpa",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Boldpiq DPA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Processing Agreement | Boldpiq",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "https://www.boldpiq.com/dpa",
  },
}

export default function DpaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
