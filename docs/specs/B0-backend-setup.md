# B0 · Backend Setup

NestJS 10 + TypeScript + Prisma + Postgres 16 + Redis + BullMQ. REST/OpenAPI 3.1. Pino logs, OTel traces.

## Module tree
```
src/
  main.ts
  app.module.ts
  common/
    errors/        # B0 envelope { error: { code, message, details } }
    idempotency/   # Redis-backed Idempotency-Key decorator
    money/         # { amount_minor, currency }
    rbac/          # guards + decorators
    audit/         # AuditLog writer
  modules/
    auth/ users/ consent/ region/
    esim/ voip/ vpn/ ai/
    billing/ subscriptions/ receipts/
    loyalty/ referrals/
    provisioning/ webhooks/ adapters/
    admin/ notifications/ search/
```

## Error envelope
```json
{ "error": { "code": "VALIDATION_ERROR", "message": "...", "details": { "field": "..." } } }
```

## Health
- `GET /health` — liveness
- `GET /health/ready` — readiness (DB + Redis + provider sandbox reachability)
- `GET /system/status` — public maintenance flag (G-01)
- `GET /system/version` — `{ min_supported, recommended }` (G-05)
