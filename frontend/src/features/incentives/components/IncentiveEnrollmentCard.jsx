import React from 'react';
import { Card, CardContent } from '../../../components/ui/Card';
import { FileCheck, Shield, IndianRupee } from 'lucide-react';
import Badge from '../../../components/ui/Badge';

const IncentiveEnrollmentCard = ({ enrollment }) => {
  return (
    <Card className="border-none shadow-sm shadow-slate-200/50">
      <CardContent className="p-6">
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center">
          <FileCheck size={14} className="mr-2" /> Enrollment Source
        </h3>

        <div className="flex items-center justify-between mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Student Name</span>
            <p className="text-sm font-black text-slate-800">{enrollment.studentName}</p>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Enrollment ID</span>
            <p className="text-sm font-black text-primary">{enrollment.enrollmentId}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-1">
            <span className="text-[9px] font-bold text-slate-400 uppercase">Policy Year</span>
            <p className="text-xs font-bold text-slate-700">2024-25</p>
          </div>
          <div className="space-y-1">
            <span className="text-[9px] font-bold text-slate-400 uppercase">Premium</span>
            <p className="text-xs font-bold text-slate-700">₹1,500</p>
          </div>
          <div className="space-y-1 text-right">
            <span className="text-[9px] font-bold text-slate-400 uppercase">Payment</span>
            <div><Badge variant="success" className="text-[8px] px-1 py-0">SUCCESS</Badge></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IncentiveEnrollmentCard;
