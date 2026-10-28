# Sojo Nanny

Sojo Nanny is a childcare services website for families looking for day care, overnight infant care, or travel nanny support. The site presents the services and provides a three-step enquiry form with WhatsApp follow-up.

## Features

- Responsive homepage with service information and a mobile navigation menu
- Floating hero scroll arrow, introductory video modal, and About page with the Sojo Nanny video
- Service cards that open a preselected booking enquiry modal
- Enquiries submitted through a validated API route to Supabase
- WhatsApp and telephone contact links
- Scroll progress and back-to-top control
- Reduced-motion and keyboard accessibility support

## Requirements

- Node.js 18.17 or later
- npm
- A Supabase project for storing submitted enquiries

## Getting started

```bash
npm install
```

Copy `.env.example` to `.env.local` and set the Supabase server credentials. The public contact numbers can also be overridden there:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=254704690779
NEXT_PUBLIC_CALL_NUMBER=+254113781473
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Run the SQL in [`supabase/schema.sql`](supabase/schema.sql) in the Supabase SQL editor to create the inquiry tables and policies. Keep the service role key private; do not use a `NEXT_PUBLIC_` prefix for it.

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run build
```

The inquiry API is available at `POST /api/inquiries`. It validates submissions and stores them in the Supabase `inquiries` table. If Supabase is not configured, submissions cannot be stored; visitors can still use the displayed phone and WhatsApp contact links.

## Project structure

- `app/` — homepage, global styles, metadata, and inquiry API route
- `components/` — hero, service cards, site navigation, inquiry form, and scroll control
- `lib/` — Supabase client and inquiry validation schema
- `public/` — Sojo Nanny brand assets and childcare photography
- `supabase/schema.sql` — database schema and row-level security policies
