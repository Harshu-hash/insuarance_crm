import React from 'react';
import { Shield } from 'lucide-react';
import { Card, CardContent } from '../../../../components/ui/Card';
import Select from '../../../../components/ui/Select';
import { USER_ROLES, ROLE_LABELS } from '../../constants/user.constants';

const RoleAssignmentSection = ({ register, errors }) => {
  const roleOptions = Object.entries(ROLE_LABELS).map(([value, label]) => ({
    value,
    label
  }));

  return (
    <section className="space-y-4">
      <div className="flex items-center space-x-2 text-text-primary px-1">
        <Shield size={18} className="text-primary" />
        <h2 className="text-sm font-bold uppercase tracking-wider">Role & Permissions</h2>
      </div>
      <Card className="border-none shadow-sm shadow-slate-200/50">
        <CardContent className="p-6">
          <div className="max-w-md">
            <Select
              label="Primary User Role"
              {...register('role')}
              options={roleOptions}
              error={errors.role?.message}
              placeholder="Select a functional role"
            />
            <p className="mt-2 text-[10px] text-text-secondary leading-relaxed italic">
              * Role selection determines accessible modules and geographic scope requirements.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default RoleAssignmentSection;
