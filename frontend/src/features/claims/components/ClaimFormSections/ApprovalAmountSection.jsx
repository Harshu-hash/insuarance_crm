import React from 'react';
import { Card } from '../../../../components/ui/Card';
import Input from '../../../../components/ui/Input';
import { Banknote, Info } from 'lucide-react';

const ApprovalAmountSection = ({ register, errors, claimedAmount }) => {
  return (
    <Card title="Approval Details" className="mb-6 bg-emerald-50/30 border-emerald-100">
      <div className="space-y-4">
        <Input
          label="Recommended Approved Amount (₹)"
          type="number"
          placeholder="Enter approved amount"
          {...register('approvedAmount')}
          error={errors.approvedAmount?.message}
          icon={<Banknote className="h-4 w-4 text-emerald-500" />}
          helperText={`Claimed Amount: ₹${claimedAmount?.toLocaleString()}`}
        />
        
        <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start space-x-2">
          <Info className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
          <p className="text-[10px] text-emerald-800 leading-relaxed font-medium">
            Standard Rule: The approved amount should not exceed the hospital bill or the claimed amount. Payout is processed only to the medical facility.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ApprovalAmountSection;
