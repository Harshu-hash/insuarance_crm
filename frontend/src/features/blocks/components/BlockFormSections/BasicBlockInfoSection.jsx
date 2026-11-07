import React from 'react';
import Input from '../../../../components/ui/Input';

const BasicBlockInfoSection = ({ register, errors }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Block Name"
          placeholder="e.g. Bakshi Ka Talab"
          {...register('name')}
          error={errors.name?.message}
          required
        />
        <Input
          label="Block Code"
          placeholder="e.g. BKT"
          {...register('code')}
          error={errors.code?.message}
          required
          helperText="Uppercase alphanumeric (2-10 chars)"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-text-primary mb-1.5">
          Description / Operational Remarks
        </label>
        <textarea
          className="w-full min-h-[100px] px-3 py-2 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
          placeholder="Key notes about field operations in this block..."
          {...register('description')}
        ></textarea>
        {errors.description && (
          <p className="mt-1.5 text-xs font-medium text-red-500">{errors.description.message}</p>
        )}
      </div>
    </div>
  );
};

export default BasicBlockInfoSection;
