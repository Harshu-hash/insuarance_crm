export const USER_ROLES = {
  SUPER_ADMIN: 'SuperAdmin',
  FINANCE: 'Finance',
  MANAGER: 'Manager',
  DISTRICT_MANAGER: 'DistrictManager',
  BLOCK_MANAGER: 'BlockManager',
  SUPPORT: 'Support',
  CLAIMS_REVIEWER: 'ClaimsReviewer',
};

export const USER_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  SUSPENDED: 'suspended',
};

export const APPROVAL_STATUS = {
  APPROVED: 'approved',
  PENDING: 'pending',
  REJECTED: 'rejected',
};

export const ROLE_LABELS = {
  [USER_ROLES.SUPER_ADMIN]: 'Super Admin',
  [USER_ROLES.FINANCE]: 'Finance User',
  [USER_ROLES.MANAGER]: 'Regional Manager',
  [USER_ROLES.DISTRICT_MANAGER]: 'District Manager',
  [USER_ROLES.BLOCK_MANAGER]: 'Block Manager',
  [USER_ROLES.SUPPORT]: 'Support Executive',
  [USER_ROLES.CLAIMS_REVIEWER]: 'Claims Reviewer',
};
