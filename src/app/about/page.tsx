"use client"
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

const values = [
  { title: "Transparency over hype", desc: "We give you honest, realistic timelines and cost estimates — not the best-case scenario designed to close a sale. You'll know exactly what training in South Africa involves before you commit." },
  { title: "End-to-end accountability", desc: "We don't hand you a list of schools and disappear. We're involved from first consultation through to licence issuance — and we stay reachable throughout." },
  { title: "Your career, not a quota", desc: "We match each student to the school and programme best suited to their goals, budget, and timeline. No kickbacks, no favouritism — just the right fit." },
  { title: "Built on aviation knowledge", desc: "We understand what student pilots need because we've navigated the system ourselves. We speak the language of aviation, visas, and logistics — fluently." },
]

export default function AboutPage() {
  return (
    <main style={{ background: BG, color: "#060C18", minHeight: "100vh" }}>

      {/* HERO */}
      <section style={{ padding: "clamp(100px, 18vw, 160px) clamp(20px, 4vw, 48px) 60px", maxWidth: 1400, margin: "0 auto" }}>
        <ScrollReveal effect="fade-up">
          <Eyebrow label="About Us" />
          <h1 style={{ fontSize: "clamp(48px, 8vw, 120px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.88, marginBottom: 40 }}>
            We get pilots<br /><span style={{ color: ACCENT }}>airborne.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal effect="fade-up" delay={0.1}>
          <p style={{ fontSize: "clamp(17px, 1.6vw, 22px)", color: MUTED, maxWidth: 640, lineHeight: 1.7 }}>
            SA Pilot Training is an advisory service dedicated to helping international students navigate pilot training in South Africa — from initial consultation through to a globally recognised licence.
          </p>
        </ScrollReveal>
      </section>

      {/* STORY */}
      <section style={{ padding: "0 clamp(20px, 4vw, 48px) clamp(60px, 8vw, 100px)", maxWidth: 1400, margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "clamp(48px, 6vw, 120px)", alignItems: "start" }}>
          <ScrollReveal effect="fade-up">
            <Eyebrow label="Our Story" />
            <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.92, marginBottom: 40 }}>
              Born from the<br /><span style={{ color: ACCENT }}>complexity</span><br />of getting started.
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.75 }}>
                Too many aspiring pilots abandon their dream not because they can&apos;t fly — but because the process of getting started is overwhelming. Visa requirements, school comparisons, cost estimates, accommodation logistics — it&apos;s a full-time research project before you&apos;ve even sat in a cockpit.
              </p>
              <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.75 }}>
                We built SA Pilot Training to remove that barrier. South Africa offers world-class, ICAO-compliant flight training at a fraction of the cost of Western countries — with exceptional flying weather that keeps training on schedule. The problem was never the quality. It was the access.
              </p>
              <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.75 }}>
                Our service gives international students a single, trusted point of contact for everything: school selection, visa preparation, enrollment, accommodation, and ongoing support throughout training. You focus on flying. We handle the rest.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ maxWidth: 1400, margin: "0 auto" }}>
          {[
            { stat: "300+", label: "Flyable training days per year in South Africa" },
            { stat: "50%+", label: "Average saving vs UK or USA pilot training" },
            { stat: "ICAO", label: "Globally accepted licence standard — SACAA compliant" },
            { stat: "7", label: "Steps from first consultation to licensed pilot" },
          ].map(({ stat, label }, i) => (
            <ScrollReveal key={label} effect="fade-up" delay={i * 0.08}>
              <div
                className={i < 3 ? "border-b md:border-b-0 md:border-r" : ""}
                style={{ padding: "clamp(32px, 4vw, 56px) clamp(20px, 3vw, 40px)", borderColor: BORDER }}
              >
                <p style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, letterSpacing: "-0.04em", color: i % 2 === 1 ? ACCENT : "#060C18", marginBottom: 8 }}>{stat}</p>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }}>{label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* CINEMATIC PLANE IMAGE */}
      <div style={{ position: "relative", height: "clamp(260px, 32vw, 460px)", overflow: "hidden" }}>
        <Image
          src="https://images.unsplash.com/photo-1576053438572-af7be7ac4fa0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Propeller planes in formation over South Africa"
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          sizes="100vw"
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(6,12,24,0.96) 0%, rgba(6,12,24,0.60) 55%, rgba(6,12,24,0.90) 100%)",
        }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 clamp(20px, 4vw, 48px)", left: 0, right: 0 }}>
          <ScrollReveal effect="fade-up">
            <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: ACCENT, marginBottom: 16, fontWeight: 700 }}>The South Africa Advantage</p>
            <p style={{ fontSize: "clamp(20px, 3vw, 38px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.1, color: "#fff", maxWidth: 560 }}>
              The same globally recognised licence — at up to 60% less cost, and faster.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* VALUES */}
      <section style={{ padding: "clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)", maxWidth: 1400, margin: "0 auto" }}>
        <ScrollReveal effect="fade-up">
          <Eyebrow label="Our Approach" />
          <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.92, marginBottom: 64 }}>
            How we<br /><span style={{ color: ACCENT }}>operate.</span>
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 20 }}>
          {values.map((v, i) => (
            <ScrollReveal key={v.title} effect="fade-up" delay={i * 0.08}>
              <div style={{ padding: "clamp(32px, 3vw, 48px)", border: `1px solid ${BORDER}`, borderRadius: 20, background: SURFACE }}>
                <span style={{ fontSize: 13, color: ACCENT, letterSpacing: "0.1em", fontWeight: 700 }}>0{i + 1}</span>
                <h3 style={{ fontSize: "clamp(20px, 2vw, 26px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "16px 0 16px" }}>{v.title}</h3>
                <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* WHY SOUTH AFRICA */}
      <section style={{ padding: "0 clamp(20px, 4vw, 48px) clamp(60px, 8vw, 100px)", maxWidth: 1400, margin: "0 auto" }}>
        <ScrollReveal effect="fade-up">
          <div style={{ padding: "clamp(32px, 4vw, 64px)", border: `1px solid ${BORDER}`, borderRadius: 24, background: `linear-gradient(135deg, rgba(200,24,26,0.06) 0%, ${SURFACE} 100%)` }}>
            <Eyebrow label="Why South Africa" />
            <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 40 }}>
              The smart destination<br /><span style={{ color: ACCENT }}>for serious pilots.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 24 }}>
              {[
                { title: "Year-round flying weather", desc: "South Africa averages 300+ flyable days annually. Training progresses on schedule without the costly weather delays common in Europe and the UK." },
                { title: "SACAA & ICAO compliant", desc: "South African licences are issued under SACAA standards and comply fully with ICAO Annex 1 — accepted as a basis for conversion in most countries worldwide." },
                { title: "Cost-efficient training", desc: "Complete a CPL with IR for $45–60k USD compared to $90–120k+ in the UK or USA. Same rigorous standard. Significantly lower investment." },
              ].map(item => (
                <div key={item.title} style={{ padding: "24px", border: `1px solid ${BORDER}`, borderRadius: 16, background: SURFACE }}>
                  <div style={{ width: 32, height: 3, background: ACCENT, borderRadius: 2, marginBottom: 20 }} />
                  <p style={{ fontWeight: 700, fontSize: 17, marginBottom: 12, letterSpacing: "-0.01em" }}>{item.title}</p>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <div style={{ borderTop: `1px solid ${BORDER}`, padding: "clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)" }}>
        <ScrollReveal effect="fade-up">
          <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 40 }}>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 64px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.92 }}>
              Ready to start<br /><span style={{ color: ACCENT }}>your journey?</span>
            </h2>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.04, background: "#D41A1A" }} whileTap={{ scale: 0.97 }} style={{ padding: "18px 48px", background: ACCENT, color: "#fff", borderRadius: 100, fontWeight: 700, fontSize: 16, cursor: "pointer" }}>
                  Book Free Consultation
                </motion.div>
              </Link>
              <Link href="/services">
                <motion.div
                  whileHover={{ background: "rgba(6,12,24,0.12)", borderColor: "rgba(6,12,24,0.25)" }}
                  style={{ padding: "18px 48px", border: `1px solid rgba(6,12,24,0.18)`, background: "rgba(6,12,24,0.07)", color: "#060C18", borderRadius: 100, fontWeight: 600, fontSize: 16, cursor: "pointer", transition: "all 0.2s" }}
                >
                  View Training Pathways
                </motion.div>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <Footer />
    </main>
  )
}
