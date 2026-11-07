import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { 
  Edit2, 
  ArrowLeft, 
  RefreshCw, 
  ShieldAlert, 
  Settings,
  Download,
  Activity,
  Calendar
} from 'lucide-react';
import PolicyStatusBadge from '../components/PolicyStatusBadge';
import PolicyTypeBadge from '../components/PolicyTypeBadge';
import PolicyCoverageCard from '../components/PolicyCoverageCard';
import PolicyPremiumCard from '../components/PolicyPremiumCard';
import PolicyClaimRulesCard from '../components/PolicyClaimRulesCard';
import PolicyEligibilityCard from '../components/PolicyEligibilityCard';
import PolicyUsageCard from '../components/PolicyUsageCard';
import PolicyEnrollmentPreview from '../components/PolicyEnrollmentPreview';
import PolicyClaimsPreview from '../components/PolicyClaimsPreview';
import PolicyTimelineCard from '../components/PolicyTimelineCard';
import PolicyNotesSection from '../components/PolicyNotesSection';
import { usePolicyDetails } from '../hooks/usePolicyDetails';

const PolicyDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { policy, loading, error, refresh } = usePolicyDetails(id);

  if (loading) {
    return (
      <PageContainer>
        <div className="flex items-center justify-center min-h-[400px]">
          <RefreshCw className="h-8 w-8 text-primary-500 animate-spin" />
        </div>
      </PageContainer>
    );
  }

  if (error || !policy) {
    return (
      <PageContainer>
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <ShieldAlert className="h-16 w-16 text-rose-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900">Policy Not Found</h2>
          <p className="text-slate-500 mt-2">The configuration you're looking for doesn't exist or has been removed.</p>
          <Button 
            variant="primary" 
            className="mt-6" 
            onClick={() => navigate('/admin/policies')}
            icon={<ArrowLeft className="h-4 w-4" />}
          >
            Back to Policies
          </Button>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageHeader
        title={policy.name}
        subtitle={`Configuration and rules for ${policy.code}`}
        onBack={() => navigate('/admin/policies')}
        actions={
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" icon={<Download className="h-4 w-4" />}>
              Export Config
            </Button>
            <Button 
              variant="primary" 
              size="sm" 
              icon={<Edit2 className="h-4 w-4" />}
              onClick={() => navigate(`/admin/policies/${id}/edit`)}
            >
              Edit Policy
            </Button>
          </div>
        }
      >
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <PolicyStatusBadge status={policy.status} />
          <PolicyTypeBadge type={policy.type} />
          <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
            <Calendar className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[10px] uppercase font-bold text-slate-600">{policy.policyYear}</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
            <Activity className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[10px] uppercase font-bold text-slate-600">{policy.insurer}</span>
          </div>
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Rules & Config */}
        <div className="lg:col-span-1 space-y-6">
          <PolicyCoverageCard policy={policy} />
          <PolicyPremiumCard policy={policy} />
          <PolicyClaimRulesCard policy={policy} />
        </div>

        {/* Middle Column: Eligibility & Preview */}
        <div className="lg:col-span-1 space-y-6">
          <PolicyEligibilityCard policy={policy} />
          <PolicyEnrollmentPreview />
          <PolicyClaimsPreview />
        </div>

        {/* Right Column: Usage & Audit */}
        <div className="lg:col-span-1 space-y-6">
          <PolicyUsageCard policy={policy} />
          <PolicyTimelineCard policy={policy} />
          <PolicyNotesSection policy={policy} />
        </div>
      </div>
    </PageContainer>
  );
};

export default PolicyDetailsPage;
