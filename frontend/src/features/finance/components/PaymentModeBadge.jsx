import React from 'react';
import Badge from '../../../components/ui/Badge';
import { PAYMENT_MODES } from '../constants/finance.constants';

const PaymentModeBadge = ({ mode }) => {
  return (
    <Badge variant="outline" className="capitalize bg-slate-50 text-slate-600 border-slate-200">
      {mode?.replace('_', ' ')}
    </Badge>
  );
};

export default PaymentModeBadge;
