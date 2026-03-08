"use client"
import { useState, type ReactNode } from "react"
import { motion, AnimatePresence } from "motion/react"

interface Tab {
  id: string
  label: string
  content: ReactNode
}

interface AnimatedTabsProps {
  tabs: Tab[]
  className?: string
}

export function AnimatedTabs({ tabs, className }: AnimatedTabsProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id)
  const [direction, setDirection] = useState(1)

  function handleSelect(id: string) {
    const currentIndex = tabs.findIndex((t) => t.id === activeId)
    const nextIndex = tabs.findIndex((t) => t.id === id)
    setDirection(nextIndex > currentIndex ? 1 : -1)
    setActiveId(id)
  }

  return (
    <div className={className}>
      <div style={{ display: "flex", gap: 4, background: "#f3f4f6", padding: 4, borderRadius: 12, width: "fit-content" }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleSelect(tab.id)}
            style={{
              position: "relative",
              padding: "8px 20px",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 500,
              color: activeId === tab.id ? "#000" : "#6b7280",
              borderRadius: 8,
              zIndex: 1,
            }}
          >
            {activeId === tab.id && (
              <motion.div
                layoutId="tab-indicator"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#fff",
                  borderRadius: 8,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  zIndex: -1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 20, overflow: "hidden" }}>
        <AnimatePresence mode="wait" custom={direction}>
          {tabs.map((tab) =>
            tab.id === activeId ? (
              <motion.div
                key={tab.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -20 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                {tab.content}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
