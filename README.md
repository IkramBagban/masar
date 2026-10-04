# Masār مسار — Know where to start.

Masār (مسار, Arabic for "path") is an AI care navigator for the Gulf. You describe what's bothering you in plain Arabic or English, answer two or three follow-up questions, and get a clear next step — the right specialist, how urgent it is, and what to tell your doctor. Guidance only, never a diagnosis.

This repo uses a personal Clerk **test** project. Keys are not committed. Create your own free Clerk app and paste keys into `.env`.

## Setup

Requirements: Node.js, Docker (for local DB).

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

Clerk setup (free tier is enough):
1. Create a free application in the [Clerk dashboard](https://dashboard.clerk.com).
2. Go to Configure → Developers → Webhooks → Endpoints and add an endpoint `https://<your-backend>/api/webhooks/clerk` subscribed to `user.created` (for local dev, point it at a tunnel like ngrok or cloudflared so Clerk can reach your server).
3. Paste the publishable key, secret key, and webhook signing secret into `.env`.

## What I'd do with more time

Honestly, with more time I'd turn this into a working MVP, where user can actually talk to Masār AI, answer the follow up questions it asks, and then get a recommended specialist and a "what to tell your doctor" note.
