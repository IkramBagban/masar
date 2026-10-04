# Backend deploy runbook

Workflow: `.github/workflows/backend-deploy.yml` — on push to `main` touching
`server/**` it typechecks/builds in CI, then SSHs to the VM, pulls, writes
`.env` from the `APP_ENV_FILE` secret, installs, migrates (`drizzle-kit
migrate` against the external Postgres), and (re)starts `masar-api` under pm2.

## One-time setup

1. Authorize the deploy key on the VM (as `ikrambagban`):
   `~/.ssh/authorized_keys` must contain:
   ```
   ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDYsxNPp1LeUf/V6jLdC/Ip4LZtbKTILMID2X53RsbPl masar-backend-deploy
   ```
   Via console: `echo '<key>' >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys`
2. GitHub secrets (repo Settings → Secrets → Actions):
   - `VM_HOST` = `34.124.191.101`
   - `VM_USER` = `ikrambagban`
   - `VM_SSH_PRIVATE_KEY` = private half of the key above
   - `APP_ENV_FILE` = full production `.env` (see below)
3. Point your API domain at the VM: in the Cloudflare dashboard for
   `querywise.tech`, add `A` record `api.masar` → `34.124.191.101`
   (DNS API token lacks scope, so this is a manual dashboard step). Then on
   the VM install nginx + certbot and proxy `https://api.masar.querywise.tech`
   → `http://localhost:3001`.

## Production `.env` (APP_ENV_FILE) — already set as a GitHub secret

```
DATABASE_URL=<neon prod url>          # set
PORT=3001                             # set
CLIENT_ORIGIN=https://masar-ikrambagbans-projects.vercel.app  # set (comma-separated list supported)
CLERK_PUBLISHABLE_KEY=pk_live_...     # TODO: add when prod Clerk app is ready
CLERK_SECRET_KEY=sk_live_...         # TODO
CLERK_WEBHOOK_SIGNING_SECRET=whsec_... # TODO
```

Until Clerk prod keys are added, `/api/account` returns 503 and sign-in is
disabled; landing page, waitlist, and health check work normally.

## Frontend (Vercel)

- Import repo `IkramBagban/masar`, Root Directory = `client`.
- Env: `VITE_API_URL=https://<api-domain>`,
  `VITE_CLERK_PUBLISHABLE_KEY=pk_live_...`
- `client/vercel.json` already handles SPA rewrites.
