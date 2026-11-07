import React from 'react';
import { Banknote, TrendingUp, Wallet, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../../../utils/cn';

const BlockIncentiveCard = ({ metrics = {} }) => {
  const generated = metrics.incentiveGenerated || 0;
  
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col h-fit">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center gap-2">
        <Banknote className="h-4 w-4 text-emerald-600" />
        <h3 className="text-sm font-bold text-text-primary uppercase tracking-tight">BM Incentive Tracking</h3>
      </div>

      <div className="p-6 space-y-6">
        <div>
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1">Total Generated Incentive</p>
          <div className="flex items-baseline gap-2">
            <h4 className="text-3xl font-black text-emerald-600">₹{generated.toLocaleString()}</h4>
            <span className="text-xs font-bold text-emerald-600 flex items-center bg-emerald-50 px-1.5 py-0.5 rounded">
              <TrendingUp className="h-3 w-3 mr-1" />
              12.4%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-xl border border-emerald-100 bg-emerald-50/30">
            <div className="flex items-center gap-1.5 mb-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-tighter">Processed</p>
            </div>
            <p className="text-lg font-black text-emerald-900 leading-none">₹{(generated * 0.8).toLocaleString()}</p>
          </div>
          <div className="p-3 rounded-xl border border-slate-100 bg-slate-50">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Wallet className="h-3.5 w-3.5 text-slate-400" />
              <p className="text-[10px] font-bold text-text-secondary uppercase tracking-tighter">Pending</p>
            </div>
            <p className="text-lg font-black text-text-primary leading-none">₹{(generated * 0.2).toLocaleString()}</p>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-primary uppercase leading-none mb-1">Impact on DM Incentive</p>
            <p className="text-xs font-medium text-primary/70">District manager contribution</p>
          </div>
          <span className="text-sm font-black text-primary">₹{(generated * 0.1).toLocaleString()}</span>
        </div>
      </div>

      <div className="p-4 bg-slate-50 border-t border-border mt-auto flex items-center justify-between">
        <button className="text-[11px] font-bold text-primary hover:underline uppercase tracking-tight">View Ledger</button>
        <button className="text-[11px] font-bold text-primary hover:underline uppercase tracking-tight">Generate Report</button>
      </div>
    </div>
  );
};

export default BlockIncentiveCard;
