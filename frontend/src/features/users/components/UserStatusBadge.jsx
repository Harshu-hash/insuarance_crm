import React from 'react';
import Badge from '../../../components/ui/Badge';
import { USER_STATUS, APPROVAL_STATUS } from '../constants/user.constants';

export const UserStatusBadge = ({ status }) => {
  const config = {
    [USER_STATUS.ACTIVE]: { label: 'Active', variant: 'success' },
    [USER_STATUS.INACTIVE]: { label: 'Inactive', variant: 'secondary' },
    [USER_STATUS.SUSPENDED]: { label: 'Suspended', variant: 'danger' },
  };

  const item = config[status] || { label: status, variant: 'outline' };

  return <Badge variant={item.variant} size="sm">{item.label}</Badge>;
};

export const ApprovalStatusBadge = ({ status }) => {
  const config = {
    [APPROVAL_STATUS.APPROVED]: { label: 'Approved', variant: 'success' },
    [APPROVAL_STATUS.PENDING]: { label: 'Pending', variant: 'warning' },
    [APPROVAL_STATUS.REJECTED]: { label: 'Rejected', variant: 'danger' },
  };

  const item = config[status] || { label: status, variant: 'outline' };

  return <Badge variant={item.variant} size="sm">{item.label}</Badge>;
};
