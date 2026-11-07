import React from 'react';
import { Card } from '../../../components/ui/Card';
import { 
  Shield, 
  CheckCircle2, 
  FileEdit, 
  AlertCircle, 
  Calendar,
  Users,
  ClipboardCheck,
  Clock
} from 'lucide-react';

const PolicySummaryCard = ({ summary, loading }) => {
  if (loading || !summary) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-24 bg-slate-100 animate-pulse rounded-xl" />
        ))}
      </div>
    );
  }

  const items = [
    { 
      label: 'Total Policies', 
      value: summary.totalPolicies, 
      icon: Shield, 
      color: 'text-blue-600', 
      bg: 'bg-blue-50' 
    },
    { 
      label: 'Active Policies', 
      value: summary.activePolicies, 
      icon: CheckCircle2, 
      color: 'text-emerald-600', 
      bg: 'bg-emerald-50' 
    },
    { 
      label: 'Linked Enrollments', 
      value: summary.totalEnrollmentsLinked.toLocaleString(), 
      icon: Users, 
      color: 'text-purple-600', 
      bg: 'bg-purple-50' 
    },
    { 
      label: 'Current Year', 
      value: summary.currentPolicyYear, 
      icon: Calendar, 
      color: 'text-amber-600', 
      bg: 'bg-amber-50' 
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {items.map((item, index) => (
        <Card key={index} className="p-4 flex items-center space-x-4">
          <div className={`h-12 w-12 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
            <item.icon className={`h-6 w-6 ${item.color}`} />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{item.label}</p>
            <h3 className="text-xl font-bold text-slate-900">{item.value}</h3>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default PolicySummaryCard;
