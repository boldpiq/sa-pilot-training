"use client"
import { useRef, useEffect, type ReactNode } from "react"
import { useScroll, useTransform, motion } from "motion/react"

interface TimelineItem {
  id: string
  label: string
  description: string
}

interface ScrollTimelineProps {
  items: TimelineItem[]
  className?: string
}

/**
 * Vertical timeline that reveals items as you scroll.
 * Each item fades and slides in on its scroll threshold.
 */
export function ScrollTimeline({ items, className }: ScrollTimelineProps) {
  return (
    <div className={className} style={{ position: "relative", paddingLeft: 48 }}>
      {/* Spine line */}
      <div style={{
        position: "absolute",
        left: 16,
        top: 0,
        bottom: 0,
        width: 2,
        background: "#e5e7eb",
      }} />

      {items.map((item, i) => (
        <TimelineEntry key={item.id} item={item} index={i} />
      ))}
    </div>
  )
}

function TimelineEntry({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "start 40%"] })
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const x = useTransform(scrollYProgress, [0, 1], [20, 0])
  const dotScale = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <div ref={ref} style={{ position: "relative", paddingBottom: 48 }}>
      {/* Dot */}
      <motion.div
        style={{
          position: "absolute",
          left: -40,
          top: 4,
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: "#000",
          scale: dotScale,
          transformOrigin: "center",
        }}
      />
      {/* Content */}
      <motion.div style={{ opacity, x }}>
        <div style={{ fontSize: 13, color: "#9ca3af", marginBottom: 4, fontWeight: 500 }}>
          Step {index + 1}
        </div>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, margin: 0 }}>{item.label}</h3>
        <p style={{ color: "#6b7280", lineHeight: 1.7, marginTop: 8 }}>{item.description}</p>
      </motion.div>
    </div>
  )
}
