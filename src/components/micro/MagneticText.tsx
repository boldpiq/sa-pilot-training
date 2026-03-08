"use client"
import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

interface MagneticTextProps {
  text: string
  strength?: number
  className?: string
}

export function MagneticText({ text, strength = 0.4, className }: MagneticTextProps) {
  return (
    <span className={className} style={{ display: "inline-flex", flexWrap: "wrap" }}>
      {text.split("").map((char, i) => (
        <MagneticChar key={i} char={char} strength={strength} />
      ))}
    </span>
  )
}

function MagneticChar({ char, strength }: { char: string; strength: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.1 })
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.1 })

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dist = Math.hypot(e.clientX - cx, e.clientY - cy)
    if (dist < 60) {
      const factor = (1 - dist / 60) * strength * 30
      x.set((e.clientX - cx) * factor / 60)
      y.set((e.clientY - cy) * factor / 60)
    }
  }

  function handleMouseLeave() { x.set(0); y.set(0) }

  return (
    <motion.span
      ref={ref}
      style={{ x: springX, y: springY, display: "inline-block" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  )
}
