import { getMockAuditLogs, getMockAuditLogById } from '../mock/audit.mock';

const DELAY = 500;

export const auditApi = {
  getAuditLogs: async (params = {}) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getMockAuditLogs(params));
      }, DELAY);
    });
  },

  getAuditLogById: async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const log = getMockAuditLogById(id);
        if (log) {
          resolve(log);
        } else {
          reject(new Error('Audit log not found'));
        }
      }, DELAY);
    });
  },

  getAuditSummary: async (filters = {}) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = getMockAuditLogs(filters);
        resolve(result.summary);
      }, DELAY);
    });
  },

  exportAuditLogs: async (params = {}) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Exporting audit logs with params:', params);
        resolve({ success: true, message: 'Export started. You will be notified when it is ready.' });
      }, DELAY);
    });
  },
};
