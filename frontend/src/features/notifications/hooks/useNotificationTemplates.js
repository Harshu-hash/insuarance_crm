import { useState, useEffect, useCallback } from 'react';
import { notificationsApi } from '../services/notifications.api';

export const useNotificationTemplates = () => {
  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTemplates = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await notificationsApi.getNotificationTemplates();
      setTemplates(response);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch templates');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTemplates();
  }, [fetchTemplates]);

  return { templates, isLoading, error, refetch: fetchTemplates };
};
