// CashFlow App - Main JavaScript

// ==================== TRANSLATIONS ====================
const translations = {
    en: {
        // Welcome
        welcome_privacy_title: "100% Private",
        welcome_privacy_desc: "Your data never leaves your device. No trackers, no servers, no accounts.",
        welcome_flow_title: "Constant Cashflow",
        welcome_flow_desc: "Your salary flows in 24/7. Watch your balance tick up every second you exist.",
        welcome_game_title: "Gamify Saving",
        welcome_game_desc: "Track expenses, beat your budget, and watch your wealth grow in real-time.",
        get_started: "Get Started →",

        // Onboarding
        tagline: "Watch your money grow in real-time",
        whats_salary: "What's your salary?",
        annual: "Annual",
        monthly: "Monthly",
        next: "Next →",
        cash_on_hand: "Current cash on hand?",
        cash_hint: "Bank accounts, savings, etc.",
        tax_info: "Tax Information",
        tax_hint: "For accurate calculations",
        filing_status: "Filing Status",
        single: "Single",
        married: "Married Filing Jointly",
        head_household: "Head of Household",
        state: "State",
        no_state_tax: "No State Tax (TX, FL, etc.)",
        low_tax: "Low (≈5% - AZ, CO, etc.)",
        medium_tax: "Medium (≈7% - GA, NC, etc.)",
        high_tax: "High (≈10% - CA, NJ, etc.)",
        very_high_tax: "Very High (≈13% - CA top bracket)",
        start_earning: "Start Earning! 🚀",

        // Main App
        current_balance: "Current Balance",
        today: "Today",
        taxes_ytd: "Taxes (YTD)",
        net_worth: "Net Worth",
        add_expense: "Add Expense",
        add_income: "Add Income",

        // Tabs
        chart: "Chart",
        history: "History",
        budget: "Budget",
        settings: "Settings",

        // Chart
        this_week: "This Week",
        this_month: "This Month",
        this_year: "This Year",
        income: "Income",
        expenses: "Expenses",
        taxes: "Taxes",

        // Transactions
        no_transactions: "No transactions yet",

        // Budget
        smart_budget: "Smart Budget Suggestions",
        based_on_income: "Based on your income of",
        per_month: "/month",
        daily_budget: "Daily Budget",
        weekly_budget: "Weekly Budget",
        monthly_budget: "Monthly Budget",
        spending_limit: "Spending Limit",
        savings_target: "Savings Target",
        emergency_fund: "Emergency Fund Goal",
        rule_503020: "50/30/20 Rule",
        needs: "Needs (50%)",
        wants: "Wants (30%)",
        savings_20: "Savings (20%)",
        month_progress: "This Month's Progress",
        spending: "Spending",
        savings: "Savings",

        // Settings
        annual_salary: "Annual Salary",
        state_tax_rate: "State Tax Rate",
        no_state_tax_short: "No State Tax",
        low_tax_short: "Low (≈5%)",
        medium_tax_short: "Medium (≈7%)",
        high_tax_short: "High (≈10%)",
        very_high_tax_short: "Very High (≈13%)",
        savings_goal: "Savings Goal (%)",
        language: "Language",
        save_settings: "Save Settings",
        reset_data: "Reset All Data",

        // Country/Currency
        country: "Country",
        country_us: "United States (USD)",
        country_kr: "South Korea (KRW)",
        currency_label: "Currency",

        // Modal
        note_optional: "Note (optional)",
        cat_food: "🍔 Food & Dining",
        cat_transport: "🚗 Transportation",
        cat_shopping: "🛍️ Shopping",
        cat_bills: "📄 Bills & Utilities",
        cat_entertainment: "🎬 Entertainment",
        cat_health: "💊 Health",
        cat_other: "📦 Other",
        cancel: "Cancel",
        add: "Add",

        // Categories (for transaction list)
        food: "Food & Dining",
        transport: "Transportation",
        shopping: "Shopping",
        bills: "Bills & Utilities",
        entertainment: "Entertainment",
        health: "Health",
        other: "Other",

        // Alerts
        settings_saved: "Settings saved!",
        reset_confirm: "Are you sure you want to reset all data? This cannot be undone.",

        // Chart labels
        week_label: "Week",
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    },
    ko: {
        // Welcome
        welcome_privacy_title: "100% 비공개",
        welcome_privacy_desc: "데이터가 기기를 떠나지 않습니다. 추적기 없음, 서버 없음, 계정 없음.",
        welcome_flow_title: "끊임없는 현금 흐름",
        welcome_flow_desc: "급여가 24시간 들어옵니다. 매 초마다 잔액이 올라가는 것을 확인하세요.",
        welcome_game_title: "저축을 게임처럼",
        welcome_game_desc: "지출을 추적하고, 예산을 이기고, 실시간으로 자산이 늘어나는 것을 확인하세요.",
        get_started: "시작하기 →",

        // Onboarding
        tagline: "실시간으로 돈이 불어나는 것을 확인하세요",
        whats_salary: "연봉이 얼마인가요?",
        annual: "연봉",
        monthly: "월급",
        next: "다음 →",
        cash_on_hand: "현재 보유 현금은?",
        cash_hint: "은행 계좌, 저축 등",
        tax_info: "세금 정보",
        tax_hint: "정확한 계산을 위해",
        filing_status: "신고 상태",
        single: "미혼",
        married: "기혼 (부부 공동)",
        head_household: "세대주",
        state: "주",
        no_state_tax: "주세 없음 (TX, FL 등)",
        low_tax: "낮음 (≈5% - AZ, CO 등)",
        medium_tax: "중간 (≈7% - GA, NC 등)",
        high_tax: "높음 (≈10% - CA, NJ 등)",
        very_high_tax: "매우 높음 (≈13% - CA 최고세율)",
        start_earning: "시작하기! 🚀",

        // Main App
        current_balance: "현재 잔액",
        today: "오늘",
        taxes_ytd: "세금 (연간)",
        net_worth: "순자산",
        add_expense: "지출 추가",
        add_income: "수입 추가",

        // Tabs
        chart: "차트",
        history: "내역",
        budget: "예산",
        settings: "설정",

        // Chart
        this_week: "이번 주",
        this_month: "이번 달",
        this_year: "올해",
        income: "수입",
        expenses: "지출",
        taxes: "세금",

        // Transactions
        no_transactions: "거래 내역이 없습니다",

        // Budget
        smart_budget: "스마트 예산 제안",
        based_on_income: "월 수입 기준:",
        per_month: "",
        daily_budget: "일일 예산",
        weekly_budget: "주간 예산",
        monthly_budget: "월간 예산",
        spending_limit: "지출 한도",
        savings_target: "저축 목표",
        emergency_fund: "비상금 목표",
        rule_503020: "50/30/20 규칙",
        needs: "필수 (50%)",
        wants: "원함 (30%)",
        savings_20: "저축 (20%)",
        month_progress: "이번 달 진행 상황",
        spending: "지출",
        savings: "저축",

        // Settings
        annual_salary: "연봉",
        state_tax_rate: "주세율",
        no_state_tax_short: "주세 없음",
        low_tax_short: "낮음 (≈5%)",
        medium_tax_short: "중간 (≈7%)",
        high_tax_short: "높음 (≈10%)",
        very_high_tax_short: "매우 높음 (≈13%)",
        savings_goal: "저축 목표 (%)",
        language: "언어",
        save_settings: "설정 저장",
        reset_data: "모든 데이터 초기화",

        // Country/Currency
        country: "국가",
        country_us: "미국 (USD)",
        country_kr: "대한민국 (KRW)",
        currency_label: "통화",

        // Modal
        note_optional: "메모 (선택사항)",
        cat_food: "🍔 음식",
        cat_transport: "🚗 교통",
        cat_shopping: "🛍️ 쇼핑",
        cat_bills: "📄 공과금",
        cat_entertainment: "🎬 오락",
        cat_health: "💊 건강",
        cat_other: "📦 기타",
        cancel: "취소",
        add: "추가",

        // Categories (for transaction list)
        food: "음식",
        transport: "교통",
        shopping: "쇼핑",
        bills: "공과금",
        entertainment: "오락",
        health: "건강",
        other: "기타",

        // Alerts
        settings_saved: "설정이 저장되었습니다!",
        reset_confirm: "모든 데이터를 초기화하시겠습니까? 이 작업은 되돌릴 수 없습니다.",

        // Chart labels
        week_label: "주",
        months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        days: ["일", "월", "화", "수", "목", "금", "토"]
    }
};

let currentLang = 'en';

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
    onboarded: false,
    language: 'en',
    country: 'us',
    currency: 'USD'
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

// Korean tax brackets (2024) - in KRW
const koreanBrackets = [
    { min: 0, max: 14000000, rate: 0.06 },
    { min: 14000000, max: 50000000, rate: 0.15 },
    { min: 50000000, max: 88000000, rate: 0.24 },
    { min: 88000000, max: 150000000, rate: 0.35 },
    { min: 150000000, max: 300000000, rate: 0.38 },
    { min: 300000000, max: 500000000, rate: 0.40 },
    { min: 500000000, max: 1000000000, rate: 0.42 },
    { min: 1000000000, max: Infinity, rate: 0.45 }
];

// Korean social insurance rates
const KOREAN_NATIONAL_PENSION = 0.045; // 4.5% employee share
const KOREAN_HEALTH_INSURANCE = 0.03545; // 3.545% employee share
const KOREAN_LONG_TERM_CARE = 0.004591; // 0.4591% of health insurance
const KOREAN_EMPLOYMENT_INSURANCE = 0.009; // 0.9%

// ==================== TRANSLATION FUNCTIONS ====================
function t(key) {
    return translations[currentLang][key] || translations['en'][key] || key;
}

function applyTranslations() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });

    // Update language toggle button text
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = currentLang === 'en' ? '한국어' : 'English';
    }

    // Update language select in settings
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
        langSelect.value = currentLang;
    }

    // Update HTML lang attribute
    document.documentElement.lang = currentLang;

    // Refresh dynamic content
    if (appData.onboarded) {
        updateTransactionsList();
        if (chart) {
            updateChart();
        }
    }
}

function setLanguage(lang) {
    currentLang = lang;
    appData.language = lang;
    saveData();
    applyTranslations();
}

// ==================== UTILITY FUNCTIONS ====================
function formatCurrency(amount, showSign = false) {
    const currency = appData.currency || 'USD';
    const locale = currency === 'KRW' ? 'ko-KR' : 'en-US';
    const decimals = currency === 'KRW' ? 0 : 2;

    const formatted = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    }).format(Math.abs(amount));

    if (showSign && amount > 0) return '+' + formatted;
    if (amount < 0) return '-' + formatted;
    return formatted;
}

function formatCompact(amount) {
    const currency = appData.currency || 'USD';
    const symbol = currency === 'KRW' ? '₩' : '$';

    if (currency === 'KRW') {
        // Korean uses 억 (100 million) and 만 (10 thousand)
        if (Math.abs(amount) >= 100000000) {
            return symbol + (amount / 100000000).toFixed(1) + '억';
        }
        if (Math.abs(amount) >= 10000) {
            return symbol + (amount / 10000).toFixed(0) + '만';
        }
    } else {
        if (Math.abs(amount) >= 1000000) {
            return symbol + (amount / 1000000).toFixed(1) + 'M';
        }
        if (Math.abs(amount) >= 1000) {
            return symbol + (amount / 1000).toFixed(1) + 'K';
        }
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
        if (appData.language) {
            currentLang = appData.language;
        }
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

function calculateKoreanIncomeTax(annualIncome) {
    let tax = 0;
    let remaining = annualIncome;

    for (const bracket of koreanBrackets) {
        if (remaining <= 0) break;
        const taxableInBracket = Math.min(remaining, bracket.max - bracket.min);
        tax += taxableInBracket * bracket.rate;
        remaining -= taxableInBracket;
    }

    return tax;
}

function calculateKoreanSocialInsurance(annualIncome) {
    const pension = annualIncome * KOREAN_NATIONAL_PENSION;
    const health = annualIncome * KOREAN_HEALTH_INSURANCE;
    const longTermCare = health * KOREAN_LONG_TERM_CARE;
    const employment = annualIncome * KOREAN_EMPLOYMENT_INSURANCE;

    return pension + health + longTermCare + employment;
}

function calculateTotalTax(annualIncome) {
    if (appData.country === 'kr') {
        const incomeTax = calculateKoreanIncomeTax(annualIncome);
        const localTax = incomeTax * 0.1; // Local income tax is 10% of income tax
        const socialInsurance = calculateKoreanSocialInsurance(annualIncome);

        return {
            federal: incomeTax,
            fica: socialInsurance,
            state: localTax,
            total: incomeTax + localTax + socialInsurance,
            effectiveRate: annualIncome > 0 ? (incomeTax + localTax + socialInsurance) / annualIncome : 0
        };
    }

    // US taxes
    const federal = calculateFederalTax(annualIncome);
    const fica = calculateFICA(annualIncome);
    const state = annualIncome * appData.stateTaxRate;

    return {
        federal,
        fica,
        state,
        total: federal + fica + state,
        effectiveRate: annualIncome > 0 ? (federal + fica + state) / annualIncome : 0
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
    const step0 = document.getElementById('step0');
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const salaryInput = document.getElementById('salaryInput');
    const cashInput = document.getElementById('cashInput');
    const toggleBtns = document.querySelectorAll('.toggle-btn');

    // Step 0 (Welcome) -> Step 1
    document.getElementById('toStep1').addEventListener('click', () => {
        step0.classList.add('hidden');
        step1.classList.remove('hidden');
        salaryInput.focus();
    });

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

    // Country selection in onboarding
    const countrySelect = document.getElementById('countrySelect');
    const usTaxFields = document.getElementById('usTaxFields');

    countrySelect.addEventListener('change', () => {
        const country = countrySelect.value;
        if (country === 'kr') {
            usTaxFields.classList.add('hidden');
        } else {
            usTaxFields.classList.remove('hidden');
        }
        // Update currency symbols
        updateCurrencySymbols(country);
    });

    // Start app
    document.getElementById('startApp').addEventListener('click', () => {
        const country = document.getElementById('countrySelect').value;
        appData.country = country;
        appData.currency = country === 'kr' ? 'KRW' : 'USD';

        if (country === 'us') {
            appData.filingStatus = document.getElementById('filingStatus').value;
            appData.stateTaxRate = parseFloat(document.getElementById('stateSelect').value);
        } else {
            appData.filingStatus = 'single';
            appData.stateTaxRate = 0;
        }

        appData.startDate = new Date().toISOString();
        appData.onboarded = true;
        saveData();
        showMainApp();
    });
}

function updateCurrencySymbols(country) {
    const symbol = country === 'kr' ? '₩' : '$';
    document.querySelectorAll('.currency').forEach(el => {
        el.textContent = symbol;
    });
}

function showMainApp() {
    document.getElementById('onboarding').classList.add('hidden');
    document.getElementById('mainApp').classList.remove('hidden');
    updateCurrencySymbols(appData.country || 'us');
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
        modalTitle.textContent = t('add_expense');
        confirmBtn.textContent = t('add_expense');
        confirmBtn.classList.add('expense');
        modal.classList.remove('hidden');
        amountInput.value = '';
        noteInput.value = '';
        amountInput.focus();
    });

    document.getElementById('addIncomeBtn').addEventListener('click', () => {
        transactionType = 'income';
        modalTitle.textContent = t('add_income');
        confirmBtn.textContent = t('add_income');
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
    return t(category) || category;
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
        list.innerHTML = `<p class="empty-state">${t('no_transactions')}</p>`;
        return;
    }

    list.innerHTML = transactions.map(trans => `
        <div class="transaction-item">
            <div class="transaction-info">
                <div class="transaction-icon">${trans.type === 'income' ? '💰' : getCategoryIcon(trans.category)}</div>
                <div class="transaction-details">
                    <h4>${trans.note}</h4>
                    <span>${new Date(trans.date).toLocaleDateString(currentLang === 'ko' ? 'ko-KR' : 'en-US')}</span>
                </div>
            </div>
            <span class="transaction-amount ${trans.type}">${trans.type === 'expense' ? '-' : '+'}${formatCurrency(trans.amount)}</span>
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
                    label: t('income'),
                    data: [],
                    borderColor: '#00d4aa',
                    backgroundColor: 'rgba(0, 212, 170, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: t('expenses'),
                    data: [],
                    borderColor: '#ff6b6b',
                    backgroundColor: 'rgba(255, 107, 107, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: t('taxes'),
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

    chart.data.datasets[0].label = t('income');
    chart.data.datasets[1].label = t('expenses');
    chart.data.datasets[2].label = t('taxes');

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

    const days = translations[currentLang].days;
    const months = translations[currentLang].months;

    if (period === 'day') {
        // Hourly for today
        for (let h = 0; h <= now.getHours(); h++) {
            labels.push(`${h}:00`);
            incomeData.push(incomePerSecond * 3600 * h);
            taxData.push(taxPerSecond * 3600 * h);

            // Sum expenses for this hour
            const hourExpenses = appData.transactions
                .filter(trans => {
                    const d = new Date(trans.date);
                    return trans.type === 'expense' &&
                           d.toDateString() === now.toDateString() &&
                           d.getHours() <= h;
                })
                .reduce((sum, trans) => sum + trans.amount, 0);
            expenseData.push(hourExpenses);
        }
    } else if (period === 'week') {
        // Daily for this week
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
                .filter(trans => {
                    const td = new Date(trans.date);
                    return trans.type === 'expense' && td <= dayDate;
                })
                .reduce((sum, trans) => sum + trans.amount, 0);
            expenseData.push(dayExpenses);
        }
    } else if (period === 'month') {
        // Weekly for this month
        const weeksInMonth = Math.ceil(now.getDate() / 7);
        for (let w = 1; w <= weeksInMonth; w++) {
            labels.push(`${t('week_label')} ${w}`);
            incomeData.push(incomePerSecond * 86400 * 7 * w);
            taxData.push(taxPerSecond * 86400 * 7 * w);

            const weekEnd = new Date(now.getFullYear(), now.getMonth(), w * 7);
            const weekExpenses = appData.transactions
                .filter(trans => {
                    const td = new Date(trans.date);
                    return trans.type === 'expense' &&
                           td.getMonth() === now.getMonth() &&
                           td <= weekEnd;
                })
                .reduce((sum, trans) => sum + trans.amount, 0);
            expenseData.push(weekExpenses);
        }
    } else if (period === 'year') {
        // Monthly for this year
        for (let m = 0; m <= now.getMonth(); m++) {
            labels.push(months[m]);
            incomeData.push(incomePerSecond * 86400 * 30 * (m + 1));
            taxData.push(taxPerSecond * 86400 * 30 * (m + 1));

            const monthExpenses = appData.transactions
                .filter(trans => {
                    const td = new Date(trans.date);
                    return trans.type === 'expense' &&
                           td.getFullYear() === now.getFullYear() &&
                           td.getMonth() <= m;
                })
                .reduce((sum, trans) => sum + trans.amount, 0);
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
        .filter(trans => {
            const d = new Date(trans.date);
            return trans.type === 'expense' &&
                   d.getMonth() === now.getMonth() &&
                   d.getFullYear() === now.getFullYear();
        })
        .reduce((sum, trans) => sum + trans.amount, 0);

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
    document.getElementById('settingsCountry').value = appData.country || 'us';
    document.getElementById('settingsSalary').value = getAnnualSalary();
    document.getElementById('settingsFilingStatus').value = appData.filingStatus;
    document.getElementById('settingsStateTax').value = appData.stateTaxRate;
    document.getElementById('savingsGoal').value = appData.savingsGoal;
    document.getElementById('savingsGoalValue').textContent = appData.savingsGoal + '%';
    document.getElementById('languageSelect').value = currentLang;

    // Show/hide US tax fields based on country
    const settingsUsTaxFields = document.getElementById('settingsUsTaxFields');
    if (appData.country === 'kr') {
        settingsUsTaxFields.classList.add('hidden');
    } else {
        settingsUsTaxFields.classList.remove('hidden');
    }

    // Update currency symbol
    const symbol = appData.currency === 'KRW' ? '₩' : '$';
    document.getElementById('settingsCurrencySymbol').textContent = symbol;
}

function initSettings() {
    const savingsGoalSlider = document.getElementById('savingsGoal');
    savingsGoalSlider.addEventListener('input', () => {
        document.getElementById('savingsGoalValue').textContent = savingsGoalSlider.value + '%';
    });

    // Country select change in settings
    document.getElementById('settingsCountry').addEventListener('change', (e) => {
        const country = e.target.value;
        const settingsUsTaxFields = document.getElementById('settingsUsTaxFields');
        const symbol = country === 'kr' ? '₩' : '$';

        if (country === 'kr') {
            settingsUsTaxFields.classList.add('hidden');
        } else {
            settingsUsTaxFields.classList.remove('hidden');
        }
        document.getElementById('settingsCurrencySymbol').textContent = symbol;
    });

    // Language select change
    document.getElementById('languageSelect').addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    document.getElementById('saveSettings').addEventListener('click', () => {
        const country = document.getElementById('settingsCountry').value;
        appData.country = country;
        appData.currency = country === 'kr' ? 'KRW' : 'USD';
        appData.salary = parseFloat(document.getElementById('settingsSalary').value) || appData.salary;
        appData.salaryPeriod = 'annual';

        if (country === 'us') {
            appData.filingStatus = document.getElementById('settingsFilingStatus').value;
            appData.stateTaxRate = parseFloat(document.getElementById('settingsStateTax').value);
        } else {
            appData.filingStatus = 'single';
            appData.stateTaxRate = 0;
        }

        appData.savingsGoal = parseInt(document.getElementById('savingsGoal').value);

        saveData();
        startCounter();
        updateBudgetSuggestions();
        updateChart();
        updateCurrencySymbols(country);

        alert(t('settings_saved'));
    });

    document.getElementById('resetData').addEventListener('click', () => {
        if (confirm(t('reset_confirm'))) {
            localStorage.removeItem('cashflow_data');
            location.reload();
        }
    });
}

// ==================== LANGUAGE TOGGLE ====================
function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'ko' : 'en';
        setLanguage(newLang);
    });
}

// ==================== INITIALIZATION ====================
function init() {
    loadData();
    currentLang = appData.language || 'en';

    initLanguageToggle();
    applyTranslations();

    if (appData.onboarded) {
        showMainApp();
    } else {
        initOnboarding();
    }
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
