import React from 'react';
import { ROLE_STATUS } from '../../constants/role.constants';
import { cn } from '../../../../utils/cn';

const StatusSection = ({ watch, setValue, disabled = false }) => {
  const status = watch('status');

  const statusOptions = [
    { 
      value: ROLE_STATUS.ACTIVE, 
      label: 'Active', 
      description: 'Role is operational and can be assigned to users.',
      color: 'bg-emerald-500'
    },
    { 
      value: ROLE_STATUS.INACTIVE, 
      label: 'Inactive', 
      description: 'Role is suspended. Assigned users may lose access.',
      color: 'bg-slate-400'
    },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <h3 className="text-sm font-bold text-text-primary">Operational Status</h3>
        <p className="text-xs text-text-secondary">Control whether this role is currently usable in the system.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {statusOptions.map((option) => {
          const isSelected = status === option.value;
          
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => setValue('status', option.value, { shouldDirty: true })}
              disabled={disabled}
              className={cn(
                "flex-1 flex items-start gap-4 p-4 rounded-xl border-2 transition-all text-left",
                isSelected 
                  ? "border-primary bg-primary/5 ring-1 ring-primary/20" 
                  : "border-border bg-white hover:border-slate-300",
                disabled && "opacity-50 cursor-not-allowed"
              )}
            >
              <div className={cn(
                "h-5 w-5 rounded-full mt-0.5 border-2 flex items-center justify-center transition-colors",
                isSelected ? "border-primary" : "border-slate-300"
              )}>
                {isSelected && <div className="h-2.5 w-2.5 rounded-full bg-primary" />}
              </div>
              
              <div>
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "text-sm font-bold",
                    isSelected ? "text-primary" : "text-text-primary"
                  )}>
                    {option.label}
                  </span>
                  <div className={cn("h-1.5 w-1.5 rounded-full", option.color)} />
                </div>
                <p className="text-[11px] text-text-secondary mt-1">
                  {option.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StatusSection;
