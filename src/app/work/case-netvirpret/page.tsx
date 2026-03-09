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
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/2YVSGppZ3t1nNSl74HPu/media/6899e8d622c2333c8710e223.png",
  // gallery — scraped from netvirpret.co.za (dark backgrounds only)
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/2YVSGppZ3t1nNSl74HPu/media/674812f56b2c48dbc06ebf94.jpeg",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/2YVSGppZ3t1nNSl74HPu/media/674812f5ca86fa6bc146a8f2.jpeg",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/2YVSGppZ3t1nNSl74HPu/media/674812f655dde68cee536d30.jpeg",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/2YVSGppZ3t1nNSl74HPu/media/674812f655dde6f084536d31.jpeg",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/2YVSGppZ3t1nNSl74HPu/media/674812f6abf0600030d598ce.jpeg",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/2YVSGppZ3t1nNSl74HPu/media/674812f6abf0601712d598ca.jpeg",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/fC2GVS2b0YeefyENLp3V/media/68711c96efdc1e18d30f9d20.jpeg",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/2YVSGppZ3t1nNSl74HPu/media/674812f655dde6850b536d2e.jpeg",
]

export default function NetVirPretCaseStudy() {
  return (
    <main style={{ background: BG, color: "#fff", minHeight: "100vh" }}>
      <div style={{ position: "fixed", top: 80, left: "clamp(20px, 4vw, 48px)", zIndex: 10 }}>
        <Link href="/work" style={{ fontSize: 13, color: MUTED, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          ← Back to Work
        </Link>
      </div>

      <section style={{ padding: "clamp(100px, 16vw, 140px) clamp(20px, 4vw, 48px) 0", maxWidth: 900, margin: "0 auto" }}>
        <ScrollReveal effect="fade-up">
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 24 }}>
            <span style={{ width: 32, height: 1, background: ACCENT, flexShrink: 0 }} />
            <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED }}>Case Study · Website Development</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 80px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: 24 }}>
            Net Vir<br /><span style={{ color: ACCENT }}>Pret</span>
          </h1>
          <p style={{ color: MUTED, fontSize: "clamp(15px, 1.3vw, 18px)", lineHeight: 1.7, maxWidth: 640, marginBottom: 32 }}>
            A community-focused organisation dedicated to inspiring and empowering individuals of all ages through creativity, culture, and education — offering arts and craft workshops, pottery, music, riel dance, sports, and educational programmes. They had minimal online presence and no way to tell their story at scale.
          </p>
          <a href="https://netvirpret.co.za/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: ACCENT, textDecoration: "none", border: `1px solid ${ACCENT}`, borderRadius: 8, padding: "10px 20px", marginBottom: 48 }}>
            Visit Live Site →
          </a>
        </ScrollReveal>

        <ScrollReveal effect="fade-up" delay={0.1}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 16, overflow: "hidden", marginBottom: 64 }}>
            <Image src={images[0]} alt="Net Vir Pret website" fill style={{ objectFit: "cover" }} sizes="900px" />
          </div>
        </ScrollReveal>
      </section>

      <section style={{ padding: "0 clamp(20px, 4vw, 48px) clamp(60px, 8vw, 100px)", maxWidth: 900, margin: "0 auto" }}>
        <ScrollReveal effect="fade-up">
          <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 48, marginBottom: 48 }}>
            <h2 style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT, marginBottom: 16 }}>The Challenge</h2>
            <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75 }}>
              Net Vir Pret had a minimal and fragmented online presence. Limited visibility meant difficulty showcasing their community impact to potential donors, volunteers, and sponsors — and no central hub for existing members to stay connected or refer others.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal effect="fade-up">
          <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 48, marginBottom: 48 }}>
            <h2 style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT, marginBottom: 16 }}>The Solution</h2>
            <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75 }}>
              A vibrant, user-friendly website with dedicated activity showcase pages, a community impact section with real statistics, an accessible mobile-friendly layout, real activity photography throughout, and donation and volunteer integration to convert interest into action.
            </p>
            <ul style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Dedicated pages for each activity — arts, pottery, music, riel dance, sports",
                "Community impact section featuring key statistics (19 students in tertiary education)",
                "Accessible, mobile-friendly layout for all ages",
                "Real photography bringing the community to life",
                "Donation and volunteer integration to drive supporter action",
              ].map(item => (
                <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", color: MUTED, fontSize: 15 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: ACCENT, flexShrink: 0, marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Impact stat */}
        <ScrollReveal effect="fade-up">
          <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 48, marginBottom: 48 }}>
            <h2 style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT, marginBottom: 24 }}>Impact Highlight</h2>
            <div style={{ padding: "32px 40px", border: `1px solid ${BORDER}`, borderRadius: 16, background: "rgba(196,84,26,0.06)", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <p style={{ fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 900, color: ACCENT, lineHeight: 1, margin: 0 }}>19</p>
              <p style={{ fontSize: 18, color: "#fff", fontWeight: 600, lineHeight: 1.4, margin: 0 }}>Students placed in<br />tertiary education — showcased as proof of programme impact</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal effect="fade-up">
          <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 48, marginBottom: 48 }}>
            <h2 style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT, marginBottom: 16 }}>Outcomes</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
              {[
                { label: "Central communication hub", sub: "Everything in one place for members and supporters" },
                { label: "Stronger local engagement", sub: "Community can now find and share the organisation" },
                { label: "Sponsor visibility", sub: "Outside interest from potential sponsors increased" },
                { label: "Credibility at scale", sub: "Impact stats give donors confidence to contribute" },
              ].map(o => (
                <div key={o.label} style={{ padding: "20px 24px", border: `1px solid ${BORDER}`, borderRadius: 12, background: "rgba(255,255,255,0.02)" }}>
                  <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{o.label}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{o.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal effect="fade-up">
          <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 48, marginBottom: 48 }}>
            <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 24, margin: 0 }}>
              <p style={{ fontSize: "clamp(17px, 1.6vw, 22px)", fontStyle: "italic", lineHeight: 1.6, color: "#fff", marginBottom: 16 }}>
                &ldquo;We are very fortunate to have Monique develop a website and would recommend her to anyone.&rdquo;
              </p>
              <cite style={{ fontSize: 13, color: MUTED, fontStyle: "normal" }}>— Net Vir Pret</cite>
            </blockquote>
          </div>
        </ScrollReveal>

        <ScrollReveal effect="fade-up">
          <h2 style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT, marginBottom: 24 }}>Project Gallery</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {images.slice(1).map((src, i) => (
              <div key={i} style={{ position: "relative", aspectRatio: "4/3", borderRadius: 12, overflow: "hidden" }}>
                <Image src={src} alt={`Net Vir Pret image ${i + 2}`} fill style={{ objectFit: "cover" }} sizes="400px" />
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div style={{ marginTop: 64, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <Link href="/work/case-the-cherri-chilli" style={{ fontSize: 14, color: MUTED, textDecoration: "none" }}>← The Cherri Chilli</Link>
          <Link href="/work" style={{ fontSize: 14, color: ACCENT, textDecoration: "none", fontWeight: 600 }}>All Work →</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
