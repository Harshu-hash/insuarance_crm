import React from 'react';
import { Card } from '../../../../components/ui/Card';
import Select from '../../../../components/ui/Select';
import { AlertCircle } from 'lucide-react';

const RejectionReasonSection = ({ register, errors }) => {
  const reasons = [
    { label: 'Policy Inactive on Accident Date', value: 'policy_inactive' },
    { label: 'Bill Amount Below Threshold (₹5,000)', value: 'below_threshold' },
    { label: 'Injury Not Accident-Related', value: 'not_accidental' },
    { label: 'Fraudulent Documentation Detected', value: 'fraud' },
    { label: 'Duplicate Claim Submission', value: 'duplicate' },
    { label: 'Outside Coverage Scope', value: 'outside_scope' },
    { label: 'Other (Specify in Notes)', value: 'other' },
  ];

  return (
    <Card title="Rejection Context" className="mb-6 bg-rose-50/30 border-rose-100">
      <div className="space-y-4">
        <Select
          label="Primary Rejection Reason"
          {...register('rejectionReason')}
          error={errors.rejectionReason?.message}
          options={reasons}
        />
        
        <div className="p-3 bg-rose-50 rounded-xl border border-rose-100 flex items-start space-x-2">
          <AlertCircle className="h-4 w-4 text-rose-600 flex-shrink-0 mt-0.5" />
          <p className="text-[10px] text-rose-800 leading-relaxed font-medium">
            Warning: Rejecting a claim is a final action. Ensure all documents have been reviewed and the rejection reason is legally defensible.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default RejectionReasonSection;
