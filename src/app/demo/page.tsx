"use client"
import { useState } from "react"
import { FadeIn } from "@/components/animations/FadeIn"
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup"
import { TextReveal } from "@/components/animations/TextReveal"
import { CountUp } from "@/components/animations/CountUp"
import { ParallaxSection } from "@/components/animations/ParallaxSection"
import { ScrollProgress } from "@/components/animations/ScrollProgress"
import { MagneticButton } from "@/components/micro/MagneticButton"
import { TiltCard } from "@/components/micro/TiltCard"
import { RippleButton } from "@/components/micro/RippleButton"
import { AnimatedToggle } from "@/components/micro/AnimatedToggle"
import { HoverCard } from "@/components/micro/HoverCard"
import { CursorFollower } from "@/components/micro/CursorFollower"
import { Skeleton, SkeletonCard } from "@/components/loaders/SkeletonLoader"
import { Spinner, PulsingDots, ProgressBar } from "@/components/loaders/Spinner"
import { AnimatedAccordion } from "@/components/layout/AnimatedAccordion"
import { AnimatedTabs } from "@/components/layout/AnimatedTabs"
import { DraggableCard } from "@/components/gestures/DraggableCard"

const faqItems = [
  { id: "1", question: "What is Motion?", answer: "Motion is the successor to Framer Motion — an animation library for React with a tiny 8KB core, native performance, and a declarative API." },
  { id: "2", question: "When should I use GSAP instead?", answer: "Use GSAP for complex timeline sequences, SVG path animations, ScrollTrigger scroll-driven effects, and anything requiring precise frame-by-frame control." },
  { id: "3", question: "Are these production-ready?", answer: "Yes. Every component in this library is built to production standards with accessibility, performance, and edge cases considered." },
]

const tabContent = [
  { id: "motion", label: "Motion", content: <p style={{ color: "#6b7280", lineHeight: 1.7 }}>Motion handles component-level animations, gestures, layout transitions, and AnimatePresence for mount/unmount. Best for React-integrated UI animation.</p> },
  { id: "gsap", label: "GSAP", content: <p style={{ color: "#6b7280", lineHeight: 1.7 }}>GSAP excels at complex timelines, ScrollTrigger, SVG morphing, and scenarios requiring precise orchestration across multiple elements.</p> },
  { id: "css", label: "CSS", content: <p style={{ color: "#6b7280", lineHeight: 1.7 }}>Native CSS transitions and animations for simple hover states, color changes, and repetitive effects. Zero overhead, best performance.</p> },
]

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <FadeIn direction="up">
      <section style={{ marginBottom: 80 }}>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 6 }}>{title}</h2>
          {description && <p style={{ color: "#6b7280", fontSize: 15 }}>{description}</p>}
        </div>
        {children}
      </section>
    </FadeIn>
  )
}

function CodeTag({ children }: { children: string }) {
  return (
    <code style={{ background: "#f3f4f6", padding: "2px 8px", borderRadius: 4, fontSize: 13, fontFamily: "monospace" }}>
      {children}
    </code>
  )
}

export default function DemoPage() {
  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(true)
  const [progress, setProgress] = useState(60)

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <ScrollProgress color="#000" height={3} />
      <CursorFollower size={20} color="#fff" blend />

      {/* Hero */}
      <div style={{ background: "#000", color: "#fff", padding: "120px 48px", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: 800 }}>
          <FadeIn delay={0.1}>
            <CodeTag>animation-library</CodeTag>
          </FadeIn>
          <div style={{ marginTop: 24 }}>
            <TextReveal
              text="Every animation pattern you will ever need."
              as="h1"
              mode="words"
              delay={0.2}
              staggerDelay={0.05}
              className=""
              style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.1, margin: 0 } as React.CSSProperties}
            />
          </div>
          <FadeIn delay={0.8}>
            <p style={{ color: "#9ca3af", fontSize: 20, marginTop: 24, lineHeight: 1.6 }}>
              Motion + GSAP. Production-grade components. Organized by use case.
            </p>
          </FadeIn>
          <FadeIn delay={1}>
            <div style={{ marginTop: 40, display: "flex", gap: 16 }}>
              <MagneticButton>
                <RippleButton
                  rippleColor="rgba(0,0,0,0.2)"
                  style={{ background: "#fff", color: "#000", padding: "14px 28px", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer", border: "none" } as React.CSSProperties}
                >
                  View Components
                </RippleButton>
              </MagneticButton>
              <MagneticButton>
                <button style={{ background: "transparent", color: "#fff", padding: "14px 28px", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer", border: "1px solid #333" }}>
                  Documentation
                </button>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 48px" }}>

        {/* Fade In Variants */}
        <Section title="Fade In" description="Scroll-triggered entrance animations with directional control.">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {(["up", "down", "left", "right"] as const).map((dir, i) => (
              <FadeIn key={dir} direction={dir} delay={i * 0.1}>
                <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 12, padding: 20, textAlign: "center" }}>
                  <CodeTag>{`direction="${dir}"`}</CodeTag>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* Stagger */}
        <Section title="Stagger Group" description="Orchestrated staggered entrance of child elements.">
          <StaggerGroup staggerDelay={0.08} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 } as React.CSSProperties}>
            {["Design", "Motion", "Gesture", "Layout"].map((item) => (
              <StaggerItem key={item}>
                <div style={{ background: "#000", color: "#fff", borderRadius: 12, padding: "20px 16px", textAlign: "center", fontWeight: 600 }}>
                  {item}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Section>

        {/* Text Reveal */}
        <Section title="Text Reveal" description="Word-by-word and character-by-character text animations.">
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <TextReveal text="Words reveal one by one." as="h3" mode="words" staggerDelay={0.08} style={{ fontSize: 32, fontWeight: 700, margin: 0 } as React.CSSProperties} />
            <TextReveal text="Characters come alive." as="h3" mode="chars" staggerDelay={0.03} style={{ fontSize: 32, fontWeight: 700, margin: 0 } as React.CSSProperties} />
          </div>
        </Section>

        {/* Count Up */}
        <Section title="Count Up" description="Animated number counters triggered on scroll.">
          <StaggerGroup staggerDelay={0.1} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 } as React.CSSProperties}>
            {[
              { to: 98, suffix: "%", label: "Satisfaction" },
              { to: 2400, suffix: "+", label: "Components" },
              { to: 4.9, decimals: 1, label: "Star Rating" },
              { to: 50, prefix: "$", suffix: "M", label: "Revenue Driven" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div style={{ textAlign: "center" }}>
                  <CountUp {...item} className="" style={{ fontSize: 48, fontWeight: 800, display: "block" } as React.CSSProperties} />
                  <span style={{ color: "#6b7280", fontSize: 14, marginTop: 4, display: "block" }}>{item.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Section>

        {/* Hover Card */}
        <Section title="Hover Card" description="Lift-on-hover effect with spring physics.">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {["Minimal", "Standard", "Dramatic"].map((label, i) => (
              <HoverCard key={label} lift={[2, 6, 12][i]} scale={[1.01, 1.02, 1.04][i]}>
                <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 16, padding: 28, cursor: "pointer" }}>
                  <div style={{ fontWeight: 600, marginBottom: 8 }}>{label}</div>
                  <div style={{ color: "#9ca3af", fontSize: 14 }}>lift={[2, 6, 12][i]}px</div>
                </div>
              </HoverCard>
            ))}
          </div>
        </Section>

        {/* Tilt Card */}
        <Section title="Tilt Card" description="3D perspective tilt with glare effect on mouse movement.">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            <TiltCard maxTilt={15} glare>
              <div style={{ background: "#000", color: "#fff", borderRadius: 16, padding: 40, cursor: "pointer" }}>
                <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>With Glare</div>
                <div style={{ color: "#9ca3af" }}>Move your cursor over this card</div>
              </div>
            </TiltCard>
            <TiltCard maxTilt={8} glare={false}>
              <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 16, padding: 40, cursor: "pointer" }}>
                <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>No Glare</div>
                <div style={{ color: "#6b7280" }}>Subtle tilt effect only</div>
              </div>
            </TiltCard>
          </div>
        </Section>

        {/* Magnetic Button */}
        <Section title="Magnetic Button" description="Button follows cursor with spring physics.">
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              { label: "Weak Magnetic", strength: 0.15 },
              { label: "Standard", strength: 0.3 },
              { label: "Strong Pull", strength: 0.5 },
            ].map(({ label, strength }) => (
              <MagneticButton key={label} strength={strength}>
                <button style={{ background: "#000", color: "#fff", padding: "14px 28px", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer", border: "none" }}>
                  {label}
                </button>
              </MagneticButton>
            ))}
          </div>
        </Section>

        {/* Ripple Button */}
        <Section title="Ripple Button" description="Material-style ripple effect on click.">
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <RippleButton rippleColor="rgba(255,255,255,0.4)" style={{ background: "#000", color: "#fff", padding: "14px 28px", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer", border: "none" } as React.CSSProperties}>
              Dark Ripple
            </RippleButton>
            <RippleButton rippleColor="rgba(0,0,0,0.1)" style={{ background: "#f9fafb", color: "#000", padding: "14px 28px", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer", border: "1px solid #e5e7eb" } as React.CSSProperties}>
              Light Ripple
            </RippleButton>
          </div>
        </Section>

        {/* Toggle */}
        <Section title="Animated Toggle" description="Spring-physics toggle switch with custom colors and sizes.">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <AnimatedToggle checked={toggle1} onChange={setToggle1} label="Enable notifications" size="sm" />
            <AnimatedToggle checked={toggle2} onChange={setToggle2} label="Dark mode" size="md" colorOn="#6366f1" />
            <AnimatedToggle checked={toggle1} onChange={setToggle1} label="Large toggle" size="lg" colorOn="#dc2626" />
          </div>
        </Section>

        {/* Loaders */}
        <Section title="Loaders & Progress" description="Skeleton screens, spinners, progress bars, and loading dots.">
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <div>
              <p style={{ fontWeight: 500, marginBottom: 16, fontSize: 14, color: "#6b7280" }}>Skeleton Card</p>
              <div style={{ maxWidth: 280 }}>
                <SkeletonCard />
              </div>
            </div>
            <div style={{ display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap" }}>
              <div>
                <p style={{ fontWeight: 500, marginBottom: 12, fontSize: 14, color: "#6b7280" }}>Spinners</p>
                <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                  <Spinner size={24} thickness={2} />
                  <Spinner size={36} thickness={3} />
                  <Spinner size={48} thickness={4} color="#6366f1" />
                </div>
              </div>
              <div>
                <p style={{ fontWeight: 500, marginBottom: 12, fontSize: 14, color: "#6b7280" }}>Pulsing Dots</p>
                <PulsingDots size={10} />
              </div>
            </div>
            <div>
              <p style={{ fontWeight: 500, marginBottom: 12, fontSize: 14, color: "#6b7280" }}>Progress Bar — {progress}%</p>
              <ProgressBar progress={progress} height={6} color="#000" style={{ maxWidth: 400 } as React.CSSProperties} />
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <button onClick={() => setProgress((p) => Math.max(0, p - 10))} style={{ padding: "6px 12px", borderRadius: 6, border: "1px solid #e5e7eb", cursor: "pointer", background: "#fff" }}>-10</button>
                <button onClick={() => setProgress((p) => Math.min(100, p + 10))} style={{ padding: "6px 12px", borderRadius: 6, border: "1px solid #e5e7eb", cursor: "pointer", background: "#fff" }}>+10</button>
              </div>
            </div>
          </div>
        </Section>

        {/* Accordion */}
        <Section title="Animated Accordion" description="Smooth height animation with spring physics on open/close.">
          <AnimatedAccordion items={faqItems} />
        </Section>

        {/* Tabs */}
        <Section title="Animated Tabs" description="Layout-animated indicator with directional content transitions.">
          <AnimatedTabs tabs={tabContent} />
        </Section>

        {/* Parallax */}
        <Section title="Parallax Section" description="Scroll-driven depth effect — content moves at different speeds.">
          <div style={{ height: 300, background: "#f9fafb", borderRadius: 16, overflow: "hidden", border: "1px solid #e5e7eb" }}>
            <ParallaxSection speed={-0.2}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 400, fontSize: 48, fontWeight: 800 }}>
                Scroll ↓
              </div>
            </ParallaxSection>
          </div>
        </Section>

        {/* Draggable */}
        <Section title="Draggable Card" description="Drag with spring bounce physics and constraints.">
          <div style={{ height: 300, background: "#f9fafb", borderRadius: 16, border: "1px solid #e5e7eb", overflow: "hidden" }}>
            <DraggableCard constrainToParent>
              <div style={{ background: "#000", color: "#fff", borderRadius: 12, padding: "20px 28px", cursor: "grab", userSelect: "none" }}>
                Drag me anywhere in this box
              </div>
            </DraggableCard>
          </div>
        </Section>

      </div>
    </div>
  )
}
