"use client"
import { useState } from "react"
import { motion } from "motion/react"
import { ScrollReveal } from "@/components/scroll/ScrollReveal"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/layout/Footer"

const BG = "#FFFFFF"
const ACCENT = "#C8181A"
const MUTED = "rgba(6,12,24,0.62)"
const SURFACE = "rgba(6,12,24,0.03)"
const BORDER = "rgba(6,12,24,0.1)"

function Eyebrow({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 32 }}>
      <span style={{ width: 32, height: 1, background: ACCENT, flexShrink: 0 }} />
      <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED }}>{label}</span>
    </div>
  )
}

const pathways = [
  {
    id: 1,
    licence: "PPL",
    title: "Private Pilot Licence",
    hours: "45+ hours",
    description: "The first milestone on every pilot's journey. Master VFR flight, solo navigation, and the fundamentals that underpin your entire career.",
    highlights: ["Solo cross-country flight", "Air Law & meteorology theory", "VFR navigation", "SACAA PPL flight test"],
    accentGrad: false,
    photo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
    photoPos: "center 60%",
  },
  {
    id: 2,
    licence: "IR",
    title: "Instrument Rating",
    hours: "50+ hours",
    description: "Fly in cloud, at night, and in low visibility. The IR transforms a recreational pilot into a professional-standard aviator.",
    highlights: ["IFR flight planning & procedures", "Navigation aids & avionics", "Night rating included", "SACAA instrument proficiency check"],
    accentGrad: true,
    photo: "https://images.unsplash.com/photo-1576053438572-af7be7ac4fa0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    photoPos: "center center",
  },
  {
    id: 3,
    licence: "CPL",
    title: "Commercial Pilot Licence",
    hours: "200+ hours",
    description: "Fly for pay. The CPL qualifies you to act as Pilot-in-Command on commercial operations and positions you for charter, cargo, or regional airline work.",
    highlights: ["Multi-engine rating", "Commercial flight manoeuvres", "Complex aircraft operations", "SACAA CPL flight test"],
    accentGrad: false,
    photo: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
    photoPos: "center 40%",
  },
  {
    id: 4,
    licence: "ATPL",
    title: "Airline Transport Pilot Licence",
    hours: "1,500+ hours",
    description: "The highest standard in aviation. Required to serve as Pilot-in-Command on airline transport operations — the licence that puts you in the left seat.",
    highlights: ["14 ATPL ground school subjects", "Multi-crew cooperation (MCC)", "Jet orientation course", "SACAA ATPL examinations"],
    accentGrad: true,
    photo: "https://images.unsplash.com/photo-1747604468279-35079f811aeb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    photoPos: "center 50%",
  },

]

const costRows = [
  { country: "South Africa", cpl: "$45–60k", uk: "—", highlight: true },
  { country: "United Kingdom", cpl: "—", uk: "$90–120k", highlight: false },
  { country: "United States", cpl: "—", uk: "$80–100k", highlight: false },
]

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState<"pathways" | "comparison">("pathways")

  return (
    <main style={{ background: BG, color: "#060C18", minHeight: "100vh" }}>

      {/* HERO */}
      <section style={{ padding: "clamp(100px, 18vw, 160px) clamp(20px, 4vw, 48px) 60px", maxWidth: 1400, margin: "0 auto" }}>
        <ScrollReveal effect="fade-up">
          <Eyebrow label="Programs" />
          <h1 style={{ fontSize: "clamp(48px, 8vw, 120px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.88, marginBottom: 40 }}>
            Cleared for<br /><span style={{ color: ACCENT }}>Takeoff.</span>
          </h1>
          <p style={{ fontSize: "clamp(16px, 1.4vw, 20px)", color: MUTED, maxWidth: 580, lineHeight: 1.65 }}>
            Four SACAA-accredited licence pathways. All ICAO-compliant. All completed in South Africa — with 300+ flyable training days per year and costs up to 60% lower than Western countries.
          </p>
        </ScrollReveal>

        {/* Tab switcher */}
        <ScrollReveal effect="fade-up" delay={0.1}>
          <div style={{ display: "flex", gap: 12, marginTop: 56, flexWrap: "wrap" }}>
            {(["pathways", "comparison"] as const).map(tab => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileTap={{ scale: 0.96 }}
                style={{
                  padding: "10px 28px",
                  borderRadius: 100,
                  border: `1px solid ${activeTab === tab ? ACCENT : BORDER}`,
                  background: activeTab === tab ? ACCENT : "transparent",
                  color: activeTab === tab ? "#fff" : MUTED,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  letterSpacing: "-0.01em",
                  transition: "all 0.2s ease",
                  textTransform: "capitalize",
                }}
              >
                {tab === "pathways" ? "Training Pathways" : "Cost Comparison"}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* PATHWAYS */}
      {activeTab === "pathways" && (
        <section style={{ padding: "0 clamp(20px, 4vw, 48px) clamp(60px, 8vw, 100px)", maxWidth: 1400, margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 20 }}>
            {pathways.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <PathwayCard pathway={p} />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* COST COMPARISON */}
      {activeTab === "comparison" && (
        <section style={{ padding: "0 clamp(20px, 4vw, 48px) clamp(60px, 8vw, 100px)", maxWidth: 1400, margin: "0 auto" }}>
          <ScrollReveal effect="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 20, marginBottom: 48 }}>
              {[
                { country: "South Africa", cost: "~$45–60k", days: "300+", highlight: true },
                { country: "United Kingdom", cost: "~$90–120k", days: "180", highlight: false },
                { country: "United States", cost: "~$80–100k", days: "220", highlight: false },
              ].map((c) => (
                <div
                  key={c.country}
                  style={{
                    padding: "clamp(32px, 4vw, 48px)",
                    borderRadius: 20,
                    border: `1px solid ${c.highlight ? "rgba(200,24,26,0.4)" : BORDER}`,
                    background: c.highlight ? `rgba(200,24,26,0.08)` : SURFACE,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {c.highlight && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }} />}
                  <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED, marginBottom: 12 }}>{c.country}</p>
                  <p style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 900, letterSpacing: "-0.04em", color: c.highlight ? "#fff" : MUTED, lineHeight: 1, marginBottom: 8 }}>{c.cost}</p>
                  <p style={{ fontSize: 13, color: MUTED, marginBottom: 24 }}>CPL with IR (USD estimate)</p>
                  <div style={{ height: 1, background: BORDER, marginBottom: 20 }} />
                  <p style={{ fontSize: 24, fontWeight: 700, color: c.highlight ? ACCENT : MUTED }}>{c.days} days/yr</p>
                  <p style={{ fontSize: 13, color: MUTED, marginTop: 4 }}>flyable training days</p>
                  {c.highlight && (
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", background: `rgba(200,24,26,0.15)`, borderRadius: 100, marginTop: 20 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, display: "block" }} />
                      <span style={{ fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.06em" }}>BEST VALUE</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ padding: "clamp(28px, 3vw, 40px)", border: `1px solid ${BORDER}`, borderRadius: 20, background: SURFACE }}>
              <p style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 16 }}>Important note</p>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 720 }}>
                All cost estimates are approximate and based on average school fees, aircraft hire, accommodation, and living costs for the full CPL + IR pathway. Actual costs vary by school, aircraft type, and individual progression rate. We provide detailed, personalised cost estimates during your free consultation.
              </p>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* ACCREDITATION STRIP */}
      <div style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "clamp(32px, 4vw, 56px) clamp(20px, 4vw, 48px)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 32 }}>
            {[
              { badge: "SACAA", title: "South African Civil Aviation Authority", desc: "All partner schools are SACAA-accredited and operate under CAR Part 141 regulations." },
              { badge: "ICAO", title: "International Civil Aviation Organisation", desc: "Licences comply with ICAO Annex 1 — globally accepted as a basis for conversion." },
              { badge: "SA", title: "South Africa Advantage", desc: "300+ flyable days, English instruction, world-class infrastructure, and significant cost savings." },
            ].map(item => (
              <div key={item.badge} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `rgba(200,24,26,0.12)`, border: `1px solid rgba(200,24,26,0.3)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 11, fontWeight: 900, color: ACCENT, letterSpacing: "0.06em" }}>{item.badge}</span>
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{item.title}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)" }}>
        <ScrollReveal effect="fade-up">
          <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 40 }}>
            <div>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 60px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.92, marginBottom: 16 }}>
                Ready to start<br /><span style={{ color: ACCENT }}>your programme?</span>
              </h2>
              <p style={{ color: MUTED, fontSize: 16, maxWidth: 400, lineHeight: 1.65 }}>
                Book a free 15-minute consultation and we&rsquo;ll map out the fastest, most cost-effective route to your licence.
              </p>
            </div>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.04, background: "#D41A1A" }}
                whileTap={{ scale: 0.97 }}
                style={{ padding: "18px 48px", background: ACCENT, color: "#fff", borderRadius: 100, fontWeight: 700, fontSize: 16, letterSpacing: "-0.01em", cursor: "pointer" }}
              >
                Book Free Consultation
              </motion.div>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <Footer />
    </main>
  )
}

function PathwayCard({ pathway }: { pathway: typeof pathways[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ scale: hovered ? 1.015 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      style={{ borderRadius: 20, overflow: "hidden", background: "#0A1628", border: `1px solid ${pathway.accentGrad ? "rgba(200,24,26,0.25)" : BORDER}`, display: "flex", flexDirection: "column", minHeight: 420, padding: "clamp(32px, 4vw, 48px)", justifyContent: "space-between", position: "relative" }}
    >
      {/* Background photo */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src={pathway.photo}
          alt={pathway.title}
          fill
          style={{ objectFit: "cover", objectPosition: pathway.photoPos, transition: "transform 0.6s ease", transform: hovered ? "scale(1.04)" : "scale(1)" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Dark overlay — darker on hover to keep text sharp */}
        <div style={{
          position: "absolute", inset: 0,
          background: pathway.accentGrad
            ? `linear-gradient(160deg, rgba(6,12,24,${hovered ? "0.88" : "0.84"}) 0%, rgba(6,12,24,${hovered ? "0.94" : "0.90"}) 100%)`
            : `linear-gradient(160deg, rgba(6,12,24,${hovered ? "0.86" : "0.82"}) 0%, rgba(6,12,24,${hovered ? "0.94" : "0.90"}) 100%)`,
          transition: "background 0.4s ease",
        }} />
        {pathway.accentGrad && (
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 20% 80%, rgba(200,24,26,0.12) 0%, transparent 60%)" }} />
        )}
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
            <span style={{ display: "inline-block", padding: "6px 18px", borderRadius: 100, background: "rgba(255,255,255,0.07)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>{pathway.hours}</span>
            <span style={{ padding: "6px 18px", borderRadius: 100, background: pathway.accentGrad ? `rgba(200,24,26,0.2)` : "rgba(255,255,255,0.07)", fontSize: 13, fontWeight: 800, color: pathway.accentGrad ? "#ff6666" : "#fff", letterSpacing: "0.06em" }}>{pathway.licence}</span>
          </div>
          <h3 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 16, lineHeight: 1.1, color: "#fff" }}>{pathway.title}</h3>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, marginBottom: 32 }}>{pathway.description}</p>
        </div>

        <div>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
            {pathway.highlights.map(h => (
              <li key={h} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
                <span style={{ color: ACCENT, marginTop: 1, flexShrink: 0, fontSize: 10 }}>✦</span>{h}
              </li>
            ))}
          </ul>
          <motion.div animate={{ opacity: hovered ? 1 : 0.5, x: hovered ? 0 : -4 }} style={{ fontSize: 13, fontWeight: 700, color: ACCENT }}>
            <Link href="/services" style={{ color: ACCENT, textDecoration: "none" }}>View full details →</Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
