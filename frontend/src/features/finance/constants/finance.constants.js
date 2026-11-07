export const TRANSACTION_STATUS = {
  SUCCESS: 'success',
  PENDING: 'pending',
  FAILED: 'failed',
  REFUNDED: 'refunded',
  CANCELLED: 'cancelled',
};

export const PAYMENT_MODES = {
  CASH: 'cash',
  UPI: 'UPI',
  BANK_TRANSFER: 'bank_transfer',
  CARD: 'card',
  ONLINE: 'online',
  OTHER: 'other',
};

export const RECEIPT_STATUS = {
  GENERATED: 'generated',
  PENDING: 'pending',
  FAILED: 'failed',
};

export const INCENTIVE_STATUS = {
  GENERATED: 'generated',
  PAYABLE: 'payable',
  PENDING: 'pending',
  PAID: 'paid',
  ON_HOLD: 'on_hold',
  REVERSED: 'reversed',
  CANCELLED: 'cancelled',
};

export const PAYOUT_STATUS = {
  NOT_INITIATED: 'not_initiated',
  PENDING: 'pending',
  PROCESSING: 'processing',
  COMPLETED: 'completed',
  FAILED: 'failed',
  CANCELLED: 'cancelled',
};

export const RECONCILIATION_TYPE = {
  PREMIUM: 'premium_transaction',
  RECEIPT: 'receipt',
  BM_INCENTIVE: 'BM_incentive',
  DM_INCENTIVE: 'DM_incentive',
  CLAIM_PAYOUT: 'claim_payout',
  REFUND: 'refund',
};

export const RECONCILIATION_STATUS = {
  MATCHED: 'matched',
  MISMATCH: 'mismatch',
  PENDING: 'pending_verification',
  RESOLVED: 'resolved',
  IGNORED: 'ignored',
};

export const RECONCILIATION_SEVERITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  CRITICAL: 'critical',
};
