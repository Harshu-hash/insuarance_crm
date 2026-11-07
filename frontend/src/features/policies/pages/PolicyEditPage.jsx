import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import PolicyForm from '../components/PolicyForm';
import { usePolicyDetails } from '../hooks/usePolicyDetails';
import { useUpdatePolicy } from '../hooks/useUpdatePolicy';
import { toast } from 'sonner';
import { RefreshCw } from 'lucide-react';

const PolicyEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { policy, loading: fetching } = usePolicyDetails(id);
  const { updatePolicy, loading: updating } = useUpdatePolicy();

  const handleSubmit = async (data) => {
    try {
      await updatePolicy(id, data);
      toast.success('Insurance policy updated successfully');
      navigate(`/admin/policies/${id}`);
    } catch (err) {
      toast.error(err.message || 'Failed to update policy');
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

  return (
    <PageContainer>
      <PageHeader
        title={`Edit Policy: ${policy?.code}`}
        subtitle={`Updating configuration for ${policy?.name}`}
        onBack={() => navigate(`/admin/policies/${id}`)}
      />
      
      <PolicyForm 
        initialData={policy}
        onSubmit={handleSubmit} 
        onCancel={() => navigate(`/admin/policies/${id}`)} 
        loading={updating}
        isEdit={true}
      />
    </PageContainer>
  );
};

export default PolicyEditPage;
