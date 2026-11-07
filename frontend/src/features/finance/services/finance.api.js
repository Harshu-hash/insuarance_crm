import { 
  MOCK_FINANCE_OVERVIEW, 
  MOCK_TRANSACTIONS, 
  MOCK_INCENTIVES, 
  MOCK_PAYOUTS, 
  MOCK_RECONCILIATION 
} from '../mock/finance.mock';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const financeApi = {
  getFinanceOverview: async (filters) => {
    await delay(800);
    return MOCK_FINANCE_OVERVIEW;
  },

  getTransactions: async (params) => {
    await delay(1000);
    // Basic filtering simulation
    let data = [...MOCK_TRANSACTIONS];
    if (params?.search) {
      const search = params.search.toLowerCase();
      data = data.filter(t => 
        t.id.toLowerCase().includes(search) || 
        t.studentName.toLowerCase().includes(search) ||
        t.enrollmentId.toLowerCase().includes(search)
      );
    }
    if (params?.status) {
      data = data.filter(t => t.status === params.status);
    }
    return {
      data: data.slice(0, params?.limit || 10),
      total: data.length,
      page: params?.page || 1,
      limit: params?.limit || 10
    };
  },

  getTransactionById: async (id) => {
    await delay(500);
    return MOCK_TRANSACTIONS.find(t => t.id === id);
  },

  getFinanceIncentives: async (params) => {
    await delay(1000);
    let data = [...MOCK_INCENTIVES];
    if (params?.status) {
      data = data.filter(i => i.status === params.status);
    }
    return {
      data: data.slice(0, params?.limit || 10),
      total: data.length,
      page: params?.page || 1,
      limit: params?.limit || 10
    };
  },

  getClaimPayouts: async (params) => {
    await delay(1000);
    let data = [...MOCK_PAYOUTS];
    if (params?.status) {
      data = data.filter(p => p.status === params.status);
    }
    return {
      data: data.slice(0, params?.limit || 10),
      total: data.length,
      page: params?.page || 1,
      limit: params?.limit || 10
    };
  },

  getPayoutById: async (id) => {
    await delay(500);
    return MOCK_PAYOUTS.find(p => p.id === id);
  },

  getReconciliationRecords: async (params) => {
    await delay(1000);
    let data = [...MOCK_RECONCILIATION];
    if (params?.status) {
      data = data.filter(r => r.status === params.status);
    }
    return {
      data: data.slice(0, params?.limit || 10),
      total: data.length,
      page: params?.page || 1,
      limit: params?.limit || 10
    };
  },

  exportFinanceData: async (type, params) => {
    await delay(1500);
    return { success: true, message: `Export of ${type} started successfully.` };
  }
};
