export const AUDIT_MODULES = {
  AUTH: 'auth',
  USERS: 'users',
  ROLES: 'roles',
  DISTRICTS: 'districts',
  BLOCKS: 'blocks',
  SCHOOLS: 'schools',
  STUDENTS: 'students',
  ENROLLMENTS: 'enrollments',
  POLICIES: 'policies',
  CLAIMS: 'claims',
  FINANCE: 'finance',
  INCENTIVES: 'incentives',
  REPORTS: 'reports',
  NOTIFICATIONS: 'notifications',
  SETTINGS: 'settings',
  SYSTEM: 'system',
};

export const AUDIT_ACTIONS = {
  CREATED: 'created',
  UPDATED: 'updated',
  DELETED: 'deleted',
  ACTIVATED: 'activated',
  DEACTIVATED: 'deactivated',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  LOGIN: 'login',
  LOGOUT: 'logout',
  LOGIN_FAILED: 'login_failed',
  PASSWORD_CHANGED: 'password_changed',
  PERMISSION_CHANGED: 'permission_changed',
  ROLE_ASSIGNED: 'role_assigned',
  PAYMENT_UPDATED: 'payment_updated',
  CLAIM_REVIEWED: 'claim_reviewed',
  PAYOUT_UPDATED: 'payout_updated',
  EXPORTED: 'exported',
  BULK_ACTION: 'bulk_action',
  SYSTEM_ERROR: 'system_error',
};

export const AUDIT_SEVERITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  CRITICAL: 'critical',
};

export const AUDIT_STATUS = {
  SUCCESS: 'success',
  FAILED: 'failed',
  WARNING: 'warning',
};

export const AUDIT_PERMISSIONS = {
  READ: 'audit_logs.read',
  EXPORT: 'audit_logs.export',
  VIEW_SENSITIVE: 'audit_logs.view_sensitive',
  VIEW_SECURITY: 'audit_logs.view_security',
  VIEW_FINANCE: 'audit_logs.view_finance',
};
