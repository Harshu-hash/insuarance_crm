import React from 'react';
import Badge from '../../../components/ui/Badge';
import { PAYOUT_STATUS_COLORS } from '../constants/claim.constants';

const ClaimPaymentStatusBadge = ({ status }) => {
  const variant = PAYOUT_STATUS_COLORS[status] || 'neutral';
  
  return (
    <Badge variant={variant} className="capitalize">
      {status?.replace('_', ' ')}
    </Badge>
  );
};

export default ClaimPaymentStatusBadge;
