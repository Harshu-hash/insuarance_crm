import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { ArrowLeft, ExternalLink, ShieldCheck, CreditCard, RotateCcw } from 'lucide-react';
import IncentiveRecipientCard from '../components/IncentiveRecipientCard';
import IncentiveEnrollmentCard from '../components/IncentiveEnrollmentCard';
import IncentiveHierarchyCard from '../components/IncentiveHierarchyCard';
import IncentivePayoutCard from '../components/IncentivePayoutCard';
import IncentiveFlagsCard from '../components/IncentiveFlagsCard';
import IncentiveTimelineCard from '../components/IncentiveTimelineCard';
import IncentiveNotesSection from '../components/IncentiveNotesSection';
import IncentiveStatusBadge from '../components/IncentiveStatusBadge';
import { useIncentiveDetails } from '../hooks/useIncentiveDetails';

const IncentiveDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: incentive, isLoading } = useIncentiveDetails(id);

  if (isLoading) {
    return (
      <PageContainer>
        <div className="h-8 w-32 bg-slate-100 animate-pulse mb-6 rounded"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="h-64 bg-slate-50 animate-pulse rounded-2xl"></div>
            <div className="h-64 bg-slate-50 animate-pulse rounded-2xl"></div>
          </div>
          <div className="space-y-6">
            <div className="h-48 bg-slate-50 animate-pulse rounded-2xl"></div>
            <div className="h-48 bg-slate-50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="mb-6">
        <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">
          <ArrowLeft size={14} className="mr-2" /> Back to Records
        </Button>
      </div>

      <PageHeader 
        title={`Incentive: ${incentive.id}`}
        subtitle={`Detailed breakdown of incentive generation for ${incentive.studentName}.`}
        actions={
          <div className="flex items-center space-x-3">
             <Button variant="outline" size="sm">
               <RotateCcw size={14} className="mr-2" /> Reverse Record
             </Button>
             <Button variant="primary" size="sm">
               <ShieldCheck size={14} className="mr-2" /> Verify & Release
             </Button>
          </div>
        }
      >
        <div className="flex items-center space-x-3 mt-2">
           <IncentiveStatusBadge status={incentive.status} />
           <span className="text-sm font-black text-slate-800">₹{incentive.amount.toLocaleString()}</span>
           <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">/ {incentive.recipientRole} Incentive</span>
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Recipient Info */}
          <IncentiveRecipientCard recipient={incentive} />

          {/* Source Linkage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <IncentiveEnrollmentCard enrollment={incentive} />
             <IncentiveHierarchyCard data={incentive} />
          </div>

          {/* Audit & Notes */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
             <IncentiveNotesSection />
          </div>
        </div>

        <div className="space-y-6">
          {/* Status & Timeline */}
          <IncentivePayoutCard incentive={incentive} />
          <IncentiveTimelineCard incentive={incentive} />
          <IncentiveFlagsCard flags={incentive.flags} />
          
          {/* Actions Placeholder */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
             <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 flex items-center">
                <CreditCard size={12} className="mr-2" /> Finance Actions
             </h4>
             <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start text-[10px] h-8 font-black uppercase tracking-widest bg-white">
                   <ExternalLink size={12} className="mr-2" /> View Enrollment
                </Button>
                <Button variant="outline" className="w-full justify-start text-[10px] h-8 font-black uppercase tracking-widest bg-white">
                   <ExternalLink size={12} className="mr-2" /> View Recipient
                </Button>
             </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default IncentiveDetailsPage;
