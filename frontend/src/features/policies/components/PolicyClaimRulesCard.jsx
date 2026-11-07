import React from 'react';
import { Card } from '../../../components/ui/Card';
import { ClipboardCheck, AlertCircle, Info } from 'lucide-react';

const PolicyClaimRulesCard = ({ policy }) => {
  return (
    <Card 
      title="Claim Eligibility Rules" 
      icon={<ClipboardCheck className="h-5 w-5 text-indigo-600" />}
    >
      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] uppercase font-bold text-indigo-700 tracking-widest">Min. Bill Threshold</span>
            <AlertCircle className="h-3.5 w-3.5 text-indigo-400" />
          </div>
          <h4 className="text-xl font-black text-indigo-900">₹{policy.claimThreshold}</h4>
          <p className="text-[10px] text-indigo-600 font-bold mt-1 uppercase tracking-tighter">
            * Claims below this amount are ineligible
          </p>
        </div>

        <ul className="space-y-3 pt-2">
          <li className="flex items-start space-x-3">
            <div className="h-4 w-4 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[10px] font-bold text-slate-500">1</span>
            </div>
            <p className="text-xs text-slate-700 font-medium leading-relaxed">
              Medical expenses must be related to an accidental injury.
            </p>
          </li>
          <li className="flex items-start space-x-3">
            <div className="h-4 w-4 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[10px] font-bold text-slate-500">2</span>
            </div>
            <p className="text-xs text-slate-700 font-medium leading-relaxed">
              Payouts are made only to authorized medical facilities/hospitals.
            </p>
          </li>
          <li className="flex items-start space-x-3">
            <div className="h-4 w-4 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[10px] font-bold text-slate-500">3</span>
            </div>
            <p className="text-xs text-slate-700 font-medium leading-relaxed">
              Discharge summary and original bills are mandatory for processing.
            </p>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default PolicyClaimRulesCard;
