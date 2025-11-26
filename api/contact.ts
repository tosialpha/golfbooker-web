import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, message, source } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'GolfBooker <noreply@golfbooker.fi>',
      to: ['info@golfbooker.fi'],
      replyTo: email,
      subject: `Uusi yhteydenotto: ${firstName} ${lastName} - ${source || 'Verkkosivut'}`,
      html: `
        <h2>Uusi yhteydenotto GolfBooker-verkkosivuilta</h2>
        <p><strong>Lähde:</strong> ${source || 'Verkkosivut'}</p>
        <hr />
        <p><strong>Nimi:</strong> ${firstName} ${lastName}</p>
        <p><strong>Sähköposti:</strong> ${email}</p>
        <p><strong>Puhelin:</strong> ${phone || 'Ei annettu'}</p>
        <hr />
        <p><strong>Viesti:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
      text: `
Uusi yhteydenotto GolfBooker-verkkosivuilta

Lähde: ${source || 'Verkkosivut'}

Nimi: ${firstName} ${lastName}
Sähköposti: ${email}
Puhelin: ${phone || 'Ei annettu'}

Viesti:
${message}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
