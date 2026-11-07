import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Download, 
  ShieldAlert, 
  History, 
  CreditCard, 
  Receipt, 
  ExternalLink,
  RefreshCw
} from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import PaymentStatusBadge from '../components/PaymentStatusBadge';
import PolicyActivationBadge from '../components/PolicyActivationBadge';
import EnrollmentProfileCard from '../components/EnrollmentProfileCard';
import EnrollmentStudentCard from '../components/EnrollmentStudentCard';
import EnrollmentPolicyCard from '../components/EnrollmentPolicyCard';
import EnrollmentPaymentCard from '../components/EnrollmentPaymentCard';
import EnrollmentIncentiveCard from '../components/EnrollmentIncentiveCard';
import EnrollmentHierarchyCard from '../components/EnrollmentHierarchyCard';
import EnrollmentReceiptCard from '../components/EnrollmentReceiptCard';
import EnrollmentFlagsCard from '../components/EnrollmentFlagsCard';
import EnrollmentTimelineCard from '../components/EnrollmentTimelineCard';
import EnrollmentNotesSection from '../components/EnrollmentNotesSection';
import { useEnrollmentDetails } from '../hooks/useEnrollmentDetails';

const EnrollmentDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { enrollment, loading, error, refresh } = useEnrollmentDetails(id);

  if (loading) {
    return (
      <PageContainer>
        <div className="flex items-center justify-center min-h-[400px]">
          <RefreshCw className="h-8 w-8 text-primary-500 animate-spin" />
        </div>
      </PageContainer>
    );
  }

  if (error || !enrollment) {
    return (
      <PageContainer>
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <ShieldAlert className="h-16 w-16 text-rose-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900">Enrollment Not Found</h2>
          <p className="text-slate-500 mt-2">The enrollment record you're looking for doesn't exist or has been archived.</p>
          <Button 
            variant="primary" 
            className="mt-6" 
            onClick={() => navigate('/admin/enrollments')}
            icon={<ArrowLeft className="h-4 w-4" />}
          >
            Back to Enrollments
          </Button>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageHeader
        title={enrollment.id}
        subtitle={`Enrollment record for ${enrollment.studentName} (${enrollment.policyYear})`}
        onBack={() => navigate('/admin/enrollments')}
        actions={
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" icon={<Download className="h-4 w-4" />}>
              Export Detail
            </Button>
            <Button variant="primary" size="sm" icon={<ExternalLink className="h-4 w-4" />}>
              Claim Eligibility
            </Button>
          </div>
        }
      >
        <div className="flex items-center space-x-4 mt-4">
          <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
            <span className="text-[10px] uppercase font-bold text-slate-400">Payment:</span>
            <PaymentStatusBadge status={enrollment.paymentStatus} />
          </div>
          <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
            <span className="text-[10px] uppercase font-bold text-slate-400">Policy:</span>
            <PolicyActivationBadge status={enrollment.policyStatus} />
          </div>
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Core Identity */}
        <div className="lg:col-span-1 space-y-6">
          <EnrollmentProfileCard enrollment={enrollment} />
          <EnrollmentStudentCard enrollment={enrollment} />
          <EnrollmentHierarchyCard enrollment={enrollment} />
        </div>

        {/* Middle Column: Policy & Finance */}
        <div className="lg:col-span-1 space-y-6">
          <EnrollmentPolicyCard enrollment={enrollment} />
          <EnrollmentPaymentCard enrollment={enrollment} />
          <EnrollmentIncentiveCard enrollment={enrollment} />
        </div>

        {/* Right Column: Operations & Audit */}
        <div className="lg:col-span-1 space-y-6">
          <EnrollmentReceiptCard enrollment={enrollment} />
          <EnrollmentFlagsCard enrollment={enrollment} />
          <EnrollmentTimelineCard enrollment={enrollment} />
          <EnrollmentNotesSection enrollment={enrollment} />
        </div>
      </div>
    </PageContainer>
  );
};

export default EnrollmentDetailsPage;
