import React from 'react';
import Badge from '../../../components/ui/Badge';
import { TRANSACTION_STATUS } from '../constants/finance.constants';

const TransactionStatusBadge = ({ status }) => {
  const getVariant = () => {
    switch (status) {
      case TRANSACTION_STATUS.SUCCESS: return 'success';
      case TRANSACTION_STATUS.PENDING: return 'warning';
      case TRANSACTION_STATUS.FAILED: return 'danger';
      case TRANSACTION_STATUS.REFUNDED: return 'secondary';
      case TRANSACTION_STATUS.CANCELLED: return 'outline';
      default: return 'outline';
    }
  };

  return (
    <Badge variant={getVariant()} className="capitalize">
      {status}
    </Badge>
  );
};

export default TransactionStatusBadge;
