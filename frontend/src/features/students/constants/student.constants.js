export const STUDENT_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  NEEDS_REVIEW: 'needs_review',
  ARCHIVED: 'archived',
};

export const POLICY_STATUS = {
  ACTIVE: 'active',
  PENDING: 'pending',
  EXPIRED: 'expired',
  NOT_ENROLLED: 'not_enrolled',
};

export const CLAIM_STATUS = {
  NONE: 'none',
  HAS_CLAIMS: 'has_claims',
  PENDING: 'pending',
  APPROVED: 'approved',
};

export const STUDENT_CLASS = [
  'Nursery', 'LKG', 'UKG',
  '1', '2', '3', '4', '5',
  '6', '7', '8', '9', '10',
  '11', '12'
];

export const GENDER_OPTIONS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

export const STUDENT_STATUS_COLORS = {
  [STUDENT_STATUS.ACTIVE]: 'text-emerald-700 bg-emerald-50 border-emerald-100',
  [STUDENT_STATUS.INACTIVE]: 'text-slate-600 bg-slate-50 border-slate-100',
  [STUDENT_STATUS.NEEDS_REVIEW]: 'text-amber-700 bg-amber-50 border-amber-100',
  [STUDENT_STATUS.ARCHIVED]: 'text-red-700 bg-red-50 border-red-100',
};

export const POLICY_STATUS_COLORS = {
  [POLICY_STATUS.ACTIVE]: 'text-blue-700 bg-blue-50 border-blue-100',
  [POLICY_STATUS.PENDING]: 'text-amber-700 bg-amber-50 border-amber-100',
  [POLICY_STATUS.EXPIRED]: 'text-red-700 bg-red-50 border-red-100',
  [POLICY_STATUS.NOT_ENROLLED]: 'text-slate-500 bg-slate-50 border-slate-200 border-dashed',
};
