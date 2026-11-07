/**
 * Permission Constants
 * Defines all modules and actions available for role-based access control.
 */

export const PERMISSION_MODULES = {
  DASHBOARD: 'dashboard',
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
  SUPPORT: 'support_tickets',
  AUDIT: 'audit_logs',
  SETTINGS: 'settings',
};

export const PERMISSION_ACTIONS = {
  READ: 'read',
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
  EXPORT: 'export',
  APPROVE: 'approve',
  ASSIGN: 'assign',
  MANAGE: 'manage',
};

/**
 * Permission Catalog
 * Maps modules to their supported actions.
 */
export const PERMISSION_CATALOG = [
  {
    module: PERMISSION_MODULES.DASHBOARD,
    label: 'Dashboard',
    actions: [PERMISSION_ACTIONS.READ],
  },
  {
    module: PERMISSION_MODULES.USERS,
    label: 'User Management',
    actions: [
      PERMISSION_ACTIONS.READ,
      PERMISSION_ACTIONS.CREATE,
      PERMISSION_ACTIONS.UPDATE,
      PERMISSION_ACTIONS.DELETE,
      PERMISSION_ACTIONS.EXPORT,
      PERMISSION_ACTIONS.MANAGE,
    ],
  },
  {
    module: PERMISSION_MODULES.ROLES,
    label: 'Roles & Permissions',
    actions: [
      PERMISSION_ACTIONS.READ,
      PERMISSION_ACTIONS.CREATE,
      PERMISSION_ACTIONS.UPDATE,
      PERMISSION_ACTIONS.ASSIGN,
      PERMISSION_ACTIONS.MANAGE,
    ],
  },
  {
    module: PERMISSION_MODULES.DISTRICTS,
    label: 'Districts',
    actions: [
      PERMISSION_ACTIONS.READ,
      PERMISSION_ACTIONS.CREATE,
      PERMISSION_ACTIONS.UPDATE,
      PERMISSION_ACTIONS.EXPORT,
    ],
  },
  {
    module: PERMISSION_MODULES.BLOCKS,
    label: 'Blocks',
    actions: [
      PERMISSION_ACTIONS.READ,
      PERMISSION_ACTIONS.CREATE,
      PERMISSION_ACTIONS.UPDATE,
      PERMISSION_ACTIONS.EXPORT,
    ],
  },
  {
    module: PERMISSION_MODULES.SCHOOLS,
    label: 'Schools',
    actions: [
      PERMISSION_ACTIONS.READ,
      PERMISSION_ACTIONS.CREATE,
      PERMISSION_ACTIONS.UPDATE,
      PERMISSION_ACTIONS.EXPORT,
    ],
  },
  {
    module: PERMISSION_MODULES.STUDENTS,
    label: 'Students',
    actions: [
      PERMISSION_ACTIONS.READ,
      PERMISSION_ACTIONS.CREATE,
      PERMISSION_ACTIONS.UPDATE,
      PERMISSION_ACTIONS.EXPORT,
    ],
  },
  {
    module: PERMISSION_MODULES.ENROLLMENTS,
    label: 'Enrollments',
    actions: [
      PERMISSION_ACTIONS.READ,
      PERMISSION_ACTIONS.CREATE,
      PERMISSION_ACTIONS.UPDATE,
      PERMISSION_ACTIONS.EXPORT,
      PERMISSION_ACTIONS.APPROVE,
    ],
  },
  {
    module: PERMISSION_MODULES.POLICIES,
    label: 'Policies',
    actions: [
      PERMISSION_ACTIONS.READ,
      PERMISSION_ACTIONS.CREATE,
      PERMISSION_ACTIONS.UPDATE,
      PERMISSION_ACTIONS.EXPORT,
    ],
  },
  {
    module: PERMISSION_MODULES.CLAIMS,
    label: 'Claims',
    actions: [
      PERMISSION_ACTIONS.READ,
      PERMISSION_ACTIONS.CREATE,
      PERMISSION_ACTIONS.UPDATE,
      PERMISSION_ACTIONS.APPROVE,
      PERMISSION_ACTIONS.EXPORT,
    ],
  },
  {
    module: PERMISSION_MODULES.FINANCE,
    label: 'Finance',
    actions: [
      PERMISSION_ACTIONS.READ,
      PERMISSION_ACTIONS.EXPORT,
      PERMISSION_ACTIONS.APPROVE,
      PERMISSION_ACTIONS.MANAGE,
    ],
  },
  {
    module: PERMISSION_MODULES.INCENTIVES,
    label: 'Incentives',
    actions: [
      PERMISSION_ACTIONS.READ,
      PERMISSION_ACTIONS.EXPORT,
      PERMISSION_ACTIONS.APPROVE,
    ],
  },
  {
    module: PERMISSION_MODULES.REPORTS,
    label: 'Reports',
    actions: [PERMISSION_ACTIONS.READ, PERMISSION_ACTIONS.EXPORT],
  },
  {
    module: PERMISSION_MODULES.NOTIFICATIONS,
    label: 'Notifications',
    actions: [
      PERMISSION_ACTIONS.READ,
      PERMISSION_ACTIONS.CREATE,
      PERMISSION_ACTIONS.MANAGE,
    ],
  },
  {
    module: PERMISSION_MODULES.SUPPORT,
    label: 'Support Tickets',
    actions: [
      PERMISSION_ACTIONS.READ,
      PERMISSION_ACTIONS.CREATE,
      PERMISSION_ACTIONS.UPDATE,
      PERMISSION_ACTIONS.APPROVE,
    ],
  },
  {
    module: PERMISSION_MODULES.AUDIT,
    label: 'Audit Logs',
    actions: [PERMISSION_ACTIONS.READ, PERMISSION_ACTIONS.EXPORT],
  },
  {
    module: PERMISSION_MODULES.SETTINGS,
    label: 'Settings',
    actions: [PERMISSION_ACTIONS.READ, PERMISSION_ACTIONS.UPDATE],
  },
];
