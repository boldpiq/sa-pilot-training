"use client"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll/ScrollReveal"
import { Footer } from "@/components/layout/Footer"
import { LegalNav } from "@/components/legal/LegalNav"

const BG = "#FFFFFF"
const ACCENT = "#C8181A"
const MUTED = "rgba(6,12,24,0.52)"
const BORDER = "rgba(6,12,24,0.10)"

export default function PAIAPage() {
  return (
    <main style={{ background: BG, color: "#060C18", minHeight: "100vh" }}>
      <section style={{ padding: "clamp(100px, 14vw, 140px) clamp(20px, 4vw, 48px) clamp(60px, 8vw, 100px)", maxWidth: 860, margin: "0 auto" }}>
        <ScrollReveal effect="fade-up">
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 32 }}>
            <span style={{ width: 32, height: 1, background: ACCENT, flexShrink: 0 }} />
            <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED }}>Legal</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 80px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: 16 }}>
            PAIA<br /><span style={{ color: ACCENT }}>Manual</span>
          </h1>
          <p style={{ color: MUTED, fontSize: 13, marginBottom: 8, opacity: 0.6 }}>www.sapilottraining.co.za/PAIA</p>
          <p style={{ color: MUTED, fontSize: 14, marginBottom: 16 }}>Promotion of Access to Information Act (Act 2 of 2000)</p>
          <p style={{ color: MUTED, fontSize: 14, marginBottom: 48, lineHeight: 1.65 }}>
            FOR BOLDPIQ (PTY) LTD{"\n"}
            This PAIA Manual is compiled in accordance with Section 51 of the Promotion of Access to Information Act, No. 2 of 2000 ("PAIA"). It provides guidance on how interested parties may request access to records held by SA Pilot Training (Pty) Ltd. In addition to our general business operations, SA Pilot Training&apos;s activities include website development, hosting, and maintenance services (delivered via the gohighlevel platform), for which related records are maintained in accordance with legal and contractual obligations.
          </p>
        </ScrollReveal>

        <LegalNav />

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {[
              {
                title: "1. Introduction",
                body: "This PAIA Manual is compiled in accordance with Section 51 of the Promotion of Access to Information Act, No. 2 of 2000 (\"PAIA\"). It provides guidance on how interested parties may request access to records held by SA Pilot Training (Pty) Ltd. In addition to our general business operations, SA Pilot Training's activities include website development, hosting, and maintenance services (delivered via the gohighlevel platform), for which related records are maintained in accordance with legal and contractual obligations.",
              },
              {
                title: "2. Company Details",
                body: "Company Name: SA Pilot Training (Pty) Ltd\nWebsite: www.sapilottraining.co.za",
              },
              {
                title: "3. Information Officer",
                body: "Name: Monique E.\nAddress: Private Bag X2, Century City, 7435, South Africa\nContact: info@sapilottraining.co.za",
              },
              {
                title: "4. Guide to PAIA",
                body: "A guide on how to use PAIA is available from the Information Regulator. This guide can be accessed from:\nWebsite: www.sapilottraining.co.za",
              },
              {
                title: "5. Scope of Business Operations and Records",
                body: `SA Pilot Training's core operations include:

Website Development and Maintenance:
We design, develop, host, and maintain websites. Our services include SEO setup, mobile responsiveness, integration of booking forms, and other client-specific functionalities.

Platform Integration: Our business is structured around the gohighlevel platform, which facilitates client engagement, customer relationship management, and performance analytics.

As part of these operations, SA Pilot Training generates and retains records including:
Details of the agreed scope for website development and subsequent change orders. Hosting and maintenance logs, including records of monthly fees, service reactivation, and termination notices. Agreements and contractual documents such as the Website Development and Maintenance Agreement. Data pertaining to both Client Content (supplied by clients for website development) and Developer Content (including licensed templates, stock images, and code). Records of communications, financial transactions, and data processing related to service delivery.`,
              },
              {
                title: "6. Records Available Without Formal Request",
                body: `SA Pilot Training makes certain categories of records publicly accessible without a formal PAIA request. These include:

Company policies and procedures.
Public financial reports.
Marketing materials and service brochures (including descriptions of our website development, hosting, and maintenance services).`,
              },
              {
                title: "7. Records Available Upon Request",
                body: `In accordance with PAIA, the following records are available upon request:

Personnel Records: Related to staff involved in our service delivery.
Customer and Service Records: Including records pertaining to website development, hosting, maintenance logs, and change orders.
Financial Records: Including invoicing and payment records related to our services.
Agreements and Contracts: Such as the Website Development and Maintenance Agreement that governs the relationship between SA Pilot Training and its clients.
Operational Records: Including data from the gohighlevel platform, service performance logs, and records related to data processing.
Data Retention Records: Detailing the retention, deletion, and backup practices for both Client and Developer Content.`,
              },
              {
                title: "8. Request Procedure",
                body: `Requests for access to records must be submitted in writing using the prescribed PAIA Request Form. Each request should include:

The requester's full name and contact details.
A detailed description of the records being requested.
The preferred form of access (electronic or physical copies).
Payment of any prescribed fees, where applicable.

Requests should be directed to the Information Officer using the contact details provided in Section 3.`,
              },
              {
                title: "9. Fees Payable",
                body: "A request fee may be charged in accordance with PAIA regulations. Details on the fee structure can be obtained from the Information Regulator's website. Note that any fees or payment terms related to our website development and maintenance services are set forth in our contractual agreements and Terms of Service.",
              },
              {
                title: "10. Data Retention, Content, and Privacy",
                body: `10.1 Client and Developer Content

Client Content: SA Pilot Training receives and stores content provided by clients (such as images, logos, and textual information) necessary for website development.
Developer Content: SA Pilot Training may incorporate licensed stock images, templates, and proprietary code elements in website development. Such materials remain the property of SA Pilot Training and are licensed solely for use on the client's website for the duration of the service agreement.

10.2 Data Retention

SA Pilot Training retains data essential for website operations only for the duration of the service agreement. Upon termination of services or deactivation of a website, SA Pilot Training reserves the right to permanently delete all related data from its servers. Clients are responsible for backing up any necessary data.

10.3 Data Privacy and POPIA Compliance

SA Pilot Training is fully committed to protecting personal information in accordance with the Protection of Personal Information Act (POPIA). Personal data obtained through our website services is processed solely for the purpose of service delivery and is safeguarded with appropriate technical and organisational measures. SA Pilot Training will not sell, share, or transfer personal data to third parties without explicit consent, except as required by law. Upon termination of services, personal data will be securely deleted or returned in accordance with POPIA requirements.`,
              },
              {
                title: "11. Records Pertaining to the Website Development and Maintenance Agreement",
                body: `In addition to general records, SA Pilot Training maintains specific records in relation to our Website Development and Maintenance services:

Service Scope and Change Orders: Documentation of the initial service scope, any amendments, and client-approved change orders.
Licensing and Ownership Records: Records that outline website ownership, the non-exclusive license granted to clients, and the marketing rights related to the display of client names and logos.
Financial and Payment Records: Including monthly maintenance fee details, records of non-payment, reactivation fees, and termination notices.
Operational and Hosting Records: Logs maintained through the gohighlevel platform detailing website performance, hosting activities, and maintenance operations.
Termination and Data Post-Termination Records: Records relating to the termination of services, outstanding payments, and subsequent data deletion or retention practices.`,
              },
              {
                title: "12. Privacy, Terms, and Compliance",
                body: `SA Pilot Training's operations, including website development and maintenance, are governed by our Terms of Service and Privacy Policy which further elaborate on:

The client's and developer's rights and obligations.
Service conditions, including payment and termination terms.
Detailed measures for data protection and compliance with South African laws, including intellectual property rights and data protection statutes.`,
              },
              {
                title: "13. Availability of the Manual",
                body: `This PAIA Manual is available:

On the SA Pilot Training website: www.sapilottraining.co.za
At SA Pilot Training's principal place of business during office hours`,
              },
              {
                title: "14. Updates to This Manual",
                body: "This manual will be reviewed periodically to ensure ongoing compliance with legal requirements and to reflect any changes in SA Pilot Training's operations or data handling practices. Updates will be documented and published accordingly.",
              },
              {
                title: "15. Legal Notice",
                body: "This manual is intended solely to provide guidance on accessing records held by SA Pilot Training (Pty) Ltd in accordance with PAIA. It does not modify, supersede, or affect any contractual agreements (such as the Website Development and Maintenance Agreement) between SA Pilot Training and its clients.",
              },
              {
                title: "16. Breach Notification",
                body: "In the event of a security compromise involving your personal information, we will notify both the Information Regulator and affected individuals as soon as reasonably possible, in accordance with Section 22 of the Protection of Personal Information Act.",
              },
            ].map(section => (
              <div key={section.title} style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 32 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>{section.title}</h2>
                <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, whiteSpace: "pre-line" }}>{section.body}</p>
              </div>
            ))}

            <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 32 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16 }}>External Resources</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="https://inforegulator.org.za/" target="_blank" rel="noopener noreferrer"
                  style={{ color: MUTED, fontSize: 14, textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(6,12,24,0.52)")}
                >
                  → Information Regulator — South Africa
                </a>
                <a href="https://drive.google.com/file/d/1fYEJlYD1gwF2LwHPXHoLNy3IrbCzTmBs/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: ACCENT, color: "#fff", borderRadius: 8, fontSize: 13, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase", width: "fit-content" }}
                >
                  ↓ PAIA Manual Download
                </a>
              </div>
            </div>

            <div style={{ paddingBottom: 16 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75 }}>
                See also:{" "}
                <Link href="/terms" style={{ color: ACCENT, textDecoration: "underline" }}>Terms of Service</Link>
                {" · "}
                <Link href="/dpa" style={{ color: ACCENT, textDecoration: "underline" }}>Data Processing Agreement</Link>
                {" · "}
                <Link href="/refund" style={{ color: ACCENT, textDecoration: "underline" }}>Refund Policy</Link>
              </p>
            </div>
          </div>
      </section>
      <Footer />
    </main>
  )
}
