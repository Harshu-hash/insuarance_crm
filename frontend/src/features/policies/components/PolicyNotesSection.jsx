import React from 'react';
import { Card } from '../../../components/ui/Card';
import { StickyNote, User } from 'lucide-react';

const PolicyNotesSection = ({ policy }) => {
  return (
    <Card 
      title="Admin Remarks" 
      icon={<StickyNote className="h-5 w-5 text-slate-600" />}
    >
      <div className="space-y-4">
        {policy.notes ? (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start space-x-3">
            <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
              <User className="h-4 w-4 text-slate-500" />
            </div>
            <div>
              <p className="text-xs text-slate-700 leading-relaxed italic">
                "{policy.notes}"
              </p>
              <p className="text-[10px] text-slate-400 mt-2 font-bold uppercase tracking-wider">
                System Admin • {policy.createdDate}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-xs text-slate-400 italic text-center py-4">No internal notes for this configuration.</p>
        )}
      </div>
    </Card>
  );
};

export default PolicyNotesSection;
