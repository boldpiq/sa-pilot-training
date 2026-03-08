/**
 * Analytics component — swap provider by changing the script src.
 *
 * Plausible (recommended — privacy-first, no cookies, GDPR compliant):
 *   domain = your domain, e.g. "boldpiq.com"
 *   src    = "https://plausible.io/js/script.js"
 *
 * PostHog (if you need session recording / funnels):
 *   Replace script with PostHog snippet
 *
 * Google Analytics 4:
 *   Replace script with gtag snippet
 *
 * Usage in layout.tsx:
 *   import { Analytics } from "@/components/analytics/Analytics"
 *   <Analytics domain="client-domain.com" />
 */

import Script from "next/script"

interface AnalyticsProps {
  /** The domain registered in Plausible, e.g. "client.com" */
  domain: string
  /** Plausible script URL — default is the standard build */
  src?: string
}

export function Analytics({
  domain,
  src = "https://plausible.io/js/script.js",
}: AnalyticsProps) {
  if (process.env.NODE_ENV !== "production") return null

  return (
    <Script
      defer
      data-domain={domain}
      src={src}
      strategy="afterInteractive"
    />
  )
}
