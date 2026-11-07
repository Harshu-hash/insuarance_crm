import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import { cn } from '../../../utils/cn';

const ChartCard = ({ title, subtitle, children, isLoading, className }) => {
  return (
    <Card className={cn("border-none shadow-sm shadow-slate-200/50", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-sm font-bold text-text-primary tracking-tight">{title}</CardTitle>
            {subtitle && <p className="text-[10px] text-text-secondary font-medium mt-0.5">{subtitle}</p>}
          </div>
          {/* Action dots placeholder */}
          <div className="h-6 w-6 rounded-md hover:bg-slate-50 flex items-center justify-center cursor-pointer text-slate-400">
            <span className="text-lg leading-none">...</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-64 sm:h-72 lg:h-80 w-full relative">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-white/50 z-10">
            <div className="h-8 w-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          </div>
        ) : !children ? (
          <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-sm font-medium">
            No data available for selected filters
          </div>
        ) : null}
        <div className={cn("w-full h-full", isLoading && "opacity-20 transition-opacity")}>
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartCard;
