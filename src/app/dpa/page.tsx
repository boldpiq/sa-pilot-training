"use client"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll/ScrollReveal"
import { Footer } from "@/components/layout/Footer"
import { LegalNav } from "@/components/legal/LegalNav"

const BG = "#FFFFFF"
const ACCENT = "#C8181A"
const MUTED = "rgba(6,12,24,0.52)"
const BORDER = "rgba(6,12,24,0.10)"

export default function DPAPage() {
  return (
    <main style={{ background: BG, color: "#060C18", minHeight: "100vh" }}>
      <section style={{ padding: "clamp(100px, 14vw, 140px) clamp(20px, 4vw, 48px) clamp(60px, 8vw, 100px)", maxWidth: 860, margin: "0 auto" }}>
        <ScrollReveal effect="fade-up">
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 32 }}>
            <span style={{ width: 32, height: 1, background: ACCENT, flexShrink: 0 }} />
            <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED }}>Legal</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 80px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: 16 }}>
            Data Processing<br /><span style={{ color: ACCENT }}>Agreement</span>
          </h1>
          <p style={{ color: MUTED, fontSize: 13, marginBottom: 8, opacity: 0.6 }}>www.sapilottraining.co.za/dpa</p>
          <p style={{ color: MUTED, fontSize: 14, marginBottom: 16 }}>Effective Date: 05 September 2025 · Last Updated: 05 September 2025</p>
          <p style={{ color: MUTED, fontSize: 14, marginBottom: 48, lineHeight: 1.65 }}>
            This Data Processing Addendum (&ldquo;DPA&rdquo;) forms part of the Terms of Service (&ldquo;Agreement&rdquo;) between CINNIMON T/A SA Pilot Training (Reg. 2015/193038/07) (&ldquo;Processor&rdquo;, &ldquo;SA Pilot Training&rdquo;) and the customer (&ldquo;Controller&rdquo;, &ldquo;Client&rdquo;) and applies where SA Pilot Training processes Client Personal Data on behalf of the Client.
          </p>
        </ScrollReveal>

        <LegalNav />

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {[
            {
              title: "1. Definitions",
              body: `"Personal Data": information relating to an identified or identifiable natural person.

"Controller": the Client who determines the purposes and means of processing.

"Processor": SA Pilot Training, acting on behalf of the Client.

"Sub-Processor": third parties engaged by SA Pilot Training to process Personal Data in connection with the Services.

"Applicable Law": includes, as applicable, the South African Protection of Personal Information Act (POPIA), EU/UK General Data Protection Regulation (GDPR/UK GDPR), the California Consumer Privacy Act (CCPA/CPRA), the Brazilian LGPD, and any other relevant data protection laws.

"Data Subject": the individual to whom Personal Data relates.

"Security Incident": a confirmed breach of security leading to accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to Personal Data processed by SA Pilot Training.

"SCCs": the EU Standard Contractual Clauses (2021/914, Modules 2 and/or 3, as applicable), including any UK Addendum/IDTA and Swiss addendum where relevant.`,
            },
            {
              title: "2. Roles and Scope",
              body: `The Client is the Controller.
SA Pilot Training acts as a Processor for the limited purpose of providing services under the Agreement (e.g., CRM, website hosting, marketing automation, communication campaigns).
SA Pilot Training shall only process Personal Data in accordance with documented instructions from the Client, unless required by law. Client instructs SA Pilot Training to process Personal Data solely as necessary to provide the Services and as further documented in this DPA and the Agreement. SA Pilot Training will promptly inform Client if, in its opinion, an instruction infringes Applicable Law. Client is responsible for the lawfulness of its instructions and for required notices/consents.`,
            },
            {
              title: "3. Processing Details",
              body: `Subject Matter: processing of Client Personal Data to provide SA Pilot Training services.

Duration: for the term of the Agreement, unless retention is required by law.

Nature and Purpose: storage, transmission, and management of Personal Data for CRM, marketing, communications, and business automation.

Types of Data: contact details, communications, transactional and engagement data, and other data input by the Client.

Categories of Data Subjects: Client's customers, leads, prospects, employees, and contractors as determined by the Client.`,
            },
            {
              title: "4. Security Measures",
              body: `SA Pilot Training shall implement and maintain appropriate technical and organizational measures (TOMs) designed to protect Personal Data, including at a minimum:
(a) access controls (role-based, least-privilege, unique accounts);
(b) authentication (password policies; support for 2FA on staff accounts);
(c) encryption (TLS in transit; encryption at rest as provided by GoHighLevel);
(d) confidentiality obligations for personnel;
(e) logging and monitoring of access;
(f) vulnerability management and patching on a risk-prioritized basis;
(g) business continuity and disaster recovery proportional to the Services;
(h) data minimization and retention controls; and
(i) a documented incident response program.

Security Incident Notice. SA Pilot Training shall notify Client without undue delay and no later than 72 hours after becoming aware of a Security Incident affecting Client Personal Data, and provide information reasonably available for Client to meet its breach-notification obligations.`,
            },
            {
              title: "5. Sub-Processors",
              body: `SA Pilot Training may engage Sub-Processors for delivery of its services, including but not limited to:

GoHighLevel (Zip360) – CRM and automation platform.
Email/SMS communication partners – delivery of client communications.
Payment processors – billing and transaction handling.

SA Pilot Training will ensure each Sub-Processor provides data protection at least equivalent to this DPA.

A list of current Sub-Processors is available upon written request to info@sapilottraining.co.za.

Client consents to SA Pilot Training's use of such Sub-Processors.`,
            },
            {
              title: "6. Data Subject Rights",
              body: `SA Pilot Training will assist the Client in fulfilling obligations to respond to Data Subject requests, including rights of access, correction, deletion, objection, and portability.
Requests may be directed to the Client, and SA Pilot Training shall support with reasonable cooperation.
Data Subject requests sent directly to SA Pilot Training will be forwarded to the Client without undue delay.`,
            },
            {
              title: "7. International Data Transfers",
              body: `Personal Data may be processed in jurisdictions where SA Pilot Training or its Sub-Processors operate, including the United States. Where such processing involves a restricted transfer under Applicable Law, the parties agree the SCCs (2021/914, Module 2 and/or 3 as applicable) are incorporated by reference and apply; for UK transfers, the UK Addendum/IDTA applies; and for Switzerland, the SCCs apply as adapted by the Swiss FDPIC guidance. Where required, SA Pilot Training will execute the SCCs upon Client request.`,
            },
            {
              title: "8. Audits and Compliance",
              body: `Upon written request, SA Pilot Training will make available information reasonably necessary to demonstrate compliance with this DPA.
Once per 12-month period, Client may conduct (at Client's cost) an audit limited to systems and processes relevant to SA Pilot Training's Processing of Client Personal Data, on 30 days' prior written notice, during normal business hours, and without undue disruption.
SA Pilot Training may satisfy audit requests by providing independent third-party audit reports or certifications (where available).
The annual limitation does not apply where required by law or following a verified Security Incident.
Audit findings constitute SA Pilot Training Confidential Information.`,
            },
            {
              title: "9. Return and Deletion of Data",
              body: `Upon termination or expiry of the Services, Client may request a machine-readable export of Personal Data processed by SA Pilot Training.
Within 30 days of termination (or as otherwise required by law), SA Pilot Training will delete Personal Data from active systems and complete scheduled deletion from backups within 90 days thereafter, unless retention is legally required.
Assistance beyond standard export/deletion tooling may incur reasonable fees.`,
            },
            {
              title: "10. Liability",
              body: "Each party's liability under this DPA shall be subject to the limitations of liability set out in the Agreement, except where prohibited by Applicable Law.",
            },
            {
              title: "11. Governing Law",
              body: "This DPA shall be governed by and construed in accordance with the governing law set forth in the Agreement, subject to mandatory data protection law.",
            },
            {
              title: "12. CCPA/CPRA (U.S.)",
              body: `To the extent SA Pilot Training processes Personal Information (as defined by CCPA/CPRA) on behalf of Client, SA Pilot Training acts as a Service Provider/Contractor and shall:
(a) process Personal Information solely to provide the Services and as permitted by CCPA/CPRA;
(b) not sell or share Personal Information;
(c) not retain, use, or disclose Personal Information outside the direct business relationship with Client;
(d) not combine Personal Information received from Client with other data except as permitted by CCPA/CPRA; and
(e) notify Client of any legally binding request for disclosure unless prohibited by law.
SA Pilot Training will provide reasonable assistance for Client to meet its CCPA/CPRA obligations.`,
            },
            {
              title: "13. Contact Information",
              body: `Questions or requests relating to this DPA, Sub-Processors, or Data Subject rights should be directed to:

SA Pilot Training – Data Protection Contact
info@sapilottraining.co.za`,
            },
            {
              title: "14. Order of Precedence; Amendments",
              body: "In the event of conflict between this DPA and the Agreement, this DPA controls to the extent of the conflict regarding Processing of Personal Data. The parties may update this DPA by mutual written agreement or as required by changes in Applicable Law.",
            },
          ].map(section => (
            <div key={section.title} style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 32 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12, color: "#060C18" }}>{section.title}</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, whiteSpace: "pre-line" }}>{section.body}</p>
            </div>
          ))}

          <div style={{ paddingBottom: 16 }}>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75 }}>
              See also:{" "}
              <Link href="/terms" style={{ color: ACCENT, textDecoration: "underline" }}>Terms of Service</Link>
              {" · "}
              <Link href="/refund" style={{ color: ACCENT, textDecoration: "underline" }}>Refund Policy</Link>
              {" · "}
              <Link href="/paia" style={{ color: ACCENT, textDecoration: "underline" }}>PAIA Manual</Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
