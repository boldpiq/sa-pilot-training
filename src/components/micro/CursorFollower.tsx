"use client"
import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

interface CursorFollowerProps {
  size?: number
  color?: string
  blend?: boolean
}

export function CursorFollower({ size = 24, color = "#000", blend = true }: CursorFollowerProps) {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 300, damping: 25 })
  const springY = useSpring(y, { stiffness: 300, damping: 25 })

  useEffect(() => {
    function move(e: MouseEvent) {
      x.set(e.clientX - size / 2)
      y.set(e.clientY - size / 2)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [x, y, size])

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: springX,
        y: springY,
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        pointerEvents: "none",
        zIndex: 99999,
        mixBlendMode: blend ? "difference" : "normal",
      }}
    />
  )
}
