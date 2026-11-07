import React from 'react';
import { STUDENT_STATUS_COLORS, POLICY_STATUS_COLORS } from '../constants/student.constants';
import { cn } from '../../../utils/cn';

export const StudentStatusBadge = ({ status }) => {
  const colorClass = STUDENT_STATUS_COLORS[status] || 'text-slate-600 bg-slate-50 border-slate-100';
  const label = status?.replace('_', ' ');
  
  return (
    <span className={cn(
      "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border whitespace-nowrap",
      colorClass
    )}>
      {label}
    </span>
  );
};

export const StudentPolicyBadge = ({ status }) => {
  const colorClass = POLICY_STATUS_COLORS[status] || 'text-slate-600 bg-slate-50 border-slate-100';
  const label = status?.replace('_', ' ');
  
  return (
    <span className={cn(
      "px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-tighter border",
      colorClass
    )}>
      {label}
    </span>
  );
};

export const StudentClaimBadge = ({ count = 0 }) => {
  if (count === 0) {
    return (
      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">No claims</span>
    );
  }
  
  return (
    <span className="px-1.5 py-0.5 rounded bg-red-50 text-red-600 border border-red-100 text-[9px] font-black uppercase tracking-tighter flex items-center gap-1">
      <span className="h-1 w-1 rounded-full bg-red-500 animate-pulse" />
      {count} {count === 1 ? 'Claim' : 'Claims'}
    </span>
  );
};
