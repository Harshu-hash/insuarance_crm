import React from 'react';
import Badge from '../../../components/ui/Badge';
import { AUDIT_ACTIONS } from '../constants/audit.constants';

const AuditActionBadge = ({ action, className }) => {
  const getVariant = (action) => {
    switch (action) {
      case AUDIT_ACTIONS.CREATED:
      case AUDIT_ACTIONS.ACTIVATED:
      case AUDIT_ACTIONS.APPROVED:
        return 'success';
      case AUDIT_ACTIONS.DELETED:
      case AUDIT_ACTIONS.REJECTED:
      case AUDIT_ACTIONS.LOGIN_FAILED:
      case AUDIT_ACTIONS.SYSTEM_ERROR:
        return 'danger';
      case AUDIT_ACTIONS.UPDATED:
      case AUDIT_ACTIONS.PASSWORD_CHANGED:
      case AUDIT_ACTIONS.PERMISSION_CHANGED:
      case AUDIT_ACTIONS.ROLE_ASSIGNED:
      case AUDIT_ACTIONS.PAYMENT_UPDATED:
      case AUDIT_ACTIONS.PAYOUT_UPDATED:
        return 'info';
      case AUDIT_ACTIONS.DEACTIVATED:
        return 'warning';
      case AUDIT_ACTIONS.LOGIN:
      case AUDIT_ACTIONS.LOGOUT:
      case AUDIT_ACTIONS.EXPORTED:
      default:
        return 'primary';
    }
  };

  return (
    <Badge variant={getVariant(action)} className={className}>
      {action.replace(/_/g, ' ')}
    </Badge>
  );
};

export default AuditActionBadge;
