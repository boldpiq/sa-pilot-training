import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Strict mode disabled — Framer Motion AnimatePresence has DOM reconciliation issues with React 19 strict mode
  reactStrictMode: false,

  // Compress responses
  compress: true,

  // Allow images from common CMS/media hosts — add client domains as needed
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.leadconnectorhq.com" },
      { protocol: "https", hostname: "assets.cdn.filesafe.space" },
      { protocol: "https", hostname: "images.squarespace-cdn.com" },
    ],
  },

  // Security headers applied to every response
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.leadconnectorhq.com https://*.gohighlevel.com https://link.zip360.co.za https://js.hs-scripts.com https://cdn.socket.io https://challenges.cloudflare.com https://www.google.com https://www.gstatic.com https://recaptcha.google.com",
              "style-src 'self' 'unsafe-inline' https://*.leadconnectorhq.com https://*.gohighlevel.com https://fonts.bunny.net https://www.gstatic.com",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data: https://*.leadconnectorhq.com https://fonts.bunny.net https://www.gstatic.com",
              "connect-src 'self' https: wss:",
              "worker-src blob:",
              "frame-src https://link.zip360.co.za https://*.leadconnectorhq.com https://*.gohighlevel.com https://www.youtube.com https://www.youtube-nocookie.com https://challenges.cloudflare.com",
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
    ]
  },
}

export default nextConfig
