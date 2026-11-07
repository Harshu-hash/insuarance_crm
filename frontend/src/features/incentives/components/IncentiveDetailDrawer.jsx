import React from 'react';
import { X, User, MapPin, CreditCard, History, AlertTriangle, ShieldCheck } from 'lucide-react';
import Button from '../../../components/ui/Button';
import IncentiveStatusBadge from './IncentiveStatusBadge';
import IncentiveTypeBadge from './IncentiveTypeBadge';

const IncentiveDetailDrawer = ({ isOpen, onClose, incentive }) => {
  if (!isOpen || !incentive) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div>
            <h2 className="text-lg font-black text-slate-800">Incentive Details</h2>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{incentive.id}</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0 rounded-full hover:bg-slate-200">
            <X size={18} />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Header Summary */}
          <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Payout Status</span>
              <IncentiveStatusBadge status={incentive.status} />
            </div>
            <div className="text-right">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Incentive Earned</span>
              <span className="text-2xl font-black text-primary">₹{incentive.amount.toLocaleString()}</span>
            </div>
          </div>

          {/* Recipient Card */}
          <section>
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center">
              <User size={12} className="mr-2" /> Recipient Profile
            </h3>
            <div className="bg-white p-4 rounded-xl border border-slate-100 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">{incentive.recipientName}</span>
                <IncentiveTypeBadge type={incentive.recipientRole} />
              </div>
              <div className="flex items-center space-x-2 text-[11px] text-slate-500 font-medium">
                <MapPin size={12} />
                <span>{incentive.district} / {incentive.block} / {incentive.school}</span>
              </div>
            </div>
          </section>

          {/* Enrollment Source */}
          <section>
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center">
              <ShieldCheck size={12} className="mr-2" /> Enrollment Source
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-[9px] font-bold text-slate-400 uppercase block mb-1">Student</span>
                <p className="text-xs font-bold text-slate-700">{incentive.studentName}</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-[9px] font-bold text-slate-400 uppercase block mb-1">Enrollment ID</span>
                <p className="text-xs font-black text-primary">{incentive.enrollmentId}</p>
              </div>
            </div>
          </section>

          {/* Payout Information */}
          <section>
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center">
              <CreditCard size={12} className="mr-2" /> Payout Status
            </h3>
            <div className="space-y-3 pl-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-400 uppercase text-[10px]">Generated Date</span>
                <span className="text-slate-700">{new Date(incentive.generatedDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-400 uppercase text-[10px]">Paid Date</span>
                <span className="text-slate-700">{incentive.paidDate ? new Date(incentive.paidDate).toLocaleDateString() : 'N/A'}</span>
              </div>
            </div>
          </section>

          {/* Flags Section */}
          {incentive.flags?.length > 0 && (
            <div className="p-4 bg-danger/5 rounded-2xl border border-danger/10 flex items-start space-x-3">
              <AlertTriangle className="text-danger mt-0.5" size={16} />
              <div>
                <h4 className="text-xs font-black text-danger uppercase tracking-widest">Flags Detected</h4>
                <p className="text-[10px] font-medium text-danger/80 mt-1">
                  This record has been flagged for: <span className="font-bold underline">{incentive.flags.join(', ')}</span>. 
                  Please verify before marking as payable.
                </p>
              </div>
            </div>
          )}

          {/* Timeline Placeholder */}
          <section>
             <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center">
              <History size={12} className="mr-2" /> Audit Timeline
            </h3>
            <div className="space-y-4 relative pl-4 border-l-2 border-slate-100 ml-2">
              <div className="relative">
                <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-slate-300 border-2 border-white shadow-sm" />
                <p className="text-xs font-bold text-slate-700">Incentive Generated</p>
                <p className="text-[10px] text-slate-400 font-medium">{new Date(incentive.generatedDate).toLocaleDateString()}</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-success border-2 border-white shadow-sm" />
                <p className="text-xs font-bold text-slate-700">Enrollment Payment Verified</p>
                <p className="text-[10px] text-slate-400 font-medium">{new Date(incentive.generatedDate).toLocaleDateString()}</p>
              </div>
            </div>
          </section>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50/30 flex gap-3">
          <Button variant="outline" className="flex-1 h-10 font-black uppercase text-[10px] tracking-widest">
            On Hold
          </Button>
          <Button variant="primary" className="flex-1 h-10 font-black uppercase text-[10px] tracking-widest">
             Reverse Record
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IncentiveDetailDrawer;
