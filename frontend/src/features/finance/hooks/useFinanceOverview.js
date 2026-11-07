import { useState, useEffect, useCallback } from 'react';
import { financeApi } from '../services/finance.api';

export const useFinanceOverview = (filters) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOverview = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await financeApi.getFinanceOverview(filters);
      setData(response);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch finance overview');
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchOverview();
  }, [fetchOverview]);

  return { data, isLoading, error, refetch: fetchOverview };
};
