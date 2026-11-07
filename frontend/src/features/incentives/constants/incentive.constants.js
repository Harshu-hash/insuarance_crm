export const INCENTIVE_STATUS = {
  GENERATED: 'generated',
  PAYABLE: 'payable',
  PENDING: 'pending',
  PAID: 'paid',
  ON_HOLD: 'on_hold',
  REVERSED: 'reversed',
  CANCELLED: 'cancelled',
  DISPUTED: 'disputed',
};

export const RECIPIENT_ROLE = {
  BM: 'BM',
  DM: 'DM',
};

export const CALCULATION_TYPE = {
  FIXED: 'fixed',
  PERCENTAGE: 'percentage',
};

export const INCENTIVE_RULES = {
  BM_DEFAULT: 5, // ₹5 per enrollment
  DM_DEFAULT: 2, // ₹2 per enrollment
};
