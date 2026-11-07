import { useState } from 'react';
import { claimsApi } from '../services/claims.api';

export const useReviewClaim = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitReview = async (id, payload) => {
    setLoading(true);
    try {
      const result = await claimsApi.reviewClaim(id, payload);
      setError(null);
      return result;
    } catch (err) {
      setError(err.message || 'Failed to submit claim review');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { submitReview, loading, error };
};
