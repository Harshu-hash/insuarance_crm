import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Loader2 } from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import SchoolForm from '../components/SchoolForm';
import Button from '../../../components/ui/Button';
import { useSchoolDetails, useUpdateSchool } from '../hooks/useSchoolsList';
import { useDistrictsList } from '../../districts/hooks/useDistrictsList';
import { toast } from 'sonner';

const SchoolEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { data: schoolData, isLoading: isSchoolLoading, error } = useSchoolDetails(id);
  const { data: districtsData, isLoading: isDistrictsLoading } = useDistrictsList();
  const updateMutation = useUpdateSchool();

  const districtOptions = useMemo(() => {
    return (districtsData?.data || []).map(d => ({
      value: d.id,
      label: d.name
    }));
  }, [districtsData]);

  const handleSubmit = (payload) => {
    updateMutation.mutate({ id, payload }, {
      onSuccess: () => {
        toast.success('Institutional profiles updated successfully');
        navigate(`/admin/schools/${id}`);
      },
      onError: (err) => {
        toast.error(err.message || 'Failed to update institutional data');
      }
    });
  };

  if (isSchoolLoading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
      </div>
    );
  }

  if (error || !schoolData?.data) {
    return (
      <PageContainer>
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <h2 className="text-xl font-bold text-text-primary">Institutional record not found</h2>
          <p className="text-text-secondary mt-2">The unit you are trying to edit doesn't exist or has been removed.</p>
          <Button className="mt-6" onClick={() => navigate('/admin/schools')}>
            Back to Inventory
          </Button>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer className="bg-slate-50/50 min-h-screen">
      <div className="mb-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate(`/admin/schools/${id}`)}
          className="text-text-secondary -ml-2 hover:bg-transparent"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Dashboard
        </Button>
      </div>

      <PageHeader 
        title={`Edit Profile: ${schoolData.data.name}`} 
        subtitle="Manage contact details, re-map institutional hierarchy, or update operational settings for this unit."
      />

      <div className="max-w-5xl mx-auto pb-24 px-4">
        <div className="bg-white rounded-3xl border border-border shadow-sm p-6 lg:p-12">
          <SchoolForm 
            initialData={schoolData.data} 
            onSubmit={handleSubmit} 
            onCancel={() => navigate(`/admin/schools/${id}`)}
            isLoading={updateMutation.isPending || isDistrictsLoading}
            districtOptions={districtOptions}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default SchoolEditPage;
