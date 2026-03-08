"use client"
import { motion, type Variants } from "motion/react"

interface TextRevealProps {
  text: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
  mode?: "words" | "chars" | "lines"
  delay?: number
  staggerDelay?: number
  className?: string
  once?: boolean
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: "100%", rotateX: -90 },
  visible: {
    opacity: 1,
    y: "0%",
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

export function TextReveal({
  text,
  as: Tag = "p",
  mode = "words",
  delay = 0,
  staggerDelay = 0.04,
  className,
  once = true,
}: TextRevealProps) {
  const tokens = mode === "chars" ? text.split("") : text.split(" ")

  return (
    <Tag className={className} style={{ overflow: "hidden" }}>
      <motion.span
        style={{ display: "inline-flex", flexWrap: "wrap", gap: mode === "chars" ? 0 : "0.25em", perspective: 1000 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        transition={{ staggerChildren: staggerDelay, delayChildren: delay }}
      >
        {tokens.map((token, i) => (
          <span key={i} style={{ overflow: "hidden", display: "inline-block" }}>
            <motion.span variants={wordVariants} style={{ display: "inline-block" }}>
              {token}
              {mode === "words" && " "}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
