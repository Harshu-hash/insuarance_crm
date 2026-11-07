import { useState, useEffect, useCallback } from 'react';
import { claimsApi } from '../services/claims.api';

export const useClaimsList = (initialFilters = {}) => {
  const [claims, setClaims] = useState([]);
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

  const fetchClaims = useCallback(async () => {
    setLoading(true);
    try {
      const response = await claimsApi.getClaims(filters);
      setClaims(response.data);
      setTotal(response.total);
      
      const summaryData = await claimsApi.getClaimSummary();
      setSummary(summaryData);
      
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch claims');
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchClaims();
  }, [fetchClaims]);

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters, page: 1 }));
  };

  return {
    claims,
    summary,
    loading,
    error,
    filters,
    total,
    updateFilters,
    refresh: fetchClaims
  };
};
