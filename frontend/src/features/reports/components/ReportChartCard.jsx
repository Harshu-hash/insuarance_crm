import React from 'react';
import { Card, CardContent, CardHeader } from '../../../components/ui/Card';
import { Download, MoreVertical, Maximize2 } from 'lucide-react';
import Button from '../../../components/ui/Button';

const ReportChartCard = ({ title, subtitle, children, isLoading }) => {
  return (
    <Card className="border-none shadow-sm shadow-slate-200/50 bg-white group">
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <div>
          <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">{title}</h3>
          {subtitle && <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{subtitle}</p>}
        </div>
        <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <Download size={14} className="text-slate-400" />
          </Button>
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <Maximize2 size={14} className="text-slate-400" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        {isLoading ? (
          <div className="h-64 bg-slate-50 animate-pulse rounded-xl flex items-center justify-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="h-8 w-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Generating Analysis...</span>
            </div>
          </div>
        ) : (
          <div className="h-64 w-full">
            {children}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ReportChartCard;
