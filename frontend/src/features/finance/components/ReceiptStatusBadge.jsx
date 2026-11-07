import React from 'react';
import Badge from '../../../components/ui/Badge';
import { RECEIPT_STATUS } from '../constants/finance.constants';

const ReceiptStatusBadge = ({ status }) => {
  const getVariant = () => {
    switch (status) {
      case RECEIPT_STATUS.GENERATED: return 'success';
      case RECEIPT_STATUS.PENDING: return 'warning';
      case RECEIPT_STATUS.FAILED: return 'danger';
      default: return 'outline';
    }
  };

  return (
    <Badge variant={getVariant()} className="capitalize">
      {status}
    </Badge>
  );
};

export default ReceiptStatusBadge;
