import React from 'react';
import { MessageSquare, Send } from 'lucide-react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FinanceNotesSection = ({ notes = [] }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center">
        <MessageSquare size={12} className="mr-2" /> Finance Notes
      </h3>
      
      <div className="space-y-3 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
        {notes.length === 0 ? (
          <p className="text-[10px] text-slate-400 italic">No notes added yet.</p>
        ) : (
          notes.map((note, index) => (
            <div key={index} className="bg-slate-50 p-2 rounded-lg border border-slate-100">
              <div className="flex justify-between mb-1">
                <span className="text-[9px] font-bold text-primary">{note.author}</span>
                <span className="text-[9px] text-slate-400">{note.date}</span>
              </div>
              <p className="text-[10px] text-slate-600">{note.text}</p>
            </div>
          ))
        )}
      </div>

      <div className="relative">
        <Input 
          placeholder="Add a finance note..." 
          className="pr-10 h-8 text-[10px]"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80">
          <Send size={14} />
        </button>
      </div>
    </div>
  );
};

export default FinanceNotesSection;
