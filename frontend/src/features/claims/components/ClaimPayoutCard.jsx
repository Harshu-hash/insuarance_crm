import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Banknote, TrendingUp, ArrowRight, Wallet } from 'lucide-react';
import ClaimPaymentStatusBadge from './ClaimPaymentStatusBadge';

const ClaimPayoutCard = ({ claim }) => {
  return (
    <Card 
      title="Hospital Payout Status" 
      icon={<Banknote className="h-5 w-5 text-emerald-600" />}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Payout Progress</span>
          <ClaimPaymentStatusBadge status={claim.payoutStatus} />
        </div>

        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center text-emerald-600 border border-emerald-100 shadow-sm">
              <TrendingUp className="h-4 w-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest block leading-none">Net Payout Amount</span>
              <h4 className="text-xl font-black text-emerald-900 mt-1">₹{claim.approvedAmount?.toLocaleString() || '0'}</h4>
            </div>
          </div>
          <ArrowRight className="h-5 w-5 text-emerald-200" />
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-400 uppercase tracking-tighter">Recipient</span>
            <span className="text-slate-700">{claim.hospitalName}</span>
          </div>
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-400 uppercase tracking-tighter">Settlement Method</span>
            <span className="text-slate-700">Direct Bank Transfer</span>
          </div>
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-400 uppercase tracking-tighter">Reference ID</span>
            <span className="text-slate-900 font-mono italic">PAY-88219-HT</span>
          </div>
        </div>

        <button className="w-full mt-2 p-2 bg-slate-900 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center space-x-2">
          <Wallet className="h-3 w-3" />
          <span>Manage Payout Workflow</span>
        </button>
      </div>
    </Card>
  );
};

export default ClaimPayoutCard;
