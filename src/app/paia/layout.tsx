import type { Metadata } from "next"

const OG_IMAGE = "https://assets.cdn.filesafe.space/2YVSGppZ3t1nNSl74HPu/media/6970aa72d4fb90fe7dc9068b.png"

export const metadata: Metadata = {
  title: "PAIA Manual — Promotion of Access to Information Act",
  description: "Boldpiq's PAIA Manual — your rights under the Promotion of Access to Information Act (PAIA) and how to request access to records held by Boldpiq.",
  keywords: ["Boldpiq PAIA", "PAIA manual South Africa", "access to information South Africa", "POPIA PAIA compliance Boldpiq"],
  openGraph: {
    title: "PAIA Manual | Boldpiq",
    description: "Boldpiq's PAIA Manual outlining your rights to access information under South African law.",
    url: "https://www.boldpiq.com/paia",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Boldpiq PAIA Manual" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PAIA Manual | Boldpiq",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "https://www.boldpiq.com/paia",
  },
}

export default function PaiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
