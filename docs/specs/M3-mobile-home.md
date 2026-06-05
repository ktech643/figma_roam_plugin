# M3 · Mobile Home

Home shell (16–20). 4-tab bottom nav: Home / eSIM / Connect / Account.

## Screens
| ID | Screen | Endpoint |
|----|--------|----------|
| 16 | Dashboard | `GET /home/summary` |
| 17 | Notifications | `GET /notifications` |
| 18 | Search | `GET /search` |
| 19 | Trip detection | local + `POST /trips` |
| 20 | Quick actions | local |

## Home cards
1. Active eSIM (data %, top-up CTA)
2. Active VoIP number (minutes, dialer CTA)
3. VPN status (region, toggle, G-07/G-11 gated)
4. Loyalty balance + next-expiry warning
5. AI Advisor entry
6. Promotions banner

Stale-while-revalidate via Riverpod + hive cache.

## Acceptance
- [ ] Cards render from cache instantly, refresh in background
- [ ] Push tap routes to deep target
- [ ] Trip prompt fires once per destination
- [ ] Bottom nav hides on full-screen flows
