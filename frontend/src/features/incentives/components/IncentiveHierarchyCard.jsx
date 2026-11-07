import React from 'react';
import { Card, CardContent } from '../../../components/ui/Card';
import { MapPin, Building2, UserCog, Users } from 'lucide-react';

const IncentiveHierarchyCard = ({ data }) => {
  return (
    <Card className="border-none shadow-sm shadow-slate-200/50">
      <CardContent className="p-6">
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center">
          <MapPin size={14} className="mr-2" /> Geographic Hierarchy
        </h3>

        <div className="space-y-4 relative">
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
              <Building2 size={16} />
            </div>
            <div>
              <span className="text-[9px] font-bold text-slate-400 uppercase">District</span>
              <p className="text-xs font-bold text-slate-800">{data.district}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
              <Users size={16} />
            </div>
            <div>
              <span className="text-[9px] font-bold text-slate-400 uppercase">Block</span>
              <p className="text-xs font-bold text-slate-800">{data.block}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
              <UserCog size={16} />
            </div>
            <div>
              <span className="text-[9px] font-bold text-slate-400 uppercase">Assigned BM / DM</span>
              <p className="text-xs font-bold text-slate-800">Field Hierarchy Verified</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IncentiveHierarchyCard;
