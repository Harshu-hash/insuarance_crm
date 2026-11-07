import React from 'react';
import { Card } from '../../../components/ui/Card';
import { ShieldCheck, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';
import Badge from '../../../components/ui/Badge';

const ClaimPolicyCard = ({ claim }) => {
  return (
    <Card 
      title="Policy & Enrollment" 
      icon={<ShieldCheck className="h-5 w-5 text-emerald-600" />}
    >
      <div className="space-y-4">
        <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
          <h4 className="text-sm font-black text-emerald-900 leading-tight">{claim.policyName}</h4>
          <span className="text-[10px] font-mono font-bold text-emerald-600 mt-1 block uppercase">{claim.policyCode}</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Policy Status</span>
            <Badge variant={claim.policyStatus === 'active' ? 'success' : 'error'} className="mt-1">
              {claim.policyStatus}
            </Badge>
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Premium Status</span>
            <Badge variant={claim.premiumStatus === 'paid' ? 'success' : 'error'} className="mt-1">
              {claim.premiumStatus}
            </Badge>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-50">
          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500">
            <span>Validity Period</span>
            <Calendar className="h-3 w-3" />
          </div>
          <div className="mt-1 text-xs font-bold text-slate-700">
            {claim.policyStartDate} to {claim.policyEndDate}
          </div>
        </div>

        {claim.policyStatus === 'active' && claim.premiumStatus === 'paid' ? (
          <div className="flex items-center space-x-2 text-[10px] text-emerald-600 font-bold uppercase">
            <CheckCircle2 className="h-3 w-3" />
            <span>Policy Eligible for Claim</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2 text-[10px] text-rose-600 font-bold uppercase">
            <AlertCircle className="h-3 w-3" />
            <span>Policy Issues Detected</span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ClaimPolicyCard;
