import React from 'react';
import Badge from '../../../components/ui/Badge';
import { CLAIM_STATUS_COLORS } from '../constants/claim.constants';

const ClaimStatusBadge = ({ status }) => {
  const variant = CLAIM_STATUS_COLORS[status] || 'neutral';
  
  return (
    <Badge variant={variant} className="capitalize">
      {status?.replace('_', ' ')}
    </Badge>
  );
};

export default ClaimStatusBadge;
