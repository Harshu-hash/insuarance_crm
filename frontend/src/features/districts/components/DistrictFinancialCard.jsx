import React from 'react';
import { Banknote, TrendingUp, Wallet, ArrowUpRight } from 'lucide-react';
import { cn } from '../../../utils/cn';

const DistrictFinancialCard = ({ metrics = {} }) => {
  const premium = metrics.premiumCollected || 0;
  const incentives = metrics.incentivesGenerated || 0;
  
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center gap-2">
        <Banknote className="h-4 w-4 text-primary" />
        <h3 className="text-sm font-bold text-text-primary">Financial Summary</h3>
      </div>

      <div className="p-6 space-y-6">
        {/* Main Metric */}
        <div>
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-1">Total Premium Collected</p>
          <div className="flex items-baseline gap-2">
            <h4 className="text-3xl font-black text-text-primary">₹{(premium / 100000).toFixed(1)}L</h4>
            <span className="text-xs font-bold text-emerald-600 flex items-center">
              <ArrowUpRight className="h-3 w-3" />
              8.4%
            </span>
          </div>
        </div>

        {/* Breakdown */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100">
            <p className="text-[10px] font-bold text-blue-700 uppercase mb-1">Incentives</p>
            <p className="text-sm font-bold text-blue-900 leading-none">₹{(incentives / 1000).toFixed(1)}K</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <p className="text-[10px] font-bold text-text-secondary uppercase mb-1">Payout Ratio</p>
            <p className="text-sm font-bold text-text-primary leading-none">12.5%</p>
          </div>
        </div>

        {/* Health Indicator */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold text-text-secondary uppercase">Collection Health</span>
            <span className="text-[10px] font-bold text-emerald-600 uppercase">Strong</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: '85%' }} />
          </div>
        </div>
      </div>

      <div className="p-4 bg-slate-50 border-t border-border mt-auto flex items-center justify-between">
        <button className="text-[11px] font-bold text-primary hover:underline">Download Report</button>
        <button className="text-[11px] font-bold text-primary hover:underline">View Transactions</button>
      </div>
    </div>
  );
};

export default DistrictFinancialCard;
