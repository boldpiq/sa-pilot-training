"use client"
import { useRef, useState, type ReactNode } from "react"
import { motion, useScroll, useMotionValueEvent } from "motion/react"

interface StickyScrollItem {
  title: string
  description: string
  content: ReactNode
}

interface StickyScrollProps {
  items: StickyScrollItem[]
  className?: string
}

export function StickyScroll({ items, className }: StickyScrollProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
      {/* Sticky visual panel */}
      <div style={{ position: "sticky", top: "20vh", height: "60vh" }}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            animate={{ opacity: activeIndex === i ? 1 : 0, y: activeIndex === i ? 0 : 16 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ position: "absolute", inset: 0 }}
          >
            {item.content}
          </motion.div>
        ))}
      </div>

      {/* Scrolling text sections */}
      <div>
        {items.map((item, i) => (
          <ScrollSection key={i} index={i} onActive={setActiveIndex}>
            <div style={{ padding: "80px 0", minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <motion.div
                animate={{ opacity: activeIndex === i ? 1 : 0.3 }}
                transition={{ duration: 0.3 }}
              >
                <h3 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>{item.title}</h3>
                <p style={{ color: "#6b7280", lineHeight: 1.8, marginTop: 12, fontSize: 16 }}>{item.description}</p>
              </motion.div>
            </div>
          </ScrollSection>
        ))}
      </div>
    </div>
  )
}

function ScrollSection({ children, index, onActive }: { children: ReactNode; index: number; onActive: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] })
  useMotionValueEvent(scrollYProgress, "change", (v) => { if (v > 0 && v < 1) onActive(index) })
  return <div ref={ref}>{children}</div>
}
