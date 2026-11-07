import { useState } from 'react';
import { policiesApi } from '../services/policies.api';

export const useCreatePolicy = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPolicy = async (payload) => {
    setLoading(true);
    try {
      const result = await policiesApi.createPolicy(payload);
      setError(null);
      return result;
    } catch (err) {
      setError(err.message || 'Failed to create policy');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createPolicy, loading, error };
};
