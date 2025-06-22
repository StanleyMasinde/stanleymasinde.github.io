import nodemailer from 'nodemailer'

const mailer = nodemailer.createTransport({
	host: 'localhost',
	port: 1025,
	secure: false, // No TLS for local dev
	auth: {
	},     // No auth needed
})

export async function handleContactForm(name: string, email: string, message: string) {
	await mailer.sendMail({
		from: '"Contact Form" <contact@stanleymasinde.com>',
		to: 'hello@stanleymasinde.com',
		subject: 'New contact message',
		html: buildContactEmail({ name, email, message })
	})
}


function buildContactEmail({
	name,
	email,
	message,
}: {
	name: string
	email: string
	message: string
}) {
	return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light dark" />
  <title>New Contact Message</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    @media (prefers-color-scheme: dark) {
      .email-container { background-color: #1f2937 !important; }
      .email-card { background-color: #374151 !important; border-color: #4b5563 !important; }
      .email-text { color: #f9fafb !important; }
      .email-muted { color: #9ca3af !important; }
      .email-footer { background-color: #4b5563 !important; }
      .info-card { background-color: #4b5563 !important; }
      .info-label { color: #d1d5db !important; }
      .email-link-dark { background-color: rgba(15, 118, 110, 0.3) !important; color: #5eead4 !important; }
    }
    @media only screen and (max-width: 600px) {
      .email-container { padding: 1rem !important; }
      .email-header { padding: 1.25rem !important; }
      .email-content { padding: 1.25rem !important; }
      .email-footer { padding: 0.75rem 1.25rem !important; }
      .info-table td { display: block !important; width: 100% !important; padding: 0.25rem 0 !important; }
      .info-label { font-weight: 600 !important; margin-bottom: 0.25rem !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div class="email-container" style="min-height: 100vh; background-color: #f8fafc; padding: 2rem;">
    <div class="email-card" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); overflow: hidden; border: 1px solid #e2e8f0;">
      
      <!-- Header -->
      <header class="email-header" style="background: linear-gradient(135deg, #0f766e 0%, #0d9488 100%); padding: 2rem; position: relative;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div style="width: 40px; height: 40px; background-color: rgba(255, 255, 255, 0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem;">
            📧
          </div>
          <div>
            <h1 style="margin: 0; font-size: 1.5rem; font-weight: 600; color: #ffffff; letter-spacing: -0.025em;">New Contact Message</h1>
            <p style="margin: 0; font-size: 0.875rem; color: rgba(255, 255, 255, 0.8); margin-top: 0.25rem;">Received just now</p>
          </div>
        </div>
      </header>

      <!-- Content -->
      <main class="email-content" style="padding: 2rem;">
        <div style="margin-bottom: 1.5rem;">
          <p class="email-text" style="margin: 0; font-size: 1rem; color: #374151; font-weight: 500;">
            You have a new message from your website contact form.
          </p>
        </div>

        <!-- Contact Information Card -->
        <div class="info-card" style="background-color: #f8fafc; border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem; border-left: 4px solid #0f766e;">
          <table class="info-table" style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
            <tr>
              <td class="info-label" style="font-weight: 600; color: #374151; padding: 0.75rem 0; width: 100px; vertical-align: top;">
                👤 Name
              </td>
              <td class="email-text" style="color: #1f2937; padding: 0.75rem 0; font-weight: 500;">
                ${escape(name)}
              </td>
            </tr>
            <tr>
              <td class="info-label" style="font-weight: 600; color: #374151; padding: 0.75rem 0; width: 100px; vertical-align: top;">
                ✉️ Email
              </td>
              <td class="email-text" style="color: #1f2937; padding: 0.75rem 0;">
                <a href="mailto:${escape(email)}" class="email-link-dark" style="color: #0f766e; text-decoration: none; font-weight: 500; padding: 0.5rem 1rem; background-color: rgba(15, 118, 110, 0.1); border-radius: 6px; display: inline-block; transition: background-color 0.2s;">
                  ${escape(email)}
                </a>
              </td>
            </tr>
            <tr>
              <td class="info-label" style="font-weight: 600; color: #374151; padding: 0.75rem 0; width: 100px; vertical-align: top;">
                💬 Message
              </td>
              <td class="email-text" style="color: #1f2937; padding: 0.75rem 0; line-height: 1.6; white-space: pre-wrap;">
                ${escape(message)}
              </td>
            </tr>
          </table>
        </div>

        <!-- Quick Actions -->
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">
          <a href="mailto:${escape(email)}" style="background-color: #0f766e; color: #ffffff; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 500; font-size: 0.875rem; display: inline-flex; align-items: center; gap: 0.5rem; transition: background-color 0.2s;">
            ↩️ Reply
          </a>
          <a href="mailto:${escape(email)}?subject=Re: Your Contact Form Message" style="background-color: #f1f5f9; color: #334155; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 500; font-size: 0.875rem; display: inline-flex; align-items: center; gap: 0.5rem; border: 1px solid #e2e8f0; transition: background-color 0.2s;">
            📝 Compose Reply
          </a>
        </div>
      </main>

      <!-- Footer -->
      <footer class="email-footer" style="padding: 1rem 2rem; background-color: #f8fafc; border-top: 1px solid #e2e8f0;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <p class="email-muted" style="margin: 0; font-size: 0.8rem; color: #64748b;">
            🌐 Sent via your website contact form
          </p>
          <p class="email-muted" style="margin: 0; font-size: 0.8rem; color: #64748b;">
            ${new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
      </footer>
    </div>
  </div>
</body>
</html>  `
}

function escape(input: string) {
	return input
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;')
}
