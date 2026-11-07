/**
 * Block Constants
 */

export const BLOCK_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  ARCHIVED: 'archived',
};

export const BLOCK_PERFORMANCE = {
  HIGH: 'high_performing',
  STABLE: 'stable',
  LOW: 'low_activity',
  ATTENTION: 'needs_attention',
};

export const BLOCK_PERFORMANCE_LABELS = {
  [BLOCK_PERFORMANCE.HIGH]: 'High Performing',
  [BLOCK_PERFORMANCE.STABLE]: 'Stable',
  [BLOCK_PERFORMANCE.LOW]: 'Low Activity',
  [BLOCK_PERFORMANCE.ATTENTION]: 'Needs Attention',
};

export const BLOCK_STATUS_COLORS = {
  [BLOCK_STATUS.ACTIVE]: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  [BLOCK_STATUS.INACTIVE]: 'text-slate-600 bg-slate-50 border-slate-100',
  [BLOCK_STATUS.ARCHIVED]: 'text-red-600 bg-red-50 border-red-100',
};
