// Application Data
let appData = {
  "members": [
    {
      "id": 1,
      "name": "Rishabh",
      "role": "Managing Partner",
      "investment": 100000,
      "ownershipPercent": 26.8,
      "email": "rishabh@makhanaops.com",
      "phone": "+91 9876543210",
      "joinDate": "2024-01-15"
    },
    {
      "id": 2,
      "name": "Navneet",
      "role": "Operations Head",
      "investment": 200000,
      "ownershipPercent": 53.6,
      "email": "navneet@makhanaops.com",
      "phone": "+91 9876543211",
      "joinDate": "2024-01-15"
    },
    {
      "id": 3,
      "name": "Abhishek",
      "role": "Sales Manager",
      "investment": 50000,
      "ownershipPercent": 13.4,
      "email": "abhishek@makhanaops.com",
      "phone": "+91 9876543212",
      "joinDate": "2024-01-20"
    },
    {
      "id": 4,
      "name": "Abhinav",
      "role": "Quality Controller",
      "investment": 20000,
      "ownershipPercent": 5.4,
      "email": "abhinav@makhanaops.com",
      "phone": "+91 9876543213",
      "joinDate": "2024-01-25"
    }
  ],
  "productionCosts": [
    {
      "id": 1,
      "date": "2024-12-01",
      "category": "Machinery Cost",
      "description": "Puffing machine maintenance",
      "amount": 15000,
      "type": "OpEx"
    },
    {
      "id": 2,
      "date": "2024-12-02",
      "category": "Labour Cost",
      "description": "Production staff wages",
      "amount": 25000,
      "type": "OpEx"
    },
    {
      "id": 3,
      "date": "2024-12-03",
      "category": "Sheet Cost",
      "description": "Packaging materials",
      "amount": 8000,
      "type": "COGS"
    },
    {
      "id": 4,
      "date": "2024-12-04",
      "category": "Transportation",
      "description": "Raw material delivery",
      "amount": 12000,
      "type": "OpEx"
    }
  ],
  "salesData": [
    {
      "id": 1,
      "date": "2024-12-01",
      "product": "Premium Makhana 500g",
      "quantity": 200,
      "unitPrice": 250,
      "revenue": 50000,
      "customer": "Retail Chain A"
    },
    {
      "id": 2,
      "date": "2024-12-02",
      "product": "Organic Makhana 1kg",
      "quantity": 150,
      "unitPrice": 450,
      "revenue": 67500,
      "customer": "Online Platform B"
    }
  ],
  "networkPartners": {
    "brokers": [
      {
        "id": 1,
        "name": "Delhi Agro Brokers",
        "contact": "Rajesh Kumar",
        "phone": "+91 9876543220",
        "commission": 3.5,
        "performance": 85
      }
    ],
    "sellers": [
      {
        "id": 1,
        "name": "Premium Foods Ltd",
        "contact": "Priya Sharma",
        "phone": "+91 9876543221",
        "terms": "30 days",
        "volume": 500
      }
    ],
    "distributors": [
      {
        "id": 1,
        "name": "North India Distributors",
        "contact": "Amit Singh",
        "phone": "+91 9876543222",
        "region": "North India",
        "orders": 25
      }
    ]
  },
  "kpis": {
    "monthlyRevenue": 285000,
    "monthlyCosts": 180000,
    "grossProfit": 105000,
    "profitMargin": 36.8,
    "totalInvestment": 373000,
    "productionBatches": 12,
    "activeOrders": 8
  }
};

// DOM Elements
let sidebarToggle, sidebar, navItems, sections, exportBtn, memberModal, memberForm;

// Chart instances
let revenueChart = null;
let costsChart = null;
let ownershipChart = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements after DOM is loaded
  sidebarToggle = document.getElementById('sidebarToggle');
  sidebar = document.getElementById('sidebar');
  navItems = document.querySelectorAll('.nav-item');
  sections = document.querySelectorAll('.section');
  exportBtn = document.getElementById('exportBtn');
  memberModal = document.getElementById('memberModal');
  memberForm = document.getElementById('memberForm');
  
  console.log('DOM loaded, initializing application...');
  
  initializeNavigation();
  initializeCharts();
  renderMembers();
  renderProductionCosts();
  renderSalesData();
  renderNetworkPartners();
  renderProfitDistribution();
  initializeModals();
  initializeExport();
  initializeTabs();
});

// Navigation
function initializeNavigation() {
  console.log('Initializing navigation...');
  
  // Sidebar toggle for mobile
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');
    });
  }

  // Navigation items
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionName = this.dataset.section;
      console.log('Navigating to section:', sectionName);
      
      // Update active nav item
      navItems.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
      
      // Show corresponding section
      sections.forEach(section => section.classList.remove('active'));
      const targetSection = document.getElementById(`${sectionName}-section`);
      console.log('Target section:', targetSection);
      
      if (targetSection) {
        targetSection.classList.add('active');
        console.log('Section activated:', sectionName);
      } else {
        console.error('Section not found:', `${sectionName}-section`);
      }
      
      // Close sidebar on mobile after navigation
      if (sidebar) {
        sidebar.classList.remove('open');
      }
    });
  });
}

// Charts
function initializeCharts() {
  console.log('Initializing charts...');
  
  // Revenue Chart
  const revenueCtx = document.getElementById('revenueChart');
  if (revenueCtx) {
    revenueChart = new Chart(revenueCtx.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Revenue',
          data: [180000, 195000, 210000, 225000, 240000, 255000, 265000, 275000, 280000, 285000, 290000, 295000],
          borderColor: '#D4AF37',
          backgroundColor: 'rgba(212, 175, 55, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: '#E6EDF3'
            }
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(230, 237, 243, 0.1)'
            },
            ticks: {
              color: '#E6EDF3'
            }
          },
          y: {
            grid: {
              color: 'rgba(230, 237, 243, 0.1)'
            },
            ticks: {
              color: '#E6EDF3',
              callback: function(value) {
                return '₹' + (value / 1000) + 'K';
              }
            }
          }
        }
      }
    });
  }

  // Costs Chart
  const costsCtx = document.getElementById('costsChart');
  if (costsCtx) {
    costsChart = new Chart(costsCtx.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Machinery Cost', 'Labour Cost', 'Sheet Cost', 'Transportation'],
        datasets: [{
          data: [15000, 25000, 8000, 12000],
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
          borderColor: '#151821',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#E6EDF3',
              padding: 20
            }
          }
        }
      }
    });
  }

  // Ownership Chart
  const ownershipCtx = document.getElementById('ownershipChart');
  if (ownershipCtx) {
    ownershipChart = new Chart(ownershipCtx.getContext('2d'), {
      type: 'pie',
      data: {
        labels: appData.members.map(member => member.name),
        datasets: [{
          data: appData.members.map(member => member.ownershipPercent),
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
          borderColor: '#151821',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#E6EDF3',
              padding: 20
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.label + ': ' + context.parsed + '%';
              }
            }
          }
        }
      }
    });
  }
}

// Members
function renderMembers() {
  console.log('Rendering members...');
  const membersGrid = document.getElementById('membersGrid');
  
  if (membersGrid) {
    membersGrid.innerHTML = appData.members.map(member => `
      <div class="member-card">
        <div class="member-header">
          <div class="member-avatar">${member.name.charAt(0)}</div>
          <div class="member-info">
            <h4>${member.name}</h4>
            <div class="member-role">${member.role}</div>
          </div>
        </div>
        <div class="member-stats">
          <div class="member-stat">
            <div class="stat-value">₹${formatNumber(member.investment)}</div>
            <div class="stat-label">Investment</div>
          </div>
          <div class="member-stat">
            <div class="stat-value">${member.ownershipPercent}%</div>
            <div class="stat-label">Ownership</div>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// Production Costs
function renderProductionCosts() {
  console.log('Rendering production costs...');
  const productionTable = document.getElementById('productionTable');
  
  if (productionTable) {
    const tbody = productionTable.querySelector('tbody');
    if (tbody) {
      tbody.innerHTML = appData.productionCosts.map(cost => `
        <tr>
          <td>${formatDate(cost.date)}</td>
          <td>${cost.category}</td>
          <td>${cost.description}</td>
          <td>₹${formatNumber(cost.amount)}</td>
          <td><span class="status status--${cost.type === 'COGS' ? 'warning' : 'info'}">${cost.type}</span></td>
        </tr>
      `).join('');
    }
  }
}

// Sales Data
function renderSalesData() {
  console.log('Rendering sales data...');
  const salesTable = document.getElementById('salesTable');
  
  if (salesTable) {
    const tbody = salesTable.querySelector('tbody');
    if (tbody) {
      tbody.innerHTML = appData.salesData.map(sale => `
        <tr>
          <td>${formatDate(sale.date)}</td>
          <td>${sale.product}</td>
          <td>${sale.quantity}</td>
          <td>₹${formatNumber(sale.unitPrice)}</td>
          <td>₹${formatNumber(sale.revenue)}</td>
          <td>${sale.customer}</td>
        </tr>
      `).join('');
    }
  }
}

// Network Partners
function renderNetworkPartners() {
  console.log('Rendering network partners...');
  
  // Brokers
  const brokersGrid = document.getElementById('brokersGrid');
  if (brokersGrid) {
    brokersGrid.innerHTML = appData.networkPartners.brokers.map(broker => `
      <div class="network-card">
        <h4>${broker.name}</h4>
        <p><strong>Contact:</strong> ${broker.contact}</p>
        <p><strong>Phone:</strong> ${broker.phone}</p>
        <p><strong>Commission:</strong> ${broker.commission}%</p>
        <p><strong>Performance:</strong> ${broker.performance}%</p>
      </div>
    `).join('');
  }

  // Sellers
  const sellersGrid = document.getElementById('sellersGrid');
  if (sellersGrid) {
    sellersGrid.innerHTML = appData.networkPartners.sellers.map(seller => `
      <div class="network-card">
        <h4>${seller.name}</h4>
        <p><strong>Contact:</strong> ${seller.contact}</p>
        <p><strong>Phone:</strong> ${seller.phone}</p>
        <p><strong>Terms:</strong> ${seller.terms}</p>
        <p><strong>Volume:</strong> ${seller.volume} units</p>
      </div>
    `).join('');
  }

  // Distributors
  const distributorsGrid = document.getElementById('distributorsGrid');
  if (distributorsGrid) {
    distributorsGrid.innerHTML = appData.networkPartners.distributors.map(distributor => `
      <div class="network-card">
        <h4>${distributor.name}</h4>
        <p><strong>Contact:</strong> ${distributor.contact}</p>
        <p><strong>Phone:</strong> ${distributor.phone}</p>
        <p><strong>Region:</strong> ${distributor.region}</p>
        <p><strong>Orders:</strong> ${distributor.orders}</p>
      </div>
    `).join('');
  }
}

// Profit Distribution
function renderProfitDistribution() {
  console.log('Rendering profit distribution...');
  const profitDistribution = document.getElementById('profitDistribution');
  
  if (profitDistribution) {
    const netProfit = appData.kpis.grossProfit;
    
    profitDistribution.innerHTML = appData.members.map(member => {
      const memberProfit = Math.round(netProfit * (member.ownershipPercent / 100));
      return `
        <div class="distribution-item">
          <span class="distribution-name">${member.name} (${member.ownershipPercent}%)</span>
          <span class="distribution-amount">₹${formatNumber(memberProfit)}</span>
        </div>
      `;
    }).join('');
  }
}

// Tabs (Network section)
function initializeTabs() {
  console.log('Initializing tabs...');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabName = this.dataset.tab;
      
      // Update active tab button
      tabButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Show corresponding tab content
      tabContents.forEach(content => content.classList.remove('active'));
      const targetTab = document.getElementById(`${tabName}-tab`);
      if (targetTab) {
        targetTab.classList.add('active');
      }
    });
  });
}

// Modals
function initializeModals() {
  console.log('Initializing modals...');
  
  // Use event delegation for dynamic buttons
  document.addEventListener('click', function(e) {
    // Add member button
    if (e.target && e.target.id === 'addMemberBtn') {
      console.log('Add member button clicked');
      if (memberModal) {
        memberModal.classList.remove('hidden');
        console.log('Modal opened');
      } else {
        console.error('Member modal not found');
      }
    }
    
    // Close modal buttons
    if (e.target && e.target.classList.contains('modal-close')) {
      console.log('Modal close button clicked');
      if (memberModal) {
        memberModal.classList.add('hidden');
        console.log('Modal closed');
      }
    }
  });
  
  // Close modal on backdrop click
  if (memberModal) {
    memberModal.addEventListener('click', function(e) {
      if (e.target === memberModal) {
        console.log('Modal backdrop clicked');
        memberModal.classList.add('hidden');
      }
    });
  }
  
  // Member form submission
  if (memberForm) {
    memberForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Member form submitted');
      
      const formData = new FormData(memberForm);
      
      const newMember = {
        id: appData.members.length + 1,
        name: formData.get('name'),
        role: formData.get('role'),
        investment: parseInt(formData.get('investment')),
        email: formData.get('email'),
        phone: formData.get('phone'),
        joinDate: new Date().toISOString().split('T')[0]
      };
      
      // Calculate ownership percentage
      const totalInvestment = appData.members.reduce((sum, member) => sum + member.investment, 0) + newMember.investment;
      
      // Recalculate all ownership percentages
      appData.members.forEach(member => {
        member.ownershipPercent = Math.round((member.investment / totalInvestment) * 100 * 10) / 10;
      });
      
      newMember.ownershipPercent = Math.round((newMember.investment / totalInvestment) * 100 * 10) / 10;
      
      appData.members.push(newMember);
      
      // Update UI
      renderMembers();
      updateOwnershipChart();
      renderProfitDistribution();
      
      // Close modal and reset form
      memberModal.classList.add('hidden');
      memberForm.reset();
      
      showNotification('Member added successfully!', 'success');
    });
  }
}

// Update ownership chart
function updateOwnershipChart() {
  if (ownershipChart) {
    ownershipChart.data.labels = appData.members.map(member => member.name);
    ownershipChart.data.datasets[0].data = appData.members.map(member => member.ownershipPercent);
    ownershipChart.update();
  }
}

// Export to XLSX
function initializeExport() {
  console.log('Initializing export...');
  
  if (exportBtn) {
    exportBtn.addEventListener('click', function() {
      console.log('Export button clicked');
      
      try {
        // Create workbook
        const wb = XLSX.utils.book_new();
        
        // Members sheet
        const membersWs = XLSX.utils.json_to_sheet(appData.members);
        XLSX.utils.book_append_sheet(wb, membersWs, 'Members');
        
        // Production Costs sheet
        const costsWs = XLSX.utils.json_to_sheet(appData.productionCosts);
        XLSX.utils.book_append_sheet(wb, costsWs, 'Production Costs');
        
        // Sales sheet
        const salesWs = XLSX.utils.json_to_sheet(appData.salesData);
        XLSX.utils.book_append_sheet(wb, salesWs, 'Sales');
        
        // P&L sheet
        const plData = [
          { Item: 'Total Revenue', Amount: appData.kpis.monthlyRevenue },
          { Item: 'Total Costs', Amount: appData.kpis.monthlyCosts },
          { Item: 'Gross Profit', Amount: appData.kpis.grossProfit },
          { Item: 'Profit Margin', Amount: appData.kpis.profitMargin + '%' }
        ];
        const plWs = XLSX.utils.json_to_sheet(plData);
        XLSX.utils.book_append_sheet(wb, plWs, 'P&L');
        
        // Save file
        const fileName = `Makhana_Ops_Report_${new Date().toISOString().split('T')[0]}.xlsx`;
        XLSX.writeFile(wb, fileName);
        
        // Show success feedback
        showNotification('Export successful!', 'success');
        console.log('Export completed successfully');
      } catch (error) {
        console.error('Export failed:', error);
        showNotification('Export failed. Please try again.', 'error');
      }
    });
  }
}

// Utility Functions
function formatNumber(num) {
  return new Intl.NumberFormat('en-IN').format(num);
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  });
}

function showNotification(message, type = 'info') {
  console.log('Showing notification:', message, type);
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    background: var(--color-${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'info'});
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    z-index: 10001;
    opacity: 0;
    transform: translateX(100px);
    transition: all 0.3s ease;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateX(0)';
  }, 10);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100px)';
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Handle other button clicks using event delegation
document.addEventListener('click', function(e) {
  // Handle various add buttons
  if (e.target.id === 'addInvestmentBtn') {
    showNotification('Investment form coming soon!', 'info');
  }
  
  if (e.target.id === 'addProductionBtn') {
    showNotification('Production entry form coming soon!', 'info');
  }
  
  if (e.target.id === 'addCostBtn') {
    showNotification('Cost entry form coming soon!', 'info');
  }
  
  if (e.target.id === 'addLogisticsBtn') {
    showNotification('Logistics form coming soon!', 'info');
  }
  
  if (e.target.id === 'addSaleBtn') {
    showNotification('Sales form coming soon!', 'info');
  }
});

// Member switcher functionality
document.addEventListener('DOMContentLoaded', function() {
  const memberSwitcher = document.getElementById('memberSwitcher');
  if (memberSwitcher) {
    memberSwitcher.addEventListener('change', function() {
      const selectedMemberId = this.value;
      if (selectedMemberId) {
        // Filter data by selected member (placeholder functionality)
        showNotification(`Filtering data for member ID: ${selectedMemberId}`, 'info');
      } else {
        showNotification('Showing all members data', 'info');
      }
    });
  }
});