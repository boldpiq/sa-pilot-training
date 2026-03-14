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


export default function ContactPage() {
  return (
    <main style={{ background: `radial-gradient(ellipse 50% 40% at 70% 30%, rgba(200,24,26,0.07) 0%, transparent 65%), ${BG}`, color: "#060C18", minHeight: "100vh" }}>

        {/* HERO */}
        <section style={{ padding: "clamp(100px, 18vw, 160px) clamp(20px, 4vw, 48px) 40px", maxWidth: 1400, margin: "0 auto" }}>
          <ScrollReveal effect="fade-up">
            <Eyebrow label="Book a Consultation" />
            <h1 style={{ fontSize: "clamp(48px, 8vw, 120px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.88, marginBottom: 32 }}>
              Plan Your<br /><span style={{ color: ACCENT }}>Flight Path.</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 1.4vw, 20px)", color: MUTED, maxWidth: 520, lineHeight: 1.65 }}>
              Book a free 15-minute consultation. We&rsquo;ll answer your questions, assess your goals, and map out the clearest route to your pilot licence — no obligation, no hard sell.
            </p>
          </ScrollReveal>
        </section>

        {/* BOOKING + INFO */}
        <section style={{ padding: "0 clamp(20px, 4vw, 48px) clamp(60px, 8vw, 100px)", maxWidth: 1400, margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "clamp(48px, 6vw, 100px)", alignItems: "start" }}>

            {/* Left — info */}
            <ScrollReveal effect="fade-up">
              <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
                <div>
                  <p style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 20 }}>What to expect</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {[
                      { step: "01", text: "Pick a time that suits you — the consultation is 15 minutes and completely free." },
                      { step: "02", text: "We discuss your aviation goals, current experience, timeline, and budget." },
                      { step: "03", text: "You get a clear, honest overview of your training options in South Africa." },
                      { step: "04", text: "If you want to proceed, we outline the next steps — no pressure, no obligation." },
                    ].map(item => (
                      <div key={item.step} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.08em", paddingTop: 3, flexShrink: 0 }}>{item.step}</span>
                        <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.6 }}>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ padding: "32px", border: `1px solid ${BORDER}`, borderRadius: 20, background: SURFACE }}>
                  <p style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 20 }}>Our commitments</p>
                  {[
                    "Free, no-obligation consultation",
                    "Honest and realistic advice",
                    "SACAA-accredited school matching",
                    "End-to-end logistical support",
                  ].map(g => (
                    <div key={g} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
                      <span style={{ color: ACCENT, fontSize: 10, flexShrink: 0 }}>✦</span>
                      <p style={{ color: MUTED, fontSize: 15 }}>{g}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <p style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 16 }}>Get in touch directly</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {[
                      { label: "info@sapilottraining.co.za", href: "mailto:info@sapilottraining.co.za" },
                      { label: "+27 (0) 00 000 0000", href: "tel:+27000000000" },
                      { label: "WhatsApp", href: "https://api.whatsapp.com/send/?phone=27000000000" },
                    ].map(s => (
                      <motion.a
                        key={s.label}
                        href={s.href}
                        target={s.href.startsWith("http") ? "_blank" : undefined}
                        rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
              src="https://link.zip360.co.za/widget/booking/2iYXsaTBfL5b7Y870XVX"
              id="2iYXsaTBfL5b7Y870XVX_contact"
              title="Book a Free Consultation"
              defaultHeight={700}
              borderRadius={24}
              border={`1px solid ${BORDER}`}
              background={SURFACE}
              redirectTo="/thank-you"
              deferLoad
            />
          </div>
        </section>

      <Footer />
    </main>
  )
}
