# B1 · Data Model

Prisma schema. Append-only ledgers for money + loyalty. Soft delete via `deleted_at` only where audit-required.

## Core entities

```prisma
model User {
  id              String   @id @default(cuid())
  email           String   @unique
  phone           String?  @unique
  password_hash   String
  status          UserStatus  // active | suspended | deleted
  market          String      // ISO market code
  locale          String      // en, ar
  loyalty_balance Int      @default(0)  // denormalized; SUM(LoyaltyLedger)
  created_at      DateTime @default(now())
  updated_at      DateTime @updatedAt
}

model Consent {
  id              String   @id @default(cuid())
  user_id         String
  policy_version  String
  channels        Json     // { marketing, analytics, ... }
  accepted_at     DateTime
  ip              String
}

model Session {
  id              String   @id @default(cuid())
  user_id         String
  refresh_hash    String   @unique
  device_name     String?
  ip              String?
  last_used_at    DateTime
  expires_at      DateTime
  revoked_at      DateTime?
}

model EsimOrder {
  id, user_id, plan_id, status, provider, provider_ref,
  iccid, amount_minor, currency, idempotency_key @unique,
  created_at, provisioned_at
}

model Subscription {
  id, user_id, plan_id, status (active|past_due|paused|canceled),
  current_period_start, current_period_end,
  provider_ref, created_at, canceled_at
}

model PaymentLedger {                    // APPEND-ONLY
  id, user_id, type (charge|refund|adjustment),
  amount_minor Int, currency String,
  reference, idempotency_key @unique,
  source, metadata Json, created_at
}

model LoyaltyLedger {                    // APPEND-ONLY
  id, user_id,
  type (earn|redeem|expire|adjust),
  delta Int,
  reason, reference,
  idempotency_key @unique,
  metadata Json, created_at
}

model RegionFlag {
  id, market, feature (esim|voip|vpn|ai),
  enabled Bool, reason, updated_at, updated_by
  @@unique([market, feature])
}

model AuditLog {
  id, actor_id, actor_type (user|admin|system),
  action, target_type, target_id,
  before Json, after Json,
  ip, reason, created_at
}
```

## Invariants
- `User.loyalty_balance == SUM(LoyaltyLedger.delta WHERE user_id)` — verified by daily check
- `PaymentLedger` never updated, only appended
- `idempotency_key` unique enforced at DB level
- All money columns are `Int` (minor units) + paired `currency` String
