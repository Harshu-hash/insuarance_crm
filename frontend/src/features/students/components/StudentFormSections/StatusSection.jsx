import React from 'react';
import Select from '../../../../components/ui/Select';
import { STUDENT_STATUS } from '../../constants/student.constants';

const StatusSection = ({ register, errors }) => {
  const statusOptions = Object.entries(STUDENT_STATUS).map(([key, value]) => ({
    value,
    label: value.charAt(0).toUpperCase() + value.slice(1).replace('_', ' ')
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-6 w-1 bg-slate-500 rounded-full" />
        <h3 className="text-sm font-black text-text-primary uppercase tracking-wider">Registry Status</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Select
          label="Profile Status"
          {...register('status')}
          options={statusOptions}
          error={errors.status?.message}
          required
        />
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
           <p className="text-[10px] font-bold text-text-secondary uppercase mb-1">Administrative Note</p>
           <p className="text-[11px] text-text-primary italic">"Inactive" or "Needs Review" statuses hide the student from public registry and enrollment suggestions.</p>
        </div>
      </div>
    </div>
  );
};

export default StatusSection;
