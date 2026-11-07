import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Building2, MapPin, Calendar, UserCheck } from 'lucide-react';

const ClaimHospitalCard = ({ claim }) => {
  return (
    <Card 
      title="Hospital Details" 
      icon={<Building2 className="h-5 w-5 text-blue-600" />}
    >
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-black text-slate-900 leading-tight">{claim.hospitalName}</h4>
          <div className="flex items-start mt-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
            <MapPin className="h-3 w-3 mr-1 mt-0.5" />
            <span>Jaipur Main Road, Sector 4</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-50">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter block">Admission Date</span>
            <div className="flex items-center text-xs font-bold text-slate-700">
              <Calendar className="h-3 w-3 mr-1.5 text-slate-400" />
              {claim.admissionDate}
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter block">Discharge Date</span>
            <div className="flex items-center text-xs font-bold text-slate-700">
              <Calendar className="h-3 w-3 mr-1.5 text-slate-400" />
              {claim.dischargeDate}
            </div>
          </div>
          <div className="col-span-2 space-y-1 pt-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter block">Attending Doctor</span>
            <div className="flex items-center text-xs font-bold text-slate-700">
              <UserCheck className="h-3 w-3 mr-1.5 text-slate-400" />
              Dr. Manish Gupta (Ortho Surgeon)
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ClaimHospitalCard;
