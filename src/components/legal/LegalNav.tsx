"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Refund Policy", href: "/refund" },
  { label: "PAIA Manual", href: "/paia" },
  { label: "Data Processing Agreement", href: "/dpa" },
]

const ACCENT = "#C8181A"
const MUTED = "rgba(6,12,24,0.52)"
const BORDER = "rgba(6,12,24,0.10)"

export function LegalNav() {
  const pathname = usePathname()
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "8px 4px",
      marginBottom: 48,
      padding: "16px 20px",
      border: `1px solid ${BORDER}`,
      borderRadius: 12,
      background: "rgba(6,12,24,0.03)",
    }}>
      {links.map((link, i) => (
        <span key={link.href} style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {i > 0 && <span style={{ color: BORDER, fontSize: 12, marginRight: 4 }}>·</span>}
          <Link
            href={link.href}
            style={{
              fontSize: 13,
              color: pathname === link.href ? ACCENT : MUTED,
              textDecoration: "none",
              fontWeight: pathname === link.href ? 700 : 400,
              borderBottom: pathname === link.href ? `1px solid ${ACCENT}` : "1px solid transparent",
              paddingBottom: 1,
              transition: "color 0.2s",
            }}
          >
            {link.label}
          </Link>
        </span>
      ))}
    </div>
  )
}
