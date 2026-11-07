import React from 'react';
import { Card } from '../../../components/ui/Card';
import { FileText, CheckCircle2, XCircle } from 'lucide-react';

const PolicyCoverageCard = ({ policy }) => {
  return (
    <Card 
      title="Coverage Summary" 
      icon={<FileText className="h-5 w-5 text-blue-600" />}
    >
      <div className="space-y-6">
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
          <p className="text-sm text-slate-700 leading-relaxed font-medium italic">
            "{policy.coverageSummary}"
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            {policy.hospitalBillOnly ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            ) : (
              <XCircle className="h-4 w-4 text-rose-500" />
            )}
            <span className="text-xs font-bold text-slate-700 uppercase tracking-tight">Hospital Bill Only</span>
          </div>
          
          <div className="flex items-center space-x-2">
            {policy.maturityBenefit ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            ) : (
              <XCircle className="h-4 w-4 text-rose-500" />
            )}
            <span className="text-xs font-bold text-slate-700 uppercase tracking-tight">Maturity Benefit</span>
          </div>

          <div className="flex items-center space-x-2">
            {policy.accidentOnly ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            ) : (
              <XCircle className="h-4 w-4 text-rose-500" />
            )}
            <span className="text-xs font-bold text-slate-700 uppercase tracking-tight">Accident Only</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PolicyCoverageCard;
