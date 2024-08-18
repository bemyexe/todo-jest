export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type FilterTodos = 'all' | 'active' | 'completed';
