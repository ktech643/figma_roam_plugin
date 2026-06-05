# M2 · Mobile Auth

Onboarding (01–08) + Auth (09–15) + Step-up (S-01..S-03). Talks to B3 only.

## Screens
| ID | Screen | Endpoint |
|----|--------|----------|
| 01–08 | Onboarding + region select + consent | local + `POST /consent` |
| 09 | Sign in | `POST /auth/login` |
| 10 | Sign up | `POST /auth/register` |
| 11 | Forgot password | `POST /auth/password/reset/request` |
| 12 | Reset password (deep link) | `POST /auth/password/reset/confirm` |
| 13 | Email verify | `POST /auth/email/verify` |
| 14 | Phone verify (OTP) | `POST /auth/phone/start|verify` |
| 15 | 2FA challenge | `POST /auth/2fa/challenge` |
| S-01 | Enable TOTP | `POST /auth/2fa/totp/enroll` |
| S-02 | Backup codes | `GET /auth/2fa/backup-codes` |
| S-03 | Enable biometric | local + key wrap |

## Token handling
- Access token in memory; refresh token in `flutter_secure_storage`
- `dio` interceptor: 401 → `/auth/refresh` once → retry; fail → wipe + login
- Refresh rotation: server returns new refresh on each call

## Consent (G-13/G-14)
- Blocks app entry until accepted
- Stored locally + synced via `POST /consent`
- Policy version bump → re-prompt
- No analytics SDK init before consent flush

## Acceptance
- [ ] Login → 2FA → home end-to-end
- [ ] Refresh transparent on 401, single-flight
- [ ] Biometric opt-in stores refresh with biometric flag
- [ ] Consent persisted across reinstall via server sync
- [ ] All copy localized (en + ar), RTL verified
