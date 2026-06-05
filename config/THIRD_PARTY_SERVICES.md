# Roamlu — Third-Party SDKs & Services

Single source of truth: **`config/secrets.env.example`**. Copy to `config/secrets.env` (gitignored) and fill values. All three surfaces (backend, web admin, Flutter) read from this file via their respective loaders.

| # | Domain | Service | Purpose | Used By | Env Group |
|---|--------|---------|---------|---------|-----------|
| 1 | Database | PostgreSQL 16 | Primary store, ledger | Backend | §1 |
| 2 | Queue/Cache | Redis + BullMQ | Jobs, idempotency, rate limit | Backend | §2 |
| 3 | Auth | Argon2id + TOTP (built-in) | Password hash, 2FA | Backend | §3 |
| 4 | KMS | AWS KMS / local | Field-level encryption | Backend | §4 |
| 5 | Email | Postmark / SendGrid / SES | Transactional | Backend | §5 |
| 6 | SMS / Verify | Twilio Verify · Vonage · Unifonic (KSA) | OTP, phone verify | Backend | §6 |
| 7 | VoIP | Twilio Programmable Voice · Vonage Voice | Local Gulf numbers, calls | Backend, Flutter | §6 |
| 8 | Payments | Stripe · Checkout.com · Tap · HyperPay · Telr | PSP, 3DS, webhooks | Backend, Web, Flutter | §7 |
| 9 | Wallet | Apple Pay · Google Pay | Mobile checkout | Flutter | §7 |
| 10 | eSIM | Airalo · eSIM-Go · 1GLOBAL · Tele2 | Provisioning | Backend | §8 |
| 11 | VPN | WireGuard control · NordLayer | Tunnel mgmt | Backend, Flutter | §9 |
| 12 | AI | Anthropic Claude · OpenAI · Bedrock | Advisor 44–47 | Backend | §10 |
| 13 | Tax | ZATCA (KSA) · UAE FTA · Avalara · Fonoa | E-invoicing, VAT | Backend | §11 |
| 14 | Push | FCM · APNs | Notifications, deep links | Backend, Flutter | §12 |
| 15 | Storage | S3 / GCS / R2 | Receipts, exports | Backend | §13 |
| 16 | Errors | Sentry | Backend + Web + Flutter | All | §14 |
| 17 | Logs | Datadog · Logtail · OTLP | Structured logs | Backend, Web | §14 |
| 18 | Analytics | PostHog · Amplitude | Server + consent-gated client | Backend, clients | §15 |
| 19 | Maps | Mapbox · Google Maps · IPGeo | Coverage, geo | Flutter, Web | §16 |
| 20 | Support | Intercom · Zendesk | 63 Support, 64 FAQ | Flutter, Web | §17 |
| 21 | Stores | App Store Connect · Play Console | Build/release | CI | §18 |
| 22 | Anti-abuse | Cloudflare Turnstile · hCaptcha | Auth captcha | Web, Backend | §19 |

## How keys flow into the app

```
config/secrets.env  (gitignored, single file)
        │
        ├── Backend (NestJS):  loaded via @nestjs/config → ConfigService
        │                      typed schema in src/config/env.schema.ts
        │
        ├── Web Admin (Vite):  only VITE_* keys exposed at build via
        │                      `vite --mode production` reading .env
        │
        └── Flutter:           only FLUTTER_* keys passed via
                               `flutter build --dart-define-from-file=secrets.env`
                               (filtered to FLUTTER_* prefix at build script)
```

## Hard rules

- **Sandbox-only locally.** `APP_ENV=sandbox` for all dev. Production credentials never leave the secret manager.
- **Webhooks are signed.** Stripe / Checkout / Tap / Airalo all expose a signing secret — verify every webhook before acting (B5).
- **Never log secrets, full PII, card data, provider tokens.** Redact at logger middleware (R1).
- **Money is integer minor units + ISO 4217 currency** — never reconstructed client-side.
- **Client-shipped keys are only those in §20.** Anything else is server-only.
- **Rotate immediately** if a secret appears in chat, screenshots, or commits.

## Setup checklist

1. `cp config/secrets.env.example config/secrets.env`
2. Fill the §0–§19 values for your environment
3. Backend: `pnpm dev` reads `config/secrets.env` via dotenv-cli
4. Web admin: `pnpm --filter web-admin dev` (Vite picks up `VITE_*`)
5. Flutter: `flutter run --dart-define-from-file=config/secrets.flutter.env` (generated subset, FLUTTER_* only)
6. Verify nothing secret leaked into client bundle: `pnpm run audit:secrets`

## Open decisions (block production)

- PSP final selection (Stripe vs HyperPay/Tap depending on entity domicile) — **drives §7**
- E-invoicing approach (in-house ZATCA Phase 2 vs Merchant of Record) — **drives §11**
- eSIM provider final pick — **drives §8**
- Apple entitlements (eSIM CoreTelephony, VPN Network Extension, CallKit) — affects mobile build, not env
