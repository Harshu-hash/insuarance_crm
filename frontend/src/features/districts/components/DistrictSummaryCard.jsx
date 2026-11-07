import React from 'react';
import { cn } from '../../../utils/cn';

const DistrictSummaryCard = ({ label, value, icon: Icon, trend, trendLabel, color = 'primary' }) => {
  const colorMap = {
    primary: 'text-primary bg-primary/10 border-primary/20',
    success: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    warning: 'text-amber-600 bg-amber-50 border-amber-100',
    danger: 'text-red-600 bg-red-50 border-red-100',
    info: 'text-blue-600 bg-blue-50 border-blue-100',
    slate: 'text-slate-600 bg-slate-50 border-slate-100',
  };

  return (
    <div className="bg-white p-4 rounded-2xl border border-border shadow-sm flex items-center justify-between group hover:border-primary/30 transition-all">
      <div className="space-y-1">
        <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">{label}</p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-black text-text-primary">{value}</h3>
          {trend && (
            <span className={cn(
              "text-[10px] font-bold px-1.5 py-0.5 rounded",
              trend > 0 ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
            )}>
              {trend > 0 ? '+' : ''}{trend}%
            </span>
          )}
        </div>
        {trendLabel && (
          <p className="text-[10px] text-text-secondary leading-none">{trendLabel}</p>
        )}
      </div>

      <div className={cn(
        "h-12 w-12 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-110",
        colorMap[color] || colorMap.primary
      )}>
        {Icon && <Icon className="h-6 w-6" />}
      </div>
    </div>
  );
};

export default DistrictSummaryCard;
