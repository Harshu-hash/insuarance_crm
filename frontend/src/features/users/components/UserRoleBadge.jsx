import React from 'react';
import Badge from '../../../components/ui/Badge';
import { USER_ROLES, ROLE_LABELS } from '../constants/user.constants';

export const UserRoleBadge = ({ role }) => {
  const config = {
    [USER_ROLES.SUPER_ADMIN]: { variant: 'danger' },
    [USER_ROLES.FINANCE]: { variant: 'info' },
    [USER_ROLES.MANAGER]: { variant: 'primary' },
    [USER_ROLES.DISTRICT_MANAGER]: { variant: 'primary' },
    [USER_ROLES.BLOCK_MANAGER]: { variant: 'warning' },
    [USER_ROLES.SUPPORT]: { variant: 'secondary' },
    [USER_ROLES.CLAIMS_REVIEWER]: { variant: 'secondary' },
  };

  const item = config[role] || { variant: 'outline' };
  const label = ROLE_LABELS[role] || role;

  return <Badge variant={item.variant} size="sm">{label}</Badge>;
};
