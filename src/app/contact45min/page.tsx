"use client"
import { motion } from "motion/react"
import { ScrollReveal } from "@/components/scroll/ScrollReveal"
import { Footer } from "@/components/layout/Footer"
import { GHLBookingWidget } from "@/components/ui/GHLBookingWidget"
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

export default function Contact45MinPage() {
  return (
    <main style={{ background: BG, color: "#fff", minHeight: "100vh" }}>

      {/* Background glow */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", background: `radial-gradient(ellipse 50% 40% at 65% 30%, rgba(196,84,26,0.08) 0%, transparent 65%)`, zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* HERO */}
        <section style={{ padding: "clamp(100px, 18vw, 160px) clamp(20px, 4vw, 48px) 40px", maxWidth: 1400, margin: "0 auto" }}>
          <ScrollReveal effect="fade-up">
            <Eyebrow label="Set Appointment" />
            <h1 style={{ fontSize: "clamp(48px, 8vw, 120px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.88, marginBottom: 32 }}>
              Book Your<br /><span style={{ color: ACCENT }}>45-Min Call.</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 1.4vw, 20px)", color: MUTED, maxWidth: 560, lineHeight: 1.65 }}>
              A focused 45-minute working session to dive deep into your project, align on strategy, and map out concrete next steps.
            </p>
          </ScrollReveal>
        </section>

        {/* BOOKING + INFO */}
        <section style={{ padding: "0 clamp(20px, 4vw, 48px) clamp(60px, 8vw, 100px)", maxWidth: 1400, margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "clamp(48px, 6vw, 100px)", alignItems: "start"}}>

            {/* Left — info */}
            <ScrollReveal effect="fade-up">
              <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
                <div>
                  <p style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 20 }}>What we&apos;ll cover</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {[
                      { step: "01", text: "Deep dive into your current project status and specific challenges." },
                      { step: "02", text: "Strategy alignment — ensuring we&apos;re building toward your exact goals." },
                      { step: "03", text: "Action plan with clear next steps, timelines, and deliverables." },
                      { step: "04", text: "Q&A — no question is off the table." },
                    ].map(item => (
                      <div key={item.step} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.08em", paddingTop: 3, flexShrink: 0 }}>{item.step}</span>
                        <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.6 }}>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ padding: "32px", border: `1px solid ${BORDER}`, borderRadius: 20, background: SURFACE }}>
                  <p style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 20 }}>This session is for</p>
                  {[
                    "Existing Boldpiq clients",
                    "Qualified leads ready to move forward",
                    "Businesses with an active project brief",
                    "Anyone needing dedicated strategy time",
                  ].map(g => (
                    <div key={g} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
                      <span style={{ color: ACCENT, fontSize: 10, flexShrink: 0 }}>✦</span>
                      <p style={{ color: "#fff", fontSize: 15 }}>{g}</p>
                    </div>
                  ))}
                </div>

                <div style={{ padding: "24px 32px", border: `1px solid rgba(196,84,26,0.25)`, borderRadius: 16, background: "rgba(196,84,26,0.06)" }}>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7 }}>
                    Looking for a free introductory call?{" "}
                    <motion.a
                      href="/contact"
                      whileHover={{ color: "#E8732A" }}
                      style={{ color: ACCENT, textDecoration: "none", fontWeight: 600 }}
                    >
                      Book a free discovery call instead →
                    </motion.a>
                  </p>
                </div>

                <div>
                  <p style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 16 }}>Connect</p>
                  <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                    {[
                      { label: "Instagram", url: "https://www.instagram.com/boldpiq/" },
                      { label: "Facebook", url: "https://www.facebook.com/boldpiq" },
                      { label: "Pinterest", url: "https://za.pinterest.com/boldpiq/" },
                      { label: "LinkedIn", url: "https://www.linkedin.com/company/boldpiq/" },
                    ].map(s => (
                      <motion.a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ color: "#fff" }}
                        style={{ color: MUTED, fontSize: 14, textDecoration: "none" }}
                      >
                        {s.label}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — booking widget */}
            <GHLBookingWidget
              src="https://link.zip360.co.za/widget/booking/6TbfAfOJ1Q9lZl47p6oG"
              id="6TbfAfOJ1Q9lZl47p6oG_1773052670727"
              title="Book a 45-Minute Set Appointment"
              defaultHeight={800}
              borderRadius={24}
              border={`1px solid ${BORDER}`}
              background={SURFACE}
              redirectTo="/thank-you"
              deferLoad
            />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
