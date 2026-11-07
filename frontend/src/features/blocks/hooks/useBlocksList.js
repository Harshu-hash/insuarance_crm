import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { blocksApi } from '../services/blocks.api';
import { toast } from 'sonner';

export const useBlocksList = (params = {}) => {
  return useQuery({
    queryKey: ['blocks', params],
    queryFn: () => blocksApi.getBlocks(params),
  });
};

export const useToggleBlockStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id) => blocksApi.toggleBlockStatus(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blocks'] });
      toast.success('Block status updated');
    },
  });
};

export const useBlockManagerOptions = () => {
  return useQuery({
    queryKey: ['blocks', 'managers'],
    queryFn: () => blocksApi.getManagerOptions(),
  });
};
