# Backend deploy runbook

Workflow: `.github/workflows/backend-deploy.yml` — on push to `main` touching
`server/**` it builds `server/Dockerfile`, pushes
`ikrambagban/masar-server:<sha>` + `:latest` to Docker Hub, then SSHs to the
VM (appleboy/ssh-action), pulls, and runs the container as `masar-server`
with `--restart always` on `127.0.0.1:3001`. The container runs
`drizzle-kit migrate` against the external Neon Postgres on startup
(no DB container), then starts the API. Deploys to
`https://api.masar.querywise.tech` via nginx on the VM.

## One-time setup

1. Authorize the deploy key on the VM (as `bagbanikram` — the username in
   the instance metadata):
   `~/.ssh/authorized_keys` must contain:
   ```
   ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDYsxNPp1LeUf/V6jLdC/Ip4LZtbKTILMID2X53RsbPl masar-backend-deploy
   ```
   Via console: `echo '<key>' >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys`
2. Docker Hub: repo variable `DOCKERHUB_USERNAME` + secret `DOCKERHUB_TOKEN`.
3. GitHub secrets (repo Settings → Secrets → Actions) — already set except
   Docker Hub + Clerk prod keys:
   - `VM_HOST` = `34.124.191.101` ✅
   - `VM_USERNAME` = `bagbanikram` ✅
   - `VM_SSH_KEY` = private half of the key above ✅
   - `DATABASE_URL` = Neon prod url ✅
   - `CLIENT_ORIGIN` = `https://masar-ikrambagbans-projects.vercel.app` ✅
     (comma-separated list supported)
   - `CLERK_PUBLISHABLE_KEY` / `CLERK_SECRET_KEY` /
     `CLERK_WEBHOOK_SIGNING_SECRET` — TODO when prod Clerk app is ready.
     Until then `/api/account` returns 503; waitlist + health work normally.
4. Cloudflare dashboard (`querywise.tech`): `A` record `api.masar` →
   `34.124.191.101` (manual — API token lacks DNS scope). Then on the VM:
   install docker + nginx + certbot, proxy
   `https://api.masar.querywise.tech` → `http://localhost:3001`.

## Frontend (Vercel)

- Project `masar` exists (Root Directory = `client`, framework = Vite).
- Env set: `VITE_API_URL=https://api.masar.querywise.tech` (Production).
- TODO: connect GitHub repo in project Settings → Git (install Vercel
  GitHub App) for auto-deploys; add `VITE_CLERK_PUBLISHABLE_KEY` (prod).
- `client/vercel.json` handles SPA rewrites.
