import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone number are required.' },
        { status: 400 }
      )
    }

    const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || 'megovista@gmail.com'
    const fromAddress = process.env.RESEND_FROM_EMAIL?.trim() || 'Megovista Inquiries <onboarding@resend.dev>'

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [toEmail],
      replyTo: email,
      subject: `New Consultation Request: ${name} — ${service || 'General Inquiry'}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>New Megovista Consultation Request</title>
          </head>
          <body style="margin: 0; padding: 32px 16px; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
            <div style="max-width: 580px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%); padding: 28px 32px; color: #ffffff;">
                <p style="margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.85; font-weight: 600;">Megovista HR Solutions · Advisory Desk</p>
                <h1 style="margin: 0; font-size: 22px; font-weight: 600; line-height: 1.2;">New Consultation Request</h1>
              </div>

              <!-- Body Details -->
              <div style="padding: 32px;">
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; width: 140px;">Client Name</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 600;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase;">Work Email</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px;">
                      <a href="mailto:${email}" style="color: #1d4ed8; text-decoration: none; font-weight: 500;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase;">Phone Number</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px;">
                      <a href="tel:${phone}" style="color: #0f172a; text-decoration: none; font-weight: 500;">${phone}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase;">Service Scope</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #7c3aed; font-size: 14px; font-weight: 600;">${service || 'General Inquiry'}</td>
                  </tr>
                </table>

                <!-- Requirements Note -->
                <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #1d4ed8; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                  <p style="margin: 0 0 6px 0; color: #64748b; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Team Size & Requirements</p>
                  <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message || 'No additional details provided.'}</p>
                </div>

                <div style="text-align: center; padding-top: 8px;">
                  <a href="mailto:${email}?subject=Megovista%20Consultation%20Follow-up%20-%20${encodeURIComponent(name)}" style="display: inline-block; background: #1d4ed8; color: #ffffff; padding: 12px 24px; border-radius: 9999px; font-size: 13px; font-weight: 600; text-decoration: none;">Reply Directly to ${name}</a>
                </div>
              </div>

              <!-- Footer -->
              <div style="background: #f8fafc; padding: 16px 32px; border-top: 1px solid #f1f5f9; text-align: center;">
                <p style="margin: 0; color: #94a3b8; font-size: 11px;">
                  Megovista HR Solutions · Chennai Headquarters · Statutory Social Security & Enterprise Governance
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('[Resend Error]:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err: any) {
    console.error('[API Route Error]:', err)
    return NextResponse.json(
      { error: err?.message || 'Failed to submit consultation request.' },
      { status: 500 }
    )
  }
}

