import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { LenisProvider } from "@/components/scroll/LenisProvider"
import { PageTransition } from "@/components/transitions/PageTransition"
import { Navigation } from "@/components/layout/Navigation"
import "./globals.css"
import "../styles/tokens.css"

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "BoldPiq — Web Design & Development",
  description: "High-performance websites that attract, convert, and retain. Built for businesses that demand results.",
  openGraph: {
    title: "BoldPiq — Web Design & Development",
    description: "High-performance websites that attract, convert, and retain.",
    type: "website",
  },
}

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>
        <Navigation
          items={navItems}
          ctaLabel="Get Started"
          ctaHref="/contact"
          theme="dark"
        />
        <LenisProvider>
          <PageTransition variant="fade">
            {children}
          </PageTransition>
        </LenisProvider>
      </body>
    </html>
  )
}
