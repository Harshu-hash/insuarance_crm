import React from 'react';
import Badge from '../../../components/ui/Badge';

const ClaimEligibilityBadge = ({ status }) => {
  const variants = {
    pass: 'success',
    fail: 'error',
    warning: 'warning',
    pending: 'neutral'
  };
  
  return (
    <Badge variant={variants[status] || 'neutral'} className="capitalize">
      {status}
    </Badge>
  );
};

export default ClaimEligibilityBadge;
