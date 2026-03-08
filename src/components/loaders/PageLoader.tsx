"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

interface PageLoaderProps {
  onComplete?: () => void
  duration?: number
  accentColor?: string
  background?: string
  label?: string
}

export function PageLoader({
  onComplete,
  duration = 1800,
  accentColor = "#6366f1",
  background = "#000",
  label = "Loading",
}: PageLoaderProps) {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      setProgress(p)
      if (p < 1) requestAnimationFrame(tick)
      else setTimeout(() => { setVisible(false); onComplete?.() }, 300)
    }
    requestAnimationFrame(tick)
  }, [duration, onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background, display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 32,
          }}
        >
          {/* Counter */}
          <motion.div
            style={{ fontSize: "clamp(64px, 12vw, 120px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}
          >
            {Math.round(progress * 100)}
          </motion.div>

          {/* Bar */}
          <div style={{ width: 240, height: 1, background: "rgba(255,255,255,0.1)", position: "relative", overflow: "hidden" }}>
            <motion.div
              style={{ position: "absolute", inset: 0, background: accentColor, transformOrigin: "left", scaleX: progress }}
            />
          </div>

          <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>
            {label}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
