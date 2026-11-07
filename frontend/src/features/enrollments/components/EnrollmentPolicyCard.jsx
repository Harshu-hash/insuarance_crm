import React from 'react';
import Card from '../../../components/ui/Card';
import { Shield, Info, Calendar } from 'lucide-react';
import PolicyActivationBadge from './PolicyActivationBadge';

const EnrollmentPolicyCard = ({ enrollment }) => {
  return (
    <Card title="Policy Details" icon={<Shield className="h-5 w-5 text-indigo-600" />}>
      <div className="space-y-4">
        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 mb-4">
          <h4 className="text-sm font-bold text-indigo-900">{enrollment.policyName}</h4>
          <p className="text-xs text-indigo-700 font-medium mt-0.5">{enrollment.policyCode} • {enrollment.policyYear}</p>
        </div>

        <div className="grid grid-cols-2 gap-y-4">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Status</span>
            <div className="mt-1">
              <PolicyActivationBadge status={enrollment.policyStatus} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Premium</span>
            <span className="text-sm font-bold text-slate-900 mt-1">₹{enrollment.premiumAmount}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Claim Eligibility</span>
            <span className={`text-xs font-bold mt-1 ${enrollment.claimEligibility === 'active' ? 'text-emerald-600' : 'text-rose-600'}`}>
              {enrollment.claimEligibility === 'active' ? 'Eligible' : 'Not Eligible'}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Coverage Note</span>
            <span className="text-xs text-slate-600 mt-1">Medical above ₹5000</span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-start space-x-2 text-slate-500">
          <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <p className="text-[10px] leading-relaxed">
            Policy is valid for the academic year {enrollment.policyYear}. Coverage includes accidental injury and hospitalization as per standard norms.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default EnrollmentPolicyCard;
