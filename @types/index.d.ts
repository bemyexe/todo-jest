export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type FilterTodos = 'all' | 'active' | 'completed';
