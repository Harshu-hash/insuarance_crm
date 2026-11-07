import React from 'react';
import { ShieldCheck, FileText, Ban, AlertTriangle, Info, MoreHorizontal, History } from 'lucide-react';
import { cn } from '../../../utils/cn';

export const StudentEnrollmentSummaryCard = ({ summary = {} }) => {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden h-fit">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          <h3 className="text-xs font-black text-text-primary uppercase tracking-wider">Insurance Coverage</h3>
        </div>
        <span className={cn(
          "px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-tighter border",
          summary.activeEnrollment ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-slate-50 text-slate-400 border-slate-200 border-dashed"
        )}>
          {summary.activeEnrollment ? 'Active Policy' : 'No Coverage'}
        </span>
      </div>
      <div className="p-6">
        {summary.activeEnrollment ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
               <div className="space-y-1">
                  <p className="text-[10px] font-black text-text-secondary uppercase tracking-widest">Policy UID</p>
                  <p className="text-sm font-black text-text-primary">{summary.policyNo}</p>
               </div>
               <div className="text-right space-y-1">
                  <p className="text-[10px] font-black text-text-secondary uppercase tracking-widest">Premium Status</p>
                  <p className="text-sm font-black text-emerald-600 uppercase">Paid (₹{summary.premiumPaid})</p>
               </div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-border/50 flex items-center justify-between">
               <div className="flex items-center gap-2">
                  <History className="h-3.5 w-3.5 text-slate-400" />
                  <span className="text-[10px] font-bold text-text-secondary uppercase">Valid Until</span>
               </div>
               <span className="text-[10px] font-black text-text-primary">{summary.expiryDate ? new Date(summary.expiryDate).toLocaleDateString() : '-'}</span>
            </div>
          </div>
        ) : (
          <div className="py-2 text-center">
             <div className="h-10 w-10 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-2 text-slate-300">
                <Ban className="h-5 w-5" />
             </div>
             <p className="text-xs font-bold text-text-secondary uppercase tracking-tight">No active enrollment linked</p>
             <button className="mt-4 w-full py-2 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:opacity-90 transition-opacity">
                Simulate Registration
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export const StudentClaimsSummaryCard = ({ summary = {} }) => {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden h-fit">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center gap-2">
        <FileText className="h-4 w-4 text-primary" />
        <h3 className="text-xs font-black text-text-primary uppercase tracking-wider">Claims Experience</h3>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-2 gap-4 mb-5">
           <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <p className="text-[9px] font-black text-text-secondary uppercase tracking-tighter mb-1">Total Filed</p>
              <p className="text-xl font-black text-text-primary leading-none">{summary.totalClaims || 0}</p>
           </div>
           <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
              <p className="text-[9px] font-black text-emerald-700 uppercase tracking-tighter mb-1">Approved</p>
              <p className="text-xl font-black text-emerald-900 leading-none">{summary.approvedClaims || 0}</p>
           </div>
        </div>
        
        <div className="space-y-2.5">
           <StatusRow label="Pending Review" value={summary.pendingClaims || 0} color="text-amber-600" />
           <StatusRow label="Rejected Cases" value={summary.rejectedClaims || 0} color="text-red-600" />
        </div>
      </div>
      <div className="p-3 bg-slate-50 border-t border-border mt-auto">
        <button className="w-full text-[10px] font-black text-text-secondary uppercase tracking-widest flex items-center justify-center gap-2 hover:text-primary transition-colors">
          View Detailed Ledger
          <MoreHorizontal className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};

export const StudentFlagsCard = ({ student = {} }) => {
  const flags = student.flags || [];
  
  const flagMeta = {
    missing_mobile: { label: 'Missing Guardian Mobile', color: 'text-amber-700', bg: 'bg-amber-50', icon: AlertTriangle },
    policy_expired: { label: 'Policy Coverage Expired', color: 'text-red-700', bg: 'bg-red-50', icon: Ban },
    not_enrolled: { label: 'Awaiting Enrollment', color: 'text-slate-600', bg: 'bg-slate-50', icon: Info },
    needs_audit: { label: 'Institutional Audit Req.', color: 'text-indigo-700', bg: 'bg-indigo-50', icon: ShieldCheck },
  };

  return (
    <div className="bg-white rounded-2xl border border-amber-200 border-l-4 border-l-amber-500 shadow-sm overflow-hidden h-fit">
      <div className="p-4 border-b border-amber-100 bg-amber-50/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <h3 className="text-xs font-black text-amber-900 uppercase tracking-wider">Record Quality Flags</h3>
        </div>
        <span className="text-[9px] font-black text-amber-900 uppercase bg-amber-100 px-1.5 py-0.5 rounded">
          {flags.length} Detectable Issues
        </span>
      </div>
      <div className="p-4 space-y-3">
        {flags.length > 0 ? (
          flags.map(f => {
            const meta = flagMeta[f] || { label: f.replace('_', ' '), color: 'text-slate-600', bg: 'bg-slate-50', icon: Info };
            return (
              <div key={f} className={cn("flex items-center gap-3 p-3 rounded-xl border border-transparent", meta.bg)}>
                 <meta.icon className={cn("h-4 w-4", meta.color)} />
                 <p className={cn("text-[11px] font-black uppercase tracking-tight", meta.color)}>{meta.label}</p>
              </div>
            );
          })
        ) : (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 text-emerald-700">
             <ShieldCheck className="h-5 w-5" />
             <p className="text-[11px] font-black uppercase tracking-tight">Profile Data Validated & Healthy</p>
          </div>
        )}
      </div>
    </div>
  );
};

const StatusRow = ({ label, value, color }) => (
  <div className="flex items-center justify-between">
    <span className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">{label}</span>
    <span className={cn("text-[11px] font-black", color)}>{value}</span>
  </div>
);
