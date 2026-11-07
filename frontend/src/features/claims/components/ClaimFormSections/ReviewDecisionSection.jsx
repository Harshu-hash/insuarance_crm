import React from 'react';
import { Card } from '../../../../components/ui/Card';
import Select from '../../../../components/ui/Select';
import { CheckCircle2, XCircle, HelpCircle, Eye } from 'lucide-react';

const ReviewDecisionSection = ({ register, errors, watch }) => {
  const decision = watch('decision');

  const options = [
    { label: 'Approve Claim', value: 'approve', icon: CheckCircle2, color: 'text-emerald-500' },
    { label: 'Reject Claim', value: 'reject', icon: XCircle, color: 'text-rose-500' },
    { label: 'Raise Query / Missing Documents', value: 'raise_query', icon: HelpCircle, color: 'text-amber-500' },
    { label: 'Mark Under Review', value: 'mark_under_review', icon: Eye, color: 'text-blue-500' },
  ];

  return (
    <Card title="Review Decision" className="mb-6">
      <div className="space-y-4">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
          Select Action
        </label>
        <div className="grid grid-cols-1 gap-3">
          {options.map((opt) => (
            <label 
              key={opt.value}
              className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${
                decision === opt.value 
                  ? 'border-primary bg-primary/5 shadow-sm' 
                  : 'border-slate-100 hover:border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center bg-white border border-slate-100 ${opt.color}`}>
                  <opt.icon className="h-5 w-5" />
                </div>
                <span className={`text-sm font-bold ${decision === opt.value ? 'text-primary' : 'text-slate-700'}`}>
                  {opt.label}
                </span>
              </div>
              <input 
                type="radio" 
                value={opt.value} 
                {...register('decision')} 
                className="h-4 w-4 text-primary focus:ring-primary border-slate-300"
              />
            </label>
          ))}
        </div>
        {errors.decision && (
          <p className="text-xs text-rose-500 font-medium pl-1">{errors.decision.message}</p>
        )}
      </div>
    </Card>
  );
};

export default ReviewDecisionSection;
