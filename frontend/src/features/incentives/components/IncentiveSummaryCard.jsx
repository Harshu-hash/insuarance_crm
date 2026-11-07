import React from 'react';
import { Card, CardContent } from '../../../components/ui/Card';
import { cn } from '../../../utils/cn';
import * as LucideIcons from 'lucide-react';

const IncentiveSummaryCard = ({ title, value, icon, trend, trendValue, color = "primary", isLoading, subtitle }) => {
  const IconComponent = LucideIcons[icon] || LucideIcons.Activity;

  if (isLoading) {
    return (
      <Card className="animate-pulse border-none shadow-sm shadow-slate-200/50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="h-3 w-20 bg-slate-100 rounded"></div>
            <div className="h-8 w-8 bg-slate-50 rounded-lg"></div>
          </div>
          <div className="h-6 w-24 bg-slate-100 rounded"></div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-md transition-shadow duration-200 border-none shadow-sm shadow-slate-200/50 group">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{title}</p>
          <div className={cn(
            "p-2 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors",
            color === 'danger' && "group-hover:bg-danger",
            color === 'warning' && "group-hover:bg-warning",
            color === 'success' && "group-hover:bg-success"
          )}>
            <IconComponent size={16} />
          </div>
        </div>
        
        <div className="flex items-baseline space-x-2">
          <h3 className="text-xl font-black text-slate-800 tracking-tight">
            {typeof value === 'number' && !title.toLowerCase().includes('count')
              ? `₹${value.toLocaleString('en-IN')}` 
              : value?.toLocaleString()}
          </h3>
          {trend && (
            <span className={cn(
              "text-[9px] font-black px-1 py-0.5 rounded",
              trend === 'up' ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
            )}>
              {trend === 'up' ? '▲' : '▼'} {trendValue}%
            </span>
          )}
        </div>
        
        {subtitle && (
          <p className="text-[10px] text-slate-400 font-medium mt-1 uppercase tracking-tighter">
            {subtitle}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default IncentiveSummaryCard;
