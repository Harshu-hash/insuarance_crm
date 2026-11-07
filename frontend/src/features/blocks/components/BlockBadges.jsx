import React from 'react';
import { BLOCK_STATUS_COLORS } from '../constants/block.constants';
import { cn } from '../../../utils/cn';

export const BlockStatusBadge = ({ status }) => {
  const colorClass = BLOCK_STATUS_COLORS[status] || 'text-slate-600 bg-slate-50 border-slate-100';
  
  return (
    <span className={cn(
      "px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border",
      colorClass
    )}>
      {status}
    </span>
  );
};

export const BlockManagerBadge = ({ manager }) => {
  if (!manager) {
    return (
      <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 uppercase tracking-tighter">
        Unassigned
      </span>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary border border-primary/20">
        {manager.name.charAt(0)}
      </div>
      <span className="text-xs font-bold text-text-primary">{manager.name}</span>
    </div>
  );
};
