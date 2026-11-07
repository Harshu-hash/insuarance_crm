import { useState, useEffect, useCallback } from 'react';
import { incentivesApi } from '../services/incentives.api';

export const useIncentiveRecords = (initialParams = {}) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [params, setParams] = useState({ page: 1, limit: 10, ...initialParams });

  const fetchRecords = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await incentivesApi.getIncentiveRecords(params);
      setData(response.data);
      setTotal(response.total);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch records');
    } finally {
      setIsLoading(false);
    }
  }, [params]);

  useEffect(() => { fetchRecords(); }, [fetchRecords]);

  const updateParams = (newParams) => {
    setParams(prev => ({ ...prev, ...newParams, page: newParams.page || 1 }));
  };

  return { data, total, isLoading, error, params, updateParams, refetch: fetchRecords };
};
