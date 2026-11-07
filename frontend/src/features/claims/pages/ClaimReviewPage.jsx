import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { Card } from '../../../components/ui/Card';
import { 
  ClipboardCheck, 
  X, 
  Save, 
  RefreshCw, 
  ShieldAlert,
  Info,
  ChevronRight,
  User,
  Building2,
  FileText
} from 'lucide-react';
import { claimReviewSchema } from '../schemas/claimReview.schema';
import { useClaimDetails } from '../hooks/useClaimDetails';
import { useReviewClaim } from '../hooks/useReviewClaim';
import { toast } from 'sonner';
import ReviewDecisionSection from '../components/ClaimFormSections/ReviewDecisionSection';
import ApprovalAmountSection from '../components/ClaimFormSections/ApprovalAmountSection';
import QueryRaisedSection from '../components/ClaimFormSections/QueryRaisedSection';
import RejectionReasonSection from '../components/ClaimFormSections/RejectionReasonSection';
import ClaimEligibilityCard from '../components/ClaimEligibilityCard';
import ClaimDocumentsCard from '../components/ClaimDocumentsCard';

const ClaimReviewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { claim, eligibility, documents, loading: fetching } = useClaimDetails(id);
  const { submitReview, loading: submitting } = useReviewClaim();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(claimReviewSchema),
    defaultValues: {
      decision: 'mark_under_review',
      reviewerNotes: '',
    }
  });

  const decision = watch('decision');

  const onSubmit = async (data) => {
    try {
      await submitReview(id, data);
      toast.success('Claim review submitted successfully');
      navigate(`/admin/claims/${id}`);
    } catch (err) {
      toast.error(err.message || 'Failed to submit review');
    }
  };

  if (fetching) {
    return (
      <PageContainer>
        <div className="flex items-center justify-center min-h-[400px]">
          <RefreshCw className="h-8 w-8 text-primary-500 animate-spin" />
        </div>
      </PageContainer>
    );
  }

  if (!claim) {
    return (
      <PageContainer>
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <ShieldAlert className="h-16 w-16 text-rose-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900">Claim Not Found</h2>
          <Button variant="primary" className="mt-6" onClick={() => navigate('/admin/claims')}>
            Back to Claims
          </Button>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageHeader
        title={`Review Claim: ${claim.id}`}
        subtitle={`Workflow processing for ${claim.studentName}`}
        onBack={() => navigate(`/admin/claims/${id}`)}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-24">
        {/* Main Context Area */}
        <div className="lg:col-span-8 space-y-6">
          <Card title="Review Context" icon={<Info className="h-5 w-5 text-blue-600" />}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                  <User className="h-3 w-3 mr-1" /> Student
                </div>
                <p className="text-sm font-bold text-slate-900">{claim.studentName}</p>
                <p className="text-[10px] text-slate-500 font-medium">{claim.class}, {claim.school}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                  <Building2 className="h-3 w-3 mr-1" /> Hospital
                </div>
                <p className="text-sm font-bold text-slate-900">{claim.hospitalName}</p>
                <p className="text-[10px] text-slate-500 font-medium">Bill: ₹{claim.billAmount.toLocaleString()}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                  <FileText className="h-3 w-3 mr-1" /> Policy
                </div>
                <p className="text-sm font-bold text-slate-900">{claim.policyCode}</p>
                <p className="text-[10px] text-slate-500 font-medium">{claim.policyName}</p>
              </div>
            </div>
          </Card>

          <ClaimEligibilityCard eligibility={eligibility} />
          <ClaimDocumentsCard documents={documents} />
        </div>

        {/* Right Sidebar: Decision Panel */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <ReviewDecisionSection register={register} errors={errors} watch={watch} />
              
              {decision === 'approve' && (
                <ApprovalAmountSection register={register} errors={errors} claimedAmount={claim.claimedAmount} />
              )}
              
              {decision === 'reject' && (
                <RejectionReasonSection register={register} errors={errors} />
              )}
              
              {decision === 'raise_query' && (
                <QueryRaisedSection register={register} errors={errors} />
              )}

              <Card title="Reviewer Notes" className="mb-6">
                <textarea
                  placeholder="Internal audit notes and justification for the decision..."
                  className="w-full h-32 p-3 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none bg-slate-50"
                  {...register('reviewerNotes')}
                />
                {errors.reviewerNotes && (
                  <p className="mt-1 text-xs text-rose-500 font-medium">{errors.reviewerNotes.message}</p>
                )}
              </Card>

              <div className="flex flex-col space-y-3">
                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-full h-12"
                  loading={submitting}
                  icon={<Save className="h-4 w-4" />}
                >
                  Submit Decision
                </Button>
                <Button 
                  variant="outline" 
                  type="button" 
                  className="w-full"
                  onClick={() => navigate(`/admin/claims/${id}`)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ClaimReviewPage;
