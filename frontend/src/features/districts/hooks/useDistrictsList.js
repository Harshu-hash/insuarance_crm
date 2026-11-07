import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { districtsApi } from '../services/districts.api';
import { toast } from 'sonner';

export const useDistrictsList = (params = {}) => {
  return useQuery({
    queryKey: ['districts', params],
    queryFn: () => districtsApi.getDistricts(params),
  });
};

export const useToggleDistrictStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id) => districtsApi.toggleDistrictStatus(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['districts'] });
    },
  });
};

export const useManagerOptions = () => {
  return useQuery({
    queryKey: ['districts', 'managers'],
    queryFn: () => districtsApi.getManagerOptions(),
  });
};
