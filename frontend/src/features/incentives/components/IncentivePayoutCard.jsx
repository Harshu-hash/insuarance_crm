import React from 'react';
import { Card, CardContent } from '../../../components/ui/Card';
import { CreditCard, Calendar, CheckCircle2, Clock } from 'lucide-react';
import IncentiveStatusBadge from './IncentiveStatusBadge';

const IncentivePayoutCard = ({ incentive }) => {
  return (
    <Card className="border-none shadow-sm shadow-slate-200/50">
      <CardContent className="p-6">
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center">
          <CreditCard size={14} className="mr-2" /> Payout Status
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Current Status</span>
            <IncentiveStatusBadge status={incentive.status} />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center space-x-3">
              <Calendar size={14} className="text-slate-400" />
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase block">Generated</span>
                <p className="text-xs font-bold text-slate-700">{new Date(incentive.generatedDate).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle2 size={14} className="text-slate-400" />
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase block">Paid Date</span>
                <p className="text-xs font-bold text-slate-700">{incentive.paidDate ? new Date(incentive.paidDate).toLocaleDateString() : 'Pending'}</p>
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
             <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 mb-1">
                <span>PAYOUT BATCH</span>
                <span className="text-primary">BATCH-442</span>
             </div>
             <div className="flex items-center justify-between text-[10px] font-bold text-slate-500">
                <span>REF NUMBER</span>
                <span className="font-mono">REF-88221</span>
             </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IncentivePayoutCard;
