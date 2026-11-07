import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import PolicyForm from '../components/PolicyForm';
import { useCreatePolicy } from '../hooks/useCreatePolicy';
import { toast } from 'sonner';

const PolicyCreatePage = () => {
  const navigate = useNavigate();
  const { createPolicy, loading } = useCreatePolicy();

  const handleSubmit = async (data) => {
    try {
      await createPolicy(data);
      toast.success('Insurance policy created successfully');
      navigate('/admin/policies');
    } catch (err) {
      toast.error(err.message || 'Failed to create policy');
    }
  };

  return (
    <PageContainer>
      <PageHeader
        title="Create Policy"
        subtitle="Configure new insurance product, premium rules, and claim thresholds."
        onBack={() => navigate('/admin/policies')}
      />
      
      <PolicyForm 
        onSubmit={handleSubmit} 
        onCancel={() => navigate('/admin/policies')} 
        loading={loading}
      />
    </PageContainer>
  );
};

export default PolicyCreatePage;
