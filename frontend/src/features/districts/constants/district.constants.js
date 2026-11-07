/**
 * District Constants
 */

export const DISTRICT_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  ARCHIVED: 'archived',
};

export const DISTRICT_PERFORMANCE = {
  HIGH: 'high_performing',
  STABLE: 'stable',
  LOW: 'low_activity',
  ATTENTION: 'needs_attention',
};

export const DISTRICT_PERFORMANCE_LABELS = {
  [DISTRICT_PERFORMANCE.HIGH]: 'High Performing',
  [DISTRICT_PERFORMANCE.STABLE]: 'Stable',
  [DISTRICT_PERFORMANCE.LOW]: 'Low Activity',
  [DISTRICT_PERFORMANCE.ATTENTION]: 'Needs Attention',
};

export const DISTRICT_REGIONS = [
  'Awadh',
  'Braj',
  'Bundelkhand',
  'Purvanchal',
  'Rohilkhand',
];
