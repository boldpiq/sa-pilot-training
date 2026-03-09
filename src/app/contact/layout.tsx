import type { Metadata } from "next"

const OG_IMAGE = "https://assets.cdn.filesafe.space/2YVSGppZ3t1nNSl74HPu/media/6970aa72d4fb90fe7dc9068b.png"

export const metadata: Metadata = {
  title: "Book a Free Discovery Call",
  description: "Ready to grow? Book a free 30-minute discovery call with Boldpiq. Tell us about your business goals and we'll deliver a clear plan — no fluff, no hard sell.",
  keywords: [
    "book discovery call Boldpiq", "free consultation web design South Africa",
    "contact Boldpiq", "web design consultation Cape Town",
    "book a call web developer South Africa", "get a website quote South Africa",
  ],
  openGraph: {
    title: "Book a Free Discovery Call | Boldpiq",
    description: "Book a free 30-minute discovery call. A straight conversation about your business and what's possible.",
    url: "https://www.boldpiq.com/contact",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Book a Free Discovery Call with Boldpiq" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Discovery Call | Boldpiq",
    description: "Book a free 30-minute discovery call with Boldpiq.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "https://www.boldpiq.com/contact",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
