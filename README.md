# Masār مسار — Know where to start.

AI care navigator for the Gulf. Tell us what's bothering you in Arabic or English, answer 2–3 questions, get your next step: right specialist, urgency, what to say at the clinic.

This repo uses a personal Clerk **test** project. Keys are not committed. Create your own free Clerk app and paste keys into `.env`.

## Setup

Requirements: Node.js 20+, PostgreSQL 16, Docker (for local DB).

```bash
git clone https://github.com/IkramBagban/masar.git masar
cd masar
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

## What I'd do with more time

Honestly, with more time I'd turn this into a working MVP, where user can actually talk to Masār AI, answer the follow up questions it asks, and then get a recommended specialist and a "what to tell your doctor" note.
