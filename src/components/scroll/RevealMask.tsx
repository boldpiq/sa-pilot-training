"use client"
import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "motion/react"

interface RevealMaskProps {
  children: ReactNode
  direction?: "ltr" | "rtl" | "ttb" | "btt"
  start?: string
  end?: string
  className?: string
}

export function RevealMask({ children, direction = "ltr", start = "start 80%", end = "start 30%", className }: RevealMaskProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: [start as any, end as any] })

  const clips = {
    ltr: useTransform(scrollYProgress, [0, 1], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]),
    rtl: useTransform(scrollYProgress, [0, 1], ["inset(0 0 0 100%)", "inset(0 0 0 0%)"]),
    ttb: useTransform(scrollYProgress, [0, 1], ["inset(0 0 100% 0)", "inset(0 0 0% 0)"]),
    btt: useTransform(scrollYProgress, [0, 1], ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]),
  }

  return (
    <motion.div ref={ref} style={{ clipPath: clips[direction] }} className={className}>
      {children}
    </motion.div>
  )
}
