import { ComponentProps } from 'react';

import { Todo } from '../../../../@types';

import { TodoItem } from './todo-item';

interface TodoListProps extends ComponentProps<'div'> {
  todos: Todo[];
  handleToggleTodo: (id: Todo['id']) => void;
}

export const TodoList = ({ todos, handleToggleTodo }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo: Todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} handleToggleTodo={handleToggleTodo} />
        </li>
      ))}
    </ul>
  );
};
