import React from 'react';
import { Card } from '../../../components/ui/Card';
import { MessageSquare, User, Clock } from 'lucide-react';

const ClaimNotesSection = ({ claim }) => {
  return (
    <Card 
      title="Reviewer & Internal Notes" 
      icon={<MessageSquare className="h-5 w-5 text-slate-600" />}
    >
      <div className="space-y-4">
        {claim.notes ? (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start space-x-3">
            <div className="h-8 w-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-400">
              <User className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                "{claim.notes}"
              </p>
              <div className="mt-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <span>{claim.reviewer || 'System'}</span>
                <span className="flex items-center">
                  <Clock className="h-2.5 w-2.5 mr-1" />
                  {claim.submittedDate}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <MessageSquare className="h-8 w-8 text-slate-200 mx-auto mb-2" />
            <p className="text-xs text-slate-400 italic">No notes found for this claim.</p>
          </div>
        )}

        <div className="pt-2">
          <textarea 
            placeholder="Add internal note..."
            className="w-full p-3 text-xs rounded-xl border border-slate-100 focus:border-primary-500 outline-none transition-all h-20 resize-none bg-slate-50"
          />
          <button className="mt-2 w-full p-2 bg-slate-900 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-800 transition-all">
            Save Note
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ClaimNotesSection;
