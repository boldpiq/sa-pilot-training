"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react"
import Link from "next/link"

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
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Navigation({
  items = defaultItems,
  logo,
  ctaLabel = "Get in touch",
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

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const isDark = theme === "dark"
  const fg = isDark ? "#fff" : "#111"
  const bg = isDark ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.85)"

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
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          background: scrolled ? bg : "transparent",
          borderBottom: scrolled ? `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}` : "none",
          transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ color: fg, textDecoration: "none", fontWeight: 700, fontSize: 18, letterSpacing: "-0.03em" }}>
          {logo ?? "boldpiq"}
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: 36, alignItems: "center" }}>
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
            style={{
              color: isDark ? "#000" : "#fff",
              background: fg,
              padding: "8px 20px",
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "-0.01em",
              display: "none", // show via CSS on desktop
            }}
            className="nav-cta"
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
              animate={{ rotateZ: open ? 45 : 0, y: open ? 7 : 0, width: open ? 24 : 24 }}
              style={{ display: "block", height: 2, background: fg, borderRadius: 2, transformOrigin: "center" }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1, width: open ? 0 : 16 }}
              style={{ display: "block", height: 2, background: fg, borderRadius: 2 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={{ rotateZ: open ? -45 : 0, y: open ? -7 : 0, width: open ? 24 : 24 }}
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
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: isDark ? "#0a0a0a" : "#fafafa",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "100px 24px 60px",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {items.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "block",
                      fontSize: "clamp(40px, 10vw, 80px)",
                      fontWeight: 700,
                      letterSpacing: "-0.04em",
                      color: fg,
                      textDecoration: "none",
                      lineHeight: 1.1,
                      padding: "8px 0",
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ marginTop: 60, display: "flex", gap: 24, color: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)", fontSize: 13 }}
            >
              <Link href="https://instagram.com" style={{ color: "inherit" }}>Instagram</Link>
              <Link href="https://twitter.com" style={{ color: "inherit" }}>Twitter</Link>
              <Link href="https://linkedin.com" style={{ color: "inherit" }}>LinkedIn</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
