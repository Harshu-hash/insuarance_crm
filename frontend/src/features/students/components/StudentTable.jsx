import React from 'react';
import { Eye, Edit2, MapPin, Building2, User, Phone, Calendar, ClipboardList } from 'lucide-react';
import { StudentStatusBadge, StudentPolicyBadge, StudentClaimBadge } from './StudentBadges';
import { cn } from '../../../utils/cn';

const StudentTable = ({ students = [], isLoading, onView, onEdit }) => {
  if (isLoading) {
    return (
      <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden animate-pulse p-20 text-center">
        <span className="text-sm font-bold text-text-secondary uppercase tracking-widest leading-loose">
          Synchronizing Registry...<br/>
          <span className="text-[10px] opacity-50">Fetching student identities and policy linkages</span>
        </span>
      </div>
    );
  }

  if (students.length === 0) {
    return (
      <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden py-16 px-10 text-center">
        <div className="h-16 w-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-dashed border-slate-200">
          <User className="h-8 w-8 text-slate-300" />
        </div>
        <h3 className="text-lg font-bold text-text-primary mb-1 text-center">No student records found</h3>
        <p className="text-sm text-text-secondary max-w-sm mx-auto text-center">Adjust your filters or structural mapping to find specific insured persons.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1200px]">
          <thead className="bg-slate-50 border-b border-border">
            <tr>
              <th className="px-6 py-4 text-[10px] font-black text-text-secondary uppercase tracking-wider">Identity</th>
              <th className="px-6 py-4 text-[10px] font-black text-text-secondary uppercase tracking-wider">Academic / Institute</th>
              <th className="px-6 py-4 text-[10px] font-black text-text-secondary uppercase tracking-wider">Guardian Contact</th>
              <th className="px-6 py-4 text-[10px] font-black text-text-secondary uppercase tracking-wider">Records Status</th>
              <th className="px-6 py-4 text-[10px] font-black text-text-secondary uppercase tracking-wider">Policy Tracking</th>
              <th className="px-6 py-4 text-[10px] font-black text-text-secondary uppercase tracking-wider text-right">Claims</th>
              <th className="px-6 py-4 text-[10px] font-black text-text-secondary uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {students.map((student) => (
              <tr 
                key={student.id} 
                className="hover:bg-slate-50/50 transition-all cursor-pointer group"
                onClick={() => onView(student.id)}
              >
                {/* Identity */}
                <td className="px-6 py-4">
                  <div>
                    <p className="text-[13px] font-black text-text-primary group-hover:text-primary transition-colors leading-none mb-1.5">{student.name}</p>
                    <div className="flex items-center gap-1.5 font-mono text-[9px] text-text-secondary font-bold uppercase">
                       <span className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-500 border border-slate-200">{student.studentId}</span>
                       <span className="text-slate-300">|</span>
                       <span>{new Date().getFullYear() - new Date(student.dob).getFullYear()} Y/O</span>
                    </div>
                  </div>
                </td>

                {/* Academic / Institute */}
                <td className="px-6 py-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5">
                       <span className="px-1.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[10px] font-black border border-indigo-100 uppercase tracking-tighter">Class {student.class}</span>
                       <span className="text-[11px] font-bold text-text-primary truncate max-w-[150px]">{student.schoolName}</span>
                    </div>
                    <div className="flex items-center gap-1 pl-1">
                       <MapPin className="h-2.5 w-2.5 text-slate-400" />
                       <span className="text-[9px] font-bold text-text-secondary uppercase tracking-tighter italic">{student.districtName} / {student.blockName}</span>
                    </div>
                  </div>
                </td>

                {/* Guardian Contact */}
                <td className="px-6 py-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5">
                       <User className="h-3 w-3 text-slate-400" />
                       <span className="text-[11px] font-black text-text-primary truncate">{student.guardianName}</span>
                    </div>
                    <div className={cn(
                      "flex items-center gap-1.5",
                      !student.guardianMobile ? 'opacity-30' : ''
                    )}>
                       <Phone className="h-3 w-3 text-slate-400" />
                       <span className="text-[10px] font-bold text-text-secondary">{student.guardianMobile || 'NO CONTACT'}</span>
                    </div>
                  </div>
                </td>

                {/* Records Status */}
                <td className="px-6 py-4">
                  <div className="space-y-2">
                    <StudentStatusBadge status={student.status} />
                    {student.flags?.length > 0 && (
                      <div className="flex items-center gap-1">
                         <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                         <span className="text-[9px] font-black text-amber-700 uppercase tracking-tighter">DATA GAP AUDIT REQ.</span>
                      </div>
                    )}
                  </div>
                </td>

                {/* Policy Tracking */}
                <td className="px-6 py-4">
                  <div className="space-y-2">
                    <StudentPolicyBadge status={student.policyStatus} />
                    <div className="flex items-center gap-1 font-mono text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                       <Calendar className="h-2.5 w-2.5" />
                       REG: {new Date(student.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: '2-digit' })}
                    </div>
                  </div>
                </td>

                {/* Claims */}
                <td className="px-6 py-4 text-right">
                   <StudentClaimBadge count={student.claimsCount} />
                </td>

                {/* Actions */}
                <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => onView(student.id)}
                      className="p-1.5 hover:bg-slate-100 rounded text-slate-400 hover:text-primary transition-colors"
                      title="View Profile"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => onEdit(student.id)}
                      className="p-1.5 hover:bg-slate-100 rounded text-slate-400 hover:text-primary transition-colors"
                      title="Edit Record"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button 
                      className="p-1.5 hover:bg-slate-100 rounded text-slate-400 hover:text-indigo-600 transition-colors"
                      title="Enrollment Documents"
                    >
                      <ClipboardList className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Table Footer */}
      <div className="px-6 py-3 bg-slate-50 border-t border-border flex items-center justify-between">
        <div className="flex items-center gap-4">
          <p className="text-[10px] font-black text-text-secondary uppercase tracking-widest leading-none">
            Registry Count: {students.length}
          </p>
          <div className="h-3 w-px bg-slate-200" />
          <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-tighter">
            {students.filter(s => s.policyStatus === 'active').length} Protected Persons
          </p>
        </div>
        <div className="flex items-center gap-2">
           <span className="text-[10px] font-bold text-text-secondary uppercase tracking-tighter mr-2">Pagination Placeholder</span>
           <button className="px-3 py-1.5 text-[10px] font-black border border-border bg-white rounded-md opacity-40 cursor-not-allowed uppercase tracking-tighter shadow-sm">Previous</button>
           <button className="px-3 py-1.5 text-[10px] font-black border border-border bg-white rounded-md opacity-40 cursor-not-allowed uppercase tracking-tighter shadow-sm">Next</button>
        </div>
      </div>
    </div>
  );
};

export default StudentTable;
