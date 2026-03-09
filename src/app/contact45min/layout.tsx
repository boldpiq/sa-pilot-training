import type { Metadata } from "next"

const OG_IMAGE = "https://assets.cdn.filesafe.space/2YVSGppZ3t1nNSl74HPu/media/6970aa72d4fb90fe7dc9068b.png"

export const metadata: Metadata = {
  title: "Book a 45-Minute Appointment",
  description: "Schedule a focused 45-minute set appointment with Boldpiq. Ideal for clients ready to accelerate their project with a dedicated strategy session.",
  keywords: [
    "45 minute appointment Boldpiq", "book client session South Africa",
    "Boldpiq contact 45min", "project strategy session web design",
    "set appointment web developer South Africa",
  ],
  openGraph: {
    title: "Book a 45-Min Appointment | Boldpiq",
    description: "A 45-minute dedicated session to deep dive into your project, strategy, and next steps.",
    url: "https://www.boldpiq.com/contact45min",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Book a 45-Minute Appointment with Boldpiq" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a 45-Min Appointment | Boldpiq",
    description: "A 45-minute dedicated session to deep dive into your project, strategy, and next steps.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "https://www.boldpiq.com/contact45min",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Contact45MinLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
