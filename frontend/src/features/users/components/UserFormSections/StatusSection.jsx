import React from 'react';
import { ToggleLeft } from 'lucide-react';
import { Card, CardContent } from '../../../../components/ui/Card';
import Select from '../../../../components/ui/Select';
import { USER_STATUS, APPROVAL_STATUS } from '../../constants/user.constants';

const StatusSection = ({ register, errors }) => {
  return (
    <section className="space-y-4">
      <div className="flex items-center space-x-2 text-text-primary px-1">
        <ToggleLeft size={18} className="text-primary" />
        <h2 className="text-sm font-bold uppercase tracking-wider">Account Governance</h2>
      </div>
      <Card className="border-none shadow-sm shadow-slate-200/50">
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Account Status"
            {...register('status')}
            options={Object.entries(USER_STATUS).map(([key, value]) => ({ value, label: key.charAt(0) + key.slice(1).toLowerCase() }))}
            error={errors.status?.message}
          />
          <Select
            label="Approval State"
            {...register('approvalStatus')}
            options={Object.entries(APPROVAL_STATUS).map(([key, value]) => ({ value, label: key.charAt(0) + key.slice(1).toLowerCase() }))}
            error={errors.approvalStatus?.message}
          />
        </CardContent>
      </Card>
    </section>
  );
};

export default StatusSection;
