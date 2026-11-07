import React from 'react';
import Badge from '../../../components/ui/Badge';
import { PAYOUT_STATUS } from '../constants/finance.constants';

const PayoutStatusBadge = ({ status }) => {
  const getVariant = () => {
    switch (status) {
      case PAYOUT_STATUS.COMPLETED: return 'success';
      case PAYOUT_STATUS.PROCESSING: return 'primary';
      case PAYOUT_STATUS.PENDING: return 'warning';
      case PAYOUT_STATUS.FAILED: return 'danger';
      case PAYOUT_STATUS.NOT_INITIATED: return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <Badge variant={getVariant()} className="capitalize">
      {status?.replace('_', ' ')}
    </Badge>
  );
};

export default PayoutStatusBadge;
