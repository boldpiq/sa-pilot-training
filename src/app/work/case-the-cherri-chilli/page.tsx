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
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/2YVSGppZ3t1nNSl74HPu/media/6899d8a51636d2692d99f396.png",
  // gallery — from LxOWVuplV3bns8hAnSqq (Cherri Chilli food images only)
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/2YVSGppZ3t1nNSl74HPu/media/685a92c69af9b36000901158.png",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/2YVSGppZ3t1nNSl74HPu/media/685a92c68e174018ac278f79.png",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/2YVSGppZ3t1nNSl74HPu/media/685a92c66d0c796f6c1f31bd.png",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/2YVSGppZ3t1nNSl74HPu/media/685ae046b912607a448287fc.png",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/2YVSGppZ3t1nNSl74HPu/media/685ae0462b37dc6c8b82c086.png",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/2YVSGppZ3t1nNSl74HPu/media/685ae0462b37dcb11c82c085.png",
]

export default function CherriChilliCaseStudy() {
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
            The Cherri<br /><span style={{ color: ACCENT }}>Chilli</span>
          </h1>
          <p style={{ color: MUTED, fontSize: "clamp(15px, 1.3vw, 18px)", lineHeight: 1.7, maxWidth: 640, marginBottom: 32 }}>
            A vibrant restaurant blending authentic Indian flavours with modern culinary finesse. Known for bold dishes and an immersive dining experience — but their digital presence didn&apos;t reflect their energy or quality.
          </p>
          <a href="https://app.zip360.co.za/v2/preview/LxOWVuplV3bns8hAnSqq" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: ACCENT, textDecoration: "none", border: `1px solid ${ACCENT}`, borderRadius: 8, padding: "10px 20px", marginBottom: 48 }}>
            Visit Live Site →
          </a>
        </ScrollReveal>

        <ScrollReveal effect="fade-up" delay={0.1}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 16, overflow: "hidden", marginBottom: 64 }}>
            <Image src={images[0]} alt="The Cherri Chilli website" fill style={{ objectFit: "cover" }} sizes="900px" />
          </div>
        </ScrollReveal>
      </section>

      <section style={{ padding: "0 clamp(20px, 4vw, 48px) clamp(60px, 8vw, 100px)", maxWidth: 900, margin: "0 auto" }}>
        <ScrollReveal effect="fade-up">
          <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 48, marginBottom: 48 }}>
            <h2 style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT, marginBottom: 16 }}>The Challenge</h2>
            <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75 }}>
              The Cherri Chilli&apos;s existing presence didn&apos;t capture their energy or quality. They needed a mobile-friendly site that put the menu first, made ordering effortless, and gave their brand the visual identity it deserved — while also creating a platform for their blog and customer reviews.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal effect="fade-up">
          <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 48, marginBottom: 48 }}>
            <h2 style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT, marginBottom: 16 }}>The Solution</h2>
            <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75 }}>
              A clean, elegant website with a menu-first layout, WhatsApp ordering integration for frictionless orders, a responsive design built mobile-first, story-driven blog and review sections, and a fully SEO-optimised build to improve local discoverability.
            </p>
            <ul style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "WhatsApp ordering integration for frictionless customer experience",
                "Menu-first layout — the most important content front and centre",
                "Mobile-first responsive design for on-the-go ordering",
                "Story-driven blog and customer reviews section",
                "SEO-optimised build for local restaurant discovery",
              ].map(item => (
                <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", color: MUTED, fontSize: 15 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: ACCENT, flexShrink: 0, marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal effect="fade-up">
          <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 48, marginBottom: 48 }}>
            <h2 style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT, marginBottom: 16 }}>Outcomes</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
              {[
                { label: "Seamless ordering", sub: "WhatsApp integration removed all ordering friction" },
                { label: "Brand alignment", sub: "Digital presence now matches the quality of the food" },
                { label: "Improved discoverability", sub: "SEO optimisation drives new local traffic" },
                { label: "Customer engagement", sub: "Blog and reviews create ongoing connection" },
              ].map(o => (
                <div key={o.label} style={{ padding: "20px 24px", border: `1px solid ${BORDER}`, borderRadius: 12, background: "rgba(255,255,255,0.02)" }}>
                  <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{o.label}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{o.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonial */}
        <ScrollReveal effect="fade-up">
          <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 48, marginBottom: 48 }}>
            <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 24, margin: 0 }}>
              <p style={{ fontSize: "clamp(17px, 1.6vw, 22px)", fontStyle: "italic", lineHeight: 1.6, color: "#fff", marginBottom: 16 }}>
                &ldquo;Her commitment to quality and her ability to capture the spirit of our brand in every aspect of the site… highly recommend her services.&rdquo;
              </p>
              <cite style={{ fontSize: 13, color: MUTED, fontStyle: "normal" }}>— The Cherri Chilli</cite>
            </blockquote>
          </div>
        </ScrollReveal>

        <ScrollReveal effect="fade-up">
          <h2 style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT, marginBottom: 24 }}>Project Gallery</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {images.slice(1).map((src, i) => (
              <div key={i} style={{ position: "relative", aspectRatio: "4/3", borderRadius: 12, overflow: "hidden" }}>
                <Image src={src} alt={`The Cherri Chilli image ${i + 2}`} fill style={{ objectFit: "cover" }} sizes="400px" />
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div style={{ marginTop: 64, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <Link href="/work/case-bright-haven" style={{ fontSize: 14, color: MUTED, textDecoration: "none" }}>← Bright Haven</Link>
          <Link href="/work/case-netvirpret" style={{ fontSize: 14, color: ACCENT, textDecoration: "none", fontWeight: 600 }}>Next: Net Vir Pret →</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
