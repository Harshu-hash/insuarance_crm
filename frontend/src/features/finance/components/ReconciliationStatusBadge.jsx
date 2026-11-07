import React from 'react';
import Badge from '../../../components/ui/Badge';
import { RECONCILIATION_STATUS } from '../constants/finance.constants';

const ReconciliationStatusBadge = ({ status }) => {
  const getVariant = () => {
    switch (status) {
      case RECONCILIATION_STATUS.MATCHED: return 'success';
      case RECONCILIATION_STATUS.RESOLVED: return 'primary';
      case RECONCILIATION_STATUS.PENDING: return 'warning';
      case RECONCILIATION_STATUS.MISMATCH: return 'danger';
      case RECONCILIATION_STATUS.IGNORED: return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <Badge variant={getVariant()} className="capitalize">
      {status?.replace('_', ' ')}
    </Badge>
  );
};

export default ReconciliationStatusBadge;
