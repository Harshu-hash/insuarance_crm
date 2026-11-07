import React from 'react';
import { Card } from '../../../../components/ui/Card';
import { MessageSquare, HelpCircle } from 'lucide-react';

const QueryRaisedSection = ({ register, errors }) => {
  return (
    <Card title="Query Details" className="mb-6 bg-amber-50/30 border-amber-100">
      <div className="space-y-4">
        <div>
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
            Message to Student/Guardian
          </label>
          <textarea
            placeholder="e.g. Please upload the discharge summary and original hospital bill..."
            className="w-full h-24 p-3 text-sm rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all resize-none bg-white"
            {...register('queryMessage')}
          />
          {errors.queryMessage && (
            <p className="mt-1 text-xs text-rose-500 font-medium">{errors.queryMessage.message}</p>
          )}
        </div>

        <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 flex items-start space-x-2">
          <HelpCircle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-[10px] text-amber-800 leading-relaxed font-medium">
            Raising a query will notify the student and pause the review process until missing information or documents are provided.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default QueryRaisedSection;
