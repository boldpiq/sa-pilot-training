"use client"
import Link from "next/link"
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

export default function TermsPage() {
  return (
    <main style={{ background: BG, color: "#fff", minHeight: "100vh" }}>
      <section style={{ padding: "clamp(100px, 14vw, 140px) clamp(20px, 4vw, 48px) clamp(60px, 8vw, 100px)", maxWidth: 860, margin: "0 auto" }}>
        <ScrollReveal effect="fade-up">
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 32 }}>
            <span style={{ width: 32, height: 1, background: ACCENT, flexShrink: 0 }} />
            <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED }}>Legal</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 80px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: 16 }}>
            Terms of<br /><span style={{ color: ACCENT }}>Service</span>
          </h1>
          <p style={{ color: MUTED, fontSize: 13, marginBottom: 8, opacity: 0.6 }}>www.boldpiq.com/terms</p>
          <p style={{ color: MUTED, fontSize: 14, marginBottom: 16 }}>Effective Date: 05 September 2025 · Last Updated: 05 September 2025</p>
          <p style={{ color: MUTED, fontSize: 14, marginBottom: 48, lineHeight: 1.65 }}>
            1. TERMS OF SERVICE | 2. PRIVACY POLICY | 3. POPIA | 4. GDPR{"\n"}
            At Boldpiq, we prioritize transparency and compliance. This document serves as a comprehensive notice regarding our Terms of Service, Privacy Policy, and POPIA Compliance. By accessing our website, www.boldpiq.com, and utilizing our services, you agree to the terms outlined below.
          </p>
        </ScrollReveal>

        <LegalNav />

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>

            {/* ── TERMS OF SERVICE ── */}
            <div style={{ paddingBottom: 16 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 32, color: "#fff" }}>Terms of Service (TOS)</h2>
              <p style={{ ...BodyStyle, marginBottom: 32 }}>These Terms of Service ("TOS") govern your access to and use of services provided by Cinnimon t/a BoldPiq (Reg. 2015/193038/07) ("BoldPiq," "we," "our," or "us"). By purchasing or using our services, you ("Client") agree to these terms. We process your personal data in accordance with our Privacy Policy.</p>
            </div>

            {[
              {
                title: "1. Definitions",
                body: `1.1. Client/You: The person or entity engaging BoldPiq for services.
1.2. Services: All offerings by BoldPiq, including but not limited to website design & development, branding & identity, e-commerce, digital marketing, video production, consulting, and future services.
1.3. Deliverables: Work product specified in a Statement of Work (SOW), Order Form, or Proposal.
1.4. Third-Party Tools: External platforms/software used in providing services (e.g., GoHighLevel, Canva, Cloudflare, Hostinger, Microsoft, Google, OpenAI).
1.5. Business Day: A day other than a Saturday, Sunday, or South African public holiday.
1.6. Consumer: A natural person (or qualifying juristic person) to whom the CPA/ECTA protections apply.
1.7. Applicable Laws: The Consumer Protection Act, 2008 (CPA), Electronic Communications and Transactions Act, 2002 (ECTA), Protection of Personal Information Act, 2013 (POPIA), UK GDPR/Data Protection Act 2018, and CCPA/CPRA (where applicable).`,
              },
              {
                title: "2. Scope of Services",
                body: `2.1. Services and Deliverables: Defined in a signed SOW, Proposal, or Order Form.
2.2. Change Orders: Any deviation (scope, timeline, budget) requires a signed Change Order with updated terms and fees. Clients must review and respond to proposed Change Orders within 5 business days; failure to respond may delay the project.
2.3. Dependencies & Delays: Timelines and pricing depend on timely Client inputs, approvals, and access to Third-Party Tools. Milestones may extend and additional fees (per rate card) may apply for Client-caused delays after written notice.
2.4. Pause for No-Response: If Client does not respond to a Change Order within 5 Business Days, BoldPiq may pause affected workstreams without breach.
2.5. Third-Party Tools Authorisation: Client authorises BoldPiq to use Third-Party Tools (e.g., hosting, CRM, email, AI APIs) to perform the Services; Client remains responsible for any licences not expressly included in the SOW.`,
              },
              {
                title: "3. Fees, Payment & Taxes",
                body: `3.1. Deposit: 50% non-refundable deposit required before work begins.
3.2. Balance: Payable upon project completion or milestone delivery, unless otherwise agreed.
3.3. Late Payments: Accrue interest at 2% per month or the prime lending rate plus 2% (whichever is higher), not exceeding the maximum lawful rate under South African law, including the National Credit Act. Services may be suspended until accounts are current.
3.4. Taxes/FX: Fees exclude VAT, sales tax, duties, and bank/FX charges. Client bears responsibility.
3.5. Currencies: Default ZAR; international Clients may be billed in USD/GBP/EUR at BoldPiq's discretion, with the applicable exchange rate communicated at the time of billing.
3.6. Expenses: Any reimbursable expenses (e.g., travel, third-party licensing fees) must be pre-approved in writing via the SOW or Change Order and will be invoiced with supporting documentation.
3.7. Third-Party Tool Costs: Client is responsible for any additional licensing or subscription fees for Third-Party Tools required for the Services, unless otherwise specified in the SOW.
3.8. Suspension & Reinstatement: If an invoice is overdue by 7 days, BoldPiq may suspend Services/platform access until payment clears; reinstatement may incur a reasonable reactivation fee.
3.9. Chargebacks/Payment Reversals: Client remains liable for reversed payments and associated processor/bank fees and reasonable collection costs, subject to Applicable Laws.
3.10. Interest Compliance: Any interest/charges will comply with lawful caps (including the Prescribed Rate of Interest Act and, where applicable, the NCA).`,
              },
              {
                title: "4. Refunds & Cancellations",
                body: `4.1. Policy: Refunds and cancellations are governed by the following terms, which constitute BoldPiq's Refund & Cancellation Policy. In case of conflict with any external policy, these terms prevail.

Non-Refundable Deposits: The 50% deposit is non-refundable unless BoldPiq fails to deliver the agreed Services due to its sole fault, in which case a prorated refund may be issued at BoldPiq's discretion. For qualifying electronic transactions under ECTA s44, if you cancel within the statutory 7-day cooling-off period and services have not begun and are not custom, the deposit will be refunded.

Milestone Payments: Payments for completed milestones are non-refundable unless Deliverables materially fail to meet the SOW specifications, subject to the warranty in Section 7.2.

Cancellation by Client: Client may cancel within 7 days of entering this agreement, unless services have begun or are custom, per Section 4.2. Outside this period, cancellation requires written notice to support@boldpiq.com, with Client liable for: (a) work performed to date, (b) non-cancellable third-party commitments (e.g., licenses, hosting), and (c) a 10% administrative close-out fee on the remaining project value, unless otherwise specified in the SOW.

Cancellation by BoldPiq: BoldPiq may cancel for Client's material breach (e.g., non-payment, failure to provide materials) after 10 business days' notice to cure, with Client liable for work performed and commitments.

Prorated Refunds: Refunds for incomplete work are at BoldPiq's discretion, excluding non-refundable deposits and commitments.

Process: Refund requests must be submitted to support@boldpiq.com with details of the issue. BoldPiq will respond within 5 business days.

4.2. Statutory Cooling-Off (Electronic Transactions): Clients may cancel within 7 days of entering this agreement, unless services have begun or are custom, in accordance with ECTA s44. This cooling-off right applies to qualifying electronic transactions with Consumers, subject to statutory exceptions.

4.3. Kill Fee (Projects): Outside the statutory cooling-off period, Client cancellation after kickoff requires payment for (a) work performed to date, (b) non-cancellable third-party commitments, plus (c) a 10% administrative close-out fee on the remaining project value, unless the SOW states otherwise.`,
              },
              {
                title: "5. Client Responsibilities",
                body: `5.1. Materials: Provide accurate and complete materials on time.
5.2. Authorized Contact: Designate one authorized contact to give approvals.
5.3. Review: Review Deliverables within 5 business days of delivery. Silence beyond this period counts as acceptance.
5.4. Rights to Materials: Ensure rights to use all materials supplied to BoldPiq and provide evidence of such rights upon request. BoldPiq may suspend work if supplied materials infringe third-party rights.
5.5. Legal Compliance: Comply with applicable laws in using the Services and Deliverables, including obtaining valid data subject consents for any personal data provided to BoldPiq for processing (e.g., for marketing or data sharing purposes) in accordance with POPIA, UK GDPR, and CCPA/CPRA.
5.6. Data Storage: BoldPiq stores materials provided by the Client and Deliverables on the GoHighLevel platform, a third-party service. BoldPiq does not maintain separate backups of such materials or Deliverables. Clients are responsible for maintaining their own backups to protect against data loss.
5.7. Direct Marketing Proof: Where Client provides personal data for marketing, Client warrants lawful grounds (e.g., POPIA s69 consent or qualifying relationship), maintains proof of consent and suppression lists, and honours opt-outs; BoldPiq may refuse non-compliant campaigns.
5.8. Data Rights Cooperation: Client will reasonably assist BoldPiq to respond to data-subject requests/regulatory queries within required timeframes and bear its own costs.
5.9. Acceptable Use: Client will not use Services/Deliverables to violate law, infringe IP, distribute malware, or send unsolicited electronic communications without lawful grounds. BoldPiq may suspend activity reasonably believed to breach this clause and will notify Client with steps to remediate.`,
              },
              {
                title: "6. Intellectual Property",
                body: `6.1. Transfer: Full ownership of custom Deliverables passes to Client only upon full payment.
6.2. Exclusions: BoldPiq pre-existing IP, reusable frameworks, third-party components, and open-source code remain outside transfer.
6.3. Third-Party Licenses: Client is responsible for obtaining and maintaining any licenses required for third-party components (e.g., stock images, fonts, software) not provided by BoldPiq. Failure to secure required licenses may result in suspension of services or termination.
6.4. Portfolio License: BoldPiq may showcase non-confidential Deliverables (as defined in the SOW) in its portfolio unless agreed otherwise in writing. BoldPiq will remove showcased Deliverables upon Client's written request.
6.5. Background/Tools: BoldPiq retains all rights in its methodologies, templates, libraries (including AI prompt libraries), and tooling; Client grants a non-exclusive licence to use Client Materials for the project term.
6.6. AI-Assisted Outputs: Where Deliverables include AI-assisted content, BoldPiq will curate/review for the agreed scope. Client acknowledges AI outputs can contain errors or third-party content and agrees to final legal/regulatory review before production use (this does not limit the warranty in 7.2 for scope-related defects).`,
              },
              {
                title: "7. Acceptance & Warranty",
                body: `7.1. Acceptance: Deliverables are deemed accepted on written sign-off or after 5 business days with no response.
7.2. Warranty: 30-day correction window for material defects related to the scope defined in the SOW.
7.3. Exclusions: Excludes third-party outages, misuse, or Client modifications.
7.4. CPA s49 Attention: Clauses limiting liability (Section 12) or imposing indemnities (Section 11) will be conspicuously drawn to Consumers' attention and acknowledged (e.g., via tick-box or initial) before conclusion, in line with CPA s49.`,
              },
              {
                title: "8. Support & Maintenance",
                body: `8.1. Scope: Not included unless purchased separately under a Maintenance Agreement, which may include Service Level Agreements (SLAs) for response times (e.g., 24 hours for critical issues), uptime (e.g., 99% for hosted elements), and support timelines.
8.2. Post-Delivery Inquiries: Basic inquiries (e.g., usage clarification) may be provided at BoldPiq's discretion for up to 14 days after acceptance, but ongoing support requires a separate agreement.
8.3. Third-Party SLAs: Availability/response times for components hosted on Third-Party Tools are subject to those providers' SLAs; BoldPiq will use reasonable efforts to escalate and mitigate third-party issues.`,
              },
              {
                title: "9. Termination",
                body: `9.1. Breach: Either party may terminate for material breach with 10 business days' notice to cure.
9.2. Payment Obligations: Upon termination, Client must pay for work completed, approved expenses, and any non-cancellable commitments.
9.3. Deliverables: BoldPiq will provide in-progress Deliverables once payments are settled.
9.4. Survival: Sections 6 (Intellectual Property), 10 (Compliance & Data Protection), 11 (Indemnities), 12 (Limitation of Liability), 15 (Confidentiality), and 14 (Dispute Resolution & Governing Law) survive termination.
9.5. Insolvency: Either party may terminate immediately upon the other's liquidation, business rescue, or insolvency event, subject to 9.2.`,
              },
              {
                title: "10. Compliance & Data Protection",
                body: `10.1. Applicable Laws: Each party must comply with applicable data protection laws, including South Africa's Protection of Personal Information Act (POPIA), UK GDPR and Data Protection Act 2018, and California's Consumer Privacy Act (CCPA/CPRA).
10.2. Privacy Policy: BoldPiq's processing of personal data is detailed in its Privacy Policy and Cookie Policy. If BoldPiq processes Client Personal Data as a processor, the Data Processing Addendum (DPA) applies.
10.3. Data Processing Addendum: If BoldPiq processes Client personal data as a processor, the Data Processing Addendum (DPA), available at dpa or via email request to support@boldpiq.com, applies, including provisions for sub-processors, security measures, and data subject rights.
10.4. Sub-Processors: BoldPiq may use sub-processors (e.g., Third-Party Tools) with Client consent as specified in the DPA.
10.5. Security Measures: BoldPiq will implement reasonable technical and organizational measures to protect personal data, including adherence to data minimization principles by collecting only necessary data, in accordance with POPIA, UK GDPR, and CCPA/CPRA.
10.6. Breach Notification:
(a) POPIA: If BoldPiq is the responsible party, it will notify the Information Regulator and affected data subjects as soon as reasonably possible after becoming aware, considering law-enforcement needs; if BoldPiq is an operator, it will notify the Client immediately upon becoming aware.
(b) UK GDPR: Controllers must notify the ICO without undue delay and, where feasible, within 72 hours; processors must notify controllers without undue delay.
(c) California: Notices must be made in the most expedient time possible and without unreasonable delay, subject to law-enforcement delay allowances.
10.7. Data Transfers: For international transfers—(a) UK data: use the UK International Data Transfer Agreement (IDTA) or UK Addendum; (b) EU/EEA data: use EU Standard Contractual Clauses (Commission Implementing Decision (EU) 2021/914); (c) POPIA: apply appropriate safeguards for cross-border transfers to sub-processors.
10.8. Data Subject Requests: BoldPiq will assist Client with data subject requests (e.g., access, deletion) as required by POPIA, UK GDPR, and CCPA/CPRA, subject to reasonable costs.
10.9. Client Compliance: Client must not use Services in violation of applicable marketing, consumer, or privacy laws, including direct marketing regulations under POPIA, UK GDPR, and anti-spam laws such as the US CAN-SPAM Act. BoldPiq does not sell personal data as defined under CCPA/CPRA.
10.10. Cookie Policy: Use of cookies and similar technologies on our website is governed by our Cookie Policy, available at www.boldpiq.com/cookie-policy or via email request to support@boldpiq.com, in compliance with POPIA, UK GDPR ePrivacy Directive, and CCPA/CPRA.
10.11. Sub-Processor Transparency: Where BoldPiq acts as processor, it will give advance notice of material sub-processor changes and allow reasonable, documented objections related to data-protection risk.
10.12. Marketing Records: Consent/opt-out logs may be retained in Third-Party Tools for audit, subject to the DPA and agreed retention limits.`,
              },
              {
                title: "11. Indemnities",
                body: `11.1. Client Indemnity: Client indemnifies BoldPiq against claims arising from Client content, misuse, or unlawful activity. Client must provide prompt notice of claims and allow BoldPiq to control the defense.
11.2. BoldPiq Indemnity: BoldPiq indemnifies Client against third-party IP infringement in Deliverables (excluding Client-provided content or third-party components). BoldPiq must provide prompt notice and control the defense.
11.3. Process: The indemnified party must promptly notify the other of a claim and reasonably cooperate at the indemnifying party's expense; failure to notify only relieves obligations to the extent of prejudice.`,
              },
              {
                title: "12. Limitation of Liability",
                body: `12.1. General Cap: BoldPiq's total liability in any 12-month period preceding a claim is capped at fees paid by Client in that period.
12.2. Super-Cap: For data protection breaches or IP indemnity claims, liability is capped at 2× fees paid in that period.
12.3. Exclusions: Excludes liability for death/personal injury caused by negligence or fraud.
12.4. No Indirect Damages: No liability for indirect, incidental, or consequential damages, including loss of profits, data, or business opportunities.
12.5. No Insurance: BoldPiq does not currently maintain professional liability insurance. Our liability remains limited to the amounts specified in this Section 12. Clients should be aware that risks beyond these caps are not covered by BoldPiq. BoldPiq intends to obtain professional liability insurance as the business grows and becomes profitable.
12.6. Consumer Protections: Nothing in these Terms limits non-waivable Consumer rights under CPA/ECTA/POPIA where applicable.`,
              },
              {
                title: "13. Force Majeure",
                body: `13.1. Events: No liability for delays or failures due to causes beyond reasonable control, including internet/power outages, strikes, pandemics, cyberattacks, or government actions. The affected party must notify the other in writing within 5 business days and use reasonable efforts to mitigate the impact.
13.2. Termination: If a force majeure event exceeds 30 days, either party may terminate the agreement with written notice, subject to payment for completed work.
13.3. Third-Party Platform Dependency: Extended outages/deprecations or material changes in Third-Party Tools (e.g., API limits, AI API usage restrictions such as OpenAI rate caps or model deprecations) are treated as Force Majeure to the extent beyond BoldPiq's reasonable control; BoldPiq will propose commercially reasonable workarounds or Change Orders.
13.4. Continuity of Service: If BoldPiq ceases operations, Clients will receive at least 30 days' prior written notice to export all websites, funnels, and associated assets. After this period, Clients may choose to (a) contract directly with GoHighLevel on their standard terms (pricing set by GoHighLevel), or (b) migrate to another white-label agency offering comparable pricing. If BoldPiq is sold, all client contracts, assets, and rights may be transferred to the acquiring agency, which will assume responsibility for ongoing services. BoldPiq acknowledges its responsibility to Clients and will always act in good faith to ensure a commercially reasonable transition.`,
              },
              {
                title: "14. Dispute Resolution & Governing Law",
                body: `14.1. Mediation First: Parties agree to attempt mediation in Johannesburg (costs shared equally) or virtually before further action, using a mutually agreed mediator or one appointed by the Arbitration Foundation of Southern Africa (AFSA).
14.2. Arbitration: If mediation fails, disputes may be resolved through binding arbitration under AFSA rules, seated in South Africa, conducted in Johannesburg or virtually. Each party will be responsible for its own legal and other costs, and the arbitrator's fees will be allocated as determined in the award. Arbitration, if pursued, is binding on both parties.
14.3. Governing Law: These Terms are governed by the laws of South Africa. For international Clients, mandatory consumer protection laws may apply, but jurisdiction remains South African courts unless otherwise specified in writing.
14.4. CPA Notice: Where the CPA applies, arbitration is optional and does not preclude a Consumer's right to use a tribunal, ombud, or court as permitted by statute.`,
              },
              {
                title: "15. Confidentiality",
                body: `15.1. Obligations: Each party agrees to keep confidential all non-public information disclosed by the other party during the term of the agreement and for 2 years thereafter, except as required by law, disclosed with written consent, or ordered by a court. Confidential information excludes publicly available data or independently developed information.
15.2. Remedies: Breaches may result in injunctive relief.`,
              },
              {
                title: "16. Modifications to Terms",
                body: `16.1. Updates: BoldPiq may update these Terms periodically. Material changes will be posted on our website with a new "Last Updated" date and notified to active Clients via email. Continued use of Services constitutes acceptance.
16.2. Change of Control: If BoldPiq undergoes a merger, acquisition, or sale of substantially all assets, it may assign these Terms to the successor entity upon notice to Client. Client may not unreasonably withhold consent to assignment where such consent is required by law.`,
              },
              {
                title: "17. General Provisions",
                body: `17.1. Entire Agreement: These Terms, together with any SOW, Proposal, Order Form, Change Orders, and incorporated policies (e.g., Refund Policy, DPA), constitute the entire agreement between the parties and supersede all prior understandings.
17.2. Severability: If any provision is held invalid or unenforceable, the remaining provisions remain in full force.
17.3. Waiver: No waiver of any term is effective unless in writing and signed by the waiving party.
17.4. Assignment: Neither party may assign this agreement without the other's written consent, except in the case of a merger or acquisition. BoldPiq will provide notice to Client of any such assignment.
17.5. Notices: All notices must be in writing and sent via email (to support@boldpiq.com for BoldPiq or the Client's contact details in the SOW/Order Form) or registered mail to the addresses provided.
17.6. Electronic Communications & Signatures: Electronic signatures and click-wrap/tick-box acceptance have legal force under ECTA s13, except where an advanced electronic signature is legally required.
17.7. No Agency: BoldPiq acts as an independent contractor; nothing creates a partnership, joint venture, or employment relationship.
17.8. Consumer-Specific Terms: If any Consumer-specific clause is inapplicable to a transaction, it is severed without affecting the remainder.`,
              },
              {
                title: "18. Contact",
                body: `For questions, contact us at:\nEmail: support@boldpiq.com\nWebsite: www.boldpiq.com\nPhysical Address: No. 2 Chestnut Street, Thornton, 7460, South Africa`,
              },
            ].map(section => (
              <div key={section.title} style={SectionStyle}>
                <h2 style={H2Style}>{section.title}</h2>
                <p style={BodyStyle}>{section.body}</p>
              </div>
            ))}

            {/* ── PRIVACY POLICY ── */}
            <div style={{ paddingTop: 24, paddingBottom: 16 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 24, color: "#fff" }}>Privacy Policy</h2>
              <p style={{ ...BodyStyle, marginBottom: 24 }}>BoldPiq ("we," "our," or "us") is committed to protecting the privacy of our clients and website users ("you" or "your"). This Privacy Policy explains how we collect, use, store, and share personal data in compliance with the Protection of Personal Information Act (POPIA) of South Africa, the General Data Protection Regulation (GDPR/UK GDPR), the California Consumer Privacy Act (CCPA/CPRA), the Brazilian LGPD, and other applicable privacy laws.</p>
            </div>

            {[
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

To exercise any of these rights, please contact us at support@boldpiq.com.`,
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
                body: "For any privacy-related queries or to exercise your rights, please contact our Information Officer at:\nEmail: support@boldpiq.com\nWebsite: www.boldpiq.com",
              },
            ].map(section => (
              <div key={"pp-" + section.title} style={SectionStyle}>
                <h2 style={H2Style}>{section.title}</h2>
                <p style={BodyStyle}>{section.body}</p>
              </div>
            ))}

            {/* ── POPIA & GDPR ── */}
            <div style={{ paddingTop: 24, paddingBottom: 16 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 16, color: "#fff" }}>POPIA and GDPR/UK GDPR, and U.S. Privacy Compliance</h2>
            </div>

            {[
              {
                title: "1. Introduction",
                body: "BoldPiq is committed to full compliance with the Protection of Personal Information Act (POPIA) of South Africa, the General Data Protection Regulation (GDPR) and UK GDPR, and applicable U.S. privacy laws including the California Consumer Privacy Act (CCPA/CPRA). This section outlines our obligations and your rights under these frameworks.",
              },
              {
                title: "2. Information Officer",
                body: "BoldPiq has appointed an Information Officer responsible for ensuring compliance with POPIA. The Information Officer can be contacted at support@boldpiq.com.",
              },
              {
                title: "3. Lawful Processing",
                body: `We process personal information only when at least one of the following conditions is met:

The data subject has given consent.
Processing is necessary to carry out a contract.
Processing complies with a legal obligation.
Processing protects the legitimate interests of the data subject.
Processing is necessary for the proper performance of a public law duty.
Processing is necessary for pursuing BoldPiq's legitimate interests, except where those interests are overridden by the rights of the data subject.`,
              },
              {
                title: "4. Special Personal Information",
                body: "BoldPiq does not process special categories of personal information (e.g., health data, biometric data, race, religion) unless legally required or with explicit consent.",
              },
              {
                title: "5. Direct Marketing",
                body: "We only conduct electronic direct marketing with prior consent from the data subject or where permitted under POPIA's 'opt-out' provisions for existing clients. All marketing communications include an easy opt-out mechanism. We honor all opt-out requests promptly.",
              },
              {
                title: "6. Transborder Information Flows",
                body: "When transferring personal information outside South Africa, BoldPiq ensures the receiving country or organization provides adequate protection equivalent to POPIA requirements, or obtains consent, or applies appropriate safeguards such as standard contractual clauses.",
              },
              {
                title: "7. GDPR / UK GDPR Compliance",
                body: `For individuals in the EU or UK, we process personal data in compliance with GDPR and UK GDPR. Your rights include:

Right to be informed about data collection and use.
Right of access to your personal data.
Right to rectification of inaccurate data.
Right to erasure ("right to be forgotten").
Right to restriction of processing.
Right to data portability.
Right to object to processing.
Rights related to automated decision-making and profiling.

To exercise these rights, contact support@boldpiq.com. You may also lodge a complaint with your local data protection authority.`,
              },
              {
                title: "8. U.S. Privacy Compliance (CCPA/CPRA)",
                body: `For California residents, we comply with the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA). Your rights include:

Right to know what personal information is collected, used, shared, or sold.
Right to delete personal information.
Right to opt-out of the sale or sharing of personal information (we do not sell personal data).
Right to non-discrimination for exercising your privacy rights.
Right to correct inaccurate personal information.
Right to limit the use of sensitive personal information.

To submit a request, contact support@boldpiq.com.`,
              },
              {
                title: "9. Data Minimization",
                body: "We only collect personal information that is adequate, relevant, and limited to what is necessary for the specified purpose of processing.",
              },
              {
                title: "10. Accuracy",
                body: "We take reasonable steps to ensure personal data is accurate, complete, and kept up to date. Clients may request corrections at any time.",
              },
              {
                title: "11. Storage Limitation",
                body: "Personal data is not retained longer than necessary for the purposes for which it was collected. We have data retention schedules in place to ensure compliance.",
              },
              {
                title: "12. Data Security",
                body: "We apply appropriate technical and organizational measures to protect personal data against unauthorized access, loss, alteration, or disclosure. This includes encryption, secure servers, access controls, and staff training.",
              },
              {
                title: "13. Breach Notification",
                body: `In the event of a personal data breach:

Under POPIA, we will notify the Information Regulator and affected data subjects as soon as reasonably possible.
Under GDPR/UK GDPR, we will notify the relevant supervisory authority within 72 hours and affected individuals without undue delay where required.
Under CCPA/CPRA, we will notify affected California residents in the most expedient time possible.`,
              },
              {
                title: "14. Complaints",
                body: `If you believe your personal information has been processed unlawfully, you may:

Contact our Information Officer at support@boldpiq.com.
Lodge a complaint with the Information Regulator of South Africa (for POPIA).
Lodge a complaint with your national data protection authority (for GDPR/UK GDPR).
Contact the California Attorney General's office (for CCPA/CPRA).`,
              },
              {
                title: "15. Contact for Privacy & Compliance",
                body: "For all privacy, POPIA, GDPR, or U.S. privacy-related queries:\nEmail: support@boldpiq.com\nWebsite: www.boldpiq.com",
              },
            ].map(section => (
              <div key={"popia-" + section.title} style={SectionStyle}>
                <h2 style={H2Style}>{section.title}</h2>
                <p style={BodyStyle}>{section.body}</p>
              </div>
            ))}

            {/* ── COOKIE POLICY ── */}
            <div style={{ paddingTop: 24, paddingBottom: 16 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 16, color: "#fff" }}>Cookie Policy</h2>
            </div>

            {[
              {
                title: "1. What Are Cookies",
                body: "Cookies are small text files placed on your device when you visit a website. They help websites function efficiently and provide information to website owners. We use cookies in accordance with POPIA, the GDPR/UK GDPR ePrivacy Directive, and CCPA/CPRA.",
              },
              {
                title: "2. Types of Cookies We Use",
                body: `Strictly Necessary Cookies – Essential for the website to function. These cannot be disabled.

Performance/Analytics Cookies – Help us understand how visitors interact with our website (e.g., page views, traffic sources). We use privacy-first analytics tools that minimize personal data collection.

Functional Cookies – Allow the website to remember your preferences (e.g., language, region).

Marketing Cookies – Used to deliver relevant content and advertisements. We use these only with your consent.`,
              },
              {
                title: "3. Third-Party Cookies",
                body: "Third-party services integrated into our website (e.g., GoHighLevel chat widget, social media embeds) may set their own cookies. We do not control these cookies and recommend reviewing the respective privacy policies of these services.",
              },
              {
                title: "4. Managing Cookies",
                body: `You can control and manage cookies through your browser settings. Most browsers allow you to:

View cookies stored on your device.
Delete all or specific cookies.
Block cookies from specific websites.
Block third-party cookies.
Clear all cookies when you close your browser.

Please note that disabling certain cookies may impact the functionality of our website.`,
              },
              {
                title: "5. Consent",
                body: "Where required by law (e.g., GDPR/UK GDPR ePrivacy Directive, CCPA/CPRA), we obtain your consent before placing non-essential cookies on your device. You may withdraw your consent at any time by adjusting your browser settings or contacting us.",
              },
              {
                title: "6. Updates to This Policy",
                body: `We may update our Cookie Policy from time to time to reflect changes in technology, law, or our practices. Any updates will be posted here with a revised "Last Updated" date.`,
              },
              {
                title: "7. Contact",
                body: "For any questions or concerns regarding these Terms of Service, Privacy Policy, or our compliance with POPIA, GDPR/UK GDPR, or applicable U.S. privacy laws, please contact us at:\nEmail: support@boldpiq.com\nWebsite: www.boldpiq.com",
              },
            ].map(section => (
              <div key={"cookie-" + section.title} style={SectionStyle}>
                <h2 style={H2Style}>{section.title}</h2>
                <p style={BodyStyle}>{section.body}</p>
              </div>
            ))}

            {/* ── OFFICIAL SOURCES ── */}
            <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 32 }}>
              <h2 style={{ ...H2Style, fontSize: 22, fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 24 }}>Official Sources (Verified)</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  {
                    region: "South Africa (POPIA)",
                    links: [
                      { label: "Protection of Personal Information Act (POPIA)", href: "https://www.gov.za/documents/protection-personal-information-act" },
                      { label: "Consumer Protection Act (CPA)", href: "https://www.gov.za/documents/consumer-protection-act" },
                      { label: "Electronic Communications and Transactions Act (ECTA)", href: "https://www.gov.za/documents/electronic-communications-and-transactions-act" },
                      { label: "National Credit Act (NCA)", href: "https://www.gov.za/documents/national-credit-act" },
                      { label: "Information Regulator (South Africa)", href: "https://inforegulator.org.za/" },
                    ],
                  },
                  {
                    region: "European Union (GDPR)",
                    links: [
                      { label: "Official GDPR Text (EUR-Lex)", href: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
                      { label: "European Data Protection Board (EDPB)", href: "https://edpb.europa.eu/" },
                    ],
                  },
                  {
                    region: "United Kingdom (UK GDPR & ICO)",
                    links: [
                      { label: "UK GDPR Guidance & Resources (ICO)", href: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/" },
                      { label: "ICO Main Website", href: "https://ico.org.uk/" },
                    ],
                  },
                  {
                    region: "United States",
                    links: [
                      { label: "California Consumer Privacy Act (CCPA)", href: "https://oag.ca.gov/privacy/ccpa" },
                      { label: "California Privacy Protection Agency (CPPA)", href: "https://cppa.ca.gov/" },
                      { label: "CCPA/CPRA Regulations – CPPA", href: "https://cppa.ca.gov/regulations/" },
                      { label: "California Civil Code, Title 1.81.5", href: "https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&part=4.&title=1.81.5" },
                      { label: "CAN-SPAM Act Compliance Guide (FTC)", href: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" },
                      { label: "COPPA (FTC)", href: "https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa" },
                      { label: "Colorado Privacy Act – Signed Bill (SB21-190)", href: "https://leg.colorado.gov/sites/default/files/2021a_190_signed.pdf" },
                      { label: "Colorado Privacy Act Rules (4 CCR 904-3)", href: "https://www.coloradosos.gov/CCR/DisplayRule.do?action=ruleinfo&agencyID=11&ruleId=3396&seriesNum=4+CCR+904-3" },
                      { label: "Colorado Revised Statutes Title 6", href: "https://leg.colorado.gov/sites/default/files/images/olls/crs2024-title-06.pdf" },
                    ],
                  },
                  {
                    region: "International Standards",
                    links: [
                      { label: "OECD Privacy Guidelines", href: "https://www.oecd.org/sti/ieconomy/privacy.htm" },
                      { label: "ISO/IEC 27001 (Information Security Management)", href: "https://www.iso.org/isoiec-27001-information-security.html" },
                      { label: "GoHighLevel Terms of Service", href: "https://www.gohighlevel.com/terms-of-service" },
                    ],
                  },
                ].map(group => (
                  <div key={group.region}>
                    <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: ACCENT, marginBottom: 10 }}>{group.region}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {group.links.map(l => (
                        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" style={{ color: MUTED, fontSize: 14, textDecoration: "none", borderBottom: "1px solid transparent" }}
                          onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                          onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                        >
                          → {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ paddingBottom: 16 }}>
              <p style={{ ...BodyStyle, fontSize: 14, marginBottom: 24 }}>
                By accessing or using our Site or services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service, our Privacy Policy, our Cookie Policy, and our{" "}
                <Link href="/dpa" style={{ color: ACCENT, textDecoration: "underline" }}>Data Processing Addendum (DPA)</Link>
                , including our compliance obligations under POPIA, GDPR/UK GDPR, CCPA/CPRA, and other applicable privacy regulations.
              </p>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75 }}>
                See also:{" "}
                <Link href="/refund" style={{ color: ACCENT, textDecoration: "underline" }}>Refund &amp; Cancellation Policy</Link>
                {" · "}
                <Link href="/paia" style={{ color: ACCENT, textDecoration: "underline" }}>PAIA Manual</Link>
                {" · "}
                <Link href="/dpa" style={{ color: ACCENT, textDecoration: "underline" }}>Data Processing Agreement</Link>
              </p>
            </div>

          </div>
      </section>
      <Footer />
    </main>
  )
}
