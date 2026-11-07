import React from 'react';
import Badge from '../../../components/ui/Badge';
import { PRIORITY_COLORS } from '../constants/claim.constants';

const ClaimPriorityBadge = ({ priority }) => {
  const variant = PRIORITY_COLORS[priority] || 'neutral';
  
  return (
    <Badge variant={variant} className="capitalize">
      {priority?.replace('_', ' ')}
    </Badge>
  );
};

export default ClaimPriorityBadge;
