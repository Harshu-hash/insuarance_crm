import React from 'react';
import Card from '../../../components/ui/Card';
import { Calendar, Tag, ShieldCheck, User } from 'lucide-react';

const EnrollmentProfileCard = ({ enrollment }) => {
  return (
    <Card title="Enrollment Profile" icon={<Tag className="h-5 w-5 text-primary-600" />}>
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b border-slate-50 pb-3">
          <span className="text-sm text-slate-500">Enrollment ID</span>
          <span className="text-sm font-bold text-slate-900 font-mono">{enrollment.id}</span>
        </div>
        <div className="flex justify-between items-center border-b border-slate-50 pb-3">
          <span className="text-sm text-slate-500">Source</span>
          <span className="text-sm font-semibold text-slate-900 capitalize">{enrollment.source.replace('_', ' ')}</span>
        </div>
        <div className="flex justify-between items-center border-b border-slate-50 pb-3">
          <span className="text-sm text-slate-500">Created Date</span>
          <div className="flex items-center space-x-1">
            <Calendar className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-sm font-medium text-slate-900">{enrollment.createdDate}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-slate-500">Updated Date</span>
          <div className="flex items-center space-x-1">
            <Calendar className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-sm font-medium text-slate-900">{enrollment.updatedDate}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EnrollmentProfileCard;
