import { useQuery } from '@tanstack/react-query';
import { dashboardApi } from '../services/dashboard.api';

export const useDashboardData = () => {
  const summaryQuery = useQuery({
    queryKey: ['dashboard', 'summary'],
    queryFn: dashboardApi.getSummary,
  });

  const chartsQuery = useQuery({
    queryKey: ['dashboard', 'charts'],
    queryFn: dashboardApi.getCharts,
  });

  const alertsQuery = useQuery({
    queryKey: ['dashboard', 'alerts'],
    queryFn: dashboardApi.getAlerts,
  });

  const activitiesQuery = useQuery({
    queryKey: ['dashboard', 'activities'],
    queryFn: dashboardApi.getActivities,
  });

  return {
    summary: summaryQuery.data,
    charts: chartsQuery.data,
    alerts: alertsQuery.data,
    activities: activitiesQuery.data,
    isLoading: 
      summaryQuery.isLoading || 
      chartsQuery.isLoading || 
      alertsQuery.isLoading || 
      activitiesQuery.isLoading,
    isError: 
      summaryQuery.isError || 
      chartsQuery.isError || 
      alertsQuery.isError || 
      activitiesQuery.isError,
  };
};
