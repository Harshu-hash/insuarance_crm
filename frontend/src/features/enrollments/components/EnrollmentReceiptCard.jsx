import React from 'react';
import Card from '../../../components/ui/Card';
import { Receipt, Download, FileText, Send, CheckCircle2, Clock } from 'lucide-react';
import Button from '../../../components/ui/Button';

const EnrollmentReceiptCard = ({ enrollment }) => {
  const isGenerated = enrollment.receiptStatus === 'generated';

  return (
    <Card 
      title="Receipt Management" 
      icon={<Receipt className="h-5 w-5 text-slate-600" />}
    >
      <div className="space-y-4">
        {isGenerated ? (
          <>
            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">{enrollment.receiptNumber}</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Generated on {enrollment.paymentDate}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" size="sm" icon={<Download className="h-3.5 w-3.5" />} className="text-xs">
                Download
              </Button>
              <Button variant="outline" size="sm" icon={<Send className="h-3.5 w-3.5" />} className="text-xs">
                Resend
              </Button>
            </div>
          </>
        ) : (
          <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
            <Clock className="h-8 w-8 text-slate-300 mx-auto mb-2" />
            <p className="text-xs font-bold text-slate-500 uppercase">Receipt Pending</p>
            <p className="text-[10px] text-slate-400 mt-1 max-w-[150px] mx-auto leading-tight">
              Receipt will be generated automatically after payment verification.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default EnrollmentReceiptCard;
