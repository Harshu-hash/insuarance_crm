import React from 'react';
import Card from '../../../components/ui/Card';
import { Gift, Wallet, TrendingUp, Info } from 'lucide-react';

const EnrollmentIncentiveCard = ({ enrollment }) => {
  return (
    <Card title="Incentive Attribution" icon={<Gift className="h-5 w-5 text-purple-600" />}>
      <div className="space-y-5">
        <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-purple-900 uppercase tracking-widest flex items-center">
              <TrendingUp className="h-3.5 w-3.5 mr-1" />
              Total Incentive
            </span>
            <span className="text-lg font-black text-purple-900">₹{(enrollment.bmIncentive + enrollment.dmIncentive).toFixed(2)}</span>
          </div>
          <div className="h-2 bg-purple-200 rounded-full overflow-hidden flex">
            <div className="h-full bg-purple-600 w-2/3" title="BM Share" />
            <div className="h-full bg-purple-400 w-1/3" title="DM Share" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900">{enrollment.bmName}</span>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Block Manager</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-black text-slate-900">₹{enrollment.bmIncentive.toFixed(2)}</span>
              <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-tighter">Generated</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900">{enrollment.dmName}</span>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">District Manager</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-black text-slate-900">₹{enrollment.dmIncentive.toFixed(2)}</span>
              <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-tighter">Generated</span>
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-2 text-slate-400 pt-2">
          <Info className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
          <p className="text-[10px] italic leading-tight">
            Incentives are calculated based on standard business rules: BM (₹5), DM (₹2) for successful paid enrollments.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default EnrollmentIncentiveCard;
