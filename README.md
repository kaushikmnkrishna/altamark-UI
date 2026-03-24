# Altamark — AI-First Supplier Intelligence Platform

A premium, modern enterprise SaaS landing website for Altamark, built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Hero** — Headline from product positioning, dashboard-style visual
- **Trust strip** — Key metrics (48 hrs vs 8 weeks, 15+ signals, 40+ languages, shared data core)
- **Problem section** — Five broken workflows
- **Platform section** — One AI core, three surfaces (Onboard, Verify, Monitor)
- **Verify (primary wedge)** — Document AI, geospatial, certificates, sanctions, automated statements
- **Onboard** — Adaptive forms, multilingual intake, 48-hour qualification
- **Monitor** — 15+ signal streams, risk scoring, daily AI briefing
- **How it works** — Collect → Understand → Verify → Monitor
- **Differentiation** — AI-native, verifies not collects, shared core, real-world complexity
- **ICP section** — Procurement, Sustainability, Supply chain ops
- **Demo form** — Modal with full validation and email submission

## Tech stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example env file and fill in your values:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

**Email (required):**
- `RESEND_API_KEY` — Get from [Resend](https://resend.com)
- `FROM_EMAIL` — Verified sender (or `onboarding@resend.dev` for testing)
- `DEMO_TO_EMAIL` — Comma-separated email addresses (e.g. `a@b.com,b@c.com`)

**Phone notification (optional):**
- `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN` — From [Twilio](https://www.twilio.com)
- `TWILIO_FROM_SMS` — Twilio phone number for SMS (e.g. `+1234567890`)
- `TWILIO_FROM_WHATSAPP` — Twilio WhatsApp sender (e.g. `+1234567890` or `whatsapp:+1234567890`)
- `DEMO_NOTIFY_PHONE` — Comma-separated phone numbers in E.164 (e.g. `+919880089246,+9188675118729`)
- `DEMO_NOTIFY_MODE` — `sms` or `whatsapp` (default: `sms`)

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm start
```

## Demo form

When users click "Book a Demo", a modal opens with:

- **Required:** First name, work email, company
- **Optional:** Last name, job title, message
- Client-side validation, honeypot spam prevention
- Success and error toast notifications
- 10-second submit lock after success

**Email:** Submissions are sent via Resend to all addresses in `DEMO_TO_EMAIL` (comma-separated).
**Phone:** If Twilio credentials are set, leads are sent to each number in `DEMO_NOTIFY_PHONE` (comma-separated) via SMS or WhatsApp (per `DEMO_NOTIFY_MODE`).

## Project structure

```
src/
├── app/
│   ├── api/demo/route.ts   # Demo form API
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── TrustStrip.tsx
    ├── ProblemSection.tsx
    ├── PlatformSection.tsx
    ├── VerifySection.tsx
    ├── OnboardSection.tsx
    ├── MonitorSection.tsx
    ├── HowItWorksSection.tsx
    ├── DifferentiationSection.tsx
    ├── ICPSection.tsx
    ├── FinalCTA.tsx
    ├── Footer.tsx
    └── DemoFormModal.tsx
```

## Content source

All content and messaging are derived from the product brief document (`brief.pdf`).
