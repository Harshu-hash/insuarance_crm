import { 
  ENROLLMENT_STATUS, 
  PAYMENT_STATUS, 
  POLICY_ACTIVATION_STATUS, 
  ENROLLMENT_SOURCE 
} from '../constants/enrollment.constants';

export const MOCK_ENROLLMENTS = [
  {
    id: 'ENR-2025-0001',
    studentId: 'STU-1001',
    studentName: 'Rahul Sharma',
    guardianMobile: '9876543210',
    class: '10th',
    school: 'Adarsh High School',
    block: 'Block A',
    district: 'District 1',
    policyYear: '2025-2026',
    policyCode: 'POL-STD-01',
    policyName: 'Standard Student Protection',
    premiumAmount: 500,
    paymentStatus: PAYMENT_STATUS.PAID,
    paymentMode: 'UPI',
    paymentDate: '2025-04-15',
    policyStatus: POLICY_ACTIVATION_STATUS.ACTIVE,
    bmName: 'John Doe',
    bmIncentive: 5,
    dmName: 'Jane Smith',
    dmIncentive: 2,
    receiptStatus: 'generated',
    receiptNumber: 'REC-2025-0001',
    claimEligibility: 'active',
    source: ENROLLMENT_SOURCE.BM_APP,
    flags: [],
    createdDate: '2025-04-10',
    updatedDate: '2025-04-15',
    notes: 'Standard enrollment via BM App.',
    timeline: [
      { status: 'Enrollment Created', date: '2025-04-10', icon: 'plus' },
      { status: 'Payment Received', date: '2025-04-15', icon: 'credit-card' },
      { status: 'Policy Activated', date: '2025-04-15', icon: 'check-circle' },
      { status: 'Incentive Generated', date: '2025-04-15', icon: 'gift' }
    ]
  },
  {
    id: 'ENR-2025-0002',
    studentId: 'STU-1002',
    studentName: 'Priya Verma',
    guardianMobile: '9876543211',
    class: '9th',
    school: 'Government Secondary School',
    block: 'Block B',
    district: 'District 1',
    policyYear: '2025-2026',
    policyCode: 'POL-STD-01',
    policyName: 'Standard Student Protection',
    premiumAmount: 500,
    paymentStatus: PAYMENT_STATUS.PENDING,
    paymentMode: null,
    paymentDate: null,
    policyStatus: POLICY_ACTIVATION_STATUS.PENDING,
    bmName: 'John Doe',
    bmIncentive: 5,
    dmName: 'Jane Smith',
    dmIncentive: 2,
    receiptStatus: 'pending',
    receiptNumber: null,
    claimEligibility: 'not_active',
    source: ENROLLMENT_SOURCE.ADMIN,
    flags: ['Payment Pending', 'Policy Not Activated'],
    createdDate: '2025-04-20',
    updatedDate: '2025-04-20',
    notes: 'Awaiting payment from guardian.',
    timeline: [
      { status: 'Enrollment Created', date: '2025-04-20', icon: 'plus' }
    ]
  },
  {
    id: 'ENR-2025-0003',
    studentId: 'STU-1003',
    studentName: 'Amit Patel',
    guardianMobile: '9876543212',
    class: '8th',
    school: 'Modern Academy',
    block: 'Block C',
    district: 'District 2',
    policyYear: '2025-2026',
    policyCode: 'POL-STD-01',
    policyName: 'Standard Student Protection',
    premiumAmount: 500,
    paymentStatus: PAYMENT_STATUS.FAILED,
    paymentMode: 'Net Banking',
    paymentDate: '2025-04-22',
    policyStatus: POLICY_ACTIVATION_STATUS.NOT_ACTIVATED,
    bmName: 'Robert Brown',
    bmIncentive: 5,
    dmName: 'Jane Smith',
    dmIncentive: 2,
    receiptStatus: 'failed',
    receiptNumber: null,
    claimEligibility: 'not_active',
    source: ENROLLMENT_SOURCE.DISTRICT_PORTAL,
    flags: ['Payment Failed', 'Duplicate Risk'],
    createdDate: '2025-04-21',
    updatedDate: '2025-04-22',
    notes: 'Transaction failed at gateway. Duplicate risk detected for same student ID.',
    timeline: [
      { status: 'Enrollment Created', date: '2025-04-21', icon: 'plus' },
      { status: 'Payment Failed', date: '2025-04-22', icon: 'alert-circle' }
    ]
  }
];

export const MOCK_ENROLLMENT_SUMMARY = {
  totalEnrollments: 1250,
  activePolicies: 980,
  pendingEnrollments: 150,
  paidPremiums: 1100,
  pendingPayments: 100,
  cancelledEnrollments: 20,
  bmIncentiveGenerated: 6250, // 1250 * 5
  dmIncentiveGenerated: 2500, // 1250 * 2
  duplicateRiskRecords: 15,
  recentlyAdded: 45
};
