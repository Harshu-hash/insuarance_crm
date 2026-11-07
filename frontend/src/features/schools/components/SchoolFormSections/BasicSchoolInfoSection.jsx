import React from 'react';
import Input from '../../../../components/ui/Input';
import Select from '../../../../components/ui/Select';
import { SCHOOL_TYPE, SCHOOL_TYPE_LABELS } from '../../constants/school.constants';

const BasicSchoolInfoSection = ({ register, errors }) => {
  const typeOptions = Object.entries(SCHOOL_TYPE_LABELS).map(([value, label]) => ({
    value,
    label
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-6 w-1 bg-primary rounded-full" />
        <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">Institutional Identity</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          label="School Name"
          placeholder="e.g. GGIC Lucknow North"
          {...register('name')}
          error={errors.name?.message}
          required
        />
        <Input
          label="School Code"
          placeholder="e.g. GGIC-LKO-01"
          {...register('code')}
          error={errors.code?.message}
          required
        />
        <Select
          label="School Type"
          {...register('schoolType')}
          options={typeOptions}
          error={errors.schoolType?.message}
          required
        />
        <Input
          label="Institutional Description"
          placeholder="Optional school overview..."
          {...register('description')}
          error={errors.description?.message}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
        <Input
          label="Address Line 1"
          placeholder="Building, Street..."
          {...register('address.line1')}
          error={errors.address?.line1?.message}
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="City"
            placeholder="Lucknow"
            {...register('address.city')}
          />
          <Input
            label="Pincode"
            placeholder="226001"
            {...register('address.pincode')}
            error={errors.address?.pincode?.message}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicSchoolInfoSection;
