import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { rolesApi } from '../services/roles.api';
import { toast } from 'sonner';

export const useRolesList = (filters = {}) => {
  return useQuery({
    queryKey: ['roles', filters],
    queryFn: () => rolesApi.getRoles(filters),
    placeholderData: (previousData) => previousData,
  });
};

export const useToggleRoleStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id) => rolesApi.toggleRoleStatus(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['roles'] });
      // In real app, sonner.success('Role status updated')
    },
    onError: (error) => {
      // In real app, sonner.error(error.message)
    }
  });
};

export const useCloneRole = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id) => rolesApi.cloneRole(id),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['roles'] });
      // sonner.success(`Role cloned: ${response.data.name}`)
    },
  });
};
