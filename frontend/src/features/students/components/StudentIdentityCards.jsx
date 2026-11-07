import React from 'react';
import { User, Calendar, Fingerprint, CalendarCheck, Clock } from 'lucide-react';
import { cn } from '../../../utils/cn';

export const StudentProfileCard = ({ student = {} }) => {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden h-fit">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center gap-2">
        <User className="h-4 w-4 text-primary" />
        <h3 className="text-xs font-black text-text-primary uppercase tracking-wider">Identity Profile</h3>
      </div>
      <div className="p-6">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="h-20 w-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-2xl font-black mb-3 shadow-inner">
            {student.name?.charAt(0)}
          </div>
          <h4 className="text-lg font-black text-text-primary leading-tight">{student.name}</h4>
          <p className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-widest">{student.studentId || 'ID PENDING'}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <InfoItem 
            label="Date of Birth" 
            value={student.dob ? new Date(student.dob).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '-'} 
            icon={Calendar} 
          />
          <InfoItem 
            label="Gender" 
            value={student.gender} 
            icon={Fingerprint} 
            className="capitalize"
          />
          <InfoItem 
            label="Created" 
            value={student.createdAt ? new Date(student.createdAt).toLocaleDateString() : '-'} 
            icon={CalendarCheck} 
          />
          <InfoItem 
            label="Last Update" 
            value="Recently" 
            icon={Clock} 
          />
        </div>
      </div>
    </div>
  );
};

export const StudentGuardianCard = ({ student = {} }) => {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden h-fit">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center gap-2">
        <User className="h-4 w-4 text-emerald-600" />
        <h3 className="text-xs font-black text-text-primary uppercase tracking-wider">Guardian / Contact</h3>
      </div>
      <div className="p-5 space-y-5">
        <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100/50">
           <p className="text-[9px] font-black text-emerald-700 uppercase tracking-widest mb-1.5">Primary Guardian</p>
           <h4 className="text-sm font-black text-text-primary leading-none mb-1">{student.guardianName}</h4>
           <p className="text-[10px] font-bold text-text-secondary italic">{student.guardianRelation || 'Verified Relation'}</p>
        </div>

        <div className="space-y-4">
          <ContactItem 
             label="Primary Mobile" 
             value={student.guardianMobile} 
             placeholder="Missing Contact" 
             isMissing={!student.guardianMobile}
          />
          <ContactItem 
             label="Alternate Contact" 
             value={student.alternateMobile} 
             placeholder="Not Provided" 
          />
          <ContactItem 
             label="Email Registry" 
             value={student.guardianEmail} 
             placeholder="No digital address" 
          />
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value, icon: Icon, className }) => (
  <div className="space-y-1">
    <div className="flex items-center gap-1.5 opacity-40">
       <Icon className="h-3 w-3" />
       <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
    </div>
    <p className={cn("text-xs font-bold text-text-primary", className)}>{value}</p>
  </div>
);

const ContactItem = ({ label, value, placeholder, isMissing }) => (
  <div className="flex items-center justify-between">
    <span className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">{label}</span>
    <span className={cn(
      "text-[11px] font-black",
      isMissing ? 'text-red-400 italic' : 'text-text-primary'
    )}>
      {value || placeholder}
    </span>
  </div>
);
