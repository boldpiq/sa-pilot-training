"use client"
import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useInView, useAnimationFrame } from "motion/react"
import { VelocityMarquee } from "@/components/scroll/VelocityMarquee"
import { ScrollReveal } from "@/components/scroll/ScrollReveal"
import Image from "next/image"
import { Footer } from "@/components/layout/Footer"
import { GHLBookingWidget } from "@/components/ui/GHLBookingWidget"

const BG = "#FFFFFF"
const ACCENT = "#C8181A"
const MUTED = "rgba(6,12,24,0.62)"
const SURFACE = "rgba(6,12,24,0.04)"
const BORDER = "rgba(6,12,24,0.1)"


function Section({ id, children, style, className }: { id?: string; children: React.ReactNode; style?: React.CSSProperties; className?: string }) {
  return (
    <section
      id={id}
      className={className}
      style={{ padding: "80px clamp(20px, 4vw, 48px)", maxWidth: 1400, margin: "0 auto", ...style }}
    >
      {children}
    </section>
  )
}

function Eyebrow({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 32 }}>
      <span style={{ width: 32, height: 1, background: ACCENT, flexShrink: 0 }} />
      <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED }}>{label}</span>
    </div>
  )
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const decimals = Number.isInteger(to) ? 0 : 1

  useEffect(() => {
    if (!inView) return
    let start = 0
    const tick = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 1600, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      const current = p < 1 ? eased * to : to
      setCount(parseFloat(current.toFixed(decimals)))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to, decimals])

  return <span ref={ref}>{count}{suffix}</span>
}

// ── Drifting clouds behind the plane ─────────────────────────────────────────
function CloudLayer() {
  const clouds = [
    { top: "6%",  width: 340, opacity: 0.07, duration: 60, delay: 3 },
    { top: "20%", width: 160, opacity: 0.05, duration: 80, delay: 22 },
    { top: "11%", width: 480, opacity: 0.05, duration: 50, delay: 42 },
    { top: "2%",  width: 120, opacity: 0.06, duration: 72, delay: 10 },
    { top: "26%", width: 280, opacity: 0.07, duration: 65, delay: 58 },
    { top: "15%", width: 200, opacity: 0.04, duration: 90, delay: 30 },
  ]
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
      {clouds.map((c, i) => (
        <motion.div
          key={i}
          animate={{ x: ["110vw", "-60vw"] }}
          transition={{ duration: c.duration, delay: c.delay, repeat: Infinity, ease: "linear", repeatDelay: 0 }}
          style={{ position: "absolute", top: c.top, width: c.width, opacity: c.opacity }}
        >
          <svg viewBox="0 0 320 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
            <ellipse cx="75"  cy="68" rx="75"  ry="28" fill="rgba(6,12,24,1)" />
            <ellipse cx="155" cy="52" rx="80"  ry="42" fill="rgba(6,12,24,1)" />
            <ellipse cx="240" cy="62" rx="80"  ry="32" fill="rgba(6,12,24,1)" />
            <ellipse cx="120" cy="70" rx="90"  ry="22" fill="rgba(6,12,24,1)" />
            <ellipse cx="200" cy="70" rx="85"  ry="22" fill="rgba(6,12,24,1)" />
            <ellipse cx="50"  cy="72" rx="50"  ry="18" fill="rgba(6,12,24,1)" />
            <ellipse cx="290" cy="72" rx="45"  ry="18" fill="rgba(6,12,24,1)" />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

// ── Realistic propeller plane — Piper PA-28 / Cessna 172 silhouette ─────────
function PropellerPlane() {
  const floatRef = useRef<HTMLDivElement>(null)

  useAnimationFrame((t) => {
    if (floatRef.current) {
      const y = Math.sin(t * 0.00038) * 11
      const x = Math.cos(t * 0.00022) * 5
      floatRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
  })

  return (
    <motion.div
      initial={{ opacity: 0, x: "-115vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "absolute",
        right: "4%",
        top: "14%",
        width: "clamp(200px, 28vw, 480px)",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <div ref={floatRef} style={{ willChange: "transform" }}>
        <svg
          viewBox="0 0 580 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "auto", overflow: "visible" }}
        >
          {/* ── Piper PA-28 / Cessna-style low-wing trainer ── */}

          {/* Main fuselage — proper tapered tube, wide cabin, slim tail */}
          <path
            d="M88 93
               C 118 84 158 79 204 76
               C 258 72 316 70 374 70
               Q 418 70 452 72
               L 488 76
               Q 504 79 512 88
               Q 516 92 512 98
               Q 504 106 488 110
               L 452 116
               Q 418 118 374 118
               C 316 118 258 116 204 112
               C 158 109 118 106 88 101 Z"
            fill="rgba(6,12,24,0.13)"
          />

          {/* Engine cowl — rounded nacelle wider than fuselage nose */}
          <path
            d="M488 74
               Q 510 74 522 84
               Q 530 90 522 100
               Q 510 108 488 112
               L 488 106
               Q 506 102 512 94
               Q 516 90 512 86
               Q 506 80 488 78 Z"
            fill="rgba(6,12,24,0.18)"
          />

          {/* Cowl intake lip — dark ring at very front */}
          <ellipse cx="522" cy="90" rx="10" ry="8" fill="rgba(6,12,24,0.09)" />

          {/* Cockpit windshield — strongly angled back */}
          <path
            d="M452 72
               L 426 48
               Q 413 42 396 44
               L 376 53
               L 376 70
               L 452 70 Z"
            fill="rgba(20,50,100,0.12)"
          />
          {/* Windshield frame line */}
          <path
            d="M452 72 L 426 48 Q 413 42 396 44 L 376 53"
            stroke="rgba(6,12,24,0.10)" strokeWidth="1.5" fill="none"
          />

          {/* Cabin window 1 — aft of cockpit */}
          <rect x="404" y="75" width="24" height="16" rx="5" ry="5" fill="rgba(20,50,100,0.14)" />
          <rect x="406" y="76" width="10" height="5" rx="2" ry="2" fill="rgba(255,255,255,0.07)" />
          {/* Cabin window 2 */}
          <rect x="353" y="76" width="21" height="15" rx="5" ry="5" fill="rgba(20,50,100,0.12)" />
          <rect x="355" y="77" width="9" height="5" rx="2" ry="2" fill="rgba(255,255,255,0.06)" />
          {/* Cabin window 3 */}
          <rect x="304" y="78" width="18" height="14" rx="4" ry="4" fill="rgba(20,50,100,0.10)" />
          <rect x="306" y="79" width="7" height="4" rx="2" ry="2" fill="rgba(255,255,255,0.05)" />

          {/* Fuselage spine / top highlight */}
          <path
            d="M 200 74 Q 320 70 440 72 L 488 76 L 488 74 Q 430 70 320 68 Q 220 68 200 72 Z"
            fill="rgba(6,12,24,0.05)"
          />

          {/* Near wing — wide root chord tapering to tip, PA-28 proportions */}
          <path
            d="M 325 118
               C 295 130 265 152 240 175
               L 285 185
               C 310 165 358 140 425 118 Z"
            fill="rgba(6,12,24,0.13)"
          />
          {/* Wing undertone — trailing surface depth */}
          <path
            d="M 380 120
               C 350 138 318 162 285 185
               L 295 186
               C 330 163 364 140 395 122 Z"
            fill="rgba(6,12,24,0.05)"
          />

          {/* Vertical tail fin — tall swept fin */}
          <path
            d="M 118 88
               L 100 42
               Q 114 52 136 72
               L 150 84
               L 150 94
               L 118 94 Z"
            fill="rgba(6,12,24,0.13)"
          />
          {/* Fin trailing edge shading */}
          <path
            d="M 136 72 Q 150 78 150 94 L 146 94 Q 146 80 134 74 Z"
            fill="rgba(6,12,24,0.06)"
          />

          {/* Horizontal stabilizer — top */}
          <path
            d="M 132 82
               L 94 56
               Q 108 60 130 72
               L 158 80
               L 158 82 Z"
            fill="rgba(6,12,24,0.12)"
          />
          {/* Horizontal stabilizer — bottom */}
          <path
            d="M 132 104
               L 94 128
               Q 108 124 130 114
               L 158 106
               L 158 104 Z"
            fill="rgba(6,12,24,0.12)"
          />


          {/* Antenna stub on fuselage spine */}
          <line x1="300" y1="72" x2="297" y2="60" stroke="rgba(6,12,24,0.08)" strokeWidth="1.5" strokeLinecap="round"/>

          {/* Propeller group — 3-blade, spinning */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 522 90"
              to="360 522 90"
              dur="1.2s"
              repeatCount="indefinite"
            />
            {/* Blade 1 — 0° (up) */}
            <path d="M 519 84 C 516 70 517 56 522 50 C 527 56 528 70 525 84 Z" fill="rgba(6,12,24,0.17)" />
            {/* Blade 2 — 120° */}
            <path d="M 519 84 C 516 70 517 56 522 50 C 527 56 528 70 525 84 Z" fill="rgba(6,12,24,0.17)" transform="rotate(120, 522, 90)" />
            {/* Blade 3 — 240° */}
            <path d="M 519 84 C 516 70 517 56 522 50 C 527 56 528 70 525 84 Z" fill="rgba(6,12,24,0.17)" transform="rotate(240, 522, 90)" />
            {/* Spinner hub */}
            <ellipse cx="522" cy="90" rx="7" ry="7" fill="rgba(6,12,24,0.20)" />
          </g>
        </svg>
      </div>
    </motion.div>
  )
}

function ProgramCard({ number, title, hours, description, tags }: { number: string; title: string; hours: string; description: string; tags: string[] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.a
      href="/services/"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ borderColor: hovered ? ACCENT : BORDER }}
      style={{ padding: "48px 40px", borderRadius: 20, border: `1px solid ${BORDER}`, background: SURFACE, display: "flex", flexDirection: "column", gap: 24, position: "relative", overflow: "hidden", cursor: "pointer" }}
    >
      <motion.div animate={{ opacity: hovered ? 1 : 0 }} style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }} />
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <span style={{ fontSize: 11, letterSpacing: "0.15em", color: MUTED, textTransform: "uppercase" }}>{number}</span>
        <span style={{ fontSize: 11, letterSpacing: "0.1em", color: ACCENT, fontWeight: 700, padding: "4px 12px", border: `1px solid rgba(200,24,26,0.3)`, borderRadius: 100 }}>{hours}</span>
      </div>
      <div>
        <h3 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>{title}</h3>
        <p style={{ color: MUTED, lineHeight: 1.7, fontSize: 16 }}>{description}</p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto" }}>
        {tags.map(t => <span key={t} style={{ padding: "4px 14px", borderRadius: 100, border: `1px solid ${BORDER}`, fontSize: 12, color: MUTED }}>{t}</span>)}
      </div>
      <motion.div animate={{ x: hovered ? 0 : 16, opacity: hovered ? 1 : 0 }} style={{ fontSize: 13, fontWeight: 700, color: ACCENT }}>View details →</motion.div>
    </motion.a>
  )
}

function CostCard({ country, cost, days, highlight }: { country: string; cost: string; days: string; highlight?: boolean }) {
  return (
    <div style={{
      padding: "clamp(32px, 4vw, 48px) clamp(24px, 3vw, 40px)",
      borderRadius: 20,
      border: `1px solid ${highlight ? "rgba(200,24,26,0.4)" : BORDER}`,
      background: highlight ? `rgba(200,24,26,0.08)` : SURFACE,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      position: "relative",
      overflow: "hidden",
    }}>
      {highlight && (
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }} />
      )}
      <div>
        <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED, marginBottom: 8 }}>{country}</p>
        <p style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1, color: highlight ? "#060C18" : MUTED }}>{cost}</p>
        <p style={{ fontSize: 13, color: MUTED, marginTop: 8 }}>average training investment</p>
      </div>
      <div style={{ height: 1, background: BORDER }} />
      <div>
        <p style={{ fontSize: 22, fontWeight: 700, color: highlight ? ACCENT : MUTED }}>{days}</p>
        <p style={{ fontSize: 13, color: MUTED, marginTop: 4 }}>flyable training days per year</p>
      </div>
      {highlight && (
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", background: `rgba(200,24,26,0.15)`, borderRadius: 100, width: "fit-content" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, display: "block" }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.06em" }}>BEST VALUE</span>
        </div>
      )}
    </div>
  )
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 24, paddingBottom: 40, borderBottom: `1px solid ${BORDER}` }}>
      <span style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, color: ACCENT, letterSpacing: "-0.04em", lineHeight: 1 }}>{number}</span>
      <div>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.02em" }}>{title}</h3>
        <p style={{ color: MUTED, lineHeight: 1.7, fontSize: 15 }}>{description}</p>
      </div>
    </div>
  )
}

function ProcessGlow() {
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  useAnimationFrame((t) => {
    if (ref1.current) {
      const x = Math.sin(t * 0.00056) * 120
      const y = Math.cos(t * 0.00038) * 80
      ref1.current.style.transform = `translate(${x}px, ${y}px)`
    }
    if (ref2.current) {
      const x = Math.cos(t * 0.00044) * 90
      const y = Math.sin(t * 0.00068) * 70
      ref2.current.style.transform = `translate(${x}px, ${y}px)`
    }
  })
  return (
    <>
      <div ref={ref1} style={{ position: "absolute", inset: -160, pointerEvents: "none", background: `radial-gradient(ellipse 55% 48% at 60% 40%, rgba(200,24,26,0.10) 0%, transparent 68%)`, willChange: "transform" }} />
      <div ref={ref2} style={{ position: "absolute", inset: -120, pointerEvents: "none", background: `radial-gradient(ellipse 42% 38% at 38% 60%, rgba(200,24,26,0.06) 0%, transparent 62%)`, willChange: "transform" }} />
    </>
  )
}

// ── Why South Africa highlights ─────────────────────────────────────────────
const highlights = [
  {
    stat: "300+",
    label: "Flyable training days per year",
    detail: "South Africa's year-round clear skies mean fewer delays and faster progression to your licence.",
  },
  {
    stat: "50%+",
    label: "Average saving vs UK or USA training",
    detail: "Train to the same ICAO-compliant standard for a fraction of the cost — without compromising quality.",
  },
  {
    stat: "ICAO",
    label: "Globally recognized licence standard",
    detail: "SACAA-issued licences comply fully with ICAO Annex 1 — accepted by aviation authorities worldwide.",
  },
]

// ── Cinematic propeller plane image strip ──────────────────────────────────
function CinematicStrip() {
  return (
    <div style={{ position: "relative", height: "clamp(300px, 38vw, 520px)", overflow: "hidden" }}>
      <Image
        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2200&q=80"
        alt="Propeller aircraft in flight"
        fill
        style={{ objectFit: "cover", objectPosition: "center 55%" }}
        sizes="100vw"
      />
      {/* Deep navy gradient overlay — keeps text readable + matches brand */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(105deg, rgba(6,12,24,0.94) 0%, rgba(6,12,24,0.72) 48%, rgba(6,12,24,0.88) 100%)",
      }} />
      {/* Subtle red tint at right edge to blend brand */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 80% at 80% 50%, rgba(200,24,26,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center",
        padding: "0 clamp(20px, 4vw, 48px)",
        maxWidth: 1400,
        margin: "0 auto",
        left: 0, right: 0,
      }}>
        <ScrollReveal effect="fade-up">
          <div style={{ maxWidth: 620 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: ACCENT, marginBottom: 24, fontWeight: 700 }}>SACAA-Accredited Training</p>
            <p style={{ fontSize: "clamp(22px, 3.5vw, 44px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.1, color: "#fff" }}>
              &ldquo;South Africa offers world-class pilot training at a fraction of the cost — with 300+ flyable days per year.&rdquo;
            </p>
            <div style={{ display: "flex", gap: 32, marginTop: 36 }}>
              <div>
                <p style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900, color: ACCENT, letterSpacing: "-0.04em", lineHeight: 1 }}>$45k</p>
                <p style={{ fontSize: 12, color: MUTED, marginTop: 6, letterSpacing: "0.06em", textTransform: "uppercase" }}>avg. CPL cost in SA</p>
              </div>
              <div style={{ width: 1, background: BORDER, alignSelf: "stretch" }} />
              <div>
                <p style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>$105k</p>
                <p style={{ fontSize: 12, color: MUTED, marginTop: 6, letterSpacing: "0.06em", textTransform: "uppercase" }}>avg. CPL cost in UK</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

function HighlightStrip() {
  return (
    <div style={{ padding: "80px clamp(20px, 4vw, 48px)", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 48 }}>
          {highlights.map((h, i) => (
            <ScrollReveal key={h.stat} effect="fade-up" delay={i * 0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <p style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 900, letterSpacing: "-0.04em", color: i === 1 ? ACCENT : "#060C18", lineHeight: 1 }}>{h.stat}</p>
                <div style={{ width: 32, height: 2, background: ACCENT }} />
                <p style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.01em" }}>{h.label}</p>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65 }}>{h.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <main style={{ background: BG, color: "#060C18", minHeight: "100vh" }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 clamp(20px, 4vw, 48px) 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `radial-gradient(ellipse 60% 50% at 70% 40%, rgba(200,24,26,0.05) 0%, transparent 70%)` }} />

        {/* Drifting clouds — behind the plane */}
        <CloudLayer />

        {/* Propeller airplane — tasteful background decoration */}
        <PropellerPlane />

        <motion.div style={{ y: heroY, opacity: heroOpacity, maxWidth: 1400, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "6px 18px", border: `1px solid ${BORDER}`, borderRadius: 100, marginBottom: 48, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED }}
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ width: 7, height: 7, borderRadius: "50%", background: ACCENT, display: "block", flexShrink: 0 }}
            />
            SACAA-Accredited &middot; ICAO-Compliant &middot; International Students
          </motion.div>

          {["Become A", "Pilot."].map((line, i) => (
            <div key={line} style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 + i * 0.15 }}
                style={{ fontSize: "clamp(64px, 13vw, 200px)", fontWeight: 900, lineHeight: 0.88, letterSpacing: "-0.04em", margin: 0, color: i === 1 ? ACCENT : "#060C18" }}
              >
                {line}
              </motion.h1>
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between"
            style={{ gap: 40, marginTop: 64, flexWrap: "wrap" }}
          >
            <p style={{ fontSize: "clamp(15px, 1.4vw, 20px)", color: MUTED, maxWidth: 520, lineHeight: 1.65, margin: 0 }}>
              Train in year-round ideal weather with SACAA-accredited flight schools in South Africa — we handle visas, accommodation, and full logistics.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <motion.a href="/contact" whileHover={{ scale: 1.04, background: "#D41A1A" }} whileTap={{ scale: 0.97 }} style={{ padding: "15px 36px", background: ACCENT, color: "#fff", borderRadius: 100, fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em", display: "inline-block" }}>Book Free Consultation</motion.a>
              <motion.a href="/services" whileHover={{ borderColor: "rgba(6,12,24,0.3)", background: "rgba(6,12,24,0.06)" }} style={{ padding: "15px 36px", border: `1px solid ${BORDER}`, color: "#060C18", borderRadius: 100, fontWeight: 600, fontSize: 15, letterSpacing: "-0.01em", display: "inline-block" }}>Explore Programs</motion.a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────────── */}
      <div style={{ padding: "28px 0", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <VelocityMarquee
          items={["PPL Training", "CPL Training", "ATPL Training", "SACAA Accredited", "ICAO Compliant", "Visa Guidance", "300+ Flyable Days", "Cost-Efficient Training", "End-to-End Support", "International Students"]}
          baseVelocity={-2}
        />
      </div>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <Section>
        <ScrollReveal effect="fade-up"><Eyebrow label="Why South Africa" /></ScrollReveal>
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ borderRadius: 20, overflow: "hidden", border: `1px solid ${BORDER}` }}
        >
          {[
            { stat: 50, suffix: "%+", label: "Average saving compared to equivalent training in the UK or USA" },
            { stat: 300, suffix: "+", label: "Flyable training days per year — far more than Europe or North America" },
            { stat: 7, suffix: " steps", label: "End-to-end process from consultation to licensed pilot" },
          ].map(({ stat, suffix, label }, i) => (
            <ScrollReveal key={label} effect="fade-up" delay={i * 0.1}>
              <div
                className={i < 2 ? "border-b md:border-b-0 md:border-r" : ""}
                style={{
                  padding: "clamp(40px, 5vw, 64px) clamp(24px, 4vw, 48px)",
                  background: i === 1 ? `rgba(200,24,26,0.08)` : SURFACE,
                  borderColor: BORDER,
                  height: "100%",
                }}
              >
                <div style={{ fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1, color: i === 1 ? ACCENT : "#060C18", marginBottom: 20 }}>
                  <Counter to={stat} suffix={suffix} />
                </div>
                <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.6, maxWidth: 240 }}>{label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ── TRAINING PROGRAMS ────────────────────────────────────── */}
      <Section id="programs" style={{ paddingTop: 0 }}>
        <ScrollReveal effect="fade-up">
          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between"
            style={{ marginBottom: 64, gap: 24 }}
          >
            <div>
              <Eyebrow label="Training Pathways" />
              <h2 style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.92 }}>Your Flight<br /><span style={{ color: ACCENT }}>Path.</span></h2>
            </div>
            <p style={{ color: MUTED, maxWidth: 360, lineHeight: 1.7, fontSize: 16 }}>From first solo to airline command — we guide you through every stage of your pilot career.</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 20 }}>
          {[
            { number: "01", title: "PPL", hours: "45+ hrs", description: "Private Pilot Licence — the first milestone. Master the fundamentals of flight and earn the freedom to fly.", tags: ["Single Engine", "VFR", "Solo Flight", "SACAA"] },
            { number: "02", title: "CPL", hours: "200+ hrs", description: "Commercial Pilot Licence — your gateway to a professional aviation career. Build the hours and skill to fly for hire.", tags: ["Multi-Engine", "Night Rating", "IFR", "Hour Building"] },
            { number: "03", title: "ATPL", hours: "1,500+ hrs", description: "Airline Transport Pilot Licence — the highest standard in aviation. Required to serve as Pilot-in-Command on commercial airliners.", tags: ["Airline Ready", "Type Rating", "Sim Training", "ICAO Compliant"] },
          ].map((s, i) => (
            <ScrollReveal key={s.title} effect="fade-up" delay={i * 0.1}><ProgramCard {...s} /></ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ── COST COMPARISON ─────────────────────────────────────── */}
      <Section id="cost" style={{ paddingTop: 0 }}>
        <ScrollReveal effect="fade-up">
          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between"
            style={{ marginBottom: 64, gap: 24 }}
          >
            <div>
              <Eyebrow label="Cost Comparison" />
              <h2 style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.92 }}>Train Smart,<br /><span style={{ color: ACCENT }}>Save More.</span></h2>
            </div>
            <p style={{ color: MUTED, maxWidth: 360, lineHeight: 1.7, fontSize: 16 }}>Same ICAO-compliant standard. A fraction of the price. With better flying weather.</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 20 }}>
          {[
            { country: "South Africa", cost: "~$45k", days: "300+ days/yr", highlight: true },
            { country: "United Kingdom", cost: "~$105k", days: "180 days/yr", highlight: false },
            { country: "United States", cost: "~$90k", days: "220 days/yr", highlight: false },
          ].map((c, i) => (
            <ScrollReveal key={c.country} effect="fade-up" delay={i * 0.1}>
              <CostCard {...c} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ── PROCESS ─────────────────────────────── */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <ProcessGlow />
        <Section id="process" style={{ paddingTop: 40 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "clamp(48px, 6vw, 100px)", alignItems: "start" }}>
            <ScrollReveal effect="fade-up">
              <Eyebrow label="How It Works" />
              <h2 style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.92 }}>Your Journey,<br /><span style={{ color: ACCENT }}>Guided.</span></h2>
              <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 380, marginTop: 32 }}>
                We manage every step of the process so you arrive ready to fly — not buried in paperwork.
              </p>
            </ScrollReveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {[
                { number: "01", title: "Initial Consultation", description: "We assess your goals, experience, and timeline. You get a clear, honest picture of what your training journey looks like before committing to anything." },
                { number: "02", title: "Flight School Matching", description: "We match you with a SACAA-accredited school that fits your programme, budget, and location preferences." },
                { number: "03", title: "Visa Preparation", description: "We guide you through the South African study visa process — documentation, applications, and timelines handled alongside you." },
                { number: "04", title: "Enrollment Coordination", description: "We liaise directly with the flight school to manage your enrollment, start date, and initial requirements." },
                { number: "05", title: "Accommodation Logistics", description: "We source and vet appropriate accommodation near your training facility so you're settled before you arrive." },
                { number: "06", title: "Ongoing Monitoring", description: "Throughout your training we stay in contact to ensure everything is on track and address any challenges as they arise." },
                { number: "07", title: "Post-Training Licensing", description: "Once you pass your checkride, we assist with SACAA licence issuance and guide you through licence conversion for your home country if needed." },
              ].map((step, i) => (
                <ScrollReveal key={step.number} effect="fade-up" delay={i * 0.04}>
                  <ProcessStep {...step} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* ── CINEMATIC IMAGE STRIP ────────────────────────────────── */}
      <CinematicStrip />

      {/* ── WHY SA HIGHLIGHTS ────────────────────────────────────── */}
      <HighlightStrip />

      {/* ── CONTACT ──────────────────────────────────────────────── */}
      <Section id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "clamp(40px, 6vw, 80px)", alignItems: "start" }}>
          <ScrollReveal effect="fade-up">
            <Eyebrow label="Get Started" />
            <h2 style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.92, marginBottom: 32, color: "#060C18" }}>Ready to<br /><span style={{ color: ACCENT }}>Fly?</span></h2>
            <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.7, maxWidth: 380, marginBottom: 48 }}>
              Book your free 15-minute consultation. We&rsquo;ll answer your questions and map out the fastest route to your pilot licence.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 48 }}>
              {["Free 15-minute consultation", "No obligation — just clarity", "Response within 24 hours"].map(text => (
                <div key={text} style={{ display: "flex", gap: 14, alignItems: "center", color: MUTED, fontSize: 15 }}>
                  <span style={{ color: ACCENT, fontSize: 10, flexShrink: 0 }}>✦</span>{text}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <GHLBookingWidget
            src="https://link.zip360.co.za/widget/booking/2iYXsaTBfL5b7Y870XVX"
            id="2iYXsaTBfL5b7Y870XVX_home"
            title="Book a Free Consultation"
            defaultHeight={700}
            borderRadius={24}
            border={`1px solid ${BORDER}`}
            background={SURFACE}
            redirectTo="/thank-you"
            deferLoad
          />
        </div>
      </Section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <Footer />

    </main>
  )
}
