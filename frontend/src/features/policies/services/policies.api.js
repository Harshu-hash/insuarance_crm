import { MOCK_POLICIES, MOCK_POLICY_SUMMARY } from '../mock/policies.mock';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const policiesApi = {
  getPolicies: async (params = {}) => {
    console.log('Fetching policies with params:', params);
    await delay(600);
    
    let filteredData = [...MOCK_POLICIES];
    
    if (params.search) {
      const search = params.search.toLowerCase();
      filteredData = filteredData.filter(pol => 
        pol.name.toLowerCase().includes(search) ||
        pol.code.toLowerCase().includes(search)
      );
    }
    
    if (params.status) {
      filteredData = filteredData.filter(pol => pol.status === params.status);
    }

    return {
      data: filteredData,
      total: filteredData.length,
      page: params.page || 1,
      limit: params.limit || 10
    };
  },

  getPolicyById: async (id) => {
    await delay(400);
    const policy = MOCK_POLICIES.find(pol => pol.id === id);
    if (!policy) throw new Error('Policy not found');
    return policy;
  },

  createPolicy: async (payload) => {
    await delay(1000);
    const newPolicy = {
      ...payload,
      id: `POL-${Math.floor(Math.random() * 1000)}`,
      enrollmentsCount: 0,
      claimsCount: 0,
      createdDate: new Date().toISOString().split('T')[0]
    };
    console.log('Policy created:', newPolicy);
    return newPolicy;
  },

  updatePolicy: async (id, payload) => {
    await delay(1000);
    console.log(`Policy ${id} updated:`, payload);
    return { ...payload, id };
  },

  togglePolicyStatus: async (id, status) => {
    await delay(500);
    console.log(`Policy ${id} status changed to:`, status);
    return { success: true, id, status };
  },

  getPolicySummary: async () => {
    await delay(300);
    return MOCK_POLICY_SUMMARY;
  },

  exportPolicies: async (params = {}) => {
    await delay(1500);
    return { success: true, message: 'Export started' };
  }
};
