import React from 'react';
import { useTodoList } from './api';
import { TodoItem } from './TodoItem';

export const TodoList: React.VFC = () => {
  const { isLoading, data, isError } = useTodoList();

  if (isLoading) {
    return <div>Loading todos</div>;
  }

  if (isError) {
    return <div>Error while loading todos</div>;
  }

  if (!data || !data.length) {
    return <div>No todos</div>;
  }

  return (
    <div className="divide-gray-200 divide-y  ">
      {data.map((value) => (
        <TodoItem key={value.id} data={value} />
      ))}
    </div>
  );
};
