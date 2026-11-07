import { useState, useEffect, useCallback } from 'react';
import { enrollmentsApi } from '../services/enrollments.api';

export const useEnrollmentsList = (initialFilters = {}) => {
  const [enrollments, setEnrollments] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    search: '',
    districtId: '',
    blockId: '',
    schoolId: '',
    paymentStatus: '',
    policyStatus: '',
    ...initialFilters
  });
  const [total, setTotal] = useState(0);

  const fetchEnrollments = useCallback(async () => {
    setLoading(true);
    try {
      const response = await enrollmentsApi.getEnrollments(filters);
      setEnrollments(response.data);
      setTotal(response.total);
      
      if (!summary) {
        const summaryData = await enrollmentsApi.getEnrollmentSummary();
        setSummary(summaryData);
      }
      
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch enrollments');
    } finally {
      setLoading(false);
    }
  }, [filters, summary]);

  useEffect(() => {
    fetchEnrollments();
  }, [fetchEnrollments]);

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters, page: 1 }));
  };

  const handlePageChange = (page) => {
    setFilters(prev => ({ ...prev, page }));
  };

  const refresh = () => fetchEnrollments();

  return {
    enrollments,
    summary,
    loading,
    error,
    filters,
    total,
    updateFilters,
    handlePageChange,
    refresh
  };
};
