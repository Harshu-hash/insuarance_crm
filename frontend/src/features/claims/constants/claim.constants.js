export const CLAIM_STATUS = {
  SUBMITTED: 'submitted',
  PENDING_REVIEW: 'pending_review',
  UNDER_REVIEW: 'under_review',
  QUERY_RAISED: 'query_raised',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  CLOSED: 'closed',
  CANCELLED: 'cancelled',
};

export const PAYOUT_STATUS = {
  NOT_INITIATED: 'not_initiated',
  PAYOUT_PENDING: 'payout_pending',
  PAYOUT_PROCESSING: 'payout_processing',
  PAYOUT_COMPLETED: 'payout_completed',
  PAYOUT_FAILED: 'payout_failed',
};

export const CLAIM_PRIORITY = {
  NORMAL: 'normal',
  URGENT: 'urgent',
  OVERDUE: 'overdue',
  DOCUMENT_PENDING: 'document_pending',
};

export const CLAIM_STATUS_COLORS = {
  [CLAIM_STATUS.SUBMITTED]: 'neutral',
  [CLAIM_STATUS.PENDING_REVIEW]: 'neutral',
  [CLAIM_STATUS.UNDER_REVIEW]: 'info',
  [CLAIM_STATUS.QUERY_RAISED]: 'warning',
  [CLAIM_STATUS.APPROVED]: 'success',
  [CLAIM_STATUS.REJECTED]: 'error',
  [CLAIM_STATUS.CLOSED]: 'neutral',
  [CLAIM_STATUS.CANCELLED]: 'neutral',
};

export const PAYOUT_STATUS_COLORS = {
  [PAYOUT_STATUS.NOT_INITIATED]: 'neutral',
  [PAYOUT_STATUS.PAYOUT_PENDING]: 'warning',
  [PAYOUT_STATUS.PAYOUT_PROCESSING]: 'info',
  [PAYOUT_STATUS.PAYOUT_COMPLETED]: 'success',
  [PAYOUT_STATUS.PAYOUT_FAILED]: 'error',
};

export const PRIORITY_COLORS = {
  [CLAIM_PRIORITY.NORMAL]: 'neutral',
  [CLAIM_PRIORITY.URGENT]: 'warning',
  [CLAIM_PRIORITY.OVERDUE]: 'error',
  [CLAIM_PRIORITY.DOCUMENT_PENDING]: 'info',
};
