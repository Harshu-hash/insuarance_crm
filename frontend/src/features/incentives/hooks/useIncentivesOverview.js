import { useState, useEffect, useCallback } from 'react';
import { incentivesApi } from '../services/incentives.api';

export const useIncentivesOverview = (filters) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOverview = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await incentivesApi.getIncentivesOverview(filters);
      setData(response);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch overview');
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  useEffect(() => { fetchOverview(); }, [fetchOverview]);

  return { data, isLoading, error, refetch: fetchOverview };
};
