"use client"
import { useRef, type ReactNode } from "react"
import { motion, useMotionValue, useTransform, animate } from "motion/react"

interface DragToRevealProps {
  front: ReactNode
  back: ReactNode
  direction?: "left" | "right" | "up" | "down"
  threshold?: number
  className?: string
}

export function DragToReveal({ front, back, direction = "left", threshold = 120, className }: DragToRevealProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const isHorizontal = direction === "left" || direction === "right"
  const mv = isHorizontal ? x : y

  const opacity = useTransform(mv, direction === "left" || direction === "up"
    ? [-threshold, 0]
    : [0, threshold],
    [1, 0]
  )

  const handleDragEnd = () => {
    const val = mv.get()
    const triggered = direction === "left" || direction === "up" ? val < -threshold / 2 : val > threshold / 2
    animate(mv, triggered ? (direction === "left" || direction === "up" ? -threshold * 2 : threshold * 2) : 0, {
      type: "spring", stiffness: 300, damping: 30,
    })
  }

  return (
    <div className={className} style={{ position: "relative", overflow: "hidden" }}>
      {/* Back layer */}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {back}
      </div>
      {/* Front layer (draggable) */}
      <motion.div
        drag={isHorizontal ? "x" : "y"}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.5}
        onDragEnd={handleDragEnd}
        style={{ x, y, opacity, cursor: "grab" }}
        whileDrag={{ cursor: "grabbing" }}
      >
        {front}
      </motion.div>
    </div>
  )
}
