"use client"
import { Turnstile } from "@marsidev/react-turnstile"

interface MathCaptchaProps {
  onVerified: (verified: boolean, token: string | null) => void
}

export function MathCaptcha({ onVerified }: MathCaptchaProps) {
  return (
    <Turnstile
      siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      options={{ theme: "dark" }}
      onSuccess={(token) => onVerified(true, token)}
      onExpire={() => onVerified(false, null)}
      onError={() => onVerified(false, null)}
    />
  )
}
