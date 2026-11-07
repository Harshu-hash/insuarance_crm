import React from 'react';
import { Card } from '../../../../components/ui/Card';
import Input from '../../../../components/ui/Input';
import Checkbox from '../../../../components/ui/Checkbox';
import { ClipboardCheck, AlertCircle } from 'lucide-react';

const ClaimRulesSection = ({ register, errors }) => {
  return (
    <Card 
      title="Claim Rules" 
      icon={<ClipboardCheck className="h-5 w-5 text-indigo-600" />}
      className="mb-6"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Minimum Medical Bill Threshold (₹)"
            type="number"
            placeholder="5000"
            {...register('claimThreshold')}
            error={errors.claimThreshold?.message}
            helperText="Claims below this amount will be automatically rejected."
          />
          <div className="flex items-center space-x-3 p-4 rounded-xl border border-indigo-50 bg-indigo-50/30">
            <Checkbox id="accidentOnly" {...register('accidentOnly')} />
            <label htmlFor="accidentOnly" className="text-sm font-semibold text-slate-700 cursor-pointer select-none">
              Accident-Only Coverage
            </label>
          </div>
        </div>

        <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800 leading-relaxed font-medium">
            Standard Rule: Claims are only eligible if the accidental medical/hospital bill exceeds ₹5,000 and payouts are made directly to the hospital.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ClaimRulesSection;
