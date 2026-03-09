"use client"
import Link from "next/link"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll/ScrollReveal"
import { Footer } from "@/components/layout/Footer"

const BG = "#0B0F1C"
const ACCENT = "#C4541A"
const MUTED = "rgba(255,255,255,0.45)"
const BORDER = "rgba(255,255,255,0.08)"

const images = [
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/2YVSGppZ3t1nNSl74HPu/media/6899e583ccc96cbf93ffaae8.png",
  // gallery — scraped from whitesons.co.za (dark/coloured backgrounds only)
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/2YVSGppZ3t1nNSl74HPu/media/686f8444899478479febb100.png",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/2YVSGppZ3t1nNSl74HPu/media/686f8d548994782af3ebca46.png",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/2YVSGppZ3t1nNSl74HPu/media/68713e229c39ffac292a6bab.png",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/2YVSGppZ3t1nNSl74HPu/media/68713e220d2af810bc742e0b.png",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/2YVSGppZ3t1nNSl74HPu/media/686f84e09f20bfdb1783b235.png",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/2YVSGppZ3t1nNSl74HPu/media/686f8675e9ff4cd4a0b1924b.png",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/2YVSGppZ3t1nNSl74HPu/media/686f78178994783420eba220.png",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/2YVSGppZ3t1nNSl74HPu/media/686f7df8bfccb43b214098e9.jpeg",
]

export default function WhiteSonsCaseStudy() {
  return (
    <main style={{ background: BG, color: "#fff", minHeight: "100vh" }}>
      {/* Back */}
      <div style={{ position: "fixed", top: 80, left: "clamp(20px, 4vw, 48px)", zIndex: 10 }}>
        <Link href="/work" style={{ fontSize: 13, color: MUTED, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          ← Back to Work
        </Link>
      </div>

      {/* Hero */}
      <section style={{ padding: "clamp(100px, 16vw, 140px) clamp(20px, 4vw, 48px) 0", maxWidth: 900, margin: "0 auto" }}>
        <ScrollReveal effect="fade-up">
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 24 }}>
            <span style={{ width: 32, height: 1, background: ACCENT, flexShrink: 0 }} />
            <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED }}>Case Study · Website Development</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 80px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: 24 }}>
            White &amp; Sons<br /><span style={{ color: ACCENT }}>Panel Beaters</span>
          </h1>
          <p style={{ color: MUTED, fontSize: "clamp(15px, 1.3vw, 18px)", lineHeight: 1.7, maxWidth: 640, marginBottom: 32 }}>
            A proud, family-owned business in Montagu offering specialised solutions in quality construction and home renovation. For decades, they built a strong reputation for craftsmanship, precision, and personal service — but had no professional online presence to show for it.
          </p>
          <a href="https://www.whitesons.co.za/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: ACCENT, textDecoration: "none", border: `1px solid ${ACCENT}`, borderRadius: 8, padding: "10px 20px", marginBottom: 48 }}>
            Visit Live Site →
          </a>
        </ScrollReveal>

        {/* Hero image */}
        <ScrollReveal effect="fade-up" delay={0.1}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 16, overflow: "hidden", marginBottom: 64 }}>
            <Image src={images[0]} alt="White & Sons Panel Beaters website" fill style={{ objectFit: "cover" }} sizes="900px" />
          </div>
        </ScrollReveal>
      </section>

      {/* Content */}
      <section style={{ padding: "0 clamp(20px, 4vw, 48px) clamp(60px, 8vw, 100px)", maxWidth: 900, margin: "0 auto" }}>
        {/* Challenge */}
        <ScrollReveal effect="fade-up">
          <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 48, marginBottom: 48 }}>
            <h2 style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT, marginBottom: 16 }}>The Challenge</h2>
            <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75 }}>
              While White &amp; Sons Panel Beaters had earned a loyal customer base through word-of-mouth, their lack of a professional online presence meant missed opportunities. New clients had no way to verify their quality, browse their past work, or contact them easily — leaving potential business on the table daily.
            </p>
          </div>
        </ScrollReveal>

        {/* Solution */}
        <ScrollReveal effect="fade-up">
          <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 48, marginBottom: 48 }}>
            <h2 style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT, marginBottom: 16 }}>The Solution</h2>
            <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75 }}>
              A modern, responsive website built with visual storytelling at its core — high-quality project photography, a warm professional aesthetic, streamlined navigation, and an SEO-optimised structure that ensures potential clients can find them when searching locally.
            </p>
            <ul style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              {["Visual storytelling with high-quality project photography", "Warm, professional aesthetic reflecting the family business values", "Streamlined navigation for quick access to services and contact", "SEO-optimised build for local search visibility", "Fully responsive — works on every device"].map(item => (
                <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", color: MUTED, fontSize: 15 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: ACCENT, flexShrink: 0, marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Outcomes */}
        <ScrollReveal effect="fade-up">
          <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 48, marginBottom: 48 }}>
            <h2 style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT, marginBottom: 16 }}>Outcomes</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
              {[
                { label: "Enhanced brand credibility", sub: "Online presence reflects decades of quality work" },
                { label: "Improved client inquiries", sub: "Easier for new customers to find and contact them" },
                { label: "Showcase of past projects", sub: "Clients can verify quality before reaching out" },
                { label: "Referral amplification", sub: "Existing clients can now share a professional link" },
              ].map(o => (
                <div key={o.label} style={{ padding: "20px 24px", border: `1px solid ${BORDER}`, borderRadius: 12, background: "rgba(255,255,255,0.02)" }}>
                  <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{o.label}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{o.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>


        {/* Gallery */}
        <ScrollReveal effect="fade-up">
          <h2 style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT, marginBottom: 24 }}>Project Gallery</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {images.slice(1).map((src, i) => (
              <div key={i} style={{ position: "relative", aspectRatio: "4/3", borderRadius: 12, overflow: "hidden" }}>
                <Image src={src} alt={`White & Sons project image ${i + 2}`} fill style={{ objectFit: "cover" }} sizes="400px" />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Nav */}
        <div style={{ marginTop: 64, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <Link href="/work" style={{ fontSize: 14, color: MUTED, textDecoration: "none" }}>← All Work</Link>
          <Link href="/work/case-bright-haven" style={{ fontSize: 14, color: ACCENT, textDecoration: "none", fontWeight: 600 }}>Next: Bright Haven →</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
