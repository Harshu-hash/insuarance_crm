import { useState, useEffect, useCallback } from 'react';
import { notificationsApi } from '../services/notifications.api';

export const useNotificationDetails = (id) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDetails = useCallback(async () => {
    if (!id) return;
    setIsLoading(true);
    try {
      const response = await notificationsApi.getNotificationById(id);
      setData(response);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch details');
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return { data, isLoading, error, refetch: fetchDetails };
};
