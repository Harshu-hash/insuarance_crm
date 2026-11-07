import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import UserForm from '../components/UserForm/UserForm';
import { useUserMutation } from '../hooks/useUsers';
import { toast } from 'sonner';

const UserCreatePage = () => {
  const navigate = useNavigate();
  const { createUser } = useUserMutation();

  const handleCreate = async (data) => {
    try {
      await createUser.mutateAsync(data);
      toast.success('User created successfully');
      navigate('/admin/users');
    } catch (error) {
      toast.error('Failed to create user. Please try again.');
    }
  };

  return (
    <PageContainer maxWidth="max-w-4xl">
      <PageHeader
        title="Create New User"
        subtitle="Add a new platform user and assign them to a role and geography"
      />
      
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4 sm:p-8">
        <UserForm onSubmit={handleCreate} isLoading={createUser.isLoading} />
      </div>

      <div className="mt-8 text-center">
        <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
          Insurance CRM User Management System
        </p>
      </div>
    </PageContainer>
  );
};

export default UserCreatePage;
