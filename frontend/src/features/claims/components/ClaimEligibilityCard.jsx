import React from 'react';
import { Card } from '../../../components/ui/Card';
import { ShieldCheck, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import ClaimEligibilityBadge from './ClaimEligibilityBadge';

const ClaimEligibilityCard = ({ eligibility }) => {
  return (
    <Card 
      title="Policy Eligibility Checks" 
      icon={<ShieldCheck className="h-5 w-5 text-emerald-600" />}
    >
      <div className="space-y-3">
        {eligibility.map((check) => (
          <div 
            key={check.id} 
            className="flex items-center justify-between p-3 rounded-xl border border-slate-50 bg-slate-50/50"
          >
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                {check.status === 'pass' && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                {check.status === 'fail' && <XCircle className="h-4 w-4 text-rose-500" />}
                {check.status === 'warning' && <AlertTriangle className="h-4 w-4 text-amber-500" />}
              </div>
              <span className="text-xs font-bold text-slate-700">{check.label}</span>
            </div>
            <ClaimEligibilityBadge status={check.status} />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ClaimEligibilityCard;
