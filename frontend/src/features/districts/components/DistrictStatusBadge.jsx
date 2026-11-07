import React from 'react';
import { cn } from '../../../utils/cn';
import { DISTRICT_STATUS } from '../constants/district.constants';

const DistrictStatusBadge = ({ status, className }) => {
  const is_active = status === DISTRICT_STATUS.ACTIVE;
  const is_archived = status === DISTRICT_STATUS.ARCHIVED;

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider",
        is_active 
          ? "bg-emerald-100 text-emerald-700 border border-emerald-200" 
          : is_archived 
            ? "bg-slate-200 text-slate-700 border border-slate-300"
            : "bg-red-100 text-red-700 border border-red-200",
        className
      )}
    >
      <span className={cn(
        "w-1.5 h-1.5 rounded-full mr-1.5",
        is_active ? "bg-emerald-500" : is_archived ? "bg-slate-500" : "bg-red-500"
      )} />
      {status}
    </span>
  );
};

export default DistrictStatusBadge;
