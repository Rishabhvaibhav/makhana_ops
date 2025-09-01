# makhana_ops
Track member investments and ownership, capture production costs (machinery, labor, sheet, transportation), manage brokers/sellers/distributors, monitor export rates, and view real-time P&amp;L with one‑click XLSX export and Google Sheets sync

Here’s a comprehensive README.md for the Makhana Ops dashboard.

# Makhana Ops Dashboard

A minimal, black–gold, browser-based business dashboard for makhana (fox nut) operations. Built as a static HTML/CSS/JS app with Google Sign‑In + Google Sheets read/write, SheetJS one‑click XLSX export, Chart.js visualizations, and role-based views for Operations, Sales/Finance, Inventory, and QA.

## Features

- Members & investments
  - Manage members (Rishabh, Navneet, Abhishek, Abhinav), add/edit/remove, and maintain investment ledger
  - Auto-calculate ownership by contributed capital and distribute profits accordingly
- Production & costs
  - Capture machinery, labor, sheet, and transportation costs (OpEx/COGS/CapEx with depreciation tagging)
  - Batch tracking with yield, COGS, and gross margin snippets
- Sales & network
  - Orders with margin bars and fulfillment states
  - Broker/Seller/Distributor profiles with commissions, terms, performance
- Export & backup
  - One-click XLSX export of any view and consolidated P&L workbook
  - Google Sheets as the operational datastore with read/write
- P&L analytics
  - Revenue, COGS, OpEx, Net Profit; Month/QTD/YTD trends with sparklines
  - Expense breakdown and drill-ins
- Design system
  - Dark-gray base with gold accents; accessible contrast, minimal components, responsive layout
  - Tailwind-ready tokens for dark mode; Chart.js dark theming

## Tech Stack

- Frontend: HTML, CSS (Tailwind-ready), vanilla JS, Chart.js
- Data: Google Sheets (primary store), XLSX export for share/backup
- Auth: Google Sign‑In (OAuth)
- Export: SheetJS (client-side)

## Information Architecture

- Overview: KPI cards, quick trends, exports
- Members: roster, ownership %, invested amount, ledger
- Investments: entries, add-ons, withdrawals
- Production: batches, yields, costs per unit
- Costs: machinery, labor, sheet, transportation; CapEx vs OpEx
- Logistics: shipments, routes, broker cost, delivery status
- Sales: orders, margins, channel filters
- P&L: Revenue → COGS → Gross Profit → OpEx → Net Profit
- Network: Broker, Seller, Distributor tabs
- Settings: roles, tokens, theme

## Initial Data (example)

- Members
  - Rishabh ₹1,00,000 (26.8%)
  - Navneet ₹2,00,000 (53.6%)
  - Abhishek ₹50,000 (13.4%)
  - Abhinav ₹20,000 (5.4%)
- KPIs (sample)
  - Monthly Revenue ₹2,85,000; Costs ₹1,80,000; Gross Profit ₹1,05,000; Margin 36.8%
  - Production Batches 12; Active Orders 8

## Setup

1) Clone or download
- Place files on any static host (e.g., local filesystem, static server)

2) Dependencies (CDN)
- Chart.js
- SheetJS
- Google Platform scripts (for Sign‑In and Sheets API)

3) Google Cloud & Sheets
- Create a Google Cloud project
- Enable Google Sheets API
- Create OAuth Client ID (Web)
- Add authorized origins and redirect URLs
- Create a Google Spreadsheet titled “Makhana Ops”
- Add tabs: ProductionBatches, QCResults, InventoryMovements, SalesOrders, Purchases, Expenses, Dim_SKU, Dim_Customer, Dim_Supplier, Dim_Machine, Dim_Shift, Dim_Warehouse
- Share access as needed and capture Spreadsheet ID

4) Configuration
- In app.js (or config), set:
  - client_id (OAuth Client ID)
  - scopes (Sheets read/write)
  - spreadsheetId (target Google Sheet)
- Optionally map sheet ranges per module

## Running Locally

- Open index.html in a modern browser
- Sign in with Google in-app
- Grant Sheets permissions
- Navigate modules from sidebar
- Use “Export XLSX” to download current view
- Use “Backup to Sheets” (if provided) to sync local edits

## Usage Tips

- Keep gold accents for CTAs and KPI highlights to maintain focus
- Prefer dark-gray surfaces (#0D0F12 – #1A1F29) over pure black for reduced glare
- Use ownership-based distribution for profit unless specific partner terms override
- Classify costs properly (COGS vs OpEx vs CapEx) to keep P&L consistent
- Use exports for sharing with stakeholders who don’t have Sheets access

## Roles & Permissions (suggested)

- Operations: Production, Costs, Logistics (edit), Sales (view)
- Sales/Finance: Sales, P&L, Investments (edit), Production (view)
- QA: QCResults (edit), Production (view)
- Admin: Members, Settings, all modules (edit)

## Data Model (high level)

- Member: id, name, role, investedAmount, ownershipPercent, contact, status
- Investment: memberId, date, amount, type (add/withdraw), notes
- Batch: id, date, sku, volume, yield%, cogs, margin
- Cost: id, date, category (Machinery/Labour/Sheet/Transportation), amount, type (COGS/OpEx/CapEx)
- Sales Order: id, date, customer, product, qty, unitPrice, revenue, margin, status
- Partner: id, type (Broker/Seller/Distributor), terms, commission, performance

## P&L Logic

- Net Profit = Revenue − COGS − OpEx
- Ownership % = Member Invested / Total Invested
- Profit Share = Net Profit × Ownership %

## Accessibility

- Contrast-compliant text: ~87% (primary), ~60% (secondary), ~38% (disabled)
- Focus states visible on dark background
- Keyboard navigable controls
- Minimal color noise; avoid saturated colors on dark

## Export

- Export current grid/table to XLSX
- Export consolidated P&L workbook with sheets:
  - Members Equity
  - Investments Ledger
  - Sales Orders
  - Expenses (by category)
  - Summary P&L

## Theming Tokens (CSS variables)

- Backgrounds: --bg, --surface, --card
- Text: --text-87, --text-60, --text-38
- Gold: --gold (#D4AF37), --gold-muted (#B08D2E)
- State colors: success, warning, danger (muted for dark mode)

## Roadmap

- Offline-first caching and queued sync
- Rate versioning for export pricing and landed cost comparison
- Depreciation schedule for CapEx
- Audit logs and role-based action history
- Advanced channel profitability and cohort analysis
- Multi-tenancy for multiple warehouses/regions

## Troubleshooting

- Sheets read/write fails:
  - Check OAuth client_id, scopes, and authorized origins
  - Confirm Spreadsheet ID and sheet tab names
- Export errors:
  - Ensure table/grid is rendered before exporting
  - Validate data formats (numbers vs strings)
- Chart colors too bright:
  - Reduce alpha and saturation for dark-mode legibility

## Security

- Use HTTPS hosting for production
- Restrict OAuth credentials to specific domains
- Avoid exposing API keys in public repos
- Validate and sanitize user inputs

## License

Proprietary – for internal business use. Contact maintainers for licensing or partnership discussions.

## Maintainers

- Founding Team: Rishabh, Navneet, Abhishek, Abhinav
- Design & UX: Black–gold minimal system, accessible dark theme
- Contact: team@makhanaops.example (replace with actual)

## Acknowledgments

- Dark-mode design guidance and best practices
- Client-side XLSX export approach
- Dashboard layout patterns and UX heuristics

[1](https://github.com/flatlogic/light-blue-dashboard/blob/master/README.md)
[2](https://everhour.com/blog/github-readme-template/)
[3](https://devblogs.microsoft.com/dotnet/write-a-high-quality-readme-for-nuget-packages/)
[4](https://www.creative-tim.com/blog/educational-tech/how-to-create-github-profile/)
[5](https://www.techtarget.com/searchsoftwarequality/tip/How-to-create-an-engaging-README-file)
[6](https://dev.to/merlos/how-to-write-a-good-readme-bog)
[7](https://docs.readme.com/main/docs/developer-dashboard)
[8](https://innostax.com/generate-dynamic-readme-md-files-via-github-actions/)
[9](https://github.blog/changelog/2021-09-14-readmes-for-organization-profiles/)
[10](https://www.tngconsulting.ca/readme-md-for-moodle-lms-plugin-developers/)
