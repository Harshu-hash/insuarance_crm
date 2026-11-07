import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Banknote, TrendingUp, Info } from 'lucide-react';

const PolicyPremiumCard = ({ policy }) => {
  return (
    <Card 
      title="Premium Details" 
      icon={<Banknote className="h-5 w-5 text-emerald-600" />}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 rounded-xl bg-emerald-50 border border-emerald-100">
          <div>
            <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-widest block">Annual Premium</span>
            <h4 className="text-2xl font-black text-emerald-900">₹{policy.premiumAmount}</h4>
          </div>
          <TrendingUp className="h-8 w-8 text-emerald-200" />
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500 font-medium">Payment Frequency</span>
            <span className="text-slate-900 font-bold uppercase tracking-tight">Annual</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500 font-medium">Currency</span>
            <span className="text-slate-900 font-bold">INR (₹)</span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-start space-x-2 text-slate-400 italic">
          <Info className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
          <p className="text-[10px] leading-tight">
            Premium is calculated per student and is valid for one academic session ({policy.policyYear}).
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PolicyPremiumCard;
