import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { districtsApi } from '../services/districts.api';
import { toast } from 'sonner';

export const useDistrictDetails = (id) => {
  return useQuery({
    queryKey: ['districts', id],
    queryFn: () => districtsApi.getDistrictById(id),
    enabled: !!id,
  });
};

export const useCreateDistrict = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (payload) => districtsApi.createDistrict(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['districts'] });
    },
  });
};

export const useUpdateDistrict = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, payload }) => districtsApi.updateDistrict(id, payload),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['districts'] });
      queryClient.invalidateQueries({ queryKey: ['districts', variables.id] });
    },
  });
};
