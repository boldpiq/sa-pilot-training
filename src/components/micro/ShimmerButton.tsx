"use client"
import { type ReactNode } from "react"
import { motion } from "motion/react"

interface ShimmerButtonProps {
  children: ReactNode
  shimmerColor?: string
  shimmerDuration?: number
  borderRadius?: string
  background?: string
  className?: string
  onClick?: () => void
}

export function ShimmerButton({
  children,
  shimmerColor = "rgba(255,255,255,0.25)",
  shimmerDuration = 2,
  borderRadius = "100px",
  background = "#000",
  className,
  onClick,
}: ShimmerButtonProps) {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        position: "relative",
        padding: "14px 28px",
        background,
        borderRadius,
        border: "none",
        cursor: "pointer",
        overflow: "hidden",
        isolation: "isolate",
        color: "#fff",
        fontSize: 15,
        fontWeight: 600,
      }}
    >
      <motion.span
        animate={{ x: ["200%", "-200%"] }}
        transition={{ repeat: Infinity, duration: shimmerDuration, ease: "linear" }}
        style={{
          position: "absolute",
          inset: "-2px",
          background: `linear-gradient(105deg, transparent 40%, ${shimmerColor} 50%, transparent 60%)`,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <span style={{
        position: "absolute",
        inset: 0,
        borderRadius,
        padding: "1px",
        background: "linear-gradient(135deg, rgba(255,255,255,0.2), transparent 50%, rgba(255,255,255,0.1))",
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        pointerEvents: "none",
      }} />
      <span style={{ position: "relative", zIndex: 2 }}>{children}</span>
    </button>
  )
}
