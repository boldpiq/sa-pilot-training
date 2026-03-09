"use client"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

interface GHLBookingWidgetProps {
  src: string
  id: string
  title: string
  defaultHeight?: number
  borderRadius?: number
  border?: string
  background?: string
  /** Redirect to this path after a booking is confirmed (e.g. "/thank-you") */
  redirectTo?: string
  /** Defer setting the iframe src until after mount (fixes GHL script timing issues) */
  deferLoad?: boolean
}

const BOOKING_KEYWORDS = ["appointment", "booked", "booking", "confirmed", "scheduled"] as const

function isBookingConfirmation(data: unknown): boolean {
  if (!data) return false

  // ✅ Confirmed GHL/LeadConnector event: array where [0] === 'msgsndr-booking-complete'
  if (Array.isArray(data) && data[0] === "msgsndr-booking-complete") return true

  // Plain string — check for booking-related keywords
  if (typeof data === "string") {
    const lower = data.toLowerCase()
    return BOOKING_KEYWORDS.some(k => lower.includes(k))
  }

  if (typeof data !== "object") return false
  const d = data as Record<string, unknown>

  // Other known GHL event patterns (fallback)
  if (
    d.event === "booking_confirmed" ||
    d.event === "appointmentBooked" ||
    d.event === "appointment_booked" ||
    d.event === "formSubmitted" ||
    d.type === "appointment_booked" ||
    d.type === "appointmentBooked" ||
    d.type === "formSubmitted" ||
    d.action === "appointmentBooked" ||
    d.action === "booking_confirmed" ||
    d.action === "formSubmit" ||
    d.message === "booking_confirmed" ||
    d.booked === true ||
    d.isBooked === true
  ) return true

  return false
}

export function GHLBookingWidget({
  src,
  id,
  title,
  defaultHeight = 800,
  borderRadius = 24,
  border = "1px solid rgba(255,255,255,0.08)",
  background = "rgba(255,255,255,0.03)",
  redirectTo,
  deferLoad = false,
}: GHLBookingWidgetProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(defaultHeight)
  const router = useRouter()

  useEffect(() => {
    if (deferLoad && iframeRef.current) {
      iframeRef.current.src = src
    }
  }, [deferLoad, src])

  // Sync container height when form_embed.js directly sets iframe inline style height
  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    const mo = new MutationObserver(() => {
      const inlineH = parseFloat(iframe.style.height)
      if (!isNaN(inlineH) && inlineH > 200) {
        setHeight(h => Math.max(h, inlineH))
        iframe.style.height = "100%"
      }
    })
    mo.observe(iframe, { attributes: true, attributeFilter: ["style"] })
    return () => mo.disconnect()
  }, [])

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (!e.data) return

      try {
        const raw = e.data
        const data = typeof raw === "string" ? (() => { try { return JSON.parse(raw) } catch { return raw } })() : raw

        // Booking confirmed → redirect after 3 s so user sees GHL confirmation screen
        if (redirectTo && isBookingConfirmation(data)) {
          setTimeout(() => router.push(redirectTo), 5000)
          return
        }

        // Height adjustments
        if (data?.action === "setHeight" && typeof data.height === "number") {
          setHeight(Math.max(data.height, defaultHeight))
          return
        }
        if (data?.type === "setHeight" && typeof data.value === "number") {
          setHeight(Math.max(data.value, defaultHeight))
          return
        }
        if (typeof data === "number" && data > 200) {
          setHeight(Math.max(data, defaultHeight))
          return
        }
        if (data?.height && typeof data.height === "number" && data.height > 200) {
          setHeight(Math.max(data.height, defaultHeight))
          return
        }
      } catch {
        // ignore
      }
    }

    // Capture phase — fires before form_embed.js bubble-phase listeners
    window.addEventListener("message", handleMessage, true)
    return () => window.removeEventListener("message", handleMessage, true)
  }, [defaultHeight, redirectTo, router])

  return (
    <div
      style={{
        border,
        borderRadius,
        background,
        width: "100%",
        height,
        transition: "height 0.3s ease",
        overflow: "visible",
        position: "relative",
      }}
    >
      <iframe
        ref={iframeRef}
        src={deferLoad ? undefined : src}
        id={id}
        title={title}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
          borderRadius,
        }}
        allow="camera; microphone; autoplay; encrypted-media; fullscreen"
      />
    </div>
  )
}
