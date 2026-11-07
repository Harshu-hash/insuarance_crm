import React from 'react';
import Badge from '../../../components/ui/Badge';
import { POLICY_STATUS_COLORS } from '../constants/policy.constants';

const PolicyStatusBadge = ({ status }) => {
  const variant = POLICY_STATUS_COLORS[status] || 'neutral';
  
  return (
    <Badge variant={variant} className="capitalize">
      {status}
    </Badge>
  );
};

export default PolicyStatusBadge;
