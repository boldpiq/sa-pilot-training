"use client"
import { useState } from "react"

interface GlitchTextProps {
  text: string
  trigger?: "hover" | "always"
  intensity?: number
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export function GlitchText({ text, trigger = "hover", intensity = 1, className, as: Tag = "span" }: GlitchTextProps) {
  const [active, setActive] = useState(trigger === "always")
  const d = 300 * intensity

  return (
    <>
      <style>{`
        .glitch { position: relative; display: inline-block; }
        .glitch::before, .glitch::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .glitch-on::before {
          color: #ff0080;
          animation: glitch-a ${d}ms steps(1) infinite;
        }
        .glitch-on::after {
          color: #00ffff;
          animation: glitch-b ${d}ms steps(1) infinite;
        }
        @keyframes glitch-a {
          0%,100%{clip-path:inset(0 0 92% 0);transform:translate(-${2*intensity}px)}
          25%{clip-path:inset(35% 0 45% 0);transform:translate(${2*intensity}px)}
          50%{clip-path:inset(65% 0 18% 0);transform:translate(-${3*intensity}px)}
          75%{clip-path:inset(12% 0 72% 0);transform:translate(${2*intensity}px)}
        }
        @keyframes glitch-b {
          0%,100%{clip-path:inset(72% 0 8% 0);transform:translate(${2*intensity}px)}
          25%{clip-path:inset(15% 0 58% 0);transform:translate(-${3*intensity}px)}
          50%{clip-path:inset(48% 0 28% 0);transform:translate(${2*intensity}px)}
          75%{clip-path:inset(22% 0 62% 0);transform:translate(-${2*intensity}px)}
        }
      `}</style>
      <Tag
        data-text={text}
        className={`glitch ${active ? "glitch-on" : ""} ${className ?? ""}`}
        onMouseEnter={() => trigger === "hover" && setActive(true)}
        onMouseLeave={() => trigger === "hover" && setActive(false)}
      >
        {text}
      </Tag>
    </>
  )
}
