import React from 'react';
import { FileText } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/Card';

const UserNotesCard = ({ notes }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
       <h3 className="text-xs font-bold text-text-primary uppercase tracking-widest mb-4 flex items-center">
          <FileText size={14} className="mr-2 text-primary" />
          Internal Administrator Notes
       </h3>
       <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-200">
          <p className="text-xs text-text-secondary leading-relaxed italic">
            {notes || "No internal notes have been added for this user yet. Administrator notes are private and only visible to other Super Admins."}
          </p>
       </div>
    </div>
  );
};

export default UserNotesCard;
