"use client"
import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence, useMotionValueEvent } from "motion/react"
import { VelocityMarquee } from "@/components/scroll/VelocityMarquee"
import { ScrollReveal } from "@/components/scroll/ScrollReveal"

const BG = "#0B0F1C"
const ACCENT = "#C4541A"
const MUTED = "rgba(255,255,255,0.45)"
const SURFACE = "rgba(255,255,255,0.05)"
const BORDER = "rgba(255,255,255,0.08)"

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

function ServiceCard({ number, title, description, tags }: { number: string; title: string; description: string; tags: string[] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ borderColor: hovered ? ACCENT : BORDER }}
      style={{ padding: "48px 40px", borderRadius: 20, border: `1px solid ${BORDER}`, background: SURFACE, display: "flex", flexDirection: "column", gap: 24, position: "relative", overflow: "hidden", cursor: "default" }}
    >
      <motion.div animate={{ opacity: hovered ? 1 : 0 }} style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }} />
      <span style={{ fontSize: 11, letterSpacing: "0.15em", color: MUTED, textTransform: "uppercase" }}>{number}</span>
      <div>
        <h3 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>{title}</h3>
        <p style={{ color: MUTED, lineHeight: 1.7, fontSize: 16 }}>{description}</p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto" }}>
        {tags.map(t => <span key={t} style={{ padding: "4px 14px", borderRadius: 100, border: `1px solid ${BORDER}`, fontSize: 12, color: MUTED }}>{t}</span>)}
      </div>
      <motion.div animate={{ x: hovered ? 0 : 16, opacity: hovered ? 1 : 0 }} style={{ fontSize: 13, fontWeight: 700, color: ACCENT }}>Learn more →</motion.div>
    </motion.div>
  )
}

function CaseCard({ tag, title, outcome, gradient }: { tag: string; title: string; outcome: string; gradient: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ scale: hovered ? 1.02 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{ borderRadius: 20, overflow: "hidden", background: gradient, minHeight: 400, padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between", cursor: "pointer" }}
    >
      <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: 100, background: "rgba(255,255,255,0.1)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", width: "fit-content" }}>{tag}</span>
      <div>
        <h3 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>{title}</h3>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: ACCENT, flexShrink: 0, display: "inline-block" }} />{outcome}
        </p>
      </div>
      <motion.div animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }} style={{ fontSize: 13, fontWeight: 700 }}>View case study →</motion.div>
    </motion.div>
  )
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 24, paddingBottom: 48, borderBottom: `1px solid ${BORDER}` }}>
      <span style={{ fontSize: "clamp(32px, 5vw, 44px)", fontWeight: 900, color: ACCENT, letterSpacing: "-0.04em", lineHeight: 1 }}>{number}</span>
      <div>
        <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, letterSpacing: "-0.02em" }}>{title}</h3>
        <p style={{ color: MUTED, lineHeight: 1.7, fontSize: 15 }}>{description}</p>
      </div>
    </div>
  )
}

function BackToTop() {
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > 600)
  })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.22 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
          style={{
            position: "fixed",
            bottom: 28,
            right: 28,
            zIndex: 50,
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: ACCENT,
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 20,
            fontWeight: 700,
            fontFamily: "inherit",
            boxShadow: "0 4px 24px rgba(196,84,26,0.45)",
          }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <main style={{ background: BG, color: "#fff", minHeight: "100vh" }}>

      <BackToTop />

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
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `radial-gradient(ellipse 60% 50% at 70% 40%, rgba(196,84,26,0.10) 0%, transparent 70%)` }} />
        <div style={{ position: "absolute", bottom: -60, right: -40, fontSize: "clamp(120px, 30vw, 420px)", fontWeight: 900, color: "rgba(255,255,255,0.022)", userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em", lineHeight: 1 }}>01</div>

        <motion.div style={{ y: heroY, opacity: heroOpacity, maxWidth: 1400, width: "100%", margin: "0 auto" }}>
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
            Web Design &amp; Development Agency
          </motion.div>

          {["Built", "To Grow."].map((line, i) => (
            <div key={line} style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 + i * 0.15 }}
                style={{ fontSize: "clamp(64px, 13vw, 200px)", fontWeight: 900, lineHeight: 0.88, letterSpacing: "-0.04em", margin: 0, color: i === 1 ? ACCENT : "#fff" }}
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
            <p style={{ fontSize: "clamp(15px, 1.4vw, 20px)", color: MUTED, maxWidth: 480, lineHeight: 1.65, margin: 0 }}>
              High-performance websites that attract, convert, and retain — engineered for businesses that refuse to blend in.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <motion.a href="#contact" whileHover={{ scale: 1.04, background: "#D4601F" }} whileTap={{ scale: 0.97 }} style={{ padding: "15px 36px", background: ACCENT, color: "#fff", borderRadius: 100, fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em", display: "inline-block" }}>Get Started</motion.a>
              <motion.a href="#work" whileHover={{ borderColor: "rgba(255,255,255,0.3)" }} style={{ padding: "15px 36px", border: `1px solid ${BORDER}`, color: "#fff", borderRadius: 100, fontWeight: 600, fontSize: 15, letterSpacing: "-0.01em", display: "inline-block" }}>See Our Work</motion.a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────────── */}
      <div style={{ padding: "28px 0", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <VelocityMarquee
          items={["Web Design", "Web Development", "Brand Identity", "GEO Optimised", "Conversion Focused", "Mobile First", "Sanity CMS", "Motion & Animation", "Results Driven", "Vercel Hosted"]}
          baseVelocity={-2}
        />
      </div>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <Section>
        <ScrollReveal effect="fade-up"><Eyebrow label="Outcomes" /></ScrollReveal>
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ borderRadius: 20, overflow: "hidden", border: `1px solid ${BORDER}` }}
        >
          {[
            { stat: 3.2, suffix: "×", label: "Average conversion rate lift across client sites" },
            { stat: 94, suffix: "%", label: "Client retention rate — we keep the clients we earn" },
            { stat: 6, suffix: " wks", label: "Average time from brief to live website" },
          ].map(({ stat, suffix, label }, i) => (
            <ScrollReveal key={label} effect="fade-up" delay={i * 0.1}>
              <div
                className={i < 2 ? "border-b md:border-b-0 md:border-r" : ""}
                style={{
                  padding: "clamp(40px, 5vw, 64px) clamp(24px, 4vw, 48px)",
                  background: i === 1 ? `rgba(196,84,26,0.08)` : SURFACE,
                  borderColor: BORDER,
                  height: "100%",
                }}
              >
                <div style={{ fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1, color: i === 1 ? ACCENT : "#fff", marginBottom: 20 }}>
                  <Counter to={stat} suffix={suffix} />
                </div>
                <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.6, maxWidth: 240 }}>{label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <Section id="services" style={{ paddingTop: 0 }}>
        <ScrollReveal effect="fade-up">
          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between"
            style={{ marginBottom: 64, gap: 24 }}
          >
            <div>
              <Eyebrow label="Services" />
              <h2 style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.92 }}>What We<br /><span style={{ color: ACCENT }}>Build.</span></h2>
            </div>
            <p style={{ color: MUTED, maxWidth: 360, lineHeight: 1.7, fontSize: 16 }}>Every engagement is designed to move the needle — not just look good on a screen.</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 20 }}>
          {[
            { number: "01", title: "Web Design", description: "Award-worthy designs that stop the scroll, earn the click, and reflect the premium nature of your brand.", tags: ["UI/UX", "Figma", "Motion Design", "Responsive"] },
            { number: "02", title: "Web Development", description: "Fast, secure, scalable Next.js websites — optimised for Core Web Vitals, AI search, and conversion from day one.", tags: ["Next.js", "TypeScript", "Vercel", "Sanity CMS"] },
            { number: "03", title: "Brand Identity", description: "Visual systems that command attention and build instant trust — logo, typography, colour, and full brand guidelines.", tags: ["Logo", "Typography", "Colour System", "Guidelines"] },
          ].map((s, i) => (
            <ScrollReveal key={s.title} effect="fade-up" delay={i * 0.1}><ServiceCard {...s} /></ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ── WORK ─────────────────────────────────────────────────── */}
      <Section id="work" style={{ paddingTop: 0 }}>
        <ScrollReveal effect="fade-up">
          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between"
            style={{ marginBottom: 64, gap: 24 }}
          >
            <div>
              <Eyebrow label="Work" />
              <h2 style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.92 }}>Proof in<br /><span style={{ color: ACCENT }}>Results.</span></h2>
            </div>
            <a href="/work" style={{ padding: "14px 32px", border: `1px solid ${BORDER}`, borderRadius: 100, fontSize: 14, fontWeight: 600, color: "#fff", flexShrink: 0 }}>View all work →</a>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 20 }}>
          {[
            { tag: "Web Design · Development", title: "Premium brand with a site that converts cold traffic", outcome: "2.8× increase in qualified leads within 60 days", gradient: "linear-gradient(135deg, #1a1f35 0%, #0d1117 100%)" },
            { tag: "Brand Identity · Web", title: "Full rebrand and launch for a scaling service business", outcome: "94% of new leads now arrive through the website", gradient: `linear-gradient(135deg, rgba(196,84,26,0.22) 0%, #0d1117 100%)` },
          ].map((c, i) => (
            <ScrollReveal key={c.title} effect="fade-up" delay={i * 0.1}><CaseCard {...c} /></ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ── PROCESS (animated orb background) ────────────────────── */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Primary orb — matches hero glow strength, slow drift */}
        <motion.div
          animate={{ x: [-80, 180, 60, -80], y: [-40, 100, -80, -40] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
          style={{
            position: "absolute",
            width: 700,
            height: 560,
            top: "5%",
            left: "20%",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(196,84,26,0.13) 0%, rgba(196,84,26,0.05) 45%, transparent 70%)`,
            pointerEvents: "none",
            filter: "blur(36px)",
          }}
        />
        {/* Secondary orb — softer, counter-moves */}
        <motion.div
          animate={{ x: [120, -100, 60, 120], y: [80, -60, 120, 80] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
          style={{
            position: "absolute",
            width: 480,
            height: 400,
            top: "30%",
            left: "45%",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(196,84,26,0.09) 0%, transparent 65%)`,
            pointerEvents: "none",
            filter: "blur(48px)",
          }}
        />

        <Section id="process" style={{ paddingTop: 0 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "clamp(48px, 6vw, 100px)", alignItems: "start" }}>
            <ScrollReveal effect="fade-up">
              <Eyebrow label="Process" />
              <h2 style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.92 }}>How We<br /><span style={{ color: ACCENT }}>Work.</span></h2>
            </ScrollReveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
              {[
                { number: "01", title: "Brief", description: "We learn your business, your goals, and your audience inside out. No guesswork — we build from a clear foundation of what success looks like for you." },
                { number: "02", title: "Design", description: "We craft a visual direction that earns your sign-off fast. You see and approve the full homepage design before a single line of code is written." },
                { number: "03", title: "Build", description: "Clean, fast, secure Next.js code with world-class animations — connected to your GHL CRM and GEO-optimised for AI search from day one." },
                { number: "04", title: "Launch", description: "We handle domain, hosting, analytics, and GEO setup. You go live with a site that works as hard as you do. We don't disappear after launch." },
              ].map((step, i) => (
                <ScrollReveal key={step.number} effect="fade-up" delay={i * 0.08}>
                  <ProcessStep {...step} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* ── TESTIMONIAL ──────────────────────────────────────────── */}
      <div style={{ padding: "80px clamp(20px, 4vw, 48px)", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <ScrollReveal effect="scale">
          <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "clamp(18px, 2.8vw, 38px)", fontWeight: 700, lineHeight: 1.35, letterSpacing: "-0.02em", marginBottom: 48 }}>
              &ldquo;BoldPiq didn&rsquo;t just build us a website — they built us a growth engine. Within 90 days our inbound leads doubled and our close rate improved because clients were already convinced before they even picked up the phone.&rdquo;
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg, ${ACCENT}, #6B1E00)`, flexShrink: 0 }} />
              <div style={{ textAlign: "left" }}>
                <p style={{ fontWeight: 700, fontSize: 15 }}>Sarah Mitchell</p>
                <p style={{ color: MUTED, fontSize: 13 }}>Founder, Mitchell Consulting Group</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ── CONTACT ──────────────────────────────────────────────── */}
      <Section id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "clamp(40px, 6vw, 80px)", alignItems: "start" }}>
          <ScrollReveal effect="fade-up">
            <Eyebrow label="Get Started" />
            <h2 style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.92, marginBottom: 32 }}>Ready to<br /><span style={{ color: ACCENT }}>Grow?</span></h2>
            <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.7, maxWidth: 380, marginBottom: 48 }}>
              Tell us about your business and what you want to achieve. We&rsquo;ll come back with a clear plan — no fluff, no hard sell.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {["Response within 24 hours", "Free initial consultation", "No lock-in contracts"].map(text => (
                <div key={text} style={{ display: "flex", gap: 14, alignItems: "center", color: MUTED, fontSize: 15 }}>
                  <span style={{ color: ACCENT, fontSize: 10, flexShrink: 0 }}>✦</span>{text}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal effect="fade-up" delay={0.15}>
            <div style={{ padding: "clamp(24px, 4vw, 40px)", border: `1px solid ${BORDER}`, borderRadius: 20, background: SURFACE }}>
              {/* ── REPLACE WITH GHL EMBED ─────────────────────────────
                GHL → Sites → Forms → your form → Embed → paste here
                <iframe src="https://api.leadconnectorhq.com/widget/form/FORM_ID"
                  style={{ width:"100%", minHeight:600, border:"none" }} scrolling="no" />
              ───────────────────────────────────────────────────── */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {["Full Name", "Email Address", "Website URL (if you have one)"].map(ph => (
                  <input key={ph} placeholder={ph} style={{ width: "100%", padding: "16px 20px", background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}`, borderRadius: 12, color: "#fff", fontSize: 15, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
                ))}
                <textarea placeholder="Tell us about your project and goals" rows={4} style={{ width: "100%", padding: "16px 20px", background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}`, borderRadius: 12, color: "#fff", fontSize: 15, outline: "none", resize: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
                <p style={{ color: MUTED, fontSize: 12 }}>Replace this form with your GHL embed. All data flows directly into your GHL CRM.</p>
                <motion.button whileHover={{ background: "#D4601F", scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ padding: 18, background: ACCENT, color: "#fff", border: "none", borderRadius: 12, fontWeight: 700, fontSize: 16, cursor: "pointer", fontFamily: "inherit", letterSpacing: "-0.01em", width: "100%" }}>
                  Send My Brief
                </motion.button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer
        className="flex flex-col md:flex-row md:items-center md:justify-between"
        style={{ borderTop: `1px solid ${BORDER}`, padding: "60px clamp(20px, 4vw, 48px)", gap: 32, maxWidth: 1400, margin: "0 auto" }}
      >
        <div>
          <p style={{ fontWeight: 900, fontSize: 22, letterSpacing: "-0.04em", marginBottom: 6 }}>boldpiq</p>
          <p style={{ color: MUTED, fontSize: 13 }}>© {new Date().getFullYear()} BoldPiq. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap" style={{ gap: "16px 32px" }}>
          {["Work", "Services", "Process", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: MUTED, fontSize: 14, fontWeight: 500 }}>{item}</a>
          ))}
        </nav>
        <div className="flex" style={{ gap: 20 }}>
          {["Instagram", "LinkedIn", "Twitter"].map(s => (
            <a key={s} href="#" style={{ color: MUTED, fontSize: 13 }}>{s}</a>
          ))}
        </div>
      </footer>

    </main>
  )
}
