import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { 
  ClipboardCheck, 
  ArrowLeft, 
  RefreshCw, 
  ShieldAlert, 
  Download,
  Share2,
  Printer,
  ExternalLink,
  Calendar,
  Phone
} from 'lucide-react';
import { useClaimDetails } from '../hooks/useClaimDetails';
import ClaimStatusBadge from '../components/ClaimStatusBadge';
import ClaimPaymentStatusBadge from '../components/ClaimPaymentStatusBadge';
import ClaimPriorityBadge from '../components/ClaimPriorityBadge';
import ClaimProfileCard from '../components/ClaimProfileCard';
import ClaimStudentCard from '../components/ClaimStudentCard';
import ClaimPolicyCard from '../components/ClaimPolicyCard';
import ClaimAccidentCard from '../components/ClaimAccidentCard';
import ClaimHospitalCard from '../components/ClaimHospitalCard';
import ClaimBillCard from '../components/ClaimBillCard';
import ClaimDocumentsCard from '../components/ClaimDocumentsCard';
import ClaimEligibilityCard from '../components/ClaimEligibilityCard';
import ClaimReviewPanel from '../components/ClaimReviewPanel';
import ClaimPayoutCard from '../components/ClaimPayoutCard';
import ClaimFlagsCard from '../components/ClaimFlagsCard';
import ClaimTimelineCard from '../components/ClaimTimelineCard';
import ClaimNotesSection from '../components/ClaimNotesSection';

const ClaimDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { 
    claim, 
    documents, 
    timeline, 
    eligibility, 
    loading, 
    error, 
    refresh 
  } = useClaimDetails(id);

  if (loading) {
    return (
      <PageContainer>
        <div className="flex items-center justify-center min-h-[400px]">
          <RefreshCw className="h-8 w-8 text-primary-500 animate-spin" />
        </div>
      </PageContainer>
    );
  }

  if (error || !claim) {
    return (
      <PageContainer>
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <ShieldAlert className="h-16 w-16 text-rose-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900">Claim Not Found</h2>
          <p className="text-slate-500 mt-2">The claim reference you're looking for doesn't exist or has been removed.</p>
          <Button 
            variant="primary" 
            className="mt-6" 
            onClick={() => navigate('/admin/claims')}
            icon={<ArrowLeft className="h-4 w-4" />}
          >
            Back to Claims
          </Button>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageHeader
        title={`Claim: ${claim.id}`}
        subtitle={`Submitted by ${claim.studentName} on ${claim.submittedDate}`}
        onBack={() => navigate('/admin/claims')}
        actions={
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" icon={<Printer className="h-4 w-4" />}>
              Print
            </Button>
            <Button 
              variant="primary" 
              size="sm" 
              icon={<ClipboardCheck className="h-4 w-4" />}
              onClick={() => navigate(`/admin/claims/${id}/review`)}
            >
              Review Claim
            </Button>
          </div>
        }
      >
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <ClaimStatusBadge status={claim.status} />
          <ClaimPaymentStatusBadge status={claim.payoutStatus} />
          <ClaimPriorityBadge priority={claim.priority} />
          <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
            <Calendar className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[10px] uppercase font-bold text-slate-600">Accident: {claim.accidentDate}</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
            <Phone className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[10px] uppercase font-bold text-slate-600">{claim.guardianMobile}</span>
          </div>
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (8 units) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ClaimProfileCard claim={claim} />
            <ClaimStudentCard claim={claim} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ClaimAccidentCard claim={claim} />
            <ClaimHospitalCard claim={claim} />
          </div>

          <ClaimBillCard claim={claim} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ClaimDocumentsCard documents={documents} />
            <ClaimEligibilityCard eligibility={eligibility} />
          </div>
        </div>

        {/* Right Column (4 units) */}
        <div className="lg:col-span-4 space-y-6">
          <ClaimReviewPanel claim={claim} />
          <ClaimPayoutCard claim={claim} />
          <ClaimFlagsCard claim={claim} />
          <ClaimTimelineCard timeline={timeline} />
          <ClaimNotesSection claim={claim} />
        </div>
      </div>
    </PageContainer>
  );
};

export default ClaimDetailsPage;
