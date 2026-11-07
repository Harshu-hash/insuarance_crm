import React from 'react';
import { Card } from '../../../../components/ui/Card';
import Input from '../../../../components/ui/Input';
import Select from '../../../../components/ui/Select';
import { Info, Shield } from 'lucide-react';
import { POLICY_TYPE } from '../../constants/policy.constants';

const BasicPolicyInfoSection = ({ register, errors }) => {
  return (
    <Card 
      title="Basic Policy Information" 
      icon={<Shield className="h-5 w-5 text-primary-600" />}
      className="mb-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Policy Name"
          placeholder="e.g. Standard Student Protection 2025"
          {...register('name')}
          error={errors.name?.message}
        />
        <Input
          label="Policy Code"
          placeholder="e.g. POL-STD-25"
          {...register('code')}
          error={errors.code?.message}
        />
        <Input
          label="Insurer Name"
          placeholder="e.g. National Insurance Co."
          {...register('insurer')}
          error={errors.insurer?.message}
        />
        <Select
          label="Policy Type"
          {...register('type')}
          error={errors.type?.message}
          options={Object.entries(POLICY_TYPE).map(([key, value]) => ({
            label: value.replace('_', ' ').charAt(0).toUpperCase() + value.replace('_', ' ').slice(1),
            value: value
          }))}
        />
      </div>
    </Card>
  );
};

export default BasicPolicyInfoSection;
