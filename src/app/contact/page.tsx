"use client"
import { motion } from "motion/react"
import { ScrollReveal } from "@/components/scroll/ScrollReveal"

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

export default function ContactPage() {
  return (
    <main style={{ background: BG, color: "#fff", minHeight: "100vh" }}>

      {/* Background glow */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", background: `radial-gradient(ellipse 50% 40% at 70% 30%, rgba(196,84,26,0.07) 0%, transparent 65%)`, zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* HERO */}
        <section style={{ padding: "160px clamp(20px, 4vw, 48px) 60px", maxWidth: 1400, margin: "0 auto" }}>
          <ScrollReveal effect="fade-up">
            <Eyebrow label="Get Started" />
            <h1 style={{ fontSize: "clamp(48px, 8vw, 120px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.88, marginBottom: 32 }}>
              Ready to<br /><span style={{ color: ACCENT }}>Grow?</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 1.4vw, 20px)", color: MUTED, maxWidth: 520, lineHeight: 1.65 }}>
              Tell us about your business and what you want to achieve. We&rsquo;ll come back with a clear plan — no fluff, no hard sell.
            </p>
          </ScrollReveal>
        </section>

        {/* FORM + INFO */}
        <section style={{ padding: "0 clamp(20px, 4vw, 48px) 120px", maxWidth: 1400, margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "clamp(48px, 6vw, 100px)", alignItems: "start" }}>

            {/* Left — info */}
            <ScrollReveal effect="fade-up">
              <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
                <div>
                  <p style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 20 }}>What to expect</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {[
                      { step: "01", text: "Response within 24 hours — usually same day." },
                      { step: "02", text: "A brief discovery call to understand your goals." },
                      { step: "03", text: "A clear proposal with timeline and investment." },
                      { step: "04", text: "Project kickoff — we move fast once aligned." },
                    ].map(item => (
                      <div key={item.step} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.08em", paddingTop: 3, flexShrink: 0 }}>{item.step}</span>
                        <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.6 }}>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ padding: "32px", border: `1px solid ${BORDER}`, borderRadius: 20, background: SURFACE }}>
                  <p style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 20 }}>Guarantees</p>
                  {[
                    "Free initial consultation",
                    "No lock-in contracts",
                    "Full ownership of all assets",
                    "30-day post-launch support",
                  ].map(g => (
                    <div key={g} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
                      <span style={{ color: ACCENT, fontSize: 10, flexShrink: 0 }}>✦</span>
                      <p style={{ color: "#fff", fontSize: 15 }}>{g}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <p style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 16 }}>Connect</p>
                  <div style={{ display: "flex", gap: 20 }}>
                    {[
                      { label: "Instagram", url: "https://instagram.com/boldpiq" },
                      { label: "LinkedIn", url: "https://linkedin.com/company/boldpiq" },
                      { label: "Twitter", url: "https://twitter.com/boldpiq" },
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

            {/* Right — form */}
            <ScrollReveal effect="fade-up" delay={0.12}>
              <div style={{ padding: "clamp(24px, 4vw, 48px)", border: `1px solid ${BORDER}`, borderRadius: 24, background: SURFACE }}>
                {/* ── REPLACE WITH GHL EMBED ─────────────────────────────
                  GHL → Sites → Forms → your form → Embed → paste here
                  <iframe src="https://api.leadconnectorhq.com/widget/form/FORM_ID"
                    style={{ width:"100%", minHeight:700, border:"none" }} scrolling="no" />
                ───────────────────────────────────────────────────── */}
                <p style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Tell us about your project</p>
                <p style={{ color: MUTED, fontSize: 14, marginBottom: 32, lineHeight: 1.6 }}>Fill in what you can — we&rsquo;ll figure out the rest on the call.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 14 }}>
                    <input placeholder="First name" style={inputStyle} />
                    <input placeholder="Last name" style={inputStyle} />
                  </div>
                  <input placeholder="Email address" type="email" style={inputStyle} />
                  <input placeholder="Business name" style={inputStyle} />
                  <input placeholder="Website URL (if you have one)" style={inputStyle} />
                  <select style={{ ...inputStyle, appearance: "none" }}>
                    <option value="" disabled selected>Service you&rsquo;re interested in</option>
                    <option>Web Design</option>
                    <option>Web Development</option>
                    <option>Brand Identity</option>
                    <option>Full Package</option>
                    <option>Not sure yet</option>
                  </select>
                  <textarea placeholder="Tell us about your project, goals, and timeline" rows={5} style={{ ...inputStyle, resize: "none" }} />
                  <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.6 }}>Replace this form with your GHL embed. All submissions go directly into your GHL CRM pipeline.</p>
                  <motion.button
                    whileHover={{ background: "#D4601F", scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ padding: "18px", background: ACCENT, color: "#fff", border: "none", borderRadius: 12, fontWeight: 700, fontSize: 16, cursor: "pointer", fontFamily: "inherit", letterSpacing: "-0.01em", width: "100%" }}
                  >
                    Send My Brief
                  </motion.button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>

    </main>
  )
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "15px 20px",
  background: "rgba(255,255,255,0.04)",
  border: `1px solid ${BORDER}`,
  borderRadius: 12,
  color: "#fff",
  fontSize: 15,
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
}
