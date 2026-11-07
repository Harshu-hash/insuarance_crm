import React from 'react';
import { cn } from '../../../utils/cn';
import { ROLE_TYPES } from '../constants/role.constants';

const RoleTypeBadge = ({ type, className }) => {
  const is_system = type === ROLE_TYPES.SYSTEM;

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-tight",
        is_system 
          ? "bg-indigo-50 text-indigo-700 border border-indigo-100" 
          : "bg-slate-50 text-slate-600 border border-slate-100",
        className
      )}
    >
      {type}
    </span>
  );
};

export default RoleTypeBadge;
