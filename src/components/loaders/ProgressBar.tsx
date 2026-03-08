"use client"
import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, animate } from "motion/react"

interface ProgressBarProps {
  value?: number         // 0-100, controlled
  color?: string
  height?: number
  position?: "top" | "bottom"
  indeterminate?: boolean
}

export function ProgressBar({
  value,
  color = "#6366f1",
  height = 3,
  position = "top",
  indeterminate = false,
}: ProgressBarProps) {
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 80, damping: 20 })

  useEffect(() => {
    if (value !== undefined) mv.set(value)
  }, [value, mv])

  const positionStyle = position === "top" ? { top: 0 } : { bottom: 0 }

  if (indeterminate) {
    return (
      <div style={{ position: "fixed", left: 0, right: 0, height, zIndex: 9998, ...positionStyle }}>
        <motion.div
          style={{ height: "100%", background: color, borderRadius: height }}
          animate={{ x: ["-100%", "100vw"] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    )
  }

  return (
    <div style={{ position: "fixed", left: 0, right: 0, height, zIndex: 9998, background: "rgba(255,255,255,0.1)", ...positionStyle }}>
      <motion.div
        style={{
          height: "100%",
          background: color,
          borderRadius: height,
          scaleX: spring.get() / 100,
          transformOrigin: "left",
        }}
        animate={{ scaleX: (value ?? 0) / 100 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </div>
  )
}
