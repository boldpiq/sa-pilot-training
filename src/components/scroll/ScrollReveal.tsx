"use client"
import { useRef, type ReactNode } from "react"
import { motion, useInView } from "motion/react"

type Effect = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "clip-up" | "clip-down" | "scale" | "blur" | "rotate"

interface ScrollRevealProps {
  children: ReactNode
  effect?: Effect
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
  threshold?: number
  className?: string
}

function getVariants(effect: Effect, distance: number) {
  const base = { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as number[] }
  const map: Record<Effect, { hidden: object; visible: object; transition?: object }> = {
    "fade-up":    { hidden: { opacity: 0, y: distance },    visible: { opacity: 1, y: 0 } },
    "fade-down":  { hidden: { opacity: 0, y: -distance },   visible: { opacity: 1, y: 0 } },
    "fade-left":  { hidden: { opacity: 0, x: distance },    visible: { opacity: 1, x: 0 } },
    "fade-right": { hidden: { opacity: 0, x: -distance },   visible: { opacity: 1, x: 0 } },
    "clip-up":    { hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }, visible: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 } },
    "clip-down":  { hidden: { clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }, visible: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 } },
    "scale":      { hidden: { opacity: 0, scale: 0.85 },    visible: { opacity: 1, scale: 1 } },
    "blur":       { hidden: { opacity: 0, filter: "blur(16px)" }, visible: { opacity: 1, filter: "blur(0px)" } },
    "rotate":     { hidden: { opacity: 0, rotate: -6, y: distance }, visible: { opacity: 1, rotate: 0, y: 0 } },
  }
  const { hidden, visible } = map[effect]
  return {
    hidden,
    visible: { ...visible, transition: { ...base } },
  }
}

export function ScrollReveal({
  children,
  effect = "fade-up",
  delay = 0,
  duration = 0.7,
  distance = 32,
  once = true,
  threshold = 0.1,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, amount: threshold })
  const variants = getVariants(effect, distance)

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
