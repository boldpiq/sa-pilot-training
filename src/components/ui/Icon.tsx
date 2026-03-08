"use client"
/**
 * Icon — standardised wrapper around Lucide React
 *
 * Why: enforces consistent sizing, stroke width, and colour tokens
 * across every icon used on a client site.
 *
 * Usage:
 *   import { Icon } from "@/components/ui/Icon"
 *   import { ArrowRight, Mail } from "lucide-react"
 *
 *   <Icon icon={ArrowRight} />
 *   <Icon icon={Mail} size="lg" color="muted" />
 *   <Icon icon={ArrowRight} size={32} strokeWidth={1.5} />
 */

import type { LucideIcon } from "lucide-react"

type Size = "xs" | "sm" | "md" | "lg" | "xl" | number
type Color = "default" | "muted" | "accent" | "success" | "warning" | "danger" | string

const SIZES: Record<string, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
}

const COLORS: Record<string, string> = {
  default: "currentColor",
  muted: "var(--color-text-muted, rgba(255,255,255,0.4))",
  accent: "var(--color-accent, #6366f1)",
  success: "var(--color-success, #22c55e)",
  warning: "var(--color-warning, #f59e0b)",
  danger: "var(--color-danger, #ef4444)",
}

interface IconProps {
  icon: LucideIcon
  size?: Size
  color?: Color
  strokeWidth?: number
  className?: string
  "aria-label"?: string
}

export function Icon({
  icon: LucideIcon,
  size = "md",
  color = "default",
  strokeWidth = 1.75,
  className,
  "aria-label": ariaLabel,
}: IconProps) {
  const px = typeof size === "number" ? size : SIZES[size] ?? 20
  const fill = COLORS[color] ?? color

  return (
    <LucideIcon
      width={px}
      height={px}
      strokeWidth={strokeWidth}
      color={fill}
      className={className}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    />
  )
}
