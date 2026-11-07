import { 
  MOCK_REPORTS_OVERVIEW, 
  MOCK_ENROLLMENT_REPORTS, 
  MOCK_CLAIMS_REPORTS, 
  MOCK_FINANCE_REPORTS, 
  MOCK_GEOGRAPHY_REPORTS 
} from '../mock/reports.mock';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const reportsApi = {
  getReportsOverview: async (filters) => {
    await delay(800);
    return MOCK_REPORTS_OVERVIEW;
  },

  getEnrollmentReports: async (filters) => {
    await delay(1200);
    return MOCK_ENROLLMENT_REPORTS;
  },

  getClaimsReports: async (filters) => {
    await delay(1000);
    return MOCK_CLAIMS_REPORTS;
  },

  getFinanceReports: async (filters) => {
    await delay(1000);
    return MOCK_FINANCE_REPORTS;
  },

  getIncentiveReports: async (filters) => {
    await delay(1000);
    // Placeholder since it's similar to others
    return {
      summary: [{ title: 'Total Incentive', value: 1450000 }, { title: 'Paid', value: 1150000 }],
      trends: { monthly: [] },
      tables: { performance: [] }
    };
  },

  getGeographyReports: async (filters) => {
    await delay(1000);
    return MOCK_GEOGRAPHY_REPORTS;
  },

  getPolicyReports: async (filters) => {
    await delay(800);
    return {
      summary: [{ title: 'Total Policies', value: 3 }, { title: 'Active', value: 3 }],
      trends: { usage: [] },
      tables: { usage: [] }
    };
  },

  exportReport: async (type, filters, format) => {
    await delay(2000);
    return { success: true, message: `Report exported as ${format.toUpperCase()}` };
  }
};
