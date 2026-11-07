import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { rolesApi } from '../services/roles.api';

export const useRoleDetails = (id) => {
  return useQuery({
    queryKey: ['roles', id],
    queryFn: () => rolesApi.getRoleById(id),
    enabled: !!id,
  });
};

export const useRoleUsersPreview = (id) => {
  return useQuery({
    queryKey: ['roles', id, 'users'],
    queryFn: () => rolesApi.getRoleUsers(id),
    enabled: !!id,
  });
};

export const useCreateRole = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (payload) => rolesApi.createRole(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['roles'] });
    },
  });
};

export const useUpdateRole = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, payload }) => rolesApi.updateRole(id, payload),
    onSuccess: (response, variables) => {
      queryClient.invalidateQueries({ queryKey: ['roles'] });
      queryClient.invalidateQueries({ queryKey: ['roles', variables.id] });
    },
  });
};
