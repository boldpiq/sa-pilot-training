import type { Metadata } from "next"

const OG_IMAGE = "https://assets.cdn.filesafe.space/2YVSGppZ3t1nNSl74HPu/media/6970aa72d4fb90fe7dc9068b.png"

export const metadata: Metadata = {
  title: "Book a 45-Minute Set Appointment",
  description: "Reserve a focused 45-minute working session with Boldpiq — dive deep into your project, align on strategy, and map out concrete next steps.",
  keywords: [
    "book 45 minute appointment Boldpiq", "set appointment web design South Africa",
    "client session Boldpiq", "website project strategy call",
  ],
  openGraph: {
    title: "Book a 45-Min Set Appointment | Boldpiq",
    description: "A focused 45-minute session reserved for existing clients and qualified leads ready to move forward.",
    url: "https://www.boldpiq.com/booking",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Book a 45-Minute Appointment with Boldpiq" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a 45-Min Set Appointment | Boldpiq",
    description: "A focused 45-minute strategy session with Boldpiq.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "https://www.boldpiq.com/booking",
  },
}

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
