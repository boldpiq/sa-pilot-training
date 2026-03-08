"use client"
import { motion } from "motion/react"

interface AnimatedToggleProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  size?: "sm" | "md" | "lg"
  colorOn?: string
  colorOff?: string
}

const sizes = {
  sm: { width: 36, height: 20, knob: 14, offset: 4 },
  md: { width: 48, height: 26, knob: 18, offset: 4 },
  lg: { width: 60, height: 32, knob: 24, offset: 4 },
}

export function AnimatedToggle({
  checked,
  onChange,
  label,
  size = "md",
  colorOn = "#16a34a",
  colorOff = "#d1d5db",
}: AnimatedToggleProps) {
  const s = sizes[size]

  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: "pointer", userSelect: "none" }}>
      <motion.div
        onClick={() => onChange(!checked)}
        animate={{ backgroundColor: checked ? colorOn : colorOff }}
        transition={{ duration: 0.2 }}
        style={{
          width: s.width,
          height: s.height,
          borderRadius: s.height,
          position: "relative",
          display: "flex",
          alignItems: "center",
          padding: s.offset,
          cursor: "pointer",
        }}
      >
        <motion.div
          animate={{ x: checked ? s.width - s.knob - s.offset * 2 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            width: s.knob,
            height: s.knob,
            borderRadius: "50%",
            background: "#fff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          }}
        />
      </motion.div>
      {label && <span style={{ fontSize: 14 }}>{label}</span>}
    </label>
  )
}
