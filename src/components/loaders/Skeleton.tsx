"use client"
import { motion } from "motion/react"

interface SkeletonProps {
  width?: string | number
  height?: string | number
  radius?: number
  className?: string
}

export function Skeleton({ width = "100%", height = 20, radius = 6, className }: SkeletonProps) {
  return (
    <div
      className={className}
      style={{ width, height, borderRadius: radius, overflow: "hidden", background: "rgba(255,255,255,0.05)" }}
    >
      <motion.div
        style={{
          width: "60%",
          height: "100%",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
        }}
        animate={{ x: ["-100%", "280%"] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}

// Preset card skeleton
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Skeleton height={200} radius={12} />
      <Skeleton width="70%" height={18} />
      <Skeleton width="45%" height={14} />
    </div>
  )
}
