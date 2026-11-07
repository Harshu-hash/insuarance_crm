export const NOTIFICATION_STATUS = {
  DRAFT: 'draft',
  SCHEDULED: 'scheduled',
  QUEUED: 'queued',
  SENDING: 'sending',
  SENT: 'sent',
  PARTIALLY_FAILED: 'partially_failed',
  FAILED: 'failed',
  CANCELLED: 'cancelled',
};

export const NOTIFICATION_CHANNELS = {
  PUSH: 'push',
  SMS: 'sms',
  EMAIL: 'email',
  IN_APP: 'in_app',
};

export const NOTIFICATION_TYPES = {
  GENERAL_ANNOUNCEMENT: 'general_announcement',
  ENROLLMENT_UPDATE: 'enrollment_update',
  PAYMENT_REMINDER: 'payment_reminder',
  CLAIM_UPDATE: 'claim_update',
  DOCUMENT_REQUIRED: 'document_required',
  POLICY_RENEWAL: 'policy_renewal',
  PAYOUT_ALERT: 'payout_alert',
  DISTRICT_NOTICE: 'district_notice',
  SCHOOL_NOTICE: 'school_notice',
  SYSTEM_ALERT: 'system_alert',
};

export const NOTIFICATION_PRIORITY = {
  LOW: 'low',
  NORMAL: 'normal',
  HIGH: 'high',
  URGENT: 'urgent',
};

export const AUDIENCE_TYPES = {
  ALL_USERS: 'all_users',
  SUPER_ADMINS: 'super_admins',
  FINANCE_USERS: 'finance_users',
  DISTRICT_MANAGERS: 'district_managers',
  BLOCK_MANAGERS: 'block_managers',
  SCHOOL_CONTACTS: 'school_contacts',
  PARENTS_CONSUMERS: 'parents_consumers',
  SPECIFIC_DISTRICT: 'specific_district',
  SPECIFIC_BLOCK: 'specific_block',
  SPECIFIC_SCHOOL: 'specific_school',
  CUSTOM_SEGMENT: 'custom_segment',
};
