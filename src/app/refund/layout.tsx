import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "Boldpiq's refund and cancellation policy for all web design, development, branding, and digital marketing services. Understand your rights and how to submit a refund request.",
  keywords: [
    "Boldpiq refund policy", "web design refund policy South Africa",
    "cancel web design project", "Boldpiq cancellation policy",
  ],
  openGraph: {
    title: "Refund & Cancellation Policy | Boldpiq",
    description: "Transparent refund and cancellation terms for all Boldpiq services.",
    url: "https://www.boldpiq.com/refund",
  },
  alternates: {
    canonical: "https://www.boldpiq.com/refund",
  },
}

export default function RefundLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
