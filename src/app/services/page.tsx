"use client"
import { useState } from "react"
import { motion } from "motion/react"
import { ScrollReveal } from "@/components/scroll/ScrollReveal"
import Link from "next/link"
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

const programs = [
  {
    number: "01",
    title: "PPL — Private Pilot Licence",
    tagline: "Your first licence. Your first solo. The beginning of everything.",
    description: "The PPL is the foundation of every pilot career. You'll learn to plan and fly cross-country routes, handle emergency procedures, and operate in controlled and uncontrolled airspace. South Africa's consistent weather means you progress faster — with fewer costly delays.",
    deliverables: ["Minimum 45 flight hours", "Solo cross-country flight", "Navigation and meteorology theory", "Air Law and procedures", "Medical certificate (Class 2)", "SACAA written and flight tests"],
    tags: ["Single Engine", "VFR Flight", "Solo Navigation", "SACAA", "45+ Hours"],
    outcome: "A globally recognised licence that opens the door to every aviation career path.",
  },
  {
    number: "02",
    title: "IR — Instrument Rating",
    tagline: "Fly in cloud. Fly at night. Fly further.",
    description: "The Instrument Rating trains you to fly solely by reference to instruments — essential for commercial operations and airline career progression. Paired with your PPL or CPL, it dramatically expands where and when you can fly.",
    deliverables: ["Minimum 50 hours instrument time", "IFR flight planning and procedures", "Approach and departure procedures", "Navigation aids and avionics", "SACAA instrument proficiency check", "Night rating included"],
    tags: ["IFR", "Night Flying", "Navigation Aids", "50+ Hours", "Cloud Flying"],
    outcome: "The professional rating that separates recreational pilots from career aviators.",
  },
  {
    number: "03",
    title: "CPL — Commercial Pilot Licence",
    tagline: "Fly professionally. Get paid to do what you love.",
    description: "The CPL qualifies you to act as Pilot-in-Command on commercial operations and earn a salary as a pilot. Combined with a Multi-Engine rating and IR, you'll be positioned for charter, cargo, or regional airline operations.",
    deliverables: ["Minimum 200 total flight hours", "Multi-Engine rating", "Commercial flight manoeuvres", "Complex aircraft operations", "Advanced navigation and performance", "SACAA CPL flight test"],
    tags: ["Multi-Engine", "Commercial Ops", "200+ Hours", "Paid Flying", "Charter Ready"],
    outcome: "Your licence to earn. The commercial ticket that turns flying into a career.",
  },
  {
    number: "04",
    title: "ATPL — Airline Transport Pilot Licence",
    tagline: "The highest standard in aviation. The airline command licence.",
    description: "The ATPL is required to serve as Pilot-in-Command on airline transport operations. It represents the pinnacle of pilot licensing and is the goal of every aspiring airline captain. South Africa's SACAA ATPL is fully ICAO Annex 1 compliant and accepted by aviation authorities worldwide.",
    deliverables: ["Minimum 1,500 total flight hours", "ATPL ground school (14 subjects)", "Multi-crew cooperation (MCC)", "Jet orientation course", "Simulator type rating preparation", "SACAA ATPL examinations"],
    tags: ["Airline Ready", "1,500+ Hours", "ICAO Annex 1", "Type Rating Prep", "MCC"],
    outcome: "The licence that puts you in the left seat of an airliner.",
  },
]

const faqs = [
  { q: "Do I need any prior flying experience to start?", a: "No prior experience is required to begin PPL training. You'll start from the ground up — from your first flight lesson through to solo and beyond. We match you with a school suited to beginners." },
  { q: "Will my South African licence be valid in my home country?", a: "SACAA licences comply fully with ICAO Annex 1 standards, which means they are accepted as a basis for licence conversion in most countries. We assist with the conversion process after training." },
  { q: "What happens if bad weather delays my training?", a: "South Africa averages 300+ flyable days per year — significantly more than the UK or Europe. Weather delays are minimal. We factor reasonable buffer time into all training timelines." },
  { q: "Can my student visa be extended if my training takes longer?", a: "Yes. Study visa extensions are possible and we guide you through the process. Our visa preparation service includes documentation for realistic training timelines." },
  { q: "How is accommodation arranged?", a: "We source and vet accommodation near your training facility before you arrive. Options range from private apartments to student houses depending on location and budget." },
  { q: "What is the total cost to complete a CPL with IR?", a: "Training costs vary by school and individual progression, but a CPL with IR in South Africa typically ranges from $45,000–$60,000 USD — compared to $90,000–$120,000 in the UK or USA for equivalent training." },
]

export default function TrainingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main style={{ background: BG, color: "#060C18", minHeight: "100vh" }}>

      {/* HERO */}
      <section style={{ padding: "clamp(100px, 18vw, 160px) clamp(20px, 4vw, 48px) 60px", maxWidth: 1400, margin: "0 auto" }}>
        <ScrollReveal effect="fade-up">
          <Eyebrow label="Training Pathways" />
          <h1 style={{ fontSize: "clamp(48px, 8vw, 120px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.88, marginBottom: 40 }}>
            Your Flight<br /><span style={{ color: ACCENT }}>Path.</span>
          </h1>
          <p style={{ fontSize: "clamp(16px, 1.4vw, 20px)", color: MUTED, maxWidth: 580, lineHeight: 1.65 }}>
            Four licence pathways. Every one designed to meet ICAO standards — completed in South Africa at a fraction of the cost, with exceptional flying weather year-round.
          </p>
        </ScrollReveal>
      </section>

      {/* PROGRAM CARDS */}
      <section style={{ padding: "0 clamp(20px, 4vw, 48px)", maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {programs.map((p, i) => (
            <ScrollReveal key={p.number} effect="fade-up" delay={i * 0.08}>
              <ProgramRow program={p} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* WHAT'S INCLUDED IN EVERY ENGAGEMENT */}
      <section style={{ padding: "clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)", maxWidth: 1400, margin: "0 auto" }}>
        <ScrollReveal effect="fade-up">
          <div style={{ padding: "clamp(32px, 4vw, 64px)", border: `1px solid ${BORDER}`, borderRadius: 24, background: SURFACE }}>
            <Eyebrow label="Always included" />
            <h2 style={{ fontSize: "clamp(28px, 3vw, 48px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 48 }}>
              What we handle<br /><span style={{ color: ACCENT }}>for every student.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" style={{ gap: 32 }}>
              {[
                { icon: "✈️", title: "Flight school matching", desc: "SACAA-accredited schools selected for your programme, budget, and location." },
                { icon: "🛂", title: "Visa guidance", desc: "South African study visa applications, documentation, and extension support." },
                { icon: "🏠", title: "Accommodation", desc: "Vetted housing near your training facility — arranged before you arrive." },
                { icon: "📋", title: "Enrollment coordination", desc: "We liaise directly with the flight school so you start without friction." },
                { icon: "📡", title: "Ongoing monitoring", desc: "Regular check-ins throughout training to resolve any issues early." },
                { icon: "🌍", title: "Post-training licensing", desc: "Licence issuance and home-country conversion guidance after you pass." },
              ].map(item => (
                <div key={item.title}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                  <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{item.title}</p>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 clamp(20px, 4vw, 48px) clamp(60px, 8vw, 100px)", maxWidth: 800, margin: "0 auto" }}>
        <ScrollReveal effect="fade-up">
          <Eyebrow label="FAQ" />
          <h2 style={{ fontSize: "clamp(28px, 3vw, 48px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 48 }}>
            Common<br /><span style={{ color: ACCENT }}>questions.</span>
          </h2>
        </ScrollReveal>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} effect="fade-up" delay={i * 0.05}>
              <div style={{ borderBottom: `1px solid ${BORDER}` }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", textAlign: "left", padding: "24px 0", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, fontFamily: "inherit" }}
                >
                  <span style={{ fontSize: "clamp(16px, 1.2vw, 18px)", fontWeight: 600, color: MUTED }}>{faq.q}</span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    style={{ fontSize: 24, color: ACCENT, flexShrink: 0, display: "block", lineHeight: 1 }}
                  >
                    +
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                  style={{ overflow: "hidden" }}
                >
                  <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, paddingBottom: 24 }}>{faq.a}</p>
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{ borderTop: `1px solid ${BORDER}`, padding: "clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)" }}>
        <ScrollReveal effect="scale">
          <div style={{ maxWidth: 1400, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 80px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.92, marginBottom: 32 }}>
              Ready to<br /><span style={{ color: ACCENT }}>start training?</span>
            </h2>
            <p style={{ color: MUTED, fontSize: 18, maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.65 }}>
              Book a free 15-minute consultation. We&rsquo;ll map out your route to a pilot licence — clearly, honestly, and without pressure.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.04, background: "#D41A1A" }} whileTap={{ scale: 0.97 }} style={{ padding: "18px 48px", background: ACCENT, color: "#fff", borderRadius: 100, fontWeight: 700, fontSize: 16, cursor: "pointer" }}>
                  Book Free Consultation
                </motion.div>
              </Link>
              <Link href="/about">
                <motion.div
                  whileHover={{ background: "rgba(6,12,24,0.12)", borderColor: "rgba(6,12,24,0.25)" }}
                  style={{ padding: "18px 48px", border: `1px solid rgba(6,12,24,0.18)`, background: "rgba(6,12,24,0.07)", color: "#060C18", borderRadius: 100, fontWeight: 600, fontSize: 16, cursor: "pointer", transition: "all 0.2s" }}
                >
                  About Our Service
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

function ProgramRow({ program }: { program: typeof programs[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ border: `1px solid ${BORDER}`, borderRadius: 20, overflow: "hidden", marginBottom: 12, background: `linear-gradient(135deg, rgba(200,24,26,0.06) 0%, ${SURFACE} 100%)` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", padding: "clamp(28px, 3vw, 44px) clamp(24px, 3vw, 40px)" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.15em", color: MUTED, textTransform: "uppercase", marginBottom: 8 }}>{program.number}</p>
            <h2 style={{ fontSize: "clamp(22px, 3.5vw, 48px)", fontWeight: 900, letterSpacing: "-0.04em", color: "#060C18", margin: 0 }}>{program.title}</h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <p className="hidden md:block" style={{ color: MUTED, fontSize: 16, maxWidth: 320, textAlign: "right" }}>{program.tagline}</p>
            <motion.div
              animate={{ rotate: open ? 45 : 0 }}
              style={{ width: 48, height: 48, borderRadius: "50%", border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, color: ACCENT, flexShrink: 0 }}
            >
              +
            </motion.div>
          </div>
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        style={{ overflow: "hidden" }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 48, padding: "clamp(24px, 3vw, 40px) clamp(24px, 3vw, 40px) clamp(28px, 3vw, 44px)", borderTop: `1px solid ${BORDER}` }}
        >
          <div>
            <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}>{program.description}</p>
            <p style={{ fontSize: 13, fontWeight: 700, color: ACCENT, fontStyle: "italic" }}>&ldquo;{program.outcome}&rdquo;</p>
          </div>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED, marginBottom: 20 }}>What&apos;s included</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {program.deliverables.map(d => (
                <li key={d} style={{ display: "flex", gap: 12, alignItems: "flex-start", color: "#060C18", fontSize: 15 }}>
                  <span style={{ color: ACCENT, marginTop: 2, flexShrink: 0 }}>✦</span>{d}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {program.tags.map(t => (
                <span key={t} style={{ padding: "4px 14px", borderRadius: 100, border: `1px solid ${BORDER}`, fontSize: 12, color: MUTED }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
