# W1 · Web Admin Frontend

React + TypeScript + Vite + Tailwind v4. Generated client off B8 OpenAPI. RBAC-aware UI.

## Stack
- React 18 + Vite + TS
- Tailwind v4 (tokens from foundations)
- TanStack Query (server state) + TanStack Table (grids)
- React Hook Form + Zod
- Generated client via `openapi-typescript-codegen`

## Layout
- 240px left sidebar — Operations / Product / Commerce / Finance / System
- 64px top header — admin identity, env indicator, logout
- 24px content padding; white cards, 12px radius
- Tablet (768): sidebar collapses to 64px icons

## Screens (map to B8)
| ID | Screen |
|----|--------|
| A00 | Login + 2FA |
| A01 | Dashboard |
| A02 | Users list |
| A03 | User detail (tabs) |
| A04 | eSIM orders |
| A05 | VoIP numbers |
| A06 | VPN sessions |
| A07 | Revenue analytics |
| A08 | Subscription plans |
| A09 | Pricing management |
| A10 | Provider config |
| A11 | VPN server management |
| A12 | Loyalty & points |
| A13 | Referral program |
| A14 | Marketing campaigns |
| A15 | Support tickets |
| A16 | Notifications center |
| A17 | App settings |
| A18 | Admin users |
| A19 | Revenue reconciliation |

## Shared primitives
- `<DataTable>` — server pagination/filter/sort
- `<ConfirmModal>` — destructive/financial actions
- `<AuditTrail>` viewer
- `<MaskedField>` — last-4 only
- `<MoneyDisplay>` — formats `{ amount_minor, currency }`
- `<DateDisplay>` — UTC stored, locale rendered
- `<PermissionGate>` — hides children if missing perm

## RBAC
- Permissions returned on login
- Nav hidden / buttons disabled for missing perms
- Server still enforces — UI gating is convenience

## State
- Server: TanStack Query
- Auth: React Context + refresh interceptor
- Idle lock: 15-min; lock screen requires re-auth

## Acceptance
- [ ] Generated client used everywhere (no hand calls)
- [ ] RBAC denial removes UI access immediately
- [ ] Every list has loading/empty/error states
- [ ] Every mutation has confirmation + audit visible
- [ ] Money rendered ONLY via `<MoneyDisplay>`
- [ ] Sensitive fields masked
- [ ] Lighthouse a11y > 95 per screen
