"use client"
import Link from "next/link"
import Image from "next/image"

const BG = "#060C18"
const ACCENT = "#C8181A"
const MUTED = "rgba(255,255,255,0.55)"
const BORDER = "rgba(255,255,255,0.10)"

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "WhatsApp", href: "#" },
]

const legalLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Refund Policy", href: "/refund" },
  { label: "PAIA Manual", href: "/paia" },
  { label: "DPA", href: "/dpa" },
]

export function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${BORDER}`, background: BG }}>
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "60px clamp(20px, 4vw, 48px) 32px",
        }}
      >
        {/* Top row */}
        <div
          className="flex flex-col md:flex-row md:items-start md:justify-between"
          style={{ gap: 48, marginBottom: 48 }}
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: 12 }}>
              <Image src="/flight.svg" alt="SA Pilot Training" width={80} height={80} style={{ height: 80, width: 80 }} />
            </Link>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, maxWidth: 280 }}>
              Expert guidance for international student pilots training in South Africa.
            </p>
          </div>

          {/* Nav links */}
          <nav>
            <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 16 }}>Navigation</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Programs", href: "/work" },
                { label: "Training", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Book Consultation", href: "/contact" },
              ].map(item => (
                <Link key={item.label} href={item.href} className="footer-nav-link-orange" style={{ color: MUTED, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Social */}
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 16 }}>Follow Us</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
              {socialLinks.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-social-link" style={{ color: MUTED, fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}>
                  {s.label}
                </a>
              ))}
            </div>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                padding: "12px 28px",
                background: ACCENT,
                color: "#fff",
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              Book Consultation
            </Link>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 16 }}>Get In Touch</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="mailto:info@sapilottraining.co.za" className="footer-social-link" style={{ color: MUTED, fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}>info@sapilottraining.co.za</a>
              <a href="tel:+27000000000" className="footer-social-link" style={{ color: MUTED, fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}>+27 (0) 00 000 0000</a>
              <a href="https://api.whatsapp.com/send/?phone=27000000000" target="_blank" rel="noopener noreferrer" className="footer-social-link" style={{ color: MUTED, fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}>WhatsApp Us</a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            borderTop: `1px solid ${BORDER}`,
            paddingTop: 24,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div className="flex flex-wrap" style={{ gap: "6px 0", alignItems: "center" }}>
            {legalLinks.map((l, i) => (
              <span key={l.href} style={{ display: "inline-flex", alignItems: "center" }}>
                <Link href={l.href} className="footer-nav-link" style={{ color: MUTED, fontSize: 12, textDecoration: "none" }}>
                  {l.label}
                </Link>
                {i < legalLinks.length - 1 && (
                  <span style={{ color: MUTED, fontSize: 12, opacity: 0.4, margin: "0 10px" }}>|</span>
                )}
              </span>
            ))}
          </div>
          <p style={{ color: MUTED, fontSize: 12, opacity: 0.6 }}>
            © {new Date().getFullYear()} SA Pilot Training. All rights reserved. · SACAA-Accredited &middot; ICAO-Compliant
          </p>
        </div>
      </div>
      <style>{`.footer-social-link:hover, .footer-nav-link-orange:hover, .footer-nav-link:hover { color: #fff !important; }`}</style>
    </footer>
  )
}
