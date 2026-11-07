import React from 'react';
import Badge from '../../../components/ui/Badge';
import { POLICY_STATUS_COLORS } from '../constants/enrollment.constants';

const PolicyActivationBadge = ({ status }) => {
  const variant = POLICY_STATUS_COLORS[status] || 'neutral';
  
  return (
    <Badge variant={variant} className="capitalize">
      {status.replace('_', ' ')}
    </Badge>
  );
};

export default PolicyActivationBadge;
