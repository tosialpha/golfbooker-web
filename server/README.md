# GolfBooker Email Server

Backend server for handling email submissions from the GolfBooker website.

## Features

- Contact form email handling
- Waitlist signup with confirmation emails
- SMTP integration with Nodemailer
- CORS enabled for frontend communication

## Setup

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env` and fill in your email configuration:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=noreply@golfbooker.fi
EMAIL_TO=info@golfbooker.fi

# Server Configuration
PORT=3001
FRONTEND_URL=http://localhost:5174
```

### 3. Gmail Setup (if using Gmail)

If you're using Gmail, you need to create an **App Password**:

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled
4. Under "2-Step Verification", find "App passwords"
5. Generate a new app password for "Mail"
6. Use this password in the `SMTP_PASS` field in `.env`

### 4. Run the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:3001` by default.

## API Endpoints

### Health Check
- **GET** `/api/health`
- Returns server status

### Contact Form
- **POST** `/api/contact`
- Body:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+358401234567",
    "timeframe": "1-2 months",
    "subject": "Demo Request",
    "message": "I would like to request a demo..."
  }
  ```

### Waitlist
- **POST** `/api/waitlist`
- Body:
  ```json
  {
    "email": "user@example.com"
  }
  ```

## Testing

You can test the endpoints using curl:

```bash
# Test contact form
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'

# Test waitlist
curl -X POST http://localhost:3001/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

## Production Deployment

For production, consider:

1. Using environment variables from your hosting provider
2. Setting up proper SMTP service (SendGrid, AWS SES, etc.)
3. Adding rate limiting
4. Adding request validation
5. Setting up proper logging
6. Using HTTPS
7. Updating `FRONTEND_URL` to your production domain

## Security Notes

- Never commit `.env` file to version control
- Use strong SMTP credentials
- Consider adding rate limiting to prevent abuse
- Validate and sanitize all input data
- Use HTTPS in production
