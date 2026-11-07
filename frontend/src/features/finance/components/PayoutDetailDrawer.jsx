import React from 'react';
import { X, User, Hospital, FileCheck, Shield, DollarSign } from 'lucide-react';
import Button from '../../../components/ui/Button';
import PayoutStatusBadge from './PayoutStatusBadge';

const PayoutDetailDrawer = ({ isOpen, onClose, payout }) => {
  if (!isOpen || !payout) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
      
      {/* Drawer Content */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-black text-slate-800">Payout Details</h2>
            <p className="text-xs text-slate-400 font-medium">{payout.id}</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0 rounded-full">
            <X size={18} />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Summary Card */}
          <div className="p-5 bg-primary/5 rounded-2xl border border-primary/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">Payout Status</span>
              <PayoutStatusBadge status={payout.status} />
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-bold text-slate-600">Approved Amount</span>
              <span className="text-2xl font-black text-primary">₹{payout.approvedAmount.toLocaleString()}</span>
            </div>
          </div>

          {/* Claim Info */}
          <section>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
              <FileCheck size={12} className="mr-2" /> Claim Information
            </h3>
            <div className="grid grid-cols-2 gap-4 bg-slate-50/50 p-4 rounded-xl">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-medium">Claim ID</span>
                <p className="text-xs font-bold text-slate-700">{payout.claimId}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-medium">Student</span>
                <p className="text-xs font-bold text-slate-700">{payout.studentName}</p>
              </div>
              <div className="col-span-2 pt-2 border-t border-slate-100 space-y-1">
                <span className="text-[10px] text-slate-400 font-medium">Hospital</span>
                <p className="text-xs font-bold text-slate-700">{payout.hospitalName}</p>
                <p className="text-[10px] text-slate-400">{payout.district}</p>
              </div>
            </div>
          </section>

          {/* Settlement Details */}
          <section>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
              <DollarSign size={12} className="mr-2" /> Settlement Details
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Payment Reference</span>
                <span className="text-xs font-mono font-bold text-slate-700">{payout.paymentReference || 'PENDING'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Approved Date</span>
                <span className="text-xs font-bold text-slate-700">{new Date(payout.approvedDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Payout Date</span>
                <span className="text-xs font-bold text-slate-700">{payout.payoutDate ? new Date(payout.payoutDate).toLocaleDateString() : 'Pending'}</span>
              </div>
            </div>
          </section>

          {/* Important Note */}
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
            <p className="text-[10px] text-amber-700 leading-relaxed italic">
              Claim payout is for eligible hospital bill payment only. This record matches the verified claim documentation submitted by the hospital.
            </p>
          </div>
        </div>

        <div className="p-6 border-t border-slate-100 flex gap-3">
          <Button variant="outline" className="flex-1 font-bold uppercase text-[10px] tracking-widest h-10">
            Export Voucher
          </Button>
          <Button variant="primary" className="flex-1 font-bold uppercase text-[10px] tracking-widest h-10">
            Mark Completed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PayoutDetailDrawer;
