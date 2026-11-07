import { useState, useEffect, useCallback } from 'react';
import { incentivesApi } from '../services/incentives.api';

export const useIncentiveDetails = (id) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDetails = useCallback(async () => {
    if (!id) return;
    setIsLoading(true);
    try {
      const response = await incentivesApi.getIncentiveById(id);
      setData(response);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch details');
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => { fetchDetails(); }, [fetchDetails]);

  return { data, isLoading, error, refetch: fetchDetails };
};
