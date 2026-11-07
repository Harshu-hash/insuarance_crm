import { useState, useEffect, useCallback } from 'react';
import { incentivesApi } from '../services/incentives.api';

export const useIncentiveRules = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRules = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await incentivesApi.getIncentiveRules();
      setData(response);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch rules');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => { fetchRules(); }, [fetchRules]);

  return { data, isLoading, error, refetch: fetchRules };
};
