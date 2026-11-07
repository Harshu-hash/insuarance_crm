export const MOCK_SUMMARY = {
  studentsTotal: 12543,
  activePolicies: 10234,
  pendingEnrollments: 456,
  claimsSubmitted: 184,
  claimsApproved: 124,
  claimsRejected: 18,
  premiumCollected: 5121500,
  pendingPayoutAmount: 425000,
  bmIncentivePayable: 62715,
  dmIncentivePayable: 25086,
  districtsActive: 12,
  schoolsActive: 452,
};

export const MOCK_CHARTS = {
  enrollmentTrend: [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 900 },
  ],
  premiumTrend: [
    { name: 'Jan', value: 200000 },
    { name: 'Feb', value: 150000 },
    { name: 'Mar', value: 300000 },
    { name: 'Apr', value: 400000 },
    { name: 'May', value: 250000 },
    { name: 'Jun', value: 450000 },
  ],
  claimsDistribution: [
    { name: 'Approved', value: 124 },
    { name: 'Pending', value: 42 },
    { name: 'Rejected', value: 18 },
  ],
  districtComparison: [
    { name: 'Lucknow', enrollments: 2500 },
    { name: 'Kanpur', enrollments: 2100 },
    { name: 'Varanasi', enrollments: 1800 },
    { name: 'Agra', enrollments: 1500 },
    { name: 'Meerut', enrollments: 1200 },
  ]
};

export const MOCK_ALERTS = [
  { id: 1, type: 'danger', message: '12 claims pending review for > 7 days', module: 'Claims' },
  { id: 2, type: 'warning', message: 'Reconciliation failed for 5 transactions today', module: 'Finance' },
  { id: 3, type: 'info', message: '3 new districts showing zero enrollment this week', module: 'Districts' },
];

export const MOCK_ACTIVITIES = {
  recentEnrollments: [
    { id: 'E-1001', name: 'Rahul Gupta', district: 'Lucknow', amount: 500, date: '2026-04-19' },
    { id: 'E-1002', name: 'Sita Ram', district: 'Kanpur', amount: 500, date: '2026-04-19' },
    { id: 'E-1003', name: 'Anjali Singh', district: 'Agra', amount: 500, date: '2026-04-18' },
    { id: 'E-1004', name: 'Amit Kumar', district: 'Varanasi', amount: 500, date: '2026-04-18' },
    { id: 'E-1005', name: 'Priya Verma', district: 'Meerut', amount: 500, date: '2026-04-17' },
  ],
  recentClaims: [
    { id: 'C-2001', name: 'Vikram Sahay', amount: 15000, status: 'Pending', date: '2026-04-19' },
    { id: 'C-2002', name: 'Meena Devi', amount: 8500, status: 'Approved', date: '2026-04-18' },
    { id: 'C-2003', name: 'Sohan Lal', amount: 12000, status: 'Rejected', date: '2026-04-17' },
  ]
};
