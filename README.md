# Masār مسار — Know where to start.

AI care navigator for the Gulf. Tell us what's bothering you in Arabic or English, answer 2–3 questions, get your next step: right specialist, urgency, what to say at the clinic.

Exact design port of `designs/wasit/` (warm-clean v6) to React + Express. Frontend is pixel-faithful, backend is real.

This repo uses a personal Clerk **test** project. Keys are not committed. Create your own free Clerk app and paste keys into `.env`.

## Setup

Requirements: Node.js 20+, PostgreSQL 16, Docker (for local DB).

```bash
cd /Users/ikrambagban/Desktop/dev/projects/masar
npm install
cp .env.example .env
# fill DATABASE_URL + Clerk keys in .env
npm run db:up
npm run db:migrate
npm run dev
```

Client: http://localhost:5173 — API: http://localhost:3001 (Vite proxies `/api`).

Or run separately:
```bash
npm run dev:server
npm run dev:client
```

## Environment

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | Postgres connection string |
| `PORT` | API port, default `3001` |
| `CLIENT_ORIGIN` | CORS origin, default `http://localhost:5173` |
| `CLERK_PUBLISHABLE_KEY` | Clerk test publishable key (server user lookup) |
| `CLERK_SECRET_KEY` | Clerk test secret key |
| `CLERK_WEBHOOK_SIGNING_SECRET` | Svix signing secret from Clerk webhook endpoint |
| `VITE_CLERK_PUBLISHABLE_KEY` | Same publishable key, exposed to client |
| `VITE_API_URL` | Leave empty in dev (Vite proxy used) |

In Clerk dashboard: add `http://localhost:5173` origin, paths `/sign-in` `/sign-up`, webhook `POST /api/webhooks/clerk` subscribed to `user.created`. For local delivery use a tunnel (e.g. ngrok). If webhook hasn't arrived, opening `/account` upserts the user row from verified session — `signed_up_at` written once, never overwritten.

## What was built

- `/` — exact wasit landing: NAV, HERO + chat mock, HOW 01/02/03, WHY old vs Masār, FAQ (5, one-open), WAITLIST, FOOTER. EN/AR toggle on every page, whole-layout RTL mirror, logical CSS, email `dir=ltr`.
- `POST /api/waitlist` {name,email,locale} → Postgres `waitlist_entries`, 201 joined / 200 already_joined, 400 invalid.
- `/sign-up` `/sign-in` — Clerk prebuilt, `arSA` when locale=ar, redirect → `/account`.
- `GET /api/account` — requireAuth → load `users` by `clerk_user_id`, fallback upsert. Returns {email, signedUpAt}. Client never reads Clerk session for these fields.
- `POST /api/webhooks/clerk` — raw body Svix verify, `user.created` → insert, ignore others.

## What more time would change

- Retry + dead-letter failed webhooks instead of relying on account-page upsert.
- Confirm waitlist email before treating as final + rate-limit public route.
- Persist locale on user, not only browser.
- Build the real triage model. This repo ships guidance UI + data plumbing only.
- Dockerize API + add healthcheck/logging for single-VM nginx deploy.
