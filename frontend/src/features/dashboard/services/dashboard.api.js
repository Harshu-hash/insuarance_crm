import { MOCK_SUMMARY, MOCK_CHARTS, MOCK_ALERTS, MOCK_ACTIVITIES } from '../mock/dashboard.mock';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const dashboardApi = {
  getSummary: async () => {
    await delay(800);
    return MOCK_SUMMARY;
  },
  
  getCharts: async () => {
    await delay(1200);
    return MOCK_CHARTS;
  },
  
  getAlerts: async () => {
    await delay(500);
    return MOCK_ALERTS;
  },
  
  getActivities: async () => {
    await delay(1000);
    return MOCK_ACTIVITIES;
  }
};
