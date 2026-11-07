import { useState } from 'react';
import { policiesApi } from '../services/policies.api';

export const useUpdatePolicy = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updatePolicy = async (id, payload) => {
    setLoading(true);
    try {
      const result = await policiesApi.updatePolicy(id, payload);
      setError(null);
      return result;
    } catch (err) {
      setError(err.message || 'Failed to update policy');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updatePolicy, loading, error };
};
