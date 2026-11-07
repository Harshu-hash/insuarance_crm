import React from 'react';
import { History, FileText, StickyNote, Plus, ChevronRight, Download, Eye } from 'lucide-react';
import { cn } from '../../../utils/cn';

export const StudentTimelineCard = ({ activities = [] }) => {
  // Mock default activities if none provided
  const items = activities.length > 0 ? activities : [
    { type: 'created', label: 'Student Registered', date: '2026-01-10', time: '10:00 AM' },
    { type: 'mapping', label: 'School Mapping Verified', date: '2026-01-10', time: '10:05 AM' },
    { type: 'enrollment', label: 'Policy POL-330404 Linked', date: '2026-02-15', time: '11:30 AM' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden h-fit">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center gap-2">
        <History className="h-4 w-4 text-slate-500" />
        <h3 className="text-xs font-black text-text-primary uppercase tracking-wider">Activity Timeline</h3>
      </div>
      <div className="p-6">
        <div className="relative space-y-6 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-slate-100">
          {items.map((item, idx) => (
            <div key={idx} className="relative flex items-center gap-6 group">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-primary/20 transition-all z-10">
                <div className="h-2 w-2 rounded-full bg-slate-400 group-hover:bg-primary transition-colors" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-black text-text-primary uppercase tracking-tight">{item.label}</p>
                <div className="flex items-center gap-2 mt-1">
                   <p className="text-[9px] font-bold text-text-secondary uppercase">{item.date}</p>
                   <span className="text-slate-300">·</span>
                   <p className="text-[9px] font-medium text-slate-400">{item.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const StudentDocumentsCard = () => {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden h-fit">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-primary" />
          <h3 className="text-xs font-black text-text-primary uppercase tracking-wider">Digital Vault</h3>
        </div>
        <span className="text-[9px] font-black text-primary uppercase">3 Files</span>
      </div>
      <div className="p-4 space-y-3">
        <DocumentRow label="Aadhar / Student ID Proof" status="Verified" />
        <DocumentRow label="Birth Certificate" status="Verified" />
        <DocumentRow label="Current Class Registry" status="Awaiting" isWarning />
        
        <button className="w-full mt-2 py-2.5 border border-dashed border-primary/20 bg-primary/5 rounded-xl text-[10px] font-black text-primary uppercase tracking-widest hover:bg-primary/10 transition-colors">
          Upload New Document
        </button>
      </div>
    </div>
  );
};

export const StudentNotesSection = ({ remarks }) => {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden h-fit">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <StickyNote className="h-4 w-4 text-amber-500" />
          <h3 className="text-xs font-black text-text-primary uppercase tracking-wider">Administrative Remarks</h3>
        </div>
        <button className="text-primary hover:text-primary-dark transition-colors">
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <div className="p-6">
        {remarks ? (
          <div className="p-4 rounded-xl bg-amber-50/30 border border-amber-100 flex gap-3 italic">
            <p className="text-xs text-amber-900 leading-relaxed">
              "{remarks}"
            </p>
          </div>
        ) : (
          <div className="text-center py-6 opacity-30">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">No internal notes for this record</p>
          </div>
        )}
      </div>
    </div>
  );
};

const DocumentRow = ({ label, status, isWarning }) => (
  <div className="flex items-center justify-between p-2.5 rounded-xl border border-slate-50 hover:border-border transition-all group">
    <div className="flex items-center gap-3">
       <div className={cn("h-8 w-8 rounded-lg flex items-center justify-center shadow-sm border", isWarning ? 'bg-amber-50 text-amber-500 border-amber-100' : 'bg-slate-50 text-slate-400 border-slate-100')}>
          <FileText className="h-4 w-4" />
       </div>
       <div className="min-w-0">
          <p className="text-[11px] font-black text-text-primary truncate">{label}</p>
          <p className={cn("text-[9px] font-bold uppercase", isWarning ? 'text-amber-600' : 'text-emerald-600')}>{status}</p>
       </div>
    </div>
    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
       <button className="p-1 hover:bg-white rounded border border-transparent hover:border-border text-slate-400 hover:text-primary"><Eye className="h-3.5 w-3.5" /></button>
       <button className="p-1 hover:bg-white rounded border border-transparent hover:border-border text-slate-400 hover:text-primary"><Download className="h-3.5 w-3.5" /></button>
    </div>
  </div>
);
