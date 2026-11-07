import { useState } from 'react';
import { notificationsApi } from '../services/notifications.api';

export const useCreateNotification = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const createNotification = async (payload) => {
    setIsSubmitting(true);
    try {
      const response = await notificationsApi.createNotification(payload);
      return response;
    } catch (err) {
      setError(err.message || 'Failed to create notification');
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { createNotification, isSubmitting, error };
};
