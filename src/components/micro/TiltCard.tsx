"use client"
import { useRef, type ReactNode } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"

interface TiltCardProps {
  children: ReactNode
  maxTilt?: number
  glare?: boolean
  className?: string
}

export function TiltCard({ children, maxTilt = 15, glare = true, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), { stiffness: 200, damping: 20 })
  const glareX = useTransform(x, [-0.5, 0.5], ["0%", "100%"])
  const glareY = useTransform(y, [-0.5, 0.5], ["0%", "100%"])
  const glareOpacity = useMotionValue(0)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
    glareOpacity.set(0.15)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
    glareOpacity.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1000, position: "relative" }}
      className={className}
    >
      {children}
      {glare && (
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.4), transparent 60%)`,
            opacity: glareOpacity,
            pointerEvents: "none",
          }}
        />
      )}
    </motion.div>
  )
}
