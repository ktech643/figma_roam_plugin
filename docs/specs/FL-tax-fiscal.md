# FL · Tax & Fiscal

Gulf VAT + e-invoicing compliance. ZATCA Phase 2 (KSA) + UAE FTA. MoR alternative for non-direct markets.

## VAT rules
| Market | Rate | E-invoicing |
|--------|------|-------------|
| UAE (AE) | 5% | FTA TRN required |
| KSA (SA) | 15% | ZATCA Phase 2 (clearance + reporting) |
| Qatar (QA) | 0% (planned) | — |
| Kuwait (KW) | 0% (planned) | — |
| Bahrain (BH) | 10% | NBR |
| Oman (OM) | 5% | OTA |

## Receipt JSON
```json
{
  "receipt_id": "RCP-...",
  "issued_at": "ISO",
  "seller": { "name", "tax_id", "address" },
  "buyer": { "name", "tax_id?", "address?" },
  "currency": "AED",
  "lines": [
    { "description", "quantity", "unit_amount_minor", "tax_rate", "tax_amount_minor", "total_minor" }
  ],
  "subtotal_minor", "tax_total_minor", "total_minor",
  "fiscal": {
    "zatca": { "uuid", "hash", "qr_base64" } | null,
    "fta": { "trn", "tax_invoice_number" } | null
  }
}
```

## ZATCA Phase 2 (KSA)
- Every invoice cleared via ZATCA portal before delivery
- TLV-encoded QR on receipt
- UUID + hash chain across invoices
- Report aggregation hourly

## UAE FTA
- TRN on every receipt
- VAT 5% line-item
- Quarterly VAT return support (export endpoint)

## B2B reverse charge
- If `buyer.tax_id` present and cross-border within GCC → reverse charge
- VAT reported as `0` with `reverse_charge: true` flag

## MoR alternative
- For markets without direct registration (initial QA/KW): use Merchant of Record (Paddle / Lemon Squeezy)
- Receipts issued by MoR; we link via `mor_invoice_ref`

## Acceptance
- [ ] ZATCA submission integrated, retries on failure
- [ ] FTA TRN rendered on UAE receipts
- [ ] Reverse-charge logic verified
- [ ] Quarterly VAT export reconciles to PaymentLedger
- [ ] Receipts localized en/ar
