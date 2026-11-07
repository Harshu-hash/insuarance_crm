import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import UserForm from '../components/UserForm/UserForm';
import { useUserDetails, useUserMutation } from '../hooks/useUsers';
import { toast } from 'sonner';

const UserEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: user, isLoading: isFetching } = useUserDetails(id);
  const { updateUser } = useUserMutation();

  const handleUpdate = async (data) => {
    try {
      await updateUser.mutateAsync({ id, data });
      toast.success('User updated successfully');
      navigate('/admin/users');
    } catch (error) {
      toast.error('Failed to update user. Please try again.');
    }
  };

  if (isFetching) return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-8 w-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
    </div>
  );

  return (
    <PageContainer maxWidth="max-w-4xl">
      <PageHeader
        title={`Edit User: ${user?.fullName}`}
        subtitle="Modify user credentials, role assignments, or account status"
      />
      
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4 sm:p-8">
        <UserForm 
          onSubmit={handleUpdate} 
          initialData={user} 
          isLoading={updateUser.isLoading} 
        />
      </div>
    </PageContainer>
  );
};

export default UserEditPage;
