import React from 'react';
import Checkbox from '../../../../components/ui/Checkbox';

const OperationalSettingsSection = ({ register }) => {
  return (
    <div className="space-y-4">
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <h3 className="text-sm font-bold text-text-primary">Operational Settings</h3>
        <p className="text-xs text-text-secondary">Future-ready controls for district visibility and intake.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        <div className="p-4 rounded-xl border border-border bg-white space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-text-primary uppercase tracking-tight">Enrollment Intake</span>
            <input type="checkbox" className="h-4 w-4 text-primary rounded" defaultChecked />
          </div>
          <p className="text-[10px] text-text-secondary leading-relaxed">Allow new student registrations in this district.</p>
        </div>

        <div className="p-4 rounded-xl border border-border bg-white space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-text-primary uppercase tracking-tight">Claim Processing</span>
            <input type="checkbox" className="h-4 w-4 text-primary rounded" defaultChecked />
          </div>
          <p className="text-[10px] text-text-secondary leading-relaxed">Allow managers to submit and review claims.</p>
        </div>

        <div className="p-4 rounded-xl border border-border bg-white space-y-3 opacity-50">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-text-primary uppercase tracking-tight">Public Visibility</span>
            <input type="checkbox" className="h-4 w-4 text-primary rounded" disabled />
          </div>
          <p className="text-[10px] text-text-secondary leading-relaxed">Show district in landing page metrics.</p>
        </div>
      </div>
    </div>
  );
};

export default OperationalSettingsSection;
