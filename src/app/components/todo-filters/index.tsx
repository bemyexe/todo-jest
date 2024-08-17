import { FilterTodos } from '../../../../@types';
import { Button } from '../shared';

import './style.css';

const FILTER_OPTIONS: FilterTodos[] = ['all', 'active', 'completed'];

interface TodoFiltersProps {
  filter: FilterTodos;
  handleFilterChange: (filter: FilterTodos) => void;
}

export const TodoFilters = ({
  filter,
  handleFilterChange,
}: TodoFiltersProps) => {
  return (
    <div className="todo-filters">
      {FILTER_OPTIONS.map((option) => (
        <Button
          key={option}
          variant={filter === option ? 'filled' : 'transparent'}
          onClick={() => handleFilterChange(option)}
          title={option}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};
