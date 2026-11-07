import { NOTIFICATION_STATUS, NOTIFICATION_CHANNELS, NOTIFICATION_TYPES, NOTIFICATION_PRIORITY, AUDIENCE_TYPES } from '../constants/notification.constants';

export const MOCK_NOTIFICATIONS = [
  {
    id: 'NOT-1001',
    title: 'New Policy Enrollment Open',
    type: NOTIFICATION_TYPES.GENERAL_ANNOUNCEMENT,
    channels: [NOTIFICATION_CHANNELS.PUSH, NOTIFICATION_CHANNELS.IN_APP],
    audience: AUDIENCE_TYPES.ALL_USERS,
    priority: NOTIFICATION_PRIORITY.NORMAL,
    recipients: 45200,
    status: NOTIFICATION_STATUS.SENT,
    createdBy: 'Admin User',
    createdAt: '2024-04-25T10:00:00Z',
    sentAt: '2024-04-25T10:05:00Z',
    message: 'Policy enrollment for 2024-25 is now open for all students.',
    deliveryStats: { sent: 45200, delivered: 44800, failed: 400, read: 12500 }
  },
  {
    id: 'NOT-1002',
    title: 'Payment Reminder - Patna District',
    type: NOTIFICATION_TYPES.PAYMENT_REMINDER,
    channels: [NOTIFICATION_CHANNELS.SMS],
    audience: AUDIENCE_TYPES.SPECIFIC_DISTRICT,
    district: 'Patna',
    priority: NOTIFICATION_PRIORITY.HIGH,
    recipients: 2500,
    status: NOTIFICATION_STATUS.SCHEDULED,
    createdBy: 'Finance Manager',
    createdAt: '2024-04-26T09:00:00Z',
    scheduledAt: '2024-04-27T10:00:00Z',
    message: 'Friendly reminder to complete your premium payment for the current term.',
  },
  {
    id: 'NOT-1003',
    title: 'Claim #CLM-8822 Approved',
    type: NOTIFICATION_TYPES.CLAIM_UPDATE,
    channels: [NOTIFICATION_CHANNELS.EMAIL, NOTIFICATION_CHANNELS.PUSH],
    audience: AUDIENCE_TYPES.CUSTOM_SEGMENT,
    priority: NOTIFICATION_PRIORITY.HIGH,
    recipients: 1,
    status: NOTIFICATION_STATUS.SENT,
    createdBy: 'Claims Dept',
    createdAt: '2024-04-26T14:30:00Z',
    sentAt: '2024-04-26T14:31:00Z',
    message: 'Your claim request for hospital bill settlement has been approved.',
    deliveryStats: { sent: 1, delivered: 1, failed: 0, read: 1 }
  }
];

export const MOCK_TEMPLATES = [
  {
    id: 'TMP-001',
    name: 'Enrollment Confirmation',
    category: 'enrollment',
    channels: [NOTIFICATION_CHANNELS.EMAIL, NOTIFICATION_CHANNELS.PUSH],
    status: 'active',
    updatedAt: '2024-03-15T12:00:00Z',
    message: 'Dear {{studentName}}, your enrollment for policy year {{policyYear}} is successful.',
    variables: ['studentName', 'policyYear']
  },
  {
    id: 'TMP-002',
    name: 'Payment Due Reminder',
    category: 'payment',
    channels: [NOTIFICATION_CHANNELS.SMS, NOTIFICATION_CHANNELS.PUSH],
    status: 'active',
    updatedAt: '2024-03-20T10:30:00Z',
    message: 'Reminder: Premium of ₹{{paymentAmount}} is due for {{studentName}}. Please pay by {{dueDate}}.',
    variables: ['studentName', 'paymentAmount', 'dueDate']
  },
  {
    id: 'TMP-003',
    name: 'Claim Status Update',
    category: 'claims',
    channels: [NOTIFICATION_CHANNELS.PUSH, NOTIFICATION_CHANNELS.IN_APP],
    status: 'active',
    updatedAt: '2024-04-01T09:00:00Z',
    message: 'Status Update: Your claim {{claimId}} has been marked as {{claimStatus}}.',
    variables: ['claimId', 'claimStatus']
  }
];
