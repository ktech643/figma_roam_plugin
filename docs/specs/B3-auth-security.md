# B3 · Auth & Security

JWT access (15min) + opaque refresh (30d, rotated, reuse-detection). Argon2id passwords. 2FA TOTP+SMS. Biometric step-up.

## Endpoints
- `POST /auth/register`
- `POST /auth/login` → `{ access, refresh }` or `{ challenge, methods[] }` if 2FA
- `POST /auth/refresh` (rotates)
- `POST /auth/logout` (revokes session)
- `POST /auth/2fa/challenge` `POST /auth/2fa/totp/enroll` `GET /auth/2fa/backup-codes`
- `POST /auth/email/verify` `POST /auth/phone/start|verify`
- `POST /auth/password/reset/request|confirm`

## Token spec
- Access: JWT HS256/EdDSA, 15min, `{ sub, sid, perms[], market }`
- Refresh: opaque random 256-bit, hashed in DB, 30d, single-use, rotated
- Reuse detection: presenting an already-rotated refresh → revoke entire family + alert

## Password
- Argon2id: m=64MB, t=3, p=4
- Min 10 chars, server-enforced
- Breach check via k-anon HIBP at signup + reset

## 2FA
- TOTP (RFC 6238) primary
- SMS fallback via Twilio/Unifonic
- 10 backup codes (8 chars, single-use)
- Step-up on sensitive ops (S-01..S-03, account delete)

## RBAC
- Roles: `user`, `admin_support`, `admin_finance`, `admin_ops`, `admin_super`
- Permissions: action-scoped strings (`user.suspend`, `pricing.update`, ...)
- Server enforced at guard layer; client sees `perms[]` in token for UI gating

## Rate limits (per IP + per user)
| Route | Limit |
|-------|-------|
| `/auth/login` | 10/min IP, 5/min user |
| `/auth/2fa/challenge` | 5/min user |
| `/auth/password/reset/request` | 3/hr IP+email |
| `/ai/chat` | per-user daily token cap |
| default mutations | 60/min user |

## Idempotency
- `Idempotency-Key` required on POST/PATCH/PUT
- Stored in Redis 24h with response hash
- Same key + same body → cached response
- Same key + different body → `IDEMPOTENCY_CONFLICT`

## Audit events
- `auth.login.success/fail`
- `auth.2fa.enrolled/used`
- `auth.session.revoked`
- `user.password.reset`
- `user.consent.updated`
- `admin.*` (B8)
