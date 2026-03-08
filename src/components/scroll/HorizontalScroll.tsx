"use client"
import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "motion/react"

interface HorizontalScrollProps {
  children: ReactNode[]
  itemWidth?: number
  gap?: number
  className?: string
}

/**
 * Converts vertical scroll into horizontal motion.
 * Wrap the section in enough height to allow scrolling.
 */
export function HorizontalScroll({ children, itemWidth = 400, gap = 24, className }: HorizontalScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const totalWidth = children.length * (itemWidth + gap) - gap
  const x = useTransform(scrollYProgress, [0, 1], [0, -(totalWidth - window.innerWidth + 96)])

  return (
    <div ref={ref} style={{ height: `${children.length * 100}vh` }} className={className}>
      <div style={{ position: "sticky", top: 0, overflow: "hidden", height: "100vh", display: "flex", alignItems: "center" }}>
        <motion.div style={{ x, display: "flex", gap }}>
          {children.map((child, i) => (
            <div key={i} style={{ width: itemWidth, flexShrink: 0 }}>
              {child}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
