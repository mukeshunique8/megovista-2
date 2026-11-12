"use server"

import { Resend } from "resend"

export type ContactState = {
  status: "idle" | "success" | "error"
  message: string
  errors?: Partial<Record<"fullName" | "company" | "phone" | "email" | "service" | "message", string>>
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[char] ?? char)
  )
}

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const fullName = String(formData.get("fullName") ?? "").trim()
  const company = String(formData.get("company") ?? "").trim()
  const phone = String(formData.get("phone") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const service = String(formData.get("service") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()

  const errors: ContactState["errors"] = {}

  if (fullName.length < 2) errors.fullName = "Please enter your full name."
  if (!email || !isEmail(email)) errors.email = "Please enter a valid email address."
  if (phone && phone.replace(/[^\d]/g, "").length < 7) errors.phone = "Please enter a valid phone number."
  if (message.length < 10) errors.message = "Tell us a little more about your requirement (min. 10 characters)."

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please correct the highlighted fields.", errors }
  }

  const apiKey = process.env.RESEND_API_KEY
  const toAddress = process.env.CONTACT_TO_EMAIL ?? "megovista@gmail.com"
  const fromAddress = process.env.CONTACT_FROM_EMAIL ?? "Megovista Website <onboarding@resend.dev>"

  if (apiKey) {
    try {
      const resend = new Resend(apiKey)

      const safeName = escapeHtml(fullName)
      const safeCompany = escapeHtml(company || "Not provided")
      const safeEmail = escapeHtml(email)
      const safePhone = escapeHtml(phone || "Not provided")
      const safeService = escapeHtml(service || "General Inquiry")
      const safeMessage = escapeHtml(message).replace(/\n/g, "<br />")

      // Branded HTML Template
      const emailHtml = `
        <div style="margin:0;background:#020617;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;color:#f8fafc;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;margin:0 auto;background:#070e1e;border:1px solid rgba(255,255,255,0.1);border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background:#04241b;padding:28px 32px;border-bottom:1px solid rgba(16,185,129,0.3);">
                <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#10b981;font-weight:bold;">MEGOVISTA HR SOLUTIONS</div>
                <div style="margin-top:10px;font-size:24px;line-height:1.2;color:#ffffff;font-weight:bold;">New Diagnostic Enquiry</div>
                <div style="margin-top:6px;font-size:13px;color:#94a3b8;">A prospective client submitted their compliance requirement.</div>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
                  <tr><td style="padding:10px 0;width:30%;font-size:12px;color:#94a3b8;font-weight:bold;text-transform:uppercase;">Lead Name</td><td style="padding:10px 0;font-size:15px;color:#ffffff;font-weight:bold;">${safeName}</td></tr>
                  <tr><td style="padding:10px 0;font-size:12px;color:#94a3b8;font-weight:bold;text-transform:uppercase;">Company</td><td style="padding:10px 0;font-size:15px;color:#ffffff;">${safeCompany}</td></tr>
                  <tr><td style="padding:10px 0;font-size:12px;color:#94a3b8;font-weight:bold;text-transform:uppercase;">Email</td><td style="padding:10px 0;font-size:15px;"><a href="mailto:${safeEmail}" style="color:#10b981;text-decoration:none;">${safeEmail}</a></td></tr>
                  <tr><td style="padding:10px 0;font-size:12px;color:#94a3b8;font-weight:bold;text-transform:uppercase;">Phone</td><td style="padding:10px 0;font-size:15px;color:#ffffff;">${safePhone}</td></tr>
                  <tr><td style="padding:10px 0;font-size:12px;color:#94a3b8;font-weight:bold;text-transform:uppercase;">Service</td><td style="padding:10px 0;font-size:15px;color:#f59e0b;">${safeService}</td></tr>
                </table>
                <div style="margin-top:24px;padding:16px;background:#020617;border-left:4px solid #10b981;border-radius:6px;">
                  <div style="font-size:11px;text-transform:uppercase;color:#94a3b8;font-weight:bold;margin-bottom:6px;">Requirement Details</div>
                  <div style="font-size:14px;line-height:1.6;color:#e2e8f0;">${safeMessage}</div>
                </div>
                <div style="margin-top:24px;font-size:12px;color:#64748b;">
                  Hit Reply to directly answer <strong>${safeName}</strong> at ${safeEmail}.
                </div>
              </td>
            </tr>
          </table>
        </div>
      `

      const { error } = await resend.emails.send({
        from: fromAddress,
        to: [toAddress],
        replyTo: email,
        subject: `New HR enquiry from ${fullName}${company ? ` (${company})` : ""}`,
        html: emailHtml,
        text: `Name: ${fullName}\nCompany: ${company || "—"}\nEmail: ${email}\nPhone: ${phone || "—"}\nService: ${service || "—"}\n\nMessage:\n${message}`,
      })

      if (error) {
        console.error("Resend error:", error)
        return { status: "error", message: "Failed to send enquiry. Please contact us via WhatsApp." }
      }
    } catch (err) {
      console.error("Contact submission error:", err)
      return { status: "error", message: "Failed to send enquiry. Please contact us via WhatsApp." }
    }
  }

  return {
    status: "success",
    message: `Thank you, ${fullName.split(" ")[0]}! We have received your enquiry and our team will get in touch shortly.`,
  }
}
