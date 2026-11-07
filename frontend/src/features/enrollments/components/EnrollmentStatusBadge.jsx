import React from 'react';
import Badge from '../../../components/ui/Badge';
import { STATUS_COLORS } from '../constants/enrollment.constants';

const EnrollmentStatusBadge = ({ status }) => {
  const variant = STATUS_COLORS[status] || 'neutral';
  
  return (
    <Badge variant={variant} className="capitalize">
      {status.replace('_', ' ')}
    </Badge>
  );
};

export default EnrollmentStatusBadge;
