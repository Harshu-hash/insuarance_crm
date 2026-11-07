import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { usersApi } from '../services/users.api';

export const useUsersList = (filters) => {
  return useQuery({
    queryKey: ['users', 'list', filters],
    queryFn: () => usersApi.getUsers(filters),
  });
};

export const useUserDetails = (id) => {
  return useQuery({
    queryKey: ['users', 'detail', id],
    queryFn: () => usersApi.getUserById(id),
    enabled: !!id,
  });
};

export const useGeography = () => {
  return useQuery({
    queryKey: ['geography', 'options'],
    queryFn: usersApi.getGeographyOptions,
  });
};

export const useUserMutation = () => {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: (data) => usersApi.createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['users', 'list']);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => usersApi.updateUser(id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['users', 'list']);
      queryClient.invalidateQueries(['users', 'detail', data.id]);
    },
  });

  return {
    createUser: createMutation,
    updateUser: updateMutation,
  };
};
