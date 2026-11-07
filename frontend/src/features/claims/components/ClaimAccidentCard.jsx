import React from 'react';
import { Card } from '../../../components/ui/Card';
import { AlertCircle, MapPin, Calendar, Clock, FileText } from 'lucide-react';

const ClaimAccidentCard = ({ claim }) => {
  return (
    <Card 
      title="Accident Details" 
      icon={<AlertCircle className="h-5 w-5 text-rose-600" />}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Accident Date</span>
            <div className="flex items-center text-sm font-bold text-slate-900">
              <Calendar className="h-3.5 w-3.5 mr-1.5 text-slate-400" />
              {claim.accidentDate}
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Location</span>
            <div className="flex items-center text-sm font-bold text-slate-900">
              <MapPin className="h-3.5 w-3.5 mr-1.5 text-slate-400" />
              {claim.accidentLocation}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-50">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Description</span>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 italic">
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              "{claim.accidentDescription}"
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 pt-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            Reported: {claim.submittedDate}
          </div>
          <div className="flex items-center text-rose-600">
            <FileText className="h-3 w-3 mr-1" />
            Category: Accidental Injury
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ClaimAccidentCard;
