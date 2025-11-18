import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5174',
  credentials: true
}));
app.use(express.json());

// Create email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify email configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log('Email server error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, timeframe, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Create email content
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${timeframe ? `<p><strong>Timeframe:</strong> ${timeframe}</p>` : ''}
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `GolfBooker Contact: ${subject}`,
      html: emailHtml,
      replyTo: email
    });

    res.json({
      success: true,
      message: 'Email sent successfully'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email'
    });
  }
});

// Waitlist endpoint
app.post('/api/waitlist', async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    // Create email content
    const emailHtml = `
      <h2>New Waitlist Signup</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Date:</strong> ${new Date().toLocaleString('fi-FI')}</p>
    `;

    // Send notification to admin
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'GolfBooker: New Waitlist Signup',
      html: emailHtml
    });

    // Send confirmation to user
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Welcome to GolfBooker Waitlist! / Tervetuloa GolfBooker-jonotuslistalle!',
      html: `
        <h2>Thank you for joining our waitlist! / Kiitos liittymisestäsi jonotuslistallemme!</h2>
        <p>We'll keep you updated on our launch. / Pidämme sinut ajan tasalla lanseerauksestamme.</p>
        <br>
        <p>Best regards, / Ystävällisin terveisin,<br>
        <strong>GolfBooker Team</strong></p>
      `
    });

    res.json({
      success: true,
      message: 'Successfully joined waitlist'
    });
  } catch (error) {
    console.error('Waitlist error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to join waitlist'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
