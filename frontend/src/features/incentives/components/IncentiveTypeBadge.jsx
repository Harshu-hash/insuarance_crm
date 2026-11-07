import React from 'react';
import Badge from '../../../components/ui/Badge';

const IncentiveTypeBadge = ({ type }) => {
  return (
    <Badge variant="outline" className="font-black text-[10px] tracking-widest px-1.5 py-0.5 border-slate-200 text-slate-500 bg-slate-50">
      {type}
    </Badge>
  );
};

export default IncentiveTypeBadge;
