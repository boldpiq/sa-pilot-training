"use client"
import { useState, type ReactNode } from "react"
import { AnimatePresence, motion } from "motion/react"

interface Ripple {
  id: number
  x: number
  y: number
  size: number
}

interface RippleButtonProps {
  children: ReactNode
  className?: string
  rippleColor?: string
  onClick?: () => void
}

export function RippleButton({ children, className, rippleColor = "rgba(255,255,255,0.4)", onClick }: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])

  function addRipple(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 2
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    const id = Date.now()
    setRipples((prev) => [...prev, { id, x, y, size }])
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700)
    onClick?.()
  }

  return (
    <button onClick={addRipple} className={`relative overflow-hidden ${className ?? ""}`}>
      {children}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              borderRadius: "50%",
              background: rippleColor,
              pointerEvents: "none",
            }}
          />
        ))}
      </AnimatePresence>
    </button>
  )
}
