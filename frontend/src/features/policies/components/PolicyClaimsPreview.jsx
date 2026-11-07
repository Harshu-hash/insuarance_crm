import React from 'react';
import { Card } from '../../../components/ui/Card';
import { ClipboardCheck, FileText, ArrowRight } from 'lucide-react';

const PolicyClaimsPreview = () => {
  // Placeholder data
  const claims = [
    { id: 'CLM-001', name: 'Rahul Sharma', amount: 12500, status: 'approved' },
    { id: 'CLM-002', name: 'Suresh Kumar', amount: 8200, status: 'pending' },
  ];

  return (
    <Card 
      title="Recent Claims" 
      icon={<ClipboardCheck className="h-5 w-5 text-emerald-600" />}
    >
      <div className="space-y-4">
        {claims.length > 0 ? (
          claims.map((clm) => (
            <div key={clm.id} className="flex items-center justify-between group">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-none">{clm.name}</p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tighter">Amount: ₹{clm.amount} • {clm.id}</p>
                </div>
              </div>
              <span className={`text-[8px] font-bold uppercase px-1.5 py-0.5 rounded ${
                clm.status === 'approved' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
              }`}>
                {clm.status}
              </span>
            </div>
          ))
        ) : (
          <p className="text-xs text-slate-400 italic text-center py-2">No claims linked yet.</p>
        )}
        <button className="w-full pt-2 text-[10px] uppercase font-bold text-primary hover:text-primary-dark transition-colors flex items-center justify-center space-x-1">
          <span>View All Claims</span>
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </Card>
  );
};

export default PolicyClaimsPreview;
