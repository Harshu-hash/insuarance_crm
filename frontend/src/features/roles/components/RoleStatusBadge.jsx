import React from 'react';
import { cn } from '../../../utils/cn';
import { ROLE_STATUS } from '../constants/role.constants';

const RoleStatusBadge = ({ status, className }) => {
  const is_active = status === ROLE_STATUS.ACTIVE;

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider",
        is_active 
          ? "bg-emerald-100 text-emerald-700 border border-emerald-200" 
          : "bg-slate-100 text-slate-600 border border-slate-200",
        className
      )}
    >
      <span className={cn(
        "w-1.5 h-1.5 rounded-full mr-1.5",
        is_active ? "bg-emerald-500" : "bg-slate-400"
      )} />
      {status}
    </span>
  );
};

export default RoleStatusBadge;
