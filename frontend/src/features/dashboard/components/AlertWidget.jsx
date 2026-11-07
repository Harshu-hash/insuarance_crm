import React from 'react';
import { AlertCircle, ChevronRight } from 'lucide-react';
import { cn } from '../../../utils/cn';

const AlertWidget = ({ alerts = [], isLoading }) => {
  if (isLoading) return <div className="h-48 bg-white animate-pulse rounded-2xl border border-slate-100" />;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-50 flex items-center justify-between">
        <h3 className="text-sm font-bold text-text-primary flex items-center">
          <AlertCircle size={16} className="text-danger mr-2" />
          Attention Required
        </h3>
        <span className="text-[10px] font-bold px-2 py-0.5 bg-danger/10 text-danger rounded-full uppercase tracking-wider">
          {alerts.length} Critical
        </span>
      </div>
      <div className="divide-y divide-slate-50">
        {alerts.map((alert) => (
          <div key={alert.id} className="px-5 py-3 hover:bg-slate-50 transition-colors group cursor-pointer flex items-center justify-between">
            <div className="flex-1 min-w-0 pr-4">
              <p className="text-xs font-bold text-text-primary truncate">{alert.message}</p>
              <p className="text-[10px] text-text-secondary font-medium mt-0.5">{alert.module} Module</p>
            </div>
            <ChevronRight size={14} className="text-slate-300 group-hover:text-primary transition-colors flex-shrink-0" />
          </div>
        ))}
        {alerts.length === 0 && (
          <div className="p-8 text-center">
            <p className="text-xs text-slate-400">All operations are running smoothly.</p>
          </div>
        )}
      </div>
      <button className="w-full py-3 text-[10px] font-bold text-primary uppercase tracking-widest hover:bg-slate-50 transition-colors border-t border-slate-50">
        View All Alerts
      </button>
    </div>
  );
};

export default AlertWidget;
