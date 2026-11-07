import React from 'react';
import { MessageSquare, Send } from 'lucide-react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const IncentiveNotesSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center">
        <MessageSquare size={12} className="mr-2" /> Incentive Audit Notes
      </h3>
      
      <div className="space-y-3 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
          <div className="flex justify-between mb-1">
            <span className="text-[9px] font-black text-primary uppercase">System Audit</span>
            <span className="text-[9px] text-slate-400 font-bold">26 APR, 2024</span>
          </div>
          <p className="text-[10px] text-slate-600 font-medium leading-relaxed">
            Incentive auto-generated after premium payment confirmation (TXN-88221). 
            Rule applied: BM Standard (₹5).
          </p>
        </div>
      </div>

      <div className="relative">
        <Input 
          placeholder="Add an internal note or dispute resolution..." 
          className="pr-10 h-10 text-[10px] font-bold"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 transition-colors">
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default IncentiveNotesSection;
