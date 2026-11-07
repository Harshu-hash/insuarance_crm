import { USER_ROLES, USER_STATUS, APPROVAL_STATUS } from '../constants/user.constants';

export const MOCK_USERS = [
  {
    id: 'U-001',
    fullName: 'Arjun Pandey',
    email: 'arjun.pandey@insurance.gov.in',
    mobile: '9876543210',
    role: USER_ROLES.SUPER_ADMIN,
    status: USER_STATUS.ACTIVE,
    approvalStatus: APPROVAL_STATUS.APPROVED,
    createdAt: '2026-01-15T10:00:00Z',
    lastLogin: '2026-04-19T14:30:00Z',
  },
  {
    id: 'U-002',
    fullName: 'Priya Sharma',
    email: 'priya.finance@insurance.gov.in',
    mobile: '9123456789',
    role: USER_ROLES.FINANCE,
    status: USER_STATUS.ACTIVE,
    approvalStatus: APPROVAL_STATUS.APPROVED,
    createdAt: '2026-02-10T11:00:00Z',
    lastLogin: '2026-04-18T09:15:00Z',
  },
  {
    id: 'U-003',
    fullName: 'Rajesh Kumar',
    email: 'rajesh.lucknow@dm.gov.in',
    mobile: '8877665544',
    role: USER_ROLES.DISTRICT_MANAGER,
    district: 'Lucknow',
    status: USER_STATUS.ACTIVE,
    approvalStatus: APPROVAL_STATUS.APPROVED,
    createdAt: '2026-03-01T09:30:00Z',
    lastLogin: '2026-04-19T10:00:00Z',
  },
  {
    id: 'U-004',
    fullName: 'Sunita Devi',
    email: 'sunita.kanpur@bm.gov.in',
    mobile: '7766554433',
    role: USER_ROLES.BLOCK_MANAGER,
    district: 'Kanpur',
    block: 'Kalyanpur',
    status: USER_STATUS.ACTIVE,
    approvalStatus: APPROVAL_STATUS.PENDING,
    createdAt: '2026-04-15T14:20:00Z',
    lastLogin: null,
  },
  {
    id: 'U-005',
    fullName: 'Vikram Singh',
    email: 'vikram.support@insurance.gov.in',
    mobile: '9988776655',
    role: USER_ROLES.SUPPORT,
    status: USER_STATUS.INACTIVE,
    approvalStatus: APPROVAL_STATUS.APPROVED,
    createdAt: '2026-01-20T16:45:00Z',
    lastLogin: '2026-04-10T11:30:00Z',
  },
  {
    id: 'U-006',
    fullName: 'Meena Reddy',
    email: 'meena.claims@insurance.gov.in',
    mobile: '8899001122',
    role: USER_ROLES.CLAIMS_REVIEWER,
    status: USER_STATUS.ACTIVE,
    approvalStatus: APPROVAL_STATUS.APPROVED,
    createdAt: '2026-02-28T10:20:00Z',
    lastLogin: '2026-04-18T16:00:00Z',
  }
];

export const MOCK_DISTRICTS = ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Meerut'];
export const MOCK_BLOCKS = {
  'Lucknow': ['Bakshi Ka Talab', 'Chinhat', 'Kakori', 'Sarojini Nagar'],
  'Kanpur': ['Bilhaur', 'Kalyanpur', 'Sarsaul', 'Ghatampur'],
};
