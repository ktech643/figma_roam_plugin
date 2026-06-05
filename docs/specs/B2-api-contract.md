# B2 · API Contract

OpenAPI 3.1 source of truth. Generates clients for mobile (dart) + web (TS).

## Conventions
- Base: `/api/v1`
- JSON only; UTF-8
- Cursor pagination: `?cursor=&limit=` → `{ items, next_cursor }`
- Money pair: `{ amount_minor: int, currency: string }` — never split
- Time: ISO 8601 UTC; client formats to locale
- All mutations require `Idempotency-Key` header

## Error codes
| Code | HTTP | Meaning |
|------|------|---------|
| `AUTH_REQUIRED` | 401 | No/expired token |
| `AUTH_2FA_REQUIRED` | 401 | Login produced challenge |
| `FORBIDDEN` | 403 | RBAC denial |
| `RESOURCE_NOT_FOUND` | 404 | — |
| `VALIDATION_ERROR` | 422 | Field-level details |
| `IDEMPOTENCY_CONFLICT` | 409 | Same key, different body |
| `RATE_LIMITED` | 429 | Includes `Retry-After` |
| `REGION_DISABLED` | 451 | Feature off in market |
| `PAYMENT_FAILED` | 402 | With provider reason |
| `PROVISIONING_FAILED` | 502 | Permanent fail; refund triggered |
| `INTERNAL_ERROR` | 500 | Trace id returned |

## Endpoint groups
- `/auth/*` (B3)
- `/me/*` (profile, sessions, consent, data export)
- `/esim/*` `/voip/*` `/vpn/*` `/ai/*` (provisioning)
- `/billing/*` `/subscriptions/*` `/receipts/*` (B5)
- `/loyalty/*` `/referrals/*` (B6)
- `/quote` `/orders/*` (commerce)
- `/webhooks/*` (provider ingress)
- `/system/*` (status, version)
- `/admin/*` (B8 — separate realm)

## Headers
- `Authorization: Bearer <access>`
- `X-Market: AE|SA|QA|KW|BH|OM`
- `Accept-Language: en|ar`
- `Idempotency-Key: <uuid>`
- Response: `X-Request-Id`, `X-Unread-Count` (where relevant)
