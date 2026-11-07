import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Edit2, MoreHorizontal, Shield, Users, ClipboardCheck } from 'lucide-react';
import Button from '../../../components/ui/Button';
import PolicyStatusBadge from './PolicyStatusBadge';
import PolicyTypeBadge from './PolicyTypeBadge';

const PolicyTable = ({ policies, loading }) => {
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

  if (!policies?.length) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-12 text-center shadow-sm">
        <div className="mx-auto h-16 w-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
          <Shield className="h-8 w-8 text-slate-300" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">No Policies Configured</h3>
        <p className="text-slate-500 mt-1 max-w-sm mx-auto">
          Insurance policies define the coverage rules for students. Start by creating your first policy.
        </p>
        <Button 
          variant="primary" 
          className="mt-6"
          onClick={() => navigate('/admin/policies/create')}
        >
          Create Policy
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-bottom border-slate-200">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Policy Name</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Type / Code</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Financials</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Validity</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Usage</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {policies.map((policy) => (
              <tr 
                key={policy.id} 
                className="hover:bg-slate-50 transition-colors cursor-pointer group"
                onClick={() => navigate(`/admin/policies/${policy.id}`)}
              >
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                      {policy.name}
                    </span>
                    <span className="text-xs text-slate-500">{policy.insurer}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col space-y-1">
                    <PolicyTypeBadge type={policy.type} />
                    <span className="text-[10px] font-mono font-bold text-slate-400">{policy.code}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">₹{policy.premiumAmount} <small className="text-slate-400 font-medium">/ year</small></span>
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">Threshold: ₹{policy.claimThreshold}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-slate-700">{policy.policyYear}</span>
                    <span className="text-[10px] text-slate-400">{policy.startDate} to {policy.endDate}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center space-x-1 text-slate-600">
                        <Users className="h-3.5 w-3.5" />
                        <span className="text-sm font-bold">{policy.enrollmentsCount}</span>
                      </div>
                      <span className="text-[8px] uppercase font-bold text-slate-400 tracking-tighter">Enrolled</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center space-x-1 text-slate-600">
                        <ClipboardCheck className="h-3.5 w-3.5" />
                        <span className="text-sm font-bold">{policy.claimsCount}</span>
                      </div>
                      <span className="text-[8px] uppercase font-bold text-slate-400 tracking-tighter">Claims</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <PolicyStatusBadge status={policy.status} />
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/admin/policies/${policy.id}`);
                      }}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/admin/policies/${policy.id}/edit`);
                      }}
                    >
                      <Edit2 className="h-4 w-4" />
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

export default PolicyTable;
