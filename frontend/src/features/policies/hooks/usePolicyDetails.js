import { useState, useEffect, useCallback } from 'react';
import { policiesApi } from '../services/policies.api';

export const usePolicyDetails = (id) => {
  const [policy, setPolicy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDetails = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    try {
      const data = await policiesApi.getPolicyById(id);
      setPolicy(data);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch policy details');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return {
    policy,
    loading,
    error,
    refresh: fetchDetails
  };
};
