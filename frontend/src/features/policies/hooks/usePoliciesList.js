import { useState, useEffect, useCallback } from 'react';
import { policiesApi } from '../services/policies.api';

export const usePoliciesList = (initialFilters = {}) => {
  const [policies, setPolicies] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    search: '',
    status: '',
    ...initialFilters
  });
  const [total, setTotal] = useState(0);

  const fetchPolicies = useCallback(async () => {
    setLoading(true);
    try {
      const response = await policiesApi.getPolicies(filters);
      setPolicies(response.data);
      setTotal(response.total);
      
      const summaryData = await policiesApi.getPolicySummary();
      setSummary(summaryData);
      
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch policies');
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchPolicies();
  }, [fetchPolicies]);

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters, page: 1 }));
  };

  return {
    policies,
    summary,
    loading,
    error,
    filters,
    total,
    updateFilters,
    refresh: fetchPolicies
  };
};
