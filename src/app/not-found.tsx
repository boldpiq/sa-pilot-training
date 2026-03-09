import Link from "next/link"
import type { Metadata } from "next"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Page Not Found — 404",
  description: "The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
  robots: { index: false, follow: true },
}

const BG = "#0B0F1C"
const ACCENT = "#C4541A"
const MUTED = "rgba(255,255,255,0.45)"
const BORDER = "rgba(255,255,255,0.08)"

export default function NotFound() {
  return (
    <>
    <main
      style={{
        background: BG,
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "clamp(100px, 14vw, 160px) clamp(20px, 4vw, 48px) 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `radial-gradient(ellipse 55% 45% at 50% 45%, rgba(196,84,26,0.12) 0%, transparent 65%)`,
        }}
      />

      {/* Large ghost number */}
      <div
        style={{
          position: "absolute",
          fontSize: "clamp(200px, 40vw, 480px)",
          fontWeight: 900,
          color: "rgba(255,255,255,0.025)",
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.05em",
          lineHeight: 1,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -52%)",
        }}
      >
        404
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 560 }}>
        {/* Eyebrow */}
        <div style={{ display: "flex", gap: 16, alignItems: "center", justifyContent: "center", marginBottom: 32 }}>
          <span style={{ width: 32, height: 1, background: ACCENT, flexShrink: 0 }} />
          <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED }}>Error 404</span>
          <span style={{ width: 32, height: 1, background: ACCENT, flexShrink: 0 }} />
        </div>

        <h1
          style={{
            fontSize: "clamp(40px, 7vw, 90px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
            marginBottom: 24,
          }}
        >
          Page not<br /><span style={{ color: ACCENT }}>found.</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(15px, 1.3vw, 19px)",
            color: MUTED,
            lineHeight: 1.65,
            marginBottom: 48,
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        {/* Quick links */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 48,
          }}
        >
          <Link
            href="/"
            style={{
              padding: "15px 36px",
              background: ACCENT,
              color: "#fff",
              borderRadius: 100,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Go Home
          </Link>
          <Link
            href="/work"
            style={{
              padding: "15px 36px",
              border: `1px solid ${BORDER}`,
              color: "#fff",
              borderRadius: 100,
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            View Our Work
          </Link>
          <Link
            href="/contact"
            style={{
              padding: "15px 36px",
              border: `1px solid ${BORDER}`,
              color: "#fff",
              borderRadius: 100,
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Helpful pages */}
        <div
          style={{
            padding: "24px 32px",
            border: `1px solid ${BORDER}`,
            borderRadius: 20,
            background: "rgba(255,255,255,0.03)",
            textAlign: "left",
          }}
        >
          <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 16 }}>Helpful pages</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px" }}>
            {[
              { label: "Services", href: "/services" },
              { label: "About Us", href: "/about" },
              { label: "Our Work", href: "/work" },
              { label: "Book a Call", href: "/contact" },
              { label: "Refund Policy", href: "/refund" },
              { label: "Privacy Policy", href: "/privacy" },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: MUTED, fontSize: 14, textDecoration: "none", padding: "4px 0", display: "flex", alignItems: "center", gap: 8 }}
              >
                <span style={{ color: ACCENT, fontSize: 8 }}>✦</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}
