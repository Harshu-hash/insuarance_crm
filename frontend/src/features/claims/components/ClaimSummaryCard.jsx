import React from 'react';
import { Card } from '../../../components/ui/Card';
import { 
  ClipboardCheck, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  XCircle,
  FileSearch,
  Banknote,
  FastForward
} from 'lucide-react';

const ClaimSummaryCard = ({ summary, loading }) => {
  if (loading || !summary) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-20 bg-slate-100 animate-pulse rounded-xl" />
        ))}
      </div>
    );
  }

  const items = [
    { label: 'Total Claims', value: summary.totalClaims, icon: ClipboardCheck, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Pending Review', value: summary.pendingReview, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Urgent', value: summary.urgentClaims, icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
    { label: 'Approved', value: summary.approvedClaims, icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Payout Pending', value: summary.payoutPending, icon: Banknote, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
      {items.map((item, index) => (
        <Card key={index} className="p-3 flex items-center space-x-3">
          <div className={`h-10 w-10 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
            <item.icon className={`h-5 w-5 ${item.color}`} />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter truncate">{item.label}</p>
            <h3 className="text-lg font-black text-slate-900 leading-tight">{item.value}</h3>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ClaimSummaryCard;
