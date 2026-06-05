# B4 · Provider Adapters

All third-party integrations behind narrow interfaces. Sandbox + live separated by config. Webhook signing verified.

## Adapter shape

```ts
interface PaymentAdapter {
  charge(input: ChargeInput): Promise<ChargeResult>
  refund(input: RefundInput): Promise<RefundResult>
  tokenizeCard(input: CardInput): Promise<{ token: string, last4: string, brand: string }>
  verifyWebhook(req: RawRequest): WebhookEvent | InvalidSignature
}
```

## Required adapters
| Domain | Adapters |
|--------|----------|
| Payments | Stripe, Checkout.com, Tap, HyperPay, Telr |
| eSIM | Airalo, eSIMGo, 1GLOBAL |
| VoIP | Twilio, Vonage, Unifonic |
| VPN | WireGuard (self-hosted), NordLayer |
| AI | Anthropic, OpenAI, AWS Bedrock |
| Email | Postmark, SendGrid, SES |
| Push | FCM, APNs |
| Storage | S3 |

## Webhooks
- Each provider has own ingress: `POST /webhooks/{provider}`
- Signature verified before parsing
- Raw body preserved (no JSON parse before verify)
- Event recorded in `WebhookEvent` table; processed via BullMQ
- Idempotent on `(provider, event_id)`

## Error mapping
- All adapter errors normalize to `{ kind: 'transient' | 'permanent', code, message }`
- Transient → retry per B7 policy
- Permanent → fail fast → trigger refund (B5/B7)

## Secrets
- Config via env (`config/secrets.env.example`)
- Live keys vault-only (AWS Secrets Manager / 1Password Secrets Automation)
- Never logged; never returned in API responses beyond last-4
