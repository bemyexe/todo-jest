import { ComponentProps } from 'react';
import clsx from 'clsx';

import { Todo } from '../../../../../@types';
import { Input } from '../../shared';

import './style.css';

interface TodoItemProps extends ComponentProps<'div'> {
  todo: Todo;
  handleToggleTodo: (id: Todo['id']) => void;
}

export const TodoItem = ({
  todo,
  className,
  handleToggleTodo,
}: TodoItemProps) => {
  return (
    <div className={clsx('todo-item-wrapper', className)}>
      <Input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggleTodo(todo.id)}
      />
      <div>{todo.title}</div>
    </div>
  );
};
