import type { MetadataRoute } from "next"

const BASE_URL = "https://www.boldpiq.com"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/thank-you",   // confirmation page — no SEO value
          "/demo",        // internal demo pages
          "/api/",        // API routes
        ],
      },
      // Allow major AI crawlers full access for GEO visibility
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/thank-you", "/demo", "/api/"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/thank-you", "/demo", "/api/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/thank-you", "/demo", "/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/thank-you", "/demo", "/api/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
