import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, FileText, MoreHorizontal, ExternalLink } from 'lucide-react';
import Button from '../../../components/ui/Button';
import PaymentStatusBadge from './PaymentStatusBadge';
import PolicyActivationBadge from './PolicyActivationBadge';

const EnrollmentTable = ({ enrollments, loading }) => {
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

  if (!enrollments?.length) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-12 text-center shadow-sm">
        <div className="mx-auto h-16 w-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
          <FileText className="h-8 w-8 text-slate-300" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">No Enrollments Found</h3>
        <p className="text-slate-500 mt-1 max-w-sm mx-auto">
          We couldn't find any enrollment records matching your filters. Try adjusting your search criteria.
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
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Enrollment ID</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Student</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">School / Hierarchy</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Policy Year</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Premium</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Incentives</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {enrollments.map((enrollment) => (
              <tr 
                key={enrollment.id} 
                className="hover:bg-slate-50 transition-colors cursor-pointer group"
                onClick={() => navigate(`/admin/enrollments/${enrollment.id}`)}
              >
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-slate-900 font-mono tracking-tight group-hover:text-primary-600 transition-colors">
                    {enrollment.id}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-900">{enrollment.studentName}</span>
                    <span className="text-xs text-slate-500">{enrollment.studentId}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col max-w-[200px]">
                    <span className="text-sm text-slate-700 truncate font-medium">{enrollment.school}</span>
                    <span className="text-xs text-slate-500 truncate">{enrollment.district} › {enrollment.block}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-slate-700 font-medium">{enrollment.policyYear}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">₹{enrollment.premiumAmount}</span>
                    <PaymentStatusBadge status={enrollment.paymentStatus} />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <PolicyActivationBadge status={enrollment.policyStatus} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center text-[10px] uppercase font-bold text-slate-400">
                      <span className="w-6">BM:</span>
                      <span className="text-slate-700">₹{enrollment.bmIncentive}</span>
                    </div>
                    <div className="flex items-center text-[10px] uppercase font-bold text-slate-400">
                      <span className="w-6">DM:</span>
                      <span className="text-slate-700">₹{enrollment.dmIncentive}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/admin/enrollments/${enrollment.id}`);
                      }}
                    >
                      <Eye className="h-4 w-4" />
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

export default EnrollmentTable;
