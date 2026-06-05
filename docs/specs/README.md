# Roamlu Specs

Phase-based build plan. Each MD is a contract for one slice of the system. Read in order.

## Build order
| Phase | Topic |
|-------|-------|
| foundations | Design tokens, typography, accessibility |
| B0 | Backend setup |
| B1 | Data model |
| B2 | API contract |
| B3 | Auth & security |
| B4 | Provider adapters |
| B5 | Billing & 3DS |
| B6 | Loyalty ledger |
| B7 | Provisioning |
| B8 | Admin API |
| FL | Tax & fiscal |
| W1 | Web admin frontend |
| M1 | Mobile foundations |
| M2 | Mobile auth |
| M3 | Mobile home |
| M4 | Mobile eSIM/VoIP/VPN |
| M5 | Mobile AI/billing/loyalty |
| M6 | Mobile account/system |
| R1 | Production readiness |
| delivery | Handoff |

## Cross-cutting non-negotiables
1. Money is `{ amount_minor, currency }` integers — never float, never reconstructed client-side
2. Idempotency on all mutating endpoints via `Idempotency-Key`
3. Webhook is the source of truth for payment + provisioning state
4. Append-only ledgers for money + loyalty
5. RBAC enforced server-side; client gating is convenience
6. Region flags drive market availability — server filters, client doesn't hide
7. Consent before any tracking SDK initializes
8. PII redaction in logs, traces, error reports
9. Provider secrets write-only beyond last-4
10. Provision ≠ install — separate states, separate events
