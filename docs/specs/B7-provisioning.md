# B7 · Provisioning

Orchestrates eSIM / VoIP / VPN / AI after webhook-confirmed payment. Provision ≠ install. Region-gated. Idempotent. Auto-refunds on permanent fail.

## Hard rules
- **Provision ≠ install.** Provisioned = provider gave us ICCID/config; installed = on user device.
- **Region-gated.** Every request checks `RegionFlag`; disabled → `REGION_DISABLED`.
- **Idempotent.** Re-running for same order = same result.
- **Auto-refund on permanent fail.** Emits event B5 listens to.

## Flow
```
B5 webhook: payment_succeeded
       ↓
ProvisioningService.queue(order_id)
       ↓
[BullMQ, retries 5× exponential]
       ↓
   region check → adapter.provision() → persist provider_ref/iccid/config
       ↓
   success: order.status='provisioned'; emit 'order.provisioned'
   permanent fail: order.status='failed'; emit 'order.provisioning_failed' → B5 auto-refund
```

## Per-product
- **eSIM**: returns `{ provider_ref, iccid, qr_code_url, smdp_address, activation_code }`. Compatibility check is device-side, only hash sent server-side. Top-up reuses ICCID.
- **VoIP**: number reserved 10min hold during checkout, claimed on payment. STUN/TURN + 1h tokens via `POST /voip/token`.
- **VPN**: G-07 consent required before config issue. Per-device WireGuard/OpenVPN. Restricted server lists never returned in restricted markets.
- **AI**: `POST /ai/chat` rate+budget limited. Server validates suggestions against catalog before showing. `recommendation_id` lineages purchase.

## Retry
- 5 attempts: 1s, 5s, 30s, 2min, 10min
- After 5 → permanent fail → emit `order.provisioning_failed`
- Transient (network, 5xx) retried; permanent (region, stock) fail fast

## Acceptance
- [ ] Provision/install distinction in state machine
- [ ] Idempotent re-runs verified
- [ ] Region-disabled rejected with proper code
- [ ] Permanent fail triggers auto-refund through B5
- [ ] AI suggestions filtered against catalog
- [ ] VPN config not issued without G-07 consent
- [ ] eSIM top-up reuses ICCID
