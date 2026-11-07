import React from 'react';
import { MoreVertical, Eye, Edit2, Map, ShieldAlert, TrendingUp } from 'lucide-react';
import { cn } from '../../../utils/cn';
import DistrictStatusBadge from './DistrictStatusBadge';
import DistrictManagerBadge from './DistrictManagerBadge';
import Button from '../../../components/ui/Button';
import { DISTRICT_PERFORMANCE_LABELS } from '../constants/district.constants';

const DistrictTable = ({ 
  districts = [], 
  isLoading = false, 
  onView, 
  onEdit, 
  onToggleStatus 
}) => {
  if (isLoading) {
    return (
      <div className="w-full bg-white rounded-xl border border-border overflow-hidden animate-pulse">
        <div className="h-12 bg-slate-50 border-b border-border" />
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-16 border-b border-border last:border-0" />
        ))}
      </div>
    );
  }

  if (districts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 bg-white rounded-xl border-2 border-dashed border-slate-200">
        <div className="h-12 w-12 bg-slate-50 rounded-full flex items-center justify-center mb-4">
          <Map className="h-6 w-6 text-slate-300" />
        </div>
        <h3 className="text-sm font-bold text-text-primary">No districts found</h3>
        <p className="text-xs text-text-secondary mt-1">Try adjusting your filters or create a new district.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-xl border border-border shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1200px]">
          <thead>
            <tr className="bg-slate-50 border-b border-border">
              <th className="px-6 py-4 text-xs font-bold text-text-secondary uppercase tracking-wider">District Detail</th>
              <th className="px-6 py-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Region</th>
              <th className="px-6 py-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Manager</th>
              <th className="px-6 py-4 text-xs font-bold text-text-secondary uppercase tracking-wider text-center">Blocks</th>
              <th className="px-6 py-4 text-xs font-bold text-text-secondary uppercase tracking-wider text-center">Enrollments</th>
              <th className="px-6 py-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Premium Collected</th>
              <th className="px-6 py-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Performance</th>
              <th className="px-6 py-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {districts.map((district) => (
              <tr 
                key={district.id} 
                className="hover:bg-slate-50/50 transition-colors group cursor-pointer"
                onClick={() => onView(district.id)}
              >
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">{district.name}</p>
                    <code className="text-[10px] font-mono bg-slate-100 text-slate-600 px-1 py-0.5 rounded">
                      {district.code}
                    </code>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs font-medium text-text-secondary">{district.region}</span>
                </td>
                <td className="px-6 py-4">
                  <DistrictManagerBadge manager={district.manager} />
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold text-text-primary">{district.metrics.totalBlocks}</span>
                    <span className="text-[10px] text-text-secondary uppercase">Blocks</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold text-text-primary">{district.metrics.activeEnrollments.toLocaleString()}</span>
                    <span className="text-[10px] text-text-secondary uppercase">Active</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-text-primary">₹{(district.metrics.premiumCollected / 100000).toFixed(1)}L</span>
                    <span className="text-[10px] text-text-secondary">Premium</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className={cn(
                    "inline-flex items-center gap-1.25 px-2 py-0.5 rounded text-[10px] font-bold uppercase",
                    district.performance === 'high_performing' ? "bg-emerald-50 text-emerald-700" :
                    district.performance === 'stable' ? "bg-blue-50 text-blue-700" :
                    district.performance === 'low_activity' ? "bg-amber-50 text-amber-700" :
                    "bg-red-50 text-red-700"
                  )}>
                    <TrendingUp className="h-3 w-3" />
                    {DISTRICT_PERFORMANCE_LABELS[district.performance]}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <DistrictStatusBadge status={district.status} />
                </td>
                <td className="px-6 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-end gap-1 opacity-10 md:opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" onClick={() => onView(district.id)}>
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => onEdit(district.id)}>
                      <Edit2 className="h-4 w-4" />
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

export default DistrictTable;
