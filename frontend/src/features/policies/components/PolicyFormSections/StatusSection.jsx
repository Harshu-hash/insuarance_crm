import React from 'react';
import { Card } from '../../../../components/ui/Card';
import Select from '../../../../components/ui/Select';
import { ToggleRight } from 'lucide-react';
import { POLICY_STATUS } from '../../constants/policy.constants';

const StatusSection = ({ register, errors }) => {
  return (
    <Card 
      title="Policy Status" 
      icon={<ToggleRight className="h-5 w-5 text-slate-600" />}
      className="mb-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Current Status"
          {...register('status')}
          error={errors.status?.message}
          options={Object.values(POLICY_STATUS).map(status => ({
            label: status.charAt(0).toUpperCase() + status.slice(1),
            value: status
          }))}
        />
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            Internal Remarks
          </label>
          <textarea
            placeholder="Private notes about this policy version..."
            className="w-full h-20 p-3 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
            {...register('notes')}
          />
        </div>
      </div>
    </Card>
  );
};

export default StatusSection;
