import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, ClipboardCheck, MoreHorizontal, User, Calendar, MapPin, Building2, Banknote } from 'lucide-react';
import Button from '../../../components/ui/Button';
import ClaimStatusBadge from './ClaimStatusBadge';
import ClaimPaymentStatusBadge from './ClaimPaymentStatusBadge';
import ClaimPriorityBadge from './ClaimPriorityBadge';

const ClaimTable = ({ claims, loading }) => {
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-8 space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-12 bg-slate-50 animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (!claims?.length) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-12 text-center shadow-sm">
        <div className="mx-auto h-16 w-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
          <ClipboardCheck className="h-8 w-8 text-slate-300" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">No Claims Found</h3>
        <p className="text-slate-500 mt-1 max-w-sm mx-auto">
          Insurance claims will appear here once submitted by students or guardians.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-bottom border-slate-200">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Claim / Student</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Incident / Hospital</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Amounts</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status & Payout</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Priority</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {claims.map((claim) => (
              <tr 
                key={claim.id} 
                className="hover:bg-slate-50 transition-colors cursor-pointer group"
                onClick={() => navigate(`/admin/claims/${claim.id}`)}
              >
                <td className="px-6 py-4">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                      <User className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900 leading-tight">{claim.studentName}</span>
                      <span className="text-[10px] font-mono font-bold text-primary-600 mt-0.5">{claim.id}</span>
                      <span className="text-[10px] text-slate-400 mt-1 font-medium">{claim.school}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center text-xs text-slate-600 font-medium">
                      <Calendar className="h-3 w-3 mr-1.5 text-slate-400" />
                      {claim.accidentDate}
                    </div>
                    <div className="flex items-center text-xs text-slate-600 font-medium">
                      <Building2 className="h-3 w-3 mr-1.5 text-slate-400" />
                      <span className="truncate max-w-[150px]">{claim.hospitalName}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500">Bill: <span className="font-bold text-slate-900">₹{claim.billAmount.toLocaleString()}</span></span>
                    <span className="text-xs text-slate-500">Claimed: <span className="font-bold text-slate-900">₹{claim.claimedAmount.toLocaleString()}</span></span>
                    {claim.approvedAmount && (
                      <span className="text-xs text-emerald-600 font-bold mt-1">Apprv: ₹{claim.approvedAmount.toLocaleString()}</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col space-y-1.5">
                    <ClaimStatusBadge status={claim.status} />
                    <ClaimPaymentStatusBadge status={claim.payoutStatus} />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <ClaimPriorityBadge priority={claim.priority} />
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/admin/claims/${claim.id}`);
                      }}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="primary" 
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/admin/claims/${claim.id}/review`);
                      }}
                      className="h-8 px-2 text-[10px] font-bold uppercase tracking-wider"
                    >
                      Review
                    </Button>
                    <Button variant="ghost" size="sm" onClick={(e) => e.stopPropagation()}>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClaimTable;
