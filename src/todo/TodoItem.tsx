import { Todo } from '../types/Todo';
import React from 'react';
import { useUpdateTodo } from './api';
import { TrashIcon } from '@heroicons/react/outline';

export const TodoItem: React.VFC<{ data: Todo }> = ({ data }) => {
  const updateTodo = useUpdateTodo(data.id);

  return (
    <div className="flex p-4">
      <div className="flex-1">{data.title}</div>

      <button
        type="button"
        onClick={() => updateTodo.mutate({})}
        className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        <TrashIcon className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
};
