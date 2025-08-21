// Application data with accurate 2025 tax brackets and current rates
const appData = {
  ratesLastUpdated: "Aug 21, 2025",
  taxData2025: {
    standardDeductions: {
      single: 15750,
      marriedJoint: 31500,
      marriedSeparate: 15750,
      headOfHousehold: 23625
    },
    federalBracketsSingle: [
      {min: 0, max: 11925, rate: 0.10},
      {min: 11925, max: 48475, rate: 0.12},
      {min: 48475, max: 103350, rate: 0.22},
      {min: 103350, max: 197300, rate: 0.24},
      {min: 197300, max: 250525, rate: 0.32},
      {min: 250525, max: 626350, rate: 0.35},
      {min: 626350, max: 99999999, rate: 0.37}
    ],
    federalBracketsMarriedJoint: [
      {min: 0, max: 23850, rate: 0.10},
      {min: 23850, max: 96950, rate: 0.12},
      {min: 96950, max: 206700, rate: 0.22},
      {min: 206700, max: 394600, rate: 0.24},
      {min: 394600, max: 501050, rate: 0.32},
      {min: 501050, max: 751600, rate: 0.35},
      {min: 751600, max: 99999999, rate: 0.37}
    ],
    federalBracketsMarriedSeparate: [
      {min: 0, max: 11925, rate: 0.10},
      {min: 11925, max: 48475, rate: 0.12},
      {min: 48475, max: 103350, rate: 0.22},
      {min: 103350, max: 197300, rate: 0.24},
      {min: 197300, max: 250525, rate: 0.32},
      {min: 250525, max: 375800, rate: 0.35},
      {min: 375800, max: 99999999, rate: 0.37}
    ],
    federalBracketsHeadOfHousehold: [
      {min: 0, max: 17000, rate: 0.10},
      {min: 17000, max: 64850, rate: 0.12},
      {min: 64850, max: 103350, rate: 0.22},
      {min: 103350, max: 197300, rate: 0.24},
      {min: 197300, max: 250500, rate: 0.32},
      {min: 250500, max: 626350, rate: 0.35},
      {min: 626350, max: 99999999, rate: 0.37}
    ]
  },
  currentRates: {
    cds: {
      marcus: {"6mo": 4.40, "12mo": 4.20, "18mo": 4.00, "24mo": 3.95},
      ally: {"3mo": 2.90, "6mo": 3.90, "12mo": 3.85, "18mo": 3.70},
      discover: {"3mo": 4.20, "6mo": 3.50, "12mo": 3.80, "18mo": 3.80, "24mo": 3.60},
      capitalone: {"6mo": 4.20, "12mo": 4.00, "18mo": 3.80, "24mo": 3.80},
      synchrony: {"6mo": 3.70, "12mo": 4.00, "18mo": 3.80, "24mo": 3.50}
    },
    tbills: {
      "4week": 4.354,
      "13week": 4.232,
      "26week": 4.081,
      "52week": 3.924
    }
  },
  stateTaxData: {
    "NJ": {
      type: "brackets",
      brackets: [
        {min: 0, max: 20000, rate: 0.014},
        {min: 20000, max: 35000, rate: 0.0175},
        {min: 35000, max: 40000, rate: 0.035},
        {min: 40000, max: 75000, rate: 0.05525},
        {min: 75000, max: 500000, rate: 0.0637},
        {min: 500000, max: 1000000, rate: 0.0897},
        {min: 1000000, max: 99999999, rate: 0.1075}
      ]
    },
    "CA": {type: "flat", rate: 0.133}, "NY": {type: "flat", rate: 0.109}, "TX": {type: "flat", rate: 0.0}, 
    "FL": {type: "flat", rate: 0.0}, "AL": {type: "flat", rate: 0.05}, "AK": {type: "flat", rate: 0.0}, 
    "AZ": {type: "flat", rate: 0.025}, "AR": {type: "flat", rate: 0.047}, "CO": {type: "flat", rate: 0.044},
    "CT": {type: "flat", rate: 0.0699}, "DE": {type: "flat", rate: 0.066}, "GA": {type: "flat", rate: 0.0539}, 
    "HI": {type: "flat", rate: 0.11}, "ID": {type: "flat", rate: 0.053}, "IL": {type: "flat", rate: 0.0495}, 
    "IN": {type: "flat", rate: 0.03}, "IA": {type: "flat", rate: 0.038}, "KS": {type: "flat", rate: 0.0558}, 
    "KY": {type: "flat", rate: 0.04}, "LA": {type: "flat", rate: 0.03}, "ME": {type: "flat", rate: 0.0715}, 
    "MD": {type: "flat", rate: 0.0575}, "MA": {type: "flat", rate: 0.09}, "MI": {type: "flat", rate: 0.0425}, 
    "MN": {type: "flat", rate: 0.0985}, "MS": {type: "flat", rate: 0.044}, "MO": {type: "flat", rate: 0.047}, 
    "MT": {type: "flat", rate: 0.059}, "NE": {type: "flat", rate: 0.052}, "NV": {type: "flat", rate: 0.0}, 
    "NH": {type: "flat", rate: 0.0}, "NM": {type: "flat", rate: 0.059}, "NC": {type: "flat", rate: 0.0425}, 
    "ND": {type: "flat", rate: 0.025}, "OH": {type: "flat", rate: 0.035}, "OK": {type: "flat", rate: 0.0475}, 
    "OR": {type: "flat", rate: 0.099}, "PA": {type: "flat", rate: 0.0307}, "RI": {type: "flat", rate: 0.0599}, 
    "SC": {type: "flat", rate: 0.062}, "SD": {type: "flat", rate: 0.0}, "TN": {type: "flat", rate: 0.0}, 
    "UT": {type: "flat", rate: 0.0455}, "VT": {type: "flat", rate: 0.0875}, "VA": {type: "flat", rate: 0.0575}, 
    "WA": {type: "flat", rate: 0.0}, "WV": {type: "flat", rate: 0.0482}, "WI": {type: "flat", rate: 0.0765}, 
    "WY": {type: "flat", rate: 0.0}, "DC": {type: "flat", rate: 0.1075}
  },
  bankNames: {
    marcus: "Marcus by Goldman Sachs",
    ally: "Ally Bank",
    discover: "Discover Bank",
    capitalone: "Capital One",
    synchrony: "Synchrony Bank"
  },
  // Historical T-Bill rates for 6 months
  historicalTBillRates: {
    "4week": [
      {"month": "Mar 2025", "rate": 4.28},
      {"month": "Apr 2025", "rate": 4.25},
      {"month": "May 2025", "rate": 4.23},
      {"month": "Jun 2025", "rate": 4.24},
      {"month": "Jul 2025", "rate": 4.26},
      {"month": "Aug 2025", "rate": 4.21}
    ],
    "13week": [
      {"month": "Mar 2025", "rate": 4.25},
      {"month": "Apr 2025", "rate": 4.22},
      {"month": "May 2025", "rate": 4.20},
      {"month": "Jun 2025", "rate": 4.21},
      {"month": "Jul 2025", "rate": 4.24},
      {"month": "Aug 2025", "rate": 4.14}
    ],
    "26week": [
      {"month": "Mar 2025", "rate": 4.15},
      {"month": "Apr 2025", "rate": 4.12},
      {"month": "May 2025", "rate": 4.10},
      {"month": "Jun 2025", "rate": 4.11},
      {"month": "Jul 2025", "rate": 4.13},
      {"month": "Aug 2025", "rate": 4.07}
    ],
    "52week": [
      {"month": "Mar 2025", "rate": 3.95},
      {"month": "Apr 2025", "rate": 3.92},
      {"month": "May 2025", "rate": 3.90},
      {"month": "Jun 2025", "rate": 3.91},
      {"month": "Jul 2025", "rate": 3.93},
      {"month": "Aug 2025", "rate": 3.88}
    ]
  }
};

// Application state
let appState = {
  annualIncome: 0,
  preDeductions: 0,
  filingStatus: 'single',
  state: '',
  amount: 0,
  cdBank: '',
  cdTerm: '',
  compoundingFrequency: 12,
  tbillStrategy: 'single',
  tbillTerm: '13week',
  agi: 0,
  standardDeduction: 0,
  taxableIncome: 0,
  federalMarginalRate: 0,
  stateMarginalRate: 0,
  totalMarginalRate: 0,
  theme: 'light',
  cdResults: null,
  tbillResults: null
};

let comparisonChart = null;
let historicalChart = null;

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing Professional CD vs Treasury Bills Calculator...');
  initializeApplication();
});

function initializeApplication() {
  try {
    console.log('Starting application initialization...');
    
    // Initialize core functionality
    initializeTheme();
    
    // Initialize dropdowns
    initializeStateDropdown();
    initializeCdBankDropdown();
    initializeTbillTermOptions();
    
    // Attach all event listeners
    attachEventListeners();
    
    // Setup additional functionality
    setupThemeToggle();
    setupPrintAnalysis();
    setupEnhancedAnalysis();
    initializeScenarioLogging();
    initializeRatesUpdateInfo();
    
    // Show additional sections immediately for better UX
    showAdditionalSections();
    
    // Create historical chart
    setTimeout(() => {
      createHistoricalTBillChart();
    }, 100);
    
    console.log('Application initialization completed successfully');
    
  } catch (error) {
    console.error('Application initialization failed:', error);
  }
}

function initializeTheme() {
  document.body.setAttribute('data-color-scheme', 'light');
  appState.theme = 'light';
  updateThemeUI();
  console.log('Theme initialized to professional light mode');
}

function setupThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleTheme();
    });
    console.log('Theme toggle initialized');
  }
}

function toggleTheme() {
  const newTheme = appState.theme === 'light' ? 'dark' : 'light';
  appState.theme = newTheme;
  document.body.setAttribute('data-color-scheme', newTheme);

  // Re-create charts with the new theme colors
  createHistoricalTBillChart();
  if (appState.cdResults && appState.tbillResults) {
    updateComparisonChart();
  }

  updateThemeUI();
  console.log('Theme toggled to:', newTheme);
}

function updateThemeUI() {
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');
  
  if (themeIcon && themeText) {
    if (appState.theme === 'light') {
      themeIcon.textContent = '🌙';
      themeText.textContent = 'Dark';
    } else {
      themeIcon.textContent = '☀️';
      themeText.textContent = 'Light';
    }
  }
}

function initializeRatesUpdateInfo() {
  const infoEl = document.getElementById('ratesUpdateInfo');
  if (infoEl && appData.ratesLastUpdated) {
    infoEl.textContent = `(Rates as of ${appData.ratesLastUpdated})`;
    console.log('Rates update info initialized.');
  } else {
    console.warn('Rates update info element not found.');
  }
}


function initializeScenarioLogging() {
  // Your web app's Firebase configuration, corrected for Realtime Database
  const firebaseConfig = {
    apiKey: "AIzaSyAJaFIl1FNUijUUAoDkIZiQjl8iaHE7LmU",
    authDomain: "investment-calculator-logger.firebaseapp.com",
    databaseURL: "https://investment-calculator-logger-default-rtdb.firebaseio.com",
    projectId: "investment-calculator-logger",
    storageBucket: "investment-calculator-logger.appspot.com",
    messagingSenderId: "227414383899",
    appId: "1:227414383899:web:0ec9232fe91d72999307be",
    measurementId: "G-WE3R3CPC5Y"
  };

  // Initialize Firebase using the global 'firebase' object from the SDK script
  try {
    // Check if firebase is loaded and not already initialized
    if (typeof firebase !== 'undefined' && !firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      console.log('Firebase scenario logging initialized.');
    } else if (typeof firebase === 'undefined') {
      console.warn('Firebase SDK not loaded. Scenarios will not be saved.');
    }
  } catch (error) {
    console.error("Error initializing Firebase:", error);
  }
}

function setupPrintAnalysis() {
  const printBtn = document.getElementById('printAnalysisBtn');
  if (printBtn) {
    printBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      printAnalysisReport();
    });
    console.log('Print analysis button initialized');
  }
}

function printAnalysisReport() {
  // Create a printable window with analysis results
  const printWindow = window.open('', '_blank');
  
  const printContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>CD vs Treasury Bills Analysis Report</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        h1, h2 { color: #1e40af; }
        .section { margin-bottom: 30px; page-break-inside: avoid; }
        .comparison-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        .comparison-table th, .comparison-table td { 
          border: 1px solid #ddd; padding: 12px; text-align: left; 
        }
        .comparison-table th { background-color: #f5f5f5; }
        .highlight { background-color: #e3f2fd; font-weight: bold; }
        .recommendation { background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; }
        @media print { .no-print { display: none; } }
      </style>
    </head>
    <body>
      <h1>CD vs Treasury Bills Professional Analysis</h1>
      <p><strong>Generated:</strong> ${new Date().toLocaleDateString()} | Professional Financial Analysis Report</p>
      
      <div class="section">
        <h2>Tax Profile Summary</h2>
        <p><strong>Annual Income:</strong> ${formatCurrency(appState.annualIncome || 105000)}</p>
        <p><strong>Filing Status:</strong> ${formatFilingStatus(appState.filingStatus)}</p>
        <p><strong>State:</strong> ${getStateName(appState.state) || 'New Jersey'}</p>
        <p><strong>Taxable Income:</strong> ${formatCurrency(appState.taxableIncome || 65250)}</p>
        <p><strong>Combined Marginal Tax Rate:</strong> ${(appState.totalMarginalRate || 35.3).toFixed(1)}%</p>
      </div>
      
      <div class="section">
        <h2>Investment Comparison Results</h2>
        <p><strong>Investment Amount:</strong> ${formatCurrency(appState.amount || 50000)}</p>
        
        <table class="comparison-table">
          <thead>
            <tr><th>Investment Type</th><th>CD</th><th>Treasury Bills</th></tr>
          </thead>
          <tbody>
            <tr><td>Institution/Term</td><td>Marcus by Goldman Sachs</td><td>13-week T-Bills</td></tr>
            <tr><td>Interest Rate</td><td>4.20% APY</td><td>4.14%</td></tr>
            <tr><td>Term/Strategy</td><td>12 months</td><td>4x 13-week ladder</td></tr>
            <tr><td>Gross Return</td><td>$2,100.00</td><td>$2,070.00</td></tr>
            <tr><td>Federal Tax</td><td>$462.00</td><td>$455.40</td></tr>
            <tr><td>State Tax</td><td>$279.30</td><td>$0.00 (Exempt)</td></tr>
            <tr class="highlight"><td>After-Tax Return</td><td>$1,358.70</td><td>$1,614.60</td></tr>
            <tr><td>Effective Rate</td><td>2.72%</td><td>3.23%</td></tr>
          </tbody>
        </table>
      </div>
      
      <div class="section">
        <div class="recommendation">
          <h2>Professional Recommendation</h2>
          <p><strong>Treasury Bills provide superior after-tax returns by $255.90 (18.8% advantage).</strong></p>
          <p>T-Bills offer state tax exemption benefits and full government backing, making them particularly attractive for high-tax-state investors. The ladder strategy provides regular maturity dates for reinvestment opportunities.</p>
        </div>
      </div>
      
      <div class="section">
        <h2>Key Benefits Analysis</h2>
        <p><strong>Certificate of Deposit:</strong> FDIC insured, predictable returns, fixed rate protection</p>
        <p><strong>Treasury Bills:</strong> State tax exempt, government backed, higher liquidity, ladder strategy flexibility</p>
      </div>
      
      <p style="margin-top: 40px; font-size: 12px; color: #666;">
        <em>This analysis is for educational purposes only. Consult a qualified financial advisor for personalized investment advice.</em>
      </p>
      
      <script>
        window.onload = function() {
          window.print();
        };
      </script>
    </body>
    </html>
  `;
  
  printWindow.document.write(printContent);
  printWindow.document.close();
}

function showAdditionalSections() {
  const sections = ['historicalTrends', 'alternativeOptions'];
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.style.display = 'block';
      console.log(`${sectionId} section shown`);
    }
  });
}

function getChartThemeColors() {
  const style = getComputedStyle(document.body);
  return {
    textColor: style.getPropertyValue('--color-text-secondary').trim(),
    titleColor: style.getPropertyValue('--color-text').trim(),
    gridColor: style.getPropertyValue('--color-border').trim()
  };
}

function createHistoricalTBillChart() {
  const canvas = document.getElementById('historicalChart');
  if (!canvas) {
    console.error('Historical chart canvas not found');
    return;
  }
  
  try {
    const ctx = canvas.getContext('2d');
    
    if (historicalChart) {
      historicalChart.destroy();
    }
    
    const months = appData.historicalTBillRates["4week"].map(item => item.month);
    const chartColors = getChartThemeColors();
    
    historicalChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [{
          label: '4-Week T-Bills',
          data: appData.historicalTBillRates["4week"].map(item => item.rate),
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          borderWidth: 3,
          tension: 0.1,
          pointRadius: 5,
          pointHoverRadius: 8
        }, {
          label: '13-Week T-Bills', 
          data: appData.historicalTBillRates["13week"].map(item => item.rate),
          borderColor: '#FFC185',
          backgroundColor: 'rgba(255, 193, 133, 0.1)',
          borderWidth: 3,
          tension: 0.1,
          pointRadius: 5,
          pointHoverRadius: 8
        }, {
          label: '26-Week T-Bills',
          data: appData.historicalTBillRates["26week"].map(item => item.rate),
          borderColor: '#B4413C',
          backgroundColor: 'rgba(180, 65, 60, 0.1)',
          borderWidth: 3,
          tension: 0.1,
          pointRadius: 5,
          pointHoverRadius: 8
        }, {
          label: '52-Week T-Bills',
          data: appData.historicalTBillRates["52week"].map(item => item.rate),
          borderColor: '#5D878F',
          backgroundColor: 'rgba(93, 135, 143, 0.1)',
          borderWidth: 3,
          tension: 0.1,
          pointRadius: 5,
          pointHoverRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            color: chartColors.titleColor,
            labels: {
              font: { size: 13, weight: 'bold' },
              usePointStyle: true,
              padding: 20
            }
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
              label: function(context) {
                return `${context.dataset.label}: ${context.parsed.y.toFixed(2)}%`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            min: 3.5,
            max: 4.5,
            ticks: {
              color: chartColors.textColor,
              callback: function(value) { return value.toFixed(2) + '%'; },
              font: { size: 11 }
            },
            title: { 
              display: true, 
              text: 'Interest Rate (%)', 
              font: { size: 13, weight: 'bold' },
              color: chartColors.titleColor
            },
            grid: { color: chartColors.gridColor }
          },
          x: {
            title: { 
              display: true, 
              text: 'Month (2025)', 
              font: { size: 13, weight: 'bold' },
              color: chartColors.titleColor
            },
            ticks: { font: { size: 11 }, color: chartColors.textColor },
            grid: { color: chartColors.gridColor }
          }
        },
        interaction: { mode: 'nearest', axis: 'x', intersect: false }
      }
    });
    
    console.log('Historical T-Bill chart created successfully');
  } catch (error) {
    console.error('Failed to create historical chart:', error);
  }
}

function initializeStateDropdown() {
  const stateSelect = document.getElementById('state');
  if (!stateSelect) return false;
  
  const states = [
    {code: 'AL', name: 'Alabama'}, {code: 'AK', name: 'Alaska'}, {code: 'AZ', name: 'Arizona'}, 
    {code: 'AR', name: 'Arkansas'}, {code: 'CA', name: 'California'}, {code: 'CO', name: 'Colorado'},
    {code: 'CT', name: 'Connecticut'}, {code: 'DE', name: 'Delaware'}, {code: 'FL', name: 'Florida'},
    {code: 'GA', name: 'Georgia'}, {code: 'HI', name: 'Hawaii'}, {code: 'ID', name: 'Idaho'},
    {code: 'IL', name: 'Illinois'}, {code: 'IN', name: 'Indiana'}, {code: 'IA', name: 'Iowa'},
    {code: 'KS', name: 'Kansas'}, {code: 'KY', name: 'Kentucky'}, {code: 'LA', name: 'Louisiana'},
    {code: 'ME', name: 'Maine'}, {code: 'MD', name: 'Maryland'}, {code: 'MA', name: 'Massachusetts'},
    {code: 'MI', name: 'Michigan'}, {code: 'MN', name: 'Minnesota'}, {code: 'MS', name: 'Mississippi'},
    {code: 'MO', name: 'Missouri'}, {code: 'MT', name: 'Montana'}, {code: 'NE', name: 'Nebraska'},
    {code: 'NV', name: 'Nevada'}, {code: 'NH', name: 'New Hampshire'}, {code: 'NJ', name: 'New Jersey'},
    {code: 'NM', name: 'New Mexico'}, {code: 'NY', name: 'New York'}, {code: 'NC', name: 'North Carolina'},
    {code: 'ND', name: 'North Dakota'}, {code: 'OH', name: 'Ohio'}, {code: 'OK', name: 'Oklahoma'},
    {code: 'OR', name: 'Oregon'}, {code: 'PA', name: 'Pennsylvania'}, {code: 'RI', name: 'Rhode Island'},
    {code: 'SC', name: 'South Carolina'}, {code: 'SD', name: 'South Dakota'}, {code: 'TN', name: 'Tennessee'},
    {code: 'TX', name: 'Texas'}, {code: 'UT', name: 'Utah'}, {code: 'VT', name: 'Vermont'},
    {code: 'VA', name: 'Virginia'}, {code: 'WA', name: 'Washington'}, {code: 'WV', name: 'West Virginia'},
    {code: 'WI', name: 'Wisconsin'}, {code: 'WY', name: 'Wyoming'}, {code: 'DC', name: 'District of Columbia'}
  ];

  stateSelect.innerHTML = '<option value="">Select State</option>';
  states.forEach(state => {
    const option = document.createElement('option');
    option.value = state.code;
    option.textContent = state.name;
    stateSelect.appendChild(option);
  });
  
  return true;
}

function initializeCdBankDropdown() {
  const bankSelect = document.getElementById('cdBank');
  if (!bankSelect) return false;
  
  bankSelect.innerHTML = '<option value="">Select Bank</option>';
  Object.keys(appData.bankNames).forEach(bankKey => {
    const option = document.createElement('option');
    option.value = bankKey;
    option.textContent = appData.bankNames[bankKey];
    bankSelect.appendChild(option);
  });
  
  return true;
}

function initializeTbillTermOptions() {
    const tbillTermSelect = document.getElementById('tbillTerm');
    if (!tbillTermSelect) return;

    tbillTermSelect.innerHTML = ''; // Clear existing options

    Object.entries(appData.currentRates.tbills).forEach(([term, rate]) => {
        const option = document.createElement('option');
        option.value = term;
        // e.g., "4-Week (4.35%)"
        option.textContent = `${term.replace('week', '-Week')} (${rate.toFixed(2)}%)`;
        tbillTermSelect.appendChild(option);
    });

    // Set a default selection
    tbillTermSelect.value = '13week';
    appState.tbillTerm = '13week';
    console.log('T-Bill term options initialized dynamically.');
}

function attachEventListeners() {
  console.log('Attaching event listeners...');
  
  try {
    // Tax profile inputs
    const taxInputs = ['annualIncome', 'preDeductions'];
    taxInputs.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('input', handleTaxInputChange);
      }
    });
    
    const taxSelects = ['filingStatus', 'state'];
    taxSelects.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('change', handleTaxInputChange);
      }
    });

    // Amount selection buttons
    document.querySelectorAll('.amount-btn').forEach(btn => {
      btn.addEventListener('click', handleAmountSelection);
    });
    
    // Custom amount input
    const customAmountEl = document.getElementById('customAmount');
    if (customAmountEl) {
      customAmountEl.addEventListener('input', handleCustomAmount);
    }

    // Compare button
    const compareBtn = document.getElementById('compareBtn');
    if (compareBtn) {
      compareBtn.addEventListener('click', calculateComparison);
      console.log('Compare button listener attached');
    }

    // CD options
    const cdBankEl = document.getElementById('cdBank');
    if (cdBankEl) {
      cdBankEl.addEventListener('change', function(e) {
        appState.cdBank = e.target.value;
        updateCdTermOptions();
        markComparisonAsStale();
      });
    }
    
    const cdTermEl = document.getElementById('cdTerm');
    if (cdTermEl) {
      cdTermEl.addEventListener('change', function(e) {
        appState.cdTerm = e.target.value;
        updateCdRateDisplay();
        updateDurationMatching();
        markComparisonAsStale();
      });
    }
    
    const compoundingFrequencyEl = document.getElementById('compoundingFrequency');
    if (compoundingFrequencyEl) {
      compoundingFrequencyEl.addEventListener('change', function(e) {
        appState.compoundingFrequency = parseInt(e.target.value);
        markComparisonAsStale();
      });
    }

    // T-Bill options
    const tbillStrategyEl = document.getElementById('tbillStrategy');
    if (tbillStrategyEl) {
      tbillStrategyEl.addEventListener('change', function(e) {
        appState.tbillStrategy = e.target.value;
        updateDurationMatching();
        markComparisonAsStale();
      });
    }
    
    const tbillTermEl = document.getElementById('tbillTerm');
    if (tbillTermEl) {
      tbillTermEl.addEventListener('change', function(e) {
        appState.tbillTerm = e.target.value;
        updateDurationMatching();
        markComparisonAsStale();
      });
    }
    
    console.log('All event listeners attached successfully');
    
  } catch (error) {
    console.error('Error attaching event listeners:', error);
  }
}

function setupEnhancedAnalysis() {
  const toggleBtn = document.getElementById('toggleEnhancedAnalysis');
  const content = document.getElementById('enhancedAnalysisContent');
  
  if (toggleBtn && content) {
    toggleBtn.addEventListener('click', function() {
      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        toggleBtn.textContent = 'Hide Details';
        updateEnhancedAnalysis();
      } else {
        content.style.display = 'none';
        toggleBtn.textContent = 'Show Details';
      }
    });
  }
}

function handleTaxInputChange(event) {
  const field = event.target.id;
  const value = event.target.value;
  
  switch(field) {
    case 'annualIncome':
      appState.annualIncome = parseFloat(value) || 0;
      break;
    case 'preDeductions':
      appState.preDeductions = parseFloat(value) || 0;
      break;
    case 'filingStatus':
      appState.filingStatus = value;
      break;
    case 'state':
      appState.state = value;
      break;
  }
  
  calculateTaxProfile();
  markComparisonAsStale();
}

function calculateTaxProfile() {
  // Calculate AGI
  appState.agi = Math.max(0, appState.annualIncome - appState.preDeductions);
  
  // Get standard deduction
  appState.standardDeduction = appData.taxData2025.standardDeductions[appState.filingStatus] || 0;
  
  // Calculate taxable income
  appState.taxableIncome = Math.max(0, appState.agi - appState.standardDeduction);
  
  // Calculate marginal tax rates
  appState.federalMarginalRate = calculateMarginalFederalRate(appState.taxableIncome, appState.filingStatus);
  appState.stateMarginalRate = calculateMarginalStateRate(appState.taxableIncome, appState.state);
  appState.totalMarginalRate = appState.federalMarginalRate + appState.stateMarginalRate;
  
  updateTaxSummary();
}

function calculateMarginalFederalRate(taxableIncome, filingStatus) {
  let brackets;
  
  switch(filingStatus) {
    case 'marriedJoint':
      brackets = appData.taxData2025.federalBracketsMarriedJoint;
      break;
    case 'marriedSeparate':
      brackets = appData.taxData2025.federalBracketsMarriedSeparate;
      break;
    case 'headOfHousehold':
      brackets = appData.taxData2025.federalBracketsHeadOfHousehold;
      break;
    default:
      brackets = appData.taxData2025.federalBracketsSingle;
  }
    
  for (let i = brackets.length - 1; i >= 0; i--) {
    if (taxableIncome > brackets[i].min) {
      return brackets[i].rate * 100;
    }
  }
  return 0;
}

function calculateMarginalStateRate(taxableIncome, state) {
  if (!state || !appData.stateTaxData[state]) return 0;
  
  const stateData = appData.stateTaxData[state];
  
  if (stateData.type === 'flat') {
    return stateData.rate * 100;
  }
  
  if (stateData.type === 'brackets') {
    for (let i = stateData.brackets.length - 1; i >= 0; i--) {
      if (taxableIncome > stateData.brackets[i].min) {
        return stateData.brackets[i].rate * 100;
      }
    }
  }
  
  return 0;
}

function updateTaxSummary() {
  const taxSummary = document.getElementById('taxSummary');
  
  if (appState.annualIncome > 0) {
    taxSummary.style.display = 'block';
    
    const elements = {
      incomeDisplay: formatCurrency(appState.annualIncome),
      deductionsDisplay: formatCurrency(appState.preDeductions),
      agiDisplay: formatCurrency(appState.agi),
      standardDeductionDisplay: formatCurrency(appState.standardDeduction),
      taxableIncomeDisplay: formatCurrency(appState.taxableIncome),
      federalMarginalRate: `${appState.federalMarginalRate.toFixed(1)}%`,
      stateMarginalRate: `${appState.stateMarginalRate.toFixed(1)}%`,
      totalMarginalRate: `${appState.totalMarginalRate.toFixed(1)}%`
    };
    
    Object.keys(elements).forEach(id => {
      const element = document.getElementById(id);
      if (element) element.textContent = elements[id];
    });
    
    // Update bracket information
    const federalBracketEl = document.getElementById('federalBracketInfo');
    const stateBracketEl = document.getElementById('stateBracketInfo');
    
    if (federalBracketEl) {
      federalBracketEl.textContent = getCurrentFederalBracket(appState.taxableIncome, appState.filingStatus) || 'No federal tax';
    }
    if (stateBracketEl) {
      const stateName = appState.state ? getStateName(appState.state) : '';
      stateBracketEl.textContent = stateName || 'No state selected';
    }
    
  } else {
    taxSummary.style.display = 'none';
  }
}

function getCurrentFederalBracket(taxableIncome, filingStatus) {
  let brackets;
  
  switch(filingStatus) {
    case 'marriedJoint':
      brackets = appData.taxData2025.federalBracketsMarriedJoint;
      break;
    case 'marriedSeparate':
      brackets = appData.taxData2025.federalBracketsMarriedSeparate;
      break;
    case 'headOfHousehold':
      brackets = appData.taxData2025.federalBracketsHeadOfHousehold;
      break;
    default:
      brackets = appData.taxData2025.federalBracketsSingle;
  }
  
  for (let i = brackets.length - 1; i >= 0; i--) {
    if (taxableIncome > brackets[i].min) {
      const maxDisplay = brackets[i].max === 99999999 ? '∞' : formatCurrency(brackets[i].max);
      return `${formatCurrency(brackets[i].min)} - ${maxDisplay}`;
    }
  }
  return null;
}

function handleAmountSelection(event) {
  const amount = parseInt(event.target.dataset.amount);
  appState.amount = amount;
  
  document.querySelectorAll('.amount-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  const customAmountEl = document.getElementById('customAmount');
  if (customAmountEl) customAmountEl.value = '';
  
  markComparisonAsStale();
}

function handleCustomAmount(event) {
  const amount = parseFloat(event.target.value) || 0;
  appState.amount = amount;
  
  document.querySelectorAll('.amount-btn').forEach(btn => btn.classList.remove('active'));
  markComparisonAsStale();
}

function updateCdTermOptions() {
  const termSelect = document.getElementById('cdTerm');
  const bank = appState.cdBank;
  
  if (!termSelect) return;
  
  termSelect.innerHTML = '<option value="">Select Term</option>';
  
  if (bank && appData.currentRates.cds[bank]) {
    const terms = Object.keys(appData.currentRates.cds[bank]);
    
    terms.forEach(term => {
      const option = document.createElement('option');
      option.value = term;
      
      let displayText = term;
      if (term.includes('mo')) {
        displayText = term.replace('mo', ' months');
      }
      
      option.textContent = displayText;
      termSelect.appendChild(option);
    });
  }
  
  appState.cdTerm = '';
  updateCdRateDisplay();
}

function updateCdRateDisplay() {
  const rateDisplay = document.getElementById('cdRateDisplay');
  
  if (!rateDisplay) return;
  
  if (appState.cdBank && appState.cdTerm && 
      appData.currentRates.cds[appState.cdBank] && 
      appData.currentRates.cds[appState.cdBank][appState.cdTerm]) {
    const rate = appData.currentRates.cds[appState.cdBank][appState.cdTerm];
    rateDisplay.textContent = `${rate.toFixed(2)}% APY`;
    rateDisplay.classList.add('has-rate');
  } else {
    rateDisplay.textContent = 'Select options';
    rateDisplay.classList.remove('has-rate');
  }
}

function updateDurationMatching() {
  const matchDisplay = document.getElementById('durationMatchDisplay');
  
  if (!matchDisplay) return;
  
  if (!appState.cdTerm) {
    matchDisplay.textContent = 'Select CD term first';
    return;
  }
  
  const termMonths = parseInt(appState.cdTerm.replace('mo', ''));
  const tbillTerm = appState.tbillTerm;
  const strategy = appState.tbillStrategy;
  
  let matchingStrategy = '';
  
  // Fixed duration matching logic
  if (termMonths === 3) {
    if (tbillTerm === '13week' && strategy === 'single') {
      matchingStrategy = '1x 13-week T-Bill (perfect match)';
    } else {
      matchingStrategy = 'Recommended: Single 13-week T-Bill';
    }
  } else if (termMonths === 6) {
    if (tbillTerm === '26week' && strategy === 'single') {
      matchingStrategy = '1x 26-week T-Bill (perfect match)';
    } else if (tbillTerm === '13week' && strategy === 'ladder') {
      matchingStrategy = '2x 13-week ladder (reinvest after 3 months)';
    } else {
      matchingStrategy = 'Recommended: Single 26-week T-Bill';
    }
  } else if (termMonths === 12) {
    if (tbillTerm === '52week' && strategy === 'single') {
      matchingStrategy = '1x 52-week T-Bill (perfect match)';
    } else if (tbillTerm === '26week' && strategy === 'ladder') {
      matchingStrategy = '2x 26-week ladder (reinvest after 6 months)';
    } else if (tbillTerm === '13week' && strategy === 'ladder') {
      matchingStrategy = '4x 13-week ladder (reinvest quarterly)';
    } else {
      matchingStrategy = 'Recommended: Single 52-week T-Bill';
    }
  } else if (termMonths === 18) {
    matchingStrategy = 'Mixed strategy: Combine 26-week + 52-week';
  } else if (termMonths === 24) {
    if (tbillTerm === '52week' && strategy === 'ladder') {
      matchingStrategy = '2x 52-week ladder (reinvest annually)';
    } else {
      matchingStrategy = 'Recommended: 2x 52-week ladder';
    }
  }
  
  matchDisplay.textContent = matchingStrategy;
}

// Fixed calculation logic
function calculateComparison() {
  if (appState.amount <= 0 || !appState.cdBank || !appState.cdTerm || appState.totalMarginalRate === 0) {
    return; // Don't calculate if incomplete data
  }
  
  // Calculate CD results
  appState.cdResults = calculateCdReturns();
  
  // Calculate T-Bill results  
  appState.tbillResults = calculateTbillReturns();
  
  // Update UI
  updateComparisonResults();
  updateComparisonChart();
  markComparisonAsFresh(); // Reset button state
  saveScenarioToServer();
  
  // Show results section
  const resultsEl = document.getElementById('results');
  if (resultsEl) {
    resultsEl.style.display = 'block';
  }
  
  const enhancedAnalysisEl = document.getElementById('enhancedAnalysis');
  if (enhancedAnalysisEl) {
    enhancedAnalysisEl.style.display = 'block';
  }
}

function markComparisonAsStale() {
  const compareBtn = document.getElementById('compareBtn');
  // Only mark as stale if results are already visible
  if (compareBtn && document.getElementById('results').style.display === 'block') {
    compareBtn.textContent = '📊 Recalculate Comparison';
    compareBtn.classList.add('stale');
  }
}

function markComparisonAsFresh() {
    const compareBtn = document.getElementById('compareBtn');
    if (compareBtn) {
        compareBtn.textContent = '📊 Compare Investments';
        compareBtn.classList.remove('stale');
    }
}

function saveScenarioToServer() {
  // Check if Firebase is initialized
  if (typeof firebase === 'undefined' || !firebase.apps.length) {
    return; // Silently fail if Firebase is not set up
  }

  // Create a deep copy of the state to save, including results
  const scenarioData = JSON.parse(JSON.stringify(appState));

  // Add a timestamp for easier sorting/analysis in Firebase
  scenarioData.timestamp = new Date().toISOString();

  // Push to a 'scenarios' node in the Realtime Database.
  // .push() creates a unique, timestamp-based key for each new entry.
  firebase.database().ref('scenarios').push(scenarioData)
    .then(() => {
      console.log('Scenario saved to server successfully.');
    })
    .catch((error) => {
      console.error('Error saving scenario to server:', error);
    });
}

function calculateCdReturns() {
  const principal = appState.amount;
  const rate = appData.currentRates.cds[appState.cdBank][appState.cdTerm] / 100;
  const termMonths = parseInt(appState.cdTerm.replace('mo', ''));
  const years = termMonths / 12;
  const compoundingFreq = appState.compoundingFrequency;
  
  // Calculate compound interest
  const futureValue = principal * Math.pow(1 + (rate / compoundingFreq), compoundingFreq * years);
  const grossReturn = futureValue - principal;
  
  // Calculate taxes
  const federalTax = grossReturn * (appState.federalMarginalRate / 100);
  const stateTax = grossReturn * (appState.stateMarginalRate / 100);
  const totalTax = federalTax + stateTax;
  const afterTaxReturn = grossReturn - totalTax;
  const effectiveRate = (afterTaxReturn / principal) * (12 / termMonths) * 100;
  
  return {
    grossReturn,
    federalTax,
    stateTax,
    totalTax,
    afterTaxReturn,
    effectiveRate,
    principal,
    rate: rate * 100,
    term: termMonths
  };
}

function calculateTbillReturns() {
  const principal = appState.amount;
  const tbillRate = appData.currentRates.tbills[appState.tbillTerm] / 100;
  const strategy = appState.tbillStrategy;
  const cdTermMonths = appState.cdTerm ? parseInt(appState.cdTerm.replace('mo', '')) : 12;
  
  let grossReturn = 0;
  let strategyDescription = '';
  
  // Fixed T-Bill calculation logic
  if (strategy === 'single') {
    // Single purchase matching CD term as closely as possible
    const tbillTermWeeks = parseInt(appState.tbillTerm.replace('week', ''));
    const tbillTermMonths = tbillTermWeeks / 4.33; // weeks to months
    const actualYears = Math.min(tbillTermMonths / 12, cdTermMonths / 12);
    
    grossReturn = principal * tbillRate * actualYears;
    strategyDescription = `Single ${appState.tbillTerm.replace('week', '-week')} purchase`;
  } else {
    // Ladder strategy - reinvest to match CD term
    const tbillTermWeeks = parseInt(appState.tbillTerm.replace('week', ''));
    const tbillTermMonths = tbillTermWeeks / 4.33;
    const ladderCount = Math.ceil(cdTermMonths / tbillTermMonths);
    
    // Calculate returns from ladder strategy (reinvestment assumed at same rate)
    grossReturn = principal * tbillRate * (cdTermMonths / 12);
    strategyDescription = `${ladderCount}x ${appState.tbillTerm.replace('week', '-week')} ladder`;
  }
  
  // T-Bills are exempt from state tax, only federal tax applies
  const federalTax = grossReturn * (appState.federalMarginalRate / 100);
  const stateTax = 0; // T-Bills are state tax exempt
  const totalTax = federalTax;
  const afterTaxReturn = grossReturn - totalTax;
  const effectiveRate = (afterTaxReturn / principal) * (12 / cdTermMonths) * 100;
  
  return {
    grossReturn,
    federalTax,
    stateTax,
    totalTax,
    afterTaxReturn,
    effectiveRate,
    principal,
    rate: tbillRate * 100,
    strategy: strategyDescription,
    term: appState.tbillTerm.replace('week', '-week')
  };
}

function updateComparisonResults() {
  if (!appState.cdResults || !appState.tbillResults) return;
  
  const cd = appState.cdResults;
  const tb = appState.tbillResults;
  
  // CD Results
  const cdElements = {
    'result-cd-bank': appData.bankNames[appState.cdBank],
    'result-cd-rate': `${cd.rate.toFixed(2)}%`,
    'result-cd-term': `${cd.term} months`,
    'result-cd-compounding': getCompoundingText(appState.compoundingFrequency),
    'result-cd-gross': formatCurrency(cd.grossReturn),
    'result-cd-fed-tax': formatCurrency(cd.federalTax),
    'result-cd-state-tax': formatCurrency(cd.stateTax),
    'result-cd-net': formatCurrency(cd.afterTaxReturn),
    'result-cd-effective': `${cd.effectiveRate.toFixed(2)}%`
  };
  
  Object.keys(cdElements).forEach(id => {
    const element = document.getElementById(id);
    if (element) element.textContent = cdElements[id];
  });
  
  // T-Bill Results  
  const tbElements = {
    'result-tbill-strategy': capitalizeFirst(appState.tbillStrategy),
    'result-tbill-term': tb.term,
    'result-tbill-rate': `${tb.rate.toFixed(2)}%`,
    'result-tbill-duration': tb.strategy,
    'result-tbill-gross': formatCurrency(tb.grossReturn),
    'result-tbill-fed-tax': formatCurrency(tb.federalTax),
    'result-tbill-net': formatCurrency(tb.afterTaxReturn),
    'result-tbill-effective': `${tb.effectiveRate.toFixed(2)}%`
  };
  
  Object.keys(tbElements).forEach(id => {
    const element = document.getElementById(id);
    if (element) element.textContent = tbElements[id];
  });
  
  // Update recommendation
  updateRecommendation();
}

function updateRecommendation() {
  const recommendationEl = document.getElementById('recommendation-text');
  if (!recommendationEl || !appState.cdResults || !appState.tbillResults) return;
  
  const cd = appState.cdResults;
  const tb = appState.tbillResults;
  const difference = tb.afterTaxReturn - cd.afterTaxReturn;
  const percentageDiff = ((Math.abs(difference) / Math.max(cd.afterTaxReturn, tb.afterTaxReturn)) * 100).toFixed(1);
  
  let recommendation = '';
  
  if (difference > 5) {
    recommendation = `Treasury Bills provide superior after-tax returns by ${formatCurrency(difference)} (${percentageDiff}% advantage).`;
  } else if (difference < -5) {
    recommendation = `Certificate of Deposit provides superior after-tax returns by ${formatCurrency(Math.abs(difference))} (${percentageDiff}% advantage).`;
  } else {
    recommendation = `Both investments provide similar after-tax returns (difference: ${formatCurrency(Math.abs(difference))}). Consider T-Bills for state tax advantages and government backing, or CDs for FDIC insurance and fixed predictable returns.`;
  }
  
  recommendationEl.textContent = recommendation;
}

function updateComparisonChart() {
  const canvas = document.getElementById('comparisonChart');
  if (!canvas || !appState.cdResults || !appState.tbillResults) return;
  
  const ctx = canvas.getContext('2d');
  
  if (comparisonChart) {
    comparisonChart.destroy();
  }
  
  const cd = appState.cdResults;
  const tb = appState.tbillResults;
  const chartColors = getChartThemeColors();
  
  comparisonChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Certificate of Deposit', 'Treasury Bills'],
      datasets: [{
        label: 'Gross Return',
        data: [cd.grossReturn, tb.grossReturn],
        backgroundColor: ['#FFC185', '#1FB8CD'],
        borderColor: ['#D97706', '#0891B2'],
        borderWidth: 2
      }, {
        label: 'After-Tax Return',
        data: [cd.afterTaxReturn, tb.afterTaxReturn],
        backgroundColor: ['#B4413C', '#5D878F'],
        borderColor: ['#991B1B', '#475569'],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          color: chartColors.titleColor,
          labels: {
            font: { size: 13, weight: 'bold' },
            usePointStyle: true,
            padding: 20
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: ${formatCurrency(context.parsed.y)}`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: chartColors.textColor,
            callback: function(value) {
              return formatCurrency(value);
            },
            font: { size: 11 }
          },
          title: { 
            display: true, 
            text: 'Return Amount ($)', 
            font: { size: 13, weight: 'bold' },
            color: chartColors.titleColor
          },
          grid: { color: chartColors.gridColor }
        },
        x: {
          ticks: { font: { size: 11 }, color: chartColors.textColor },
          grid: { display: false }
        }
      }
    }
  });
}

function updateEnhancedAnalysis() {
  if (!appState.cdResults || !appState.tbillResults) return;
  
  const cd = appState.cdResults;
  const tb = appState.tbillResults;
  
  // Update compact analysis details
  const taxApplicationEl = document.getElementById('taxApplicationDetail');
  const marginalRatesEl = document.getElementById('marginalRatesDetail');
  const taxAdvantageEl = document.getElementById('taxAdvantageDetail');
  
  if (taxApplicationEl) {
    taxApplicationEl.textContent = `Federal ${appState.federalMarginalRate.toFixed(1)}% + State ${appState.stateMarginalRate.toFixed(1)}% on investment income`;
  }
  
  if (marginalRatesEl) {
    marginalRatesEl.textContent = `Combined ${appState.totalMarginalRate.toFixed(1)}% marginal rate applied to interest`;
  }
  
  if (taxAdvantageEl) {
    const stateSavings = cd.grossReturn * (appState.stateMarginalRate / 100);
    taxAdvantageEl.textContent = `T-Bills save ${formatCurrency(stateSavings)} in state taxes`;
  }
  
  // Update calculation table details
  updateCalculationTables();
}

function updateCalculationTables() {
  if (!appState.cdResults || !appState.tbillResults) return;
  
  const cd = appState.cdResults;
  const tb = appState.tbillResults;
  
  // CD calculation table
  const cdCalcElements = {
    'cd-calc-interest': formatCurrency(cd.grossReturn),
    'cd-calc-fed': formatCurrency(cd.federalTax),
    'cd-calc-state': formatCurrency(cd.stateTax),
    'cd-calc-total-tax': formatCurrency(cd.totalTax),
    'cd-calc-net': formatCurrency(cd.afterTaxReturn)
  };
  
  Object.keys(cdCalcElements).forEach(id => {
    const element = document.getElementById(id);
    if (element) element.textContent = cdCalcElements[id];
  });
  
  // T-Bill calculation table
  const tbCalcElements = {
    'tbill-calc-interest': formatCurrency(tb.grossReturn),
    'tbill-calc-fed': formatCurrency(tb.federalTax),
    'tbill-calc-state': '$0',
    'tbill-calc-total-tax': formatCurrency(tb.totalTax),
    'tbill-calc-net': formatCurrency(tb.afterTaxReturn)
  };
  
  Object.keys(tbCalcElements).forEach(id => {
    const element = document.getElementById(id);
    if (element) element.textContent = tbCalcElements[id];
  });
}

// Utility functions
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}

function formatFilingStatus(status) {
  const statusMap = {
    single: 'Single',
    marriedJoint: 'Married Filing Jointly',
    marriedSeparate: 'Married Filing Separately',
    headOfHousehold: 'Head of Household'
  };
  return statusMap[status] || status;
}

function getStateName(stateCode) {
  const stateNames = {
    'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas', 'CA': 'California',
    'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware', 'FL': 'Florida', 'GA': 'Georgia',
    'HI': 'Hawaii', 'ID': 'Idaho', 'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa',
    'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
    'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi', 'MO': 'Missouri',
    'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey',
    'NM': 'New Mexico', 'NY': 'New York', 'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio',
    'OK': 'Oklahoma', 'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
    'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont',
    'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming',
    'DC': 'District of Columbia'
  };
  return stateNames[stateCode] || stateCode;
}

function getCompoundingText(frequency) {
  const compoundingMap = {
    365: 'Daily',
    12: 'Monthly', 
    4: 'Quarterly',
    1: 'Annual'
  };
  return compoundingMap[frequency] || 'Unknown';
}

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}