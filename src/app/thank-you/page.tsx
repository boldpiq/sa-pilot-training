"use client"
import { useEffect, useRef, useState } from "react"
import { motion, useAnimationFrame } from "motion/react"
import Link from "next/link"
import { Footer } from "@/components/layout/Footer"

const BG = "#FFFFFF"
const ACCENT = "#C8181A"
const MUTED = "rgba(6,12,24,0.5)"
const BORDER = "rgba(6,12,24,0.1)"

// ── Confetti particle ──────────────────────────────────────────────────────
interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  rotation: number
  rotationSpeed: number
  color: string
  size: number
  shape: "rect" | "circle" | "star"
  opacity: number
  life: number
  maxLife: number
}

const COLORS = [
  "#C8181A", "#D41A1A", "#E82020",
  "#FF4444", "#FF6666", "#FF8888",
  "#FFFFFF", "rgba(255,255,255,0.7)",
  "#CC1C1C", "#AA1010",
]

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function createParticle(id: number, originX: number, originY: number): Particle {
  const angle = randomBetween(0, Math.PI * 2)
  const speed = randomBetween(4, 18)
  const maxLife = randomBetween(80, 160)
  return {
    id,
    x: originX,
    y: originY,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed - randomBetween(2, 8),
    rotation: randomBetween(0, 360),
    rotationSpeed: randomBetween(-8, 8),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    size: randomBetween(5, 14),
    shape: (["rect", "circle", "star"] as const)[Math.floor(Math.random() * 3)],
    opacity: 1,
    life: 0,
    maxLife,
  }
}

function ConfettiCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const counterRef = useRef(0)
  const burstDoneRef = useRef(false)
  const frameRef = useRef(0)

  // Burst on mount
  useEffect(() => {
    if (burstDoneRef.current) return
    burstDoneRef.current = true
    const canvas = canvasRef.current
    if (!canvas) return
    const cx = canvas.width / 2
    const cy = canvas.height * 0.35

    // Initial big burst
    for (let i = 0; i < 120; i++) {
      particlesRef.current.push(createParticle(counterRef.current++, cx, cy))
    }

    // Secondary burst after 400ms
    setTimeout(() => {
      if (!canvasRef.current) return
      const c2x = canvasRef.current.width / 2
      const c2y = canvasRef.current.height * 0.35
      for (let i = 0; i < 80; i++) {
        particlesRef.current.push(createParticle(counterRef.current++, c2x + randomBetween(-80, 80), c2y))
      }
    }, 400)
  }, [])

  useAnimationFrame(() => {
    frameRef.current++
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Resize canvas to match display size
    if (canvas.width !== canvas.offsetWidth || canvas.height !== canvas.offsetHeight) {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particlesRef.current = particlesRef.current.filter(p => p.life < p.maxLife)

    for (const p of particlesRef.current) {
      p.life++
      p.x += p.vx
      p.y += p.vy
      p.vy += 0.4 // gravity
      p.vx *= 0.98 // drag
      p.rotation += p.rotationSpeed
      const progress = p.life / p.maxLife
      p.opacity = progress < 0.7 ? 1 : 1 - (progress - 0.7) / 0.3

      ctx.save()
      ctx.globalAlpha = p.opacity
      ctx.translate(p.x, p.y)
      ctx.rotate((p.rotation * Math.PI) / 180)
      ctx.fillStyle = p.color

      if (p.shape === "circle") {
        ctx.beginPath()
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
        ctx.fill()
      } else if (p.shape === "rect") {
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2)
      } else {
        // star
        ctx.beginPath()
        for (let i = 0; i < 5; i++) {
          const outerAngle = (i * 4 * Math.PI) / 5 - Math.PI / 2
          const innerAngle = outerAngle + (2 * Math.PI) / 10
          if (i === 0) ctx.moveTo(Math.cos(outerAngle) * p.size / 2, Math.sin(outerAngle) * p.size / 2)
          else ctx.lineTo(Math.cos(outerAngle) * p.size / 2, Math.sin(outerAngle) * p.size / 2)
          ctx.lineTo(Math.cos(innerAngle) * p.size / 4, Math.sin(innerAngle) * p.size / 4)
        }
        ctx.closePath()
        ctx.fill()
      }
      ctx.restore()
    }
  })

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 10,
      }}
    />
  )
}

// ── Floating sparkle orbs ─────────────────────────────────────────────────
function FloatingOrbs() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {[
        { x: "20%", y: "25%", size: 180, delay: 0 },
        { x: "75%", y: "20%", size: 120, delay: 0.8 },
        { x: "60%", y: "70%", size: 200, delay: 0.4 },
        { x: "15%", y: "65%", size: 140, delay: 1.2 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.15, 0.08], scale: [0, 1.2, 1] }}
          transition={{ duration: 1.5, delay: orb.delay, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  )
}

// ── Sparkle icons ─────────────────────────────────────────────────────────
function Sparkles() {
  const sparkles = [
    { x: "12%", y: "30%", scale: 0.8, delay: 0.6 },
    { x: "88%", y: "25%", scale: 1, delay: 1.0 },
    { x: "82%", y: "60%", scale: 0.7, delay: 0.3 },
    { x: "10%", y: "55%", scale: 0.9, delay: 1.4 },
    { x: "50%", y: "85%", scale: 0.6, delay: 0.8 },
  ]
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {sparkles.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ opacity: [0, 1, 0.6, 1, 0], scale: [0, s.scale, s.scale * 0.8, s.scale, 0], rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 3, delay: s.delay, repeat: Infinity, repeatDelay: 2 }}
          style={{
            position: "absolute",
            left: s.x,
            top: s.y,
            fontSize: 24,
            color: ACCENT,
          }}
        >
          ✦
        </motion.div>
      ))}
    </div>
  )
}

// ── Ring burst ────────────────────────────────────────────────────────────
function RingBurst() {
  return (
    <div style={{ position: "absolute", top: "35%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none" }}>
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          initial={{ scale: 0.5, opacity: 0.8 }}
          animate={{ scale: [0.5, 3 + i], opacity: [0.6, 0] }}
          transition={{ duration: 1.2 + i * 0.3, delay: i * 0.2, ease: "easeOut" }}
          style={{
            position: "absolute",
            width: 80,
            height: 80,
            borderRadius: "50%",
            border: `2px solid ${ACCENT}`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  )
}

export default function ThankYouPage() {
  const [redirectCountdown, setRedirectCountdown] = useState(15)

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/"
    }, 15000)

    const countdown = setInterval(() => {
      setRedirectCountdown(c => {
        if (c <= 1) { clearInterval(countdown); return 0 }
        return c - 1
      })
    }, 1000)

    return () => { clearTimeout(timer); clearInterval(countdown) }
  }, [])

  return (
    <main style={{ background: BG, color: "#060C18", minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>

      {/* Confetti canvas — full viewport */}
      <ConfettiCanvas />

      {/* Background layers */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `radial-gradient(ellipse 70% 60% at 50% 40%, rgba(200,24,26,0.16) 0%, transparent 65%)` }} />
      <FloatingOrbs />
      <Sparkles />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "clamp(100px, 14vw, 160px) clamp(20px, 4vw, 48px) 80px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <RingBurst />

        {/* Check icon with pulse ring */}
        <div style={{ position: "relative", marginBottom: 48 }}>
          <motion.div
            animate={{ scale: [1, 1.12, 1], boxShadow: [`0 0 40px rgba(200,24,26,0.4)`, `0 0 80px rgba(200,24,26,0.7)`, `0 0 40px rgba(200,24,26,0.4)`] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              width: 88,
              height: 88,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${ACCENT}, #D4601F)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
              position: "relative",
              zIndex: 1,
            }}
          >
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3, type: "spring", stiffness: 260 }}
            >
              ✓
            </motion.span>
          </motion.div>

          {/* Pulse rings */}
          {[0, 1].map(i => (
            <motion.div
              key={i}
              animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
              transition={{ duration: 2, delay: i * 1, repeat: Infinity, ease: "easeOut" }}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: `2px solid ${ACCENT}`,
              }}
            />
          ))}
        </div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.33, 1, 0.68, 1] }}
        >
          <h1 style={{ fontSize: "clamp(44px, 8vw, 110px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.88, marginBottom: 8 }}>
            You&rsquo;re
          </h1>
          <motion.h1
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 200 }}
            style={{ fontSize: "clamp(44px, 8vw, 110px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.88, color: ACCENT, marginBottom: 32 }}
          >
            booked!
          </motion.h1>
        </motion.div>

        {/* Excitement badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, type: "spring", stiffness: 240 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 20px",
            borderRadius: 100,
            background: `rgba(200,24,26,0.15)`,
            border: `1px solid rgba(200,24,26,0.35)`,
            marginBottom: 28,
            fontSize: 13,
            fontWeight: 600,
            color: ACCENT,
            letterSpacing: "0.04em",
          }}
        >
          <motion.span
            animate={{ rotate: [0, 15, -15, 15, 0] }}
            transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            style={{ fontSize: 18 }}
          >
            🎉
          </motion.span>
          Appointment confirmed — we can&apos;t wait to meet you!
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{ fontSize: "clamp(16px, 1.4vw, 20px)", color: MUTED, maxWidth: 500, lineHeight: 1.65, marginBottom: 14 }}
        >
          Your appointment is confirmed. Check your inbox for a calendar invite and everything you need to prepare.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ fontSize: 14, color: MUTED, marginBottom: 52 }}
        >
          We look forward to speaking with you.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", marginBottom: 48 }}
        >
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05, background: "#D4601F", boxShadow: `0 8px 40px rgba(200,24,26,0.5)` }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "16px 42px",
                background: ACCENT,
                color: "#fff",
                borderRadius: 100,
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                boxShadow: `0 4px 24px rgba(200,24,26,0.35)`,
                transition: "box-shadow 0.3s ease",
              }}
            >
              Back to Home
            </motion.div>
          </Link>
          <Link href="/services">
            <motion.div
              whileHover={{ borderColor: "rgba(6,12,24,0.3)", background: "rgba(6,12,24,0.05)" }}
              style={{
                padding: "16px 42px",
                border: `1px solid ${BORDER}`,
                color: "#060C18",
                borderRadius: 100,
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              Explore Services
            </motion.div>
          </Link>
        </motion.div>

        {/* Countdown */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2.5 }}
          style={{ fontSize: 12, color: MUTED }}
        >
          Redirecting you home in {redirectCountdown}s&hellip;
        </motion.p>
      </div>

      <Footer />
    </main>
  )
}
