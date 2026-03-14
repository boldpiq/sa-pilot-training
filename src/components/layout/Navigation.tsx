"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useAnimationFrame } from "motion/react"
import Link from "next/link"
import Image from "next/image"


interface NavItem {
  label: string
  href: string
}

interface NavigationProps {
  items?: NavItem[]
  logo?: React.ReactNode
  ctaLabel?: string
  ctaHref?: string
  theme?: "dark" | "light"
}

const defaultItems: NavItem[] = [
  { label: "Programs", href: "/work" },
  { label: "Training", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "WhatsApp", href: "#" },
]


function MenuGlow() {
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  useAnimationFrame((t) => {
    if (ref1.current) {
      const x = Math.sin(t * 0.00028) * 120
      const y = Math.cos(t * 0.00019) * 80
      ref1.current.style.transform = `translate(${x}px, ${y}px)`
    }
    if (ref2.current) {
      const x = Math.cos(t * 0.00022) * 90
      const y = Math.sin(t * 0.00034) * 70
      ref2.current.style.transform = `translate(${x}px, ${y}px)`
    }
  })
  return (
    <>
      <div ref={ref1} style={{ position: "absolute", inset: -160, pointerEvents: "none", background: "radial-gradient(ellipse 55% 48% at 60% 40%, rgba(200,24,26,0.07) 0%, transparent 68%)", willChange: "transform" }} />
      <div ref={ref2} style={{ position: "absolute", inset: -120, pointerEvents: "none", background: "radial-gradient(ellipse 42% 38% at 38% 60%, rgba(200,24,26,0.04) 0%, transparent 62%)", willChange: "transform" }} />
    </>
  )
}

export function Navigation({
  items = defaultItems,
  ctaLabel = "Book Consultation",
  ctaHref = "/contact",
  theme = "dark",
}: NavigationProps) {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const lastY = useRef(0)

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 20)
    setHidden(y > lastY.current && y > 80)
    lastY.current = y
  })

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  // Header bar always stays dark
  const fg = "#fff"
  const bg = "rgba(6,12,24,0.97)"
  const ACCENT = "#C8181A"
  const MUTED = "rgba(255,255,255,0.45)"
  const BORDER = "rgba(255,255,255,0.08)"
  // Mobile popout menu uses light/white theme
  const menuFg = "#060C18"
  const menuMuted = "rgba(6,12,24,0.62)"
  const menuBorder = "rgba(6,12,24,0.10)"

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 clamp(16px, 3vw, 40px)",
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background: bg,
          borderBottom: `1px solid rgba(255,255,255,0.06)`,
          transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image src="/flight.svg" alt="SA Pilot Training" width={64} height={64} style={{ height: 64, width: 64 }} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ gap: 36, alignItems: "center" }}>
          {items.map((item) => (
            <MagneticLink key={item.href} href={item.href} color={fg}>
              {item.label}
            </MagneticLink>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <Link
            href={ctaHref}
            className="nav-cta"
            style={{
              color: "#fff",
              background: ACCENT,
              padding: "8px 20px",
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "-0.01em",
              display: "none",
            }}
          >
            {ctaLabel}
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "flex-end",
            }}
          >
            <motion.span
              animate={{ rotateZ: open ? 45 : 0, y: open ? 7 : 0, width: 24 }}
              style={{ display: "block", height: 2, background: fg, borderRadius: 2, transformOrigin: "center" }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1, width: open ? 0 : 16 }}
              style={{ display: "block", height: 2, background: fg, borderRadius: 2 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={{ rotateZ: open ? -45 : 0, y: open ? -7 : 0, width: 24 }}
              style={{ display: "block", height: 2, background: fg, borderRadius: 2, transformOrigin: "center" }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <MenuGlow />
            {/* ── TOP: badge + CSS Marquee ── */}
            <div style={{ padding: "96px clamp(20px, 5vw, 40px) 32px", borderBottom: `1px solid ${menuBorder}` }}>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "6px 18px", border: `1px solid ${menuBorder}`, borderRadius: 100, marginBottom: 28, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: menuMuted }}
              >
                <motion.span
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: 7, height: 7, borderRadius: "50%", background: ACCENT, display: "block", flexShrink: 0 }}
                />
                SACAA-Accredited &middot; ICAO-Compliant &middot; International Students
              </motion.div>

              {/* Pure CSS marquee */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                style={{
                  margin: "0 calc(-1 * clamp(20px, 5vw, 40px))",
                  borderTop: `1px solid ${menuBorder}`,
                  borderBottom: `1px solid ${menuBorder}`,
                  padding: "13px 0",
                  overflow: "hidden",
                  pointerEvents: "none",
                  touchAction: "none",
                }}
              >
                <div style={{ display: "flex", animation: "menuMarquee 28s linear infinite", whiteSpace: "nowrap", width: "max-content" }}>
                  {[...Array(4)].map((_, rep) => (
                    <span key={rep} style={{ display: "inline-flex", alignItems: "center" }}>
                      {["PPL Training", "CPL Training", "ATPL Training", "SACAA Accredited", "ICAO Compliant", "Visa Guidance", "300+ Flyable Days", "Cost-Efficient Training", "End-to-End Support", "International Students"].map((item) => (
                        <span key={item} style={{ display: "inline-flex", alignItems: "center", fontSize: 13, fontWeight: 500, color: menuMuted }}>
                          {item}
                          <span style={{ margin: "0 16px", opacity: 0.3 }}>•</span>
                        </span>
                      ))}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ── NAV LINKS ── */}
            <nav style={{ padding: "24px clamp(20px, 5vw, 40px)", display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
              {items.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.06, duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "block",
                      fontSize: "clamp(28px, 7vw, 52px)",
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      color: menuFg,
                      textDecoration: "none",
                      lineHeight: 1.15,
                      padding: "4px 0",
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Book consultation CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.78, duration: 0.4 }}
                style={{ marginTop: 20 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  style={{
                    display: "inline-block",
                    padding: "14px 32px",
                    background: ACCENT,
                    color: "#fff",
                    borderRadius: 100,
                    fontSize: 15,
                    fontWeight: 700,
                    textDecoration: "none",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Book Consultation →
                </Link>
              </motion.div>
            </nav>

            {/* ── FOOTER ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              style={{ borderTop: `1px solid ${menuBorder}`, padding: "28px clamp(20px, 5vw, 40px) 40px", display: "flex", flexDirection: "column", gap: 20 }}
            >
              {/* Logo + tagline */}
              <div>
                <Link href="/" onClick={() => setOpen(false)} style={{ display: "inline-block", marginBottom: 10 }}>
                  <Image src="/flight.svg" alt="SA Pilot Training" width={80} height={80} style={{ height: 80, width: 80 }} />
                </Link>
                <p style={{ color: menuMuted, fontSize: 12, lineHeight: 1.6, maxWidth: 280 }}>
                  Expert guidance for international student pilots training in South Africa.
                </p>
              </div>

              {/* Social links */}
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {socialLinks.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="nav-social-link" style={{ color: menuMuted, fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}>
                    {s.label}
                  </a>
                ))}
              </div>

              {/* Legal links */}
              <div style={{ borderTop: `1px solid ${menuBorder}`, paddingTop: 16, display: "flex", flexWrap: "wrap", gap: "4px 0", alignItems: "center" }}>
                {[
                  { label: "Terms of Service", href: "/terms" },
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Refund Policy", href: "/refund" },
                  { label: "PAIA Manual", href: "/paia" },
                  { label: "DPA", href: "/dpa" },
                ].map((l, i, arr) => (
                  <span key={l.href} style={{ display: "inline-flex", alignItems: "center" }}>
                    <Link href={l.href} onClick={() => setOpen(false)} className="footer-nav-link" style={{ color: menuMuted, fontSize: 11, textDecoration: "none", opacity: 0.7 }}>
                      {l.label}
                    </Link>
                    {i < arr.length - 1 && (
                      <span style={{ color: menuMuted, fontSize: 11, opacity: 0.3, margin: "0 8px" }}>|</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Copyright */}
              <p style={{ color: menuMuted, fontSize: 11, opacity: 0.7 }}>
                © {new Date().getFullYear()} SA Pilot Training. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .nav-cta { display: inline-block !important; }
        }
        @keyframes menuMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }
        .nav-social-link:hover { color: #C8181A !important; }
      `}</style>
    </>
  )
}

// Magnetic nav link
function MagneticLink({ href, children, color }: { href: string; children: React.ReactNode; color: string }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect()
    setPos({ x: (e.clientX - rect.left - rect.width / 2) * 0.3, y: (e.clientY - rect.top - rect.height / 2) * 0.3 })
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ color, textDecoration: "none", fontSize: 14, fontWeight: 500, letterSpacing: "-0.01em", opacity: 0.8 }}
      whileHover={{ opacity: 1 }}
    >
      {children}
    </motion.a>
  )
}
