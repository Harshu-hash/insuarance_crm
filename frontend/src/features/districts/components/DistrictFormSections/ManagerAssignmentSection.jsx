import React from 'react';
import Select from '../../../../components/ui/Select';
import { ShieldAlert, UserCheck } from 'lucide-react';
import { cn } from '../../../../utils/cn';

const ManagerAssignmentSection = ({ register, errors, watch, managerOptions = [] }) => {
  const selectedManagerId = watch('managerId');
  const selectedManager = managerOptions.find(m => m.value === selectedManagerId);

  return (
    <div className="space-y-4">
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <h3 className="text-sm font-bold text-text-primary">Manager Assignment</h3>
        <p className="text-xs text-text-secondary">Select an administrator to oversee this district's operations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <Select
          label="District Manager"
          {...register('managerId')}
          options={managerOptions}
          error={errors.managerId?.message}
          placeholder="Unassigned"
        />

        {selectedManager ? (
          <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 flex items-start gap-4 animate-in fade-in slide-in-from-left-2 transition-all">
            <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white">
              <UserCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-primary">{selectedManager.label}</h4>
              <p className="text-xs text-text-secondary mt-0.5">Assigned as District Manager</p>
              <div className="mt-2 text-[10px] text-primary/60 font-bold uppercase tracking-tight">
                ACCESS GRANTED TO DISTRICT DATA
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl border border-dashed border-slate-200 flex items-start gap-4">
            <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-text-secondary italic">No Manager Assigned</h4>
              <p className="text-xs text-text-secondary mt-0.5">This district will remain unmanaged until an admin is assigned.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagerAssignmentSection;
