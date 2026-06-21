# BookEasy

BookEasy is a polished, frontend-only appointment scheduling SaaS demo for modern service businesses. It pairs a premium public website and client booking journey with a complete operator dashboard for calendars, appointments, customers, services, staff, analytics, reports, and settings.

## Features

- Responsive marketing website with product, pricing, solutions, resources, about, and contact pages
- Four-step public booking flow with service, professional, date/time, client details, and confirmation
- Role-based demo access for owner, staff, and reception users
- Daily dashboard with appointments, KPIs, revenue charts, staff availability, and quick actions
- Week and agenda calendar views
- Searchable/filterable appointment and customer management
- Service creation and deletion persisted to localStorage
- Appointment status actions persisted to localStorage
- Staff performance, analytics, export interactions, settings, light/dark themes, and demo reset
- Route-level lazy loading and responsive layouts from 320px through large desktop displays

## Tech Stack

React 19, Vite, TypeScript, Tailwind CSS, React Router, Zustand, Framer Motion, Recharts, date-fns, Lucide, Sonner, React Hook Form, Zod, and TanStack Table.

## Folder Structure

```text
src/
  components/   Shared UI and public/dashboard shells
  pages/        Marketing, booking, auth, dashboard, and operations
  data.ts       Realistic seeded demo data
  store.ts      Persisted Zustand demo state
  types.ts      Domain types
  index.css     Public, booking, and authentication design system
  app.css       Dashboard and operations design system
```

## Demo Accounts

All accounts use password `demo123`.

- Owner: `owner@bookeasy.app`
- Staff: `staff@bookeasy.app`
- Reception: `reception@bookeasy.app`

## Demo Mode

BookEasy has no backend, external API, payment gateway, or authentication provider. Product data and interactions are stored in the browser using localStorage. Use **Reset demo data** in Settings to restore the seed data.

## Installation

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
```

## Deployment

The included `vercel.json` supports React Router history fallback. Import the repository into Vercel, use `npm run build`, and publish `dist`.

## Screenshots

Suggested showcase captures: the public homepage hero, owner overview dashboard, week calendar, customer cards, analytics, and mobile booking flow.

## Future Backend Plan

A production backend can replace the local repository with PostgreSQL, add organization-scoped row-level security, real authentication and role policies, Stripe payments, transactional email/SMS, calendar provider sync, background reminders, audit logs, webhooks, and encrypted object storage. The current domain models and store actions provide clean seams for that migration.
