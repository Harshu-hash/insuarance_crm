import { MOCK_CLAIMS, MOCK_CLAIM_SUMMARY, MOCK_CLAIM_DOCUMENTS, MOCK_CLAIM_TIMELINE } from '../mock/claims.mock';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const claimsApi = {
  getClaims: async (params = {}) => {
    console.log('Fetching claims with params:', params);
    await delay(800);
    
    let filteredData = [...MOCK_CLAIMS];
    
    if (params.search) {
      const search = params.search.toLowerCase();
      filteredData = filteredData.filter(clm => 
        clm.id.toLowerCase().includes(search) ||
        clm.studentName.toLowerCase().includes(search) ||
        clm.studentId.toLowerCase().includes(search)
      );
    }
    
    if (params.status) {
      filteredData = filteredData.filter(clm => clm.status === params.status);
    }

    return {
      data: filteredData,
      total: filteredData.length,
      page: params.page || 1,
      limit: params.limit || 10
    };
  },

  getClaimById: async (id) => {
    await delay(500);
    const claim = MOCK_CLAIMS.find(clm => clm.id === id);
    if (!claim) throw new Error('Claim not found');
    return claim;
  },

  getClaimSummary: async () => {
    await delay(300);
    return MOCK_CLAIM_SUMMARY;
  },

  getClaimDocuments: async (id) => {
    await delay(400);
    return MOCK_CLAIM_DOCUMENTS;
  },

  getClaimTimeline: async (id) => {
    await delay(300);
    return MOCK_CLAIM_TIMELINE;
  },

  getClaimEligibility: async (id) => {
    await delay(400);
    // Simulated eligibility logic
    const claim = MOCK_CLAIMS.find(clm => clm.id === id);
    return [
      { id: 'policy_active', label: 'Policy Active on Accident Date', status: claim?.policyStatus === 'active' ? 'pass' : 'fail' },
      { id: 'premium_paid', label: 'Premium Payment Verified', status: claim?.premiumStatus === 'paid' ? 'pass' : 'fail' },
      { id: 'threshold_check', label: 'Bill Amount Above Threshold', status: (claim?.billAmount || 0) >= 5000 ? 'pass' : 'fail' },
      { id: 'accident_period', label: 'Date within Policy Period', status: 'pass' },
      { id: 'docs_complete', label: 'Required Documents Complete', status: claim?.documentCompleteness === 'complete' ? 'pass' : 'warning' },
    ];
  },

  reviewClaim: async (id, payload) => {
    await delay(1200);
    console.log(`Review submitted for ${id}:`, payload);
    return { success: true, id, decision: payload.decision };
  },

  exportClaims: async (params = {}) => {
    await delay(1500);
    return { success: true, message: 'Export started' };
  }
};
