import React from 'react';
import { Card } from '../../../components/ui/Card';
import { FileText, User, Calendar, Clock, ShieldCheck } from 'lucide-react';
import ClaimStatusBadge from './ClaimStatusBadge';
import ClaimPriorityBadge from './ClaimPriorityBadge';

const ClaimProfileCard = ({ claim }) => {
  return (
    <Card 
      title="Claim Overview" 
      icon={<FileText className="h-5 w-5 text-primary-600" />}
    >
      <div className="grid grid-cols-2 gap-y-4">
        <div className="col-span-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Claim ID</span>
          <span className="text-sm font-mono font-black text-slate-900">{claim.id}</span>
        </div>
        <div className="col-span-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Submitted Date</span>
          <span className="text-sm font-bold text-slate-700">{claim.submittedDate}</span>
        </div>
        <div className="col-span-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Status</span>
          <ClaimStatusBadge status={claim.status} />
        </div>
        <div className="col-span-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Priority</span>
          <ClaimPriorityBadge priority={claim.priority} />
        </div>
        <div className="col-span-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Reviewer</span>
          <div className="flex items-center mt-1">
            <div className="h-5 w-5 rounded-full bg-slate-100 flex items-center justify-center mr-2">
              <User className="h-3 w-3 text-slate-500" />
            </div>
            <span className="text-xs font-bold text-slate-700">{claim.reviewer || 'Not Assigned'}</span>
          </div>
        </div>
        <div className="col-span-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Enrollment Ref</span>
          <span className="text-xs font-bold text-primary-600">{claim.enrollmentId}</span>
        </div>
      </div>
    </Card>
  );
};

export default ClaimProfileCard;
