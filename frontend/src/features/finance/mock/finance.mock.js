import { 
  TRANSACTION_STATUS, 
  PAYMENT_MODES, 
  RECEIPT_STATUS, 
  INCENTIVE_STATUS, 
  PAYOUT_STATUS, 
  RECONCILIATION_TYPE, 
  RECONCILIATION_STATUS, 
  RECONCILIATION_SEVERITY 
} from '../constants/finance.constants';

export const MOCK_FINANCE_OVERVIEW = {
  totalPremiumCollected: 12540000,
  thisMonthCollection: 2450000,
  pendingPremiumCollection: 450000,
  failedTransactions: 12,
  receiptsPending: 45,
  totalBMIncentivePayable: 185000,
  totalDMIncentivePayable: 125000,
  incentivesPaid: 450000,
  claimPayoutPending: 850000,
  claimPayoutCompleted: 3200000,
  reconciliationExceptions: 8,
  netOperationalLiability: 1160000,
  trends: {
    premiumCollection: [
      { month: 'Jan', amount: 1200000 },
      { month: 'Feb', amount: 1500000 },
      { month: 'Mar', amount: 1800000 },
      { month: 'Apr', amount: 2450000 },
    ],
    payouts: [
      { month: 'Jan', approved: 800000, paid: 750000 },
      { month: 'Feb', approved: 950000, paid: 900000 },
      { month: 'Mar', approved: 1100000, paid: 1000000 },
      { month: 'Apr', approved: 1500000, paid: 1200000 },
    ],
    paymentModes: [
      { name: 'UPI', value: 45 },
      { name: 'Cash', value: 25 },
      { name: 'Bank Transfer', value: 20 },
      { name: 'Card', value: 10 },
    ],
  }
};

export const MOCK_TRANSACTIONS = Array.from({ length: 50 }, (_, i) => ({
  id: `TXN-${10000 + i}`,
  enrollmentId: `ENR-${5000 + i}`,
  studentName: ['Rahul Sharma', 'Ananya Singh', 'Vikram Patel', 'Sanya Gupta', 'Amit Kumar'][i % 5],
  district: ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur'][i % 4],
  school: ['DAV Public School', 'St. Xavier High School', 'Delhi Public School'][i % 3],
  amount: 1500 + (i * 100),
  paymentMode: Object.values(PAYMENT_MODES)[i % 6],
  status: i % 10 === 0 ? TRANSACTION_STATUS.FAILED : (i % 8 === 0 ? TRANSACTION_STATUS.PENDING : TRANSACTION_STATUS.SUCCESS),
  receiptStatus: i % 12 === 0 ? RECEIPT_STATUS.PENDING : RECEIPT_STATUS.GENERATED,
  paidDate: new Date(2024, 3, 20 - (i % 20)).toISOString(),
  createdDate: new Date(2024, 3, 20 - (i % 20)).toISOString(),
}));

export const MOCK_INCENTIVES = Array.from({ length: 30 }, (_, i) => ({
  id: `INC-${20000 + i}`,
  enrollmentId: `ENR-${5000 + i}`,
  studentName: ['Rahul Sharma', 'Ananya Singh', 'Vikram Patel', 'Sanya Gupta', 'Amit Kumar'][i % 5],
  recipientName: i % 2 === 0 ? `BM ${i+1}` : `DM ${i+1}`,
  recipientRole: i % 2 === 0 ? 'BM' : 'DM',
  district: ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur'][i % 4],
  block: ['Block A', 'Block B', 'Block C'][i % 3],
  amount: i % 2 === 0 ? 150 : 250,
  status: i % 5 === 0 ? INCENTIVE_STATUS.PENDING : (i % 7 === 0 ? INCENTIVE_STATUS.ON_HOLD : INCENTIVE_STATUS.PAID),
  generatedDate: new Date(2024, 3, 15 - (i % 15)).toISOString(),
  paidDate: i % 5 === 0 ? null : new Date(2024, 3, 18 - (i % 15)).toISOString(),
}));

export const MOCK_PAYOUTS = Array.from({ length: 25 }, (_, i) => ({
  id: `PAY-${30000 + i}`,
  claimId: `CLM-${40000 + i}`,
  studentName: ['Rahul Sharma', 'Ananya Singh', 'Vikram Patel', 'Sanya Gupta', 'Amit Kumar'][i % 5],
  hospitalName: ['City Hospital', 'Apollo Clinic', 'General Medical Center'][i % 3],
  district: ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur'][i % 4],
  approvedAmount: 5000 + (i * 2000),
  status: i % 4 === 0 ? PAYOUT_STATUS.PENDING : (i % 6 === 0 ? PAYOUT_STATUS.FAILED : PAYOUT_STATUS.COMPLETED),
  paymentReference: i % 4 === 0 ? null : `REF-${70000 + i}`,
  approvedDate: new Date(2024, 3, 10 - (i % 10)).toISOString(),
  payoutDate: i % 4 === 0 ? null : new Date(2024, 3, 12 - (i % 10)).toISOString(),
}));

export const MOCK_RECONCILIATION = Array.from({ length: 15 }, (_, i) => ({
  id: `REC-${50000 + i}`,
  type: Object.values(RECONCILIATION_TYPE)[i % 6],
  linkedRecord: i % 3 === 0 ? `TXN-${10000 + i}` : (i % 3 === 1 ? `INC-${20000 + i}` : `PAY-${30000 + i}`),
  expectedAmount: 2000 + (i * 100),
  actualAmount: i % 5 === 0 ? 1800 + (i * 100) : 2000 + (i * 100),
  difference: i % 5 === 0 ? 200 : 0,
  severity: i % 7 === 0 ? RECONCILIATION_SEVERITY.CRITICAL : (i % 4 === 0 ? RECONCILIATION_SEVERITY.HIGH : RECONCILIATION_SEVERITY.MEDIUM),
  status: i % 3 === 0 ? RECONCILIATION_STATUS.MISMATCH : (i % 5 === 0 ? RECONCILIATION_STATUS.PENDING : RECONCILIATION_STATUS.RESOLVED),
  detectedDate: new Date(2024, 3, 22 - (i % 5)).toISOString(),
}));

export const MOCK_RECENT_ACTIVITY = [
  { id: 'TXN-10045', type: 'Premium', amount: 1500, status: 'success', linkedRecord: 'ENR-5045', createdDate: new Date().toISOString() },
  { id: 'PAY-30021', type: 'Claim Payout', amount: 12500, status: 'pending', linkedRecord: 'CLM-40021', createdDate: new Date().toISOString() },
  { id: 'INC-20015', type: 'Incentive', amount: 150, status: 'paid', linkedRecord: 'ENR-5015', createdDate: new Date().toISOString() },
  { id: 'REC-50008', type: 'Reconciliation', amount: 200, status: 'mismatch', linkedRecord: 'TXN-10008', createdDate: new Date().toISOString() },
  { id: 'TXN-10046', type: 'Premium', amount: 2500, status: 'failed', linkedRecord: 'ENR-5046', createdDate: new Date().toISOString() },
];
