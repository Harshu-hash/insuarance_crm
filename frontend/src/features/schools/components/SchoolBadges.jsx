import React from 'react';
import { SCHOOL_STATUS_COLORS, SCHOOL_TYPE_COLORS } from '../constants/school.constants';
import { cn } from '../../../utils/cn';

export const SchoolStatusBadge = ({ status }) => {
  const colorClass = SCHOOL_STATUS_COLORS[status] || 'text-slate-600 bg-slate-50 border-slate-100';
  
  return (
    <span className={cn(
      "px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border",
      colorClass
    )}>
      {status}
    </span>
  );
};

export const SchoolTypeBadge = ({ type }) => {
  const colorClass = SCHOOL_TYPE_COLORS[type] || 'text-slate-600 bg-slate-50 border-slate-100';
  
  return (
    <span className={cn(
      "px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-tighter border",
      colorClass
    )}>
      {type}
    </span>
  );
};
