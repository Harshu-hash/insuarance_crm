import React from 'react';
import Badge from '../../../components/ui/Badge';
import { AUDIT_STATUS } from '../constants/audit.constants';

const AuditStatusBadge = ({ status, className }) => {
  const getVariant = (status) => {
    switch (status) {
      case AUDIT_STATUS.SUCCESS:
        return 'success';
      case AUDIT_STATUS.FAILED:
        return 'danger';
      case AUDIT_STATUS.WARNING:
        return 'warning';
      default:
        return 'secondary';
    }
  };

  return (
    <Badge variant={getVariant(status)} className={className}>
      {status}
    </Badge>
  );
};

export default AuditStatusBadge;
