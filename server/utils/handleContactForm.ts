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
    <title>New Contact Message</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin: 0; padding: 2rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9fafb; color: #111827;">
    <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); overflow: hidden; border: 1px solid #e5e7eb;">
      <header style="background-color: #0f766e; padding: 1.5rem; color: white;">
        <h1 style="margin: 0; font-size: 1.25rem;">📥 New Contact Message</h1>
      </header>

      <section style="padding: 1.5rem;">
        <p style="margin-bottom: 1rem; font-size: 1rem;">You’ve received a new message via your website contact form:</p>

        <table style="width: 100%; font-size: 0.95rem; border-collapse: collapse;">
          <tr>
            <td style="font-weight: bold; padding: 0.5rem 0; width: 90px;">Name:</td>
            <td style="padding: 0.5rem 0;">${escape(name)}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 0.5rem 0;">Email:</td>
            <td style="padding: 0.5rem 0;"><a href="mailto:${escape(email)}" style="color: #0f766e; text-decoration: underline;">${escape(email)}</a></td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 0.5rem 0; vertical-align: top;">Message:</td>
            <td style="padding: 0.5rem 0; white-space: pre-wrap; line-height: 1.5;">${escape(message)}</td>
          </tr>
        </table>
      </section>

      <footer style="padding: 1rem 1.5rem; font-size: 0.8rem; color: #6b7280; background-color: #f3f4f6;">
        This message was sent from your website contact form.
      </footer>
    </div>
  </body>
  </html>
  `
}

function escape(input: string) {
	return input
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;')
}
