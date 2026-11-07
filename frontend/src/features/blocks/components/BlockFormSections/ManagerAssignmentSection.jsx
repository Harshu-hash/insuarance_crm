import React from 'react';
import Select from '../../../../components/ui/Select';
import { UserCheck, ShieldAlert, Award } from 'lucide-react';
import { cn } from '../../../../utils/cn';

const ManagerAssignmentSection = ({ register, errors, watch, managerOptions = [] }) => {
  const selectedManagerId = watch('managerId');
  const selectedManager = managerOptions.find(m => m.value === selectedManagerId);

  return (
    <div className="space-y-4">
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <h3 className="text-sm font-bold text-text-primary">Field Leadership</h3>
        <p className="text-xs text-text-secondary">Assign a Block Manager (BM) to ensure operational success and incentive generation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <Select
          label="Block Manager (BM)"
          {...register('managerId')}
          options={managerOptions}
          error={errors.managerId?.message}
          placeholder="Select Block Manager"
        />

        {selectedManager ? (
          <div className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/50 flex items-start gap-4 animate-in fade-in slide-in-from-left-2 transition-all">
            <div className="h-10 w-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-200">
              <UserCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-indigo-900">{selectedManager.label}</h4>
              <p className="text-xs text-indigo-700/70 mt-0.5 font-bold uppercase tracking-widest">Designated Block Manager</p>
              <div className="mt-2 flex items-center gap-1.5 p-1 px-2 rounded-full bg-indigo-600 text-white w-fit">
                <Award className="h-3 w-3" />
                <span className="text-[9px] font-black uppercase tracking-tight">Active Assignment</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl border border-dashed border-amber-200 bg-amber-50/50 flex items-start gap-4">
            <div className="h-10 w-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-500">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-amber-900 italic opacity-70">No Block Manager Assigned</h4>
              <p className="text-xs text-amber-700 mt-1 max-w-[200px] leading-tight font-medium italic">Unassigned blocks will experience delays in field enrollment verification.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagerAssignmentSection;
