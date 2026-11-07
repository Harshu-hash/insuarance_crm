import React from 'react';
import { Card } from '../../../components/ui/Card';
import { GraduationCap, MapPin } from 'lucide-react';

const PolicyEligibilityCard = ({ policy }) => {
  const classes = policy.applicableClasses || [];

  return (
    <Card 
      title="Eligibility Criteria" 
      icon={<GraduationCap className="h-5 w-5 text-purple-600" />}
    >
      <div className="space-y-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-2">
            Eligible Classes
          </span>
          <div className="flex flex-wrap gap-1.5">
            {classes.map((cls) => (
              <span 
                key={cls} 
                className="px-2 py-1 bg-purple-50 text-purple-700 text-[10px] font-bold rounded border border-purple-100"
              >
                {cls}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 font-medium flex items-center">
              <MapPin className="h-3.5 w-3.5 mr-1.5 text-slate-400" />
              School Type
            </span>
            <span className="text-slate-900 font-bold">All Mapped Schools</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 font-medium">Student Status</span>
            <span className="text-slate-900 font-bold uppercase tracking-tight">Active Enrollment</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PolicyEligibilityCard;
