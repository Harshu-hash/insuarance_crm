import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { studentsApi } from '../services/students.api';

export const useStudentsList = (params = {}) => {
  return useQuery({
    queryKey: ['students', params],
    queryFn: () => studentsApi.getStudents(params),
  });
};

export const useStudentDetails = (id) => {
  return useQuery({
    queryKey: ['student', id],
    queryFn: () => studentsApi.getStudentById(id),
    enabled: !!id,
  });
};

export const useStudentSummary = (id) => {
  return useQuery({
    queryKey: ['student-summary', id],
    queryFn: () => studentsApi.getStudentSummary(id),
    enabled: !!id,
  });
};

export const useUpdateStudent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }) => studentsApi.updateStudent(id, payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
      queryClient.invalidateQueries({ queryKey: ['student', variables.id] });
    },
  });
};
