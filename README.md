# CashFlow

A mobile-first PWA that gamifies your income by showing your balance grow in real-time as you earn money just by existing.

## Features

### Real-Time Salary Counter
- Watch your balance tick up every second based on your salary
- Calculates earnings 24/7 (you're always earning!)
- Shows per-second earning rate with a live pulse indicator

### Multi-Country Support
- **United States (USD)**: Federal tax brackets, FICA, state taxes
- **South Korea (KRW)**: Korean tax brackets, National Pension, Health Insurance, Employment Insurance
- Automatic currency formatting ($1.5K or ₩150만)

### Automatic Tax Calculations

**US Taxes:**
- 2024 federal tax brackets (Single, Married Filing Jointly, Head of Household)
- FICA taxes (Social Security + Medicare)
- State tax rates (None, Low, Medium, High, Very High)

**Korean Taxes:**
- 2024 income tax brackets (6% - 45%)
- National Pension (4.5%)
- Health Insurance (3.545%)
- Employment Insurance (0.9%)
- Local income tax (10% of income tax)

### Expense & Income Tracking
- Quick-add expenses with categories:
  - Food & Dining
  - Transportation
  - Shopping
  - Bills & Utilities
  - Entertainment
  - Health
  - Other
- Add bonus income
- Full transaction history

### Interactive Charts
- Line graph powered by Chart.js
- Toggle visibility of Income, Expenses, and Taxes
- View by Day, Week, Month, or Year
- See trends at a glance

### Budget Suggestions
- Personalized daily, weekly, and monthly spending limits
- Savings targets based on your chosen savings rate
- 50/30/20 rule breakdown (Needs/Wants/Savings)
- 6-month emergency fund goal
- Progress bars tracking monthly spending vs budget

### Bilingual Support
- Full English and Korean (한국어) translations
- Language toggle button always visible
- Localized date and number formatting

### Mobile-First PWA
- Dark theme optimized for mobile screens
- Install to home screen (works offline!)
- Service worker for offline caching
- Responsive layout works on any device
- All data stored locally in your browser

## Privacy

**Your data never leaves your device.**
- No servers
- No accounts
- No trackers
- No analytics
- 100% client-side localStorage

## Installation

### Install as App (Recommended)

**iOS Safari:**
1. Open the app URL in Safari
2. Tap the Share button
3. Tap "Add to Home Screen"
4. Tap "Add"

**Android Chrome:**
1. Open the app URL in Chrome
2. Tap the menu (three dots)
3. Tap "Add to Home screen" or "Install app"
4. Tap "Add"

### Host on GitHub Pages

1. Fork this repository
2. Go to Settings → Pages
3. Set Source to "Deploy from a branch"
4. Select your branch and `/ (root)` folder
5. Save
6. Visit `https://[username].github.io/cash/`

### Local Development

```bash
# Clone the repo
git clone https://github.com/[username]/cash.git
cd cash

# Serve locally (any static server works)
python -m http.server 8000
# or
npx serve
```

Then open `http://localhost:8000` in your browser.

## How It Works

1. **Welcome**: Learn about privacy and how the app works
2. **Setup**: Enter your salary (monthly or annual), current cash, and country/tax info
3. **Watch it grow**: Your balance updates in real-time based on your net (after-tax) income
4. **Track expenses**: Add expenses as you spend - watch the balance decrease
5. **Stay on budget**: Use the Budget tab to see recommended spending limits
6. **Visualize**: Check the Chart tab to see income vs expenses over time

## Tech Stack

- Vanilla HTML/CSS/JavaScript (no build step required)
- [Chart.js](https://www.chartjs.org/) for visualizations
- localStorage for data persistence
- Service Worker for offline PWA support
- PWA manifest for home screen installation

## License

MIT
