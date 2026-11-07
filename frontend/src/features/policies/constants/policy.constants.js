export const POLICY_STATUS = {
  DRAFT: 'draft',
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  EXPIRED: 'expired',
  ARCHIVED: 'archived',
};

export const POLICY_TYPE = {
  ACCIDENTAL_MEDICAL: 'accidental_medical',
  STUDENT_ACCIDENT: 'student_accident',
  HEALTH_SUPPORT: 'health_support',
  CUSTOM: 'custom',
};

export const POLICY_STATUS_COLORS = {
  [POLICY_STATUS.DRAFT]: 'neutral',
  [POLICY_STATUS.ACTIVE]: 'success',
  [POLICY_STATUS.INACTIVE]: 'warning',
  [POLICY_STATUS.EXPIRED]: 'error',
  [POLICY_STATUS.ARCHIVED]: 'neutral',
};

export const POLICY_TYPE_LABELS = {
  [POLICY_TYPE.ACCIDENTAL_MEDICAL]: 'Accidental Medical Coverage',
  [POLICY_TYPE.STUDENT_ACCIDENT]: 'Student Accident Insurance',
  [POLICY_TYPE.HEALTH_SUPPORT]: 'Health Support Plan',
  [POLICY_TYPE.CUSTOM]: 'Custom Policy',
};

export const ELIGIBLE_CLASSES = [
  'Nursery', 'LKG', 'UKG', 
  '1st', '2nd', '3rd', '4th', '5th', 
  '6th', '7th', '8th', '9th', '10th', 
  '11th', '12th'
];
