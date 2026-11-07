import React from 'react';
import { ClipboardCheck, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { cn } from '../../../utils/cn';

const BlockClaimsCard = ({ metrics = {} }) => {
  const total = metrics.claimsCount || 0;
  
  // Dummy distribution for block operational depth
  const distribution = {
    approved: Math.floor(total * 0.7),
    pending: Math.ceil(total * 0.2),
    rejected: Math.floor(total * 0.1),
  };

  const statusItems = [
    { label: 'Approved', value: distribution.approved, icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Pending', value: distribution.pending, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Rejected', value: distribution.rejected, icon: XCircle, color: 'text-red-600', bg: 'bg-red-50' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col h-fit">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center gap-2">
        <ClipboardCheck className="h-4 w-4 text-primary" />
        <h3 className="text-sm font-bold text-text-primary uppercase tracking-tight">Block Claims Intake</h3>
      </div>

      <div className="p-6 space-y-6">
        <div>
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1">Total Submission Volume</p>
          <div className="flex items-baseline gap-2">
            <h4 className="text-3xl font-black text-text-primary">{total}</h4>
            <span className="text-[10px] font-bold text-text-secondary uppercase">All Time</span>
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
          <p className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">Settlement Health</p>
          <span className="text-[10px] font-bold text-emerald-600 uppercase">Strong</span>
        </div>
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 rounded-full" style={{ width: '88%' }} />
        </div>
      </div>
    </div>
  );
};

export default BlockClaimsCard;
