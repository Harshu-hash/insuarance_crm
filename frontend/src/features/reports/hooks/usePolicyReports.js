import { useState, useEffect, useCallback } from 'react';
import { reportsApi } from '../services/reports.api';

export const usePolicyReports = (filters) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await reportsApi.getPolicyReports(filters);
      setData(response);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch policy report');
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  useEffect(() => { fetchData(); }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
};
