import React from 'react';
import { Card, CardContent } from '../../../components/ui/Card';
import { cn } from '../../../utils/cn';
import * as LucideIcons from 'lucide-react';

const ReportSummaryCard = ({ title, value, icon, trend, trendValue, color = "primary", isLoading, subtitle }) => {
  const IconComponent = LucideIcons[icon] || LucideIcons.Activity;

  if (isLoading) {
    return (
      <Card className="animate-pulse border-none shadow-sm shadow-slate-200/50">
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="h-3 w-16 bg-slate-100 rounded"></div>
            <div className="h-8 w-8 bg-slate-50 rounded-lg"></div>
          </div>
          <div className="h-8 w-24 bg-slate-100 rounded mb-2"></div>
          <div className="h-3 w-32 bg-slate-50 rounded"></div>
        </CardContent>
      </Card>
    );
  }

  const formatValue = (val) => {
    if (typeof val !== 'number') return val;
    if (title.toLowerCase().includes('premium') || title.toLowerCase().includes('payout') || title.toLowerCase().includes('amount') || title.toLowerCase().includes('incentive')) {
      if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)}Cr`;
      if (val >= 100000) return `₹${(val / 100000).toFixed(2)}L`;
      return `₹${val.toLocaleString('en-IN')}`;
    }
    return val.toLocaleString();
  };

  return (
    <Card className="hover:shadow-md transition-all duration-200 border-none shadow-sm shadow-slate-200/50 group bg-white">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{title}</p>
          <div className={cn(
            "p-2 rounded-xl bg-slate-50 text-slate-400 group-hover:scale-110 transition-transform",
            color === 'danger' && "text-danger/70 bg-danger/5",
            color === 'warning' && "text-warning/70 bg-warning/5",
            color === 'success' && "text-success/70 bg-success/5",
            color === 'primary' && "text-primary/70 bg-primary/5"
          )}>
            <IconComponent size={18} />
          </div>
        </div>
        
        <div className="flex flex-col">
          <h3 className="text-2xl font-black text-slate-800 tracking-tight leading-none mb-2">
            {formatValue(value)}
          </h3>
          
          <div className="flex items-center space-x-2">
            {trend && (
              <span className={cn(
                "text-[10px] font-black px-1.5 py-0.5 rounded flex items-center",
                trend === 'up' ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
              )}>
                {trend === 'up' ? '▲' : '▼'} {trendValue}%
              </span>
            )}
            {subtitle && (
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter truncate">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportSummaryCard;
