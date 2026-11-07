import React from 'react';
import { Card } from '../../../../components/ui/Card';
import Input from '../../../../components/ui/Input';
import { Calendar } from 'lucide-react';

const ValiditySection = ({ register, errors }) => {
  return (
    <Card 
      title="Validity & Duration" 
      icon={<Calendar className="h-5 w-5 text-amber-600" />}
      className="mb-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Input
          label="Policy Year"
          placeholder="e.g. 2025-2026"
          {...register('policyYear')}
          error={errors.policyYear?.message}
        />
        <Input
          label="Start Date"
          type="date"
          {...register('startDate')}
          error={errors.startDate?.message}
        />
        <Input
          label="End Date"
          type="date"
          {...register('endDate')}
          error={errors.endDate?.message}
        />
      </div>
    </Card>
  );
};

export default ValiditySection;
