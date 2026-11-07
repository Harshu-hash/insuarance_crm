import { AUDIT_MODULES, AUDIT_ACTIONS, AUDIT_SEVERITY, AUDIT_STATUS } from '../constants/audit.constants';

const mockLogs = [
  {
    id: 'AUD-001',
    timestamp: '2026-04-26T10:30:00Z',
    actor: {
      id: 'USR-001',
      name: 'Super Admin',
      email: 'admin@insurancecrm.com',
      role: 'Super Admin',
    },
    module: AUDIT_MODULES.AUTH,
    action: AUDIT_ACTIONS.LOGIN,
    target: {
      module: AUDIT_MODULES.AUTH,
      id: 'USR-001',
      label: 'Super Admin Login',
    },
    severity: AUDIT_SEVERITY.LOW,
    status: AUDIT_STATUS.SUCCESS,
    ip: '192.168.1.1',
    metadata: {
      device: 'Chrome / Windows 11',
      location: 'Mumbai, India',
      requestId: 'req-abc-123',
    },
    changes: [],
    isSecuritySensitive: true,
    isFinanceSensitive: false,
  },
  {
    id: 'AUD-002',
    timestamp: '2026-04-26T10:45:00Z',
    actor: {
      id: 'USR-002',
      name: 'District Manager',
      email: 'dm.mumbai@insurancecrm.com',
      role: 'District Manager',
    },
    module: AUDIT_MODULES.AUTH,
    action: AUDIT_ACTIONS.LOGIN_FAILED,
    target: {
      module: AUDIT_MODULES.AUTH,
      id: 'USR-002',
      label: 'Failed Login Attempt',
    },
    severity: AUDIT_SEVERITY.MEDIUM,
    status: AUDIT_STATUS.FAILED,
    ip: '192.168.1.5',
    metadata: {
      device: 'Firefox / MacOS',
      location: 'Pune, India',
      requestId: 'req-def-456',
    },
    changes: [],
    isSecuritySensitive: true,
    isFinanceSensitive: false,
  },
  {
    id: 'AUD-003',
    timestamp: '2026-04-26T11:00:00Z',
    actor: {
      id: 'USR-001',
      name: 'Super Admin',
      email: 'admin@insurancecrm.com',
      role: 'Super Admin',
    },
    module: AUDIT_MODULES.USERS,
    action: AUDIT_ACTIONS.CREATED,
    target: {
      module: AUDIT_MODULES.USERS,
      id: 'USR-010',
      label: 'Harsh Kumar',
    },
    severity: AUDIT_SEVERITY.LOW,
    status: AUDIT_STATUS.SUCCESS,
    ip: '192.168.1.1',
    metadata: {
      requestId: 'req-ghi-789',
    },
    changes: [
      { field: 'name', before: null, after: 'Harsh Kumar' },
      { field: 'role', before: null, after: 'School Coordinator' },
      { field: 'status', before: null, after: 'active' },
    ],
    isSecuritySensitive: false,
    isFinanceSensitive: false,
  },
  {
    id: 'AUD-004',
    timestamp: '2026-04-26T11:15:00Z',
    actor: {
      id: 'USR-001',
      name: 'Super Admin',
      email: 'admin@insurancecrm.com',
      role: 'Super Admin',
    },
    module: AUDIT_MODULES.ROLES,
    action: AUDIT_ACTIONS.PERMISSION_CHANGED,
    target: {
      module: AUDIT_MODULES.ROLES,
      id: 'ROLE-002',
      label: 'District Manager',
    },
    severity: AUDIT_SEVERITY.HIGH,
    status: AUDIT_STATUS.SUCCESS,
    ip: '192.168.1.1',
    metadata: {
      requestId: 'req-jkl-012',
    },
    changes: [
      { field: 'permissions', before: 'claims.read, claims.create', after: 'claims.read, claims.create, claims.approve' },
    ],
    isSecuritySensitive: true,
    isFinanceSensitive: false,
  },
  {
    id: 'AUD-005',
    timestamp: '2026-04-26T11:30:00Z',
    actor: {
      id: 'USR-001',
      name: 'Super Admin',
      email: 'admin@insurancecrm.com',
      role: 'Super Admin',
    },
    module: AUDIT_MODULES.CLAIMS,
    action: AUDIT_ACTIONS.APPROVED,
    target: {
      module: AUDIT_MODULES.CLAIMS,
      id: 'CLM-5001',
      label: 'Policyholder John Doe - Medical Claim',
    },
    severity: AUDIT_SEVERITY.MEDIUM,
    status: AUDIT_STATUS.SUCCESS,
    ip: '192.168.1.1',
    metadata: {
      requestId: 'req-mno-345',
    },
    changes: [
      { field: 'status', before: 'pending_review', after: 'approved' },
      { field: 'approvedAt', before: null, after: '2026-04-26T11:30:00Z' },
    ],
    isSecuritySensitive: false,
    isFinanceSensitive: true,
  },
  {
    id: 'AUD-006',
    timestamp: '2026-04-26T11:45:00Z',
    actor: {
      id: 'USR-003',
      name: 'Finance Manager',
      email: 'finance@insurancecrm.com',
      role: 'Finance Manager',
    },
    module: AUDIT_MODULES.FINANCE,
    action: AUDIT_ACTIONS.PAYMENT_UPDATED,
    target: {
      module: AUDIT_MODULES.FINANCE,
      id: 'PAY-1002',
      label: 'Payout for CLM-5001',
    },
    severity: AUDIT_SEVERITY.HIGH,
    status: AUDIT_STATUS.SUCCESS,
    ip: '192.168.1.10',
    metadata: {
      requestId: 'req-pqr-678',
    },
    changes: [
      { field: 'paymentStatus', before: 'pending', after: 'disbursed' },
      { field: 'transactionId', before: null, after: 'TXN-998877' },
    ],
    isSecuritySensitive: false,
    isFinanceSensitive: true,
  },
  {
    id: 'AUD-007',
    timestamp: '2026-04-26T12:00:00Z',
    actor: {
      id: 'USR-001',
      name: 'Super Admin',
      email: 'admin@insurancecrm.com',
      role: 'Super Admin',
    },
    module: AUDIT_MODULES.REPORTS,
    action: AUDIT_ACTIONS.EXPORTED,
    target: {
      module: AUDIT_MODULES.REPORTS,
      id: 'REP-001',
      label: 'Monthly Finance Report - April 2026',
    },
    severity: AUDIT_SEVERITY.LOW,
    status: AUDIT_STATUS.SUCCESS,
    ip: '192.168.1.1',
    metadata: {
      format: 'PDF',
      requestId: 'req-stu-901',
    },
    changes: [],
    isSecuritySensitive: false,
    isFinanceSensitive: true,
  },
];

export const getMockAuditLogs = (filters = {}) => {
  let filteredLogs = [...mockLogs];

  if (filters.search) {
    const search = filters.search.toLowerCase();
    filteredLogs = filteredLogs.filter(
      (log) =>
        log.actor.name.toLowerCase().includes(search) ||
        log.actor.email.toLowerCase().includes(search) ||
        log.target.label.toLowerCase().includes(search) ||
        log.id.toLowerCase().includes(search)
    );
  }

  if (filters.module) {
    filteredLogs = filteredLogs.filter((log) => log.module === filters.module);
  }

  if (filters.action) {
    filteredLogs = filteredLogs.filter((log) => log.action === filters.action);
  }

  if (filters.severity) {
    filteredLogs = filteredLogs.filter((log) => log.severity === filters.severity);
  }

  if (filters.status) {
    filteredLogs = filteredLogs.filter((log) => log.status === filters.status);
  }

  if (filters.securityOnly) {
    filteredLogs = filteredLogs.filter((log) => log.isSecuritySensitive);
  }

  if (filters.financeOnly) {
    filteredLogs = filteredLogs.filter((log) => log.isFinanceSensitive);
  }

  return {
    data: filteredLogs,
    total: filteredLogs.length,
    summary: {
      total: mockLogs.length,
      today: mockLogs.filter(l => l.timestamp.startsWith('2026-04-26')).length,
      security: mockLogs.filter(l => l.isSecuritySensitive).length,
      finance: mockLogs.filter(l => l.isFinanceSensitive).length,
      failed: mockLogs.filter(l => l.status === AUDIT_STATUS.FAILED).length,
      highSeverity: mockLogs.filter(l => l.severity === AUDIT_SEVERITY.HIGH || l.severity === AUDIT_SEVERITY.CRITICAL).length,
    }
  };
};

export const getMockAuditLogById = (id) => {
  return mockLogs.find((log) => log.id === id) || null;
};
