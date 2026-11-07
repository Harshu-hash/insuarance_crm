import React from 'react';
import { Card } from '../../../../components/ui/Card';
import { GraduationCap } from 'lucide-react';
import { ELIGIBLE_CLASSES } from '../../constants/policy.constants';
import Checkbox from '../../../../components/ui/Checkbox';

const EligibilitySection = ({ register, errors, watch }) => {
  const selectedClasses = watch('applicableClasses') || [];

  return (
    <Card 
      title="Eligibility" 
      icon={<GraduationCap className="h-5 w-5 text-purple-600" />}
      className="mb-6"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            Applicable Classes
          </label>
          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            {selectedClasses.length} selected
          </span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
          {ELIGIBLE_CLASSES.map((cls) => (
            <div 
              key={cls} 
              className={`flex items-center space-x-2 p-2 rounded-lg border transition-all cursor-pointer ${
                selectedClasses.includes(cls) 
                  ? 'bg-white border-primary shadow-sm' 
                  : 'border-transparent hover:bg-white hover:border-slate-200'
              }`}
            >
              <Checkbox 
                id={`class-${cls}`} 
                value={cls}
                {...register('applicableClasses')} 
              />
              <label htmlFor={`class-${cls}`} className="text-sm font-medium text-slate-700 cursor-pointer select-none truncate">
                {cls}
              </label>
            </div>
          ))}
        </div>
        {errors.applicableClasses && (
          <p className="text-xs text-rose-500 font-medium pl-1">{errors.applicableClasses.message}</p>
        )}
      </div>
    </Card>
  );
};

export default EligibilitySection;
