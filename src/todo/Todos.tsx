import React from 'react';
import { TodoList } from './TodoList';
import { NewTodo } from './NewTodo';

export const Todos: React.VFC = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex items-centent justify-center">
      <div className="bg-white shadow-lg rounded-lg py-4 px-6 my-12 max-w-2xl w-full flex flex-col">
        <div className="flex items-center content-center justify-center">
          <div className="text-2xl">Todos</div>
        </div>
        <div className="flex-1 overflow-y-scroll">
          <TodoList />
        </div>
        <div>
          <NewTodo />
        </div>
      </div>
    </div>
  );
};
