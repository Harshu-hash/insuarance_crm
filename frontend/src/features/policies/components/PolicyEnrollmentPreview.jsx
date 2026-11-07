import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Users, User, ArrowRight } from 'lucide-react';

const PolicyEnrollmentPreview = () => {
  // Placeholder data
  const enrollments = [
    { id: 'ENR-001', name: 'Rahul Sharma', school: 'Adarsh High', status: 'active' },
    { id: 'ENR-002', name: 'Priya Verma', school: 'Govt. Secondary', status: 'active' },
    { id: 'ENR-003', name: 'Amit Patel', school: 'Modern Academy', status: 'pending' },
  ];

  return (
    <Card 
      title="Recent Enrollments" 
      icon={<Users className="h-5 w-5 text-blue-600" />}
    >
      <div className="space-y-4">
        {enrollments.map((enr) => (
          <div key={enr.id} className="flex items-center justify-between group">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                <User className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-none">{enr.name}</p>
                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tighter">{enr.school} • {enr.id}</p>
              </div>
            </div>
            <div className={`h-1.5 w-1.5 rounded-full ${enr.status === 'active' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
          </div>
        ))}
        <button className="w-full pt-2 text-[10px] uppercase font-bold text-primary hover:text-primary-dark transition-colors flex items-center justify-center space-x-1">
          <span>View All Enrollments</span>
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </Card>
  );
};

export default PolicyEnrollmentPreview;
