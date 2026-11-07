import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { blocksApi } from '../services/blocks.api';
import { toast } from 'sonner';

export const useBlockDetails = (id) => {
  return useQuery({
    queryKey: ['blocks', id],
    queryFn: () => blocksApi.getBlockById(id),
    enabled: !!id,
  });
};

export const useCreateBlock = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (payload) => blocksApi.createBlock(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blocks'] });
    },
  });
};

export const useUpdateBlock = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, payload }) => blocksApi.updateBlock(id, payload),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['blocks'] });
      queryClient.invalidateQueries({ queryKey: ['blocks', variables.id] });
    },
  });
};
