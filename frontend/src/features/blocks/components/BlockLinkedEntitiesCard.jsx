import React from 'react';
import { School, Users, GraduationCap, ChevronRight, UserCheck, ShieldAlert } from 'lucide-react';
import { cn } from '../../../utils/cn';

export const BlockSchoolsPreview = ({ schools = [], totalCount = 0, onViewAll }) => {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col h-fit">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <School className="h-4 w-4 text-primary" />
          <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">Linked Schools</h3>
        </div>
        <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">
          {totalCount} Units
        </span>
      </div>
      <div className="p-4 space-y-3">
        {schools.length > 0 ? (
          <>
            {schools.map((school, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl border border-slate-50 hover:bg-slate-50 transition-all group border-b-border/30">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs uppercase group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {school.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-primary group-hover:text-primary transition-colors">{school.name}</p>
                    <p className="text-[10px] text-text-secondary">{school.enrollmentCount} Enrollments</p>
                  </div>
                </div>
                <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-primary transition-colors" />
              </div>
            ))}
            <button 
              onClick={onViewAll} 
              className="w-full py-2.5 text-[11px] font-bold text-primary hover:bg-primary/5 rounded-xl border border-dashed border-primary/20 transition-all uppercase tracking-tight"
            >
              Manage all {totalCount} schools
            </button>
          </>
        ) : (
          <div className="text-center py-8">
            <p className="text-xs text-text-secondary font-bold uppercase tracking-widest opacity-40">No schools linked</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const BlockStudentsPreview = ({ students = [], totalCount = 0, onViewAll }) => {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col h-fit">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-primary" />
          <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">Student Sample</h3>
        </div>
        <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">
          {totalCount} Total
        </span>
      </div>
      <div className="p-4 space-y-4">
        {students.length > 0 ? (
          <>
            <div className="space-y-2">
              {students.map((student, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl border border-transparent hover:border-border hover:bg-slate-50 transition-all">
                  <div className="h-9 w-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
                    <Users className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-text-primary truncate">{student.name}</p>
                    <p className="text-[10px] text-text-secondary truncate">{student.schoolName}</p>
                  </div>
                  <div className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[9px] font-bold uppercase border border-emerald-100">
                    Active
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={onViewAll} 
              className="w-full py-2.5 text-[11px] font-bold text-text-secondary hover:text-primary transition-all uppercase tracking-tight"
            >
              View Full Student Registry
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

export const BlockUsersPreview = ({ manager, othersCount = 0, onViewAll }) => {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col h-fit">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center gap-2">
        <Users className="h-4 w-4 text-primary" />
        <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">Assigned Personnel</h3>
      </div>
      <div className="p-5 space-y-6">
        <div className="space-y-3">
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Primary Block Manager</p>
          {manager ? (
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-primary/5 border border-primary/10">
              <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-primary/20">
                {manager.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-black text-primary truncate leading-none mb-1">{manager.name}</p>
                <div className="flex items-center gap-1.5">
                  <UserCheck className="h-3 w-3 text-primary/60" />
                  <p className="text-[10px] font-bold text-primary/60 truncate uppercase tracking-tighter">Verified Manager</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl border border-dashed border-amber-200 bg-amber-50 flex items-center gap-3">
              <ShieldAlert className="h-5 w-5 text-amber-500" />
              <p className="text-[10px] font-black text-amber-700 uppercase tracking-widest leading-tight">NO MANAGER ASSIGNED<br/><span className="text-[9px] font-medium opacity-70">Field operations pending</span></p>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-lg font-black text-text-primary leading-none uppercase">{othersCount}</p>
            <p className="text-[9px] font-bold text-text-secondary uppercase mt-1 tracking-tighter">Field Agents</p>
          </div>
          <div className="text-center border-l border-slate-100">
            <p className="text-lg font-black text-text-primary leading-none uppercase">3</p>
            <p className="text-[9px] font-bold text-text-secondary uppercase mt-1 tracking-tighter">Office Staff</p>
          </div>
        </div>
      </div>
      <div className="p-3 bg-slate-50 border-t border-border mt-auto">
        <button 
          onClick={onViewAll} 
          className="w-full py-1.5 text-[11px] font-bold text-text-secondary hover:text-primary transition-colors uppercase tracking-tight"
        >
          View Team Directory
        </button>
      </div>
    </div>
  );
};
