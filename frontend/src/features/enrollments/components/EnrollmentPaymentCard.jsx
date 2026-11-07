import React from 'react';
import Card from '../../../components/ui/Card';
import { CreditCard, CheckCircle2, Clock, AlertCircle, Receipt } from 'lucide-react';
import PaymentStatusBadge from './PaymentStatusBadge';

const EnrollmentPaymentCard = ({ enrollment }) => {
  const isPaid = enrollment.paymentStatus === 'paid';

  return (
    <Card 
      title="Payment Status" 
      icon={<CreditCard className="h-5 w-5 text-amber-600" />}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-500">Premium Amount</span>
          <span className="text-lg font-bold text-slate-900">₹{enrollment.premiumAmount}</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
          <span className="text-sm font-medium text-slate-600">Current Status</span>
          <PaymentStatusBadge status={enrollment.paymentStatus} />
        </div>

        {isPaid ? (
          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Payment Mode</span>
              <span className="text-sm font-semibold text-slate-700">{enrollment.paymentMode}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Transaction Date</span>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3 text-slate-400" />
                <span className="text-sm font-semibold text-slate-700">{enrollment.paymentDate}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Transaction ID</span>
              <span className="text-sm font-mono text-slate-500">TXN-0923-4567</span>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 flex items-start space-x-3 mt-2">
            <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-amber-900 uppercase tracking-tight">Awaiting Payment</p>
              <p className="text-[10px] text-amber-700 mt-0.5">
                Enrollment will remain pending until premium is received and verified by finance.
              </p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default EnrollmentPaymentCard;
