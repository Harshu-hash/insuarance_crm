import React from 'react';
import { GraduationCap, MapPin, Building2, Layers, Map } from 'lucide-react';
import { cn } from '../../../utils/cn';

export const StudentAcademicCard = ({ student = {} }) => {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden h-fit">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center gap-2">
        <GraduationCap className="h-4 w-4 text-indigo-600" />
        <h3 className="text-xs font-black text-text-primary uppercase tracking-wider">Academic Record</h3>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
           <div>
              <p className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] mb-1">Current Class</p>
              <h4 className="text-3xl font-black text-indigo-600">Grade {student.class}</h4>
           </div>
           <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <GraduationCap className="h-6 w-6" />
           </div>
        </div>

        <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-50">
          <DetailItem label="Section" value={student.section || '-'} />
          <DetailItem label="Roll Number" value={student.rollNumber || '-'} />
          <DetailItem label="Academic Session" value={student.academicYear || '2026-27'} />
          <DetailItem label="Performance" value="Standard" />
        </div>
      </div>
    </div>
  );
};

export const StudentMappingCard = ({ student = {} }) => {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden h-fit">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center gap-2">
        <MapPin className="h-4 w-4 text-amber-600" />
        <h3 className="text-xs font-black text-text-primary uppercase tracking-wider">Geographic Mapping</h3>
      </div>
      <div className="p-5">
        <div className="space-y-4">
          <MappingItem 
            label="District Layer" 
            value={student.districtName} 
            icon={Map} 
            color="text-amber-600 bg-amber-50"
          />
          <MappingItem 
            label="Block Execution" 
            value={student.blockName} 
            icon={Layers} 
            color="text-orange-600 bg-orange-50"
          />
          <MappingItem 
            label="Institutional Unit" 
            value={student.schoolName} 
            icon={Building2} 
            color="text-primary bg-primary/5"
          />
        </div>
        
        <div className="mt-6 p-3 rounded-xl bg-slate-50 border border-border/50">
           <p className="text-[9px] font-black text-text-secondary uppercase tracking-widest mb-1">Hierarchy Path</p>
           <p className="text-[10px] font-bold text-text-primary italic">UP &gt; {student.districtName} &gt; {student.blockName} &gt; {student.schoolName}</p>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-[9px] font-black text-text-secondary uppercase tracking-tighter mb-0.5">{label}</p>
    <p className="text-xs font-black text-text-primary">{value}</p>
  </div>
);

const MappingItem = ({ label, value, icon: Icon, color }) => (
  <div className="flex items-center gap-3">
    <div className={cn("h-8 w-8 rounded-lg flex items-center justify-center border border-transparent", color)}>
       <Icon className="h-4 w-4" />
    </div>
    <div className="flex-1 min-w-0">
       <p className="text-[9px] font-black text-text-secondary uppercase tracking-widest leading-none mb-1">{label}</p>
       <p className="text-xs font-bold text-text-primary truncate">{value}</p>
    </div>
  </div>
);
