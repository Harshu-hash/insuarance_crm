import React from 'react';
import { X, User, Calendar, CreditCard, Receipt, Shield, Clock } from 'lucide-react';
import Button from '../../../components/ui/Button';
import TransactionStatusBadge from './TransactionStatusBadge';

const TransactionDetailDrawer = ({ isOpen, onClose, transaction }) => {
  if (!isOpen || !transaction) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Drawer Content */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div>
            <h2 className="text-lg font-black text-slate-800">Transaction Details</h2>
            <p className="text-xs text-slate-400 font-medium">{transaction.id}</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0 rounded-full">
            <X size={18} />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Status Section */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Current Status</span>
              <TransactionStatusBadge status={transaction.status} />
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Amount</span>
              <span className="text-xl font-black text-slate-900">₹{transaction.amount.toLocaleString()}</span>
            </div>
          </div>

          {/* Student Info */}
          <section>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
              <User size={12} className="mr-2" /> Student Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-medium">Name</span>
                <p className="text-sm font-bold text-slate-700">{transaction.studentName}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-medium">Enrollment ID</span>
                <p className="text-sm font-bold text-primary">{transaction.enrollmentId}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-medium">District</span>
                <p className="text-sm font-semibold text-slate-600">{transaction.district}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-medium">School</span>
                <p className="text-sm font-semibold text-slate-600">{transaction.school}</p>
              </div>
            </div>
          </section>

          {/* Payment Info */}
          <section>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
              <CreditCard size={12} className="mr-2" /> Payment Details
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-slate-50">
                <span className="text-xs text-slate-500 font-medium">Payment Mode</span>
                <span className="text-xs font-bold text-slate-700 capitalize">{transaction.paymentMode}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-50">
                <span className="text-xs text-slate-500 font-medium">Payment Date</span>
                <span className="text-xs font-bold text-slate-700">{new Date(transaction.paidDate).toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-50">
                <span className="text-xs text-slate-500 font-medium">Receipt Status</span>
                <span className="text-xs font-bold text-success capitalize">{transaction.receiptStatus}</span>
              </div>
            </div>
          </section>

          {/* Audit Placeholder */}
          <section>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
              <Shield size={12} className="mr-2" /> Audit Trail
            </h3>
            <div className="space-y-4 relative pl-4 border-l-2 border-slate-100 ml-2">
              <div className="relative">
                <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-success border-2 border-white shadow-sm" />
                <p className="text-xs font-bold text-slate-700">Transaction Successful</p>
                <p className="text-[10px] text-slate-400">{new Date(transaction.paidDate).toLocaleString()}</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-slate-300 border-2 border-white shadow-sm" />
                <p className="text-xs font-bold text-slate-700">Payment Initiated</p>
                <p className="text-[10px] text-slate-400">{new Date(transaction.createdDate).toLocaleString()}</p>
              </div>
            </div>
          </section>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50/30 flex gap-3">
          <Button variant="outline" className="flex-1 h-10 font-bold uppercase text-[10px] tracking-wider">
            <Receipt size={14} className="mr-2" /> Download Receipt
          </Button>
          <Button variant="primary" className="flex-1 h-10 font-bold uppercase text-[10px] tracking-wider">
             Verify Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetailDrawer;
