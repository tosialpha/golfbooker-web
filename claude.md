# GolfBooker - Project Documentation

## Project Identity

**GolfBooker** is a modern B2B SaaS platform providing comprehensive booking and management solutions for golf courses in Finland. This repository contains the marketing/landing page that showcases the product features and enables customer contact.

### What We're Building
- **Primary Product**: Complete golf course management system with booking, tournaments, payments, and analytics
- **Target Audience**:
  - B2B: Golf courses and clubs in Finland (primary customers)
  - B2C: Golf players through mobile app (end users)
- **Market Focus**: Finnish golf industry with emphasis on local support and Finnish language
- **Current Stage**: Pre-launch marketing site with demo and contact functionality

### Key Value Propositions
1. Modern, user-friendly interface (no complicated legacy systems)
2. Affordable pricing for golf courses
3. Finnish company with local support (🇫🇮)
4. Comprehensive feature set in one platform
5. Tournament management as standout/flagship feature (can be sold standalone)

## Tech Stack

### Core Technologies
- **Framework**: React 18.3.1 with TypeScript 5.6.3
- **Build Tool**: Vite 5.4.11
- **Styling**: Tailwind CSS 3.4.15 with custom brand design system
- **Routing**: React Router DOM 7.9.6
- **Animations**: Framer Motion 11.11.17
- **Icons**: Lucide React 0.553.0
- **Date Picker**: React DatePicker 8.9.0

### Deployment
- **Platform**: Vercel
- **Configuration**: SPA with client-side routing (vercel.json rewrites)
- **Build Command**: `tsc && vite build`
- **Dev Server**: `vite` (port 5173)

### Important Note
This repository is **frontend-only**. There is no backend API in this codebase. Form submissions use Web3Forms, and all content is static/embedded.

## Project Structure

```
/
├── src/
│   ├── pages/              # Route pages
│   │   ├── Home.tsx           # Main landing page (/)
│   │   ├── TournamentManagement.tsx  # Tournament feature page (/tournaments)
│   │   ├── Demo.tsx           # Interactive demo (/demo)
│   │   ├── Contact.tsx        # Contact form (/contact)
│   │   ├── Privacy.tsx        # Privacy policy (/privacy)
│   │   └── Terms.tsx          # Terms of service (/terms)
│   │
│   ├── components/
│   │   ├── layout/         # Layout components
│   │   │   ├── Layout.tsx     # Main layout wrapper with navbar/footer
│   │   │   ├── Navbar.tsx     # Top navigation with language toggle
│   │   │   └── Footer.tsx     # Footer with links and app store badges
│   │   │
│   │   ├── sections/       # Homepage sections
│   │   │   ├── Hero.tsx       # Hero section with CTA
│   │   │   ├── Features.tsx   # Features grid (9 feature boxes)
│   │   │   ├── FAQ.tsx        # FAQ accordion
│   │   │   ├── CustomerLogos.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── TrustSection.tsx
│   │   │   └── FinalCTA.tsx
│   │   │
│   │   ├── demo/           # Demo page components
│   │   │   ├── BookingDemo.tsx
│   │   │   ├── DashboardPreview.tsx
│   │   │   └── PhoneMockup.tsx
│   │   │
│   │   └── ui/             # Reusable UI components
│   │       ├── Button.tsx, Card.tsx, Container.tsx
│   │       ├── Accordion.tsx, Badge.tsx
│   │       ├── Logo.tsx, LogoPremium.tsx, GolfIcon.tsx
│   │       ├── LanguageToggle.tsx
│   │       ├── CookieConsent.tsx
│   │       └── Modals (DemoTrialModal, DashboardModal)
│   │
│   ├── contexts/
│   │   └── LanguageContext.tsx  # i18n state management (FI/EN)
│   │
│   ├── App.tsx             # Main app with routing
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles + custom scrollbar
│
├── public/                 # Static assets
│   ├── tournament-desktop.png
│   ├── tournament-mobile-app.png
│   ├── tournament-formats.png
│   ├── dashboard-hero.png
│   ├── golf-hero-bg.jpg
│   └── logos/
│
├── tailwind.config.js      # Custom brand colors and theme
├── vite.config.ts
├── vercel.json             # SPA routing configuration
└── package.json
```

## Core Features & Pages

### Main Pages

1. **Home (/)** - Main landing page
   - Hero section with golf course background
   - 9-feature grid with collapsible descriptions
   - FAQ accordion section
   - Trust indicators and testimonials
   - Final CTA section

2. **Tournament Management (/tournaments)** - Flagship feature showcase
   - Green gradient hero with decorative blur elements
   - Desktop and mobile mockup screenshots
   - Multiple feature sections (tournament creation, registration/payments, live scoring, custom pages)
   - Alternating white/gray backgrounds
   - Contact form integration
   - Can be marketed as standalone module

3. **Demo (/demo)** - Interactive product demo
   - Phone mockup with step-by-step booking flow
   - "Why GolfBooker" benefits section
   - Waitlist signup form

4. **Contact (/contact)** - Lead generation
   - Contact form with date/time picker
   - Subject categorization dropdown
   - Web3Forms integration
   - Contact info sidebar (phone, email, WhatsApp)
   - GDPR privacy checkbox

5. **Privacy (/privacy)** - Privacy policy

6. **Terms (/terms)** - Terms of service

### Product Features Advertised

1. **Booking System**
   - Real-time tee time management
   - Guest bookings and member reservations
   - Additional services (golf carts, club rentals)

2. **Tournament Management** (Flagship Feature)
   - Create and manage tournaments
   - Multiple game formats (stroke play, stableford, scramble, match play, etc.)
   - Online registration with payments
   - Live scoring through mobile app
   - Real-time leaderboards
   - Custom tournament pages with club branding
   - Automated emails and communication
   - Can be implemented as standalone module

3. **Payments & Invoicing**
   - Online payments (Stripe, Paytrail, Checkout Finland)
   - Automatic billing
   - Membership fees management
   - Season ticket handling

4. **Member/Customer Management**
   - Player profiles and registers
   - Handicap tracking
   - Membership tiers

5. **Analytics & Reporting**
   - Real-time booking analytics
   - Utilization rate tracking
   - Revenue forecasting
   - Business intelligence dashboards

6. **Mobile App** (Coming Soon)
   - Player-facing iOS/Android app
   - Mobile booking
   - Tournament registration and scoring
   - Player notifications

7. **Integrations**
   - Finnish Golf Union connection
   - eBirdie handicap system
   - Automatic handicap updates
   - Third-party payment providers

8. **Communication Tools**
   - Newsletter creation
   - Automated booking confirmations
   - Tournament reminders

9. **AI-Powered Tools**
   - Dynamic pricing optimization
   - Utilization recommendations
   - Demand forecasting

## Content & Translations

### Language Support
- **Bilingual**: Finnish (default) and English
- **Implementation**: Centralized in `src/contexts/LanguageContext.tsx`
- **Usage**: `const { t, language } = useLanguage()` then `t('key.path')`
- **Structure**: All translations embedded in LanguageContext (no external files)
- **Total Keys**: 410+ translation keys

### Key Translation Sections
- `nav.*` - Navigation items
- `hero.*` - Hero section content
- `features.*` - Feature descriptions
- `tournaments.*` - Tournament page content
- `demo.*` - Demo page content
- `contact.*` - Contact form labels
- `footer.*` - Footer links and text
- `faq.*` - FAQ questions and answers
- `privacy.*` - Privacy policy
- `terms.*` - Terms of service

### Adding New Translations
1. Open `src/contexts/LanguageContext.tsx`
2. Add key to both `fi` and `en` objects in translations
3. Use anywhere with `t('your.new.key')`

## Design System

### Brand Colors (Tailwind Config)
```javascript
brand: {
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    500: '#22c55e',
    600: '#16a34a',  // Primary brand color
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  }
}
```

### Design Patterns
- **Primary Color**: Brand Green (#16a34a)
- **Gradients**: Used extensively (green to emerald to teal)
- **Animations**: Framer Motion with viewport triggers, whileInView, hover effects
- **Glassmorphism**: Navbar with backdrop blur
- **Shadows**: Multiple elevation levels for depth
- **Decorative Elements**: Blurred circles, gradient orbs
- **Typography**: System font stack, bold headings, text shadows on images
- **Responsive**: Mobile-first approach, breakpoints: sm, md, lg, xl

### Common UI Patterns
- Hero sections with gradient backgrounds
- Mockup showcases (desktop + mobile side-by-side)
- Feature grids with hover effects and scale transforms
- Accordion components for collapsible content
- Modal overlays for forms
- Badge components for trust indicators

## Development Context

### Current Branch Structure
- **main** - Production branch
- **tournament-dev** - Current active development (most recent work)
- **demo-updates** - Feature branch

### Recent Development Focus (Last Session)
1. Tournament page hero with green gradient background
2. Decorative blur elements for visual depth
3. Adding real tournament screenshots (desktop, mobile, formats)
4. Hover effects on images (scale + shadow)
5. Mockup positioning (half-visible on page load)
6. Mobile mockup aspect ratio corrections
7. Navigation links for tournament page
8. Cookie consent banner enhancements

### Known Placeholders/TODOs
- Some tournament page sections still use icon placeholders instead of real screenshots
- Mobile apps marked as "Coming Soon" (footer badges are placeholders)
- No actual demo environment backend (waitlist form exists but no processing)
- No live customer logos or testimonials (placeholder sections)

### Important Constraints
- **No Backend**: This is a frontend-only marketing site
- **Static Content**: All text embedded in code (no CMS)
- **External Services**: Web3Forms for contact submissions only
- **Image Dependencies**: Mockups and screenshots must be in /public/

## Integrations & Configuration

### Web3Forms (Contact Form)
- **API Key**: `2836fb7b-e299-46ac-bceb-bfdf2fac41bd`
- **Recipient Emails**:
  - info@golfbooker.fi
  - support@golfbooker.fi
- **Form Location**: `/src/pages/Contact.tsx`
- **Features**: File uploads, date/time picker, subject categorization

### Google Analytics
- **Tracking ID**: `G-3GEQGHSM72`
- **Implementation**: Loaded conditionally after cookie consent
- **Location**: `src/components/ui/CookieConsent.tsx`
- **GDPR Compliance**: Only loads after user accepts analytics cookies

### Contact Information
- **Sales Phone**: +358 40 737 7397
- **Support Phone**: +358 44 058 2663 (also WhatsApp)
- **Email**: info@golfbooker.fi, support@golfbooker.fi
- **WhatsApp**: Direct messaging link configured

### External Links
- **App Store**: Placeholder (Coming Soon)
- **Google Play**: Placeholder (Coming Soon)

## Key Project Conventions

### File Naming
- Components: PascalCase (e.g., `TournamentManagement.tsx`)
- Pages: PascalCase, named after route (e.g., `Contact.tsx` for `/contact`)
- Utilities: camelCase

### Component Structure
- Functional components with TypeScript
- `React.FC` type annotations
- Props interfaces defined inline or exported
- Framer Motion animations with viewport triggers
- Responsive design with Tailwind classes

### Styling Approach
- Tailwind utility classes (no CSS modules)
- Custom classes in index.css for global styles
- Inline styles only for dynamic values (textShadow on hero)
- No CSS-in-JS libraries

### State Management
- Context API for global state (language only)
- Local useState for component state
- No Redux, Zustand, or other state libraries

## Important Business Context

### Market Position
- **Target Market**: Finnish golf courses (60+ courses in Finland)
- **Competitive Edge**: Modern UI, affordable pricing, local support, comprehensive features
- **Sales Strategy**: Demo-first, contact-driven (no self-service pricing)
- **Finnish Focus**: Default Finnish language, Finnish company branding, local phone support

### Revenue Model
- B2B SaaS subscription (pricing not public)
- Tournament module can be sold standalone
- Contact sales for custom quotes

### Customer Journey
1. Land on homepage → See features
2. Click "Demo" or "Tournament" page → Learn more
3. "Ota yhteyttä" (Contact) → Fill form
4. Sales follow-up → Custom demo/quote
5. Implementation → Onboarding

### Trust Indicators
- "50+ courses" badge (social proof)
- "Finnish company" badge (🇫🇮)
- "24/7 support" claim
- Multiple contact methods (phone, email, WhatsApp)
- GDPR-compliant privacy policy

## Quick Reference

### Running the Project
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
```

### Adding a New Page
1. Create component in `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`
3. Add translations to `src/contexts/LanguageContext.tsx`
4. Add navigation link in `src/components/layout/Navbar.tsx`
5. Add footer link if needed in `src/components/layout/Footer.tsx`

### Adding a New Feature Section
1. Create component in `src/components/sections/YourSection.tsx`
2. Import and use in relevant page (usually `Home.tsx`)
3. Add translations for section content
4. Follow responsive design patterns (mobile-first)
5. Add Framer Motion animations with viewport triggers

### Updating Translations
1. Open `src/contexts/LanguageContext.tsx`
2. Find the translations object
3. Add your keys to both `fi` and `en` sections
4. Keep structure consistent with dot notation

### Changing Brand Colors
1. Edit `tailwind.config.js`
2. Update `brand.green.*` values
3. Update meta theme-color in `index.html`
4. Rebuild Tailwind with `npm run dev`

## Common Patterns in This Codebase

### Hero Sections
```tsx
<section className="relative overflow-visible bg-gradient-to-br from-brand-green-400 via-emerald-400 to-teal-400 pb-64">
  {/* Decorative blur elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
  </div>

  {/* Content */}
  <div className="relative z-10">
    {/* Hero content here */}
  </div>
</section>
```

### Framer Motion Animations
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

### Using Translations
```tsx
const { t, language } = useLanguage();
const isEnglish = language === 'en';

// In JSX:
<h1>{t('tournaments.title')}</h1>
<p>{isEnglish ? 'English text' : 'Suomenkielinen teksti'}</p>
```

### Responsive Image Containers
```tsx
<div className="aspect-video bg-gray-900 rounded-2xl shadow-2xl p-4 overflow-hidden transition-shadow hover:shadow-3xl">
  <img
    src="/your-image.png"
    alt={isEnglish ? 'English alt' : 'Suomenkielinen alt'}
    className="w-full h-full object-cover"
  />
</div>
```

## Project History

This marketing site was developed to showcase the GolfBooker platform before the actual SaaS product launch. The tournament management module is the most recent addition and represents the flagship feature that can be sold both as part of the complete system or as a standalone module.

The project emphasizes visual storytelling through mockups and screenshots, with a strong focus on the Finnish market while supporting English for international interest.

---

**Last Updated**: Session focusing on tournament page green gradient hero and layout improvements
**Active Branch**: tournament-dev
**Current Status**: Marketing site complete, awaiting backend product development