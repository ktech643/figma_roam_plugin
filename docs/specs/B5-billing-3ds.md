# B5 · Billing & 3DS

Webhook is source of truth. PaymentLedger append-only. Refund is first-class.

## Flows

### One-shot purchase
```
POST /quote        → { quote_id, amount_minor, currency, breakdown }
POST /esim/orders  (Idempotency-Key) → { order_id, payment_intent }
client → 3DS challenge if required
provider webhook: payment_succeeded
   → PaymentLedger.charge appended
   → order.status = 'paid'
   → B7 ProvisioningService.queue(order_id)
```

### Subscription
```
POST /subscriptions → provider customer + subscription
recurring webhook: invoice.paid
   → PaymentLedger.charge appended
   → next_period_end advanced
   → B6 earn rule fires
recurring webhook: invoice.payment_failed
   → subscription.status = 'past_due'
   → B-01 retry banner; auto-retry per provider schedule
```

### Refund
```
POST /admin/esim/orders/:id/refund  (audited, B8)
   → adapter.refund → ledger.refund appended
   → order.status = 'refunded'
   → loyalty earn reversed (LoyaltyLedger.adjust negative)
```

### Top-up (eSIM)
```
POST /esim/lines/:id/topup → quote → pay → webhook → provision onto SAME ICCID
```

## 3DS handling
- `requires_action` response → client opens provider 3DS page in WebView
- On completion provider sends webhook; client polls order status
- 3DS timeout: 10 min; expired → user re-attempts
- SCA exemptions used where eligible (low-value, MIT)

## Webhook events table (per provider)
| Provider | Events handled |
|----------|---------------|
| Stripe | `payment_intent.succeeded`, `.payment_failed`, `invoice.paid`, `invoice.payment_failed`, `charge.refunded` |
| Checkout | `payment_captured`, `payment_declined`, `payment_refunded` |
| Tap | `CHARGE_SUCCESS`, `CHARGE_FAILED`, `REFUND_SUCCESS` |
| HyperPay | `PAYMENT.SUCCESS`, `PAYMENT.FAILED` |
| Telr | `transaction_completed`, `transaction_declined` |

## Acceptance
- [ ] Webhook idempotent on `(provider, event_id)`
- [ ] PaymentLedger never updated, only appended
- [ ] Refund reverses loyalty earn
- [ ] Top-up reuses ICCID, no duplicate line
- [ ] 3DS challenge survives app backgrounding
- [ ] Reconciliation job ties provider report to ledger daily
