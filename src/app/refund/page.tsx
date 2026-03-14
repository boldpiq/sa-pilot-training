"use client"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll/ScrollReveal"
import { Footer } from "@/components/layout/Footer"

const BG = "#0B0F1C"
const ACCENT = "#C4541A"
const MUTED = "rgba(255,255,255,0.45)"
const BORDER = "rgba(255,255,255,0.08)"
const SURFACE = "rgba(255,255,255,0.04)"

export default function RefundPage() {
  return (
    <main style={{ background: BG, color: "#fff", minHeight: "100vh" }}>
      <section style={{ padding: "clamp(100px, 14vw, 140px) clamp(20px, 4vw, 48px) clamp(60px, 8vw, 100px)", maxWidth: 1100, margin: "0 auto" }}>
        <ScrollReveal effect="fade-up">
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 32 }}>
            <span style={{ width: 32, height: 1, background: ACCENT, flexShrink: 0 }} />
            <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED }}>Legal</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 80px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: 16 }}>
            Refund &amp;<br /><span style={{ color: ACCENT }}>Cancellation</span>
          </h1>
          <p style={{ color: MUTED, fontSize: 13, marginBottom: 8, opacity: 0.6 }}>www.boldpiq.com/refund</p>
          <p style={{ color: MUTED, fontSize: 14, marginBottom: 16 }}>Effective Date: 05 September 2025 · Last Updated: 05 September 2025</p>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, marginBottom: 48 }}>
            1. REFUND &amp; CANCELLATION POLICY{"\n"}
            At Boldpiq, we prioritize transparency and compliance. This document serves as a comprehensive notice regarding our Terms of Service, Privacy Policy, Return Policy, POPIA Compliance. By accessing our website, www.boldpiq.com, and utilizing our services, you agree to the terms outlined below.{"\n\n"}
            Boldpiq – Refund &amp; Cancellation Policy{"\n\n"}
            Applies to all BoldPiq services, including but not limited to:{"\n"}
            Website Design &amp; Development · Branding &amp; Identity Design · E-Commerce Development · Promotional &amp; Brand Videos · Digital Marketing Campaigns (email, SMS, paid ads, social media) · Consulting, Strategy, and Training Services · Any future services added to BoldPiq&apos;s offerings
          </p>
        </ScrollReveal>

        <ScrollReveal effect="fade-up" delay={0.1}>
          <div style={{ display: "flex", flexDirection: "column", gap: 40, marginBottom: 64 }}>
            {[
              {
                title: "1. Starter Package / Entry-Level Services",
                body: `(e.g., small websites, logo design, basic consulting packages)

Refunds available within 7 calendar days of payment.
Eligible only if less than 25% of project work has been completed.
Any out-of-pocket costs (domains, licenses, ad spend, stock assets, third-party software) will be deducted.
No refunds after 7 days or once 25% project completion is reached.`,
              },
              {
                title: "2. Growth Package / Standard Services",
                body: `(e.g., full websites, branding systems, e-commerce builds, ongoing marketing campaigns)

Refunds available within 7 calendar days of payment, only if:
The kickoff meeting has not occurred, and
No design, campaign setup, or development work has begun.

If work has started, refunds are not available. Instead, clients may receive a credit for future services, valid for 3 months.
No refunds after kickoff or once deliverables/campaigns are in progress.`,
              },
              {
                title: "3. Premium Package / High-Touch Services",
                body: `(e.g., brand videos, complex funnels, custom e-commerce, marketing retainers, enterprise consulting)

Due to significant upfront resource allocation, no refunds are offered once the contract is signed and the kickoff has taken place.
At BoldPiq's discretion, a partial credit of up to 30% may be issued if cancellation occurs before the first draft, deliverable, or campaign launch. Credit is valid for 3 months.
Deposits, consultations, strategy sessions, and campaign retainers are non-refundable.`,
              },
              {
                title: "4. General Terms (All Services & Packages)",
                body: `Refund requests must be submitted via the BoldPiq Refund Request Form below.
Requests are reviewed within 3 business days.
Approved refunds will be processed within 7 business days to the original payment method.
Chargebacks or disputes filed outside this process will result in immediate account suspension and termination of services.
BoldPiq reserves the right to update this policy as new services are introduced; the version in effect at the time of purchase governs all transactions.`,
              },
            ].map(section => (
              <div key={section.title} style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 32 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>{section.title}</h2>
                <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, whiteSpace: "pre-line" }}>{section.body}</p>
              </div>
            ))}

            <div style={{ paddingBottom: 16 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75 }}>
                This policy is part of our full legal framework. See also:{" "}
                <Link href="/terms" style={{ color: ACCENT, textDecoration: "underline" }}>Terms of Service</Link>
                {" · "}
                <Link href="/dpa" style={{ color: ACCENT, textDecoration: "underline" }}>Data Processing Agreement</Link>
                {" · "}
                <Link href="/paia" style={{ color: ACCENT, textDecoration: "underline" }}>PAIA Manual</Link>
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Refund Request Form ─────────────────────────────────────────── */}
        <ScrollReveal effect="fade-up" delay={0.15}>
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
              <span style={{ width: 32, height: 1, background: ACCENT, flexShrink: 0 }} />
              <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED }}>Submit a request</span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: 16 }}>
              Refund Request<br /><span style={{ color: ACCENT }}>Form.</span>
            </h2>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.65, maxWidth: 520, marginBottom: 40 }}>
              Submit your refund or cancellation request below. Our team will review it within 3 business days and respond to the email provided.
            </p>
          </div>

          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 24,
              background: SURFACE,
              overflow: "hidden",
              minHeight: 959,
              padding: 100,
            }}
          >
            <iframe
              src="https://link.zip360.co.za/widget/form/4R1UTmh6UWXxjgxRbuYj"
              style={{ width: "100%", height: 959, border: "none", borderRadius: 15, display: "block" }}
              id="inline-4R1UTmh6UWXxjgxRbuYj"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Return Form Boldpiq"
              data-height="959"
              data-layout-iframe-id="inline-4R1UTmh6UWXxjgxRbuYj"
              data-form-id="4R1UTmh6UWXxjgxRbuYj"
              title="Return Form Boldpiq"
              allow="camera; microphone; autoplay; encrypted-media; fullscreen"
            />
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  )
}
