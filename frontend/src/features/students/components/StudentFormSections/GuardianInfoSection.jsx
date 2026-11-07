import React from 'react';
import Input from '../../../../components/ui/Input';
import { User, Phone, Mail } from 'lucide-react';

const GuardianInfoSection = ({ register, errors }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-6 w-1 bg-emerald-500 rounded-full" />
        <h3 className="text-sm font-black text-text-primary uppercase tracking-wider">Guardian Details</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          label="Guardian Full Name"
          placeholder="Name of parent or legal guardian..."
          {...register('guardianName')}
          error={errors.guardianName?.message}
          required
          icon={User}
        />
        <Input
          label="Relation to Student"
          placeholder="e.g. Father, Mother, Brother..."
          {...register('guardianRelation')}
          error={errors.guardianRelation?.message}
        />
        <Input
          label="Primary Mobile"
          placeholder="10-digit mobile number"
          {...register('guardianMobile')}
          error={errors.guardianMobile?.message}
          icon={Phone}
        />
        <Input
          label="Alternate Mobile"
          placeholder="Optional secondary contact"
          {...register('alternateMobile')}
          error={errors.alternateMobile?.message}
          icon={Phone}
        />
        <Input
          label="Guardian Email"
          placeholder="guardian@example.com"
          {...register('guardianEmail')}
          error={errors.guardianEmail?.message}
          icon={Mail}
        />
      </div>
    </div>
  );
};

export default GuardianInfoSection;
