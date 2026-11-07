import React from 'react';
import { Settings, ShieldCheck, Eye } from 'lucide-react';
import { SCHOOL_STATUS } from '../../constants/school.constants';
import Select from '../../../../components/ui/Select';

const OperationalSettingsSection = ({ register, errors, watch }) => {
  const currentStatus = watch('status');

  const statusOptions = [
    { value: SCHOOL_STATUS.ACTIVE, label: 'Active (Operational)' },
    { value: SCHOOL_STATUS.INACTIVE, label: 'Inactive (Registry Only)' },
    { value: SCHOOL_STATUS.ARCHIVED, label: 'Archived (Historical)' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-6 w-1 bg-slate-500 rounded-full" />
        <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">Operational Configuration</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Status Select */}
        <div className="space-y-2">
          <Select
            label="System Status"
            {...register('status')}
            options={statusOptions}
            error={errors.status?.message}
            required
          />
          <p className="text-[10px] text-text-secondary leading-tight">
            Inactive schools are hidden from the student registration app.
          </p>
        </div>

        {/* Enrollment Toggle */}
        <div className="p-4 rounded-xl border border-border bg-slate-50/50 flex items-start gap-3">
          <div className="h-8 w-8 rounded-lg bg-white border border-border flex items-center justify-center text-primary shadow-sm">
             <ShieldCheck className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
             <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold text-text-primary uppercase tracking-tight">Accept Enrollments</p>
                <input 
                  type="checkbox" 
                  {...register('operationalSettings.enrollmentEnabled')}
                  className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4"
                />
             </div>
             <p className="text-[9px] text-text-secondary mt-1">Allows this school to issue new insurance policies for students.</p>
          </div>
        </div>

        {/* Visibility Toggle */}
        <div className="p-4 rounded-xl border border-border bg-slate-50/50 flex items-start gap-3">
          <div className="h-8 w-8 rounded-lg bg-white border border-border flex items-center justify-center text-slate-500 shadow-sm">
             <Eye className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
             <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold text-text-primary uppercase tracking-tight">Public Visibility</p>
                <input 
                  type="checkbox" 
                  {...register('operationalSettings.visibleInPublic')}
                  className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4"
                />
             </div>
             <p className="text-[9px] text-text-secondary mt-1">Shows school profile in public directories and portals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationalSettingsSection;
