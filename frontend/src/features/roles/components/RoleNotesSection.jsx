import React from 'react';
import { StickyNote } from 'lucide-react';

const RoleNotesSection = ({ notes = "" }) => {
  return (
    <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
      <div className="p-4 border-b border-border bg-amber-50/30 flex items-center gap-2">
        <StickyNote className="h-4 w-4 text-amber-600" />
        <h3 className="text-sm font-bold text-text-primary">Admin Notes</h3>
      </div>
      <div className="p-4">
        {notes ? (
          <p className="text-xs text-text-secondary leading-relaxed whitespace-pre-wrap">
            {notes}
          </p>
        ) : (
          <p className="text-xs text-text-secondary italic">
            No internal notes provided for this role.
          </p>
        )}
      </div>
    </div>
  );
};

export default RoleNotesSection;
