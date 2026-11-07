import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from '../../schemas/user.schema';
import Button from '../../../../components/ui/Button';
import BasicInfoSection from '../UserFormSections/BasicInfoSection';
import RoleAssignmentSection from '../UserFormSections/RoleAssignmentSection';
import GeographicScopeSection from '../UserFormSections/GeographicScopeSection';
import StatusSection from '../UserFormSections/StatusSection';
import SecuritySection from '../UserFormSections/SecuritySection';

const UserForm = ({ initialData, onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: initialData || {
      status: 'ACTIVE',
      approvalStatus: 'APPROVED',
      role: 'MANAGER',
    },
  });

  const selectedRole = watch('role');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-4xl">
      <BasicInfoSection register={register} errors={errors} />
      
      <RoleAssignmentSection register={register} errors={errors} />
      
      <GeographicScopeSection 
        register={register} 
        errors={errors} 
        selectedRole={selectedRole}
        watch={watch}
      />
      
      <StatusSection register={register} errors={errors} />
      
      <SecuritySection />

      <div className="flex items-center justify-end space-x-4 pt-6 border-t border-slate-100">
        <Button variant="outline" type="button" onClick={() => window.history.back()}>
          Cancel
        </Button>
        <Button variant="primary" type="submit" isLoading={isLoading}>
          {initialData ? 'Update User Account' : 'Create User Account'}
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
