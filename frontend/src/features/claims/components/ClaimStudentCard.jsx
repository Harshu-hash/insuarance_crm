import React from 'react';
import { Card } from '../../../components/ui/Card';
import { User, Phone, School, GraduationCap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClaimStudentCard = ({ claim }) => {
  return (
    <Card 
      title="Student Details" 
      icon={<User className="h-5 w-5 text-indigo-600" />}
    >
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
            <User className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-black text-slate-900 leading-tight">{claim.studentName}</h4>
            <p className="text-[10px] font-mono font-bold text-slate-400">{claim.studentId}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-50">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Class</span>
            <div className="flex items-center text-xs font-bold text-slate-700">
              <GraduationCap className="h-3 w-3 mr-1 text-slate-400" />
              {claim.class}
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Guardian Mobile</span>
            <div className="flex items-center text-xs font-bold text-slate-700">
              <Phone className="h-3 w-3 mr-1 text-slate-400" />
              {claim.guardianMobile}
            </div>
          </div>
          <div className="col-span-2 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">School / District</span>
            <div className="flex items-start text-xs font-bold text-slate-700">
              <School className="h-3 w-3 mr-1 text-slate-400 mt-0.5" />
              <div>
                <p className="leading-tight">{claim.school}</p>
                <div className="flex items-center text-[10px] text-slate-500 mt-1">
                  <MapPin className="h-2.5 w-2.5 mr-1" />
                  {claim.district}, {claim.block}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <Link 
            to={`/admin/students/${claim.studentId}`} 
            className="text-[10px] font-bold text-primary hover:underline uppercase tracking-wider"
          >
            View Full Student Profile
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ClaimStudentCard;
