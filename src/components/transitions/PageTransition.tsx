"use client"
import { type ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
  variant?: string
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <>
      <style>{`
        @keyframes pageFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .page-transition {
          animation: pageFadeIn 0.35s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
        }
      `}</style>
      <div className="page-transition">{children}</div>
    </>
  )
}
