"use client"
import { ScrollReveal } from "@/components/scroll/ScrollReveal"
import { Footer } from "@/components/layout/Footer"
import { LegalNav } from "@/components/legal/LegalNav"

const BG = "#0B0F1C"
const ACCENT = "#C4541A"
const MUTED = "rgba(255,255,255,0.45)"
const BORDER = "rgba(255,255,255,0.08)"

const H2Style = { fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12, color: "#fff" }
const BodyStyle = { color: MUTED, fontSize: 15, lineHeight: 1.75, whiteSpace: "pre-line" as const }
const SectionStyle = { borderBottom: `1px solid ${BORDER}`, paddingBottom: 32 }

const sections = [
  { title: "1. Scope", body: "This Privacy Policy applies to all users of our website www.boldpiq.com, our services, and any related communications. It covers personal data processed through our systems and by our trusted third-party service providers." },
  {
    title: "2. Information We Collect",
    body: `We may collect the following categories of information:

Personal Identification Data – Name, email address, phone number, postal/billing address.
Account & Service Data – CRM entries, project details, contracts, invoices.
Technical Data – IP address, browser type, operating system, device identifiers, access times.
Usage Data – Website navigation, forms submitted, interactions with emails or campaigns.
Marketing & Communication Data – Your preferences for receiving updates and promotions.
Payment Data – Limited payment processing information (processed by third-party providers).`,
  },
  {
    title: "3. How We Collect Information",
    body: `Direct Interactions – When you fill in forms, request services, subscribe to newsletters, or communicate with us.
Automated Technologies – When you interact with our website, cookies and similar technologies collect technical and usage data (see our Cookie Policy).
Third Parties – From partners and service providers (e.g., payment processors, analytics tools).`,
  },
  {
    title: "4. How We Use Personal Data",
    body: `We process your personal data for the following purposes:

Service Delivery – To provide, manage, and improve our services.
Account Management – To manage billing, invoicing, and project workflows.
Communication – To respond to inquiries, provide support, and send service updates.
Marketing – To send promotional materials (where you have consented or as permitted by law).
Analytics – To analyze usage data and improve our website and services.
Legal & Compliance – To comply with legal obligations, resolve disputes, and enforce agreements.`,
  },
  {
    title: "5. Legal Basis for Processing (GDPR/POPIA)",
    body: `We process personal data under the following legal bases:

Consent – Where you have given us clear consent (e.g., for marketing).
Contract – To fulfill an agreement or provide requested services.
Legal Obligation – Where processing is required by law.
Legitimate Interests – For business operations, fraud prevention, service improvement, provided your rights are not overridden.`,
  },
  {
    title: "6. Sharing of Personal Data",
    body: `We may share your data with:

Service Providers & Sub-Processors – For CRM, hosting, email/SMS communications, analytics, and payment processing (e.g., GoHighLevel, Google Analytics, payment gateways). For details on how we process client data as a processor, see our Data Processing Addendum (DPA).
Legal Authorities – Where required by law or to protect our legal rights.
Business Transfers – In the event of a merger, acquisition, or sale of assets, subject to equivalent privacy protections.

We do not sell personal data as defined under CCPA/CPRA.`,
  },
  {
    title: "7. Data Retention",
    body: "We retain personal data only as long as necessary for the purposes for which it was collected, or as required by law. Client project data is retained for the duration of the service relationship and as required for legal and tax compliance thereafter.",
  },
  {
    title: "8. International Transfers",
    body: `Where personal data is transferred internationally, we ensure adequate protections are in place:

South Africa (POPIA): Appropriate safeguards are applied for transfers outside South Africa.
UK/EU (GDPR): We use Standard Contractual Clauses (SCCs) or the UK International Data Transfer Agreement (IDTA) where applicable.
California (CCPA/CPRA): We honor California residents' rights to know, delete, and opt-out of data sales (we do not sell data).`,
  },
  {
    title: "9. Your Rights",
    body: `Depending on your jurisdiction, you may have the right to:

Access – Request a copy of the personal data we hold about you.
Correction – Request correction of inaccurate or incomplete data.
Deletion/Erasure – Request deletion of your personal data, subject to legal retention requirements.
Restriction – Request that we restrict processing of your data in certain circumstances.
Portability – Receive your data in a structured, machine-readable format.
Objection – Object to processing based on legitimate interests or for direct marketing.
Opt-Out (CCPA) – Opt out of the sale of personal information (we do not sell data).

To exercise any of these rights, please contact us at private@boldpiq.com.`,
  },
  {
    title: "10. Cookies",
    body: "We use cookies and similar technologies on our website. Please refer to our Cookie Policy for detailed information on the types of cookies used and how to manage your preferences.",
  },
  {
    title: "11. Children's Privacy",
    body: "Our services are not directed at children under 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such data, please contact us immediately.",
  },
  {
    title: "12. Security",
    body: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include encryption, access controls, and secure communication protocols.",
  },
  {
    title: "13. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in technology, law, or our practices. Any updates will be posted here with a revised "Last Updated" date.`,
  },
  {
    title: "14. Contact",
    body: "For any privacy-related queries or to exercise your rights, please contact our Information Officer at:\nEmail: private@boldpiq.com\nWebsite: www.boldpiq.com",
  },
]

export default function PrivacyPage() {
  return (
    <main style={{ background: BG, color: "#fff", minHeight: "100vh" }}>
      <section style={{ padding: "clamp(100px, 14vw, 140px) clamp(20px, 4vw, 48px) clamp(60px, 8vw, 100px)", maxWidth: 860, margin: "0 auto" }}>
        <ScrollReveal effect="fade-up">
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 32 }}>
            <span style={{ width: 32, height: 1, background: ACCENT, flexShrink: 0 }} />
            <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED }}>Legal</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 80px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: 16 }}>
            Privacy<br /><span style={{ color: ACCENT }}>Policy</span>
          </h1>
          <p style={{ color: MUTED, fontSize: 13, marginBottom: 8, opacity: 0.6 }}>www.boldpiq.com/privacy</p>
          <p style={{ color: MUTED, fontSize: 14, marginBottom: 16 }}>Effective Date: 05 September 2025 · Last Updated: 05 September 2025</p>
          <p style={{ color: MUTED, fontSize: 14, marginBottom: 48, lineHeight: 1.65 }}>
            BoldPiq (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy of our clients and website users (&ldquo;you&rdquo; or &ldquo;your&rdquo;). This Privacy Policy explains how we collect, use, store, and share personal data in compliance with the Protection of Personal Information Act (POPIA) of South Africa, the General Data Protection Regulation (GDPR/UK GDPR), the California Consumer Privacy Act (CCPA/CPRA), the Brazilian LGPD, and other applicable privacy laws.
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
