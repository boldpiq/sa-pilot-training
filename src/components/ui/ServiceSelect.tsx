"use client"
import { useState, useRef, useEffect } from "react"

const ACCENT = "#C4541A"
const BORDER = "rgba(255,255,255,0.08)"
const MUTED = "rgba(255,255,255,0.45)"

const options = [
  { value: "web-design", label: "Web Design" },
  { value: "web-development", label: "Web Development" },
  { value: "brand-identity", label: "Brand Identity" },
  { value: "full-package", label: "Full Package" },
  { value: "not-sure", label: "Not sure yet" },
]

export function ServiceSelect({ name = "service" }: { name?: string }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<{ value: string; label: string } | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <div ref={ref} style={{ position: "relative", width: "100%" }}>
      <input type="hidden" name={name} value={selected?.value ?? ""} />
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%",
          padding: "15px 20px",
          background: "rgba(255,255,255,0.04)",
          border: `1px solid ${open ? ACCENT : BORDER}`,
          borderRadius: open ? "12px 12px 0 0" : 12,
          color: selected ? "#fff" : MUTED,
          fontSize: 15,
          fontFamily: "inherit",
          textAlign: "left",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "border-color 0.2s",
          boxSizing: "border-box",
        }}
      >
        {selected?.label ?? "Service you're interested in"}
        <span style={{
          display: "inline-block",
          width: 10,
          height: 6,
          borderLeft: "2px solid",
          borderBottom: "2px solid",
          borderColor: open ? ACCENT : MUTED,
          transform: open ? "rotate(135deg) translate(-2px, -2px)" : "rotate(-45deg)",
          transition: "transform 0.2s, border-color 0.2s",
          flexShrink: 0,
        }} />
      </button>

      {open && (
        <div style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          background: "#0E1220",
          border: `1px solid ${ACCENT}`,
          borderTop: "none",
          borderRadius: "0 0 12px 12px",
          overflow: "hidden",
          zIndex: 50,
        }}>
          {options.map(opt => (
            <button
              key={opt.value}
              type="button"
              onMouseEnter={() => setHovered(opt.value)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => { setSelected(opt); setOpen(false) }}
              style={{
                width: "100%",
                padding: "13px 20px",
                background: hovered === opt.value ? ACCENT : selected?.value === opt.value ? "rgba(196,84,26,0.15)" : "transparent",
                color: hovered === opt.value ? "#fff" : selected?.value === opt.value ? ACCENT : "#fff",
                fontSize: 15,
                fontFamily: "inherit",
                textAlign: "left",
                cursor: "pointer",
                border: "none",
                borderBottom: `1px solid ${BORDER}`,
                transition: "background 0.15s, color 0.15s",
                display: "block",
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
