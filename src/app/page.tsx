import {
  MagneticButton, LiquidButton, ShimmerButton, RippleButton,
  TiltCard, MorphingText, TextScramble, GlitchText, TextReveal,
  ScrollReveal, VelocityMarquee, AnimatedAccordion, AnimatedTabs,
  CursorFollower, AnimatedToggle, SkeletonCard,
} from "@/components"
import { ContactForm } from "@/components/forms/ContactForm"
import { FloatingGeometry } from "@/components/three/FloatingGeometry"
import { GlowOrb } from "@/components/three/GlowOrb"

export default function DemoPage() {
  return (
    <>
      <CursorFollower />

      {/* Hero */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#0a0a0a", padding: "0 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }}>
          <FloatingGeometry shape="icosahedron" color="#6366f1" distort={0.4} />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6366f1", marginBottom: 24 }}>BoldPiq Component Library</p>
          <TextReveal text="World-Class Web. Built Different." el="h1" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 24, maxWidth: 800 }} />
          <p style={{ fontSize: 18, color: "#a0a0a0", maxWidth: 480, marginBottom: 40 }}>
            Every animation, interaction, and scroll effect your clients will ever need.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <MagneticButton style={{ padding: "14px 32px", background: "#6366f1", color: "#fff", border: "none", borderRadius: 999, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
              Explore Components
            </MagneticButton>
            <ShimmerButton style={{ padding: "14px 32px", background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 999, fontSize: 15, cursor: "pointer" }}>
              View Prompts
            </ShimmerButton>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div style={{ background: "#0a0a0a", padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <VelocityMarquee items={["Motion", "GSAP", "Lenis", "React Three Fiber", "tsParticles", "Next.js 16", "TypeScript", "Tailwind CSS"]} speed={60} />
      </div>

      {/* Text Effects */}
      <section style={{ padding: "120px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <ScrollReveal effect="slide-up">
          <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6366f1", marginBottom: 16 }}>Typography</p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 64 }}>Text that moves</h2>
        </ScrollReveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48 }}>
          <ScrollReveal effect="fade" delay={0}>
            <p style={{ color: "#555", fontSize: 11, marginBottom: 16, letterSpacing: "0.1em", textTransform: "uppercase" }}>Morphing</p>
            <MorphingText words={["Elegant", "Precise", "Bold", "Crafted"]} style={{ fontSize: 40, fontWeight: 700, color: "#fff" }} />
          </ScrollReveal>
          <ScrollReveal effect="fade" delay={0.1}>
            <p style={{ color: "#555", fontSize: 11, marginBottom: 16, letterSpacing: "0.1em", textTransform: "uppercase" }}>Scramble (hover)</p>
            <TextScramble text="Hover to trigger" trigger="hover" style={{ fontSize: 32, fontWeight: 700, color: "#fff", cursor: "default" }} />
          </ScrollReveal>
          <ScrollReveal effect="fade" delay={0.2}>
            <p style={{ color: "#555", fontSize: 11, marginBottom: 16, letterSpacing: "0.1em", textTransform: "uppercase" }}>Glitch</p>
            <GlitchText text="SYSTEM ERROR" style={{ fontSize: 32, fontWeight: 800, color: "#fff" }} />
          </ScrollReveal>
        </div>
      </section>

      {/* Buttons */}
      <section style={{ padding: "120px 24px", background: "#111", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal effect="slide-up">
            <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6366f1", marginBottom: 16 }}>Micro-Interactions</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 64 }}>Buttons that feel alive</h2>
          </ScrollReveal>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center" }}>
            <MagneticButton style={{ padding: "16px 40px", background: "#6366f1", color: "#fff", border: "none", borderRadius: 999, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>Magnetic</MagneticButton>
            <LiquidButton style={{ padding: "16px 40px", background: "#1a1a1a", color: "#fff", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 999, fontSize: 15, cursor: "pointer" }}>Liquid</LiquidButton>
            <ShimmerButton style={{ padding: "16px 40px", background: "#1a1a1a", color: "#fff", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 999, fontSize: 15, cursor: "pointer" }}>Shimmer</ShimmerButton>
            <RippleButton style={{ padding: "16px 40px", background: "#6366f1", color: "#fff", border: "none", borderRadius: 999, fontSize: 15, cursor: "pointer" }}>Ripple</RippleButton>
            <AnimatedToggle label="Toggle" />
          </div>
        </div>
      </section>

      {/* 3D */}
      <section style={{ padding: "120px 24px", background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal effect="slide-up">
            <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6366f1", marginBottom: 16 }}>3D / WebGL</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 64 }}>Depth & dimension</h2>
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div style={{ height: 360, background: "#111", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)" }}>
              <GlowOrb primaryColor="#6366f1" secondaryColor="#8b5cf6" />
            </div>
            <div style={{ height: 360, background: "#111", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)" }}>
              <FloatingGeometry shape="torus" color="#06b6d4" distort={0.3} />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion + Tabs */}
      <section style={{ padding: "120px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <ScrollReveal effect="slide-up">
              <h2 style={{ fontSize: 32, fontWeight: 800, color: "#fff", marginBottom: 40 }}>Accordion</h2>
            </ScrollReveal>
            <AnimatedAccordion items={[
              { title: "What makes this different?", content: "Every component is built for production — spring physics, performance optimised, no generic defaults." },
              { title: "Can I customise the animations?", content: "All components accept props for duration, easing, colors, and direction. Tokens control global brand." },
              { title: "Is it mobile optimised?", content: "3D components auto-detect mobile and simplify. All animations respect prefers-reduced-motion." },
            ]} />
          </div>
          <div>
            <ScrollReveal effect="slide-up" delay={0.1}>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: "#fff", marginBottom: 40 }}>Tabs</h2>
            </ScrollReveal>
            <AnimatedTabs tabs={[
              { label: "Design", content: <p style={{ color: "#a0a0a0", lineHeight: 1.7 }}>Pixel-perfect UI with award-winning design patterns from Awwwards, CSS Design Awards, and FWA.</p> },
              { label: "Motion", content: <p style={{ color: "#a0a0a0", lineHeight: 1.7 }}>Motion, GSAP, and Lenis working in harmony — smooth scroll, scroll-linked animations, spring physics.</p> },
              { label: "3D", content: <p style={{ color: "#a0a0a0", lineHeight: 1.7 }}>React Three Fiber for WebGL — distorted geometry, particle fields, wave planes, and glow orbs.</p> },
            ]} />
          </div>
        </div>
      </section>

      {/* Skeletons */}
      <section style={{ padding: "120px 24px", background: "#111", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal effect="slide-up">
            <h2 style={{ fontSize: 32, fontWeight: 800, color: "#fff", marginBottom: 40 }}>Loading States</h2>
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            <SkeletonCard /><SkeletonCard /><SkeletonCard />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: "120px 24px", maxWidth: 640, margin: "0 auto" }}>
        <ScrollReveal effect="slide-up">
          <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6366f1", marginBottom: 16 }}>Contact</p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 16 }}>Start a project</h2>
          <p style={{ color: "#a0a0a0", marginBottom: 48 }}>Tell us what you are building and we will make it world-class.</p>
        </ScrollReveal>
        <ContactForm />
      </section>
    </>
  )
}
