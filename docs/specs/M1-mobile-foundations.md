# M1 · Mobile Foundations

Flutter shell. Theme, i18n (en/ar), routing, secure storage, generated API client. Light + dark + RTL.

## Stack
- Flutter 3.27+ (stable)
- Riverpod for state
- `go_router` for routing + deep links
- `flutter_secure_storage` for tokens (Keychain / Keystore)
- `dio` + retrofit-style generated client
- `easy_localization` for i18n
- `intl` for currency / date formatting
- `flutter_local_notifications` + `firebase_messaging`
- `local_auth` for biometric

## Project structure
```
lib/
  main.dart
  app.dart                    # MaterialApp.router with theme
  config/                     # env, flavors
  theme/                      # light + dark from foundations tokens
  router/                     # go_router config
  l10n/                       # ar.arb, en.arb
  api/                        # generated from B2 OpenAPI
  core/
    storage/ auth/ money/ consent/
  features/
    onboarding/ auth/ home/ esim/ voip/ vpn/
    ai/ billing/ loyalty/ account/ system/
```

## Theme
- `ThemeData.light/dark` with all tokens from foundations
- Fonts: DM Serif Display, DM Sans, Cairo, JetBrains Mono
- `Directionality` switches at root by locale
- Numbers stay LTR in RTL (Money/IDs wrapped explicitly)

## i18n
- ARB files per screen
- Arabic default for KSA / UAE region
- All copy through `tr('key')`

## Routing
- Routes mirror screen IDs
- Deep links: `roamlu://...` + universal `https://app.roamlu.com/...`
- G-04 deep-link resume: persist intent, route through auth, resume

## Secure storage
- Refresh token with biometric flag (after S-03)
- Access token in memory only
- Logout wipes all keys

## Money display
- Always `Money({ amount_minor, currency })`
- `intl` formatter renders per locale
- Never reconstruct or recompute client-side

## Consent persistence
- `ConsentService` writes local + syncs server on login
- Versioned (`policy_version`); bumps re-prompt
- Persisted before any tracking SDK init

## Connectivity / offline
- `connectivity_plus` for network state
- G-02 banner overlays on offline
- Cached reads via `drift`

## Dev quality bars
- `flutter analyze` clean
- `dart format` enforced
- `flutter test --coverage` ≥ 60%

## Acceptance
- [ ] Light + dark + RTL render every shell component
- [ ] Generated client compiles + token refresh works end-to-end
- [ ] Deep link from cold start resumes after auth
- [ ] Money type used everywhere (no raw `double` for currency)
- [ ] Consent persisted across reinstalls
- [ ] No third-party SDK initializes before consent
