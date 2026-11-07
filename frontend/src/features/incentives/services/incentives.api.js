import { 
  MOCK_INCENTIVES_OVERVIEW, 
  MOCK_INCENTIVE_RECORDS, 
  MOCK_INCENTIVE_RULES, 
  MOCK_PERFORMANCE_RANKINGS 
} from '../mock/incentives.mock';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const incentivesApi = {
  getIncentivesOverview: async (filters) => {
    await delay(800);
    return MOCK_INCENTIVES_OVERVIEW;
  },

  getIncentiveRecords: async (params) => {
    await delay(1000);
    let data = [...MOCK_INCENTIVE_RECORDS];
    if (params?.search) {
      const search = params.search.toLowerCase();
      data = data.filter(r => 
        r.id.toLowerCase().includes(search) || 
        r.recipientName.toLowerCase().includes(search) ||
        r.enrollmentId.toLowerCase().includes(search)
      );
    }
    if (params?.status) {
      data = data.filter(r => r.status === params.status);
    }
    if (params?.role) {
      data = data.filter(r => r.recipientRole === params.role);
    }
    return {
      data: data.slice(0, params?.limit || 10),
      total: data.length,
      page: params?.page || 1,
      limit: params?.limit || 10
    };
  },

  getIncentiveById: async (id) => {
    await delay(500);
    return MOCK_INCENTIVE_RECORDS.find(r => r.id === id) || MOCK_INCENTIVE_RECORDS[0];
  },

  getIncentiveRules: async () => {
    await delay(600);
    return MOCK_INCENTIVE_RULES;
  },

  updateIncentiveRule: async (id, payload) => {
    await delay(1000);
    return { success: true, message: 'Rule updated successfully' };
  },

  getIncentivePerformance: async (params) => {
    await delay(1000);
    return MOCK_PERFORMANCE_RANKINGS;
  },

  holdIncentive: async (id, payload) => {
    await delay(800);
    return { success: true, message: 'Incentive placed on hold' };
  },

  reverseIncentive: async (id, payload) => {
    await delay(800);
    return { success: true, message: 'Incentive reversed' };
  },

  exportIncentives: async (params) => {
    await delay(1500);
    return { success: true, message: 'Export started' };
  }
};
