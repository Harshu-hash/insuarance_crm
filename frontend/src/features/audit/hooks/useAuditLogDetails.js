import { useState, useEffect, useCallback } from 'react';
import { auditApi } from '../services/audit.api';

export const useAuditLogDetails = (id) => {
  const [log, setLog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDetails = useCallback(async () => {
    if (!id) return;
    try {
      setLoading(true);
      const data = await auditApi.getAuditLogById(id);
      setLog(data);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch audit log details');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return {
    log,
    loading,
    error,
    refresh: fetchDetails,
  };
};
