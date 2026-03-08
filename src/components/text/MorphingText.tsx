"use client"
import { useEffect, useRef, useState } from "react"

/**
 * MorphingText — smoothly morphs between words using SVG blur filter.
 * Inspired by the technique used on Vercel's website.
 */
interface MorphingTextProps {
  words: string[]
  morphDuration?: number
  pauseDuration?: number
  className?: string
}

const COOLDOWN = 0.25

export function MorphingText({ words, morphDuration = 1, pauseDuration = 1, className }: MorphingTextProps) {
  const text1Ref = useRef<HTMLSpanElement>(null)
  const text2Ref = useRef<HTMLSpanElement>(null)
  const morphRef = useRef(0)
  const cooldownRef = useRef(0)
  const wordIndexRef = useRef(0)
  const frameRef = useRef<number>(0)
  const lastTimeRef = useRef<number | null>(null)

  function setMorph(fraction: number) {
    const blur1 = Math.min(8 / fraction - 8, 100)
    const blur2 = Math.min(8 / (1 - fraction) - 8, 100)
    if (text1Ref.current) {
      text1Ref.current.style.filter = `blur(${blur1}px)`
      text1Ref.current.style.opacity = `${Math.pow(1 - fraction, 0.4) * 100}%`
    }
    if (text2Ref.current) {
      text2Ref.current.style.filter = `blur(${blur2}px)`
      text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`
    }
  }

  function doCooldown() {
    morphRef.current = 0
    if (text1Ref.current) { text1Ref.current.style.filter = "none"; text1Ref.current.style.opacity = "0%" }
    if (text2Ref.current) { text2Ref.current.style.filter = "none"; text2Ref.current.style.opacity = "100%" }
  }

  useEffect(() => {
    if (text1Ref.current) text1Ref.current.textContent = words[wordIndexRef.current % words.length]
    if (text2Ref.current) text2Ref.current.textContent = words[(wordIndexRef.current + 1) % words.length]

    function animate(time: number) {
      if (lastTimeRef.current === null) lastTimeRef.current = time
      const dt = (time - lastTimeRef.current) / 1000
      lastTimeRef.current = time

      cooldownRef.current -= dt
      if (cooldownRef.current <= 0) {
        if (cooldownRef.current <= -pauseDuration) {
          morphRef.current += dt / morphDuration
          if (morphRef.current >= 1) {
            wordIndexRef.current++
            morphRef.current = 0
            cooldownRef.current = COOLDOWN
            if (text1Ref.current) text1Ref.current.textContent = words[wordIndexRef.current % words.length]
            if (text2Ref.current) text2Ref.current.textContent = words[(wordIndexRef.current + 1) % words.length]
          }
          setMorph(morphRef.current)
        }
      } else {
        doCooldown()
      }
      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [words, morphDuration, pauseDuration])

  return (
    <span className={className} style={{ position: "relative", display: "inline-block" }}>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="morphing-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
          </filter>
        </defs>
      </svg>
      <span ref={text1Ref} style={{ position: "absolute", inset: 0, margin: "auto", userSelect: "none" }} aria-hidden />
      <span ref={text2Ref} style={{ userSelect: "none" }} />
    </span>
  )
}
