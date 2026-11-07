import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Flag, AlertTriangle, Info } from 'lucide-react';

const ClaimFlagsCard = ({ claim }) => {
  const flags = claim.flags || [];

  return (
    <Card 
      title="Operational Flags" 
      icon={<Flag className="h-5 w-5 text-rose-600" />}
    >
      <div className="space-y-3">
        {flags.length > 0 ? (
          flags.map((flag, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-3 p-3 rounded-xl border border-rose-50 bg-rose-50/20"
            >
              <AlertTriangle className="h-4 w-4 text-rose-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest block leading-none mb-1">
                  Alert
                </span>
                <p className="text-xs font-bold text-slate-700 capitalize">
                  {flag.replace(/_/g, ' ')}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center space-x-3 p-4 rounded-xl border border-emerald-50 bg-emerald-50/20">
            <Info className="h-4 w-4 text-emerald-500" />
            <p className="text-xs font-bold text-emerald-700">No major operational flags detected.</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ClaimFlagsCard;
