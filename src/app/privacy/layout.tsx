import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Boldpiq's privacy policy — how we collect, use, and protect your personal information in compliance with POPIA and GDPR.",
  keywords: ["Boldpiq privacy policy", "data protection South Africa", "POPIA compliance", "web design privacy policy"],
  openGraph: {
    title: "Privacy Policy | Boldpiq",
    description: "How Boldpiq collects, uses, and protects your personal information.",
    url: "https://www.boldpiq.com/privacy",
  },
  alternates: {
    canonical: "https://www.boldpiq.com/privacy",
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
