import React from 'react';
import Badge from '../../../components/ui/Badge';
import { POLICY_TYPE_LABELS } from '../constants/policy.constants';

const PolicyTypeBadge = ({ type }) => {
  return (
    <Badge variant="info" className="whitespace-nowrap">
      {POLICY_TYPE_LABELS[type] || type.replace('_', ' ')}
    </Badge>
  );
};

export default PolicyTypeBadge;
