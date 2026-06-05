# M5 · Mobile AI / Billing / Loyalty

AI Advisor (44–47), Billing (48–53, B-01..B-02), Loyalty (54–57). Quote-time pricing is server-authoritative.

## AI Advisor (44–47)
| ID | Screen | Endpoint |
|----|--------|----------|
| 44 | Advisor home (suggested prompts) | `GET /ai/suggestions` |
| 45 | Chat thread | `POST /ai/chat` (SSE) |
| 46 | Suggested plan card (in-thread) | embedded |
| 47 | Apply suggestion → checkout | `POST /quote` with `recommendation_id` |

- SSE streaming with cancel button
- Plan-suggestion cards rendered from validated server payload only — never parse free-form LLM text into plans
- Show `recommendation_id` lineage on resulting order
- Daily token budget visible in 44 footer

## Billing (48–53, B-01..B-02)
| ID | Screen | Endpoint |
|----|--------|----------|
| 48 | Payment methods | `GET /billing/methods` |
| 49 | Add card (3DS) | `POST /billing/methods` (provider tokenization) |
| 50 | Subscriptions list | `GET /subscriptions` |
| 51 | Subscription detail | `GET /subscriptions/:id` |
| 52 | Receipts | `GET /receipts` |
| 53 | Receipt detail (ZATCA / FTA) | `GET /receipts/:id` |
| B-01 | Failed payment retry | `POST /billing/retry` |
| B-02 | Subscription paused / past-due | local |

### Card capture
- Always provider-tokenized (Stripe/Checkout/Tap/HyperPay/Telr) — PAN never touches our servers
- Last-4 + brand only stored
- 3DS challenge in WebView; close on completion event

### Receipts
- PDF generated server-side; render via in-app viewer
- KSA receipts include ZATCA QR; UAE include FTA TRN
- Fully localized (en/ar)

### Subscription state
- `active` / `past_due` / `paused` / `canceled`
- `past_due` → B-01 retry CTA on home banner
- Cancellation: "cancel at period end" default; immediate requires confirm modal

## Loyalty (54–57)
| ID | Screen | Endpoint |
|----|--------|----------|
| 54 | Loyalty home (balance, next expiry) | `GET /loyalty/balance` |
| 55 | Earning history | `GET /loyalty/ledger` |
| 56 | Redeem at checkout (modal) | `POST /loyalty/preview-redeem` + `/loyalty/redeem` |
| 57 | Referral program | `GET /referrals/me` + `POST /referrals/invite` |

### Redeem modal
- Slider capped at server-returned `max_redeemable_minor`
- Shows AED/local equivalent live
- Lock TTL countdown; if expires before purchase → re-quote
- Concurrent guard: server lock during redeem

### Referrals
- Share sheet emits link with attribution code
- Status states: `invited` / `signed_up` / `confirmed` (first paid) / `paid_out`
- 500 pts only on confirmed (B6)

## Acceptance
- [ ] AI plan suggestion always resolves to a real catalog plan or none
- [ ] Card add returns immediately with last-4; PAN never leaves provider iframe
- [ ] Receipts render correctly in en + ar with ZATCA QR (KSA) / FTA TRN (UAE)
- [ ] Redeem slider never exceeds server cap; race test passes
- [ ] Referral attribution survives reinstall (deferred deep link)
