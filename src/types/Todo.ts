export interface Todo {
  id: string;
  title: string;
  isDone: boolean;
}

export interface TodoCreation {
  title: string;
  isDone: boolean;
}

export type TodoEdit = Partial<TodoCreation>;
