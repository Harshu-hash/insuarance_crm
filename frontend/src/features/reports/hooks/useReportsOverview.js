import { useState, useEffect, useCallback } from 'react';
import { reportsApi } from '../services/reports.api';

export const useReportsOverview = (filters) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await reportsApi.getReportsOverview(filters);
      setData(response);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch overview');
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  useEffect(() => { fetchData(); }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
};
