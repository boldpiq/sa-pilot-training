"use client"
import { type ReactNode } from "react"
import { motion, AnimatePresence, type Transition, type TargetAndTransition } from "motion/react"
import { usePathname } from "next/navigation"

type TransitionVariant = "fade" | "slide-up" | "scale" | "wipe" | "curtain"

interface PageTransitionProps {
  children: ReactNode
  variant?: TransitionVariant
}

const variants: Record<TransitionVariant, { initial: TargetAndTransition; animate: TargetAndTransition; exit: TargetAndTransition; transition: Transition }> = {
  fade: {
    initial:    { opacity: 0 },
    animate:    { opacity: 1 },
    exit:       { opacity: 0 },
    transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] },
  },
  "slide-up": {
    initial:    { opacity: 0, y: 24 },
    animate:    { opacity: 1, y: 0 },
    exit:       { opacity: 0, y: -16 },
    transition: { duration: 0.45, ease: [0.215, 0.61, 0.355, 1] },
  },
  scale: {
    initial:    { opacity: 0, scale: 0.96, filter: "blur(8px)" },
    animate:    { opacity: 1, scale: 1,    filter: "blur(0px)" },
    exit:       { opacity: 0, scale: 1.04, filter: "blur(8px)" },
    transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] },
  },
  wipe: {
    initial:    { clipPath: "inset(0 100% 0 0)" },
    animate:    { clipPath: "inset(0 0% 0 0)" },
    exit:       { clipPath: "inset(0 0 0 100%)" },
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  curtain: {
    initial:    { opacity: 0, y: "4vh" },
    animate:    { opacity: 1, y: 0 },
    exit:       { opacity: 0, y: "-4vh" },
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
}

export function PageTransition({ children, variant = "slide-up" }: PageTransitionProps) {
  const pathname = usePathname()
  const v = variants[variant]

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={v.initial}
        animate={v.animate}
        exit={v.exit}
        transition={v.transition}
        style={{ willChange: "transform, opacity" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
