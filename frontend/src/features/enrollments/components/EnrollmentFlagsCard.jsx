import React from 'react';
import Card from '../../../components/ui/Card';
import { Flag, AlertTriangle, AlertCircle, Info } from 'lucide-react';

const EnrollmentFlagsCard = ({ enrollment }) => {
  const flags = enrollment.flags || [];

  return (
    <Card 
      title="Operational Flags" 
      icon={<Flag className="h-5 w-5 text-rose-600" />}
      className={flags.length > 0 ? 'border-rose-100 ring-1 ring-rose-50' : ''}
    >
      <div className="space-y-3">
        {flags.length > 0 ? (
          flags.map((flag, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-3 p-3 rounded-lg bg-rose-50 border border-rose-100"
            >
              <AlertTriangle className="h-4 w-4 text-rose-600 flex-shrink-0" />
              <span className="text-xs font-bold text-rose-900 uppercase tracking-tight">{flag}</span>
            </div>
          ))
        ) : (
          <div className="flex items-center space-x-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
            <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <Info className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-900">No Risk Detected</p>
              <p className="text-[10px] text-emerald-700 leading-tight">This enrollment record is clean and follows all policy guidelines.</p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default EnrollmentFlagsCard;
