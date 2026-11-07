import React from 'react';
import { School, Users, GraduationCap, ChevronRight, UserCheck, ShieldAlert, FileText, Smartphone, ShieldCheck } from 'lucide-react';
import { cn } from '../../../utils/cn';

export const SchoolStudentsPreview = ({ students = [], totalCount = 0, onViewAll, onStudentClick }) => {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col h-fit">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-primary" />
          <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">Student Pool</h3>
        </div>
        <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">
          {totalCount} Total
        </span>
      </div>
      <div className="p-4 space-y-3">
        {students.length > 0 ? (
          <>
            {students.map((student, idx) => (
              <div 
                key={idx} 
                onClick={() => onStudentClick && onStudentClick(student.id)}
                className={cn(
                  "flex items-center justify-between p-3 rounded-xl border border-slate-50 hover:bg-slate-50 transition-all group border-b-border/30",
                  onStudentClick && "cursor-pointer"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs uppercase group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-primary group-hover:text-primary transition-colors">{student.name}</p>
                    <p className="text-[10px] text-text-secondary">{student.class ? `Class ${student.class}` : 'Active Registry'}</p>
                  </div>
                </div>
                <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-primary transition-colors" />
              </div>
            ))}
            <button 
              onClick={onViewAll} 
              className="w-full py-2.5 text-[11px] font-bold text-primary hover:bg-primary/5 rounded-xl border border-dashed border-primary/20 transition-all uppercase tracking-tight mt-2"
            >
              View Full Registry
            </button>
          </>
        ) : (
          <div className="text-center py-8">
            <p className="text-xs text-text-secondary font-bold uppercase tracking-widest opacity-40">No student records</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const SchoolEnrollmentsPreview = ({ enrollments = [], totalCount = 0, onViewAll }) => {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col h-fit">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-emerald-600" />
          <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">Recent Protections</h3>
        </div>
        <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-bold border border-emerald-100">
          {totalCount} Active
        </span>
      </div>
      <div className="p-4 space-y-4">
        {enrollments.length > 0 ? (
          <>
            <div className="space-y-2">
              {enrollments.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl border border-transparent hover:border-border hover:bg-slate-50 transition-all">
                  <div className="h-9 w-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-text-primary truncate">{item.studentName}</p>
                    <p className="text-[10px] text-text-secondary truncate italic">Policy UID: {item.policyNo || 'PENDING'}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-emerald-600 leading-none">PAID</p>
                    <p className="text-[8px] text-text-secondary font-bold mt-1 uppercase">₹500</p>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={onViewAll} 
              className="w-full py-2.5 text-[11px] font-bold text-text-secondary hover:text-primary transition-all uppercase tracking-tight"
            >
              Institutional Policy List
            </button>
          </>
        ) : (
          <div className="text-center py-8">
            <p className="text-xs text-text-secondary font-bold uppercase tracking-widest opacity-40">No active policies</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const SchoolUsersPreview = ({ coordinator, othersCount = 0, onViewAll }) => {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col h-fit">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center gap-2">
        <Smartphone className="h-4 w-4 text-primary" />
        <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">Field Personnel</h3>
      </div>
      <div className="p-5 space-y-6">
        <div className="space-y-3">
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Primary Coordinator</p>
          {coordinator ? (
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-indigo-50 border border-indigo-100">
              <div className="h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-indigo-200">
                {coordinator.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-black text-indigo-900 truncate leading-none mb-1">{coordinator.name}</p>
                <div className="flex items-center gap-1.5">
                  <UserCheck className="h-3 w-3 text-indigo-500" />
                  <p className="text-[10px] font-bold text-indigo-500 truncate uppercase tracking-tighter">On-Site Coordinator</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50 flex items-center gap-3">
              <ShieldAlert className="h-5 w-5 text-slate-300" />
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-tight">NO COORDINATOR<br/><span className="text-[9px] font-medium opacity-70">Awaiting assignment</span></p>
            </div>
          )}
        </div>
      </div>
      <div className="p-3 bg-slate-50 border-t border-border mt-auto">
        <button 
          onClick={onViewAll} 
          className="w-full py-1.5 text-[11px] font-bold text-text-secondary hover:text-primary transition-colors uppercase tracking-tight"
        >
          View All Linked Users
        </button>
      </div>
    </div>
  );
};
