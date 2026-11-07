export const MOCK_REPORTS_OVERVIEW = {
  summary: [
    { title: 'Total Students', value: 45200, icon: 'Users', trend: 'up', trendValue: 12 },
    { title: 'Active Enrollments', value: 38400, icon: 'ShieldCheck', trend: 'up', trendValue: 8 },
    { title: 'Premium Collected', value: 57600000, icon: 'Banknote', trend: 'up', trendValue: 15 },
    { title: 'Claims Submitted', value: 1250, icon: 'FileText', trend: 'down', trendValue: 2 },
    { title: 'Claims Approved', value: 840, icon: 'CheckCircle2', trend: 'up', trendValue: 5 },
    { title: 'Incentives Paid', value: 1150000, icon: 'Gift', trend: 'up', trendValue: 20 },
  ],
  insights: [
    { type: 'success', text: 'Patna district achieved 98% enrollment target this month.' },
    { type: 'warning', text: 'Claims approval rate in Gaya has dropped by 4%.' },
    { type: 'info', text: 'BM standard incentives are the highest driver of new enrollments.' },
  ],
  categoryMetrics: {
    enrollment: { total: 45200, growth: '+12%', lastUpdated: '2 hours ago' },
    claims: { total: 1250, approvalRate: '67.2%', lastUpdated: '1 hour ago' },
    finance: { total: '₹5.76Cr', pending: '₹42L', lastUpdated: '30 mins ago' },
    incentives: { total: '₹14.5L', paid: '₹11.5L', lastUpdated: '45 mins ago' },
    geography: { activeDistricts: 12, schoolsCovered: 450, lastUpdated: '5 mins ago' },
    policies: { active: 3, mostUsed: 'Student Standard', lastUpdated: '1 day ago' },
  }
};

export const MOCK_ENROLLMENT_REPORTS = {
  summary: [
    { title: 'Total Enrollments', value: 45200 },
    { title: 'Active Policies', value: 38400 },
    { title: 'Pending Payment', value: 4200 },
    { title: 'New (This Month)', value: 1850 },
  ],
  trends: {
    monthly: [
      { name: 'Jan', enrollments: 4200, premium: 6300000 },
      { name: 'Feb', enrollments: 4800, premium: 7200000 },
      { name: 'Mar', enrollments: 5100, premium: 7650000 },
      { name: 'Apr', enrollments: 6200, premium: 9300000 },
    ],
    district: [
      { name: 'Patna', value: 12500 },
      { name: 'Gaya', value: 8400 },
      { name: 'Muzaffarpur', value: 7200 },
      { name: 'Bhagalpur', value: 6100 },
    ],
    classBreakdown: [
      { name: 'Class 6', value: 8500 },
      { name: 'Class 7', value: 7800 },
      { name: 'Class 8', value: 9200 },
      { name: 'Class 9', value: 8100 },
      { name: 'Class 10', value: 11600 },
    ]
  },
  tables: {
    districts: [
      { district: 'Patna', blocks: 12, schools: 85, students: 15000, enrollments: 12500, active: 11800, premium: 18750000 },
      { district: 'Gaya', blocks: 10, schools: 72, students: 10500, enrollments: 8400, active: 7900, premium: 12600000 },
    ]
  }
};

export const MOCK_CLAIMS_REPORTS = {
  summary: [
    { title: 'Total Claims', value: 1250 },
    { title: 'Approval Rate', value: '67.2%' },
    { title: 'Avg Review Time', value: '3.2 Days' },
    { title: 'Total Payout', value: 8450000 },
  ],
  trends: {
    status: [
      { name: 'Approved', value: 840 },
      { name: 'Rejected', value: 210 },
      { name: 'Pending', value: 150 },
      { name: 'Query', value: 50 },
    ],
    monthly: [
      { name: 'Jan', approved: 120, rejected: 30 },
      { name: 'Feb', approved: 145, rejected: 25 },
      { name: 'Mar', approved: 180, rejected: 40 },
      { name: 'Apr', approved: 210, rejected: 35 },
    ]
  }
};

export const MOCK_FINANCE_REPORTS = {
  summary: [
    { title: 'Total Collected', value: 57600000 },
    { title: 'Pending Payout', value: 1250000 },
    { title: 'Failed Txns', value: 45 },
    { title: 'Net Liability', value: 3450000 },
  ],
  trends: {
    modes: [
      { name: 'Online (UPI/Card)', value: 65 },
      { name: 'Cash Deposit', value: 25 },
      { name: 'Bank Transfer', value: 10 },
    ]
  }
};

export const MOCK_GEOGRAPHY_REPORTS = {
  districts: [
    { name: 'Patna', enrollmentRate: 83.3, students: 15000, enrollments: 12500, status: 'high' },
    { name: 'Gaya', enrollmentRate: 80.0, students: 10500, enrollments: 8400, status: 'high' },
    { name: 'Muzaffarpur', enrollmentRate: 72.0, students: 10000, enrollments: 7200, status: 'medium' },
    { name: 'Darbhanga', enrollmentRate: 45.0, students: 8000, enrollments: 3600, status: 'low' },
  ]
};
