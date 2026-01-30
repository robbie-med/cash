# CashFlow

A mobile-first webapp that gamifies your income by showing your balance grow in real-time as you earn money just by existing.

[[Screenshot 2026-01-30 053955.png]]

## Features

### Real-Time Salary Counter
- Watch your balance tick up every second based on your salary
- Calculates earnings 24/7 (you're always earning!)
- Shows per-second earning rate with a live pulse indicator

### Automatic Tax Calculations
- 2024 federal tax brackets (Single, Married Filing Jointly, Head of Household)
- FICA taxes (Social Security + Medicare)
- State tax rates (None, Low, Medium, High, Very High)
- Displays after-tax (net) income

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

### Mobile-First Design
- Dark theme optimized for mobile screens
- PWA support (add to home screen)
- Responsive layout works on any device
- All data stored locally in your browser

## Getting Started

### Option 1: GitHub Pages
1. Fork this repository
2. Go to Settings → Pages
3. Set Source to "Deploy from a branch"
4. Select your branch and `/ (root)` folder
5. Visit `https://[username].github.io/cash/`

### Option 2: Local Development
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

1. **Onboarding**: Enter your salary (monthly or annual), current cash on hand, and tax information
2. **Watch it grow**: Your balance updates in real-time based on your net (after-tax) income
3. **Track expenses**: Add expenses as you spend - watch the balance decrease
4. **Stay on budget**: Use the Budget tab to see recommended spending limits
5. **Visualize**: Check the Chart tab to see income vs expenses over time

## Tech Stack

- Vanilla HTML/CSS/JavaScript (no build step required)
- [Chart.js](https://www.chartjs.org/) for visualizations
- localStorage for data persistence
- PWA manifest for mobile installation

## Privacy

All data is stored locally in your browser's localStorage. Nothing is sent to any server.

## License

MIT
