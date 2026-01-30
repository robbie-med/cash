// CashFlow App - Main JavaScript

// ==================== DATA STORE ====================
const defaultData = {
    salary: 0,
    salaryPeriod: 'annual',
    cashOnHand: 0,
    filingStatus: 'single',
    stateTaxRate: 0,
    savingsGoal: 20,
    transactions: [],
    startDate: null,
    totalEarned: 0,
    onboarded: false
};

let appData = { ...defaultData };
let chart = null;
let counterInterval = null;

// ==================== TAX BRACKETS (2024) ====================
const federalBrackets = {
    single: [
        { min: 0, max: 11600, rate: 0.10 },
        { min: 11600, max: 47150, rate: 0.12 },
        { min: 47150, max: 100525, rate: 0.22 },
        { min: 100525, max: 191950, rate: 0.24 },
        { min: 191950, max: 243725, rate: 0.32 },
        { min: 243725, max: 609350, rate: 0.35 },
        { min: 609350, max: Infinity, rate: 0.37 }
    ],
    married: [
        { min: 0, max: 23200, rate: 0.10 },
        { min: 23200, max: 94300, rate: 0.12 },
        { min: 94300, max: 201050, rate: 0.22 },
        { min: 201050, max: 383900, rate: 0.24 },
        { min: 383900, max: 487450, rate: 0.32 },
        { min: 487450, max: 731200, rate: 0.35 },
        { min: 731200, max: Infinity, rate: 0.37 }
    ],
    head: [
        { min: 0, max: 16550, rate: 0.10 },
        { min: 16550, max: 63100, rate: 0.12 },
        { min: 63100, max: 100500, rate: 0.22 },
        { min: 100500, max: 191950, rate: 0.24 },
        { min: 191950, max: 243700, rate: 0.32 },
        { min: 243700, max: 609350, rate: 0.35 },
        { min: 609350, max: Infinity, rate: 0.37 }
    ]
};

// FICA rates
const SOCIAL_SECURITY_RATE = 0.062;
const SOCIAL_SECURITY_CAP = 168600;
const MEDICARE_RATE = 0.0145;
const MEDICARE_ADDITIONAL_RATE = 0.009;
const MEDICARE_ADDITIONAL_THRESHOLD = 200000;

// ==================== UTILITY FUNCTIONS ====================
function formatCurrency(amount, showSign = false) {
    const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(Math.abs(amount));

    if (showSign && amount > 0) return '+' + formatted;
    if (amount < 0) return '-' + formatted;
    return formatted;
}

function formatCompact(amount) {
    if (Math.abs(amount) >= 1000000) {
        return '$' + (amount / 1000000).toFixed(1) + 'M';
    }
    if (Math.abs(amount) >= 1000) {
        return '$' + (amount / 1000).toFixed(1) + 'K';
    }
    return formatCurrency(amount);
}

function saveData() {
    localStorage.setItem('cashflow_data', JSON.stringify(appData));
}

function loadData() {
    const saved = localStorage.getItem('cashflow_data');
    if (saved) {
        appData = { ...defaultData, ...JSON.parse(saved) };
        return true;
    }
    return false;
}

// ==================== TAX CALCULATIONS ====================
function calculateFederalTax(annualIncome) {
    const brackets = federalBrackets[appData.filingStatus];
    let tax = 0;
    let remaining = annualIncome;

    for (const bracket of brackets) {
        if (remaining <= 0) break;
        const taxableInBracket = Math.min(remaining, bracket.max - bracket.min);
        tax += taxableInBracket * bracket.rate;
        remaining -= taxableInBracket;
    }

    return tax;
}

function calculateFICA(annualIncome) {
    // Social Security
    const ssWages = Math.min(annualIncome, SOCIAL_SECURITY_CAP);
    const ssTax = ssWages * SOCIAL_SECURITY_RATE;

    // Medicare
    let medicareTax = annualIncome * MEDICARE_RATE;
    if (annualIncome > MEDICARE_ADDITIONAL_THRESHOLD) {
        medicareTax += (annualIncome - MEDICARE_ADDITIONAL_THRESHOLD) * MEDICARE_ADDITIONAL_RATE;
    }

    return ssTax + medicareTax;
}

function calculateTotalTax(annualIncome) {
    const federal = calculateFederalTax(annualIncome);
    const fica = calculateFICA(annualIncome);
    const state = annualIncome * appData.stateTaxRate;

    return {
        federal,
        fica,
        state,
        total: federal + fica + state,
        effectiveRate: (federal + fica + state) / annualIncome
    };
}

function getAnnualSalary() {
    if (appData.salaryPeriod === 'monthly') {
        return appData.salary * 12;
    }
    return appData.salary;
}

function getNetAnnualIncome() {
    const gross = getAnnualSalary();
    const taxes = calculateTotalTax(gross);
    return gross - taxes.total;
}

function getIncomePerSecond() {
    const netAnnual = getNetAnnualIncome();
    // 365.25 days * 24 hours * 60 minutes * 60 seconds
    return netAnnual / (365.25 * 24 * 60 * 60);
}

function getTaxPerSecond() {
    const gross = getAnnualSalary();
    const taxes = calculateTotalTax(gross);
    return taxes.total / (365.25 * 24 * 60 * 60);
}

// ==================== ONBOARDING ====================
function initOnboarding() {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const salaryInput = document.getElementById('salaryInput');
    const cashInput = document.getElementById('cashInput');
    const toggleBtns = document.querySelectorAll('.toggle-btn');

    // Period toggle
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            appData.salaryPeriod = btn.dataset.period;
        });
    });

    // Step 1 -> Step 2
    document.getElementById('toStep2').addEventListener('click', () => {
        const salary = parseFloat(salaryInput.value) || 0;
        if (salary <= 0) {
            salaryInput.focus();
            return;
        }
        appData.salary = salary;
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
        cashInput.focus();
    });

    // Step 2 -> Step 3
    document.getElementById('toStep3').addEventListener('click', () => {
        appData.cashOnHand = parseFloat(cashInput.value) || 0;
        step2.classList.add('hidden');
        step3.classList.remove('hidden');
    });

    // Start app
    document.getElementById('startApp').addEventListener('click', () => {
        appData.filingStatus = document.getElementById('filingStatus').value;
        appData.stateTaxRate = parseFloat(document.getElementById('stateSelect').value);
        appData.startDate = new Date().toISOString();
        appData.onboarded = true;
        saveData();
        showMainApp();
    });
}

function showMainApp() {
    document.getElementById('onboarding').classList.add('hidden');
    document.getElementById('mainApp').classList.remove('hidden');
    initMainApp();
}

// ==================== MAIN APP ====================
function initMainApp() {
    updateSettingsForm();
    initTabs();
    initTransactionModal();
    initChart();
    startCounter();
    updateBudgetSuggestions();
    updateTransactionsList();
    initSettings();
}

function startCounter() {
    if (counterInterval) clearInterval(counterInterval);

    const incomePerSecond = getIncomePerSecond();
    const taxPerSecond = getTaxPerSecond();

    // Calculate elapsed time since start
    const startDate = new Date(appData.startDate);

    function updateDisplay() {
        const now = new Date();
        const elapsedSeconds = (now - startDate) / 1000;

        // Calculate total earned since start
        const earnedSinceStart = incomePerSecond * elapsedSeconds;
        const taxesSinceStart = taxPerSecond * elapsedSeconds;

        // Calculate expenses
        const totalExpenses = appData.transactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);

        const additionalIncome = appData.transactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);

        // Current balance
        const balance = appData.cashOnHand + earnedSinceStart + additionalIncome - totalExpenses;

        // Update displays
        document.getElementById('balanceDisplay').textContent = formatCurrency(balance);
        document.getElementById('earningRate').textContent = `+${formatCurrency(incomePerSecond)}/sec`;

        // Today's earnings
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);
        const todaySeconds = Math.max(0, (now - Math.max(startDate, todayStart)) / 1000);
        const todayEarned = incomePerSecond * todaySeconds;
        document.getElementById('todayEarned').textContent = '+' + formatCompact(todayEarned);

        // Taxes paid
        document.getElementById('taxesPaid').textContent = '-' + formatCompact(taxesSinceStart);

        // Net worth
        document.getElementById('netWorth').textContent = formatCompact(balance);

        // Store for later use
        appData.currentBalance = balance;
        appData.totalEarned = earnedSinceStart;
        appData.totalTaxes = taxesSinceStart;
    }

    updateDisplay();
    counterInterval = setInterval(updateDisplay, 100); // Update 10x per second for smooth animation
}

// ==================== TABS ====================
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;

            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(tabId + 'Panel').classList.add('active');

            if (tabId === 'chart') {
                updateChart();
            }
        });
    });
}

// ==================== TRANSACTION MODAL ====================
let transactionType = 'expense';

function initTransactionModal() {
    const modal = document.getElementById('transactionModal');
    const modalTitle = document.getElementById('modalTitle');
    const confirmBtn = document.getElementById('confirmTransaction');
    const amountInput = document.getElementById('transactionAmount');
    const noteInput = document.getElementById('transactionNote');
    const categorySelect = document.getElementById('transactionCategory');

    document.getElementById('addExpenseBtn').addEventListener('click', () => {
        transactionType = 'expense';
        modalTitle.textContent = 'Add Expense';
        confirmBtn.textContent = 'Add Expense';
        confirmBtn.classList.add('expense');
        modal.classList.remove('hidden');
        amountInput.value = '';
        noteInput.value = '';
        amountInput.focus();
    });

    document.getElementById('addIncomeBtn').addEventListener('click', () => {
        transactionType = 'income';
        modalTitle.textContent = 'Add Income';
        confirmBtn.textContent = 'Add Income';
        confirmBtn.classList.remove('expense');
        modal.classList.remove('hidden');
        amountInput.value = '';
        noteInput.value = '';
        amountInput.focus();
    });

    document.getElementById('cancelTransaction').addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    document.getElementById('confirmTransaction').addEventListener('click', () => {
        const amount = parseFloat(amountInput.value) || 0;
        if (amount <= 0) {
            amountInput.focus();
            return;
        }

        const transaction = {
            id: Date.now(),
            type: transactionType,
            amount: amount,
            note: noteInput.value || getCategoryLabel(categorySelect.value),
            category: categorySelect.value,
            date: new Date().toISOString()
        };

        appData.transactions.push(transaction);
        saveData();

        modal.classList.add('hidden');
        updateTransactionsList();
        updateChart();
        updateBudgetProgress();
    });

    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
}

function getCategoryLabel(category) {
    const labels = {
        food: 'Food & Dining',
        transport: 'Transportation',
        shopping: 'Shopping',
        bills: 'Bills & Utilities',
        entertainment: 'Entertainment',
        health: 'Health',
        other: 'Other'
    };
    return labels[category] || 'Other';
}

function getCategoryIcon(category) {
    const icons = {
        food: '🍔',
        transport: '🚗',
        shopping: '🛍️',
        bills: '📄',
        entertainment: '🎬',
        health: '💊',
        other: '📦'
    };
    return icons[category] || '📦';
}

// ==================== TRANSACTIONS LIST ====================
function updateTransactionsList() {
    const list = document.getElementById('transactionsList');
    const transactions = [...appData.transactions].reverse();

    if (transactions.length === 0) {
        list.innerHTML = '<p class="empty-state">No transactions yet</p>';
        return;
    }

    list.innerHTML = transactions.map(t => `
        <div class="transaction-item">
            <div class="transaction-info">
                <div class="transaction-icon">${t.type === 'income' ? '💰' : getCategoryIcon(t.category)}</div>
                <div class="transaction-details">
                    <h4>${t.note}</h4>
                    <span>${new Date(t.date).toLocaleDateString()}</span>
                </div>
            </div>
            <span class="transaction-amount ${t.type}">${t.type === 'expense' ? '-' : '+'}${formatCurrency(t.amount)}</span>
        </div>
    `).join('');
}

// ==================== CHART ====================
function initChart() {
    const ctx = document.getElementById('mainChart').getContext('2d');

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: 'Income',
                    data: [],
                    borderColor: '#00d4aa',
                    backgroundColor: 'rgba(0, 212, 170, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Expenses',
                    data: [],
                    borderColor: '#ff6b6b',
                    backgroundColor: 'rgba(255, 107, 107, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Taxes',
                    data: [],
                    borderColor: '#9775fa',
                    backgroundColor: 'rgba(151, 117, 250, 0.1)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#a0a0b8'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#a0a0b8',
                        callback: function(value) {
                            return formatCompact(value);
                        }
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });

    // Chart controls
    document.getElementById('chartPeriod').addEventListener('change', updateChart);
    document.getElementById('showIncome').addEventListener('change', updateChart);
    document.getElementById('showExpenses').addEventListener('change', updateChart);
    document.getElementById('showTaxes').addEventListener('change', updateChart);

    updateChart();
}

function updateChart() {
    const period = document.getElementById('chartPeriod').value;
    const showIncome = document.getElementById('showIncome').checked;
    const showExpenses = document.getElementById('showExpenses').checked;
    const showTaxes = document.getElementById('showTaxes').checked;

    const { labels, incomeData, expenseData, taxData } = generateChartData(period);

    chart.data.labels = labels;
    chart.data.datasets[0].data = showIncome ? incomeData : [];
    chart.data.datasets[1].data = showExpenses ? expenseData : [];
    chart.data.datasets[2].data = showTaxes ? taxData : [];

    chart.data.datasets[0].hidden = !showIncome;
    chart.data.datasets[1].hidden = !showExpenses;
    chart.data.datasets[2].hidden = !showTaxes;

    chart.update();
}

function generateChartData(period) {
    const incomePerSecond = getIncomePerSecond();
    const taxPerSecond = getTaxPerSecond();
    const now = new Date();

    let labels = [];
    let incomeData = [];
    let expenseData = [];
    let taxData = [];

    if (period === 'day') {
        // Hourly for today
        for (let h = 0; h <= now.getHours(); h++) {
            labels.push(`${h}:00`);
            incomeData.push(incomePerSecond * 3600 * h);
            taxData.push(taxPerSecond * 3600 * h);

            // Sum expenses for this hour
            const hourExpenses = appData.transactions
                .filter(t => {
                    const d = new Date(t.date);
                    return t.type === 'expense' &&
                           d.toDateString() === now.toDateString() &&
                           d.getHours() <= h;
                })
                .reduce((sum, t) => sum + t.amount, 0);
            expenseData.push(hourExpenses);
        }
    } else if (period === 'week') {
        // Daily for this week
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay());
        startOfWeek.setHours(0, 0, 0, 0);

        for (let d = 0; d <= now.getDay(); d++) {
            labels.push(days[d]);
            incomeData.push(incomePerSecond * 86400 * (d + 1));
            taxData.push(taxPerSecond * 86400 * (d + 1));

            const dayDate = new Date(startOfWeek);
            dayDate.setDate(startOfWeek.getDate() + d);

            const dayExpenses = appData.transactions
                .filter(t => {
                    const td = new Date(t.date);
                    return t.type === 'expense' && td <= dayDate;
                })
                .reduce((sum, t) => sum + t.amount, 0);
            expenseData.push(dayExpenses);
        }
    } else if (period === 'month') {
        // Weekly for this month
        const weeksInMonth = Math.ceil(now.getDate() / 7);
        for (let w = 1; w <= weeksInMonth; w++) {
            labels.push(`Week ${w}`);
            incomeData.push(incomePerSecond * 86400 * 7 * w);
            taxData.push(taxPerSecond * 86400 * 7 * w);

            const weekEnd = new Date(now.getFullYear(), now.getMonth(), w * 7);
            const weekExpenses = appData.transactions
                .filter(t => {
                    const td = new Date(t.date);
                    return t.type === 'expense' &&
                           td.getMonth() === now.getMonth() &&
                           td <= weekEnd;
                })
                .reduce((sum, t) => sum + t.amount, 0);
            expenseData.push(weekExpenses);
        }
    } else if (period === 'year') {
        // Monthly for this year
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        for (let m = 0; m <= now.getMonth(); m++) {
            labels.push(months[m]);
            incomeData.push(incomePerSecond * 86400 * 30 * (m + 1));
            taxData.push(taxPerSecond * 86400 * 30 * (m + 1));

            const monthExpenses = appData.transactions
                .filter(t => {
                    const td = new Date(t.date);
                    return t.type === 'expense' &&
                           td.getFullYear() === now.getFullYear() &&
                           td.getMonth() <= m;
                })
                .reduce((sum, t) => sum + t.amount, 0);
            expenseData.push(monthExpenses);
        }
    }

    return { labels, incomeData, expenseData, taxData };
}

// ==================== BUDGET SUGGESTIONS ====================
function updateBudgetSuggestions() {
    const netMonthly = getNetAnnualIncome() / 12;
    const savingsRate = appData.savingsGoal / 100;
    const spendingRate = 1 - savingsRate;

    // Update income display
    document.getElementById('budgetIncome').textContent = formatCurrency(netMonthly);

    // Daily
    const dailySpend = (netMonthly * spendingRate) / 30;
    const dailySave = (netMonthly * savingsRate) / 30;
    document.getElementById('dailySpend').textContent = formatCurrency(dailySpend);
    document.getElementById('dailySave').textContent = formatCurrency(dailySave);

    // Weekly
    const weeklySpend = (netMonthly * spendingRate) / 4;
    const weeklySave = (netMonthly * savingsRate) / 4;
    document.getElementById('weeklySpend').textContent = formatCurrency(weeklySpend);
    document.getElementById('weeklySave').textContent = formatCurrency(weeklySave);

    // Monthly
    const monthlySpend = netMonthly * spendingRate;
    const monthlySave = netMonthly * savingsRate;
    const emergencyFund = netMonthly * 6; // 6 months emergency fund
    document.getElementById('monthlySpend').textContent = formatCurrency(monthlySpend);
    document.getElementById('monthlySave').textContent = formatCurrency(monthlySave);
    document.getElementById('emergencyFund').textContent = formatCurrency(emergencyFund);

    // 50/30/20 Rule
    document.getElementById('needsAmount').textContent = formatCurrency(netMonthly * 0.5);
    document.getElementById('wantsAmount').textContent = formatCurrency(netMonthly * 0.3);
    document.getElementById('savingsAmount').textContent = formatCurrency(netMonthly * 0.2);

    updateBudgetProgress();
}

function updateBudgetProgress() {
    const netMonthly = getNetAnnualIncome() / 12;
    const savingsRate = appData.savingsGoal / 100;
    const spendingBudget = netMonthly * (1 - savingsRate);
    const savingsBudget = netMonthly * savingsRate;

    // Calculate this month's actual spending
    const now = new Date();
    const thisMonthExpenses = appData.transactions
        .filter(t => {
            const d = new Date(t.date);
            return t.type === 'expense' &&
                   d.getMonth() === now.getMonth() &&
                   d.getFullYear() === now.getFullYear();
        })
        .reduce((sum, t) => sum + t.amount, 0);

    // Calculate this month's earnings saved (simplified)
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const daysElapsed = (now - startOfMonth) / (1000 * 60 * 60 * 24);
    const earnedThisMonth = (getNetAnnualIncome() / 365) * daysElapsed;
    const savedThisMonth = earnedThisMonth - thisMonthExpenses;

    // Update progress bars
    const spendPercent = Math.min(100, (thisMonthExpenses / spendingBudget) * 100);
    const savePercent = Math.min(100, (savedThisMonth / savingsBudget) * 100);

    document.getElementById('spendProgress').textContent =
        `${formatCurrency(thisMonthExpenses)} / ${formatCurrency(spendingBudget)}`;
    document.getElementById('spendBar').style.width = spendPercent + '%';

    document.getElementById('saveProgress').textContent =
        `${formatCurrency(Math.max(0, savedThisMonth))} / ${formatCurrency(savingsBudget)}`;
    document.getElementById('saveBar').style.width = Math.max(0, savePercent) + '%';
}

// ==================== SETTINGS ====================
function updateSettingsForm() {
    document.getElementById('settingsSalary').value = getAnnualSalary();
    document.getElementById('settingsFilingStatus').value = appData.filingStatus;
    document.getElementById('settingsStateTax').value = appData.stateTaxRate;
    document.getElementById('savingsGoal').value = appData.savingsGoal;
    document.getElementById('savingsGoalValue').textContent = appData.savingsGoal + '%';
}

function initSettings() {
    const savingsGoalSlider = document.getElementById('savingsGoal');
    savingsGoalSlider.addEventListener('input', () => {
        document.getElementById('savingsGoalValue').textContent = savingsGoalSlider.value + '%';
    });

    document.getElementById('saveSettings').addEventListener('click', () => {
        appData.salary = parseFloat(document.getElementById('settingsSalary').value) || appData.salary;
        appData.salaryPeriod = 'annual';
        appData.filingStatus = document.getElementById('settingsFilingStatus').value;
        appData.stateTaxRate = parseFloat(document.getElementById('settingsStateTax').value);
        appData.savingsGoal = parseInt(document.getElementById('savingsGoal').value);

        saveData();
        startCounter();
        updateBudgetSuggestions();
        updateChart();

        alert('Settings saved!');
    });

    document.getElementById('resetData').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all data? This cannot be undone.')) {
            localStorage.removeItem('cashflow_data');
            location.reload();
        }
    });
}

// ==================== INITIALIZATION ====================
function init() {
    if (loadData() && appData.onboarded) {
        showMainApp();
    } else {
        initOnboarding();
    }
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
