import { MOCK_NOTIFICATIONS, MOCK_TEMPLATES } from '../mock/notifications.mock';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const notificationsApi = {
  getNotifications: async (params) => {
    await delay(1000);
    let data = [...MOCK_NOTIFICATIONS];
    if (params?.search) {
      const search = params.search.toLowerCase();
      data = data.filter(n => n.title.toLowerCase().includes(search) || n.message.toLowerCase().includes(search));
    }
    if (params?.type) {
      data = data.filter(n => n.type === params.type);
    }
    if (params?.status) {
      data = data.filter(n => n.status === params.status);
    }
    return {
      data: data.slice(0, params?.limit || 10),
      total: data.length,
      page: params?.page || 1,
      limit: params?.limit || 10
    };
  },

  getNotificationById: async (id) => {
    await delay(600);
    return MOCK_NOTIFICATIONS.find(n => n.id === id) || MOCK_NOTIFICATIONS[0];
  },

  createNotification: async (payload) => {
    await delay(1500);
    return { success: true, message: 'Notification created successfully' };
  },

  scheduleNotification: async (payload) => {
    await delay(1500);
    return { success: true, message: 'Notification scheduled successfully' };
  },

  cancelNotification: async (id) => {
    await delay(800);
    return { success: true, message: 'Notification cancelled' };
  },

  resendFailedNotification: async (id) => {
    await delay(1000);
    return { success: true, message: 'Resending failed notifications...' };
  },

  getNotificationTemplates: async (params) => {
    await delay(800);
    return MOCK_TEMPLATES;
  },

  getNotificationDeliveryStats: async (id) => {
    await delay(500);
    const n = MOCK_NOTIFICATIONS.find(n => n.id === id) || MOCK_NOTIFICATIONS[0];
    return n.deliveryStats || null;
  },

  exportNotifications: async (params) => {
    await delay(2000);
    return { success: true, message: 'Export started' };
  }
};
