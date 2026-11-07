import { INCENTIVE_STATUS, RECIPIENT_ROLE } from '../constants/incentive.constants';

export const MOCK_INCENTIVES_OVERVIEW = {
  totalGenerated: 1450000,
  bmIncentiveGenerated: 950000,
  dmIncentiveGenerated: 500000,
  payableIncentives: 250000,
  paidIncentives: 1150000,
  onHoldIncentives: 35000,
  reversedIncentives: 15000,
  thisMonthIncentives: 185000,
  topBmEarnings: 12500,
  topDmEarnings: 24000,
  pendingPayoutCount: 450,
  disputedCount: 12,
  trends: {
    generation: [
      { month: 'Jan', bm: 180000, dm: 90000 },
      { month: 'Feb', bm: 210000, dm: 110000 },
      { month: 'Mar', bm: 240000, dm: 120000 },
      { month: 'Apr', bm: 320000, dm: 180000 },
    ],
    statusDistribution: [
      { name: 'Paid', value: 75 },
      { name: 'Payable', value: 15 },
      { name: 'On Hold', value: 7 },
      { name: 'Reversed', value: 3 },
    ],
    districtBreakdown: [
      { district: 'Patna', amount: 450000 },
      { district: 'Gaya', amount: 320000 },
      { district: 'Muzaffarpur', amount: 280000 },
      { district: 'Bhagalpur', amount: 210000 },
      { district: 'Darbhanga', amount: 190000 },
    ]
  }
};

export const MOCK_INCENTIVE_RECORDS = Array.from({ length: 50 }, (_, i) => ({
  id: `INC-${30000 + i}`,
  enrollmentId: `ENR-${5000 + i}`,
  studentName: ['Rahul Sharma', 'Ananya Singh', 'Vikram Patel', 'Sanya Gupta', 'Amit Kumar'][i % 5],
  recipientName: i % 2 === 0 ? `BM ${i+1}` : `DM ${i+1}`,
  recipientRole: i % 2 === 0 ? RECIPIENT_ROLE.BM : RECIPIENT_ROLE.DM,
  district: ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur'][i % 4],
  block: ['Block A', 'Block B', 'Block C'][i % 3],
  school: ['School X', 'School Y', 'School Z'][i % 3],
  amount: i % 2 === 0 ? 5 : 2,
  status: Object.values(INCENTIVE_STATUS)[i % 8],
  generatedDate: new Date(2024, 3, 25 - (i % 20)).toISOString(),
  paidDate: i % 3 === 0 ? new Date(2024, 3, 27 - (i % 20)).toISOString() : null,
  flags: i % 10 === 0 ? ['duplicate_risk'] : (i % 15 === 0 ? ['payment_pending'] : []),
}));

export const MOCK_INCENTIVE_RULES = [
  {
    id: 'RULE-001',
    name: 'Block Manager Standard',
    roleType: RECIPIENT_ROLE.BM,
    amount: 5,
    calculationType: 'fixed',
    triggerEvent: 'Successful Paid Enrollment',
    payableCondition: 'Premium reconciliation completed',
    reversalCondition: 'Enrollment cancelled or refunded',
    effectiveFrom: '2024-01-01',
    status: 'active',
  },
  {
    id: 'RULE-002',
    name: 'District Manager Standard',
    roleType: RECIPIENT_ROLE.DM,
    amount: 2,
    calculationType: 'fixed',
    triggerEvent: 'Successful Paid Enrollment in assigned district',
    payableCondition: 'Premium reconciliation completed',
    reversalCondition: 'Enrollment cancelled or refunded',
    effectiveFrom: '2024-01-01',
    status: 'active',
  }
];

export const MOCK_PERFORMANCE_RANKINGS = {
  bm: Array.from({ length: 10 }, (_, i) => ({
    name: `BM ${i+1}`,
    district: 'Patna',
    block: `Block ${String.fromCharCode(65 + i)}`,
    enrollments: 450 - (i * 25),
    incentiveEarned: (450 - (i * 25)) * 5,
    paidAmount: (450 - (i * 25)) * 4,
    pendingAmount: (450 - (i * 25)) * 1,
    status: 'active',
  })),
  dm: Array.from({ length: 5 }, (_, i) => ({
    name: `DM ${i+1}`,
    district: ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Darbhanga'][i],
    totalBmNetwork: 12 - i,
    networkEnrollments: 2500 - (i * 300),
    incentiveEarned: (2500 - (i * 300)) * 2,
    paidAmount: (2500 - (i * 300)) * 1.8,
    pendingAmount: (2500 - (i * 300)) * 0.2,
    status: 'active',
  }))
};
