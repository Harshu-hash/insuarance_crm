import { useState, useEffect, useCallback } from 'react';
import { incentivesApi } from '../services/incentives.api';

export const useIncentivePerformance = (params) => {
  const [data, setData] = useState({ bm: [], dm: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPerformance = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await incentivesApi.getIncentivePerformance(params);
      setData(response);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch performance data');
    } finally {
      setIsLoading(false);
    }
  }, [params]);

  useEffect(() => { fetchPerformance(); }, [fetchPerformance]);

  return { data, isLoading, error, refetch: fetchPerformance };
};
