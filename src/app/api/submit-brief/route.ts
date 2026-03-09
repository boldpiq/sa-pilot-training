import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, companyName, website, service, message, recaptchaToken } = body

    // Verify reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json({ ok: false, error: "Missing captcha" }, { status: 400 })
    }
    const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    })
    const verifyData = await verifyRes.json()
    if (!verifyData.success) {
      return NextResponse.json({ ok: false, error: "Captcha failed" }, { status: 403 })
    }

    const apiKey = process.env.GHL_PRIVATE_API_KEY
    const locationId = "2YVSGppZ3t1nNSl74HPu"

    if (apiKey) {
      await fetch("https://services.leadconnectorhq.com/contacts/", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "Version": "2021-07-28",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          companyName,
          website,
          source: "Website Brief Form",
          tags: ["website-brief", service].filter(Boolean),
          customFields: [
            { key: "message", field_value: message || "" },
            { key: "service_interest", field_value: service || "" },
          ],
          locationId,
        }),
      })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
