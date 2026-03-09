import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "You're Booked — Appointment Confirmed",
  description: "Your Boldpiq appointment is confirmed. Check your inbox for your calendar invite and preparation notes. We look forward to speaking with you.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "You're Booked | Boldpiq",
    description: "Your appointment is confirmed. We can't wait to meet you!",
    url: "https://www.boldpiq.com/thank-you",
  },
  alternates: {
    canonical: "https://www.boldpiq.com/thank-you",
  },
}

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
