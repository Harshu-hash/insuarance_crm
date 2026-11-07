import React from 'react';
import Badge from '../../../components/ui/Badge';
import { PAYMENT_STATUS_COLORS } from '../constants/enrollment.constants';

const PaymentStatusBadge = ({ status }) => {
  const variant = PAYMENT_STATUS_COLORS[status] || 'neutral';
  
  return (
    <Badge variant={variant} className="capitalize">
      {status}
    </Badge>
  );
};

export default PaymentStatusBadge;
