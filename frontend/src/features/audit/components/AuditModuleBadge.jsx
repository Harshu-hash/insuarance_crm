import React from 'react';
import Badge from '../../../components/ui/Badge';

const AuditModuleBadge = ({ module, className }) => {
  return (
    <Badge variant="outline" className={className}>
      {module}
    </Badge>
  );
};

export default AuditModuleBadge;
