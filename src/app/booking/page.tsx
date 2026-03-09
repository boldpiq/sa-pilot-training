"use client"
import { ScrollReveal } from "@/components/scroll/ScrollReveal"
import { Footer } from "@/components/layout/Footer"
import { GHLBookingWidget } from "@/components/ui/GHLBookingWidget"

const BG = "#0B0F1C"
const ACCENT = "#C4541A"
const MUTED = "rgba(255,255,255,0.45)"
const BORDER = "rgba(255,255,255,0.08)"

export default function BookingPage() {
  return (
    <main style={{ background: BG, color: "#fff", minHeight: "100vh" }}>
      <section style={{ padding: "clamp(100px, 14vw, 140px) clamp(20px, 4vw, 48px) 60px", maxWidth: 1000, margin: "0 auto" }}>
        <ScrollReveal effect="fade-up">
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 32 }}>
            <span style={{ width: 32, height: 1, background: ACCENT, flexShrink: 0 }} />
            <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED }}>Set Appointment</span>
          </div>
          <h1 style={{ fontSize: "clamp(40px, 7vw, 100px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.88, marginBottom: 24 }}>
            Book Your<br /><span style={{ color: ACCENT }}>45-Min Call.</span>
          </h1>
          <p style={{ fontSize: "clamp(15px, 1.3vw, 19px)", color: MUTED, maxWidth: 480, lineHeight: 1.65, marginBottom: 64 }}>
            A focused 45-minute session to dive deep into your project, align on strategy, and map out next steps — reserved for existing clients and qualified leads.
          </p>
        </ScrollReveal>

        <ScrollReveal effect="fade-up" delay={0.12}>
          <div
            style={{
              width: "100%",
              maxHeight: "80vh",
              overflowY: "auto",
              overflowX: "hidden",
              border: `1px solid ${BORDER}`,
              borderRadius: 12,
              background: "rgba(255,255,255,0.03)"
            }}
          >
            <GHLBookingWidget
              src="https://link.zip360.co.za/widget/booking/6TbfAfOJ1Q9lZl47p6oG"
              id="6TbfAfOJ1Q9lZl47p6oG_booking"
              title="Book a 45-Minute Set Appointment"
              defaultHeight={1000}
              border="none"
              background="transparent"
              redirectTo="/thank-you"
              deferLoad
            />
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  )
}