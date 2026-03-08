"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ScrollReveal } from "@/components/scroll/ScrollReveal"
import Link from "next/link"

const BG = "#0B0F1C"
const ACCENT = "#C4541A"
const MUTED = "rgba(255,255,255,0.45)"
const SURFACE = "rgba(255,255,255,0.05)"
const BORDER = "rgba(255,255,255,0.08)"

function Eyebrow({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 32 }}>
      <span style={{ width: 32, height: 1, background: ACCENT, flexShrink: 0 }} />
      <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED }}>{label}</span>
    </div>
  )
}

const projects = [
  {
    id: 1,
    tag: "Web Design · Development",
    category: "Web",
    client: "Apex Financial",
    title: "Premium financial services brand that converts cold traffic into booked calls",
    outcome: "2.8× increase in qualified leads within 60 days of launch",
    year: "2025",
    gradient: "linear-gradient(135deg, #1a1f35 0%, #0d1117 100%)",
    accent: ACCENT,
    url: "https://www.boldpiq.com/work",
  },
  {
    id: 2,
    tag: "Brand Identity · Web",
    category: "Brand",
    client: "Elevate Coaching",
    title: "Full rebrand and web launch for a scaling coaching business",
    outcome: "94% of new leads now arrive through the website",
    year: "2025",
    gradient: `linear-gradient(135deg, rgba(196,84,26,0.2) 0%, #0d1117 100%)`,
    accent: "#fff",
    url: "https://www.boldpiq.com/work",
  },
  {
    id: 3,
    tag: "Web Development",
    category: "Web",
    client: "Meridian Legal",
    title: "High-trust law firm website built to command authority and drive enquiries",
    outcome: "3.1× increase in contact form submissions in 90 days",
    year: "2024",
    gradient: "linear-gradient(135deg, #0f1a2e 0%, #0B0F1C 100%)",
    accent: ACCENT,
    url: "https://www.boldpiq.com/work",
  },
  {
    id: 4,
    tag: "Brand Identity",
    category: "Brand",
    client: "Vance & Co.",
    title: "Complete visual identity system for a boutique management consultancy",
    outcome: "Brand signed off in one round — zero revisions",
    year: "2024",
    gradient: `linear-gradient(135deg, rgba(196,84,26,0.12) 0%, #0d1117 100%)`,
    accent: "#fff",
    url: "https://www.boldpiq.com/work",
  },
  {
    id: 5,
    tag: "Web Design · Development",
    category: "Web",
    client: "Northside Physio",
    title: "Clean, conversion-focused health practice site connected to booking software",
    outcome: "Online bookings up 4× in the first month",
    year: "2024",
    gradient: "linear-gradient(135deg, #111827 0%, #0B0F1C 100%)",
    accent: ACCENT,
    url: "https://www.boldpiq.com/work",
  },
  {
    id: 6,
    tag: "Brand Identity · Web",
    category: "Web",
    client: "Orion Properties",
    title: "Luxury real estate brand and property showcase website",
    outcome: "Average enquiry quality improved — more pre-qualified buyers",
    year: "2024",
    gradient: `linear-gradient(135deg, rgba(196,84,26,0.16) 0%, #0d1117 100%)`,
    accent: "#fff",
    url: "https://www.boldpiq.com/work",
  },
]

const filters = ["All", "Web", "Brand"]

export default function WorkPage() {
  const [active, setActive] = useState("All")
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active)

  return (
    <main style={{ background: BG, color: "#fff", minHeight: "100vh" }}>

      {/* HERO */}
      <section style={{ padding: "160px clamp(20px, 4vw, 48px) 80px", maxWidth: 1400, margin: "0 auto" }}>
        <ScrollReveal effect="fade-up">
          <Eyebrow label="Our Work" />
          <h1 style={{ fontSize: "clamp(48px, 8vw, 120px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.88, marginBottom: 40 }}>
            Proof in<br /><span style={{ color: ACCENT }}>Results.</span>
          </h1>
          <p style={{ fontSize: "clamp(16px, 1.4vw, 20px)", color: MUTED, maxWidth: 560, lineHeight: 1.65 }}>
            Every project we ship is measured against one thing — does it grow the business? Here&rsquo;s the evidence.
          </p>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal effect="fade-up" delay={0.1}>
          <div style={{ display: "flex", gap: 12, marginTop: 56, flexWrap: "wrap" }}>
            {filters.map(f => (
              <motion.button
                key={f}
                onClick={() => setActive(f)}
                whileTap={{ scale: 0.96 }}
                style={{
                  padding: "10px 28px",
                  borderRadius: 100,
                  border: `1px solid ${active === f ? ACCENT : BORDER}`,
                  background: active === f ? ACCENT : "transparent",
                  color: active === f ? "#fff" : MUTED,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  letterSpacing: "-0.01em",
                }}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* GRID */}
      <section style={{ padding: "0 clamp(20px, 4vw, 48px) 120px", maxWidth: 1400, margin: "0 auto" }}>
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 20 }}>
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </section>

      {/* CTA */}
      <div style={{ borderTop: `1px solid ${BORDER}`, padding: "100px clamp(20px, 4vw, 48px)" }}>
        <ScrollReveal effect="fade-up">
          <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 40 }}>
            <div>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 60px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.92, marginBottom: 16 }}>
                Want results<br /><span style={{ color: ACCENT }}>like these?</span>
              </h2>
              <p style={{ color: MUTED, fontSize: 16, maxWidth: 400, lineHeight: 1.65 }}>
                Tell us about your business and we&rsquo;ll show you exactly how we&rsquo;d approach it.
              </p>
            </div>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.04, background: "#D4601F" }}
                whileTap={{ scale: 0.97 }}
                style={{ padding: "18px 48px", background: ACCENT, color: "#fff", borderRadius: 100, fontWeight: 700, fontSize: 16, letterSpacing: "-0.01em", cursor: "pointer" }}
              >
                Start a Project
              </motion.div>
            </Link>
          </div>
        </ScrollReveal>
      </div>

    </main>
  )
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: "block", textDecoration: "none", color: "#fff" }}
    >
      <motion.div
        animate={{ scale: hovered ? 1.015 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        style={{ borderRadius: 20, overflow: "hidden", background: project.gradient, padding: "48px 40px", minHeight: 380, display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: 100, background: "rgba(255,255,255,0.1)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>{project.tag}</span>
          <span style={{ color: MUTED, fontSize: 13 }}>{project.year}</span>
        </div>

        <div>
          <p style={{ color: MUTED, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>{project.client}</p>
          <h3 style={{ fontSize: "clamp(20px, 2vw, 26px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: 20 }}>{project.title}</h3>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "flex-start", gap: 10 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: ACCENT, flexShrink: 0, marginTop: 4, display: "inline-block" }} />
            {project.outcome}
          </p>
        </div>

        <motion.div
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
          style={{ fontSize: 13, fontWeight: 700, color: ACCENT, marginTop: 24 }}
        >
          View project →
        </motion.div>
      </motion.div>
    </motion.a>
  )
}
