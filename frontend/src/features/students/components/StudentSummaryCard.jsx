import React from 'react';
import { cn } from '../../../utils/cn';

const StudentSummaryCard = ({ label, value, icon: Icon, color = 'primary', subValue, trend }) => {
  const colorThemes = {
    primary: 'bg-primary/5 text-primary border-primary/20',
    success: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    warning: 'bg-amber-50 text-amber-600 border-amber-200',
    info: 'bg-blue-50 text-blue-600 border-blue-200',
    danger: 'bg-red-50 text-red-600 border-red-200',
    indigo: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    slate: 'bg-slate-50 text-slate-600 border-slate-200',
  };

  const theme = colorThemes[color] || colorThemes.primary;

  return (
    <div className="bg-white p-4 rounded-xl border border-border shadow-sm flex items-center gap-4 group hover:border-primary/30 transition-all">
      <div className={cn("p-3 rounded-lg border transition-transform group-hover:rotate-6", theme)}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[9px] font-black text-text-secondary uppercase tracking-[0.1em] leading-none mb-1.5 truncate">{label}</p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-xl font-black text-text-primary leading-none">{value}</h3>
          {trend && (
            <span className={cn("text-[9px] font-bold px-1 py-0.5 rounded-full", trend > 0 ? 'text-emerald-700 bg-emerald-100' : 'text-amber-700 bg-amber-100')}>
              {trend > 0 ? '+' : ''}{trend}%
            </span>
          )}
        </div>
        {subValue && (
          <p className="text-[9px] text-text-secondary mt-1 font-bold uppercase tracking-tight truncate border-l border-border pl-1.5">{subValue}</p>
        )}
      </div>
    </div>
  );
};

export default StudentSummaryCard;
