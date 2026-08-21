import { fail } from '@sveltejs/kit';
import { RESEND_API_KEY, CONTACT_EMAIL } from '$env/static/private';
import { Resend } from 'resend';

const resend = new Resend(RESEND_API_KEY);

const MAX_MESSAGE_LENGTH = 3000;

function escapeHtml(value: string) {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const name = formData.get('name')?.toString().trim() ?? '';
        const email = formData.get('email')?.toString().trim() ?? '';
        const interest = formData.get('interest')?.toString().trim() ?? '';
        const message = formData.get('message')?.toString().trim() ?? '';
        const website = formData.get('website')?.toString().trim() ?? '';

        const values = {
            name,
            email,
            interest,
            message
        };

        // Honeypot
        if (website) {
            return {
                success: true
            };
        }

        if (!name || !email || !message) {
            return fail(400, {
                error: 'Bitte fülle alle Pflichtfelder aus.',
                values
            });
        }

        if (!isValidEmail(email)) {
            return fail(400, {
                error: 'Bitte gib eine gültige E-Mail-Adresse ein.',
                values
            });
        }

        if (message.length > MAX_MESSAGE_LENGTH) {
            return fail(400, {
                error: 'Deine Nachricht ist leider zu lang.',
                values
            });
        }

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeInterest = escapeHtml(
            interest || 'Allgemeine Anfrage'
        );
        const safeMessage = escapeHtml(message).replaceAll(
            '\n',
            '<br>'
        );

        try {
            const result = await resend.emails.send({
                from: 'Nanami Shiraki <onboarding@resend.dev>',
                to: CONTACT_EMAIL,
                replyTo: email,
                subject: `Neue Anfrage von ${name}`,
                html: `
					<div style="
						font-family: Arial, sans-serif;
						line-height: 1.6;
						color: #3f4943;
					">
						<h2>Neue Kontaktanfrage</h2>

						<p>
							<strong>Name:</strong><br>
							${safeName}
						</p>

						<p>
							<strong>E-Mail:</strong><br>
							${safeEmail}
						</p>

						<p>
							<strong>Interesse:</strong><br>
							${safeInterest}
						</p>

						<p>
							<strong>Nachricht:</strong><br>
							${safeMessage}
						</p>
					</div>
				`
            });

            if (result.error) {
                console.error('Contact email failed:', result.error);

                return fail(500, {
                    error:
                        'Beim Senden ist etwas schiefgelaufen. Bitte versuche es später erneut.',
                    values
                });
            }

            return {
                success: true
            };
        } catch (error) {
            console.error('Contact form error:', error);

            return fail(500, {
                error:
                    'Beim Senden ist etwas schiefgelaufen. Bitte versuche es später erneut.',
                values
            });
        }
    }
};