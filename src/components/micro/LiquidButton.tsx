"use client"
import { useState, type ReactNode } from "react"
import { motion, AnimatePresence } from "motion/react"

interface LiquidButtonProps {
  children: ReactNode
  background?: string
  color?: string
  className?: string
  onClick?: () => void
}

export function LiquidButton({ children, background = "#000", color = "#fff", className, onClick }: LiquidButtonProps) {
  const [hovered, setHovered] = useState(false)
  const [pos, setPos] = useState({ x: 50, y: 50 })

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <button
      className={className}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        padding: "14px 32px",
        border: `2px solid ${background}`,
        borderRadius: 8,
        cursor: "pointer",
        overflow: "hidden",
        background: "transparent",
        fontSize: 15,
        fontWeight: 600,
        isolation: "isolate",
      }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 4, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: "absolute",
              width: "100%",
              paddingBottom: "100%",
              borderRadius: "50%",
              background,
              top: `${pos.y}%`,
              left: `${pos.x}%`,
              transform: "translate(-50%, -50%)",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>
      <motion.span
        animate={{ color: hovered ? color : background }}
        transition={{ duration: 0.2, delay: hovered ? 0.1 : 0 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        {children}
      </motion.span>
    </button>
  )
}
