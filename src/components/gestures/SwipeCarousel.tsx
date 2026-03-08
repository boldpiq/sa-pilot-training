"use client"
import { useState, type ReactNode } from "react"
import { motion, AnimatePresence } from "motion/react"

interface SwipeCarouselProps {
  items: ReactNode[]
  className?: string
}

export function SwipeCarousel({ items, className }: SwipeCarouselProps) {
  const [[current, dir], setPage] = useState([0, 0])

  const paginate = (newDir: number) => {
    const next = (current + newDir + items.length) % items.length
    setPage([next, newDir])
  }

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d < 0 ? "100%" : "-100%", opacity: 0 }),
  }

  return (
    <div className={className} style={{ position: "relative", overflow: "hidden" }}>
      <AnimatePresence initial={false} custom={dir} mode="popLayout">
        <motion.div
          key={current}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 300, damping: 35 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (Math.abs(info.offset.x) > 80) paginate(info.offset.x < 0 ? 1 : -1)
          }}
          style={{ width: "100%", cursor: "grab" }}
          whileDrag={{ cursor: "grabbing" }}
        >
          {items[current]}
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 20 }}>
        {items.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setPage([i, i > current ? 1 : -1])}
            animate={{ width: i === current ? 24 : 8, opacity: i === current ? 1 : 0.4 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{ height: 8, borderRadius: 4, background: "currentColor", border: "none", cursor: "pointer", padding: 0 }}
          />
        ))}
      </div>
    </div>
  )
}
