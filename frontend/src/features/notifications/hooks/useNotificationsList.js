import { useState, useEffect, useCallback } from 'react';
import { notificationsApi } from '../services/notifications.api';

export const useNotificationsList = (initialParams = {}) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [params, setParams] = useState({ page: 1, limit: 10, ...initialParams });

  const fetchNotifications = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await notificationsApi.getNotifications(params);
      setData(response.data);
      setTotal(response.total);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch notifications');
    } finally {
      setIsLoading(false);
    }
  }, [params]);

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  const updateParams = (newParams) => {
    setParams(prev => ({ ...prev, ...newParams, page: newParams.page || 1 }));
  };

  return { data, total, isLoading, error, params, updateParams, refetch: fetchNotifications };
};
