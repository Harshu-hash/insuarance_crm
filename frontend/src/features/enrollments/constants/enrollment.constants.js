export const ENROLLMENT_STATUS = {
  ACTIVE: 'active',
  PENDING: 'pending',
  CANCELLED: 'cancelled',
  EXPIRED: 'expired',
  NEEDS_REVIEW: 'needs_review',
};

export const PAYMENT_STATUS = {
  PAID: 'paid',
  PENDING: 'pending',
  FAILED: 'failed',
  REFUNDED: 'refunded',
  WAIVED: 'waived',
};

export const POLICY_ACTIVATION_STATUS = {
  ACTIVE: 'active',
  PENDING: 'pending_activation',
  EXPIRED: 'expired',
  CANCELLED: 'cancelled',
  NOT_ACTIVATED: 'not_activated',
};

export const ENROLLMENT_SOURCE = {
  ADMIN: 'admin',
  BM_APP: 'bm_app',
  DISTRICT_PORTAL: 'district_portal',
  BULK_IMPORT: 'bulk_import',
};

export const STATUS_COLORS = {
  [ENROLLMENT_STATUS.ACTIVE]: 'success',
  [ENROLLMENT_STATUS.PENDING]: 'warning',
  [ENROLLMENT_STATUS.CANCELLED]: 'error',
  [ENROLLMENT_STATUS.EXPIRED]: 'neutral',
  [ENROLLMENT_STATUS.NEEDS_REVIEW]: 'error',
};

export const PAYMENT_STATUS_COLORS = {
  [PAYMENT_STATUS.PAID]: 'success',
  [PAYMENT_STATUS.PENDING]: 'warning',
  [PAYMENT_STATUS.FAILED]: 'error',
  [PAYMENT_STATUS.REFUNDED]: 'neutral',
  [PAYMENT_STATUS.WAIVED]: 'info',
};

export const POLICY_STATUS_COLORS = {
  [POLICY_ACTIVATION_STATUS.ACTIVE]: 'success',
  [POLICY_ACTIVATION_STATUS.PENDING]: 'warning',
  [POLICY_ACTIVATION_STATUS.EXPIRED]: 'neutral',
  [POLICY_ACTIVATION_STATUS.CANCELLED]: 'error',
  [POLICY_ACTIVATION_STATUS.NOT_ACTIVATED]: 'error',
};
