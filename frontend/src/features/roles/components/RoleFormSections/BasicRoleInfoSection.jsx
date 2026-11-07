import React from 'react';
import Input from '../../../../components/ui/Input';
import { ROLE_TYPES } from '../../constants/role.constants';

const BasicRoleInfoSection = ({ register, errors, watch, setValue }) => {
  const roleType = watch('type');
  const isSystem = roleType === ROLE_TYPES.SYSTEM;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Role Name"
          placeholder="e.g. Operations Manager"
          {...register('name')}
          error={errors.name?.message}
          helperText="Enter a descriptive name for the role."
          required
        />

        <Input
          label="Role Key / Code"
          placeholder="e.g. operations_manager"
          {...register('key')}
          error={errors.key?.message}
          helperText="A unique, machine-readable key (lowercase with underscores)."
          required
          disabled={isSystem} // Prevent changing keys for system roles
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-text-primary mb-1.5">
          Description
        </label>
        <textarea
          className="w-full min-h-[100px] px-3 py-2 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none disabled:opacity-50 disabled:bg-slate-50"
          placeholder="Explain the intent and responsibilities of this role..."
          {...register('description')}
          disabled={isSystem}
        ></textarea>
        {errors.description && (
          <p className="mt-1.5 text-xs font-medium text-red-500">{errors.description.message}</p>
        )}
      </div>
    </div>
  );
};

export default BasicRoleInfoSection;
