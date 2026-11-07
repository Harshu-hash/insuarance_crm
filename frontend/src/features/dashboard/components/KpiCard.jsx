import React from 'react';
import { Card, CardContent } from '../../../components/ui/Card';
import { cn } from '../../../utils/cn';
import * as LucideIcons from 'lucide-react';

const KpiCard = ({ title, value, icon, trend, trendValue, color = "primary", isLoading }) => {
  const IconComponent = LucideIcons[icon] || LucideIcons.Activity;

  if (isLoading) {
    return (
      <Card className="animate-pulse">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="h-4 w-24 bg-slate-100 rounded"></div>
            <div className="h-8 w-8 bg-slate-50 rounded-lg"></div>
          </div>
          <div className="h-7 w-16 bg-slate-100 rounded mb-2"></div>
          <div className="h-3 w-32 bg-slate-50 rounded"></div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-md transition-shadow duration-200 border-none shadow-sm shadow-slate-200/50 overflow-hidden group">
      <CardContent className="p-4 relative">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">{title}</p>
          <div className={cn(
            "p-2 rounded-xl transition-colors group-hover:bg-primary group-hover:text-white",
            `bg-${color}/10 text-${color}`
          )}>
            <IconComponent size={18} />
          </div>
        </div>
        
        <div className="flex items-baseline space-x-2">
          <h3 className="text-xl font-black text-text-primary tracking-tight">
            {typeof value === 'number' && title.toLowerCase().includes('premium') 
              ? `₹${(value / 100000).toFixed(1)}L` 
              : value?.toLocaleString()}
          </h3>
          {trend && (
            <span className={cn(
              "text-[10px] font-bold px-1.5 py-0.5 rounded-md",
              trend === 'up' ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
            )}>
              {trend === 'up' ? '+' : '-'}{trendValue}%
            </span>
          )}
        </div>
        
        <p className="text-[10px] text-slate-400 font-medium mt-1">
          vs previous policy year
        </p>
      </CardContent>
    </Card>
  );
};

export default KpiCard;
