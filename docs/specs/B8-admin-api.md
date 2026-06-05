# B8 · Admin API

Separate auth realm. Read-mostly with high-stakes mutations. Every mutation audited. Aggregates reconcile to ledgers.

## Realm separation
- Different signing secret from consumer auth (B3)
- Different login: `POST /admin/auth/login` + `/admin/auth/2fa/challenge`
- Idle timeout: 15 min
- Sensitive mutations re-prompt for password OR step-up TOTP

## Endpoint groups

### Operations
- `GET /admin/dashboard/kpis`
- `GET /admin/users` `GET /admin/users/:id`
- `POST /admin/users/:id/suspend` (audited reason required)
- `POST /admin/users/:id/sessions/:sid/revoke`
- `POST /admin/users/:id/password-reset/trigger`
- `GET /admin/users/:id/pii` (high-attention audit)

### Product
- `GET /admin/esim/orders` `POST .../reprovision` `POST .../refund`
- `GET /admin/voip/numbers` `POST .../release`
- `GET /admin/vpn/sessions` `POST .../revoke`
- `GET /admin/vpn/servers` + CRUD
- `GET /admin/providers/config` + `PATCH` (secrets write-only beyond last-4)

### Commerce
- `GET /admin/plans` + CRUD
- `GET /admin/pricing` `POST /admin/pricing/versions` (effective_at)
- `GET /admin/loyalty/ledger` `POST /admin/loyalty/adjust` (audited)
- `GET /admin/referrals` `POST /admin/referrals/:id/{approve|reject}`
- `GET /admin/campaigns` + CRUD

### Finance
- `GET /admin/revenue` `GET /admin/revenue/reconciliation`
- `POST /admin/revenue/reconciliation/:id/resolve` (reason required)

### System
- `GET /admin/settings` `PATCH /admin/settings/:key` (audited)
- `GET /admin/admins` + role/permission management

## Audit
Every mutation writes `AuditLog`: actor_id, action, target_type/id, before/after JSON diff, ip, reason.

## Approval thresholds
- Loyalty adjust > 10,000 pts → second admin approval
- Refund > $500 → finance role approval
- Pricing change → second admin approval
- Action stored as `pending`; second approves; both audited

## Acceptance
- [ ] Admin auth fully isolated from consumer
- [ ] RBAC enforced server-side per role
- [ ] Every mutation produces AuditLog row
- [ ] Approval-required actions cannot self-approve
- [ ] PII view triggers high-attention audit
- [ ] Provider secrets never returned beyond last-4
- [ ] Pricing changes versioned + queryable
