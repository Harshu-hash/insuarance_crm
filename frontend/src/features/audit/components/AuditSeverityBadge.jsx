import React from 'react';
import Badge from '../../../components/ui/Badge';
import { AUDIT_SEVERITY } from '../constants/audit.constants';

const AuditSeverityBadge = ({ severity, className }) => {
  const getVariant = (severity) => {
    switch (severity) {
      case AUDIT_SEVERITY.LOW:
        return 'info';
      case AUDIT_SEVERITY.MEDIUM:
        return 'warning';
      case AUDIT_SEVERITY.HIGH:
        return 'danger';
      case AUDIT_SEVERITY.CRITICAL:
        return 'danger'; // Could add a special 'critical' style later
      default:
        return 'secondary';
    }
  };

  return (
    <Badge variant={getVariant(severity)} className={className}>
      {severity}
    </Badge>
  );
};

export default AuditSeverityBadge;
