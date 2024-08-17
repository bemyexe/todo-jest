import { ChangeEvent, ComponentProps, useState } from 'react';
import clsx from 'clsx';

import { Button, Input } from '../shared';

import './style.css';

interface TodoPanelProps extends ComponentProps<'form'> {
  handleAddTodo: (text: string) => void;
}

const DEFAULT_INPUT_STATE = '';

export const TodoPanel = ({ className, handleAddTodo }: TodoPanelProps) => {
  const [value, setValue] = useState(DEFAULT_INPUT_STATE);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      handleAddTodo(value);
      setValue(DEFAULT_INPUT_STATE);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form className={clsx('todo-panel', className)} onSubmit={handleSubmit}>
      <Input
        label="Add todo"
        value={value}
        onChange={handleChange}
        title="Напишите новое дело"
      />
      <Button
        variant="filled"
        type="submit"
        title="Добавить"
        children="Добавить"
      />
    </form>
  );
};
