import React from 'react';
import Card from '../../../components/ui/Card';
import { StickyNote, Send, User } from 'lucide-react';
import Button from '../../../components/ui/Button';

const EnrollmentNotesSection = ({ enrollment }) => {
  return (
    <Card 
      title="Enrollment Notes" 
      icon={<StickyNote className="h-5 w-5 text-slate-600" />}
    >
      <div className="space-y-4">
        {enrollment.notes ? (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start space-x-3">
            <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
              <User className="h-4 w-4 text-slate-500" />
            </div>
            <div>
              <p className="text-xs text-slate-700 leading-relaxed italic">
                "{enrollment.notes}"
              </p>
              <p className="text-[10px] text-slate-400 mt-2 font-bold uppercase tracking-wider">
                Admin • {enrollment.updatedDate}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-slate-400 italic text-center py-4">No notes recorded for this enrollment.</p>
        )}

        <div className="pt-4 border-t border-slate-100">
          <textarea 
            placeholder="Add a private note for finance or operations..."
            className="w-full h-24 p-3 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
          />
          <div className="mt-3 flex justify-end">
            <Button variant="primary" size="sm" icon={<Send className="h-3.5 w-3.5" />}>
              Save Note
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EnrollmentNotesSection;
