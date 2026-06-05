# M6 · Mobile Account / System

Account (58–66, S-06, S-07) + System edge cases (G-01..G-15). The boring-but-critical surfaces.

## Account (58–66)
| ID | Screen | Endpoint |
|----|--------|----------|
| 58 | Account home | `GET /me` |
| 59 | Profile edit | `PATCH /me` |
| 60 | Security (password, 2FA, biometric, sessions) | various |
| 61 | Active sessions | `GET /me/sessions` + `DELETE /me/sessions/:id` |
| 62 | Privacy & data | `GET /me/consent` + export/delete |
| 63 | Language & region | local + `PATCH /me` |
| 64 | Help & support | `GET /support/articles` + `POST /support/tickets` |
| 65 | About / legal | static + versioned |
| 66 | Sign out | `POST /auth/logout` |
| S-06 | Data export request | `POST /me/data-export` |
| S-07 | Account deletion | `POST /me/delete` (cooling period) |

### Privacy & data (62)
- Show all consent toggles with effective date
- "Download my data" → S-06 → email link when ready (server async)
- "Delete my account" → S-07 → 30-day cooling period; cancellable from email link
- All actions audited

### Sessions
- List: device name, last active, IP/region, current session marked
- Revoke individual or all-others-but-this

### Sign out
- Wipes secure storage keys (refresh token, biometric wraps)
- Preserves consent + locale (so re-login isn't friction)
- Routes to `/auth/login`

## System / G-codes (G-01..G-15)
| ID | State | Behavior |
|----|-------|----------|
| G-01 | Maintenance mode | Full-screen overlay; from `GET /system/status` |
| G-02 | No internet | Banner overlay; offline reads from cache |
| G-03 | Server error (5xx) | Inline error with retry; sentry-tagged |
| G-04 | Deep-link resume post-auth | Persist intent; route after login |
| G-05 | Outdated app version | Hard block + store link |
| G-06 | Account suspended | Read-only mode + support CTA |
| G-07 | VPN legal disclaimer | Blocks VPN until accepted |
| G-08 | Trip detected | One-shot prompt |
| G-09 | Region disabled (feature) | Inline replacement card |
| G-10 | Region restricted (commerce) | Hidden from catalog |
| G-11 | VPN region restricted | Visible explanation, no servers |
| G-12 | Rate limited | Friendly retry-after countdown |
| G-13 | Consent required (first run) | Modal blocks app entry |
| G-14 | Consent updated (policy bump) | Modal re-prompts on launch |
| G-15 | Permission denied (cam/loc/notif) | Inline rationale + settings deeplink |

## Force-update (G-05)
- App fetches `GET /system/version` on cold start (cached 1h)
- If `min_supported > current` → hard block with store link
- `recommended > current` → soft banner

## Maintenance (G-01)
- Server returns `503` with `{ retry_after, message_localized }`
- Client renders maintenance screen, polls every `retry_after`

## Status & banners stack
- Single banner host at root (above bottom nav)
- Priority: G-01 > G-05 > G-06 > G-02 > G-12 > G-14
- Only one banner shown at a time

## Acceptance
- [ ] Sign-out wipes secure storage but preserves locale + consent
- [ ] Account deletion cooling period reversible until day 30
- [ ] All G-codes verified with stub server responses
- [ ] Force-update blocks all app surfaces (no escape via deep link)
- [ ] Maintenance polling backs off properly
- [ ] Permission rationale screens link to OS settings on each platform
