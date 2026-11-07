import { useState, useEffect, useCallback } from 'react';
import { financeApi } from '../services/finance.api';

export const useFinanceIncentives = (initialParams = {}) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [params, setParams] = useState({ page: 1, limit: 10, ...initialParams });

  const fetchIncentives = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await financeApi.getFinanceIncentives(params);
      setData(response.data);
      setTotal(response.total);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch incentives');
    } finally {
      setIsLoading(false);
    }
  }, [params]);

  useEffect(() => { fetchIncentives(); }, [fetchIncentives]);

  const updateParams = (newParams) => {
    setParams(prev => ({ ...prev, ...newParams, page: newParams.page || 1 }));
  };

  return { data, total, isLoading, error, params, updateParams, refetch: fetchIncentives };
};
