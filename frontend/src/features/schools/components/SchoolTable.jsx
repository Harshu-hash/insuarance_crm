import React from 'react';
import { Eye, Edit2, ShieldCheck, ShieldAlert, MapPin, Building2, User } from 'lucide-react';
import { SchoolStatusBadge, SchoolTypeBadge } from './SchoolBadges';
import { SCHOOL_STATUS } from '../constants/school.constants';
import { cn } from '../../../utils/cn';

const SchoolTable = ({ schools = [], isLoading, onView, onEdit, onToggleStatus }) => {
  if (isLoading) {
    return (
      <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden animate-pulse p-20 text-center">
        <span className="text-sm font-bold text-text-secondary uppercase tracking-widest">Loading Institutional Data...</span>
      </div>
    );
  }

  if (schools.length === 0) {
    return (
      <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden py-16 px-10 text-center">
        <div className="h-16 w-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-dashed border-slate-200">
          <Building2 className="h-8 w-8 text-slate-300" />
        </div>
        <h3 className="text-lg font-bold text-text-primary mb-1">No schools found</h3>
        <p className="text-sm text-text-secondary max-w-sm mx-auto">Try adjusting your filters or search to find specific institutional units.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-border">
            <tr>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider">School Identity</th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider">Geography</th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider">Type / Contact</th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider text-right">Students</th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider text-right">Enrollments</th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider text-right">Premium Coll.</th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {schools.map((school) => (
              <tr 
                key={school.id} 
                className="hover:bg-slate-50/50 transition-colors cursor-pointer group"
                onClick={() => onView(school.id)}
              >
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-black text-text-primary group-hover:text-primary transition-colors">{school.name}</p>
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-tighter">{school.code}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                       <MapPin className="h-2.5 w-2.5 text-slate-400" />
                       <span className="text-[11px] font-bold text-text-primary">{school.districtName}</span>
                    </div>
                    <div className="flex items-center gap-1 pl-3">
                       <span className="text-[10px] font-medium text-text-secondary italic">{school.blockName}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-2">
                    <SchoolTypeBadge type={school.schoolType} />
                    <div className="flex items-center gap-1.5 overflow-hidden">
                      <div className="h-4 w-4 rounded-full bg-slate-100 flex items-center justify-center">
                        <User className="h-2.5 w-2.5 text-slate-400" />
                      </div>
                      <span className="text-[10px] font-bold text-text-secondary truncate">{school.contactPerson}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <SchoolStatusBadge status={school.status} />
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-sm font-bold text-text-primary">{school.metrics.totalStudents}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <div>
                    <p className="text-sm font-black text-emerald-600">{school.metrics.activeEnrollments}</p>
                    <p className="text-[9px] text-text-secondary font-bold uppercase tracking-tighter">
                      {((school.metrics.activeEnrollments/school.metrics.totalStudents)*100).toFixed(0)}% COVERAGE
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-sm font-black text-primary">₹{school.metrics.premiumCollected.toLocaleString()}</p>
                </td>
                <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => onView(school.id)}
                      className="p-1.5 hover:bg-slate-100 rounded text-slate-400 hover:text-primary transition-colors"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => onEdit(school.id)}
                      className="p-1.5 hover:bg-slate-100 rounded text-slate-400 hover:text-primary transition-colors"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => onToggleStatus(school.id)}
                      className={cn(
                        "p-1.5 rounded transition-colors",
                        school.status === SCHOOL_STATUS.ACTIVE 
                          ? 'text-red-400 hover:bg-red-50 hover:text-red-600' 
                          : 'text-emerald-400 hover:bg-emerald-50 hover:text-emerald-600'
                      )}
                    >
                      {school.status === SCHOOL_STATUS.ACTIVE ? (
                        <ShieldAlert className="h-4 w-4" />
                      ) : (
                        <ShieldCheck className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer / Pagination Placeholder */}
      <div className="px-6 py-4 bg-slate-50 border-t border-border flex items-center justify-between">
        <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest leading-none">
          Tracked Institutional Units: {schools.length}
        </p>
        <div className="flex items-center gap-2">
           <button className="px-3 py-1 text-[10px] font-bold border border-border bg-white rounded-md opacity-50 cursor-not-allowed uppercase tracking-tighter">Previous</button>
           <button className="px-3 py-1 text-[10px] font-bold border border-border bg-white rounded-md opacity-50 cursor-not-allowed uppercase tracking-tighter">Next</button>
        </div>
      </div>
    </div>
  );
};

export default SchoolTable;
