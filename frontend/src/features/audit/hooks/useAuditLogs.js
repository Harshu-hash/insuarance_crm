import { useState, useEffect, useCallback } from 'react';
import { auditApi } from '../services/audit.api';

export const useAuditLogs = (initialFilters = {}) => {
  const [logs, setLogs] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    module: '',
    action: '',
    severity: '',
    status: '',
    securityOnly: false,
    financeOnly: false,
    ...initialFilters,
  });

  const fetchLogs = useCallback(async () => {
    try {
      setLoading(true);
      const response = await auditApi.getAuditLogs(filters);
      setLogs(response.data);
      setSummary(response.summary);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch audit logs');
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const refresh = () => {
    fetchLogs();
  };

  const exportLogs = async () => {
    try {
      return await auditApi.exportAuditLogs(filters);
    } catch (err) {
      throw new Error(err.message || 'Failed to export logs');
    }
  };

  return {
    logs,
    summary,
    loading,
    error,
    filters,
    updateFilters,
    refresh,
    exportLogs,
  };
};
