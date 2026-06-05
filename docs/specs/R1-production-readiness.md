# R1 · Production Readiness

Tests, observability, security, deployment. The gate between "feature complete" and "shippable".

## Testing pyramid

### Backend
- Unit: services + adapters with mocks (Vitest/Jest)
- Integration: against real Postgres + Redis (Docker compose); covers prisma queries, BullMQ jobs, webhook handlers
- Contract: OpenAPI schema validated against responses (Dredd/Schemathesis)
- End-to-end: against sandbox provider adapters; happy + 5 failure modes per provider
- Load: k6 scenarios for auth, checkout, webhook ingestion (target: 200 RPS p95 < 300ms)
- Chaos: kill webhook mid-flight, kill provisioning job, simulate provider 500s — verify idempotency

### Mobile
- Unit + widget: `flutter test` with `mocktail`
- Golden tests for every shell screen × {light, dark, ltr, rtl} = 4 variants
- Integration: `integration_test` against staging
- Coverage gate ≥ 60% before merge

### Web admin
- Unit + component: Vitest + Testing Library
- E2E: Playwright covering A00..A19 happy paths + RBAC denial
- a11y: `axe-core` in CI, fail on violations

## Observability
- **Logs**: structured JSON via pino; correlation id per request; PII scrubbed
- **Metrics**: Prometheus (RPS, p50/p95/p99, error %, queue depth, payment success rate by provider)
- **Traces**: OpenTelemetry → Tempo/Honeycomb; trace propagated through BullMQ jobs
- **Errors**: Sentry (backend + mobile + web); release tagged; PII stripped before send
- **Uptime**: external probe on `/health` from 3 regions

## Dashboards (Grafana)
- Overview: RPS, error %, p95 latency
- Money: charge/refund rate, ledger lag, reconciliation mismatches
- Provisioning: queue depth, success/fail by provider, avg time-to-provision
- Auth: login success, 2FA challenge rate, refresh token rotations
- VPN/VoIP: active sessions, call quality MOS estimate

## Alerts (PagerDuty)
- p95 latency > 800ms for 5min
- Error rate > 2% for 5min
- Webhook ingestion lag > 60s
- Reconciliation mismatch backlog > 10
- Payment success drop > 5pp from baseline
- Any DLQ depth > 0 sustained 10min

## Security
- Static: Semgrep + ESLint + dart analyze; gate merges
- Deps: Dependabot + `pnpm audit` + `flutter pub outdated`
- Secrets: gitleaks pre-commit + CI; rotate any leaked PAT immediately
- DAST: ZAP baseline against staging weekly
- Pen test: external, before launch + annual
- WAF: Cloudflare in front of API
- Rate limits: per-IP + per-user (B3 policy)

## Deployment
- Backend: Docker → AWS ECS Fargate (or Fly); blue/green
- DB migrations: Prisma migrate; manual apply in prod with maintenance window if destructive
- Web admin: Cloudflare Pages
- Mobile: Fastlane → TestFlight + Play Internal → staged rollout (1% → 10% → 50% → 100%)
- Feature flags: server-controlled via `RegionFlag` + `FeatureFlag`; client respects without redeploy

## Environments
- `local` — docker-compose, sandbox providers
- `staging` — full pipeline, sandbox providers, anonymized data
- `prod` — live providers, real money, restricted access

## Backups & DR
- Postgres: PITR + daily snapshots, 30-day retention
- Redis: AOF; data is rebuildable
- RTO: 4h; RPO: 15min
- Quarterly DR drill (restore staging from prod backup)

## Privacy & compliance
- GDPR + KSA PDPL + UAE PDPL data-subject flows live
- Data export (S-06) automated within 30 days
- Account deletion (S-07) honored after 30-day cooling
- DPA signed with every sub-processor
- Annual review of data inventory

## Launch checklist
- [ ] All B0–B8 acceptance items passing
- [ ] All M1–M6 acceptance items passing
- [ ] All W1 acceptance items passing
- [ ] Pen test report: no high/critical open
- [ ] Load test: 200 RPS sustained, p95 < 300ms
- [ ] DR drill completed in last quarter
- [ ] Runbooks written for top 10 incident types
- [ ] On-call rota established; PagerDuty wired
- [ ] Legal sign-off: ToS, Privacy, VPN disclaimer, ZATCA, FTA
- [ ] Store listings approved (App Store + Play)
- [ ] Status page live
