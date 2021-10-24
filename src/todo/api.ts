import { Todo, TodoCreation, TodoEdit } from '../types/Todo';
import { axios } from '../lib/axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const getAllTodos = (): Promise<Todo[]> => {
  return axios.get('/todos');
};

export const useTodoList = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => getAllTodos(),
  });
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation<any, string, any>({
    mutationFn: async (newTodo: string) => {
      await axios.post('/todos', {
        title: newTodo,
        isDone: false,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries('todos');
    },
  });
};

export const useUpdateTodo = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation<any, any, any>({
    mutationFn: async () => {
      await axios.delete(`/todos/${id}`);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries('todos');
    },
  });
};
