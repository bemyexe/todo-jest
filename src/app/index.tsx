import { useState } from 'react';

import { FilterTodos, Todo } from '../../@types';

import { Button, TodoFilters, TodoList, TodoPanel } from './components';

import './style.css';

const DEFAULT_TODOS: Todo[] = [
  { id: 1, title: 'Buy milk', completed: false },
  { id: 2, title: 'Walk the dog', completed: true },
  { id: 3, title: 'Do laundry', completed: false },
];

const DEFAULT_FILTER = 'all';

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>(DEFAULT_TODOS);

  const [filter, setFilter] = useState<FilterTodos>(DEFAULT_FILTER);

  const handleAddTodo = (title: Todo['title']) => {
    setTodos([...todos, { id: todos.length + 1, title, completed: false }]);
  };

  const handleToggleTodo = (id: Todo['id']) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleFilterChange = (newFilter: FilterTodos) => {
    setFilter(newFilter);
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo: Todo) => {
    const map = {
      all: true,
      active: !todo.completed,
      completed: todo.completed,
    };
    return map[filter];
  });

  const itemsLeft = todos.reduce(
    (acc, todo) => (todo.completed ? acc : acc + 1),
    0
  );

  const itemsCompletedLeft = todos.find((todo) => todo.completed === true);

  return (
    <div className="app-wrapper">
      <div className="app-content">
        <TodoPanel handleAddTodo={handleAddTodo} />
        <TodoFilters filter={filter} handleFilterChange={handleFilterChange} />
        <p>{itemsLeft} items left </p>
        {itemsCompletedLeft && (
          <Button
            variant="filled"
            onClick={handleClearCompleted}
            children="Clear completed"
          />
        )}
        <TodoList todos={filteredTodos} handleToggleTodo={handleToggleTodo} />
      </div>
    </div>
  );
};
