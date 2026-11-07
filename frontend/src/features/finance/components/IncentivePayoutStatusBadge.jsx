import React from 'react';
import Badge from '../../../components/ui/Badge';
import { INCENTIVE_STATUS } from '../constants/finance.constants';

const IncentivePayoutStatusBadge = ({ status }) => {
  const getVariant = () => {
    switch (status) {
      case INCENTIVE_STATUS.PAID: return 'success';
      case INCENTIVE_STATUS.PAYABLE: return 'primary';
      case INCENTIVE_STATUS.PENDING: return 'warning';
      case INCENTIVE_STATUS.GENERATED: return 'secondary';
      case INCENTIVE_STATUS.ON_HOLD: return 'danger';
      case INCENTIVE_STATUS.REVERSED: return 'outline';
      default: return 'outline';
    }
  };

  return (
    <Badge variant={getVariant()} className="capitalize">
      {status?.replace('_', ' ')}
    </Badge>
  );
};

export default IncentivePayoutStatusBadge;
