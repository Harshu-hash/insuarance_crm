import React from 'react';
import { Card } from '../../../components/ui/Card';
import { ClipboardCheck, User, Calendar, MessageSquare } from 'lucide-react';
import ClaimStatusBadge from './ClaimStatusBadge';

const ClaimReviewPanel = ({ claim }) => {
  return (
    <Card 
      title="Review Decision Summary" 
      icon={<ClipboardCheck className="h-5 w-5 text-indigo-600" />}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Review Status</span>
          <ClaimStatusBadge status={claim.status} />
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center border border-slate-200">
                <User className="h-3 w-3 text-slate-400" />
              </div>
              <span className="text-xs font-bold text-slate-700">{claim.reviewer || 'Assign Reviewer'}</span>
            </div>
            <div className="flex items-center text-[10px] text-slate-400 font-bold uppercase">
              <Calendar className="h-3 w-3 mr-1" />
              Last Action: Today
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <MessageSquare className="h-4 w-4 text-slate-300 mt-0.5" />
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Latest Review Note</span>
              <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                {claim.notes || 'No review notes yet. Start the review process to add notes.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ClaimReviewPanel;
