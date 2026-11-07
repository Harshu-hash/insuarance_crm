import React from 'react';
import { Banknote, TrendingUp, Wallet, ArrowUpRight, History } from 'lucide-react';
import { cn } from '../../../utils/cn';

const SchoolFinanceCard = ({ metrics = {} }) => {
  const collected = metrics.premiumCollected || 0;
  
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col h-fit">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center gap-2">
        <Banknote className="h-4 w-4 text-emerald-600" />
        <h3 className="text-sm font-bold text-text-primary uppercase tracking-tight">Institutional Revenue</h3>
      </div>

      <div className="p-6 flex flex-col items-center text-center">
        <div className="h-14 w-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 shadow-inner">
           <Wallet className="h-7 w-7" />
        </div>
        <p className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] mb-1">Total Premium Collected</p>
        <h4 className="text-3xl font-black text-text-primary mb-1">₹{collected.toLocaleString()}</h4>
        <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 uppercase tracking-tighter">
           <ArrowUpRight className="h-3 w-3" />
           Top Tier Contributor
        </div>
      </div>

      <div className="px-6 py-4 border-t border-slate-50 space-y-4">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-2">
              <History className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-[10px] font-bold text-text-secondary uppercase">Recent Activity</span>
           </div>
           <span className="text-[10px] font-black text-primary uppercase">+₹12,400</span>
        </div>
        
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
          <div className="flex justify-between items-center mb-1">
             <span className="text-[9px] font-bold text-text-secondary uppercase">Collection Target</span>
             <span className="text-[9px] font-bold text-text-primary uppercase">92%</span>
          </div>
          <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
             <div className="h-full bg-emerald-500 rounded-full" style={{ width: '92%' }} />
          </div>
        </div>
      </div>
      
      <div className="p-3 bg-emerald-600">
         <button className="w-full text-[10px] font-black text-white uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            Generate Finance Report
            <ArrowUpRight className="h-3 w-3" />
         </button>
      </div>
    </div>
  );
};

export default SchoolFinanceCard;
