import { useState, useEffect, useCallback } from 'react';
import { enrollmentsApi } from '../services/enrollments.api';

export const useEnrollmentDetails = (id) => {
  const [enrollment, setEnrollment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDetails = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    try {
      const data = await enrollmentsApi.getEnrollmentById(id);
      setEnrollment(data);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch enrollment details');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return {
    enrollment,
    loading,
    error,
    refresh: fetchDetails
  };
};
