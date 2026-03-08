"use client"
import { useEffect, useRef, useState, useCallback } from "react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

interface TextScrambleProps {
  text: string
  trigger?: "mount" | "hover" | "inview"
  speed?: number
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div"
}

export function TextScramble({ text, trigger = "mount", speed = 10, className, as: Tag = "span" }: TextScrambleProps) {
  const [display, setDisplay] = useState(trigger === "mount" ? "" : text)
  const frameRef = useRef<number>(0)
  const iterRef = useRef(0)

  const scramble = useCallback(() => {
    cancelAnimationFrame(frameRef.current)
    iterRef.current = 0

    function tick() {
      setDisplay(
        text.split("").map((char, i) => {
          if (char === " ") return " "
          if (i < iterRef.current / speed) return text[i]
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        }).join("")
      )
      iterRef.current++
      if (iterRef.current < text.length * speed + speed) {
        frameRef.current = requestAnimationFrame(tick)
      } else {
        setDisplay(text)
      }
    }

    frameRef.current = requestAnimationFrame(tick)
  }, [text, speed])

  useEffect(() => {
    if (trigger === "mount") scramble()
    return () => cancelAnimationFrame(frameRef.current)
  }, [trigger, scramble])

  const props = trigger === "hover" ? { onMouseEnter: scramble } : {}

  return (
    <Tag className={className} style={{ fontFamily: "monospace", cursor: trigger === "hover" ? "pointer" : undefined }} {...props}>
      {display || text}
    </Tag>
  )
}
