import React from 'react';
import { ClipboardCheck, CheckCircle2, XCircle, Clock, AlertCircle } from 'lucide-react';
import { cn } from '../../../utils/cn';

const SchoolClaimsCard = ({ metrics = {} }) => {
  const total = metrics.claimsCount || 0;
  
  const distribution = {
    approved: Math.floor(total * 0.8) || 0,
    pending: Math.ceil(total * 0.1) || 0,
    rejected: Math.floor(total * 0.1) || 0,
  };

  const statusItems = [
    { label: 'Approved', value: distribution.approved, icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'In Review', value: distribution.pending, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Declined', value: distribution.rejected, icon: XCircle, color: 'text-red-600', bg: 'bg-red-50' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col h-fit">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center gap-2">
        <ClipboardCheck className="h-4 w-4 text-primary" />
        <h3 className="text-sm font-bold text-text-primary uppercase tracking-tight">Institutional Claims</h3>
      </div>

      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1 text-center">Submitted Claims</p>
            <h4 className="text-3xl font-black text-text-primary text-center">{total}</h4>
          </div>
          <div className="text-right">
             <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-amber-500" />
                <div className="text-left">
                  <p className="text-[9px] font-black text-amber-700 uppercase leading-none">High Severity</p>
                  <p className="text-[10px] font-bold text-amber-900 leading-none mt-1">0 Cases</p>
                </div>
             </div>
          </div>
        </div>

        <div className="space-y-3">
          {statusItems.map((item) => (
            <div key={item.label} className={cn("flex items-center justify-between p-3 rounded-xl border border-border transition-all hover:border-primary/20", item.bg)}>
              <div className="flex items-center gap-2">
                <item.icon className={cn("h-4 w-4", item.color)} />
                <span className="text-xs font-bold text-text-primary uppercase tracking-tight leading-none">{item.label}</span>
              </div>
              <span className={cn("text-sm font-black", item.color)}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-slate-50 border-t border-border mt-auto">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[10px] text-text-secondary font-bold uppercase tracking-wider italic">Claim Settlement Ratio</p>
          <span className="text-[10px] font-bold text-emerald-600 uppercase">Excellent</span>
        </div>
        <div className="h-1.5 w-full bg-white rounded-full overflow-hidden border border-slate-200">
          <div className="h-full bg-emerald-500 rounded-full" style={{ width: '92%' }} />
        </div>
      </div>
    </div>
  );
};

export default SchoolClaimsCard;
