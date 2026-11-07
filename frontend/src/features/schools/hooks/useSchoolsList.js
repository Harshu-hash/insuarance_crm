import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { schoolsApi } from '../services/schools.api';

export const useSchoolsList = (params = {}) => {
  return useQuery({
    queryKey: ['schools', params],
    queryFn: () => schoolsApi.getSchools(params),
  });
};

export const useSchoolDetails = (id) => {
  return useQuery({
    queryKey: ['school', id],
    queryFn: () => schoolsApi.getSchoolById(id),
    enabled: !!id,
  });
};

export const useCreateSchool = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload) => schoolsApi.createSchool(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['schools'] });
    },
  });
};

export const useUpdateSchool = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }) => schoolsApi.updateSchool(id, payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['schools'] });
      queryClient.invalidateQueries({ queryKey: ['school', variables.id] });
    },
  });
};

export const useToggleSchoolStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => schoolsApi.toggleSchoolStatus(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['schools'] });
    },
  });
};
