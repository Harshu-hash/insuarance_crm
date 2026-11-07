import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Banknote, CheckCircle2, XCircle, Info, Calculator } from 'lucide-react';

const ClaimBillCard = ({ claim }) => {
  const isAboveThreshold = claim.billAmount >= 5000;

  return (
    <Card 
      title="Bill & Payout Details" 
      icon={<Banknote className="h-5 w-5 text-indigo-600" />}
    >
      <div className="space-y-4">
        <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest block">Total Bill Amount</span>
            <h4 className="text-2xl font-black text-indigo-900 leading-none mt-1">₹{claim.billAmount.toLocaleString()}</h4>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest block">Claimed</span>
            <h4 className="text-lg font-black text-indigo-700 leading-none mt-1">₹{claim.claimedAmount.toLocaleString()}</h4>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between text-xs p-3 rounded-lg bg-slate-50 border border-slate-100">
            <div className="flex items-center text-slate-500 font-bold uppercase tracking-tighter">
              <Calculator className="h-3.5 w-3.5 mr-2" />
              Min. Eligibility Threshold
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-slate-900 font-bold">₹5,000</span>
              {isAboveThreshold ? (
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              ) : (
                <XCircle className="h-4 w-4 text-rose-500" />
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 rounded-lg border border-emerald-100 bg-emerald-50/50">
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block">Approved Amount</span>
              <h4 className="text-lg font-black text-emerald-900 mt-1">
                {claim.approvedAmount ? `₹${claim.approvedAmount.toLocaleString()}` : '—'}
              </h4>
            </div>
            <div className="p-3 rounded-lg border border-slate-100 bg-slate-50">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Non-Payable</span>
              <h4 className="text-lg font-black text-slate-900 mt-1">
                {claim.approvedAmount ? `₹${(claim.claimedAmount - claim.approvedAmount).toLocaleString()}` : '—'}
              </h4>
            </div>
          </div>
        </div>

        <div className="pt-2 flex items-start space-x-2 text-[10px] text-slate-400 font-medium italic">
          <Info className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
          <p>Standard policy rules: Claims are eligible only if hospital bill exceeds ₹5,000. Payout is processed directly to the medical facility.</p>
        </div>
      </div>
    </Card>
  );
};

export default ClaimBillCard;
