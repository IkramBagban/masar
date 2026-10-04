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
3. Point your API domain at the VM (`A` record → `34.124.191.101`), then on
   the VM install nginx + certbot and proxy `https://<api-domain>` → 
   `http://localhost:3001`. Open firewall: `gcloud compute firewall-rules
   create allow-api --allow tcp:3001` (only needed for IP-based access).

## Production `.env` (APP_ENV_FILE)

```
DATABASE_URL=<external postgres url>
PORT=3001
CLIENT_ORIGIN=https://<vercel-app-url>
CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...
CLERK_WEBHOOK_SIGNING_SECRET=whsec_...
```

## Frontend (Vercel)

- Import repo `IkramBagban/masar`, Root Directory = `client`.
- Env: `VITE_API_URL=https://<api-domain>`,
  `VITE_CLERK_PUBLISHABLE_KEY=pk_live_...`
- `client/vercel.json` already handles SPA rewrites.
