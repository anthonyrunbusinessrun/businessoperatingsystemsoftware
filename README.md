# BOSS Platform

> Business Operating System — Ray Land Inc. | Melonbook™ 2025

**Stack:** Expo · Supabase (PostgreSQL 15) · Railway · TypeScript
**PM + Lead Dev:** Anthony Duran (anthony@runbusiness.com)
**Client:** Ray Land, Inc.
**Jira Epic:** [BP-1](https://rayland-runbusiness.atlassian.net/browse/BP-1)
**Repo:** https://github.com/anthonyrunbusinessrun/businessoperatingsystemsoftware

---

## What is BOSS?

BOSS is a full-stack, mobile-first Business Operating System combining:
- **Commercial register** — Folios, Vouchers, 30+ form types (IN, RS, BL, CT, KT, FB...)
- **Double-entry accounting ledger** — GL, Chart of Accounts (LWS/LTB series)
- **Logistics tracker** — Freight, TLC/FSMA-204 barcode labels, SMS alerts via Telnyx

## Structure

```
businessoperatingsystemsoftware/
├── apps/
│   └── mobile/          # Expo React Native (iOS + Android + Web)
├── packages/
│   ├── api/             # Railway Node.js Express API server
│   ├── db/              # Supabase SQL migrations (PostgreSQL 15)
│   └── scripts/         # Airtable → Supabase migration scripts
├── docs/                # Architecture, schema docs, runbooks
└── .github/workflows/   # CI/CD (Railway + EAS)
```

## Quick Start

```bash
git clone https://github.com/anthonyrunbusinessrun/businessoperatingsystemsoftware
cd businessoperatingsystemsoftware
npm install
cp .env.example .env
# Fill in Supabase, Railway, Telnyx credentials then:
npm run api        # Start Railway API server
npm run mobile     # Start Expo app
```
