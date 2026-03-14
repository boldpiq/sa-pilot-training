"use client"
import { motion } from "motion/react"
import { ScrollReveal } from "@/components/scroll/ScrollReveal"
import { Footer } from "@/components/layout/Footer"
import { GHLBookingWidget } from "@/components/ui/GHLBookingWidget"
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

export default function Contact45MinPage() {
  return (
    <main style={{ background: `radial-gradient(ellipse 50% 40% at 70% 30%, rgba(200,24,26,0.07) 0%, transparent 65%), ${BG}`, color: "#060C18", minHeight: "100vh" }}>


      <div>
        {/* HERO */}
        <section style={{ padding: "clamp(100px, 18vw, 160px) clamp(20px, 4vw, 48px) 40px", maxWidth: 1400, margin: "0 auto" }}>
          <ScrollReveal effect="fade-up">
            <Eyebrow label="In-Depth Consultation" />
            <h1 style={{ fontSize: "clamp(48px, 8vw, 120px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.88, marginBottom: 32 }}>
              Book Your<br /><span style={{ color: ACCENT }}>45-Min Call.</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 1.4vw, 20px)", color: MUTED, maxWidth: 560, lineHeight: 1.65 }}>
              A focused 45-minute session to go deep on your aviation goals, training options, and the exact steps to get you into the cockpit.
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
                  <p style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 20 }}>What to expect</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {[
                      { step: "01", text: "Deep dive into your aviation goals, target licence, and current experience level." },
                      { step: "02", text: "School matching — we identify the best SACAA-accredited options for your budget and timeline." },
                      { step: "03", text: "Clear cost breakdown, visa requirements, and accommodation logistics for South Africa." },
                      { step: "04", text: "Concrete next steps to get you enrolled and flying as soon as possible." },
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
                    "Serious candidates ready to commit to training",
                    "Students who've done their research and want expert guidance",
                    "Anyone comparing South Africa vs other training destinations",
                    "Pilots looking to convert or extend an existing licence",
                  ].map(g => (
                    <div key={g} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
                      <span style={{ color: ACCENT, fontSize: 10, flexShrink: 0 }}>✦</span>
                      <p style={{ color: MUTED, fontSize: 15 }}>{g}</p>
                    </div>
                  ))}
                </div>

                <div style={{ padding: "24px 32px", border: `1px solid rgba(200,24,26,0.25)`, borderRadius: 16, background: "rgba(200,24,26,0.05)" }}>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7 }}>
                    Not sure yet?{" "}
                    <motion.a
                      href="/contact"
                      whileHover={{ color: "#D41A1A" }}
                      style={{ color: ACCENT, textDecoration: "none", fontWeight: 600 }}
                    >
                      Start with a free 15-minute consultation instead →
                    </motion.a>
                  </p>
                </div>

                <div>
                  <p style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 16 }}>Get in touch directly</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {[
                      { label: "info@sapilottraining.co.za", url: "mailto:info@sapilottraining.co.za" },
                      { label: "+27 (0) 00 000 0000", url: "tel:+27000000000" },
                      { label: "WhatsApp", url: "https://api.whatsapp.com/send/?phone=27000000000" },
                    ].map(s => (
                      <motion.a
                        key={s.label}
                        href={s.url}
                        target={s.url.startsWith("http") ? "_blank" : undefined}
                        rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
                        whileHover={{ color: ACCENT }}
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
