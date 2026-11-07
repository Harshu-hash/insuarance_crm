import React from 'react';
import { Card } from '../../../../components/ui/Card';
import { FileText, CheckSquare } from 'lucide-react';
import Checkbox from '../../../../components/ui/Checkbox';

const CoverageRulesSection = ({ register, errors, watch }) => {
  return (
    <Card 
      title="Coverage Rules" 
      icon={<FileText className="h-5 w-5 text-blue-600" />}
      className="mb-6"
    >
      <div className="space-y-6">
        <div>
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
            Coverage Summary
          </label>
          <textarea
            placeholder="Describe the coverage provided by this policy..."
            className="w-full h-32 p-3 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
            {...register('coverageSummary')}
          />
          {errors.coverageSummary && (
            <p className="mt-1 text-xs text-rose-500 font-medium">{errors.coverageSummary.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="flex items-center space-x-3 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-sm transition-all cursor-pointer">
            <Checkbox 
              id="hospitalBillOnly" 
              {...register('hospitalBillOnly')} 
            />
            <label htmlFor="hospitalBillOnly" className="text-sm font-semibold text-slate-700 cursor-pointer select-none">
              Hospital Bill Only Payout
            </label>
          </div>
          
          <div className="flex items-center space-x-3 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-sm transition-all cursor-pointer">
            <Checkbox 
              id="maturityBenefit" 
              {...register('maturityBenefit')} 
            />
            <label htmlFor="maturityBenefit" className="text-sm font-semibold text-slate-700 cursor-pointer select-none">
              Maturity Benefit Enabled
            </label>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CoverageRulesSection;
