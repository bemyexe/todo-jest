import { fireEvent, render, screen } from '@testing-library/react';

import { App } from '../app';

describe('Handle Clear Completed', () => {
  it('should clear completed', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Write a new todo/i);
    const button = screen.getByTitle(/add/i);
    const clearButton = screen.getByTitle(/clear/i);

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);

    const todoItem = screen.getByText(/new task/i);
    expect(todoItem).toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(clearButton);

    const todos = screen.queryAllByRole('listitem');
    expect(todos).toHaveLength(0);
  });
});
