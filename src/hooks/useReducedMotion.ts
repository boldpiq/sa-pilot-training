import { useEffect, useState } from "react"

/**
 * Returns true if the user has requested reduced motion.
 * Use this to skip or simplify animations for accessibility.
 *
 * Usage:
 *   const reduced = useReducedMotion()
 *   const duration = reduced ? 0 : 0.6
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
  })

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return reduced
}
