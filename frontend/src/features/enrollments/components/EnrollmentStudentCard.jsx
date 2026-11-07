import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/ui/Card';
import { User, Phone, GraduationCap, MapPin, ExternalLink } from 'lucide-react';
import Button from '../../../components/ui/Button';

const EnrollmentStudentCard = ({ enrollment }) => {
  return (
    <Card 
      title="Student Snapshot" 
      icon={<User className="h-5 w-5 text-blue-600" />}
      actions={
        <Link to={`/admin/students/${enrollment.studentId}`}>
          <Button variant="ghost" size="sm" icon={<ExternalLink className="h-3.5 w-3.5" />}>
            View Profile
          </Button>
        </Link>
      }
    >
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-lg">
            {enrollment.studentName.charAt(0)}
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900">{enrollment.studentName}</h4>
            <p className="text-sm text-slate-500">ID: {enrollment.studentId}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Class</span>
            <div className="flex items-center space-x-1.5 text-slate-700">
              <GraduationCap className="h-4 w-4 text-slate-400" />
              <span className="text-sm font-medium">{enrollment.class}</span>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Guardian Mobile</span>
            <div className="flex items-center space-x-1.5 text-slate-700">
              <Phone className="h-4 w-4 text-slate-400" />
              <span className="text-sm font-medium">{enrollment.guardianMobile}</span>
            </div>
          </div>
        </div>

        <div className="space-y-1 pt-2">
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">School Name</span>
          <div className="flex items-center space-x-1.5 text-slate-700">
            <MapPin className="h-4 w-4 text-slate-400" />
            <span className="text-sm font-medium truncate">{enrollment.school}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EnrollmentStudentCard;
