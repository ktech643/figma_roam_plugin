# M4 · Mobile eSIM / VoIP / VPN

Connectivity products. Region-gated by B7. Server-driven provisioning; client renders state.

## eSIM (21–30, E-01..E-03)
- 21–22 catalog + detail / 23 compatibility / 24 quote / 25 checkout / 26 3DS / 27 success / 28 my eSIMs / 29 detail+usage / 30 install
- Install: universal link preferred, QR fallback, manual copy last
- Top-up reuses ICCID (no new line)

## VoIP (31–38, V-01..V-02)
- Search / detail / checkout / lines / dialer / history / voicemail / settings
- CallKit (iOS) + ConnectionService (Android) mandatory
- STUN/TURN from `POST /voip/token` (1h)

## VPN (39–43, G-07, G-11)
- Home / region picker / connect / session detail / settings
- WireGuard preferred; OpenVPN fallback
- Kill switch via NetworkExtension (iOS)
- G-07 disclaimer required; restricted markets omit servers entirely

## Region gates (G-09/G-10)
- Server filters catalog by `RegionFlag.feature`
- G-09 takes over with explanation if disabled feature is reached

## Acceptance
- [ ] Universal link + QR install both verified on real devices
- [ ] CallKit cold-start incoming call works
- [ ] VPN kill switch verified
- [ ] Disabled regions never reach UI
- [ ] All purchases idempotent across kill/resume
