# B6 · Loyalty Ledger

Append-only point ledger. Earn on webhook-confirmed events only. Redeem applies at quote, never overspends.

## Earn rules
| Event | Points |
|-------|--------|
| eSIM purchase paid (B5 webhook) | 10 pts per AED equivalent |
| Subscription renewal paid | 20 pts per AED equivalent |
| Referral confirmed (referee first paid order) | 500 pts |
| Profile complete | 100 pts (one-time) |

- Awarded ONLY on payment webhook arrival — never on order creation
- Cross-currency: server converts to AED at event time (rate in metadata)
- Idempotent: keyed by `payment_id`

## Redeem
- `POST /loyalty/preview-redeem` → `{ max_redeemable_minor, balance, lock_expires_at }`
- `POST /loyalty/redeem` (idempotent) applies
- Row-level lock during redeem; concurrent redeems serialized
- Cap: max 50% of order total
- 100 pts = 1 AED off (configurable per market via A12)

## Expiry
- Rolling 12 months from earn date
- Daily job appends `expire` row with negative delta
- User-facing warning when next expiry < AED 5

## Endpoints
| Method | Path | Purpose |
|--------|------|---------|
| GET | `/loyalty/balance` | balance + next_expiry |
| GET | `/loyalty/ledger` | paginated history |
| POST | `/loyalty/preview-redeem` | quote-time, returns max + lock |
| POST | `/loyalty/redeem` | idempotent, applies to order |
| POST | `/admin/loyalty/adjust` | admin manual; audited |

## Ledger row
```ts
{
  id, user_id,
  type: 'earn' | 'redeem' | 'expire' | 'adjust',
  delta: number,
  reason: string,
  reference: string,
  idempotency_key: string,  // UNIQUE
  metadata: Json,
  created_at: DateTime
}
```

`User.loyalty_balance` is denormalized; invariant `balance == SUM(delta)` verified daily.

## Acceptance
- [ ] Earn only on B5 webhook
- [ ] 50% redeem cap enforced server-side
- [ ] 10 concurrent redeems never overspend
- [ ] Expiry job idempotent
- [ ] Balance invariant passes after every test
- [ ] Manual adjust requires reason + audit
