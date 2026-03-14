"use client"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!mounted) return null

  return createPortal(
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: 96,
        right: 24,
        zIndex: 98,
        width: 52,
        height: 52,
        borderRadius: "50%",
        background: "#C8181A",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        fontWeight: 700,
        boxShadow: "0 4px 24px rgba(200,24,26,0.45)",
        lineHeight: 1,
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1) translateY(0)" : "scale(0.8) translateY(8px)",
        transition: "opacity 0.2s ease, transform 0.2s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      ↑
    </button>,
    document.body
  )
}
