"use client"
import { ScrollReveal } from "@/components/scroll/ScrollReveal"
import { Footer } from "@/components/layout/Footer"
import { LegalNav } from "@/components/legal/LegalNav"

const BG = "#FFFFFF"
const ACCENT = "#C8181A"
const MUTED = "rgba(6,12,24,0.52)"
const BORDER = "rgba(6,12,24,0.10)"

const H2Style = { fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12, color: "#060C18" }
const BodyStyle = { color: MUTED, fontSize: 15, lineHeight: 1.75, whiteSpace: "pre-line" as const }
const SectionStyle = { borderBottom: `1px solid ${BORDER}`, paddingBottom: 32 }

const sections = [
  {
    title: "1. What Are Cookies",
    body: "Cookies are small text files placed on your device when you visit a website. They allow the site to remember your actions and preferences over a period of time, so you don't have to re-enter them each time you visit or navigate between pages.\n\nCookies can be session cookies (deleted when you close your browser) or persistent cookies (which remain on your device for a set period or until you delete them).",
  },
  {
    title: "2. How We Use Cookies",
    body: `We use cookies and similar tracking technologies (such as web beacons and pixels) on www.sapilottraining.co.za for the following purposes:

Strictly Necessary – To operate the website, process form submissions, and ensure security. These cannot be disabled.
Performance & Analytics – To understand how visitors interact with our site (e.g., pages visited, time spent, errors). We use this data to improve our website.
Functional – To remember your preferences and settings to provide a more personalised experience.
Marketing & Targeting – To deliver relevant content and track the effectiveness of our advisory consultations and campaigns.`,
  },
  {
    title: "3. Cookies We Use",
    body: `The following categories of cookies may be set when you use our website:

Strictly Necessary Cookies
These cookies are essential for the website to function and cannot be switched off. They are typically set in response to actions you take, such as submitting a booking request or filling in a consultation form.
Examples: session tokens, CSRF protection, security cookies.

Analytics Cookies
We use analytics tools to collect anonymised data about how visitors use our site. This helps us understand traffic patterns and improve our content.
Provider: Google Analytics (or equivalent privacy-first analytics tool).
Data collected: pages visited, referral source, device type, session duration.

Booking & Scheduling Cookies
When you interact with our consultation booking widget (powered by GoHighLevel / Zip360), cookies may be set by that third-party service to manage your booking session and prevent duplicate submissions.

Marketing Cookies
If you have engaged with our paid advertising channels (Google Ads, Meta, etc.), conversion tracking cookies may be placed to measure the effectiveness of our campaigns. These cookies do not store personally identifiable information.`,
  },
  {
    title: "4. Third-Party Cookies",
    body: `Some cookies on our website are set by third-party services we use. We do not control these cookies and they are governed by the respective providers' privacy policies. Third parties include:

GoHighLevel / Zip360 – Booking and CRM platform used to manage consultations.
Google Analytics – Website analytics and performance monitoring.
Google Ads / Meta Pixel – Advertising conversion tracking (where applicable).
Vercel – Hosting and deployment infrastructure; may set performance monitoring cookies.

We encourage you to review the privacy policies of these third-party providers for more information on their data practices.`,
  },
  {
    title: "5. Your Cookie Choices",
    body: `You have the right to accept or decline non-essential cookies. You can manage your preferences in the following ways:

Browser Settings – Most browsers allow you to refuse or delete cookies through their settings. Please refer to your browser's help documentation for instructions. Note that disabling certain cookies may affect the functionality of our website.

Opt-Out Tools – You can opt out of Google Analytics tracking at: tools.google.com/dlpage/gaoptout.

Do Not Track – Some browsers offer a "Do Not Track" setting. We respect DNT signals where technically practicable.

If you reside in the EU/UK, South Africa, or California, you also have the right to withdraw consent for non-essential cookies at any time. Withdrawing consent does not affect the lawfulness of any processing carried out prior to withdrawal.`,
  },
  {
    title: "6. Legal Basis for Cookie Use",
    body: `We rely on the following legal bases for placing cookies:

Strictly Necessary Cookies – Legitimate interests (operating the website and ensuring security); no consent required.
Analytics, Functional & Marketing Cookies – Your consent, obtained through our cookie notice on first visit.

Where consent is required (POPIA, GDPR, PECR), we will not place non-essential cookies before you have given your consent.`,
  },
  {
    title: "7. Data Retention",
    body: `Cookie lifespans vary by type:

Session cookies – Expire when you close your browser.
Analytics cookies – Typically retained for up to 26 months.
Marketing/conversion cookies – Typically retained for 90 days.

You can delete cookies stored on your device at any time through your browser settings.`,
  },
  {
    title: "8. Changes to This Policy",
    body: `We may update this Cookie Policy from time to time to reflect changes in technology, law, or our practices. Any updates will be posted here with a revised "Last Updated" date. We encourage you to review this page periodically.`,
  },
  {
    title: "9. Contact",
    body: "If you have any questions about our use of cookies or this Cookie Policy, please contact us at:\nEmail: info@sapilottraining.co.za\nWebsite: www.sapilottraining.co.za",
  },
]

export default function CookiesPage() {
  return (
    <main style={{ background: BG, color: "#060C18", minHeight: "100vh" }}>
      <section style={{ padding: "clamp(100px, 14vw, 140px) clamp(20px, 4vw, 48px) clamp(60px, 8vw, 100px)", maxWidth: 860, margin: "0 auto" }}>
        <ScrollReveal effect="fade-up">
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 32 }}>
            <span style={{ width: 32, height: 1, background: ACCENT, flexShrink: 0 }} />
            <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED }}>Legal</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 80px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: 16 }}>
            Cookie<br /><span style={{ color: ACCENT }}>Policy</span>
          </h1>
          <p style={{ color: MUTED, fontSize: 13, marginBottom: 8, opacity: 0.6 }}>www.sapilottraining.co.za/cookies</p>
          <p style={{ color: MUTED, fontSize: 14, marginBottom: 16 }}>Effective Date: 05 September 2025 · Last Updated: 05 September 2025</p>
          <p style={{ color: MUTED, fontSize: 14, marginBottom: 48, lineHeight: 1.65 }}>
            SA Pilot Training (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) uses cookies and similar technologies on our website. This Cookie Policy explains what cookies are, how we use them, your choices regarding cookies, and how they relate to your privacy rights under the Protection of Personal Information Act (POPIA), the General Data Protection Regulation (GDPR/UK GDPR), the Privacy and Electronic Communications Regulations (PECR), and other applicable laws.
          </p>
          <LegalNav />
        </ScrollReveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {sections.map(section => (
            <ScrollReveal key={section.title} effect="fade-up">
              <div style={SectionStyle}>
                <h2 style={H2Style}>{section.title}</h2>
                <p style={BodyStyle}>{section.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
