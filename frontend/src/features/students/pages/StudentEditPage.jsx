import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Loader2 } from 'lucide-react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import StudentForm from '../components/StudentForm';
import Button from '../../../components/ui/Button';
import { useStudentDetails, useUpdateStudent } from '../hooks/useStudentsList';
import { toast } from 'sonner';

const StudentEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { data: studentData, isLoading: isDetailsLoading, error } = useStudentDetails(id);
  const updateMutation = useUpdateStudent();

  const handleSubmit = (payload) => {
    updateMutation.mutate({ id, payload }, {
      onSuccess: () => {
        toast.success('Student record updated successfully');
        navigate(`/admin/students/${id}`);
      },
      onError: (err) => {
        toast.error(err.message || 'Failed to update student data');
      }
    });
  };

  if (isDetailsLoading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
      </div>
    );
  }

  if (error || !studentData?.data) {
    return (
      <PageContainer>
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <h2 className="text-xl font-bold text-text-primary">Registry record not found</h2>
          <p className="text-text-secondary mt-2">The person you are trying to edit doesn't exist or has been removed.</p>
          <Button className="mt-6" onClick={() => navigate('/admin/students')}>
            Back to Registry
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
          onClick={() => navigate(`/admin/students/${id}`)}
          className="text-text-secondary -ml-2 hover:bg-transparent"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Profile
        </Button>
      </div>

      <PageHeader 
        title={`Maintenance: ${studentData.data.name}`} 
        subtitle="Perform institutional re-mapping, update guardian contacts, or correct academic registry data for this insured person."
      />

      <div className="max-w-5xl mx-auto pb-24 px-4">
        <div className="bg-white rounded-3xl border border-border shadow-sm p-6 lg:p-12">
          <StudentForm 
            initialData={studentData.data} 
            onSubmit={handleSubmit} 
            onCancel={() => navigate(`/admin/students/${id}`)}
            isLoading={updateMutation.isPending}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default StudentEditPage;
