import React from 'react';
import { User, ShieldAlert } from 'lucide-react';
import { cn } from '../../../utils/cn';

const DistrictManagerBadge = ({ manager, className }) => {
  if (!manager) {
    return (
      <span className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-tight bg-amber-50 text-amber-700 border border-amber-100",
        className
      )}>
        <ShieldAlert className="h-3 w-3" />
        Unassigned
      </span>
    );
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
        <User className="h-3 w-3" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-bold text-text-primary leading-none">{manager.name}</span>
        <span className="text-[10px] text-text-secondary truncate max-w-[120px]">{manager.email}</span>
      </div>
    </div>
  );
};

export default DistrictManagerBadge;
