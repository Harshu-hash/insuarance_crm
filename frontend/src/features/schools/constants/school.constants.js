/**
 * School Constants
 */

export const SCHOOL_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  ARCHIVED: 'archived',
};

export const SCHOOL_TYPE = {
  GOVERNMENT: 'government',
  PRIVATE: 'private',
  AIDED: 'aided',
  RESIDENTIAL: 'residential',
  OTHER: 'other',
};

export const SCHOOL_TYPE_LABELS = {
  [SCHOOL_TYPE.GOVERNMENT]: 'Government',
  [SCHOOL_TYPE.PRIVATE]: 'Private',
  [SCHOOL_TYPE.AIDED]: 'Aided',
  [SCHOOL_TYPE.RESIDENTIAL]: 'Residential',
  [SCHOOL_TYPE.OTHER]: 'Other',
};

export const SCHOOL_PERFORMANCE = {
  HIGH: 'high_activity',
  STABLE: 'stable',
  LOW: 'low_activity',
  NONE: 'no_enrollments',
  ATTENTION: 'needs_attention',
};

export const SCHOOL_PERFORMANCE_LABELS = {
  [SCHOOL_PERFORMANCE.HIGH]: 'High Activity',
  [SCHOOL_PERFORMANCE.STABLE]: 'Stable',
  [SCHOOL_PERFORMANCE.LOW]: 'Low Activity',
  [SCHOOL_PERFORMANCE.NONE]: 'No Enrollments',
  [SCHOOL_PERFORMANCE.ATTENTION]: 'Needs Attention',
};

export const SCHOOL_STATUS_COLORS = {
  [SCHOOL_STATUS.ACTIVE]: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  [SCHOOL_STATUS.INACTIVE]: 'text-slate-600 bg-slate-50 border-slate-100',
  [SCHOOL_STATUS.ARCHIVED]: 'text-red-600 bg-red-50 border-red-100',
};

export const SCHOOL_TYPE_COLORS = {
  [SCHOOL_TYPE.GOVERNMENT]: 'text-blue-600 bg-blue-50 border-blue-100',
  [SCHOOL_TYPE.PRIVATE]: 'text-indigo-600 bg-indigo-50 border-indigo-100',
  [SCHOOL_TYPE.AIDED]: 'text-amber-600 bg-amber-50 border-amber-100',
  [SCHOOL_TYPE.RESIDENTIAL]: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  [SCHOOL_TYPE.OTHER]: 'text-slate-600 bg-slate-50 border-slate-100',
};
