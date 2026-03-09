import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Boldpiq's terms of service governing the use of our website and all web design, development, and branding services.",
  openGraph: {
    title: "Terms of Service | Boldpiq",
    description: "Terms governing the use of Boldpiq's website and services.",
    url: "https://www.boldpiq.com/terms",
  },
  alternates: {
    canonical: "https://www.boldpiq.com/terms",
  },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
